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
        .service('HotelbookingService', hotelbooking.HotelbookingServiceImpl);

    hotelbookingAM.controller('OffersController', hotelbooking.OffersController)
    hotelbookingAM.controller('CartController', hotelbooking.CartController);
    hotelbookingAM.controller('RegistrationController', hotelbooking.RegistrationController);

    hotelbookingAM.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/offers");

        $stateProvider
            .state('offers', {
                url: "/offers",
                templateUrl: "hotelbooking/offers.html"
            })
            .state('cart', {
                url: "/cart",
                templateUrl: "hotelbooking/cart.html",

                onEnter: function() {
                    //hotelbooking.CartController.pay();
                    console.log("onEnter event on cart state/route");
                }
            })
            .state('registration', {
                url: "/registration",
                templateUrl: "hotelbooking/registration.html"
            })
    });
}
