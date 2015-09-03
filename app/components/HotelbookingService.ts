/// <reference path='../_all.ts' />
module components {

	import Offer = components.offers.Offer;

    export interface HotelbookingService {
        getOffers(): Offer[];
        putOffers(offers: Offer[]): void; // could be private
        addOffer(offer: Offer): void;
        getCart(): Offer[];
        putCart(offers: Offer[]): void; // could be private
        addOfferToCart(offer: Offer): void;
        getCartAmount(): number;
        removeOfferFromCart(offer: Offer): Offer[];
    }
}
