   export interface ListingsDTO
    {
        ListingId :number; /* מזהה מודעה*/
        UserId :number; /* מזהה המשתמש שפרסם*/
        BookId :number; /* מזהה ספר שפורסם*/
        ActionType :string; /* סוג פעולה - מכירה או מסירה*/
      Price :number; /* מחיר */
       DatePosted :Date; /*תאריך פרסום*/
        IsActiv :boolean;/*אם המודעה פעילה*/
         ImageUrl? :string;
         BookTitle :string;
    }