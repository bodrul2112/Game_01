

define(["thirdparty/jquery","services/TemplateService","game/drawables/BasicDrawable"], function( jQuery, tpl, BasicDrawable) {
	
	var Ball = function(  ) {
		
		this.m_oBasicDrawable = new BasicDrawable(this);
		this.m_oCoords = this.m_oBasicDrawable.getCoords();
		
		this.m_bIsJumping = false;
		
		this.m_nBallWidth = 20;
		this.m_nBallHeight = 20;
		
		this._center();
		this.m_bIsListening = true;
		
		
		this.m_sFillStyle = "rgba(200,0,0,0.5)";
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
		
		var nX = ($(window).width()/2) - (this.m_nBallWidth/2)
		this.m_oCoords.setX( nX );
		
		var nY = $(window).height() - this.m_nBallHeight;
		this.m_oCoords.setY( nY );
	}
	
	Ball.prototype.drawYourself = function( oContext ) 
	{
		this.m_oBasicDrawable.getCoords();
		
		oContext.fillStyle = this.m_sFillStyle;
		oContext.fillRect(this.m_oCoords.getX(),this.m_oCoords.getY(), this.m_nBallWidth,this.m_nBallHeight);
	}
	
	Ball.prototype.getBasicDrawable = function()
	{
		return this.m_oBasicDrawable;
	}
	
	Ball.prototype.onEvent = function( sEventName, e )
	{
		this.m_sFillStyle = "rgba(0,200,0,0.5)"
	}
	
	return Ball;
	
});