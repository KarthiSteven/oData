sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("People.odatapeople.controller.Detail", {
            onInit: function () {
                var Router = sap.ui.core.UIComponent.getRouterFor(this);
                Router.getRoute("detail").attachMatched(this._onObjectMatched, this);

            },

            _onObjectMatched: function (oEvent) {

                var Arg = oEvent.getParameter("arguments");
                console.log(Arg);
                
                var oView = this.getView();
                oView.bindElement({
                  path : `/People('${Arg.UserName}')`,
                  event:{
                      dataRequested:function () {
                          oView.setBusy(true)
                      },
                      dataReceived:function () {
                          oView.setBusy(false)
                      }
                  }


                })
                
            },
            onBack: function () {

                var Router = sap.ui.core.UIComponent.getRouterFor(this);
                Router.navTo("home");
                
            }
        });
    });
