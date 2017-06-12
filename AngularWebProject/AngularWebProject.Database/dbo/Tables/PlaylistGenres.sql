CREATE TABLE [dbo].[PlaylistGenres] (
    [PlaylistGenreID] INT            IDENTITY (1, 1) NOT NULL,
    [PlaylistID]      INT            NOT NULL,
    [GenreID]         INT            NOT NULL,
    [ArtistSpotifyID] NVARCHAR (250) NOT NULL,
    CONSTRAINT [PK_PlaylistGenres] PRIMARY KEY CLUSTERED ([PlaylistGenreID] ASC),
    CONSTRAINT [FK_PlaylistGenres_Genres] FOREIGN KEY ([GenreID]) REFERENCES [dbo].[Genres] ([GenreID]),
    CONSTRAINT [FK_PlaylistGenres_Playlists] FOREIGN KEY ([PlaylistID]) REFERENCES [dbo].[Playlists] ([PlaylistID])
);

