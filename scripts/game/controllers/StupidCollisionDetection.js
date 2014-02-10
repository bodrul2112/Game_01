

define(["thirdparty/jquery","services/TemplateService"], function( jQuery, tpl ) {
	
	var StupidCollisionDetection = function( ) 
	{
		
	}
	
	StupidCollisionDetection.prototype.detect = function( oPlayerBounds, oScene )
	{
		this._checkGround(oPlayerBounds, oScene.getBackgroundObjects() );
		this._checkGround(oPlayerBounds, oScene.getMiddlegroundObjects() );
		this._checkGround(oPlayerBounds, oScene.getForegroundObjects() );
	}
	
	StupidCollisionDetection.prototype._checkGround = function( oRectangle, pGround )
	{
		for(var key in pGround)
		{
			var oDrawable = pGround[key];
			if(oDrawable.setCollided)
			{
				var bOverlapping = oDrawable.getBasicDrawable().getCoords().isOverlapping( oRectangle );
				oDrawable.setCollided( bOverlapping );
			}
		}
	}
	
	return StupidCollisionDetection;
	
});