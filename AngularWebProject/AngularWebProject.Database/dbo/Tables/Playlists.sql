CREATE TABLE [dbo].[Playlists] (
    [PlaylistID]       INT            IDENTITY (1, 1) NOT NULL,
    [SpotifyID]        NVARCHAR (250) NOT NULL,
    [Name]             NVARCHAR (250) NULL,
    [PlaylistImageUrl] NVARCHAR (250) NULL,
    CONSTRAINT [PK_Playlists] PRIMARY KEY CLUSTERED ([PlaylistID] ASC)
);

