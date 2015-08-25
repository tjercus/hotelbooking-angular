/// <reference path='../_all.ts' />
'use strict';
module hotelbooking {

    export interface CartScope extends ng.IScope {
        // These declarations allows you to use variables in the HTML template without prefixing with the 'controller as' name of the Controller.
        cart: Offer[];
    }
}
