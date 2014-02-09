

define(["thirdparty/jquery","services/TemplateService"], function( jQuery, tpl ) {
	
	var GameCanvas = function(  ) {
		
		this.m_eCanvas = document.getElementById("gameCanvas");
		this.m_oContext = this.m_eCanvas.getContext("2d");
		
		this.m_bDragging = false;
		
		this._postProcess();
	}
	
	GameCanvas.prototype.get2DContext = function() {
		
		return this.m_oContext;
	}
	
	GameCanvas.prototype._postProcess = function() 
	{
		$(this.m_eCanvas).on("mousedown", function(e) {
			
			this.m_bDragging = true;
			this._touch(e);
			
		}.bind(this));
		
		$(this.m_eCanvas).on("mousemove", function(e) {
			
			if(this.m_bDragging)
			{
				this._touch(e);
			}
			
		}.bind(this));
		
		$(this.m_eCanvas).on("mouseup", function(e) {
			
			this.m_bDragging = false;
			
		}.bind(this));
	}
	
	GameCanvas.prototype._touch = function( e )
	{
		console.log(e.pageX);
		console.log(e.pageY);
	} 
	
	return GameCanvas;
	
});