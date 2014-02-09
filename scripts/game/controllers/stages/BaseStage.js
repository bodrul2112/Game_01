
define(["thirdparty/jquery",
        "services/TemplateService",
        "game/controllers/Scene",
        "game/drawables/ParallaxBackground", 
        "game/drawables/background/Cloud", 
        "game/drawables/Helicopter"], 
        
    function( jQuery, tpl, Scene, ParallaxBackground, Cloud, Helicopter ) 
    {
		var BaseStage = function(  ) 
		{
			this.m_oScene = new Scene();
//			this.m_oHelicopter = new Helicopter();
//			this.m_oScene.addToMiddleground( this.m_oHelicopter );
			
			this.m_oScene.addToBackground( new ParallaxBackground() );
			
			for(var i=0; i<50; i++)
			{
				this.m_oScene.addToBackground( new Cloud() );
			}
			
			
			for(var i=0; i<50; i++)
			{
				this.m_oScene.addToForeground( new Cloud() );
			}
			
			
//			var oCoords = this.m_oHelicopter.getBasicDrawable().getCoords();
//			oCoords.setX( $(window).width() );
//			oCoords.setY( $(window).height() );
			
		}
		
		BaseStage.prototype.getScene = function()
		{
			return this.m_oScene;
		}
		
		return BaseStage;
	
});