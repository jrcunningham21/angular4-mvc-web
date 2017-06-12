CREATE TABLE [dbo].[TopTracks] (
    [TopTrackID]    INT            IDENTITY (1, 1) NOT NULL,
    [Name]          NVARCHAR (150) NULL,
    [Artist]        NVARCHAR (150) NULL,
    [Album]         NVARCHAR (150) NULL,
    [AlbumImageUrl] NVARCHAR (250) NOT NULL,
    [PreviewUrl]    NVARCHAR (250) NULL,
    [WikiUrl]       NVARCHAR (250) NULL,
    CONSTRAINT [PK_TopTracks] PRIMARY KEY CLUSTERED ([TopTrackID] ASC)
);

