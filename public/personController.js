
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
			//$scope.evalled=$scope.$eval(jsonString);
			$scope.fromJsoned=angular.fromJson(jsonString);
			
			$scope.infoTitle = $scope.fromJsoned.city;//6
			$scope.school = $scope.fromJsoned.school;//4
			$scope.details = $scope.fromJsoned.schoolOnMap;//9
			$scope.dm = $scope.fromJsoned.dm;
			$scope.wdm = $scope.fromJsoned.wdm;
			$scope.cn = $scope.fromJsoned.cn;
			$scope.db = $scope.fromJsoned.db;
			$scope.algo = $scope.fromJsoned.algo;
			
			//table
			$scope.stud1 =  $scope.fromJsoned.student1.split(",");
			$scope.stud2 = $scope.fromJsoned.student2.split(",");
			$scope.stud3 = $scope.fromJsoned.student3.split(",");
			$scope.stud4 = $scope.fromJsoned.student4.split(",");
			$scope.stud5 = $scope.fromJsoned.student5.split(",");
			$scope.stud6 = $scope.fromJsoned.student6.split(",");
			$scope.stud7 = $scope.fromJsoned.student7.split(",");
			$scope.stud8 = $scope.fromJsoned.student8.split(",");
			$scope.stud9 = $scope.fromJsoned.student9.split(",");
			$scope.stud10 = $scope.fromJsoned.student10.split(",");
			
			
			//Google map
			var mapOptions = {
				zoom: 3,
				center: new google.maps.LatLng(32.7050, -97.1228),
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};

			$scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

			$scope.markers = [];
    
			var infoWindow = new google.maps.InfoWindow();
			var latlng1 = new google.maps.LatLng($scope.stud1[7], $scope.stud1[8]);
			var latlng2 = new google.maps.LatLng($scope.stud2[7], $scope.stud2[8]);
			var latlng3 = new google.maps.LatLng($scope.stud3[7], $scope.stud3[8]);
			var latlng4 = new google.maps.LatLng($scope.stud4[7], $scope.stud4[8]);
			var latlng5 = new google.maps.LatLng($scope.stud5[7], $scope.stud5[8]);
			var latlng6 = new google.maps.LatLng($scope.stud6[7], $scope.stud6[8]);
			var latlng7 = new google.maps.LatLng($scope.stud7[7], $scope.stud7[8]);
			var latlng8 = new google.maps.LatLng($scope.stud8[7], $scope.stud8[8]);
			var latlng9 = new google.maps.LatLng($scope.stud9[7], $scope.stud9[8]);
			var latlng10 = new google.maps.LatLng($scope.stud10[7], $scope.stud10[8]);
			
			var createMarker = function (map, position, title, content, animation){
				var marker = new google.maps.Marker
				({
					map: map,
					position: position,
					title: title,
					details: content,
					animation:animation
				});
				
				marker.content = '<div class="infoWindowContent">' + marker.title + '</div>';
        
				google.maps.event.addListener(marker, 'click', function()
				{
					infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.details);
					infoWindow.open($scope.map, marker);
				});
        
				$scope.markers.push(marker);
				$scope.map.setCenter(latlng1);
				$scope.openInfoWindow = function(e, selectedMarker)
				{
					e.preventDefault();
					google.maps.event.trigger(selectedMarker, 'click');
				}
			}
				createMarker($scope.map,latlng1,$scope.stud1[6],$scope.stud1[9],google.maps.Animation.BOUNCE);
				createMarker($scope.map,latlng2,$scope.stud2[6],$scope.stud2[9],google.maps.Animation.BOUNCE);
				createMarker($scope.map,latlng3,$scope.stud3[6],$scope.stud3[9],google.maps.Animation.BOUNCE);
				createMarker($scope.map,latlng4,$scope.stud4[6],$scope.stud4[9],google.maps.Animation.BOUNCE);
				createMarker($scope.map,latlng5,$scope.stud5[6],$scope.stud5[9],google.maps.Animation.BOUNCE);
				createMarker($scope.map,latlng6,$scope.stud6[6],$scope.stud6[9],google.maps.Animation.BOUNCE);
				createMarker($scope.map,latlng7,$scope.stud7[6],$scope.stud7[9],google.maps.Animation.BOUNCE);
				createMarker($scope.map,latlng8,$scope.stud8[6],$scope.stud8[9],google.maps.Animation.BOUNCE);
				createMarker($scope.map,latlng9,$scope.stud9[6],$scope.stud9[9],google.maps.Animation.BOUNCE);
				createMarker($scope.map,latlng10,$scope.stud10[6],$scope.stud10[9],google.maps.Animation.BOUNCE);
				
				
				
				//Pie chart
				var dataMining = parseInt($scope.dm);
				var webData = parseInt($scope.wdm);
				var compNetworks = parseInt($scope.cn);
				var databaseSystems = parseInt($scope.db);
				var algorithms = parseInt($scope.algo);
				google.charts.load("current", {'packages':["corechart"]});
				google.charts.setOnLoadCallback(drawChart);
				function drawChart() {
					var data = google.visualization.arrayToDataTable([
						['Students', 'Marks'],
						[$scope.stud1[1], parseInt($scope.stud1[10])],
						[$scope.stud2[1], parseInt($scope.stud2[10])],
						[$scope.stud3[1], parseInt($scope.stud3[10])],
						[$scope.stud4[1], parseInt($scope.stud4[10])], 
						[$scope.stud5[1], parseInt($scope.stud5[10])],
						[$scope.stud6[1], parseInt($scope.stud6[10])],
						[$scope.stud7[1], parseInt($scope.stud7[10])],
						[$scope.stud8[1], parseInt($scope.stud8[10])],
						[$scope.stud9[1], parseInt($scope.stud9[10])],
						[$scope.stud10[1], parseInt($scope.stud10[10])]
					]);

					var options = {
						title: 'Semester I - Average Marks',
						is3D: true,
					};

					var chart = new google.visualization.BarChart(document.getElementById('piechart_3d'));
					chart.draw(data, options);
				}
        });
	 }
});
