const config = require('config');

module.exports = () => {
    // Register our tawk widget
    const tawkWidget = {
        tawk_widget: {
            setting_component:
                'tawk_widget/components/widget/TawkWidgetSetting.jsx',
            component:
                'tawk_widget/components/widget/TawkWidget.jsx',
            name: 'Tawk widget',
            description: 'Instant Tawk messaging widgets',
            default_settings: {
                
            },
            enabled: true
        }
    };
    config.util.setModuleDefaults('widgets', tawkWidget);
}