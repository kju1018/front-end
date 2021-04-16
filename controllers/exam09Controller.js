angular.module("app")
    .controller("exam09Controller", function($rootScope, $scope) {
        $scope.login = (user) => {
            if(user && user.uid && user.upassword) {
                $rootScope.$broadcast("loginSuccess", {uid:user.uid});
            }
        };

        $scope.$on("loginSuccess", (event, message) => {
            console.log("exam09Controller가 loginSuccess 방송 수신함");
            console.log(message);
        });

        $scope.logout = () => {
            $rootScope.$broadcast("logout");
        };
    });