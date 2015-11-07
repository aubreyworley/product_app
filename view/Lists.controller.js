sap.ui.controller("ui5.view.Lists", {
    onInit : function() {
        this.router = sap.ui.core.UIComponent.getRouterFor(this);
    },
    
  handleNavButtonPress: function(evt){
        this.router.navTo("Master", {
      from: "Lists"
    });
   },
   handleListItemPress: function(evt){
    //Get the path to the selected object and extract the index
  var entity = evt.getSource().getBindingContext("gbi").getPath().split("/");

    //Navigate to ListDetai and pass the index of the selected object
  this.router.navTo("ListDetail", {
    from: "Lists",
    entity: entity[2]
  });
    
    },
    handleSearch : function (evt) {
    var filters = [];
    var query = evt.getParameter("query");
    if (query && query.length > 0){
      var filter = new sap.ui.model.Filter("PRODUCT", sap.ui.model.FilterOperator.Contains, query);
      filters.push(filter);
    }
    var list = this.getView().byId('ShortProductList');
    var binding = list.getBinding("items");
    binding.filter(filters);
  }

});

