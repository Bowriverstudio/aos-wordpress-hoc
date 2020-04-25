import { assign } from 'lodash';
import {
	PanelBody,
	SelectControl,
	TextControl,
	ToggleControl,
} from '@wordpress/components';
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
	console.log( 'ADD addAttributes' );
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
		const { name, attributes, setAttributes, isSelected } = props;

		if ( ! allowedBlocks.includes( name ) || ! isSelected ) {
			return <BlockEdit { ...props } />;
		}

		console.log( props );
		const {
			aosData,
			aosOffset,
			aosDelay,
			aosDuration,
			aosEasing,
			aosMirror,
			aosOnce,
			aosAnchorPlacement,
		} = attributes;
		console.log( attributes );

		return (
			<Fragment>
				<BlockEdit { ...props } />
				<InspectorControls>
					<PanelBody title={ __( 'AOS' ) } initialOpen={ true }>
						<SelectControl
							label={ __( 'aos-data' ) }
							value={ aosData }
							options={ options.data }
							onChange={ ( aosData ) => {
								setAttributes( {
									aosData,
								} );
							} }
						/>
						<TextControl
							label={ __( 'aos-data-offset' ) }
							value={ aosOffset }
							onChange={ ( selectedAOSOffset ) =>
								setAttributes( {
									aosOffset: selectedAOSOffset,
								} )
							}
							help={ __(
								' offset (in px) from the original trigger point'
							) }
							type="number"
						/>
						<TextControl
							label={ __( 'aos-data-delay' ) }
							value={ aosDelay }
							onChange={ ( aosDelay ) =>
								setAttributes( {
									aosDelay,
								} )
							}
							help={ __(
								'values from 0 to 3000, with step 50ms'
							) }
							type="number"
							step="50"
							min="0"
							max="3000"
						/>
						<TextControl
							label={ __( 'aos-data-duration' ) }
							value={ aosDuration }
							onChange={ ( aosDuration ) =>
								setAttributes( {
									aosDuration,
								} )
							}
							help={ __(
								'values from 0 to 3000, with step 50ms'
							) }
							type="number"
							step="50"
							min="0"
							max="3000"
						/>
						<SelectControl
							label={ __( 'aos-easing' ) }
							help={ __( 'easing for AOS animations' ) }
							value={ aosEasing }
							options={ options.easing }
							onChange={ ( aosEasing ) => {
								setAttributes( {
									aosEasing,
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

						<SelectControl
							label={ __( 'aos-anchor-placement' ) }
							help={ __(
								'defines which position of the element regarding to window should trigger the animation'
							) }
							value={ aosAnchorPlacement }
							options={ options.anchorPlacement }
							onChange={ ( aosAnchorPlacement ) => {
								setAttributes( {
									aosAnchorPlacement,
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
			// console.log( key );
			// console.log( attributes[ key ] );
			// console.log( aosAttributes[ key ].default );
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
