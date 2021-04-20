angular.module("app")
    .controller("exam27Controller", function($scope, exam27Service, $window, $rootScope, $location) {
        $scope.login = (user) => {
            exam27Service.login(user)
                .then((response) => {
                    $rootScope.uid = response.data.uid;
                    $rootScope.authToken = response.data.authToken;

                    sessionStorage.setItem("uid", response.data.uid);
                    sessionStorage.setItem("authToken", response.data.authToken);

                    $location.url("/");
                })
                .catch((response) => {
                    $window.alert("로그인 실패: ", response.data.message);
                });
        };
    });