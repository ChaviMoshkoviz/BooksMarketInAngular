      export interface PutListingsDTO
    {
        
        UserId :number; /* מזהה המשתמש שפרסם*/
        BookId :number; /* מזהה ספר שפורסם*/
        ActionType :string; /* סוג פעולה - מכירה או מסירה*/
      Price :number; /* מחיר */
         ImageUrl? :string;
       
    } 
    
    
    
    
