angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

})

.controller('AboutTheProjectCtrl', function($scope, $ionicScrollDelegate, $rootScope) {
  var description = 'With similar sonata treasured in Panchkula, Panchkula Extn. II is developed with surplus benefits to augment the paramount. Panchkula Extn. II is an approved township by Town and Country Planning, Department of Haryana. Panchkula Extn. II is planned by Govt. of Haryana with the motive to expand space for future novelty, both in terms of society & technology. Now to build a sheer abode, Sector 12 the heart of city was chosen to entrench Panchkula Eco City. The crown area of sector 12 has perpetual benefits to offer to its residents. Situated on NH-73, 15 kms from Chandigarh, Panchkula Eco City is selected with 300 ft. wide green belts in front & 100 ft. at the back. With four lane road planned "to be laid" by NHAI for smooth traffic flow, two World Class multilevel parkings, 80 ft. circulation road in front, 200 ft. on one side and 40-80 ft. internal circulation roads, there are much more comprehension to amaze you. Being close to upcoming 600 acres area acquired by HSIIDC in sector 10 & 13, existing HSIIDC estate itself and thoroughly connected to Panchkula Industrial Area & I.T. Park, Panchkula Eco City offers you close at hand employment opportunities, to gear your career calls. The surplus feature of the sector & township site both is, the Easy drive connectivity to Airport & proposed flyover connecting sector 12 to sector 17 for occupants to cross the highway with ease. To precise the list of amenities, Panchkula Eco City is designed with Showrooms & Convenience Shops, 24 Hrs Operational ATMs in vicinity, Zee School in 1 km approach area & 16 Hole Golf Course to offer a sheer living space. All this and much more illustrations boated at your disposal, leads to exceptional recital of our motive to serve PERFECTION to our clientele.';
  $scope.description = description;
})

.controller('CartCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk, $ionicHistory) {
    
    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.fadeSlideIn({
            selector: '.animate-fade-slide-in .item'
        });
    }, 200);

    // Set Ink
    ionicMaterialInk.displayEffect();
})

