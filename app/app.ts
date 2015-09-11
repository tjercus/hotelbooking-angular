/// <reference path='_all.ts' />
'use strict';
/**
 * The main app module.
 *
 * @type {angular.Module}
 */
module app {

    // attach service to main angular module, so no need to declare it as a dependency in the controllers -
    //  they will
    var hotelbookingAM = angular.module('hotelbookingAM', ['ui.router'])
        .service('HotelbookingService', components.HotelbookingServiceImpl);

    hotelbookingAM.controller('OffersController', components.offers.OffersController)
    hotelbookingAM.controller('CartController', components.cart.CartController);
    hotelbookingAM.controller('RegistrationController', components.registration.RegistrationController);
	hotelbookingAM.controller('UsersController', components.user.UsersController);
	hotelbookingAM.controller('UserEditController', components.user.UserEditController);

    hotelbookingAM.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/offers");

        $stateProvider
            .state("offers", {
                url: "/offers",
                templateUrl: "components/offers/offers.html"
            })
            .state("cart", {
                url: "/cart",
                templateUrl: "components/cart/cart.html",

                onEnter: function() {
                    console.log("onEnter event on cart state/route");
                }
            })
            .state("registration", {
                url: "/registration",
                templateUrl: "components/registration/registration.html"
            })
	        .state("users", {
		        url: "/users",
		        views: {
			        "": {
				        templateUrl: "components/user/users.html",
				        controllerProvider: function($rootScope) {
					        return "UsersController";
				        }
			        }
		        }
	        })
	        /* users.edit creates an url relative to '/users' */
	        .state("users.edit", {
		        url: "/:id/edit", /* ex: http://localhost:8008/#/users/sdf345743598/edit */
		        views: {
			        "userEdit": {
				        templateUrl: "components/user/userEdit.html",
				        controllerProvider: function($stateParams, $rootScope) {
					        return "UserEditController";
				        }
			        }
		        },
		        onEnter: function() {
			        console.log("onEnter event on users.edit state/route");
			        //this.controller.onEnter(); // does not work
		        }
	        })
    });
}
