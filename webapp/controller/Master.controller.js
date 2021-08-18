sap.ui.define([
    "numen/talentos/app001/controller/BaseController",
    "sap/ui/core/routing/History",
    "sap/m/MessageBox",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"

],	function (BaseController,History,MessageBox,MessageToast) {
        "use strict";

        return BaseController.extend("numen.talentos.app001.controller.Master", {

            onInit: function () {
            var oRouter = this.getRouter();
            oRouter.getRoute("RouteCompanyDetail").attachMatched(this._onRouteMatched, this);
        },

        nomeFuncaoBotaoNovo: function (oEvent) { 

 

                if (!this.oDialogEditCompany) { 

 

                    this.oDialogEditCompany = Fragment.load({ 

                        id: this.getView().getId(), 

                        name: "numen.talentos.ztlnt2021XXX.view.NomeDoPopup", //Alterar XXX pelo seu identificador 

                        controller: this 

                    }).then(function (oDialog) { 

                        this.getView().addDependent(oDialog); 

                        oDialog.addStyleClass(this.getOwnerComponent().getContentDensityClass()); 

                        this.oDialogEditCompany = oDialog; 

                        this.oDialogEditCompany.open(); 

                    }.bind(this)); 

 

                } else { 

                    this.oDialogEditCompany.open(); 

                } 

 

            },

onCancelNewCompany: function (oEvent) { 

            var oModel = this.getView().getModel(); 

            oModel.resetChanges(); 

             

            this.oDialogEditCompany.close(); 

        } 

});
});