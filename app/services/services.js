(function() {
	var contactFactory = function($http) {
		
		return {
			getContacts: function(){
				return $http.get('app/services/service.json');
			}
		};
	}
	
	angular.module('computer').factory('contactFactory', contactFactory);
}());