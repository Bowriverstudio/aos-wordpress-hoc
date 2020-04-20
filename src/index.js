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

import "./blocks.registerBlockType";
import "./blocks.getSaveContent.extraProps";
import "./editor.BlockEdit";
// addFilter("blocks.getSaveElement", "uikit3/image", addLightboxAttribute);
