

define(["thirdparty/jquery","services/TemplateService","game/drawables/BasicDrawable"], function( jQuery, tpl, BasicDrawable) {
	
	var Ball = function(  ) {
		
		this.m_oBasicDrawable = new BasicDrawable(this);
		this.m_oCoords = this.m_oBasicDrawable.getCoords();
		
		this.m_bIsJumping = false;
		
		this.m_oCoords.setWidth(50)
		this.m_oCoords.setHeight(50);
		
		this._center();
		this.m_bIsListening = true;
		
		this.m_sFillStyle = "rgba(200,0,0,0.5)";
		
		this.m_nDirection = 0;
		
		this.m_nMaxVel = 28;
		this.m_nMaxVel_inv = -1* (this.m_nMaxVel/2);
		
		this.m_nMaxHeight = 30;
//		this.m_nMaxHeight = $(window).height() - 50;
		
		this.m_nMinHeight;
		
	}
	
	Ball.prototype.isListening = function()
	{
		return this.m_bIsListening;
	}
	
	Ball.prototype.setIsListening = function( bListening )
	{
		this.m_bIsListening = bListening;
	}
	
	Ball.prototype._center = function( oContext ) 
	{
		var nX = ($(window).width()/2) - (this.m_oCoords.getWidth()/2)
		this.m_oCoords.setX( nX );
		
		this.m_nMinHeight = $(window).height() - this.m_oCoords.getHeight();
		this.m_oCoords.setY( this.m_nMinHeight );
	}
	
	Ball.prototype._move = function( oContext ) 
	{
		if(this.m_nDirection > this.m_nMaxVel)
		{
			// going down
			this.m_nDirection = this.m_nMaxVel;
		}
		else if(this.m_nDirection < this.m_nMaxVel_inv )
		{
			// going up
			this.m_nDirection = this.m_nMaxVel_inv;
		}
		
		this.m_nDirection = this.m_nDirection*2;
		this.m_oCoords.setY( this.m_oCoords.getY() + this.m_nDirection );
	}
	
	Ball.prototype._resetBoundaries = function( oContext ) 
	{
		var nX = this.m_oCoords.getX();
		var nY = this.m_oCoords.getY();
		
		if(nY < this.m_nMaxHeight)
		{
			// top of page
			this.m_oCoords.setY( this.m_nMaxHeight );
			this.m_nDirection = +1;
		}
		else if( nY > this.m_nMinHeight )
		{
			// bottom of page
			this.m_oCoords.setY( this.m_nMinHeight );
			this.m_nDirection = 0;
			
			this.m_bIsJumping = false;
		}
	}
	
	Ball.prototype.drawYourself = function( oContext ) 
	{
		this.m_oBasicDrawable.getCoords();
		
		this._move();
		this._resetBoundaries();
		
		oContext.fillStyle = this.m_sFillStyle;
		oContext.fillRect(this.m_oCoords.getX(),this.m_oCoords.getY(), this.m_oCoords.getWidth(),this.m_oCoords.getHeight());
	}
	
	Ball.prototype.getBasicDrawable = function()
	{
		return this.m_oBasicDrawable;
	}
	
	Ball.prototype.onEvent = function( sEventName, e )
	{
		
		if(sEventName == "mouseup" || sEventName == "touchend")
		{
			// coming down
			this.m_sFillStyle = "rgba(200,0,0,0.5)"
			this.m_nDirection = 3;
		}
		else if(sEventName == "mousedown" || sEventName == "touchstart")
		{
			// going up
			if(!this.m_bIsJumping)
			{
				this.m_sFillStyle = "rgba(0,200,0,0.5)"
				this.m_nDirection = -1;
				this.m_bIsJumping = true;
			}
		}
		
	}
	
	return Ball;
	
});