CREATE TABLE [dbo].[PlaylistDetails] (
    [PlaylistDetailID] INT            IDENTITY (1, 1) NOT NULL,
    [PlaylistID]       INT            NOT NULL,
    [ArtistID]         INT            NOT NULL,
    [AlbumID]          INT            NOT NULL,
    [Name]             NVARCHAR (250) NULL,
    [PreviewUrl]       NVARCHAR (250) NULL,
    [DateAdded]        DATETIME2 (7)  NULL,
    CONSTRAINT [PK_PlaylistTracks] PRIMARY KEY CLUSTERED ([PlaylistDetailID] ASC),
    CONSTRAINT [FK_PlaylistDetails_Albums] FOREIGN KEY ([AlbumID]) REFERENCES [dbo].[Albums] ([AlbumID]),
    CONSTRAINT [FK_PlaylistDetails_Artists] FOREIGN KEY ([ArtistID]) REFERENCES [dbo].[Artists] ([ArtistID]),
    CONSTRAINT [FK_PlaylistTracks_Playlists] FOREIGN KEY ([PlaylistID]) REFERENCES [dbo].[Playlists] ([PlaylistID])
);

