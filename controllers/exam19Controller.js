angular.module("app")
    .controller("exam19Controller", function($scope) {
        $scope.imageName = "photo3.jpg";

        $scope.handleBtnClick = (event) => {
            if($scope.imageName === "photo1.jpg"){
                $scope.imageName = "photo2.jpg";
            } else {
                $scope.imageName = "photo1.jpg";
            }
            
        };

        $scope.todos = [
            {action: "동영상 녹화(Office)", complete: false},
            {action: "앵귤러 JS 복습(Home)", complete: false},
            {action: "알마인드(Home)", complete: false},
            {action: "밥먹기(Office)", complete: false}
        ];

        $scope.handleMouseEvent = (event) => {
            console.log("Evnet Type: " , event.type);
            console.log("Evnet Target: " , event.target);
            if(event.type === "mouseenter"){
                $(event.target).parent("tr").css("background-color", "#e9ecef");
                // 부모중에 tr을 찾아라 $(event.target).parent("tr")<- 제이쿼리
            } else {
                $(event.target).parent("tr").css("background-color", "#FFFFFF");
            }
        }
    });