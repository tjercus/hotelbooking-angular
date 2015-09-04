/// <reference path='../../_all.ts' />
'use strict';
module components.registration {

	import User = components.registration.User;

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

	    /**
	     * variable is instantiated and used by the View/Template
	     */
	    private user: User;

        constructor(private $scope: RegistrationScope) {
            console.log("RegistrationController: constructor: " + this.currentFormPart);
	        this.user = new registration.User();
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
	        if (this.user === undefined) {
		        console.log("user is undefined");
		        return;
	        }

	        if (this.currentFormPart === "person") {
		        if (!this.user.validateName()) {
			        console.log("user.name is null");
			        return;
		        } else {
			        console.log("user.name is " + this.user.name);
		        }
	        }

	        if (this.currentFormPart === "contact") {
		        if (!this.user.validateEmail()) {
			        console.log("user.email is not valid");
			        return;
		        }
	        }

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
