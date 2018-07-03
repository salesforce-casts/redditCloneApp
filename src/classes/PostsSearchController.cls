public class PostsSearchController {
    
	@AuraEnabled
    public static List<post__c> getPostsViaSearchController(String query){
        
        List<post__c> p = Database.query('SELECT Id, Name FROM post__c WHERE Name LIKE \'%' + query +'%\' ');	
        
        return p;
    }
}