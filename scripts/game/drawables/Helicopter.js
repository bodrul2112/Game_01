

define(["thirdparty/jquery","services/TemplateService","game/drawables/BasicDrawable"], function( jQuery, tpl, BasicDrawable) {
	
	var Helicopter = function(  ) {
		
		this.m_oBasicDrawable = new BasicDrawable(this);
		this.m_oCoords = this.m_oBasicDrawable.getCoords();
		
		this.x = Math.floor( Math.random() * $(window).width() );
		this.y = Math.floor( Math.random() * $(window).height() )
		
		this.h = Math.floor( Math.random() * 50)+1;
		
		
		this.maxH = $(window).height(); 
		this.vel = Math.floor( Math.random() * 20)+1;
	}
	
	Helicopter.prototype.drawYourself = function( oContext ) 
	{
		this.m_oBasicDrawable.getCoords();

		this.h++;
		this.y+=this.vel;
		
		oContext.fillStyle = "black"
		oContext.fillRect(this.x,this.y, this.h,this.h);
		
		if(this.h>50)
		{
			this.h=1;
		}
		
		if(this.y>this.maxH)
		{
			this.y=0;
		}
		
	}
	
	Helicopter.prototype.getBasicDrawable = function()
	{
		return this.m_oBasicDrawable;
	}
	
	return Helicopter;
	
});