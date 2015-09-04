/// <reference path='../../_all.ts' />
'use strict';
module components.registration {

    export class User {
        public  id : string;

        public  name: string;
        public  state: string; // enum
        public  gender: string; // enum

        public  email: string;
        public  phone: number;

        public  creditcard: number;

	    public validateName() : boolean {
		    return !(this.name === undefined || this.name === null || this.name === "" && this.name.length === 0);
	    }

	    public validateEmail() : boolean {
		    return !(this.email === undefined || this.email === null || this.email.indexOf("@") !== -1);
	    }

        public setId(value:string) {
            this.id = value;
        }

        public setName(value:string) {
            this.name = value;
        }

        public setState(value:string) {
            this.state = value;
        }

        public setGender(value:string) {
            this.gender = value;
        }

        public setEmail(value:string) {
            this.email = value;
        }

        public setPhone(value:number) {
            this.phone = value;
        }

        public setCreditcard(value:number) {
            this.creditcard = value;
        }
    }
}
