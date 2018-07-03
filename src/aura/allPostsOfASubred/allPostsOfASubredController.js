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
                //helper.createUpvoteDownvote(allSubredPosts);
            }else{
                
            }
            
        });
        
        $A.enqueueAction(action);
    },
    
    upVoteHandler : function(component, event, helper) {
        
        var ctarget = event.currentTarget;
        var rec_id = ctarget.dataset.id;
        var subred_id = component.get("v.subredId");
        var targetElement = event.target;
<<<<<<< Updated upstream
        
        if(event.target.classList.contains("upvoteIconNeutral")){
            //Upvote the post
            $A.util.removeClass(targetElement,"upvoteIconNeutral"); 
            $A.util.addClass(targetElement,"upvoteIconBlue");
            helper.upvoteAPostHandler(component, rec_id);
            
            //Remove the existing downvote to the post
            if(event.target.nextSibling.classList.contains("upvoteIconBlue")){
                $A.util.addClass(event.target.nextSibling,"upvoteIconNeutral"); 
                $A.util.removeClass(event.target.nextSibling,"upvoteIconBlue");
                helper.downvoteAPostHandler(component, rec_id);
            }
        }else if(event.target.classList.contains("upvoteIconBlue")){
            //Remove the upvote to the post
            $A.util.addClass(targetElement,"upvoteIconNeutral"); 
            $A.util.removeClass(targetElement,"upvoteIconBlue");
=======
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
>>>>>>> Stashed changes
            helper.removeUpvoteToPostHandler(component, rec_id);
        }else{
            
        }
        
    },
    
    downVoteHandler : function(component, event, helper) {
        
        var ctarget = event.currentTarget;
        var rec_id = ctarget.dataset.id;
        var subred_id = component.get("v.subredId");
        var targetElement = event.target;
        var rec_id = targetElement.dataset.id;
        
        if(event.target.classList.contains("upvoteIconNeutral")){
<<<<<<< Updated upstream
            //downvote the post
=======
            
            //downVote the post
>>>>>>> Stashed changes
            $A.util.removeClass(targetElement,"upvoteIconNeutral"); 
            $A.util.addClass(targetElement,"upvoteIconBlue");
            helper.downvoteAPostHandler(component, rec_id);
            
<<<<<<< Updated upstream
            //Remove the existing downvote to the post
=======
            //Remove the upvote if its exists
>>>>>>> Stashed changes
            if(event.target.previousSibling.classList.contains("upvoteIconBlue")){
                $A.util.addClass(event.target.previousSibling,"upvoteIconNeutral"); 
                $A.util.removeClass(event.target.previousSibling,"upvoteIconBlue");
                helper.removeUpvoteToPostHandler(component, rec_id);
            }
        }else if(event.target.classList.contains("upvoteIconBlue")){
<<<<<<< Updated upstream
            //Remove the upvote to the post
            $A.util.addClass(targetElement,"upvoteIconNeutral"); 
            $A.util.removeClass(targetElement,"upvoteIconBlue");
=======
            
            //Remove the downvote of the post
            $A.util.addClass(targetElement,"upvoteIconNeutral"); 
            $A.util.removeClass(targetElement,"upvoteIconBlue"); 
>>>>>>> Stashed changes
            helper.removeDownvoteToPostHandler(component, rec_id);
        }else{
            
        }
        
        
        
    }
})