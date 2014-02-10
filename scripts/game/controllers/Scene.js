


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
	
	Scene.prototype.getMouseTouchListeners = function()
	{
		var pListeners = [];
		this._addMouseTouchListeners( pListeners, this.m_pBackgroundObjects );
		this._addMouseTouchListeners( pListeners, this.m_pMiddlegroundObjects );
		this._addMouseTouchListeners( pListeners, this.m_pForegroundObjects );
		return pListeners;
	}
	
	Scene.prototype._addMouseTouchListeners = function( pResult, pBasicDrawables )
	{
		for(var key in pBasicDrawables )
		{
			var oBasicDrawable = pBasicDrawables[key];
			
			if(oBasicDrawable.isListening)
			{
				pResult.push(oBasicDrawable);
			}
		}
	}
	
	return Scene;
	
});