angular.module("exam03Module", []) //의존 모듈이 없어도 대괄호를 써줘야 생성이 된다.
    .controller("exam03ModuleController", function($scope) { // (이름, 생성자)
        $scope.controllerName = "exam03ModuleController"; //여기 값이 화면에 나타나게 됨
    }); 