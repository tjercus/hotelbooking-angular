/// <reference path='../_all.ts' />
'use strict';
module hotelbooking {
    /**
    * Services that persists and retrieves from localStorage.
    */
    export class HotelbookingServiceImpl implements HotelbookingService {
        STORAGE_ID = 'hotelbooking';

        getOffers(): hotelbooking.Offer[] {
            return JSON.parse(localStorage.getItem(this.STORAGE_ID + "_offers") || '[]');
        }

        putOffers(offers: hotelbooking.Offer[]):void {
            localStorage.setItem(this.STORAGE_ID + "_offers", JSON.stringify(offers));
        }

        addOffer(offer: hotelbooking.Offer): void {
            let offers = this.getOffers();
            offers.push(offer);
            this.putOffers(offers);
        }

        getCart(): hotelbooking.Offer[] {
            return JSON.parse(localStorage.getItem(this.STORAGE_ID + "_cart") || '[]');
        }

        putCart(cart: Offer[]): void {
            localStorage.setItem(this.STORAGE_ID + "_cart", JSON.stringify(cart));
        }

        addOfferToCart(offer:hotelbooking.Offer):void {
            let cart = this.getCart();
            cart.push(offer)
            this.putCart(cart);
        }

        getCartAmount(): number {
            let amount = 0.0;
            this.getCart().map(offer => amount += offer.price);
            return amount;
        }

        removeOfferFromCart(offer: Offer): Offer[] {
            let cart = this.getCart();
            for (var i = 0, len = cart.length; i < len; i++) {
                if (cart[i].id != undefined && cart[i].id === offer.id) {
                    cart.splice(i, 1);
                    this.putCart(cart);
                    return cart;
                }
            }
            return cart;
        }
    }
}
