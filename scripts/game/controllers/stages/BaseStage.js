
define(["thirdparty/jquery",
        "services/TemplateService",
        "game/controllers/Scene",
        "game/drawables/background/BasicBackground", 
        "game/drawables/background/Cloud", 
        "game/drawables/Helicopter", 
        "game/drawables/player/Ball"], 
        
    function( jQuery, tpl, Scene, BasicBackground, Cloud, Helicopter, Ball ) 
    {
		var BaseStage = function(  ) 
		{
			this.m_oScene = new Scene();
//			this.m_oHelicopter = new Helicopter();
//			this.m_oScene.addToMiddleground( this.m_oHelicopter );
			
			this.m_oScene.addToBackground( new BasicBackground() );
			
			for(var i=0; i<25; i++)
			{
				this.m_oScene.addToBackground( new Cloud() );
			}
			
			this.m_oPlayer = new Ball();
			
			this.m_oScene.addToMiddleground( this.m_oPlayer  );
			
			
			for(var i=0; i<25; i++)
			{
				this.m_oScene.addToForeground( new Cloud() );
			}
			
			
//			var oCoords = this.m_oHelicopter.getBasicDrawable().getCoords();
//			oCoords.setX( $(window).width() );
//			oCoords.setY( $(window).height() );
			
		}
		
		BaseStage.prototype.getPlayer = function()
		{
			return this.m_oPlayer;
		}
		
		BaseStage.prototype.getScene = function()
		{
			return this.m_oScene;
		}
		
		return BaseStage;
	
});