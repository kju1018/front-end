angular.module("app")
    .controller("exam26Controller", function($scope, exam26Service, $rootScope) {

        $scope.$on("$routeChangeSuccess", () => {
            $scope.getList(1);
        });

        $scope.view = "list";

        $scope.getView = () => {
            console.log("getview 실행" + $scope.view);
            switch($scope.view) {
                case "list": return "views/exam26_http_boards/list.html";
                case "create": return "views/exam26_http_boards/create.html";
                case "read": return "views/exam26_http_boards/read.html";
                case "update": return "views/exam26_http_boards/update.html";
            }
        }
        
        $scope.createBoardForm = () => {
            $scope.board = null;
            $scope.view = "create";
          };

        $scope.getList = (pageNo) => {
            exam26Service.list(pageNo)//promise를 가져옴
                .then((response) => {
                    $scope.pager = response.data.pager;
                    $scope.boards = response.data.boards;
                    $scope.pageRange = [];
                    for(var i = $scope.pager.startPageNo; i<=$scope.pager.endPageNo; i++){
                        $scope.pageRange.push(i);
                    }
                    $scope.view = "list";
                });
        };

        $scope.read = (bno) => {
            exam26Service.read(bno)
                .then((response) => {
                    $scope.board = response.data;
                    $scope.view = "read";
                });
        };

        $scope.battachUrl = (bno) => {
            return exam26Service.battachUrl(bno);
        };

        $scope.createBoard = (board) => {
            if(board && board.btitle && board.bcontent){
                var formData = new FormData();//이게 멀티파트 데이터
                formData.append("btitle", board.btitle);
                formData.append("bcontent", board.bcontent);
                formData.append("bwriter", $rootScope.uid);
                var battach = $("#battach")[0].files[0];
                //document.querySelector("#battach").files[0];
                if(battach){
                    formData.append("battach", battach);
                }
                exam26Service.create(formData)
                    .then((response) => {
                        $scope.getList(1);
                        $scope.view = "list";
                    });
            }
        };

        $scope.cancel = () => {
            $scope.getList($scope.pager.pageNo);
            $scope.view = "list";
        };
//----------------------------------------------------------------------------------------------------------------
        $scope.updateBoardForm = () => {
            $scope.view="update";
        }

        $scope.updateBoard = (board) => {
            if(board && board.btitle && board.bcontent) {
                var formData = new FormData();//이게 멀티파트 데이터
                formData.append("bno", board.bno);
                formData.append("btitle", board.btitle);
                formData.append("bcontent", board.bcontent);
                var battach = $("#battach")[0].files[0];
                if(battach){
                    formData.append("battach", battach);
                }

                exam26Service.update(formData)
                    .then((response) => {
                        // $scope.getList($scope.pager.pageNo);
                        $scope.read(board.bno);
                        $scope.view = "list";
                    });
            }
        }

        $scope.deleteBoard = (bno) => {
            exam26Service.delete(bno)
                .then((response) => {
                    $scope.getList(1);
                    $scope.view = "list";
                });
        }
    });