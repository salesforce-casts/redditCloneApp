public with sharing class redditCloneSubredDetailsController {
    
    @AuraEnabled
    public static subreddit__c fetchSubredDetails(String rec_id){
        return [SELECT Name, Title__c, Description__c, CreatedDate FROM subreddit__c where Id=: rec_id];
    }
 
    @AuraEnabled
    public static List<post__c> fetchAllPostsOfASubred(String rec_id){
        return [SELECT Name, body__c, Title__c FROM post__c where subreddit__c =: rec_id ];
    }	
    
    @AuraEnabled
    public static List<post__c> upvotePost(String rec_id){
        
        post__c post = [SELECT upvote_count__c FROM post__c where Id =: rec_id];
        post__c p = new post__c();
        p.Id = post.Id;
        p.upvote_count__c = post.upvote_count__c + 1;
        update p;
        
        List<votes__c> vote = [SELECT Id,upvote__c FROM votes__c where post__c =: rec_id AND user__c =: UserInfo.getUserId()];
        
        if(!vote.isEmpty()){
            votes__c v = new votes__c();
            v.Id = vote[0].Id;
            v.user__c = UserInfo.getUserId();
            v.post__c = p.id;    
            v.upvote__c = true;
            insert v;
        }else{
            votes__c v = new votes__c();
            v.user__c = UserInfo.getUserId();
            v.post__c = p.id;    
            v.upvote__c = true;
            insert v;
        }
        
        
        
        return null;
    }
}