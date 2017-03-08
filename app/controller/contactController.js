(function() {
	var contactController = function($scope, contactFactory) {
		$scope.contacts = {};
		contactFactory.getContacts().success( function(response){
			$scope.contacts = response.contacts;
		});
	}
	contactController.$inject = ['$scope', 'contactFactory'];
	angular.module('computer').controller('contactController', contactController);
}());