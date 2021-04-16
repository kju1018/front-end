angular.module("app")
    //[서비스 선언 방법1]  -----------------------
    .factory("counterServiceByFactory", function(){
        //숨김 데이터
        //외부에서 노출이 안됌
        let count = 0;

        //서비스 객체를 리턴
        return {
            // count: 0,
            // addCount: function() {
            //     this.count++;
            // }
            // 객체 안에서 count를 사용하려면 this를 사용해야함(function 함수로)
            //화살표 함수에서 this.count는 count: 0에 count가 아님
            addCount: function() {
                count++;
                //외부에서 선언했기 때문에 this를 붙일 필요가없음
            },
            getCount: function() {
                return count;
            }
        };
    })
    //[서비스 선언 방법2] -------------------
    .service("counterServiceByService", function() {
        this.count = 0;
        this.addCount = () => this.count++;

        this.getCount = () => this.count;

    })
    //[서비스 선언 방법3]---------------------------------
    .provider("counterServiceByProvider", function() {

        //숨김 데이터
        let count = 0;
        //프로바이더 객체를 리턴(서비스X)
        return {
            //config에서만 주입 받을 수 있음 app.js의 config
            //$get은 사용 불가
            //서비스 객체의 초기화 함수
            setCount: function(value) {
                count = value;
            },
            $get: function() {
                //이 친구가 서비스 객체
                return {
                    addCount: function(){
                        count++;
                    },
                    getCount: function() {
                        return count;
                    }
                };
            }
        };
    });