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
                console.log(subred_details);
                component.set("v.subRedPostDate", new Date(subred_details.CreatedDate));
                component.set("v.subRedDetails", subred_details);
                component.set("v.subredId", subred_details.Id);
            }else{
                
            }
        });
        
        $A.enqueueAction(action);
        
	}
})