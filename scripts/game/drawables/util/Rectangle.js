

define(["thirdparty/jquery","services/TemplateService"], function( jQuery, tpl ) {
	
	var Rectangle = function( nX, nY  ) 
	{
		this.m_nX = nX;
		this.m_nY = nY;
		
		this.m_nWidth = 0;
		this.m_nHeight = 0;
	}

	Rectangle.prototype.getX = function()
	{
		return this.m_nX;
	}
	
	Rectangle.prototype.getX2 = function()
	{
		return this.m_nX + this.m_nWidth;
	}
	
	Rectangle.prototype.setX = function( nX )
	{
		this.m_nX = nX;
	}
	
	Rectangle.prototype.getY = function()
	{
		return this.m_nY;
	}
	
	Rectangle.prototype.getY2 = function()
	{
		return this.m_nY + this.m_nHeight;
	}
	
	Rectangle.prototype.setY = function( nY )
	{
		this.m_nY = nY;
	}
	
	Rectangle.prototype.getWidth = function()
	{
		return this.m_nWidth;
	}
	
	Rectangle.prototype.setWidth = function( nWidth )
	{
		this.m_nWidth = nWidth;
	}
	
	Rectangle.prototype.getHeight = function()
	{
		return this.m_nHeight;
	}
	
	Rectangle.prototype.setHeight = function( nHeight )
	{
		this.m_nHeight = nHeight;
	}
	
	Rectangle.prototype.isOverlapping = function( oRectangle )
	{
//		A.X1 < B.X2:	
//		A.X2 > B.X1:	
//		A.Y1 < B.Y2:	
//		A.Y2 > B.Y1: 
		
		if(this.getX() < oRectangle.getX2() &&
				this.getX2() > oRectangle.getX() &&
				this.getY() < oRectangle.getY2() &&
				this.getY2() > oRectangle.getY()
			)
		{
			return true;
		}
		else
		{
			return false;
		}
	}
	
	return Rectangle;
	
});