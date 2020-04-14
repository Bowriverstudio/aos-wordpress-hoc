// import { assign } from "@wordpress/lodash";
const { assign } = lodash;

import { PanelBody, SelectControl } from "@wordpress/components";
import { createHigherOrderComponent } from "@wordpress/compose";
import { InspectorControls } from "@wordpress/editor";
import { Fragment } from "@wordpress/element";
import { addFilter } from "@wordpress/hooks";
import { __ } from "@wordpress/i18n";

const allowedBlocks = ["core/paragraph"];

import { spacingControlOptions } from "./aos-data-options";

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
		// Use Lodash's assign to gracefully handle if attributes are undefined
		settings.attributes = assign(settings.attributes, {
			aosData: {
				type: "string",
				default: ""
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
		const { aosData } = attributes;

		if (!allowedBlocks.includes(name)) {
			return <BlockEdit {...props} />;
		}

		return (
			<Fragment>
				<BlockEdit {...props} />
				<InspectorControls>
					<PanelBody title={__("AOS")} initialOpen={false}>
						<SelectControl
							label={__("aos-data")}
							value={aosData}
							options={spacingControlOptions}
							onChange={selectedAOSData => {
								setAttributes({
									aosData: selectedAOSData
								});
							}}
							// onChange={() => console.log(this)}
						/>
					</PanelBody>
				</InspectorControls>
			</Fragment>
		);
	};
}, "withAdvancedControls");

addFilter("editor.BlockEdit", "aos/blockeditor", withAdvancedControls);

/**
 * Override props assigned to save component to inject anchor ID, if block
 * supports anchor. This is only applied if the block's save result is an
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

	const { aosData } = attributes;

	if (aosData) {
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
	"my-plugin/add-background-color-style",
	addSaveProps
);

// addFilter("blocks.getSaveElement", "uikit3/image", addLightboxAttribute);
