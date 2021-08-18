var config = {
    config: {
        mixins: {
            'Magento_ConfigurableProduct/js/configurable': {
                'MagentoTools_DynamicSKU/js/model/skuswitch': true
            },
			'Magento_Swatches/js/swatch-renderer': {
                'MagentoTools_DynamicSKU/js/model/swatch-skuswitch': true
            }
        }
    }
};
