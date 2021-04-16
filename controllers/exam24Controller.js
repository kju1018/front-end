angular.module("app")
    .controller("exam24Controller", function($scope, $window, $document, $timeout, $interval, $location, $routeParams, $anchorScroll
                                    ,$log) {
        $scope.data = "xxx";

        $scope.openAlert = () => {
            $window.alert("알림 메시지...");
        };

        $scope.findDom = () => {
            //제이쿼리로 사용 (앵귤러가 관리하는 코드가 아님. 순수 자바스크립트)
            // $("#content").html("Hello, AngularJS")

            $document.find("#content").html("Hello, AngularJS");
        };

        let timerId;
        $scope.startTime = () => {
            //순수 자바스크립트로 앵귤러가 관리하지 않음 
            //가급적 $timeout을 사용 $timeout는 window.setTimeout을 서비스로 만든 객체
            //그럼 앵귤러 내부에서 실행 
            // window.setTimeout(() => {
            //     $scope.data = "yyyy";//얘는 앵귤러 데이터이기때문에 안바뀜
            // }, 3000); 

            // $timeout(() => {
            //     $scope.data = "yyyy";
            // }, 3000);

            timerId = $interval(() => {
                var now = new Date();
                $document.find("#content").html(now.toLocaleDateString() + " " + now.toLocaleTimeString());
            }, 1000);
        }

        $scope.endTime = () => {
            if(timerId) {
                $interval.cancel(timerId);
            }
        }

        $scope.changeUrl1 = (pageNo) => {
            // const url = "/exam24_builtin_service/boards?pageNo=" + pageNo;
            const path = `/exam24_builtin_service/boards?pageNo=${pageNo}#bottom`;
            $location.url(path);
        };

        $scope.changeUrl2 = (bno, pageNo) => {
            // const url = "/exam24_builtin_service/boards?pageNo=" + pageNo;
            const path = `/exam24_builtin_service/boards/${bno}?pageNo=${pageNo}#bottom`;
            $location.url(path);
        };

        $scope.$on("$locationChangeSuccess", () => {
            // const currentUrl = $location.url()//매개값이 있으면 세팅, 없으면 현재 url을 받아옴
            console.log("$location.url(): ", $location.url());
            console.log("$location.path(): ", $location.path());
            console.log("$location.search(): ", $location.search());//pageNo 사용 : $location.search().pageNo
            console.log("$location.hash(): ", $location.hash());

            // $anchorScroll($location.hash());

            console.log("$routeParams: ", $routeParams);
            const bno = $routeParams.bno;
            const pageNo = $routeParams.pageNo;
            console.log(bno + " " + pageNo);
        });

        $scope.items = [];
        for(var i = 0; i<50; i++){
            $scope.items.push("Item " + i);
        }

        $scope.show = (id) => {
            $anchorScroll(id);
        };

        $scope.handlePrintLog = () => {
            $log.error("error message");
            $log.warn("warn message");
            $log.info("info message");
            $log.debug("debug message");
        }
    });
