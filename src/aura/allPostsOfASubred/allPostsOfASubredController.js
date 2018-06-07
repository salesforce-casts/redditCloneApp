({
	doSoChange : function(component, event, helper) {
		var abcd = component.get("v.abc");
        console.log(abcd);
		var action = component.get("c.fetchAllPostsOfASubred");
        
        action.setParams({
            subredIdParam: abcd
        });
        
        action.setCallback(this, function(response){
            var state =  response.getState();
            if(state === "SUCCESS"){
                //TODO display the record details
                var allSubredPosts = response.getReturnValue(); 
                console.log(allSubredPosts);
                component.set('v.allSubredPosts', allSubredPosts);
            }else{
                
            }
        });
        
        $A.enqueueAction(action);
	},
    
    upVoteHandler : function(component, event, helper){
        if(component.get('v.downvote')){
            console.log('v.downvote');
            component.set('v.downvote', false);
        }
        component.set('v.upvote', !component.get('v.upvote'));
    },
    
    downVoteHandler : function(component, event, helper){
        if(component.get('v.upvote')){
            console.log('v.upvote');
            component.set('v.upvote', false);
        }
        component.set('v.downvote', !component.get('v.downvote'));
    }
})