

define(["thirdparty/jquery","services/TemplateService","game/drawables/BasicDrawable"], function( jQuery, tpl, BasicDrawable) {
	
	var Helicopter = function(  ) {
		
		this.m_oBasicDrawable = new BasicDrawable(this);
	}
	
	Helicopter.prototype.drawYourself = function( oGameCanvas ) 
	{
		// draw yourself dawg
	}
	
	Helicopter.prototype.getBasicDrawable = function()
	{
		return this.m_oBasicDrawable;
	}
	
	return Helicopter;
	
});