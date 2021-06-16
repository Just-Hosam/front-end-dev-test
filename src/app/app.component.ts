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
  title: string = 'PENNY FE DEV TEST';
  loading: boolean = false;
  autoBar: Bar = {
    progress: 10,
    baseColor: 'rgba(0, 0, 255, 0.25)',
    barColor: 'blue',
  };
  bars: Bar[] = [
    {
      progress: 0,
      baseColor: 'rgba(255, 0, 0, 0.25)',
      barColor: 'red',
    },
    {
      progress: 50,
      baseColor: 'rgba(220, 220, 56, 0.25)',
      barColor: 'rgb(220, 220, 56)',
    },
    {
      progress: 100,
      baseColor: 'rgba(0, 255, 0, 0.25)',
      barColor: 'green',
    },
  ];

  ngOnInit() {
    this.loading = true;
    this.autoBarDemo();
    setTimeout(() => (this.loading = false), this.randomInt(4, 8) * 1000);
  }

  // Bar increases from 10% to 90% on repeat
  autoBarDemo() {
    setInterval(() => {
      this.autoBar.progress =
        this.autoBar.progress >= 90 ? 10 : this.autoBar.progress + 10;
    }, 800);
  }

  randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
