import { addFilter } from '@wordpress/hooks';

import { assign } from '@wordpress/Lodash';
const allowedBlocks = [ 'core/image', 'core/paragraph' ];

import getAOSDefaultValue from './get-aos-default-value';
import defaultValue from './defaultValue';

/**
 * Add custom attribute for mobile visibility.
 *
 * @param {Object} settings Settings for the block.
 *
 * @return {Object} settings Modified settings.
 */
export const addAttributes = ( settings ) => {
	// function addAttributes( settings ) {
	//add allowedBlocks restriction
	if ( allowedBlocks.includes( settings.name ) ) {
		// Use Lodash's assign to gracefully handle if attributes are undefined
		settings.attributes = assign( settings.attributes, {
			aosData: {
				type: 'string',
				default: '',
			},
			aosMirror: {
				type: 'boolean',
				default: getAOSDefaultValue( 'mirror' ),
			},
			aosOnce: {
				type: 'boolean',
				default: defaultValue.once,
			},
		} );
	}

	return settings;
};

addFilter( 'blocks.registerBlockType', 'aos/custom-attributes', addAttributes );
