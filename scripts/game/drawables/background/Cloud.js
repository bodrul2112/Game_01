

define(["thirdparty/jquery","services/TemplateService","game/drawables/BasicDrawable"], function( jQuery, tpl, BasicDrawable) {
	
	var Cloud = function(  ) {
		
		this.m_oBasicDrawable = new BasicDrawable(this);
		this.m_oCoords = this.m_oBasicDrawable.getCoords();
		
		this.x = Math.floor( Math.random() * $(window).width() );
		this.y = Math.floor( Math.random() * $(window).height() )
		
		this.h = Math.floor( Math.random() * 50)+10;
		
		
		this.maxH = $(window).width(); 
		this.vel = Math.floor( Math.random() * 20)+1;
		
	}
	
	Cloud.prototype.drawYourself = function( oContext ) 
	{
		this.m_oBasicDrawable.getCoords();
		
		this.x-=this.vel;
		
		oContext.fillStyle = "rgba(200,200,200,0.5)"
		oContext.fillRect(this.x,this.y, this.h,this.h);
		
		
		if(this.x<0)
		{
			this.x=this.maxH;
			this.h = Math.floor( Math.random() * 50)+10;
			this.vel = Math.floor( Math.random() * 20)+5;
		}
		
	}
	
	Cloud.prototype.getBasicDrawable = function()
	{
		return this.m_oBasicDrawable;
	}
	
	return Cloud;
	
});