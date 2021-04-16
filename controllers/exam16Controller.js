angular.module("app")
    .controller("exam16Controller", function($scope) {
        $scope.view = {
            modes: ["none", "table", "list"],
            mode: "none"
        };

        $scope.todos = [
            {action: "동영상 녹화(Office)", complete: false},
            {action: "앵귤러 JS 복습(Home)", complete: false},
            {action: "알마인드(Home)", complete: false},
            {action: "밥먹기(Office)", complete: false}
        ];

    });