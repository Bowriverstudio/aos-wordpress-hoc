const { assign } = lodash;

import { PanelBody, SelectControl, ToggleControl } from "@wordpress/components";
import { createHigherOrderComponent } from "@wordpress/compose";
import { InspectorControls } from "@wordpress/editor";
import { Fragment } from "@wordpress/element";
import { addFilter } from "@wordpress/hooks";
import { __ } from "@wordpress/i18n";

const allowedBlocks = ["core/image", "core/paragraph"];

import { spacingControlOptions } from "./aos-data-options";
// import { getAOSDefaultValue } from "./aos-default";
import getAOSDefaultValue from "./get-aos-default-value";
import isAOSDefaultValue from "./is-aos-default-value";
import options from "./options";

/**
 * Add custom attribute for mobile visibility.
 *
 * @param {Object} settings Settings for the block.
 *
 * @return {Object} settings Modified settings.
 */
function addAttributes(settings) {
	//add allowedBlocks restriction
	if (allowedBlocks.includes(settings.name)) {
		console.log(getAOSDefaultValue("mirror"));
		// Use Lodash's assign to gracefully handle if attributes are undefined
		settings.attributes = assign(settings.attributes, {
			aosData: {
				type: "string",
				default: ""
			},
			aosMirror: {
				type: "boolean",
				default: getAOSDefaultValue("mirror")
			}
		});
	}

	return settings;
}

addFilter("blocks.registerBlockType", "aos/custom-attributes", addAttributes);

/**
 * Add mobile visibility controls on Advanced Block Panel.
 *
 * @param {function} BlockEdit Block edit component.
 *
 * @return {function} BlockEdit Modified block edit component.
 */
const withAdvancedControls = createHigherOrderComponent(BlockEdit => {
	return props => {
		const { name, attributes, setAttributes, isSelected } = props;
		const { aosData, aosMirror } = attributes;

		if (!allowedBlocks.includes(name)) {
			return <BlockEdit {...props} />;
		}

		return (
			<Fragment>
				<BlockEdit {...props} />
				<InspectorControls>
					<PanelBody title={__("AOS")} initialOpen={true}>
						<SelectControl
							label={__("aos-data")}
							value={aosData}
							options={options.data}
							onChange={selectedAOSData => {
								setAttributes({
									aosData: selectedAOSData
								});
							}}
						/>
						<ToggleControl
							label={__("aos-mirror")}
							checked={aosMirror}
							help={__(
								"whether elements should animate out while scrolling past them"
							)}
							onChange={selectedAOSMirror => {
								setAttributes({
									aosMirror: selectedAOSMirror
								});
							}}
						/>
					</PanelBody>
				</InspectorControls>
			</Fragment>
		);
	};
}, "withAdvancedControls");

addFilter("editor.BlockEdit", "aos/blockeditor", withAdvancedControls);

/**
 * Override props assigned to save component to inject AOS Data.
 * This is only applied if the block's save result is an
 * element and not a markup string.
 *
 * @param {Object} extraProps Additional props applied to save element.
 * @param {Object} blockType  Block type.
 * @param {Object} attributes Current block attributes.
 *
 * @return {Object} Filtered props applied to save element.
 */
function addSaveProps(extraProps, blockType, attributes) {
	if (!allowedBlocks.includes(blockType.name)) {
		return extraProps;
	}

	const { aosData, aosMirror } = attributes;

	if (aosData) {
		// Assign aos-mirror if not default value
		if (!isAOSDefaultValue("mirror", aosMirror)) {
			lodash.assign(extraProps, { "data-aos-mirror": aosMirror });
		}

		return lodash.assign(extraProps, { "data-aos": aosData });

		console.log(aosData);

		console.log(extraProps);
		console.log("Name");
		console.log(blockType.name);
		console.log(attributes);
	}

	return extraProps;

	// return lodash.assign(props, { style: { backgroundColor: "red" } });
}

wp.hooks.addFilter(
	"blocks.getSaveContent.extraProps",
	"aos/add-extraProps",
	addSaveProps
);

// addFilter("blocks.getSaveElement", "uikit3/image", addLightboxAttribute);
