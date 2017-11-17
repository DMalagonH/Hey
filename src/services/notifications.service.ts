import { Injectable } from '@angular/core';

@Injectable()
export class NotificationsService{
	notifications = [
		{ title: 'Notification 1', body:'N1 Donec maximus justo ac sapien ullamcorper.', url:'https://github.com/DMalagonH'},
		{ title: 'Notification 2', body:'N2 Donec maximus justo ac sapien ullamcorper.', url:'https://github.com/DMalagonH'},
		{ title: 'Notification 3', body:'N3 Donec maximus justo ac sapien ullamcorper.', url:'https://github.com/DMalagonH'},
		{ title: 'Notification 4', body:'N4 Donec maximus justo ac sapien ullamcorper.', url:'https://github.com/DMalagonH'},
		{ title: 'Notification 5', body:'N5 Donec maximus justo ac sapien ullamcorper.', url:'https://github.com/DMalagonH'},
		{ title: 'Notification 6', body:'N6 Donec maximus justo ac sapien ullamcorper.', url:'https://github.com/DMalagonH'},
		{ title: 'Notification 7', body:'N7 Donec maximus justo ac sapien ullamcorper.', url:'https://github.com/DMalagonH'},
		{ title: 'Notification 8', body:'N8 Donec maximus justo ac sapien ullamcorper.', url:'https://github.com/DMalagonH'},
		{ title: 'Notification 9', body:'N9 Donec maximus justo ac sapien ullamcorper.', url:'https://github.com/DMalagonH'},
		{ title: 'Notification 10', body:'N10 Donec maximus justo ac sapien ullamcorper.', url:'https://github.com/DMalagonH'},
	];

	public getAll(){
		return this.notifications;
	}
}