.controller('CategoryCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk, $ionicHistory) {
     $ionicHistory.nextViewOptions({
	  disableBack: true
	});
	$ionicHistory.clearHistory();
	$ionicHistory.clearCache();
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('InquiryCtrl', function($scope, $stateParams, EmailComposer, $ionicHistory) { 
    $scope.meetingtime = "Meeting Time";
    
	$ionicHistory.nextViewOptions({
	  disableBack: true
	});
	$ionicHistory.clearHistory();
	$ionicHistory.clearCache();
	
    $scope.showSelectValue = function(meetingtime) {
        $scope.meetingtime = meetingtime;
    }

    $scope.submitForm = function(){ console.log($scope);
        var name = $scope.name; console.log($scope.name);
        var email = $scope.email;
        var phone = $scope.phone;
        var address = $scope.address;
        var meetingtime = $scope.meetingtime;
        
        if(!name){
            var msg = document.getElementById('msg');
			msg.className = "card";
            msg.innerHTML = "Please Enter your name.";
               setTimeout(function() {
				   msg.className = "";
                    msg.innerHTML = ''
                }, 300000);
                return;
        } else if(email){
             var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
             if(!re.test(email)){
               var msg = document.getElementById('msg');
			   msg.className = "card";
                msg.innerHTML = "Email is not correct.";
                   setTimeout(function() {
					   msg.className = "";
                        msg.innerHTML = ''
                    }, 3000);
               return;
             }
        } else if(!phone){
            var msg = document.getElementById('msg');
			msg.className = "card";
            msg.innerHTML = "Please Enter your phone number.";
               setTimeout(function() {
				   msg.className = "";
                    msg.innerHTML = ''
                }, 3000);
                return;
        } 
        
        
        
        
        //alert("ddd");
        
        var str='';
        str = str + 'Dear Admin, <br/>';
        str = str + 'A Inquiry Request is received with information below..<br/>';
        str = str + 'Name: '+name+'<br/>';
        str = str + 'Email: '+email+'<br/>';
        str = str + 'Phone: '+phone+'<br/>';
        str = str + 'Address: '+address+'<br/>';
        str = str + 'Meeting Time: '+meetingtime;
        
        
        EmailComposer.isAvailable().then(function() {// alert("is available");
           // is available
         }, function () { //alert("not available");
           // not available
         });
        
          var email = {
            to: 'suresh.kumar@netsolutions.in',
            cc: 'utkarsh.puri@netsolutionsindia.com',
          //  bcc: [''],
            attachments: [
              //'file://img/logo.png',
             // 'res://icon.png',
              //'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
              //'file://README.pdf'
            ],
            subject: 'A New Inquiry Request..',
            body: str,
            isHtml: true
          };
        console.log(email);
         EmailComposer.open(email).then(null, function () { //alert("success");
           // user cancelled email
         });   
    }
})


.controller('MapCtrl', function($scope, $stateParams, $state, $ionicHistory) { //alert("Hi map");
    var distance = null; // km
    var service = null;
    var gmarkers = [];
    
    var infowindow = new google.maps.InfoWindow();

    var myLatlng12; var myLatLng; var officeLatLng;
    
    var directionsService = new google.maps.DirectionsService();
    var directionsDisplay = new google.maps.DirectionsRenderer();
    
    var marker = new google.maps.Marker(); 
	
	$ionicHistory.nextViewOptions({
	  disableBack: true
	});
	$ionicHistory.clearHistory();
	$ionicHistory.clearCache();
	
	$scope.$on('$ionicView.afterEnter', function(){
		connectionStatus = navigator.onLine ? 'online' : 'offline';  //alert(connectionStatus);
		if(connectionStatus == 'offline'){
			alert("Please check your internet connection.");
			$state.go("app.category");
			return;
		} else { //alert('networking');
			initialize();
		}
           
     }); 
	var map;
      function initialize() {
          
    
    myLatlng12 = new google.maps.LatLng(30.731212, 76.830220);
                        
        var mapOptions = {
            center: myLatlng12,
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: true,
            streetViewControl: false
          //  navigationControlOptions: {
          //      style: google.maps.NavigationControlStyle.SMALL
          //  }
        };
 
        map = new google.maps.Map(document.getElementById("map"), mapOptions);
		
		navigator.geolocation.getCurrentPosition(function(pos) {    console.log(pos);    

        myLatlng12 = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
        
        //map.setCenter(myLatlng12);        
        
        marker = new google.maps.Marker({
            position: myLatlng12,
            map: map,
            icon: 'img/mapmarker.png',
            animation: google.maps.Animation.DROP,
            title: 'My Location'
          });
        $scope.map = map;
        });
		
		        officeLatLng = new google.maps.LatLng(30.694209, 76.860565);
        
				map.setCenter(officeLatLng); 
				
				marker = new google.maps.Marker({
					position: officeLatLng,
					map: map,
					icon: 'img/store_32x32.png',
					title: 'My Office'
				  });
				  
				  var contentStr = '<h5>Panchkula Eco City,</h5><p>Sector 12, Adjoining HSIIDC</p><p>NH 73, Panchkula Ext. 11.</p>';
							
							
				contentStr += '<p>+91-9216590011, 22, 33</p>';
				contentStr += '<p>http://www.idyllicgroup.in/</p>';
				
				contentStr += '<br/><b>Click on marker to show route.</b>';
				
				var infowindowp = new google.maps.InfoWindow();
				infowindowp.setContent(contentStr);
				infowindowp.open(map,marker);
				
				marker.addListener('click', function (event) { //alert("Hi"); alert(myLatlng12);  alert(this.position);
					drawRoute(myLatlng12, this.position);
				});
      }
	  
	  function drawRoute(start, destination){
           // alert("drow");
       var travelMode = 'DRIVING';
                     
        var request = {
            origin : start,
            destination : destination,
            travelMode : google.maps.DirectionsTravelMode[travelMode]
        };  console.log("98"); console.log(request);
        
      //  service = new google.maps.places.PlacesService(map);
	  
		
        
        directionsService.route(request, function(response, status) { ///alert("theri");
            if (status == google.maps.DirectionsStatus.OK) { //alert("ok");
                
                directionsDisplay.setDirections(response); console.log("Route Response"); console.log(response);
            
                directionsDisplay.setDirections(response); console.log("Route Response"); console.log(response);
                
                RouteString = response;
                
                //Routes//
                
                route = RouteString.routes[0];
                  var summaryPanel = document.getElementById('directions-panel');
                  summaryPanel = ''; console.log("legs"); console.log(route.legs);
                  // For each route, display summary information.
                  for (var i = 0; i < route.legs.length; i++) { 
                    
                    console.log(route.legs[i].steps);
                   
                    var lmlShowDirectionIs = 0;
                  // $scope.totalText = " @@@@Distance " + route.legs[0].distance.text + " And Durations is  " + route.legs[0].duration.text;
                    for(var j = 0; j < route.legs[i].steps.length; j++){
                        
                        rroute = route.legs[i].steps[j]; //console.log(rroute); console.log("hello route latlong"); console.log(rroute.)
                       console.log("hello computing hard calculations :-C");
                      
                        console.log("My Current Location");                      
                        
                    }
                    
                    
                    
                    
                    
                    var routeSegment = i + 1;
                    summaryPanel += '<b>Route Segment: ' + routeSegment + '</b><br>';
                    summaryPanel += route.legs[i].start_address + ' to ';
                    summaryPanel += route.legs[i].end_address + '<br>';
                    summaryPanel += route.legs[i].distance.text + '<br><br>';
                  }
      
                    console.log(summaryPanel);
                     launchNavi(start, destination);
   
            }else{
				alert("error");
			}
			launchNavi(start, destination);
        });
        directionsDisplay.setPanel(document.getElementById('right-panel'));
        directionsDisplay.setMap(map);  console.log("Right Panel ABCDEFGHIJKLMNOPQRSTUVWXYZ");
        
        
        // var navigatorIcon = angular.element( document.querySelector( '#navigator' ) );
        // navigatorIcon.html('<a class="tab-item" ng-click="launchNavi('+start+','+destination+')">  <i class="icon ion-navigate" ></i> Navigation </a> ');
      }
      
      
      function launchNavi(start, destination){ //alert("navigatoin");
		var dlat = destination.lat();
		var dlng = destination.lng();
		var slat = destination.lat();
		var slng = destination.lng();
		
		launchnavigator.navigate(
		  [dlat, dlng],
		  //[slat, slng],
		  function(success){ console.log(success);
			 // alert("Plugin success");
		  },
		  function(error){
			//alert("Please choose destination point on map");
			 // alert("Plugin error: "+ error);
		  },
		  {
			navigationMode: "turn-by-turn",
			transportMode: "DRIVING",
			disableAutoGeolocation: false
		  });  //alert("Hello");
	   }
   
});
