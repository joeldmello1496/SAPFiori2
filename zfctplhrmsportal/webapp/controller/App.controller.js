sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/IconPool",
    "sap/ui/model/json/JSONModel"
  ],
  function (BaseController, IconPool, JSONModel) {
    "use strict";

    return BaseController.extend("zfctplhrmsportal.controller.App", {
      onInit: function () {

        this.NavBarVal = "0";
        this.oSplitApp = this.getView().byId("splitApp");

        var b = [];
        var c = {};
        //Fiori Theme font family and URI
        var t = {
          fontFamily: "SAP-icons-TNT",
          fontURI: sap.ui.require.toUrl("sap/tnt/themes/base/fonts/")
        };
        //Registering to the icon pool
        IconPool.registerFont(t);
        b.push(IconPool.fontLoaded("SAP-icons-TNT"));
        c["SAP-icons-TNT"] = t;
        //SAP Business Suite Theme font family and URI
        var B = {
          fontFamily: "BusinessSuiteInAppSymbols",
          fontURI: sap.ui.require.toUrl("sap/ushell/themes/base/fonts/")
        };
        //Registering to the icon pool
        IconPool.registerFont(B);
        b.push(IconPool.fontLoaded("BusinessSuiteInAppSymbols"));
        c["BusinessSuiteInAppSymbols"] = B;


        // In Below Model for Module List 
        this.JSonModelTransApp = new sap.ui.model.json.JSONModel({
          Datas: []
        });
        this.getView().setModel(this.JSonModelTransApp, "JSonModelTransApp");

        this.svgLogo = sap.ui.require.toUrl("zfctplhrmsportal/images/castaliaz.png");

        this.getView().setModel(new JSONModel({
          svgLogo: this.svgLogo
        }));

        // console.log("KK1", this.svgLogo);


      },

      onBeforeRendering: function () {
       
      },


      onAfterRendering: function () {
        var oSplitApp = this.getView().byId("splitApp");
        oSplitApp.getAggregation("_navMaster").addStyleClass("masterStyleAfter");
      },

      OnClick: function () {
        var oSideNavigation = this.byId("sideNavigation");
        var bExpanded = oSideNavigation.getExpanded();

        // // console.log("oSideNavigation", oSideNavigation)
        // // console.log("bExpanded", bExpanded)

        if (bExpanded === true) {
          var oSplitApp = this.getView().byId("splitApp");
          oSplitApp.getAggregation("_navMaster").removeStyleClass("masterStyleAfter");
          oSplitApp.getAggregation("_navMaster").addStyleClass("masterStyle");
          this.getView().byId("SideBarHeaderLogo").setVisible(false);
          this.getView().byId("SideBarHeaderCName").setVisible(false);
        }

        else if (bExpanded === false) {
          var oSplitApp = this.getView().byId("splitApp");
          oSplitApp.getAggregation("_navMaster").addStyleClass("masterStyleAfter");
          oSplitApp.getAggregation("_navMaster").removeStyleClass("masterStyle");
          this.getView().byId("SideBarHeaderLogo").setVisible(true);
          this.getView().byId("SideBarHeaderCName").setVisible(true);
        }

        oSideNavigation.setExpanded(!bExpanded);
      },

      OnNavBtn: function (oEvent) {
        var oSelectedItem = oEvent.getParameter("item");
        var sKey = oSelectedItem.getKey();
        var sText = oSelectedItem.getText();

        // // Now, you can use sKey and sText as needed
        // // console.log("Selected Key:", sKey);
        // // console.log("Selected Text:", sText);

        // var sItemTitle = oEvent.getSource().getTitle();
        var sDetailViewName = "zfctplhrmsportal.view." + sKey;

        // Destroy the current detail page
        var oDetailPage = this.oSplitApp.getDetailPages()[0];
        if (oDetailPage) {
          oDetailPage.destroy();
        }

        // Create and set the new detail page
        var oNewDetailPage = sap.ui.xmlview({
          viewName: sDetailViewName
        });

        this.oSplitApp.addDetailPage(oNewDetailPage);
        this.oSplitApp.toDetail(oNewDetailPage);
      },

      OnExpandItems: function (oEvent) {

        if (oEvent.getParameter("item").getExpanded() === false) {
          oEvent.getParameter("item").setExpanded(true);
        }
        else {
          oEvent.getParameter("item").setExpanded(false);
        }

      },

    });
  }
);