import { Component } from '@angular/core';
import { Injectable } from '@angular/core';

import { SpotifyService } from './spotify.service'
import { TokenService } from './token.service';

@Component({
    selector: 'spotify',
    providers: [
        SpotifyService, {
            provide: "SpotifyConfig",
            useValue: {
                clientId: 'cfa86897ef3245a5b25643a1fe326a44',
                redirectUri: 'http://localhost:41020',
                scope: 'user-read-recently-played user-follow-modify user-follow-read playlist-read-private playlist-read-collaborative playlist-modify-public playlist-modify-private user-library-read user-library-modify user-read-private',
                // If you already have an auth token
                authToken: localStorage.getItem('spotify-token')
            }
        }
    ],
    templateUrl: './templates/spotify.template.html'
})
export class SpotifyComponent {
    searchStr: string;
    searchRes: string[];
    private user: Object;
    private recentTracks: any;
    constructor(
        private _spotifyService: SpotifyService,
        private _tokenService: TokenService
    ) {
        this.user = new Object();
        this.recentTracks = new Array<Object>();
    }

    ngOnInit() {
        this._spotifyService.login().subscribe(
            token => {
                console.log(token);
                this._spotifyService.getAlbum('0sNOF9WDwhWunNAHPD3Baj').subscribe(
                    data => {
                        console.log(data);
                    },
                    err => console.log(err));

                this._spotifyService.getCurrentUser().subscribe(
                    data => {
                        console.log("getCurrentUser: ", data);
                        this.user = data;
                    },
                    err => console.error(err));

                this._spotifyService.getUserRecentlyPlayed().subscribe(
                    data => {
                        console.log(data);
                        this.recentTracks = data.items;
                    },
                    err => console.log(err));
            },
            err => console.log(err));
    }

    searchMusic() {
        
        //this._spotifyService.searchMusic(this.searchStr)
        //    .subscribe(res => {
        //        this.searchRes = res.artists.items;
        //    });
    }
}