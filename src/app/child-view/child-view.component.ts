import { Component, OnInit } from '@angular/core';
import { MovieAppService } from '../services/movie-app.service';

@Component({
  selector: 'app-child-view',
  templateUrl: './child-view.component.html',
  styleUrls: ['./child-view.component.scss']
})
export class ChildViewComponent implements OnInit {
  public movieAppNowPlaying: any = null;

  constructor(
    private movieAppService: MovieAppService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.movieAppService.getNowPlaying().subscribe(data => this.movieAppNowPlaying = data);
  }
}
