myApp.controller('patController', function ($scope, $route, $routeParams, $http) {
	$scope.getPatients = function () {
		$http.get('/api/patients/').then(function (response) {
			$scope.patients = response.data;
		});
	};
	$scope.showPatient = function () {
		var id = $routeParams.id;
		$http.get('/api/patients/' + id).then(function (response) {
			$scope.patient = response.data;
		});
	};
	$scope.addPatient = function () {
		//var id = $routeParams.id;
		var a = document.forms["add"]["firstname"].value;
		var b = document.forms["add"]["lastname"].value;
		var c = document.forms["add"]["sex"].value;
		var d = document.forms["add"]["age"].value;
		var e = document.forms["add"]["contact"].value;
		var f = document.forms["add"]["doctor"].value;
		var g = document.forms["add"]["bloodpressure"].value;
		var h = document.forms["add"]["respiratoryrate"].value;
		var i = document.forms["add"]["bloodoxygenlevel"].value;
		var j = document.forms["add"]["heartbeatrate"].value;
		if (a == null || a == "") {
			alert("First Name cannot be null");
			add.firstname.focus();
			return false;
		}
		if (b == null || b == "") {
			alert("Last Name cannot be null");
			add.lastname.focus();
			return false;
		}
		if (c == null || c == "") {
			alert("Sex cannot be null");
			add.sex.focus();
			return false;
		}
		if (d == null || d == "") {
			alert("Age cannot be null");
			add.age.focus();
			return false;
		}
		if (e == null || e == "") {
			alert("Contact cannot be null");
			add.contact.focus();
			return false;
		}
		if (f == null || f == "") {
			alert("Doctor cannot be null");
			add.doctor.focus();
			return false;
		}
		if (g == null || g == "") {
			alert("Blood Pressure cannot be null");
			add.bloodpressure.focus();
			return false;
		}
		if (h == null || h == "") {
			alert("Respiratory Rate cannot be null");
			add.respiratoryrate.focus();
			return false;
		}
		if (i == null || i == "") {
			alert("Blood Oxygen Level cannot be null");
			add.bloodoxygenlevel.focus();
			return false;
		}
		if (j == null || j == "") {
			alert("Heart Beat Rate cannot be null");
			add.heartbeatrate.focus();
			return false;
		}
		$http.post('/api/patients/', $scope.patient).then(function (response) {
			//$scope.patient = response.data;
			window.location.href = '/';
		});
	};
	$scope.updatePatient = function () {
		var a = document.forms["edit"]["firstname"].value;
		var b = document.forms["edit"]["lastname"].value;
		var c = document.forms["edit"]["sex"].value;
		var d = document.forms["edit"]["age"].value;
		var e = document.forms["edit"]["contact"].value;
		var f = document.forms["edit"]["doctor"].value;
		var g = document.forms["edit"]["bloodpressure"].value;
		var h = document.forms["edit"]["respiratoryrate"].value;
		var i = document.forms["edit"]["bloodoxygenlevel"].value;
		var j = document.forms["edit"]["heartbeatrate"].value;
		if (a == null || a == "") {
			alert("First Name cannot be null");
			edit.firstname.focus();
			return false;
		}
		if (b == null || b == "") {
			alert("Last Name cannot be null");
			edit.lastname.focus();
			return false;
		}
		if (c == null || c == "") {
			alert("Sex cannot be null");
			edit.sex.focus();
			return false;
		}
		if (d == null || d == "") {
			alert("Age cannot be null");
			edit.age.focus();
			return false;
		}
		if (e == null || e == "") {
			alert("Contact cannot be null");
			edit.contact.focus();
			return false;
		}
		if (f == null || f == "") {
			alert("Doctor cannot be null");
			edit.doctor.focus();
			return false;
		}
		if (g == null || g == "") {
			alert("Blood Pressure cannot be null");
			edit.bloodpressure.focus();
			return false;
		}
		if (h == null || h == "") {
			alert("Respiratory Rate cannot be null");
			edit.respiratoryrate.focus();
			return false;
		}
		if (i == null || i == "") {
			alert("Blood Oxygen Level cannot be null");
			edit.bloodoxygenlevel.focus();
			return false;
		}
		if (j == null || j == "") {
			alert("Heart Beat Rate cannot be null");
			edit.heartbeatrate.focus();
			return false;
		}
		var id = $routeParams.id;
		$http.put('/api/patients/' + id, $scope.patient).then(function (response) {
			//$scope.patient = response.data;
			window.location.href = '/';
		});
	};
	$scope.deletePatient = function (id) {
		var id = id;
		$http.delete('/api/patients/' + id).then(function (response) {
			$route.reload();
		});
	};

});