namespace DataAccessLayer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Employees",
                c => new
                    {
                        EmpID = c.Int(nullable: false, identity: true),
                        EmpName = c.String(nullable: false),
                        EmpSalary = c.Decimal(nullable: false, precision: 18, scale: 2),
                        EmpAge = c.Int(nullable: false),
                        Gander = c.String(),
                        EmpJoiningDate = c.DateTime(nullable: false),
                        ManagerId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.EmpID);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Employees");
        }
    }
}
