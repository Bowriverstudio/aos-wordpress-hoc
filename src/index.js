import { PanelBody } from "@wordpress/components";
import { createHigherOrderComponent } from "@wordpress/compose";
import { InspectorControls } from "@wordpress/editor";
import { Fragment } from "@wordpress/element";
import { addFilter } from "@wordpress/hooks";
import { __ } from "@wordpress/i18n";

const restrictedBlocks = ["core/paragraph"];

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

		if (!restrictedBlocks.includes(name)) {
			return <BlockEdit {...props} />;
		}

		return (
			<Fragment>
				<BlockEdit {...props} />
				<InspectorControls>
					<PanelBody title={__("AOS")} initialOpen={false}>
						<div>HELLO World</div>
					</PanelBody>
				</InspectorControls>
			</Fragment>
		);
	};
}, "withAdvancedControls");

addFilter("editor.BlockEdit", "aos/blockeditor", withAdvancedControls);
