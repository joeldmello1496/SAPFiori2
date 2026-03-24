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

        // // Get Session User  
        //  var userInfoService = sap.ushell.Container.getService("UserInfo");
        //  var userName = userInfoService.getUser().getFullName();
        // this.TENTUSERID = userInfoService.getUser().getId();
        // this.TENTUSERNAME = userInfoService.getUser().getFullName();
        // console.log("getId:", this.TENTUSERID);
        // console.log("User Name: " + this.TENTUSERNAME);
        // // Get Session User  

        // var sDetailViewName = "zfctplhrmsportal.view.Home"; 
        // this.getView().byId("sideNavigation").setVisible(true);

        //         // Destroy the current detail page
        //         var oDetailPage = this.oSplitApp.getDetailPages()[0];
        //         if (oDetailPage) {
        //           oDetailPage.destroy();
        //         }

        //         // Create and set the new detail page
        //         var oNewDetailPage = sap.ui.xmlview({
        //           viewName: sDetailViewName
        //         });

        //         this.oSplitApp.addDetailPage(oNewDetailPage);
        //         this.oSplitApp.toDetail(oNewDetailPage); 

        this.svgLogo = sap.ui.require.toUrl("zfctplhrmsportal/images/castaliaz.png");

        this.getView().setModel(new JSONModel({
          svgLogo: this.svgLogo
        }));

        // console.log("KK1", this.svgLogo);


      },

      onBeforeRendering: function () {
       
        // var model0 = this.getView().getModel("ZI_GE_MODULE_NAV_BINDING");
        //       var EntitySet = "/ZI_GE_MODULE_NAV";

        //           var that = this;
        //           model0.read(""+EntitySet+"", {
        //               success: function (oData, oRespons) {
        //                   // console.log(oData);
        //                   var aItems = oData.results;
        //                           for (var i = 0; i < 1; i++) {
        //                               // console.log(aItems[i].UserId)
        //                               var SAP_UUID = aItems[i].UserId;

        //                               var oModel05 = that.getView().getModel("ZI_GE_MODULE_NAV_BINDING");
        //                               oModel05.setHeaders({
        //                               "X-Requested-With": "X",
        //                               "Content-Type": "application/json"
        //                               });

        //                               oModel05.remove("/ZI_GE_MODULE_NAV", {
        //                               success: function(data) {
        //                                   // console.log("Deleted")
        //                               },
        //                               error: function(error) {
        //                                   console.error("Error updating header:", error);
        //                                   // console.log("Not Deleted")
        //                               }
        //                               });
        //                           }
        //               }
        //           });
        // var that = this;
        // var userInfoService = sap.ushell.Container.getService("UserInfo");
        // var userName = userInfoService.getUser().getFullName();
        // this.TENTUSERID = userInfoService.getUser().getId();
        // this.TENTUSERNAME = userInfoService.getUser().getFullName();
        // console.log("getId:", this.TENTUSERID);

        // var RLSMOdel = this.getView().getModel("ZF_RGP_APPROVE_AUTH_SRV");
        // // var RLSMOdel = this.getView().getModel("ZF_RGP_APPROVAL_SRV");

        // var that = this
        // // var R1 = new sap.ui.model.Filter("User", sap.ui.model.FilterOperator.EQ,"CTPLMM")
        // let R1 = new sap.ui.model.Filter("User", sap.ui.model.FilterOperator.EQ, this.TENTUSERID)
        // var R2 = new sap.ui.model.Filter("Role", sap.ui.model.FilterOperator.EQ, "ZF_GE_RGP_APPROVAL_ROLE")
        // // var R2 = new sap.ui.model.Filter("Role", sap.ui.model.FilterOperator.EQ, "Z_FIORI_FOUNDATION_ADMIN")
        // RLSMOdel.read("/AdminPanelSet", {
        //   // RLSMOdel.read("/AdminPanelSet('ZF_GE_RGP_APPROVAL_ROLE')", {
        //   filters: [R1, R2],
        //   success: function (oData) {
        
        //     console.log("Ae", oData);
        //     if (oData.results[0].Flag === "X") {
        //       //   console.log("Tenant user found:", tenantUser);
        //       that.AdminPanelAuth = new sap.ui.model.json.JSONModel({
        //         Samples: { Role: true }
        //       });
        //       that.getView().setModel(that.AdminPanelAuth, "AdminPanelAuth");
        //       console.log("that.AdminPanelAuth:", that.AdminPanelAuth);
        //       sap.ui.core.BusyIndicator.hide();
        //       //resolve(oData.results);

        //       // You can handle the case where the tenant user is found here
        //     } else {
        //       console.log("Tenant user not found");
        //       that.AdminPanelAuth = new sap.ui.model.json.JSONModel({
        //         Samples: { Role: false }
        //       });
        //       that.getView().setModel(that.AdminPanelAuth, "AdminPanelAuth");
        //       console.log("that.AdminPanelAuth:", that.AdminPanelAuth);
        //       sap.ui.core.BusyIndicator.hide();
        //       // resolve(oData.results);
        //     }
        //     sap.ui.core.BusyIndicator.hide();

        //   },
        //   error: function (error) {
        //     console.log(error, "error");

        //     sap.ui.core.BusyIndicator.hide();
        //   }

        // });
        
        // sap.ui.core.BusyIndicator.show();
        // let ModelAdmin = this.getView().getModel("ZGE_BUSINESS_ROLE_SRVB");
        // console.log("ModelAdmin", ModelAdmin);
        // let model002 = this.getView().getModel("ZI_GE_AUSER_TABL_BINDING");
        // let model003 = this.getView().getModel("ZI_GE_MODULE_NAV_BINDING");
        // let model004 = this.getView().getModel("ZI_GE_TRANS_APP_BINDING");
        // let model005 = this.getView().getModel("ZI_GE_MAN_FLD_ASGN_BINDING");

        // var sDetailViewName = "zfctplhrmsportal.view.Home";
        // this.getView().byId("sideNavigation").setVisible(true);

        // // Destroy the current detail page
        // var oDetailPage = this.oSplitApp.getDetailPages()[0];
        // if (oDetailPage) {
        //   oDetailPage.destroy();
        // }

        // // Create and set the new detail page
        // var oNewDetailPage = sap.ui.xmlview({
        //   viewName: sDetailViewName
        // });

        // this.oSplitApp.addDetailPage(oNewDetailPage);
        // this.oSplitApp.toDetail(oNewDetailPage);

        // // console.log("this.TENTUSERIDthis.TENTUSERID", this.TENTUSERID)

        // // For Admin Panel Visible True/False
        // let modelRGPNRGP = this.getView().getModel("ZGE_RGP_NRGP_HEAD_SRVB");
        // let FilterID = new sap.ui.model.Filter("UserID", sap.ui.model.FilterOperator.EQ, this.TENTUSERID)
        // var that = this;
        // ModelAdmin.read("/ZGE_BUSINESS_PARTNER_ROLE", {
        //   filters: [FilterID],
        //   success: function (oData, oRespons) {
        //     // console.log("oData000000", oData);
        //     let oDataModule1 = oData.results;

        //     if (oDataModule1.length > 0) {
        //       for (let k = 0; k < oDataModule1.length; k++) {
        //         if (oDataModule1[k].UserID === that.TENTUSERID) {
        //           that.getView().byId("id_adminpanel").setVisible(true);
        //           break;
        //         } else {
        //           that.getView().byId("id_adminpanel").setVisible(true);
        //         }
        //       }
        //     } else {
        //       that.getView().byId("id_adminpanel").setVisible(true);
        //     }

        //   }
        // });


        // let FilterData = new sap.ui.model.Filter("UserId", sap.ui.model.FilterOperator.EQ, this.TENTUSERID)

        // model002.read("/ZI_GE_AUSER_TABL", {
        //   filters: [FilterData],
        //   success: function (oData, oRespons) {
        //     // // console.log(oData);
        //     let aItems = oData.results;

        //     if (aItems.length > 0 && aItems[0].Status === "active") {

        //       var sDetailViewName = "zfctplhrmsportal.view.Home";
        //       that.getView().byId("sideNavigation").setVisible(true);

        //       // Destroy the current detail page
        //       var oDetailPage = that.oSplitApp.getDetailPages()[0];
        //       if (oDetailPage) {
        //         oDetailPage.destroy();
        //       }

        //       // Create and set the new detail page
        //       var oNewDetailPage = sap.ui.xmlview({
        //         viewName: sDetailViewName
        //       });

        //       that.oSplitApp.addDetailPage(oNewDetailPage);
        //       that.oSplitApp.toDetail(oNewDetailPage);

        //       // In Below Module list JsonModel
        //       model003.read("/ZI_GE_MODULE_NAV", {
        //         filters: [FilterData],
        //         success: function (oDataModule1, oRespons) {
        //           let oDataModule = oDataModule1.results;
        //           // console.log("oDataModule:", oDataModule);

        //           for (let k = 0; k < oDataModule.length; k++) {

        //             try {
        //               // // console.log("oDataModule[k].ScreenId:", oDataModule[k].ScreenId);
        //               // console.log("oDataModule[k].Status:", oDataModule[k].Status);
        //               that.getView().byId("" + oDataModule[k].ScreenId + "").setVisible(JSON.parse(oDataModule[k].Status));
        //             }
        //             catch (err) {
        //               // // console.log("err:", err);
        //               // continue;
        //             }

        //           }

        //           // In Below Module list JsonModel
        //           model004.read("/ZI_GE_TRANS_APP", {
        //             filters: [FilterData],
        //             success: function (oDataModule2, oRespons) {
        //               let oDataModule02 = oDataModule2.results;
        //               // // console.log("oDataModule02:", oDataModule02);

        //               try {
        //                 // In Below Model for Module List 
        //                 that.JSonModelTransApp = new sap.ui.model.json.JSONModel({
        //                   Datas: oDataModule02
        //                 });
        //                 that.getView().setModel(that.JSonModelTransApp, "JSonModelTransApp");
        //                 // // console.log("that.JSonModelTransApp:", that.JSonModelTransApp);
        //               }
        //               catch (err) {
        //                 // // console.log("err:", err);
        //                 // continue;
        //               }
        //               sap.ui.core.BusyIndicator.hide();
        //             },
        //             error: function (error) {
        //               // // console.log("Error", error);
        //               sap.ui.core.BusyIndicator.hide();
        //             }
        //           });
        //           // sap.ui.core.BusyIndicator.hide();
        //         },
        //         error: function (error) {
        //           // // console.log("Error", error);
        //           sap.ui.core.BusyIndicator.hide();
        //         }
        //       });

        //     } else {
        //       sap.ui.core.BusyIndicator.hide();
        //       // sap.m.MessageBox.show( 
        //       //   "You don't have authorozation. Please check with your admin.", {
        //       //     icon: sap.m.MessageBox.Icon.INFORMATION,
        //       //     title: "Authorization Error...",
        //       //   }
        //       // );
        //       // var sDetailViewName = "zfctplhrmsportal.view.Error"; 



        //     }

        //   }
        // });

        // ZF_GE_RGP_APPROVAL_ROLE

       
        //   }
        // });
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