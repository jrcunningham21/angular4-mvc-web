CREATE TABLE [dbo].[Artists] (
    [ArtistID]        INT            IDENTITY (1, 1) NOT NULL,
    [SpotifyArtistID] NVARCHAR (250) NOT NULL,
    [Name]            NVARCHAR (250) NOT NULL,
    [SpotifyUrl]      NVARCHAR (250) NULL,
    CONSTRAINT [PK_Artists] PRIMARY KEY CLUSTERED ([ArtistID] ASC)
);

