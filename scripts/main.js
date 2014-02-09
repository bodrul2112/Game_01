

require( ["plugins/domReady"], function(domReady){
    
	domReady(function(){
		
		require(["thirdparty/jquery", "shims/Shims", "game/Game"], function( jQuery, Shims, Game ) {
			
			console.log("im here");
			
			var oGame = new Game();
			
			console.log("and here");
			
		});
		
	});

});

