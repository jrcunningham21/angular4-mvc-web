﻿CREATE TABLE [dbo].[Authors] (
    [AuthorID] INT            IDENTITY (1, 1) NOT NULL,
    [Name]     NVARCHAR (250) NOT NULL,
    CONSTRAINT [PK_Authors] PRIMARY KEY CLUSTERED ([AuthorID] ASC)
);

