/**
 * Application file for Angular JS webstore.
 * Setup and starts of all application components.
 * @author tjerk
 */

'use strict';

var hotelbookingApp = angular.module('hotelbookingApp', []).
	config(function($routeProvider) {
		$routeProvider.
			when('/', {controller: 'offersController', templateUrl: 'offers.html'}).
			otherwise({redirectTo:'/'});
});

angular.module('hotelbookingApp').service("offersModel", function() {
    return {
    	offers : [
    		{id: 1, name: "Marriot, Atlanta, two weeks", price: 349},
            {id: 2, name: "Savoy, Paris, one week", price: 199},
            {id: 3, name: "Mayflower, Leiden, one weekend", price: 65}
    	],

    	cart: [],

    	amount: 0,

		addOfferToCart: function(offer) {
			offer.uuid = this.createUuid();
			this.cart.push(offer);
			this.amount = this.amount + offer.price;
		},

		removeOfferFromCart: function(offer) {
			for (var i = 0, len = this.cart.length; i < len; i++) {
                if (this.cart[i].uuid != undefined && this.cart[i].uuid === offer.uuid) {
            		this.cart.splice(i, 1);
            		this.amount = this.amount - offer.price;
            		return;
            	}
            }
		},

		createUuid : function() {
        	var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        		var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r&0x3|0x8);
        		return v.toString(16);
        	});
        	return uuid;
        }
	}
});

angular.module('hotelbookingApp').controller("offersController"
	, ['$scope', '$rootScope', 'offersModel', function($scope, $rootScope, offersModel) {

    $scope.offers = offersModel.offers;
    $scope.cart = offersModel.cart;
    $scope.amount = offersModel.amount;

	$scope.addOfferToCart = function(offer) {
		console.log("offersModel adding " + offer.name + ", for " + offer.price);
    	offersModel.addOfferToCart(offer);
    	$scope.amount = offersModel.amount; // manual re-bind
    }

     $scope.removeOfferFromCart = function(offer) {
     	console.log("offersModel removing " + offer.name + ", for " + offer.price);
        offersModel.removeOfferFromCart(offer);
        $scope.amount = offersModel.amount; // manual re-bind
     }

    $scope.pay = function() {
		alert("Pay " + $scope.amount + "?");
    }
}]);