import { Component, Input, OnInit } from '@angular/core';

interface Style {
  backgroundColor: string;
  width?: string;
}

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnInit {
  @Input() progress: number = 0;
  @Input() baseColor: string = 'rgba(255, 0, 0, 0.25)';
  @Input() barColor: string = 'blue';
  @Input() loading: boolean = false;

  baseStyles: Style = {
    backgroundColor: this.baseColor,
  };

  barStyles: Style = {
    width: this.progress + '%',
    backgroundColor: this.barColor,
  };

  ngOnInit(): void {}

  ngAfterContentInit() {
    if (this.loading) this.load();
  }

  ngOnChanges() {
    this.baseStyles = {
      backgroundColor: this.baseColor,
    };

    this.barStyles = {
      width: this.progress + '%',
      backgroundColor: this.barColor,
    };
  }

  load() {
    this.progress = 0;
    const test = setInterval(() => {
      this.progress += 10;
      this.barStyles = {
        width: this.progress + '%',
        backgroundColor: this.barColor,
      };
      if (this.progress === 100 || this.loading === false) clearInterval(test);
    }, 800);
  }
}
