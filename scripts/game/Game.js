

define(["thirdparty/jquery",
        "services/TemplateService",
        "game/controllers/GameLoop",
        "game/canvas/GameCanvas",
        "game/controllers/Renderer",
        "game/controllers/stages/Stage01"], 
        
    function( jQuery, tpl, GameLoop, GameCanvas, Renderer, Stage01 ) {
	
		var Game = function(  ) {
			
			var oGameCanvas = new GameCanvas();
			var oRenderer = new Renderer( oGameCanvas );
			var oStage = new Stage01();
			
			oGameCanvas.setMouseTouchListenersFromStage( oStage );
			
			this.m_oGameLoop = new GameLoop( oRenderer ); 
			this.m_oGameLoop.setStage( oStage );
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