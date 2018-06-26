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
                //helper.createUpvoteDownvote(allSubredPosts);
            }else{
                
            }
            
        });
        
        $A.enqueueAction(action);
    },
    
    upVoteHandler : function(component, event, helper) {
        
        var ctarget = event.currentTarget;
        var id_str = ctarget.dataset.id;
        
        var targetElement = event.target;
        
        $A.util.removeClass(targetElement,"upvoteIconNeutral"); 
        $A.util.addClass(targetElement,"upvoteIconBlue");
        
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
        if(component.get('v.upvote')){
        	component.set('v.upvote', false);    
        }
        component.set('v.downvote', true);
        
    },
    showDetail: function(component, event, helper) {
        var arr = [];
        arr = component.find("main").getElement().childNodes;
        console.log(component.find("main").getElement().childNodes);
        for(var cmp in component.find("main").getElement().childNodes) {
            $A.util.removeClass(arr[cmp], "selectedRow");
        }
        var targetElement = event.target;
        $A.util.addClass(targetElement,"selectedRow");
    }
})