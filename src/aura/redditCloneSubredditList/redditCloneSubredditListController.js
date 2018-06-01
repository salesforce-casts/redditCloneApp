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
        var navToSubredDetails = component.find('navToSubredDetails');
        
        var ctarget = event.currentTarget;
        var id_str = ctarget.dataset.id;
        
        var pageReference = {
            "type": "standard__component",
            "attributes": {
                "componentName": "c__redditCloneSubredDetailsPage"
            },
			"state": {
				"rec_id": id_str //id of the subreddit 
			}    
                
		}
        
        navToSubredDetails.navigate(pageReference);
	}
})