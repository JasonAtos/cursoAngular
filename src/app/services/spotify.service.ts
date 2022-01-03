import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private http: HttpClient    
  ) {}

  getquery(query: string){
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCAXncbHuaurcZFD59SCrs5ri44OptsNNOxqAOaewEN5jflpcAKgPWqhS5MPPGYnEwDQA4u83CCJX8puWI'
    });

    return this.http.get(url, {headers});
  }

  getNewReleases(){
    return this.getquery('browse/new-releases')
            .pipe(map( (data:any) => {
              return data.albums.items
            }))
  }

  getArtistas(termino:string){
    return this.getquery(`search?q=${termino}&type=artist`)
            .pipe(map((data:any) => {
              return data.artists.items
            }))
  }

  getArtista(id:string){    
    return this.getquery(`artists/${id}`);
  }

  getArtistTopTracks(id:string){    
    return this.getquery(`artists/${id}/top-tracks?market=ES`)
    .pipe(map((data:any) => {
      return data.tracks
    }))
  }

}