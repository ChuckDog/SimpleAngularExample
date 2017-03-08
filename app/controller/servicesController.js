(function() {
	var servicesController = function($scope, $http) {
		$http.get('app/services/service.json').then(function(response) {
			$scope.services = response.data.services;
			//console.log($scope.services);
		}, function(error) {
			
		});
	}
	servicesController.$inject = ['$scope', '$http'];
	angular.module('computer').controller('servicesController', servicesController);
}());