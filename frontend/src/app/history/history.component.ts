import { Component, OnInit } from '@angular/core';
import { TwitterService } from '../services/twitter.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  history: Object;

  constructor(private historyService: TwitterService) {
    this.historyService.getHistory().subscribe(items => {
      this.history = items
      console.log(this.history)
    })
  }

  ngOnInit(): void {
  }

}
