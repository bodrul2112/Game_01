


define(["thirdparty/jquery","services/TemplateService"], function( jQuery, tpl ) {
	
	var Scene = function(  ) 
	{
		this.m_pBackgroundObjects = [];
		this.m_pMiddlegroundObjects = [];
		this.m_pForegroundObjects = [];
	}

	// sexy parallax scrolling vistas?
	Scene.prototype.addToBackground = function( oDrawable )
	{
		this.m_pBackgroundObjects.push( oDrawable );
	}
	
	Scene.prototype.addToMiddleground = function( oDrawable )
	{
		this.m_pMiddlegroundObjects.push( oDrawable );
	}
	
	Scene.prototype.addToForeground = function( oDrawable )
	{
		this.m_pForegroundObjects.push( oDrawable );
	}
	
	Scene.prototype.getBackgroundObjects = function()
	{
		return this.m_pBackgroundObjects;
	}
	
	Scene.prototype.getMiddlegroundObjects = function()
	{
		return this.m_pMiddlegroundObjects;
	}
	
	Scene.prototype.getForegroundObjects = function()
	{
		return this.m_pForegroundObjects;
	}
	
	return Scene;
	
});