---
title: Ionic Framework - Import Phone Contacts
preview: Learn how to import contacts from your phone within Ionic Framework
date: 2015-01-08
categories:
  - javascript
tags:
  - how-to
  - ionic
  - angular
---

I have been working with the Ionic Framework the past couple of months building a hybrid web/native app. There are a few cool things that I have been able to do, like sending push notifications, text messages, and getting access to phone contacts through my app. This post in particular will give you an example of how to gain access to the iOS phone contacts, where you can extract pretty much any information you have available for a contact. I'll assume you already know how to get up and running with the Ionic framework; If you are not familiar with Ionic, they have a pretty good getting started guide that can walk you through the process of setting up an app at [https://ionicframework.com/getting-started/](https://ionicframework.com/getting-started/).

### Setting Up Dependencies

Ionic is built on top of Cordova with AngularJS. This will allow us to use an awesome suite of plugins via the angular module [ngCordova](https://ngcordova.com). Let's start by including the ngCordova module in our app. Go to [https://ionicframework.com/getting-started/](https://ionicframework.com/getting-started/) and download ngCordova. This will download the whole plugin suite. We could create a custom build, but for simplicity sake we will take the whole enchilada! Place the `ng-cordova.min.js` file wherever you would like and add the file to your app's index.html after your angular and ionic scripts, but before the cordova.js script. You can also install the module files via a package manager like bower or NPM, ionic comes packaged with both. We will also change the title of the header bar to be more accurate as to what we are looking at.

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta
			name="viewport"
			content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width"
		/>
		<title></title>

		<link href="lib/ionic/css/ionic.css" rel="stylesheet" />
		<link href="css/style.css" rel="stylesheet" />
		<!-- ionic/angularjs js -->
		<script src="lib/ionic/js/ionic.bundle.js"></script>

		<!-- Angular ngCordova -->
		<script src="lib/ngCordova/dist/ng-cordova.min.js"></script>

		<!-- cordova script (this will be a 404 during development) -->
		<script src="cordova.js"></script>

		<!-- your app's js -->
		<script src="js/app.js"></script>
	</head>
	<body ng-app="contactsApp">
		<ion-pane>
			<ion-header-bar class="bar-stable">
				<h1 class="title">Contact App</h1>
			</ion-header-bar>
			<ion-content> </ion-content>
		</ion-pane>
	</body>
</html>
```

For this demo, we will call our app 'contactsApp'. After you have included the required ngCordova file, we need to add it to our main contactsApp module as a dependency. Simply inject 'ngCordova' into your app's dependency list like so:

```javascript
angular
	.module('contactsApp', ['ionic', 'ngCordova'])

	.run(function ($ionicPlatform) {
		$ionicPlatform.ready(function () {
			// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
			// for form inputs)
			if (window.cordova && window.cordova.plugins.Keyboard) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			}
			if (window.StatusBar) {
				StatusBar.styleDefault();
			}
		});
	});
```

Now our app will have access to any of the ngCordova plugins available. The final step to be able to use the contacts plugin is to add the specific plugin to our Cordova project. Ionic creates specific platform build files, and these build files need access to native plugins. We get access to native functions via ngCordava which calls up Cordova plugins and their functions. To be able to use the contact contacts module that is provided by ngCordova, we need to install the Cordova contacts plugin for our iOS build. To do so, go into the base directory of your project in your terminal and enter the following command to install:

```javascript
  cordova plugin add org.apache.cordova.contacts
```

Next, go into the /plugins directory and location the folder `org.apache.cordova.contacts`. We will need to copy the contents of /src/ios to the build of our iOS project. Hopefully you already understand how to build your app, if not the getting started tutorial I linked above will be able to walk you through the build process. After you have copied the plugin files, locate the /platforms/ios directory. This is the native build of your app where we need to copy the plugin files to. Inside the /ios folder, locate the folder /contacts-app and then go into the /Plugins directory. Inside this directory we need to create a new folder named exactly the same as the original plugin folder `org.apache.cordova.contacts`. Once you have created this folder, copy the contents from before into it. You should have a `CDVContact.h` and `CDVContact.h`, `CDVContact.m`, `CDVContacts.h`, and `CDVContacts.m` files inside this folder now. Placing the files in the build's plugin directory gives the app the access it needs to the Cordova plugins.

### Using The Module

Now let's create a controller that will utilize the $cordovaContacts module to call up our phone's contact list. For this demo, I'll just add the controller in the same file as the main app. In a real application you would probably have your controllers, services, etc. living in different places as their own modules. We are going to name our controller `contactsCtrl` and we will require $scope and $cordovaContacts as dependencies. The code within the `.run` function comes pre-packed with an ionic application; it basically checks to see if the app is running yet and initializes a couple of ionic functions for us. You can also inject $ionicPlatform anywhere else you need to check if the app has loaded yet.

```javascript
angular
	.module('contactsApp', ['ionic', 'ngCordova'])

	.run(function ($ionicPlatform) {
		$ionicPlatform.ready(function () {
			// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
			// for form inputs)
			if (window.cordova && window.cordova.plugins.Keyboard) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			}
			if (window.StatusBar) {
				StatusBar.styleDefault();
			}
		});
	})

	.controller('contactsCtrl', function ($scope, $cordovaContacts) {});
