/// <reference path='../../_all.ts' />
'use strict';
module components.user {

	import User = components.user.User;

	export class UserEditController {
		private user: User;

		public static $inject = ['$stateParams', '$rootScope', 'HotelbookingService'];

		constructor(private $stateParams: any, private $rootScope: any, private hotelbookingService: HotelbookingService) {
			console.log("UserEditController.constructor: router passed user.id: " + $stateParams.id);

			// TODO move code to to service: findUserById(id: string)
			let users: User[] = hotelbookingService.getUsers();
			for (let user of users) {
				if (user.id === $stateParams.id) {
					this.user = user;
				}
			}
		}

		saveUser() {
			let users: User[] = this.hotelbookingService.getUsers();

			// TODO move code to to service: saveUser(user: User)
			for (let i = 0, len = users.length; i < len; i++) {
				console.log("users: " + users.length);
				let _user = users[i];
				if (_user.id === this.user.id) {
					console.log("user found with id " + _user.id);
					users[i] = this.user;
					break;
				}
				console.log("user not found with id " + _user.id);
			}

			console.log("users writeback " + users.length);
			this.hotelbookingService.putUsers(users);
			this.$rootScope.$broadcast("user.saved");
		}
	}
}
