public with sharing class redditCloneHomePageController {

    
    @AuraEnabled
    public static List<subreddit__c> getAllSubreddits(){
        return [SELECT Id, Name, Title__c, Description__c, CreatedDate FROM subreddit__c];
    }
    
}