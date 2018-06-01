public with sharing class redditCloneSubredDetailsController {
    
    @AuraEnabled
    public static subreddit__c fetchSubredDetails(String rec_id){
        
        
        return [SELECT Name, Title__c, Description__c FROM subreddit__c where Id=: rec_id];
    }

}