

define(["thirdparty/jquery","services/TemplateService","game/drawables/BasicDrawable"], function( jQuery, tpl, BasicDrawable) {
	
	var Helicopter = function(  ) {
		
		this.m_oBasicDrawable = new BasicDrawable(this);
		this.m_oCoords = this.m_oBasicDrawable.getCoords();
		
	}
	
	Helicopter.prototype.drawYourself = function( oContext ) 
	{
		this.m_oBasicDrawable.getCoords();
	}
	
	Helicopter.prototype.getBasicDrawable = function()
	{
		return this.m_oBasicDrawable;
	}
	
	return Helicopter;
	
});