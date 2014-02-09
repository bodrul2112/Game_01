

define(["thirdparty/jquery",
        "services/TemplateService", 
        "game/controllers/Renderer"], function( jQuery, tpl, Renderer ) {
	
	var GameLoop = function() 
	{
		this.m_bOn = false;
		this.m_nTime = new Date().getTime();
		
		this.m_oRenderer = new Renderer();
	}

	GameLoop.prototype.setStage = function( oStage )
	{
		this.m_oRenderer.setStage( oStage );
	}
	
	GameLoop.prototype.start = function()
	{
		this.m_bOn = true;
		this._animate();
	}
	
	// place the rAF *before* the render() to assure as close to
	// 60fps with the setTimeout fallback.
	GameLoop.prototype._animate = function() 
	{
		if(this.m_bOn)
		{
			window.requestAnimationFrame(function(){
				
				this._animate();
				
			}.bind(this));

			this.render();
		}
	}
	
	GameLoop.prototype.render = function() 
	{
		var nNow = new Date().getTime();
		var fps = 1000/ (nNow - this.m_nTime);
		this.m_nTime = nNow;
		
		this.m_oRenderer.render();
	}
	
	GameLoop.prototype.stop = function()
	{
		this.m_bOn = false;
	}
	
	return GameLoop;
	
});