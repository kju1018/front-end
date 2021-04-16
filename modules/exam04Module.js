angular.module("exam04Module",[])
    .config(function() {//모드가 로딩될때 자동으로 실행 config
        console.log("exam04Module - config callback");
    })
    .run(function() {
        console.log("exam04Module - run callback")
    });