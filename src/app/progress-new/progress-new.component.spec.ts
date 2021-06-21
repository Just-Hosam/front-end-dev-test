import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressNewComponent } from './progress-new.component';

describe('ProgressNewComponent', () => {
  let component: ProgressNewComponent;
  let fixture: ComponentFixture<ProgressNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
