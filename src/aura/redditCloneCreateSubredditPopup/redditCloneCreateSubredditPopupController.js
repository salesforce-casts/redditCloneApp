({
	createSubReddit : function(component, event, helper){        
 		component.find("newSubreddit").getNewRecord(
            "subreddit__c", 
            null,      
            false,     
            $A.getCallback(function() {
                
                var rec = component.get("v.newSubredditRecord");
                var error = component.get("v.newSubredditError");
                
                if(error || (rec === null)) {
                    console.log("Error initializing record template: " + error);
                    return;
                }
                console.log("Record template initialized: " + rec.sobjectType);
            })
        );      
    },
    
    handleSaveSubreddit: function(component, event, helper) {
            component.find("newSubreddit").saveRecord(function(saveResult) {
                if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
                    
                    var resultsToast = $A.get("e.force:showToast");
                    resultsToast.setParams({
                        "title": "Saved",
                        "message": "The record is saved."
                    });
                    resultsToast.fire();
                    
                    $A.get("e.force:closeQuickAction").fire();
                    
                    $A.get("e.force:refreshView").fire();
                    

                } else if (saveResult.state === "INCOMPLETE") {
                    console.log("User is offline, device doesn't support drafts.");
                } else if (saveResult.state === "ERROR") {
                    console.log('Problem saving contact, error: ' + JSON.stringify(saveResult.error));
                } else {
                    console.log('Unknown problem, state: ' + saveResult.state + ', error: ' + JSON.stringify(saveResult.error));
                }
            });
       
    },
    openSubredditPopup : function(component, event, helper) {
		helper.toggleTheDailog(component);
	},
    toggleDialog : function(component, event, helper){
        helper.toggleTheDailog(component);
    }
})