/// <reference path='../_all.ts' />
'use strict';
module hotelbooking {

    export class CartController {
        private cart: Offer[] = [];
        private amount: number = 0;

        public static $inject = ['$scope', 'HotelbookingService'];

        constructor(private $scope:CartScope, private hotelbookingService: HotelbookingService) {
            // need to use this.$scope.cart since it a two-way binding
            this.cart = this.$scope.cart = hotelbookingService.getCart();

            // do not need to use this.$scope.amount since it a one-way binding
            this.amount = hotelbookingService.getCartAmount();
            console.log("CartController constructor, cart size: " + this.cart.length);
        }

        removeOfferFromCart(offer: Offer) : void {
            this.cart = this.$scope.cart = this.hotelbookingService.removeOfferFromCart(offer);
            this.amount = this.hotelbookingService.getCartAmount();
        }

        pay(): void {
            alert("pay up! " + this.amount);
        }

        // TODO update view when a state receives an onEnter event
        //  preferably not with $scope.watch
    }
}
