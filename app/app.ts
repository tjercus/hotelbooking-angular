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

    hotelbookingAM.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/offers");

        $stateProvider
            .state('offers', {
                url: "/offers",
                templateUrl: "components/offers/offers.html"
            })
            .state('cart', {
                url: "/cart",
                templateUrl: "components/cart/cart.html",

                onEnter: function() {
                    //hotelbooking.CartController.pay();
                    console.log("onEnter event on cart state/route");
                }
            })
            .state('registration', {
                url: "/registration",
                templateUrl: "components/registration/registration.html"
            })
    });
}
