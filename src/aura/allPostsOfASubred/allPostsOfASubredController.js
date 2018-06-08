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
    
    upVoteHandler : function(component, event, helper){
        var ctarget = event.currentTarget;
        var id_str = ctarget.dataset.id;
        
        if(component.get('v.downvote')){
            console.log('v.downvote');
            component.set('v.downvote', false);
        }
        component.set('v.upvote', !component.get('v.upvote'));
        
        var action = component.get("c.upvotePost");
        
        action.setParams({
            rec_id: id_str    
        });
        
        action.setCallback(this, function(response){
        	var state =response.getState();
            if(state === "SUCCESS"){
                alert("upvoted")
            }else{
                
            }
            
        });
        
        $A.enqueueAction(action);
    },
    
    downVoteHandler : function(component, event, helper){
        if(component.get('v.upvote')){
            console.log('v.upvote');
            component.set('v.upvote', false);
        }
        component.set('v.downvote', !component.get('v.downvote'));
    }
})