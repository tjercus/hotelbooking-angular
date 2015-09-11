/// <reference path='../../_all.ts' />
'use strict';
module components.user {

	export class UsersController {

		private users: Array<User> = [];

		public static $inject = ['$rootScope', 'HotelbookingService'];

		constructor(private $rootScope: any, private hotelbookingService: HotelbookingService) {
			console.log("UsersControler.constructor");

			this.users = hotelbookingService.getUsers();
			if (this.users.length === 0) {
				console.log("UsersController re-loading users from fixed array");
				this.users.push(new User("sdf345743598", "Tjerk Valentijn", "tjerk@example.org"));
				this.users.push(new User("9458kdgj94856", "Rudi Mackenzie", "king@montival.com"));
				hotelbookingService.putUsers(this.users);
			} else {
				console.log("UsersController not reloading users");
			}

			this.$rootScope.$on("user.saved", () => {
				console.log("caught user.saved event");
				this.users = this.hotelbookingService.getUsers();
			});
		}
	}
}
