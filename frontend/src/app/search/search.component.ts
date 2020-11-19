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

  searchTerms: string = 'argentina'

  async searchTweets(searchTerms: string) {
    try {
      this.tweets = await this.twitter.getTweets(searchTerms);
      console.log(this.tweets);
    } catch (error) {
      console.error(error)
    }
    return false;
  }
  async postHistory(searchTerms: string) {
    const history = await this.twitter.postHistory(searchTerms);
    return false;
  }
}
