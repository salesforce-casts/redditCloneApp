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
        
        var ctarget = event.currentTarget;
        var id_str = ctarget.dataset.id;
        
        var targetElement = event.target;
        if(event.target.classList.contains("upvoteIconNeutral")){
            $A.util.removeClass(targetElement,"upvoteIconNeutral"); 
            $A.util.addClass(targetElement,"upvoteIconBlue"); 
            
            $A.util.addClass(event.target.nextSibling,"upvoteIconNeutral"); 
            $A.util.removeClass(event.target.nextSibling,"upvoteIconBlue");
        }else if(event.target.classList.contains("upvoteIconBlue")){
            $A.util.addClass(targetElement,"upvoteIconNeutral"); 
            $A.util.removeClass(targetElement,"upvoteIconBlue"); 
        }else{
            
        }
        
        
        
        /**
        var arr = [];
        arr = component.find("upvote");
        
        for(var cmp in component.find("upvote")){}
            if (upvotes[i].get("v.value") == id_str) {
              $A.util.removeClass(upvotes[i],"upvoteIconNeutral"); 
			  $A.util.addClass(upvotes[i],"upvoteIconBlue");
            }
        }
        
         
        $A.util.toggleClass(upvoteDiv,"slds-hide"); */
        
        /** var whichOne = event.getSource().get("v.value");
        var upvotes = component.find('upvote');
        
        for (var i = 0; i < upvotes.length; i++) {
            if (upvotes[i].get("v.value") == whichOne) {
              
                
            }
        }  */      
    },
    
    downVoteHandler : function(component, event, helper) {
        
        console.log(event.target.previousSibling);
        var ctarget = event.currentTarget;
        var id_str = ctarget.dataset.id;
        
        var targetElement = event.target;
        
        if(event.target.classList.contains("upvoteIconNeutral")){
            $A.util.removeClass(targetElement,"upvoteIconNeutral"); 
            $A.util.addClass(targetElement,"upvoteIconBlue");
            
            $A.util.addClass(event.target.previousSibling,"upvoteIconNeutral"); 
            $A.util.removeClass(event.target.previousSibling,"upvoteIconBlue");
        }else if(event.target.classList.contains("upvoteIconBlue")){
            $A.util.addClass(targetElement,"upvoteIconNeutral"); 
            $A.util.removeClass(targetElement,"upvoteIconBlue"); 
        }else{
            
        }
        
        
        
    },
})