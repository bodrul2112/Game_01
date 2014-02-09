
define(["thirdparty/jquery",
        "services/TemplateService",
        "game/controllers/Scene",
        "game/drawables/Helicopter"], 
        
    function( jQuery, tpl, Scene, Helicopter ) 
    {
		var BaseStage = function(  ) 
		{
			this.m_oScene = new Scene();
			
			this.m_oHelicopter = new Helicopter();
			this.m_oScene.addToMiddleGround( this.m_oHelicopter );
		}
		
		BaseStage.prototype.getScene = function()
		{
			return this.m_oScene;
		}
		
		return BaseStage;
	
});