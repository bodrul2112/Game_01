

define(["thirdparty/jquery",
        "services/TemplateService",
        "game/canvas/GameCanvas",
        "game/controllers/GameLoop"], 
        
    function( jQuery, tpl, GameCanvas, GameLoop ) {
	
		var Game = function(  ) {
			
			this.m_oGameCanvas = new GameCanvas();
			this.m_oGameLoop = new GameLoop(); 
			
			
			this.m_oGameLoop.start();
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