```

The code within the `.run` function come pre-packed with an ionic application; it basically checks to see if the app is running yet and initializes a couple of ionic functions for us. You can also inject `$ionicPlatform` anywhere else you need to check if the app has loaded yet.

Now that we have a controller available, we can add it to our markup in the `index.html` file. In a larger app, you would probably have some sort of $state controller that handles setting up views and templates. In this demo we will just keep it simple and add some more markup inside the ion-content area. Our contactsCtrl will just go on the ion-content tag, and we will fill in the rest of what we need for showing our contents inside of this tag.

```javascript
<ion-content ng-controller="contactsCtrl"></ion-content>
```

Back in our controller, we will utilize the $cordovaContacts module to ask for the phone's contact list. We will add the $scope variable `getContacts`, which will contain a function that we can bind to a button in the view. Inside the function, we will add another $scope variable called `phoneContacts`, which will be an empty array that we'll push the contacts into once we get them. Since the variable is set every time the function is called, it will clear out any data we may already have and replace it with a new set.

```javascript
controller('contactsCtrl', function ($scope, $cordovaContacts) {
	$scope.getContacts = function () {
		$scope.phoneContacts = [];
	};
});
```

We can add our function to the view by using the ngClick directive on a button, in which we will initialize our $scope variable getContacts. We'll wrap this up in a div with an ionic class 'padding' so there is some space around the container. Adding another ionic class 'button' will make our button a little better than the default iOS styling.

```html
<ion-content ng-controller="contactsCtrl">
	<div class="padding">
		<button class="button" ng-click="getContacts()">Get My Contacts</button>
	</div>
</ion-content>
```

The last thing to add in our controller is the call to $cordovaContacts, and it's success or failure callbacks. I've separated out the success and failure callbacks into named private functions for easier readability. If the call to get contacts fails, onError gets called. If the call succeeds, onSuccess gets called and completes adding contact information to our phoneContacts $scope variable. Notice that when we call $cordovaContacts, we pass in some options. In this case, we only tell the module that we want multiple contacts returned, meaning all of them. If you did not specify this, you would only get one contact in return. The module is actually pretty flexible, in that you can pass in options to only return one specific property of a contact if you don't want all the data. In this case though, we will take it all! You can check out more about options in the [Cordova documentation](https://github.com/apache/cordova-plugin-contacts/blob/master/doc/index.md).

```javascript
controller('contactsCtrl', function ($scope, $cordovaContacts) {
	$scope.getContacts = function () {
		$scope.phoneContacts = [];

		function onSuccess(contacts) {
			for (var i = 0; i < contacts.length; i++) {
				var contact = contacts[i];
				$scope.phoneContacts.push(contact);
			}
		}

		function onError(contactError) {
			alert(contactError);
		}

		var options = {};
		options.multiple = true;

		$cordovaContacts.find(options).then(onSuccess, onError);
	};
});
```

If we built our project in it's current state and ran it, all would work as expected, and we would actually get contacts. Awesome! But, they won't actually show up in the view because we haven't bound our phoneContacts $scope variable to the view anywhere. We'll use some default ionic layouts for displaying the contacts as some nice looking cards that will show us a contact's name, phone numbers, and email addresses. We also have access to a whole host of other information, but I will leave that for you to explore or ask questions about.

```html
<ion-content ng-controller="contactsCtrl">
	<div class="padding">
		<button class="button" ng-click="getContacts()">Get My Contacts</button>
		<div class="list" ng-show="phoneContacts">
			<div class="card" ng-repeat="contact in phoneContacts">
				<div class="item item-divider">{{ contact.name.formatted }}</div>
				<div class="item item-text-wrap">
					<p><strong>Phone(s)</strong></p>
					<div ng-repeat="number in contact.phoneNumbers">
						<p>{{ number.value }}</p>
					</div>
					<p><strong>Email(s)</strong></p>
					<div ng-repeat="email in contact.emails">
						<p>{{ email.value }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</ion-content>
```

### Running the Final Product!

That should do it for getting contacts, all that is left is to build the project by running `<code class="in-text-code">ionic build ios</code>` and then emulate the project on the iOS simulator by running `<code class="in-text-code">ionic emulate ios</code>`. You can also open up the file `contacts-app.xcodeproj` in platforms/ios in Xcode if you want to switch up device types for fun. Running this app on a web server won't really work though because the web won't have any contacts to look up.

If you would like to clone a working copy of this demo, check out the repo at [https://github.com/austinknight/ionic-import-contacts-demo](https://github.com/austinknight/ionic-import-contacts-demo). There are a few instructions on how to make it run.
