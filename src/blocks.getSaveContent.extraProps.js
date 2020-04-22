import { assign } from '@wordpress/Lodash';

const allowedBlocks = [ 'core/image', 'core/paragraph' ];

import isAOSDefaultValue from './is-aos-default-value';

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

	const { aosData, aosMirror, aosOnce } = attributes;

	if ( aosData ) {
		// Assign aos-mirror if not default value
		if ( ! isAOSDefaultValue( 'mirror', aosMirror ) ) {
			assign( extraProps, {
				'data-aos-mirror': aosMirror,
			} );
		}

		// Assign aos-mirror if not default value
		if ( ! isAOSDefaultValue( 'once', aosOnce ) ) {
			assign( extraProps, {
				'data-aos-once': aosOnce,
			} );
		}

		return assign( extraProps, { 'data-aos': aosData } );
	}

	return extraProps;

	// return lodash.assign(props, { style: { backgroundColor: "red" } });
}

wp.hooks.addFilter(
	'blocks.getSaveContent.extraProps',
	'aos/add-extraProps',
	addSaveProps
);
