/* var app = angular.module('myApp', []);
app.controller('personCtrl', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.fullName = function() {
        return $scope.firstName + " " + $scope.lastName;
    };
});
 */
var app = angular.module('myApp', []);
app.controller('appController', function($scope,$http){
	//$scope.data={}
	//$scope.response={}
	/* $scope.firstName="a ";
	$scope.lastName=" b";
	$scope.date='02/02/2015';
	$scope.textdata='xx'; */
	
	 $scope.send = function(){
		/*console.log("inside click");
		console.log($scope.data.textdata);
		console.log($scope.firstName + ' ' + $scope.lastName);
		console.log($scope.date);*/
		/* var posting =  */$http({
			method:"POST",
			url: "/post"
			//$http.get("index.js")
			//params: {firstname : $scope.firstName, lastName : $scope.lastName, date : $scope.date, txtData : $scope.textdata},
			//data: $scope.data
			//firstName: $scope.firstName,
			//lastName: $scope.lastName,
			//date: $scope.date,
			//processData: false 
		}).then(function mySuccess(response) {
            /*executed when server responds back*/
			//var pr = angular.fromJson($scope.Names);
			//angular.forEach(pr,function(value,key){
			//	$scope.Message = angular.fromJson(response);
			//});
			//console.log($scope.response.data);
			var jsonString = response.data;
			 $scope.evalled=$scope.$eval(jsonString);
			  $scope.fromJsoned=angular.fromJson(jsonString);
			  $scope.Message=response.data;
        });
	 }
});