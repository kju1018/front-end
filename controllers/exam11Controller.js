angular.module("app")
    .controller("exam11Controller", function($scope) {
        $scope.content = "";

        $scope.setContent = (content) => {
            $scope.content = content;
        };
    });