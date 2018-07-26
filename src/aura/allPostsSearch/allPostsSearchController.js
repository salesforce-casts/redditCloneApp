({
    getPostsViaSearch : function(cmp, event, helper) {
        
        var action = cmp.get("c.getPostsViaSearchController");
        action.setParams({ 
            query: cmp.get("v.query") 
        });
        
        
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var result = response.getReturnValue();
                cmp.set("v.searchPosts", result);
                
                console.log(' 💥 ' + result);
                
                var searchArea = cmp.find("searchArea");
                $A.util.removeClass(searchArea, 'slds-hide');
            }
            else if (state === "INCOMPLETE") {
                
            }
                else if (state === "ERROR") {
                    var errors = response.getError();
                    if (errors) {
                        if (errors[0] && errors[0].message) {
                            console.log("Error message: " + 
                                        errors[0].message);
                        }
                    } else {
                        console.log("Unknown error");
                    }
                }
        });
        
        
        $A.enqueueAction(action);
        
        
    }
})