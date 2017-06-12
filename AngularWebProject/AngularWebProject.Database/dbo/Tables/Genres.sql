CREATE TABLE [dbo].[Genres] (
    [GenreID] INT            IDENTITY (1, 1) NOT NULL,
    [Name]    NVARCHAR (150) NULL,
    CONSTRAINT [PK_Genres] PRIMARY KEY CLUSTERED ([GenreID] ASC)
);

