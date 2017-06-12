CREATE TABLE [dbo].[Tracks] (
    [TrackID]        INT            IDENTITY (1, 1) NOT NULL,
    [SpotifyTrackID] NVARCHAR (250) NOT NULL,
    [ArtistID]       INT            NOT NULL,
    [AlbumID]        INT            NOT NULL,
    [Name]           NVARCHAR (250) NOT NULL,
    [TrackNumber]    INT            NULL,
    [PreviewUrl]     NVARCHAR (250) NULL,
    CONSTRAINT [PK_Tracks] PRIMARY KEY CLUSTERED ([TrackID] ASC),
    CONSTRAINT [FK_Tracks_Albums] FOREIGN KEY ([AlbumID]) REFERENCES [dbo].[Albums] ([AlbumID]),
    CONSTRAINT [FK_Tracks_Artists] FOREIGN KEY ([ArtistID]) REFERENCES [dbo].[Artists] ([ArtistID])
);

