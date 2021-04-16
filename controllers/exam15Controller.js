angular.module("app")
    .controller("exam15Controller", function($scope) {
        $scope.todos = [
            {action: "동영상 녹화(Office)", complete: false},
            {action: "앵귤러 JS 복습(Home)", complete: false},
            {action: "알마인드(Home)", complete: false},
            {action: "밥먹기(Office)", complete: false}
        ];

        $scope.viewFile = () =>{
            const fileName = $scope.showList?"list.html" : "table.html";
            return fileName;
        };

        $scope.changeView = () => {
            $scope.showList = !$scope.showList;
        }

        $scope.handleLoad = () => {
            console.log("AJAX 통신이 완료됨");
        }
    });