"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var spotify_service_1 = require("./spotify.service");
var token_service_1 = require("./token.service");
var SpotifyComponent = (function () {
    function SpotifyComponent(_spotifyService, _tokenService) {
        this._spotifyService = _spotifyService;
        this._tokenService = _tokenService;
        this.user = new Object();
        this.recentTracks = new Array();
    }
    SpotifyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._spotifyService.login().subscribe(function (token) {
            console.log(token);
            _this._spotifyService.getAlbum('0sNOF9WDwhWunNAHPD3Baj').subscribe(function (data) {
                console.log(data);
            }, function (err) { return console.log(err); });
            _this._spotifyService.getCurrentUser().subscribe(function (data) {
                console.log("getCurrentUser: ", data);
                _this.user = data;
            }, function (err) { return console.error(err); });
            _this._spotifyService.getUserRecentlyPlayed().subscribe(function (data) {
                console.log(data);
                _this.recentTracks = data.items;
            }, function (err) { return console.log(err); });
        }, function (err) { return console.log(err); });
    };
    SpotifyComponent.prototype.searchMusic = function () {
        //this._spotifyService.searchMusic(this.searchStr)
        //    .subscribe(res => {
        //        this.searchRes = res.artists.items;
        //    });
    };
    return SpotifyComponent;
}());
SpotifyComponent = __decorate([
    core_1.Component({
        selector: 'spotify',
        providers: [
            spotify_service_1.SpotifyService, {
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
    }),
    __metadata("design:paramtypes", [spotify_service_1.SpotifyService,
        token_service_1.TokenService])
], SpotifyComponent);
exports.SpotifyComponent = SpotifyComponent;
//# sourceMappingURL=spotify.component.js.map