/// <reference path='../../_all.ts' />
'use strict';
module components.user {

	export class UsersController {

		private users: Array<User> = [];

		public static $inject = ['HotelbookingService'];

		constructor(private hotelbookingService: HotelbookingService) {

			if (this.users.length === 0) {
				this.users.push(new User("sdf345743598", "Tjerk Valentijn", "tjerk@example.org"));
				this.users.push(new User("9458kdgj94856", "Rudi Mackenzie", "king@montival.com"));

				hotelbookingService.putUsers(this.users);
			}
			//this.users = hotelbookingService.getUsers();
		}
	}
}
