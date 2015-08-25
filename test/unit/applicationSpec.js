'use strict';

/* jasmine specs for services/controllers go here */

var one = {id: 1, name: "one", price: 1};
var two = {id: 2, name: "two", price: 2};
var three = {id: 3, name: "three", price: 3};
var offers = [one, two, three];

describe('offersModel', function() {
	beforeEach(module('hotelbooking'));

	describe('when addOfferToCart', function() {
		it('should add an offer to cart', inject(function(offersModel) {
	    	var originalCartSize = offersModel.cart.length;
	    	var newOffer = {id: 1, name: "one", price: 1};
	    	offersModel.addOfferToCart(newOffer);
	    	expect(offersModel.cart.length).toBe(originalCartSize + 1);
	    	expect(newOffer.uuid).not.toBeNull();
	    }));
	    it('should add a unique uuid to any added offer', inject(function(offersModel) {
        	offersModel.addOfferToCart(two);
        	offersModel.addOfferToCart(three);
        	expect(offersModel.cart[0].uuid).toBeDefined();
        	expect(offersModel.cart[0].uuid.length).toBe(36);
        	expect(offersModel.cart[0].uuid).not.toEqual(offersModel.cart[1].uuid);
        }));
        it('should add the price of the offer to the amount', inject(function(offersModel) {
        	expect(offersModel.amount).toBe(0);
        	offersModel.addOfferToCart(two);
        	expect(offersModel.amount).toBe(2);
        }));
	});

	describe('when removeOfferFromCart', function() {
		it('should remove an offer from the cart model', inject(function(offersModel) {
	    	offersModel.addOfferToCart(one);
			offersModel.addOfferToCart(three);
			expect(offersModel.cart.length).toBe(2);
			offersModel.removeOfferFromCart(three);
			expect(offersModel.cart.length).toBe(1);
		}));
		it('should subtract the price of the offer from the amount', inject(function(offersModel) {
             expect(offersModel.amount).toBe(0);
             offersModel.addOfferToCart(three);
             expect(offersModel.amount).toBe(3);
             offersModel.removeOfferFromCart(three);
             expect(offersModel.amount).toBe(0);
         }));
	});
});

// test controller with a spy/mock service to see if required interaction with a modelservice is made
describe('offersController', function() {
	var scope, offersModel;

	beforeEach(module('hotelbooking'));
	beforeEach(inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		$controller('offersController', {$scope: scope});
	}));

	describe('when addOfferToCart', function() {
		it('should call offersModel.addOfferToCart', inject(function(offersModel) {
	  		spyOn(offersModel, 'addOfferToCart');
	   		scope.addOfferToCart(two);
	  		expect(offersModel.addOfferToCart).toHaveBeenCalled();
		}));
	});

	describe('when removeOfferFromCart', function() {
	  	it('should call offersModel.removeOfferFromCart', inject(function(offersModel) {
	  		spyOn(offersModel, 'removeOfferFromCart');
	   		scope.addOfferToCart(two);
	   		scope.addOfferToCart(three);
	   		scope.removeOfferFromCart(two);
	   		expect(offersModel.removeOfferFromCart).toHaveBeenCalled();
		}));
	});
});
