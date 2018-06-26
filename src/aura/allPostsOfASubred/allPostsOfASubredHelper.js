({
    createUpvoteDownvote : function(allPosts) {
        console.log(allPosts.length);
        
        for(var i = 0; i < allPosts.length; i++){
            $A.createComponent(
                "lightning:buttonIconStateful",
                {
                    "aura:id": allPosts[i].Id,
                    "iconName": "utility:chevronup",
                    "size": "x-small",
                    "class": "upvoteIconNeutral",
                    "onclick": cmp.getReference("c.upVoteHandler")
                },
                function(newButton, status, errorMessage){
                    //Add the new button to the body array
                    if (status === "SUCCESS") {
                        var body = cmp.get("v.body");
                        body.push(newButton);
                        cmp.set("v.body", body);
                    }
                    else if (status === "INCOMPLETE") {
                        console.log("No response from server or client is offline.")
                        // Show offline error
                    }
                        else if (status === "ERROR") {
                            console.log("Error: " + errorMessage);
                            // Show error message
                        }
                }
            );
        }
        
    }
})