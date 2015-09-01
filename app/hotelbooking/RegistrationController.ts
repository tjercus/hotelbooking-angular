/// <reference path='../_all.ts' />
'use strict';
module hotelbooking {

    export class RegistrationController {
        public static $inject = ['$scope'];

        /**
         * Holds the names of the formparts
         * @type {Set<T>}
         */
        private formParts: Array<string> = ["person", "contact", "payment", "summary"];

        /**
         * Holds the name of the formpart that is currently on view
         * @type {string}
         */
        private currentFormPart: string = this.formParts[0];

        private user: User = new User();

        constructor(private $scope: RegistrationScope) {
            console.log("RegistrationController: constructor: " + this.currentFormPart);
        }

        goPrevious() {
            console.log("goPrevious");

            let currentIndex = this.formParts.indexOf(this.currentFormPart);
            let previousPart = this.formParts[currentIndex - 1];

            if (currentIndex === 0) {
                previousPart = this.formParts[0];
            } else {
                // 2. if valid: set next current part
                console.log("goPrevious: " + this.currentFormPart + " to " + previousPart);
                this.currentFormPart = previousPart;
            }
        }

        goNext() {
            // 1. validate
            // TODO

            // 2. calculate nextPart
            let currentIndex = this.formParts.indexOf(this.currentFormPart);
            let nextPart = this.formParts[currentIndex + 1];

            // 3. if last part, then show 'a thank you' alert

            if (currentIndex === this.formParts.length - 1) {
                alert("form complete");
            } else {
                // 2. if valid: set next current part
                console.log("goNext: " + this.currentFormPart + " to " + nextPart);
                this.currentFormPart = nextPart;
            }
        }
    }
}
