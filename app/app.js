(function() {
	var app = angular.module('computer', ['ngRoute']);
	app.config(function($routeProvider) {
		$routeProvider
			.when('/',
				{
					controller: 'mainPageController',
					templateUrl: 'app/views/mainPage.html'
				}
			)
			.when('/about',
				{
					controller: 'aboutController',
					templateUrl: 'app/views/about.html'
				}
			)
			.when('/services',
				{
					controller: 'servicesController',
					templateUrl: 'app/views/services.html'
				}
			)
			.when('/contact',
				{
					controller: 'contactController',
					templateUrl: 'app/views/contact.html'
				}
			)
			.otherwise({redirectTo: '/'});
	});
}());