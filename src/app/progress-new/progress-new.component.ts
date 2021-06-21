import { Component, Input, OnInit } from '@angular/core';
import { Variant, Styles } from './progress';

@Component({
  selector: 'app-progress-new',
  templateUrl: './progress-new.component.html',
  styleUrls: ['./progress-new.component.scss'],
})
export class ProgressNewComponent implements OnInit {
  // Primary Inputs
  @Input() variant: Variant = 'indeterminate';

  // Secondary Inputs
  @Input() progress: number = 0;
  @Input() buffer: number = 5000;
  @Input() label: boolean = false;

  // Styling Inputs
  @Input() contColor: string = 'rgba(0, 0, 255, 0.25)';
  @Input() fillColor: string = 'blue';
  @Input() labelColor: string = 'rgba(0, 0, 0, 0.87)';

  contStyles: Styles = { backgroundColor: this.contColor };
  fillStyles: Styles = { backgroundColor: this.fillColor };
  labelStyles: Styles = { color: this.labelColor };
  private interval: any;

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.applyVariant(this.variant);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  applyVariant(variant: string): void {
    if (variant === 'determinate') return this.applyDeterminate();
    if (variant === 'buffer') return this.applyBuffer();
    return this.applyIndeterminate();
  }

  applyIndeterminate(): void {
    this.label = false;

    this.contStyles = {
      ...this.contStyles,
      overflow: 'hidden',
      position: 'relative',
    };

    this.fillStyles = {
      ...this.fillStyles,
      width: '40%',
      marginLeft: '-20%',
      position: 'absolute',
      animation: 'indeterminate 2s infinite ease-in-out',
    };
  }

  applyDeterminate(): void {
    const width = this.progress > 100 ? '100%' : `${this.progress}%`;
    this.fillStyles = {
      ...this.fillStyles,
      width,
    };
  }

  applyBuffer(): void {
    const intervalTime = this.buffer / 20;
    this.interval = setInterval(() => {
      console.log(this.progress);
      if (this.progress >= 100) clearInterval(this.interval);
      if (this.progress < 100) {
        this.progress += 5;
        this.fillStyles = {
          ...this.fillStyles,
          width: this.progress + '%',
        };
      }
    }, intervalTime);
  }
}
