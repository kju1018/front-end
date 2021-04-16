angular.module("app", ["ngRoute", "exam03Module", "exam04Module"]) //대괄호가 있으면 생성, 없으면 있는것을 가져다가 쓰는것
    .config(function(counterServiceByProviderProvider, $logProvider) {
        console.log("app - config callback");
        counterServiceByProviderProvider.setCount(100);
        $logProvider.debugEnabled(false);
    })
    .run(function($rootScope) {
        console.log("app - run callback");
        //전역 데이터
        $rootScope.rootUid = "user100";
        //전역 함수
        $rootScope.rootGetGreet = () => {
            return "Hello! AngularJS";
        }
    })
    //중첩된 컨트롤러 범위에서 사용할 수 있는 상태 데이터 및 함수
    .controller("mainController", function($rootScope, $scope){
        $scope.mainUid = "user200";
        $scope.mainGetGreet = () => {
            return "Hello!. MainController";
        }

        $scope.logout = () => {
            $rootScope.uid="";
        }

        $scope.$on("loginSuccess", (event, message) => {
            console.log("mainController가 loginSuccess 방송 수신함");
            console.log(message);
            $rootScope.uid = message.uid;
        });

        $scope.$on("logout", (event) => {
            console.log("mainController가 logout 방송 수신함");
            $rootScope.uid = "";
        });
    });