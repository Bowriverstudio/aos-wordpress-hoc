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
