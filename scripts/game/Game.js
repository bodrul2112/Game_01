

define(["thirdparty/jquery",
        "services/TemplateService",
        "game/canvas/GameCanvas"], 
        
    function( jQuery, tpl, GameCanvas ) {
	
		var Game = function(  ) {
			
			this.m_oGameCanvas = new GameCanvas();
		}
		
		Game.prototype.start = function() {
			
		}
		
		Game.prototype.restart = function() {
			
		}
		
		Game.prototype.stop = function() {
			
		}
		
		Game.prototype.pause = function() {
			
		}
	
	
	return Game;
	
});