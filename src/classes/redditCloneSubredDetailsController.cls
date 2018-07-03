public with sharing class redditCloneSubredDetailsController {
    
    @AuraEnabled
    public static subreddit__c fetchSubredDetails(String rec_id){
        return [SELECT Name, Title__c, Description__c, CreatedDate FROM subreddit__c WHERE Id=: rec_id];
    }
    
    @AuraEnabled
    public static List<post__c> fetchAllPostsOfASubred(String rec_id){
        return [SELECT Name, body__c, Title__c FROM post__c WHERE subreddit__c =: rec_id ];
    }	
    
    @AuraEnabled
    public static votes__c upvoteAPost(Id rec_id){
<<<<<<< Updated upstream
        
        votes__c  v = new votes__c ();
        
        List<votes__c> votes = [SELECT Id, Name FROM votes__c WHERE post__c =: rec_id AND downvote__c =: false];
        
        if(votes.isEmpty()){
            //TODO: Insertion Logic comes here
            v.upvote__c = true;
            v.user__c = UserInfo.getUserId();
            v.post__c = rec_id;
            
        }else{
            //TODO: Updating Logic comes here
            v.Id = votes[0].Id;
            v.upvote__c = true;
            v.user__c = UserInfo.getUserId();
=======
        votes__c v = new votes__c();
        
        List<votes__c> votes = [SELECT Id, Name from votes__c WHERE post__c =: rec_id AND downvote__c =: false];
        
        //TODO: If its upvoted first time then insert the record
        if(votes.isEmpty()){
            //TODO: Insertion logic comes here
            v.upvote__c = true;
            v.user__c = UserInfo.getUserId();
            v.post__c = rec_id;
        }
        //TODO: If its re-upvoted then update the existingrecord
        else{
            //TODO: Updation of a record happens here
            v.Id = votes[0].Id;
            v.upvote__c = true;
            v.user__c = UserInfo.getUserId();            
>>>>>>> Stashed changes
        }
        
        upsert v;
        
<<<<<<< Updated upstream
        
        return v;
        
=======
    	return v;    
>>>>>>> Stashed changes
    }
    
    @AuraEnabled
    public static votes__c downvoteAPost(Id rec_id){
<<<<<<< Updated upstream
        
        votes__c  v = new votes__c ();
        
        List<votes__c> votes = [SELECT Id, Name FROM votes__c WHERE post__c =: rec_id AND upvote__c =: false];
        
        if(votes.isEmpty()){
            //TODO: Insertion Logic comes here
            v.downvote__c = true;
            v.user__c = UserInfo.getUserId();
            v.post__c = rec_id;
            
        }else{
            //TODO: Updating Logic comes here
            v.Id = votes[0].Id;
            v.downvote__c = true;
            v.user__c = UserInfo.getUserId();
        }
        
        upsert v;
        
        
        return v;
        
=======
        votes__c v = new votes__c();
        
        List<votes__c> votes = [SELECT Id, Name from votes__c WHERE post__c =: rec_id AND upvote__c =: false];
        
        //TODO: If its downvoted first time then insert the record
        if(votes.isEmpty()){
            //TODO: Insertion logic comes here
			v.downvote__c = true;
            v.user__c = UserInfo.getUserId();
            v.post__c = rec_id;
        }
        //TODO: If its re-downvoted then update the existingrecord
        else{
            //TODO: Updation of a record happens here
            v.Id = votes[0].Id;
            v.downvote__c = true;
            v.user__c = UserInfo.getUserId();  
        }
        
        
        upsert v;
        
    	return v;    
>>>>>>> Stashed changes
    }
    
    @AuraEnabled
    public static votes__c removeUpvoteToPost(Id rec_id){
<<<<<<< Updated upstream
        
        votes__c  v = new votes__c ();
        
        votes__c vote = [SELECT Id, Name FROM votes__c WHERE post__c =: rec_id AND upvote__c =: true];
        
        if( vote != null ){
            //TODO: There will always be a record existing and we need to remove the upvote to it. 
            v.Id = vote.Id;
            v.upvote__c = false;
            v.user__c = UserInfo.getUserId();
=======
        votes__c v = new votes__c();
        
        votes__c vote = [SELECT Id, Name FROM votes__c WHERE post__c =: rec_id AND upvote__c =: true];
        
        if(vote != null){
            //TODO: There will always be a record existing and we need to remove the upvote to it.
            v.Id = vote.Id;
            v.upvote__c = false;
            v.user__c = UserInfo.getUserId();
            
>>>>>>> Stashed changes
        }
        
        update v;
        
<<<<<<< Updated upstream
        return v;
        
=======
    	return v;    
>>>>>>> Stashed changes
    }
    
    @AuraEnabled
    public static votes__c removeDownvoteToPost(Id rec_id){
<<<<<<< Updated upstream
        
        votes__c  v = new votes__c ();
        
        votes__c vote = [SELECT Id, Name FROM votes__c WHERE post__c =: rec_id AND downvote__c =: true];
        
        if( vote != null ){
            //TODO: There will always be a record existing and we need to remove the upvote to it. 
            v.Id = vote.Id;
            v.downvote__c = false;
            v.user__c = UserInfo.getUserId();
=======
        votes__c v = new votes__c();
        
        votes__c vote = [SELECT Id, Name FROM votes__c WHERE post__c =: rec_id AND downvote__c =: true];
        
        if(vote != null){
            //TODO: There will always be a record existing and we need to remove the downvote to it.
            v.Id = vote.Id;
            v.downvote__c = false;
            v.user__c = UserInfo.getUserId();
            
>>>>>>> Stashed changes
        }
        
        update v;
        
<<<<<<< Updated upstream
        return v;
        
=======
    	return v;    
>>>>>>> Stashed changes
    }
    
}