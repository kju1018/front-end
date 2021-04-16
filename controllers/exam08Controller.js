angular.module("app")
    .controller("exam08Controller", function($rootScope, $scope) {
        $scope.login = (user) => {
            if(user && user.uid && user.upassword) {
                //로그인이 성공되었다고 가정
                $rootScope.uid = user.uid;
                $rootScope.upassword = user.upassword;
            }
        };
    });