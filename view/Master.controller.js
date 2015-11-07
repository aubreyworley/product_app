sap.ui.controller("ui5.view.Master", {
    onInit : function () {
    
    this.router = sap.ui.core.UIComponent.getRouterFor(this);
    
    var oModel = new sap.ui.model.json.JSONModel("model/views.json");
    this.getView().setModel(oModel,"views");
  
  },
  
  handleTilePress: function(evt){
       var oView = evt.getSource().getInfo();

    this.router.navTo(oView, {
      from: "Master"
    });
  
  }
});

