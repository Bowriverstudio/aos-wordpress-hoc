import { PanelBody, SelectControl, ToggleControl } from '@wordpress/components';
import { createHigherOrderComponent } from '@wordpress/compose';
import { InspectorControls } from '@wordpress/editor';
import { Fragment } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

const allowedBlocks = [ 'core/image', 'core/paragraph' ];

import options from './options';
/**
 * Add mobile visibility controls on Advanced Block Panel.
 *
 * @param {Function} BlockEdit Block edit component.
 *
 * @return {Function} BlockEdit Modified block edit component.
 */
export const withAdvancedControls = createHigherOrderComponent(
	( BlockEdit ) => {
		return ( props ) => {
			const { name, attributes, setAttributes } = props;
			const { aosData, aosMirror, aosOnce } = attributes;

			console.log( 'ALOOWED BLOCKS' );
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
	},
	'withAdvancedControls'
);
