(function(){
'use strict';

angular.module('LunchCheck',[])

.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
	$scope.displayMsg = function () {
		$scope.message = countDishes($scope.lunchmenu);
		
	};
	
	function countDishes(dishes) {
		if(dishes == null || dishes == ""){
			$scope.colorValue="red";
			return "Please enter data first";
		}
		var allDishes=dishes.split(",");
		var dishesCount = 0;
		var dishesActualCount=countDishes(allDishes);
		function countDishes(allDishes){
			for(var i=0;i<allDishes.length;i++){
				if(allDishes[i] != "" && !hasWhiteSpace(allDishes[i]) )  {
					dishesCount++;
				} 
			}
			return dishesCount;
		}
		function hasWhiteSpace(s) {
			return s.indexOf(' ') >= 0;
		}
		if(dishesActualCount <= 3){
			$scope.colorValue="green";
			return "Enjoy!";
		}
		else{
			$scope.colorValue="green";
			return "Too much!";
		}
		
	}
}
})();
