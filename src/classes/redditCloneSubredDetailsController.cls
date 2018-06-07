public with sharing class redditCloneSubredDetailsController {
    
    @AuraEnabled
    public static subreddit__c fetchSubredDetails(String rec_id){
        return [SELECT Name, Title__c, Description__c, CreatedDate FROM subreddit__c where Id=: rec_id];
    }
    
    @AuraEnabled
    public static List<post__c> fetchAllPostsOfASubred(String subredIdParam){
        System.debug(subredIdParam);
        return [SELECT Name, body__c, link__c, Title__c FROM post__c where subreddit__c =: subredIdParam];
    }
    

}