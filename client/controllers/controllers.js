myApp.controller('patController', function($scope,$route,$routeParams,$http){
	$scope.getPatients = function(){
		$http.get('/api/patients/').then(function(response){
			$scope.patients = response.data;
		});
	};
	$scope.showPatient = function(){
		var id = $routeParams.id;
		$http.get('/api/patients/'+ id).then(function(response){
			$scope.patient = response.data;
		});
	};
	$scope.addPatient = function(){
		//var id = $routeParams.id;
		$http.post('/api/patients/', $scope.patient).then(function(response){
			//$scope.patient = response.data;
			window.location.href = '/';
		});
	};
	$scope.updatePatient = function(){
		var id = $routeParams.id;
		$http.put('/api/patients/'+ id , $scope.patient).then(function(response){
			//$scope.patient = response.data;
			window.location.href = '/';
		});
	};
	$scope.deletePatient = function(id){
		var id = id;
		$http.delete('/api/patients/'+ id).then(function(response){
			$route.reload();
		});
	};
	
});