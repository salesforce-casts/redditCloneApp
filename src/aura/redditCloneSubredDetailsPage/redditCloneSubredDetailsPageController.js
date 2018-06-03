({
	doInit : function(component, event, helper) {
		var subred_id = component.get("v.pageReference.state.rec_id");
        
		var action = component.get("c.fetchSubredDetails");
        
        action.setParams({
            rec_id: subred_id
        });
        
        action.setCallback(this, function(response){
            var state =  response.getState();
            if(state === "SUCCESS"){
                //TODO display the record details
                var subred_details = response.getReturnValue();                
                component.set('v.subRedDetails', subred_details);
                console.log(subred_details.CreatedDate);
                console.log(subred_details);
                component.set('v.subRedPostedDate', new Date(subred_details.CreatedDate));
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