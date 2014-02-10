
define(["thirdparty/jquery","services/TemplateService","game/drawables/BasicDrawable"], function( jQuery, tpl, BasicDrawable) {
	
	var ParallaxBackground = function(  ) 
	{
		this.m_nWidth = $(window).width();
		this.m_nHeight = $(window).height();
		
		this.m_oGradient;
	}
	
	ParallaxBackground.prototype.drawYourself = function( oContext ) 
	{
		oContext.fillStyle = "white"
		oContext.fillRect(0,0,this.m_nWidth,this.m_nHeight);
	}
	
	return ParallaxBackground;
	
});