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
        
        var targetElement = event.target;
        if(event.target.classList.contains("upvoteIconNeutral")){
            $A.util.removeClass(targetElement,"upvoteIconNeutral"); 
            $A.util.addClass(targetElement,"upvoteIconBlue"); 
            if(event.target.nextSibling.classList.contains("upvoteIconNeutral")){
                $A.util.addClass(event.target.nextSibling,"upvoteIconNeutral"); 
                $A.util.removeClass(event.target.nextSibling,"upvoteIconBlue");
            }
        }else if(event.target.classList.contains("upvoteIconBlue")){
            $A.util.addClass(targetElement,"upvoteIconNeutral"); 
            $A.util.removeClass(targetElement,"upvoteIconBlue"); 
        }else{
            
        }
           
    },
    
    downVoteHandler : function(component, event, helper) {
        
        var targetElement = event.target;
        
        if(event.target.classList.contains("upvoteIconNeutral")){
            $A.util.removeClass(targetElement,"upvoteIconNeutral"); 
            $A.util.addClass(targetElement,"upvoteIconBlue");
            if(event.target.previousSibling.classList.contains("upvoteIconNeutral")){
                $A.util.addClass(event.target.previousSibling,"upvoteIconNeutral"); 
                $A.util.removeClass(event.target.previousSibling,"upvoteIconBlue");
            }
        }else if(event.target.classList.contains("upvoteIconBlue")){
            $A.util.addClass(targetElement,"upvoteIconNeutral"); 
            $A.util.removeClass(targetElement,"upvoteIconBlue"); 
        }else{
            
        }
       
    },
})