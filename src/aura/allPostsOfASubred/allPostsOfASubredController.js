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
                console.log(allSubredPosts);
                component.set("v.allSubredPosts", allSubredPosts);
            }else{
                
            }
            
        });
        
        $A.enqueueAction(action);
    },
    upVoteHandler : function(component, event, helper) {
        
        var targetElement = event.target;
        var rec_id = targetElement.dataset.id;
        if(event.target.classList.contains("upvoteIconNeutral")){
            
            //Upvote the post
            $A.util.removeClass(targetElement,"upvoteIconNeutral"); 
            $A.util.addClass(targetElement,"upvoteIconBlue"); 
            helper.upvoteAPostHandler(component, rec_id);
            
            //Remove the downvote if its exists
            if(event.target.nextSibling.classList.contains("upvoteIconBlue")){
                $A.util.addClass(event.target.nextSibling,"upvoteIconNeutral"); 
                $A.util.removeClass(event.target.nextSibling,"upvoteIconBlue");
                helper.removeDownvoteToPostHandler(component, rec_id);
            }
        }else if(event.target.classList.contains("upvoteIconBlue")){
            
            //Remove the upvote to the post
            $A.util.addClass(targetElement,"upvoteIconNeutral"); 
            $A.util.removeClass(targetElement,"upvoteIconBlue"); 
            helper.removeUpvoteToPostHandler(component, rec_id);
        }else{
            
        }
           
    },
    
    downVoteHandler : function(component, event, helper) {
        
        var targetElement = event.target;
        var rec_id = targetElement.dataset.id;
        
        if(event.target.classList.contains("upvoteIconNeutral")){
            
            //downVote the post
            $A.util.removeClass(targetElement,"upvoteIconNeutral"); 
            $A.util.addClass(targetElement,"upvoteIconBlue");
            helper.downvoteAPostHandler(component, rec_id);
            
            //Remove the upvote if its exists
            if(event.target.previousSibling.classList.contains("upvoteIconBlue")){
                $A.util.addClass(event.target.previousSibling,"upvoteIconNeutral"); 
                $A.util.removeClass(event.target.previousSibling,"upvoteIconBlue");
                helper.removeUpvoteToPostHandler(component, rec_id);
            }
        }else if(event.target.classList.contains("upvoteIconBlue")){
            
            //Remove the downvote of the post
            $A.util.addClass(targetElement,"upvoteIconNeutral"); 
            $A.util.removeClass(targetElement,"upvoteIconBlue"); 
            helper.removeDownvoteToPostHandler(component, rec_id);
        }else{
            
        }
       
    },
})