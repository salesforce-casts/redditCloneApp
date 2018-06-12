({
	doChange : function(component, event, helper) {
		var subred_id = component.get("v.subredId");
        
        var action = component.get("c.fetchAllPostsOfASubred");
        
        action.setParams({
            rec_id: subred_id    
        });
        
        action.setCallback(this, function(response){
        	var state =response.getState();
            if(state === "SUCCESS"){
                var allSubredPosts = response.getReturnValue();
                component.set("v.allSubredPosts", allSubredPosts);
            }else{
                
            }
            
        });
        
        $A.enqueueAction(action);
	},
    
    upVoteHandler : function(component, event, helper) {
        if(component.get('v.downvote')){
        	component.set('v.downvote', false);    
        }
        component.set('v.upvote', true);
    },
    
	downVoteHandler : function(component, event, helper) {
        if(component.get('v.upvote')){
        	component.set('v.upvote', false);    
        }
        component.set('v.downvote', true);
    }
})