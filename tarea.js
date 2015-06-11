
var app = angular.module("lixus",[]);
app.controller("FirstCtrl", function($scope){



$scope.array=[
  {
	  "name"  : "Andrey",
	  "age"   :  21,
	  "amount" :  21563
  },
	{
		"name"  : "Danny",
		"age"   :  27,
		"amount" :  11280
	},
	{
		"name"  : "Deybi",
		"age"   :  32,
		"amount" :  13200
	}


]
$scope.addPerson = function(){
	$scope.array.push({"name":$scope.pNombre,"age":$scope.pEdad,"amount":$scope.pDebe})
	$scope.pNombre ="";
}
	
$scope.delete = function(index){
$scope.array.splice(index,1);	
}

	
});