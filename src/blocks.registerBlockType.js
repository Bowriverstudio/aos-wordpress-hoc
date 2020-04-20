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
