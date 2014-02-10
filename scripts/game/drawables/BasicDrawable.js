
define(["thirdparty/jquery","services/TemplateService", "game/drawables/util/Rectangle"], function( jQuery, tpl, Rectangle ) {
	
	var BasicDrawable = function( oContainerObject  ) 
	{
		this.m_oContainerObject = oContainerObject;
		this.m_nCoords = new Rectangle(0,0);
		
		this.m_bRemoveWhenOffScreen = false;
	}

	// this should really be getBounds now
	BasicDrawable.prototype.getCoords = function()
	{
		return this.m_nCoords;
	}
	
	BasicDrawable.prototype.setRemoveWhenOffScreen = function( bRemoveWhenOffScreen )
	{
		this.m_bRemoveWhenOffScreen = bRemoveWhenOffScreen;
	}
	
	BasicDrawable.prototype.isRemoveWhenOffScreen = function()
	{
		return this.m_bRemoveWhenOffScreen;
	}
	
	return BasicDrawable;
	
});