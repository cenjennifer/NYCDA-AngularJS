(function() {
	'use strict';

	angular
		.module('template')
		.controller('ThirdController', function (UI_ROUTES, $state, hereMapCredential, HereMapResource, CompileCoordinates, CompileAddress, CompileYelpSearch){
			var self = this;
			
			self.fromAddress = CompileAddress.getFromAddress();
			self.toAddress = CompileAddress.getToAddress();
			self.yelpSearch = CompileYelpSearch.getYelpSearch();

			self.gettingCoordinates = CompileCoordinates.getCoordinates();
			console.log(self.gettingCoordinates);

			//Testing adding points on the map
			self.point1Lat = "40.7385278";
			self.point1Lng = "-73.9864075";

			self.generateMapState = UI_ROUTES.kGenerateMapState.stateName;
			self.MapRouteArray = [];

			if (self.gettingCoordinates.length !== 0){

			self.coords = self.gettingCoordinates.toString().split(',');
			console.log(self.coords);

			HereMapResource.getRoute({
					app_id: hereMapCredential.app_id,
					app_code: hereMapCredential.app_code,
					waypoint0lat: self.coords[0],
					waypoint0lng: self.coords[1],
					waypoint1lat: self.coords[2],
					waypoint1lng: self.coords[3],
					poix0: self.coords[0] + '%2C' + self.coords[1] + '%3B00a3f2%3B00a3f2%3B11%3B.',
					poix1: self.coords[2] + '%2C' + self.coords[3] + '%3Bwhite%3Bwhite%3B11%3B.'
				}).$promise.then(function onSuccess(data) {
					
					for (var i =0; i < data.response.route[0].leg[0].maneuver.length; i++){
						self.MapRouteArray.push(data.response.route[0].leg[0].maneuver[i].position.latitude + ',' + data.response.route[0].leg[0].maneuver[i].position.longitude);
					}
				});

				console.log(self.MapRouteArray);
			}
		});
})()
