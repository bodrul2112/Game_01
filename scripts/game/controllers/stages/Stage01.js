
define(["thirdparty/jquery",
        "services/TemplateService",
        "game/controllers/stages/BaseStage"], 
        
    function( jQuery, tpl, BaseStage ) 
    {
		var Stage01 = function(  ) 
		{
			this.m_oScene = new BaseStage().getScene();
		}
		
		Stage01.prototype.getScene = function()
		{
			return this.m_oScene;
		}
		
		return Stage01;
	
});