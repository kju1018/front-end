angular.module("app")
  .controller("exam05Controller", function($scope) {
    console.log("app.exam05Controller instanciation");
    $scope.controllerName = "app.exam05Controller"; //정의 일뿐, 태그를 해야 컨트롤러가 생성된다.
  });