// import { assign } from "@wordpress/lodash";
const { assign } = lodash;

import { PanelBody, SelectControl } from "@wordpress/components";
import { createHigherOrderComponent } from "@wordpress/compose";
import { InspectorControls } from "@wordpress/editor";
import { Fragment } from "@wordpress/element";
import { addFilter } from "@wordpress/hooks";
import { __ } from "@wordpress/i18n";

const allowedBlocks = ["core/paragraph"];

// Available spacing control options
const spacingControlOptions = [
	{
		label: __("None"),
		value: ""
	},
	{
		label: __("Small"),
		value: "small"
	},
	{
		label: __("Medium"),
		value: "medium"
	},
	{
		label: __("Large"),
		value: "large"
	}
];

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
