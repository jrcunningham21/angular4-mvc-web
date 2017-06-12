CREATE TABLE [dbo].[Albums] (
    [AlbumID]        INT            IDENTITY (1, 1) NOT NULL,
    [SpotifyAlbumID] NVARCHAR (250) NOT NULL,
    [Name]           NVARCHAR (250) NULL,
    [AlbumCoverUrl]  NVARCHAR (250) NULL,
    [ReleaseDate]    DATETIME2 (7)  NULL,
    [Label]          NVARCHAR (250) NULL,
    [Popularity]     INT            NULL,
    [ArtistID]       INT            NOT NULL,
    CONSTRAINT [PK_Albums] PRIMARY KEY CLUSTERED ([AlbumID] ASC),
    CONSTRAINT [FK_Albums_Artists] FOREIGN KEY ([ArtistID]) REFERENCES [dbo].[Artists] ([ArtistID])
);

