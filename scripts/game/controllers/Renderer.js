

define(["thirdparty/jquery","services/TemplateService", "game/canvas/GameCanvas"], function( jQuery, tpl, GameCanvas ) {
	
	var Renderer = function() 
	{
		this.m_oGameCanvas = new GameCanvas();
		this.m_o2DContext = this.m_oGameCanvas.get2DContext();
		this.m_oStage;
	}

	Renderer.prototype.setStage = function( oStage )
	{
		this.m_oStage = oStage;
	}
	
	Renderer.prototype.render = function( )
	{
		if(this.m_oStage)
		{
			var oScene = this.m_oStage.getScene();
			this._renderGround( oScene.getBackgroundObjects());
			this._renderGround( oScene.getMiddlegroundObjects() );
			this._renderGround( oScene.getForegroundObjects() );
		}
	}
	
	Renderer.prototype._renderGround = function( pGround )
	{
		for(var key in pGround)
		{
			var oDrawable = pGround[key];
			oDrawable = oDrawable.drawYourself( this.m_o2DContext );
		}
	}
	
	return Renderer;
	
});