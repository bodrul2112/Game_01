

define(["thirdparty/jquery",
        "services/TemplateService",
        "game/controllers/GameLoop",
        "game/controllers/stages/Stage01"], 
        
    function( jQuery, tpl, GameLoop, Stage01 ) {
	
		var Game = function(  ) {
			
			this.m_oGameLoop = new GameLoop(); 
			this.m_oGameLoop.setStage(new Stage01());
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