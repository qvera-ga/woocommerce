/**
 * External dependencies
 */
import type { InnerBlockTemplate } from '@wordpress/blocks';

export const INNER_BLOCKS_TEMPLATE: InnerBlockTemplate[] = [
	[ 'woocommerce/product-stock-indicator' ],
	[
		'woocommerce/product-button',
		{
			textAlign: 'center',
			fontSize: 'small',
		},
	],
];
