stacksherpa.controller("FlavorListCtrl", function($rootScope, $scope, $compile) {
	
	$scope.page = 'views/compute/flavors/list.html'
	
	$scope.onCreate = function() {
		
		$rootScope.$broadcast('modal.show',{view : 'views/compute/flavors/create.html'});
		
	}

	$scope.onDelete = function() {
		
		$("tbody input[type=checkbox]").each(function(index) {
			if($(this).is(":checked")) {
				servers[index].toDelete = true
			}
		});
		
		$scope.servers = servers = servers.filter(function(server) {
			return !server.toDelete;
		});
		
		if(!servers.length) {
			$("thead input[type=checkbox]").prop("checked", false)
		}
	}

	$scope.onRefresh = function() {
		nova.listFlavors(function(data) {
			$scope.flavors = data.flavors;
			$scope.$apply();
		});
	}
	
	$scope.onRefresh();

});
stacksherpa.controller("FlavorShowCtrl", function($rootScope, $scope, $routeParams, $location) {
	
	$scope.page = 'views/compute/flavors/show.html'

});