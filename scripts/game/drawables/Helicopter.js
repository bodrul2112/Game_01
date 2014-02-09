

define(["thirdparty/jquery","services/TemplateService","game/drawables/BasicDrawable"], function( jQuery, tpl, BasicDrawable) {
	
	var Helicopter = function(  ) {
		
		this.m_oBasicDrawable = new BasicDrawable(this);
		this.m_oCoords = this.m_oBasicDrawable.getCoords();
		
		this.y  = 20;
	}
	
	Helicopter.prototype.drawYourself = function( oContext ) 
	{
		this.y++;
		this.m_oBasicDrawable.getCoords();
		
		
		oContext.fillStyle = "white"
		oContext.fillRect(20,20,150,520);
		
		oContext.fillStyle = "black"
		oContext.fillRect(20,this.y,150,100);
		
		if(this.y==500)
		{
			this.y = 20;
		}
		
	}
	
	Helicopter.prototype.getBasicDrawable = function()
	{
		return this.m_oBasicDrawable;
	}
	
	return Helicopter;
	
});