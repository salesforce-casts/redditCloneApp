({
    upvoteAPostHandler : function(component, rec_id) {
        var action = component.get("c.upvoteAPost");
        
        action.setParams({
            rec_id: rec_id
        });
        
        action.setCallback(this, function(response){
            var state =response.getState();
            if(state === "SUCCESS"){
                console.log(response.getReturnValue());
            }else{
                
            }
        });
        
        $A.enqueueAction(action);
    },
    
    downvoteAPostHandler : function(component, rec_id) {
        var action = component.get("c.downvoteAPost");
        
        action.setParams({
            rec_id: rec_id
        });
        
        action.setCallback(this, function(response){
            var state =response.getState();
            if(state === "SUCCESS"){
                console.log(response.getReturnValue());
            }else{
                
            }
        });
        
        $A.enqueueAction(action);
    },
    
    removeUpvoteToPostHandler : function(component, rec_id) {
        var action = component.get("c.removeUpvoteToPost");
        
        action.setParams({
            rec_id: rec_id
        });
        
        action.setCallback(this, function(response){
            var state =response.getState();
            if(state === "SUCCESS"){
                console.log(response.getReturnValue());
            }else{
                
            }
        });
        
        $A.enqueueAction(action);
    },
    
    removeDownvoteToPostHandler : function(component, rec_id) {
        var action = component.get("c.removeDownvoteToPost");
        
        action.setParams({
            rec_id: rec_id
        });
        
        action.setCallback(this, function(response){
            var state =response.getState();
            if(state === "SUCCESS"){
                console.log(response.getReturnValue());
            }else{
                
            }
        });
        
        $A.enqueueAction(action);
    },
})