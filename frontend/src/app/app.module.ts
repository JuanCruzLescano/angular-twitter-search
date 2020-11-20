import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { HistoryComponent } from './history/history.component';
import { Route, RouterModule } from '@angular/router';
import { TwitterService } from './services/twitter.service';

const routes: Route[] = [
  {
    path: '',
    redirectTo: '/busqueda',
    pathMatch: 'full'
  },
  {
    path: 'busqueda',
    component: SearchComponent
  },
  {
    path: 'historial',
    component: HistoryComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [TwitterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
