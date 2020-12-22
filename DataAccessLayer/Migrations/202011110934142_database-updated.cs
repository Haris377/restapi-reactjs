namespace DataAccessLayer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class databaseupdated : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Employees", "Gander", c => c.String(nullable: false));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Employees", "Gander", c => c.String());
        }
    }
}
