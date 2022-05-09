// function a (){
//     debugger;
// }
// a();

// (function(){
//     debugger;
// })();

// var a = 2;
// function a(){
//     return "a";
// }
// console.log(a);

// var a = 1;
// {
//     console.log(a);
//     let a = 2;
// }

// {
//     function a (){};
//     a = 1;
//     console.log("🚀 ~ file: day43.js ~ line 25 ~ a", a)
//     // 1
// }
// console.log("🚀 ~ file: day43.js ~ line 24 ~ a", a);
// // function a(){}

// a = 3;
// function a(){
//     return "a";
// }
// console.log(a);

// 块级作用域   里面var a = function(){}提升到外面
// {
//     function a (){};
//     var a = 1;
//     console.log("🚀 ~ file: day43.js ~ line 25 ~ a", a)
//     // 1
// }
// console.log("🚀 ~ file: day43.js ~ line 24 ~ a", a);
// // SyntaxError: Identifier 'a' has already been declared

// function init(){
//     console.log('outer');
// }
// if(false){
//     function init(){
//         console.log('inner');
//     }
// }
// init();
// 'outer'

// function init(){
//     console.log('outer');
// }
// function b(){
//     if(false){
//         function init(){
//             console.log('inner');
//         }
//     }
//     init();
// }

// b();


// this.a  = 20;
// function go(){
//     console.log(this.a);
//     this.a = 30;
// }
// var test = {
//     a: 50,
//     init: function(fn){
//         // function go(){
//         //     console.log(this.a);
//         // }
//         // go();
//         // setTimeout(function(){
//         //     console.log(this.a);
//         // }, 0)
//         // setTimeout(() => {
//         //     console.log(this.a);
//         // }, 0)
//         fn();
//     }
// }
// test.init(go);

// var a = 20;
// function b(){
//     console.log(this.a);
//     this.a = 30;
// }
// b();
// console.log(this.a);

this.a  = 20;
function go(){
    console.log(this);
    console.log('🍌',this.a);
    this.a = 30;
}
go.prototype.a = 40;
var test = {
    a: 50,
    init: function(fn){
        // function go(){
        //     console.log(this.a);
        // }
        // go();
        // setTimeout(function(){
        //     console.log(this.a);
        // }, 0)
        // setTimeout(() => {
        //     console.log(this.a);
        // }, 0)
        fn();
        console.log("🚀 ~ file: day43.js ~ line 128 ~ a", this.a);
        return fn;
    },
}
   
// console.log('1',new go().a);
var p = test.init(go);
p();