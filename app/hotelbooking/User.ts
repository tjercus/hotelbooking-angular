/// <reference path='../_all.ts' />
'use strict';
module hotelbooking {

    export class User {
        private id : string;

        private name: string;
        private state: string; // enum
        private gender: string; // enum

        private email: string;
        private phone: number;

        private creditcard: number;

        constructor() {
            //
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
