

define(["thirdparty/jquery","services/TemplateService"], function( jQuery, tpl ) {
	
	var Point = function( nX, nY  ) 
	{
		this.m_nX = nX;
		this.m_nY = nY;
	}

	Point.prototype.getX = function()
	{
		return this.m_nX;
	}
	
	Point.prototype.setX = function( nX )
	{
		this.m_nX = nX;
	}
	
	Point.prototype.getY = function()
	{
		return this.m_nY;
	}
	
	Point.prototype.setY = function( nY )
	{
		this.m_nY = nY;
	}
	
	return Point;
	
});