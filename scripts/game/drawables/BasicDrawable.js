
define(["thirdparty/jquery","services/TemplateService", "game/drawables/util/Point"], function( jQuery, tpl, Point ) {
	
	var BasicDrawable = function( oContainerObject  ) 
	{
		this.m_oContainerObject = oContainerObject;
		
		this.m_nCoords = new Point(0,0);
	}

	BasicDrawable.prototype.getCoords = function()
	{
		return this.m_nCoords;
	}
	
	return BasicDrawable;
	
});