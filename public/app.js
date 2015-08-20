var shoppingCartApp = angular.module('shoppingCart', ['ngRoute', 'cart', 'checkout'])

shoppingCartApp.config(['$routeProvider', function($routeProvider) {

	$routeProvider.otherwise({
		redirectTo: '/cart'
	});
}]);