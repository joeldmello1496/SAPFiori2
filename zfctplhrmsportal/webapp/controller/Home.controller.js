sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/Device",
    "sap/m/MessageBox",
    "sap/m/MessageToast",
    'sap/ui/core/Fragment',
    'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator',
    "sap/ui/core/date/UI5Date",
    'sap/ui/model/json/JSONModel',
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Device, MessageBox, MessageToast, Fragment, Filter, FilterOperator, UI5Date, JSONModel) {
        "use strict";

        return Controller.extend("zfctplhrmsportal.controller.Home", {
            onInit: function () {
                console.log("Home loaded");
                this.byId("myImage").setSrc(sap.ui.require.toUrl("zfctplhrmsportal/images/castaliaz.png"));
            }
        });
    });
