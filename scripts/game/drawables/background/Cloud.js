

define(["thirdparty/jquery","services/TemplateService","game/drawables/BasicDrawable"], function( jQuery, tpl, BasicDrawable) {
	
	var Cloud = function(  ) {
		
		this.m_oBasicDrawable = new BasicDrawable(this);
		this.m_oCoords = this.m_oBasicDrawable.getCoords();
		
		this.m_oCoords.setX( Math.floor( Math.random() * $(window).width() ));
		this.m_oCoords.setY( Math.floor( Math.random() * $(window).height() ));
		
		var h = Math.floor( Math.random() * 50)+10;
		
		this.m_oCoords.setWidth(h);
		this.m_oCoords.setHeight(h);
		
		this.maxH = $(window).width(); 
		this.vel = Math.floor( Math.random() * 20)+1;
		
		this.m_bCollided = false;
		
	}
	
	Cloud.prototype.drawYourself = function( oContext ) 
	{
		this.m_oBasicDrawable.getCoords();
		
		this.m_oCoords.setX( this.m_oCoords.getX() - this.vel );
		
		if(this.m_bCollided)
		{
			oContext.lineWidth=6;
			oContext.strokeStyle = "rgba(50,50,50,0.5)";
			oContext.strokeRect(this.m_oCoords.getX(),this.m_oCoords.getY(), this.m_oCoords.getWidth(),this.m_oCoords.getHeight());
		}
		else
		{
			oContext.lineWidth=1;
			oContext.fillStyle = "rgba(200,200,200,0.5)";
			oContext.fillRect(this.m_oCoords.getX(),this.m_oCoords.getY(), this.m_oCoords.getWidth(),this.m_oCoords.getHeight());
		}
		
		if(this.m_oCoords.getX()<0)
		{
			this.m_oCoords.setX( this.maxH );
			
			var h = Math.floor( Math.random() * 50)+10;
			
			this.m_oCoords.setWidth(h);
			this.m_oCoords.setHeight(h);
			
			this.vel = Math.floor( Math.random() * 20)+5;
			
			this.m_bCollided = false;
		}
		
	}
	
	Cloud.prototype.getBasicDrawable = function()
	{
		return this.m_oBasicDrawable;
	}
	
	Cloud.prototype.setCollided = function( bCollided ) 
	{
		if(!this.m_bCollided )
		{
			this.m_bCollided = bCollided;
		}
	}
	
	return Cloud;
	
});