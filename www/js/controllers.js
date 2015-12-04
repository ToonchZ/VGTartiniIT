angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $ionicPlatform) {
	
	var dir = "";
   if($ionicPlatform.is('android')){dir = '/android_asset/www/';}
     
	$scope.naslovna_slika_1 = dir + "img/uvod_levo.jpg";
    $scope.naslovna_slika_2 = dir + "img/uvod_desno.jpg";
})

.controller('GuideCtrl', function($scope, Guide) {
  $scope.guide = Guide.all();
})

.controller('LocationDetailCtrl', function($scope, $stateParams, Guide, MediaSrv) {
  	
  	$scope.location = Guide.get($stateParams.locationId);

	if($scope.location.audio){
		var myMedia = null;
	
		MediaSrv.loadMedia($scope.location.audio).then(function(media){
			myMedia = media;
		});
	 
		$scope.play = function(){
			if(myMedia !== null){
				myMedia.play();
			}
		};
		$scope.stop = function(){
			myMedia.stop();
		};
		$scope.pause = function(){
			myMedia.pause();
		};
		
		$scope.$on('$ionicView.afterLeave', function(){
	  		myMedia.stop();
		});
	};
	
	$scope.hasAudio = function(){
		if($scope.location.audio){
			return true;
		}
		else{
			return false;
		}
	}
    
    if($stateParams.locationId < 14){
        $scope.next_location = parseInt($stateParams.locationId) + 1;
    }
    else{
        $scope.next_location = 1;
    }
})


/*
.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
*/
