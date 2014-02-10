

define(["thirdparty/jquery","services/TemplateService","game/drawables/BasicDrawable"], function( jQuery, tpl, BasicDrawable) {
	
	var BasicPlatform = function(  ) {
		
		this.m_oBasicDrawable = new BasicDrawable(this);
		this.m_oCoords = this.m_oBasicDrawable.getCoords();
		
		this.m_oBasicDrawable.setRemoveWhenOffScreen(true);
		
		
		
	}
	
	BasicPlatform.prototype.drawYourself = function( oContext ) 
	{
		this.m_oBasicDrawable.getCoords();
	}
	
	BasicPlatform.prototype.getBasicDrawable = function()
	{
		return this.m_oBasicDrawable;
	}
	
	return BasicPlatform;
	
});