(function(app, undefined){
	console.log('This is appjs file');
}
(window.app==window.app||{}));

(function (custom, undefined){
	console.log('this is customjs');
	var a="ControllerJS";
}(app.custom == app.custom||{}))