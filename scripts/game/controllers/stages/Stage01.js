
define(["thirdparty/jquery",
        "services/TemplateService",
        "game/controllers/stages/BaseStage",
        "game/controllers/StupidCollisionDetection"], 
        
    function( jQuery, tpl, BaseStage, StupidCollisionDetection ) 
    {
		var Stage01 = function(  ) 
		{
			this.m_oBasicStage = new BaseStage();
			this.m_oScene = this.m_oBasicStage.getScene();
			this.m_Collision = new StupidCollisionDetection();
		}
		
		Stage01.prototype.getScene = function()
		{
			// really stupid place to put collision detection i know
			var oRectangle = this.m_oBasicStage.getPlayer().getBasicDrawable().getCoords();
			
			this.m_Collision.detect( oRectangle,  this.m_oScene );
			return this.m_oScene;
		}
		
		return Stage01;
	
});