angular.module("Training6",["ngRoute"])

.config(function($routeProvider){
  $routeProvider
  .when("/",{
    templateUrl: "../views/home.html",
    controller: "HomeCtrl"
  })
  .when("/listado",{
    templateUrl: "../views/listado.html",
    controller: "ListCtrl"
  })
  .when("/agregar",{
    templateUrl: "../views/add.html",
    controller: "AddCtrl"
  })
  .when("/editar/:id",{
    templateUrl: "../views/add.html",
    controller: "EditCtrl"
  });
})

.controller("HomeCtrl", function($scope, $http){
  $scope.test = "Home";
})

.controller("ListCtrl", function($scope, $http){
  $scope.test = "Listado";

  $scope.getAll = function(){
    $http.get("/products").success(function(data){
      $scope.products = data;
    });
  };
  $scope.delete = function(product){
    $http.delete('/products/' + product._id).success(function(data){
      $scope.getAll();
    });
  };


  $scope.getAll();
})

.controller("AddCtrl", function($scope, $http){
  $scope.test = "Agregar Producto";

  $scope.add = function(product){
    $http.post("/products", product).success(function(data){
      $scope.product = {};
    });
  };

})

.controller("EditCtrl", function($scope, $http, $routeParams){
  $scope.getOne = function(id){
    $http.get('/products/' + id).success(function(data){
      $scope.product = data;
      console.log($scope.product);
    });
  };

  $scope.add = function(product){
    $http.put('/products/' + product._id, product).success(function(data){
      console.log('success');
    });
  };

  $scope.getOne($routeParams.id);

  console.log($routeParams.id);
})
