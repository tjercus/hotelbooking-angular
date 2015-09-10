/// <reference path='../../_all.ts' />
'use strict';
module components.user {

	import User = components.user.User;

	export class UserEditController {
		private user: User;

		public static $inject = ['$stateParams', 'HotelbookingService'];

		constructor(private $stateParams: any, private hotelbookingService: HotelbookingService) {
			console.log("UserEditController.constructor: router passed user.id: " + $stateParams.id);
			let users: User[] = hotelbookingService.getUsers();
			for (let user of users) {
				if (user.id === $stateParams.id) {
					this.user = user;
				}
			}
		}

		saveUser() {
			console.log("TODO save this.user to database");
		}
	}
}
