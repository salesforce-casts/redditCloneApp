({
    
    
    getPostsViaSearch : function(component, event, helper) {
        
        var action = component.get("c.getPostsViaSearchController");		
        var queryTerm = component.get('v.query');
        
        action.setParams({
            query: component.get("v.query")         
        });
        
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state === "SUCCESS"){
                var result = response.getReturnValue();                
				component.set("v.searchPosts", result);
                
                var searchArea = component.find('searchArea');
                $A.util.removeClass(searchArea, 'slds-hide');
            }else{
                
            }
        });
        
        $A.enqueueAction(action);    
    }
})