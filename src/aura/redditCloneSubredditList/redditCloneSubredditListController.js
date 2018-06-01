({
    
    fetchAllSubReddits : function(component, event, helper){
        
        var action = component.get("c.getAllSubreddits");
        
        action.setCallback(this, function(response){
            var state = response.getState();            
            if(state === "SUCCESS"){  
                component.set("v.allSubreddits", response.getReturnValue());
            }
            else{
                console.log(state);
            }
        });
        
        $A.enqueueAction(action);
    },
    
    goToSubreddit : function (component, event, helper){
        
    }
})