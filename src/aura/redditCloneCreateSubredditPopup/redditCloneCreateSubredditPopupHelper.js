({
    toggleTheDailog : function(component) {
        var modal = component.find("dailogId");
        $A.util.toggleClass(modal, 'slds-fade-in-open');
        var overlay = component.find("overlayId");
        $A.util.toggleClass(overlay, 'slds-backdrop_open');
    }
    
})