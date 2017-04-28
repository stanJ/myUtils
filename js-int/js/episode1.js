//for(var i=0;i<5;i++){
//	setTimeout(function(){
//		console.log(new Date,i);
//	},1000)
//}
//console.log(new Date,i);

//for(var i=0;i<5;i++){
//	(function(j){
//		setTimeout(function(){
//			console.log(new Date,j);
//		},1000)
//	})(i)
//	
//}
//console.log(new Date,i);

//const tasks = [];
//for (var i = 0; i < 5; i++){
//	((j) => {
//		tasks.push(new Promise((resolve) => {
//			const func = () => {
//				console.log(new Date, j);
//				resolve();
//			}
//			setTimeout(func, 1000 * j);
//		}));
//	})(i);
//}
//for (var i = 0; i < 5; i++){
//	((j) => {
//		tasks.push(new Promise((resolve) => {
//			setTimeout(() => {
//				console.log(new Date, j);
//				resolve();
//			}, 1000 * j);
//		}));
//	})(i);
//}
//Promise.all(tasks).then(() => {
//	setTimeout(() => {
//		console.log(new Date, i);
//	}, 1000);
//})

//const sleep = (timeoutMS) => new Promise((resolve) => {
//	setTimeout(resolve, timeoutMS);
//})
//
//(async () => {
//	for (var i = 0; i < 5; i++) {
//		await sleep(1000);
//		console.log(new Date, i);
//	}
//	
//	await sleep(1000);
//	console.log(new Date, i);
//})()


/**
 * 变量作用域
 */
//var a = 1;
//function f1(a) {
//	console.log(a)
//}
//function f(params){
//	params.callback(a)
//}
//f({
//	callback: f1
//})

/**
 * 闭包
 */

var name = 'window'
var obj = {
	name: 'my object',
	getName () {
		return function(){
			return this.name
		}
	}
}
console.log(obj.getName()())

var name = 'window'
var obj = {
	name: 'my object',
	getName () {
		var that = this;
		return function(){
			return that.name
		}
	}
}
console.log(obj.getName()())
