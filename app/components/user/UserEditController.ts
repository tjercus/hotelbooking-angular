/// <reference path='../../_all.ts' />
'use strict';
module components.user {

	import User = components.user.User;

	export class UserEditController {
		private user: User;

		public static $inject = ['$stateParams', '$rootScope', 'HotelbookingService'];

		constructor(private $stateParams: any, private $rootScope: any, private hotelbookingService: HotelbookingService) {
			console.log("UserEditController.constructor: router passed user.id: " + $stateParams.id);
			this.user = hotelbookingService.findUserById($stateParams.id);
		}

		saveUser() {
			this.hotelbookingService.saveUser(this.user);
			this.$rootScope.$broadcast("user.saved");
		}
	}
}
