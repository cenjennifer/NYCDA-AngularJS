(function() {
  'use strict';

  angular
    .module('template')
    .controller('NavigationCtrl', function (UI_ROUTES) {
        var self = this;
     
        self.collectDataState = UI_ROUTES.kCollectDataState.stateName;
        self.generateYelpMapState = UI_ROUTES.kGenerateMapStateChild.stateName;
        // self.generateYelpChild = UI_ROUTES.kGenerateYelpStateChild.stateName;
    })


})();
