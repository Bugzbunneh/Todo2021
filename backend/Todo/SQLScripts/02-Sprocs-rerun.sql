IF OBJECT_ID ('dbo.Todo_GetSingle') IS NOT NULL
	DROP PROCEDURE dbo.Todo_GetSingle
GO

CREATE PROC dbo.Todo_GetSingle
	(
	@TodoId int
)
AS
BEGIN
	SET NOCOUNT ON

	SELECT TodoId, Title, Description, DateCreated, UserId, DateDeadline, DateCompleted
	FROM dbo.Todo 
	WHERE TodoId = @TodoId
END
GO

IF OBJECT_ID ('dbo.Todo_GetMany') IS NOT NULL
	DROP PROCEDURE dbo.Todo_GetMany
GO

CREATE PROC dbo.Todo_GetMany
	(
		@UserId nvarchar(150)
)
AS
BEGIN
	SET NOCOUNT ON
	SELECT 
		TodoId, 
		Title, 
		Description,
		DateCreated, 
		UserId,
		DateDeadline,
		DateCompleted
	FROM dbo.Todo
	WHERE UserId = @UserId
END
GO

IF OBJECT_ID ('dbo.Todo_Post') IS NOT NULL
	DROP PROCEDURE dbo.Todo_Post
GO

CREATE PROC dbo.Todo_Post
	(
		@Title nvarchar(100),
		@Description nvarchar(max),
		@DateCreated datetime2,
		@UserId nvarchar(150),
		@DateDeadline datetime2
)
AS
BEGIN
	SET NOCOUNT ON
	INSERT INTO dbo.Todo
		(Title, Description, DateCreated, UserId, DateDeadline)
	VALUES(@Title, @Description, CONVERT(datetime2, @DateCreated), @UserId, CONVERT(datetime2, @DateDeadline))

	SELECT SCOPE_IDENTITY() AS TodoId
END
GO

IF OBJECT_ID ('dbo.Todo_Put') IS NOT NULL
	DROP PROCEDURE dbo.Todo_Put
GO

CREATE PROC dbo.Todo_Put
	(
	@TodoId int,
	@Title nvarchar(100),
	@Description nvarchar(max),
	@DateDeadline datetime2,
	@DateCompleted datetime2
)
AS
BEGIN
	SET NOCOUNT ON

	UPDATE dbo.Todo
	SET Title = @Title, Description = @Description, DateDeadline = @DateDeadline, DateCompleted = @DateCompleted
	WHERE TodoId = @TodoId
END
GO

IF OBJECT_ID ('dbo.Todo_Delete') IS NOT NULL
	DROP PROCEDURE dbo.Todo_Delete
GO

CREATE PROC dbo.Todo_Delete
	(
	@TodoId int
)
AS
BEGIN
	SET NOCOUNT ON

	DELETE
	FROM dbo.Todo
	WHERE TodoId = @TodoId
END
GO