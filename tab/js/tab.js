jQuery(document).ready(function() {
    jQuery.fn.easyResponsiveTabs ? (jQuery("#top-tab").easyResponsiveTabs({
        type: "tab-top"
    }), jQuery("#bottom-tab").easyResponsiveTabs({
        type: "tab-bottom"
    }), jQuery("#left-tab").easyResponsiveTabs({
        type: "tab-left"
    }), jQuery("#right-tab").easyResponsiveTabs({
        type: "tab-right"
    }), jQuery("#accordion").easyResponsiveTabs({
        type: "accordion"
    })) : console.log("jQuery easyResponsiveTabs plugin not found")
});