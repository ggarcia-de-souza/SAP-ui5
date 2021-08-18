sap.ui.define([], function () {

        "use strict";
        return {
            statusFltime: function (fltime) {

                if ( fltime < 300){
                    return "sap-icon://message-success";
                }

                if ( fltime < 600){
                    return "sap-icon://alert";
                }

                if ( fltime > 600){
                    return "sap-icon://error";
                }
            }
        };
});