/// <reference path='../_all.ts' />
module components {

	import Offer = components.offers.Offer;
	import User = components.user.User;

    export interface HotelbookingService {
        getOffers(): Offer[];
        putOffers(offers: Offer[]): void; // could be private
        addOffer(offer: Offer): void;
        getCart(): Offer[];
        putCart(offers: Offer[]): void; // could be private
        addOfferToCart(offer: Offer): void;
        getCartAmount(): number;
        removeOfferFromCart(offer: Offer): Offer[];
	    getUsers(): User[];
	    putUsers(users: User[]): void; // could be private
	    findUserById(id: string): User;
	    saveUser(user: User): void;
    }
}
