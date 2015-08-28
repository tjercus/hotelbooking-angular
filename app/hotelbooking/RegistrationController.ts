/// <reference path='../_all.ts' />
'use strict';
module hotelbooking {

    export class RegistrationController {
        public static $inject = ['$scope'];

        /**
         * Holds the names of the formparts
         * @type {Set<T>}
         */
        private formParts: Set<String> = new Set(["person", "contact", "payment"]);

        /**
         * Holds the name of the formpart that is currently on view
         * @type {string}
         */
        private currentFormPart: string;

        constructor(private $scope: RegistrationScope) {
            //
        }

        goPrevious() {

        }

        goNext() {
            // 1. validate

            let nextPart = this.formParts.entries().next();

            // 3. if last part, then show 'a thank you' alert

            // TODO calculate last part
            if (this.currentFormPart === "payment") {
                alert("form complete");
            } else {
                // 2. if valid: set next current part
                this.currentFormPart = nextPart;
            }
        }
    }
}
