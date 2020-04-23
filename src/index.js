import { assign } from 'lodash';
import { PanelBody, SelectControl, ToggleControl } from '@wordpress/components';
import { createHigherOrderComponent } from '@wordpress/compose';
import { InspectorControls } from '@wordpress/editor';
import { Fragment } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

const allowedBlocks = [ 'core/image', 'core/paragraph' ];
import options from './options';

import aosAttributes from './attributes.json';

/**
 * Add custom attribute for mobile visibility.
 *
 * @param {Object} settings Settings for the block.
 *
 * @return {Object} settings Modified settings.
 */
function addAttributes( settings ) {
	//add allowedBlocks restriction
	if ( allowedBlocks.includes( settings.name ) ) {
		// Use Lodash's assign to gracefully handle if attributes are undefined
		settings.attributes = assign( settings.attributes, aosAttributes );
	}

	return settings;
}

addFilter( 'blocks.registerBlockType', 'aos/custom-attributes', addAttributes );

/**
 * Add mobile visibility controls on Advanced Block Panel.
 *
 * @param {Function} BlockEdit Block edit component.
 *
 * @return {Function} BlockEdit Modified block edit component.
 */
const withAdvancedControls = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
		const { name, attributes, setAttributes } = props;
		const { aosData, aosMirror, aosOnce } = attributes;

		if ( ! allowedBlocks.includes( name ) ) {
			return <BlockEdit { ...props } />;
		}

		return (
			<Fragment>
				<BlockEdit { ...props } />
				<InspectorControls>
					<PanelBody title={ __( 'AOS' ) } initialOpen={ true }>
						<SelectControl
							label={ __( 'aos-data' ) }
							value={ aosData }
							options={ options.data }
							onChange={ ( selectedAOSData ) => {
								setAttributes( {
									aosData: selectedAOSData,
								} );
							} }
						/>
						<ToggleControl
							label={ __( 'aos-mirror' ) }
							checked={ aosMirror }
							help={ __(
								'whether elements should animate out while scrolling past them'
							) }
							onChange={ ( selectedAOSMirror ) => {
								setAttributes( {
									aosMirror: selectedAOSMirror,
								} );
							} }
						/>

						<ToggleControl
							label={ __( 'aos-once' ) }
							checked={ aosOnce }
							help={ __(
								'whether animation should happen only once - while scrolling down'
							) }
							onChange={ ( selected ) => {
								setAttributes( {
									aosOnce: selected,
								} );
							} }
						/>
					</PanelBody>
				</InspectorControls>
			</Fragment>
		);
	};
}, 'withAdvancedControls' );

addFilter( 'editor.BlockEdit', 'aos/blockeditor', withAdvancedControls );

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
function addSaveProps( extraProps, blockType, attributes ) {
	if ( ! allowedBlocks.includes( blockType.name ) ) {
		return extraProps;
	}

	const { aosData } = attributes;

	if ( aosData ) {
		// Loop through all AOS attributes
		// if they are different than the default value save them.
		Object.entries( aosAttributes ).forEach( ( entry ) => {
			const key = entry[ 0 ];
			if ( attributes[ key ] !== aosAttributes[ key ].default ) {
				const aosAttribute = entry[ 1 ][ 'aos-attribute' ];

				assign( extraProps, {
					[ aosAttribute ]: attributes[ key ],
				} );
			}
		} );
	}

	return extraProps;
}

wp.hooks.addFilter(
	'blocks.getSaveContent.extraProps',
	'aos/add-extraProps',
	addSaveProps
);
