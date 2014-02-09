

require( ["plugins/domReady"], function(domReady){
    
	domReady(function(){
		
		require(["thirdparty/jquery"], function(jQuery) {
			
			console.log("im here");
			
		});
		
	});

});

