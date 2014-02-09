

define(["thirdparty/jquery","services/TemplateService"], function( jQuery, tpl ) {
	
	var Renderer = function() 
	{
		this.m_oStage;
	}

	Renderer.prototype.setStage = function( oStage )
	{
		this.m_oStage = oStage;
	}
	
	Renderer.prototype.render = function( )
	{
		// do some rendering 
	}
	
	return Renderer;
	
});