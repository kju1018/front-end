angular.module("app")//여기 function은 생성자 함수
    .factory("exam25Service", function($http) {
        //변수 선언
        const BASE_URL = "http://localhost:8080/products";
        //서비스 객체 리턴
        return {
            list: function(pageNo=1) {//pageNo값이 넘어오지 않으면 default로 1을 사용하겠다.
                const promise = $http.get(BASE_URL, {params: {pageNo}})// $http.get(BASE_URL, {params: {pageNo}})는 promise를 리턴 비동기 통신이기때문에
                return promise;
            },
            read: function(pid) {
                const promise = $http.get(BASE_URL + "/" + pid);
                return promise;
            },   
            create: function(product) {
                const promise = $http.post(BASE_URL, product);
              
                return promise;
            },

            update: function(product) {
                console.log(product);
                const promise = $http.put(BASE_URL, product);
              
                return promise;
            },

            delete: function(pid) {
                const promise = $http.delete(BASE_URL+ "/" + pid);

                return promise;
            }

            
        }
    });