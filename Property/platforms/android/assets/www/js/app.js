// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
	
	
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    
    if(!ionic.Platform.isIOS())$ionicConfigProvider.scrolling.jsScrolling(false);
    
  $stateProvider

    .state('app', {
		url: '/app',
		abstract: true,
		templateUrl: 'templates/menu.html',
		controller: 'AppCtrl'
	  })
    
  .state('app.category', {
    url: '/category',
    views: {
      'menuContent': {
        templateUrl: 'templates/category.html',
        controller: 'CategoryCtrl'
      }
    }
  })
  
  
  .state('app.aboutus', {
    url: '/aboutus',
    views: {
      'menuContent': {
        templateUrl: 'templates/aboutus.html'
      }
    }
  })
  
  .state('app.contactus', {
    url: '/contactus',
    views: {
      'menuContent': {
        templateUrl: 'templates/contactus.html'
      }
    }
  })
  
  .state('app.map', {
    url: '/map',
    views: {
      'menuContent': {
        templateUrl: 'templates/map.html'
      }
    }
  })
  
  .state('app.inquiry', {
    url: '/inquiry',
    views: {
      'menuContent': {
        templateUrl: 'templates/inquiry.html'
      }
    }
  })
  


  .state('app.abouttheproject', {
    url: '/abouttheproject',
    views: {
      'menuContent': {
        templateUrl: 'templates/abouttheproject.html',
        controller: 'AboutTheProjectCtrl'
      }
    }
  })

  .state('app.commercialproperties', {
    url: '/commercialproperties',
    views: {
      'menuContent': {
        templateUrl: 'templates/commercialproperties.html'//,
        //controller: 'AboutTheProjectCtrl'
      }
    }
  })

    .state('app.panchkulaextension', {
    url: '/panchkulaextension',
    views: {
      'menuContent': {
        templateUrl: 'templates/panchkulaextension.html'//,
        //controller: 'AboutTheProjectCtrl'
      }
    }
  })

  .state('app.residentialproperties', {
    url: '/residentialproperties',
    views: {
      'menuContent': {
        templateUrl: 'templates/residentialproperties.html'//,
        //controller: 'AboutTheProjectCtrl'
      }
    }
  })

    .state('app.whatweareoffering', {
    url: '/whatweareoffering',
    views: {
      'menuContent': {
        templateUrl: 'templates/whatweareoffering.html'//,
        //controller: 'AboutTheProjectCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/category');
});
