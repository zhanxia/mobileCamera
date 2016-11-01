$(function(){
	/*var but = document.getElementById("getCamera");
	navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
    window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL;
	but.onclick = function(){
		navigator.getUserMedia({
			video:true
		},function(stream){
			successCallback(stream);
		},function(){
			window.isRejectGamera=true;
			// Talent.app.execute('history:navigate', '#quiz/login-error?type=camera', true);
		})
	}

	function successCallback(stream){
		var video = document.createElement('video');
		video.height=200;
		$('.qu_img').html(video).show();
		video.src = (window.URL&&window.URL.createObjectURL(stream))||stream; 
		if(video.paused==true){
			video.play();
		}
	}*/
	function showVideo(data){
		$("#viewVideo").attr("src",data.result);
	}
	$("#select").change(function(e){
		console.log(e)
		console.log(this.files)
		var files = this.files;

	    for(var i = 0, f; f = files[i]; i++) {
	        var reader = new FileReader();
	        reader.onload = (function(file) {
	            return function(e) {
	                showVideo(this);
	            };
	        })(f);
	        //读取文件内容
	        reader.readAsDataURL(f);
	    }
	})
})