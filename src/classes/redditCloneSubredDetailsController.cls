public with sharing class redditCloneSubredDetailsController {
    
    @AuraEnabled
    public static subreddit__c fetchSubredDetails(String rec_id){
        return [SELECT Name, Title__c, Description__c, CreatedDate FROM subreddit__c WHERE Id=: rec_id];
    }
    
    @AuraEnabled
    public static List<post__c> fetchAllPostsOfASubred(String rec_id){
        return [SELECT Name, body__c, Title__c FROM post__c WHERE subreddit__c =: rec_id ];
    }	
    
}