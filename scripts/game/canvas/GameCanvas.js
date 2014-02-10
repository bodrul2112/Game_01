

define(["thirdparty/jquery","services/TemplateService"], function( jQuery, tpl ) {
	
	var GameCanvas = function(  ) {
		
		var canv = '<canvas id="mycanvas" width="'+ $(window).width() +'" height="'+ $(window).height() +'"></canvas>';
		this.m_eCanvas = $(canv);
		$('.mainContainer').append( this.m_eCanvas );
		
		this.m_oContext = this.m_eCanvas[0].getContext("2d");
		
		this.m_bDragging = false;
		this._postProcess();
		
		this.m_pListeners;
	}
	
	GameCanvas.prototype.get2DContext = function() {
		
		return this.m_oContext;
	}
	
	GameCanvas.prototype._postProcess = function() 
	{
		$(this.m_eCanvas).on("mousedown touchstart", function(e) {
			
			this.m_bDragging = true;
			this._touch( "mousedown", e); 
			
		}.bind(this));
		
		$(this.m_eCanvas).on("mousemove", function(e) {
			
			if(this.m_bDragging)
			{
				//this._touch("mousedragging",e);
			}
			
		}.bind(this));
		
		$(this.m_eCanvas).on("mouseup touchend touchcancel", function(e) {
			
			this._touch( "mouseup", e); 
			this.m_bDragging = false;
			
		}.bind(this));
	}
	
	GameCanvas.prototype._touch = function( sEventName, e )
	{
//		console.log(e.pageX);
//		console.log(e.pageY);
		
		for(var key in this.m_pListeners)
		{
			var oBasicDrawable = this.m_pListeners[key];
			oBasicDrawable.onEvent( sEventName, e );
		}
	} 
	
	GameCanvas.prototype.setMouseTouchListenersFromStage = function( oStage )
	{
		this.m_pListeners = oStage.getScene().getMouseTouchListeners();
	} 
	
	return GameCanvas;
	
});