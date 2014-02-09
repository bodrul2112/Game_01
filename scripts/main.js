

require( ["plugins/domReady"], function(domReady){
    
	domReady(function(){
		
		require(["thirdparty/jquery", "game/Game"], function( jQuery, Game ) {
			
			console.log("im here");
			
			var oGame = new Game();
			
			console.log("and here");
			
		});
		
	});

});

