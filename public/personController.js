
var app = angular.module('myApp', []);
app.controller('appController', function($scope,$http){	
	/* $scope.tblShow = false;
	$scope.mapShow = false; */
	 $scope.send = function(){
		 
		 $http({
			method:"POST",
			url: "/post"
		}).then(function mySuccess(response) {
            /*executed when server responds back*/
			$scope.mapShow = true;	
			$scope.tblShow = true;
			var jsonString = response.data;
			$scope.evalled=$scope.$eval(jsonString);
			$scope.fromJsoned=angular.fromJson(jsonString);
			$scope.lat1 = $scope.fromJsoned.lat;
			$scope.long1 = $scope.fromJsoned.longitude;
			$scope.infoTitle = $scope.fromJsoned.city;
			$scope.school = $scope.fromJsoned.school;
			$scope.details = $scope.fromJsoned.schoolOnMap;
			
			var mapOptions = {
				zoom: 10,
				center: new google.maps.LatLng(32.7050, -97.1228),
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};

			$scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

			$scope.markers = [];
    
			var infoWindow = new google.maps.InfoWindow();
			var latlng = new google.maps.LatLng($scope.lat1, $scope.long1);
			//var createMarker = function (){
        
				var marker = new google.maps.Marker
				({
					map: $scope.map,
					position: latlng,
					title: $scope.infoTitle,
					details: $scope.school + $scope.details,
					animation:google.maps.Animation.BOUNCE
				});
				
				marker.content = '<div class="infoWindowContent">' + marker.title + '</div>';
        
				google.maps.event.addListener(marker, 'click', function()
				{
					infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.details);
					infoWindow.open($scope.map, marker);
				});
        
				$scope.markers.push(marker);
				$scope.map.setCenter(latlng);
				$scope.openInfoWindow = function(e, selectedMarker)
				{
					e.preventDefault();
					google.maps.event.trigger(selectedMarker, 'click');
				}
        });
	 }
});
