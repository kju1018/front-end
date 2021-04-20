angular.module("app")//여기 function은 생성자 함수
    .factory("exam26Service", function($http) {
        //변수 선언
        const BASE_URL = "http://localhost:8080/boards";
        //서비스 객체 리턴
        return {
            list: function(pageNo=1) {//pageNo값이 넘어오지 않으면 default로 1을 사용하겠다.
                const promise = $http.get(BASE_URL, {params: {pageNo}})// $http.get(BASE_URL, {params: {pageNo}})는 promise를 리턴 비동기 통신이기때문에
                return promise;
            },
            read: function(bno) {
                const promise = $http.get(BASE_URL + "/" + bno);
                return promise;
            },

            battachUrl: function(bno) {
                return BASE_URL + "/battach/" + bno;
            },

            create: function(formData) {
                const promise = $http.post(BASE_URL, formData, {headers:{"Content-Type":undefined}});
                //멀티파트로 받을때 반드시 헤더에 뭔가 있어야함
                //멀티파트는 바디가 여러 파티로 나누어져서 보내짐 (각각의 파트마다 Content-type이 별도로 들어감)
                //그래서 헤더에 Content-type을 명시해버리면 body 내용의 타입이 이거다 라고 딱 명시하는것이라서 undefined로 함
                return promise;
            },
//--------------------------------------------------------------------------------------------------------
            update: function(formData) {
                const promise = $http.put(BASE_URL, formData, {headers:{"Content-Type":undefined}});

                return promise;
            },

            delete: function(bno) {
                const promise = $http.delete(BASE_URL + "/" + bno);

                return promise;
            }
        }
    });