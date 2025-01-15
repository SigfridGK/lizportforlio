app.controller('IntroCtrl', function($scope) {
	$scope.imgSrc = [
		"img/swift.png","img/flutter.jpg","img/github.png","img/restapi.png",
		"img/angular.png","img/nodejs.png","img/sql.jpg","img/aws.jpg"
	];
	$scope.date = new Date().getFullYear();
	$scope.yearExp = $scope.date - 2020;
});
