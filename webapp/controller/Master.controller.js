sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter, FilterOperator) {
        "use strict";

        return Controller.extend("People.odatapeople.controller.Master", {
            onInit: function () {

            },
            itemPress: function (oEvent) {
                var Router = sap.ui.core.UIComponent.getRouterFor(this);
                var selectedUser = oEvent.getSource().getBindingContext().getProperty("UserName");
                Router.navTo("detail", {UserName:selectedUser} );
                
            },
            
onFilterProducts: function (oEvent) {

    var aFilter = [];
    var sQuery = oEvent.getParameter("query");
    if (sQuery) {
        aFilter.push(new Filter(
            "UserName", FilterOperator.Contains, sQuery));
    }
    var oList = this.getView().byId("list1");
        var oBinding = oList.getBinding("items");
        oBinding.filter(aFilter);
    }
    
        });
    });
