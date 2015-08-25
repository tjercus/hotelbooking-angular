/// <reference path='../_all.ts' />
'use strict';
module hotelbooking {

    /**
    * The main controller for the app. The controller:
    * - retrieves and persists the model via a service
    * - exposes the model to the template and provides event handlers
    */
    export class OffersController {

        private offers: Offer[] = [];

        // $inject annotation.
        // It provides $injector with information about dependencies to be injected into constructor
        // it is better to have it close to the constructor, because the parameters must match in count and type.
        public static $inject = ['$scope', 'HotelbookingService'];

        constructor(private $scope: OfferScope, private hotelbookingService: HotelbookingService) {

            if (this.offers.length === 0) {
                this.offers.push(new Offer("1", "Hotel New York", 34.95));
                this.offers.push(new Offer("2", "Hostel Hospitable Amsterdam", 12.95));
                hotelbookingService.putOffers(this.offers);
            }
            this.offers = hotelbookingService.getOffers();
        }

        addOfferToCart(offer: Offer) {
            console.log("OffersController adding " + offer.name + ", for " + offer.price);
            this.hotelbookingService.addOfferToCart(offer);
        }
    }
}
