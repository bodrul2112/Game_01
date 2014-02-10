
define(["thirdparty/jquery","services/TemplateService", "game/drawables/util/Rectangle"], function( jQuery, tpl, Rectangle ) {
	
	var BasicDrawable = function( oContainerObject  ) 
	{
		this.m_oContainerObject = oContainerObject;
		
		this.m_nCoords = new Rectangle(0,0);
	}

	// this should really be getBounds now
	BasicDrawable.prototype.getCoords = function()
	{
		return this.m_nCoords;
	}
	
	return BasicDrawable;
	
});