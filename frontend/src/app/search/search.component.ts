import { Component, OnInit } from '@angular/core';
import { TwitterService } from '../services/twitter.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private twitter: TwitterService) { }

  ngOnInit(): void { }

  tweets: Object[] = []

  searchTerms: string = ''

  async searchTweets(searchTerms: string) {
    if (searchTerms.includes('#') || searchTerms.includes('@')) {
      alert('No se pueden buscar usuarios ni hashtags')
    } else {
    try {
      this.tweets = await this.twitter.getTweets(searchTerms);
      console.log(this.tweets);
    } catch (error) {
      console.error(error)
    }
  }
    return false;
  }
  async postHistory(searchTerms: string) {
    if (searchTerms.includes('#') || searchTerms.includes('@')) {
      return false
    } else {
      const history = await this.twitter.postHistory(searchTerms);
    }
    return false;
  }
}
