CREATE TABLE dbo.Todo(
  TodoId int IDENTITY(1,1) NOT NULL,
  Title nvarchar(100) NOT NULL,
  Description nvarchar(max) NOT NULL,
  DateCreated datetime2(7) NOT NULL,
  UserId nvarchar(150) NOT NULL,
  DateDeadline datetime2(7) NULL,
  DateCompleted datetime2(7) NULL,
 CONSTRAINT PK_Todo PRIMARY KEY CLUSTERED 
(
  TodoId ASC
)
) 
GO