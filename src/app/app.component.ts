import { Component, OnInit } from '@angular/core';

interface Bar {
  progress: number;
  baseColor: string;
  barColor: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: string = 'Angular Fun';
  loading: boolean = false;
  progress = 10;

  ngOnInit() {
    this.loading = true;
    this.autoBarDemo();
    setTimeout(() => (this.loading = false), this.randomInt(4, 8) * 1000);
  }

  randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Bar increases from 10% to 90% on repeat
  autoBarDemo() {
    setInterval(() => {
      this.progress = this.progress >= 90 ? 10 : this.progress + 10;
    }, 1500);
  }
}
