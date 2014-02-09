
define(["thirdparty/jquery","services/TemplateService","game/drawables/BasicDrawable"], function( jQuery, tpl, BasicDrawable) {
	
	var ParallaxBackground = function(  ) 
	{
		this.m_nWidth = $(window).width();
		this.m_nHeight = $(window).height();
		
		this.m_oGradient;
	}
	
	ParallaxBackground.prototype.drawYourself = function( oContext ) 
	{
//		oContext.fillStyle = "rgb(51,153,255)"
		oContext.fillStyle = "white"
			
//		if(!this.m_oGradient)
//		{
//			this.m_oGradient = oContext.createLinearGradient(0,0,0,this.m_nHeight);
//			this.m_oGradient.addColorStop(0,"rgb(240,240,240)");
//			this.m_oGradient.addColorStop(1,"rgb(210,210,210)");
//		}	
		
//		oContext.fillStyle=this.m_oGradient;	
			
		oContext.fillRect(0,0,this.m_nWidth,this.m_nHeight);
	}
	
	return ParallaxBackground;
	
});