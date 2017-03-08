(function() {
	var contactFactory = function($http) {
		
		return {
			getContacts: function(){
				return $http.get('app/services/service.json');
			}
		};
		
		/*return $http.get('app/services/service.json').success(function(response) {
			return response.contacts;
		});
		var contactFactory = {};
		$http.get('app/services/service.json').success(function(response) {
			contactFactory = response.contacts;
			//return contactFactory;
		});
		contactFactory.getContacts = function() {
			return {
				$http.get('app/services/service.json').success(function(response) {
					return response.contacts;
				});
			}
		contactFactory.getContacts = function() {
			return contactFactory;
		}
		
		return contactFactory;	*/
	}
	/*var contactFactory = function() {
		var contact = {
			city: 'Lynn Location',
			street: '333 Walnut St',
			ZIP: 'Lynn MA, 01902',
			phone: '321-321-3321'
		}
		
		var contactFactory = {};
		contactFactory.getContact = function() {
			return contact;
		}
		
		return contactFactory;
	}*/
	
	angular.module('computer').factory('contactFactory', contactFactory);
}());