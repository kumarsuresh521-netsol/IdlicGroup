angular.module('starter.services', [])
// Read More Directory....
.directive('ddTextCollapse', ['$compile', function($compile) {

    return {
        restrict: 'A',
        scope: true,
        link: function(scope, element, attrs) {

            scope.collapsed = false;

            scope.toggle = function() {
                scope.collapsed = !scope.collapsed;
            };

            attrs.$observe('ddTextCollapseText', function(text) {

                var maxLength = scope.$eval(attrs.ddTextCollapseMaxLength);

                if (text.length > maxLength) {
                    var firstPart = String(text).substring(0, maxLength);
                    var secondPart = String(text).substring(maxLength, text.length);

                    var firstSpan = $compile('<span style="align:justify;">' + firstPart + '</span>')(scope);
                    var secondSpan = $compile('<span style="align:justify;" ng-if="collapsed">' + secondPart + '</span>')(scope);
                    var moreIndicatorSpan = $compile('<span style="align:justify;" ng-if="!collapsed">... </span>')(scope);
                    var lineBreak = $compile('<br ng-if="collapsed">')(scope);
                    var toggleButton = $compile('<span style="align:justify;" class="collapse-text-toggle" ng-click="toggle()" style="color: #0066ff !important;font-weight: 600 !important;text-decoration: underline !important;">{{collapsed ? "Read Less" : "Read More"}}</span>')(scope);

                    element.empty();
                    element.append(firstSpan);
                    element.append(secondSpan);
                    element.append(moreIndicatorSpan);
                    element.append(lineBreak);
                    element.append(toggleButton);
                } else {
                    element.empty();
                    element.append(text);
                }
            });
        }
    };
}])



.factory('news', function($q, $http) {

	return({
		newsfeed: newsfeed
	});
	
	function newsfeed(team_id){ console.log("team feeds by team id");
					
		var request = $http.post("http://api.idyllicgroup.in/webservice/get_posts/?post_type=attachment");
		return( request.then( handleSuccess, handleError ) );
	}
	
	function handleError( response ) {
	   if (
			! angular.isObject( response.data ) ||
			! response.data.message
			) { console.log("Check service handleError function. your services call return error");
			return( $q.reject( "An unknown error occurred." ) );
		}
		 return( $q.reject( response.data.message ) );
	}
	
	function handleSuccess( response ) {
		return( response.data );
	}
})
           

.factory('EmailComposer', ['$q', function ($q) {
//alert("dud");
    return {
      isAvailable: function () { console.log("in available func");
        var q = $q.defer();

        cordova.plugins.email.isAvailable(function (isAvailable) {
          if (isAvailable) {
            q.resolve();
          } else {
            q.reject();
          }
        });

        return q.promise;
      },

      open: function (properties) { console.log("in open funciton");
        var q = $q.defer();

        cordova.plugins.email.open(properties, function () {
          q.reject(); // user closed email composer
        });

        return q.promise;
      },

      addAlias: function (app, schema) { console.log("ion aliancs.");
        cordova.plugins.email.addAlias(app, schema);
      }
    };
  }]);
