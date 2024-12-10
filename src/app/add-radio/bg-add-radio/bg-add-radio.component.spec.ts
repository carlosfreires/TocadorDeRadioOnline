import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgAddRadioComponent } from './bg-add-radio.component';

describe('BgAddRadioComponent', () => {
  let component: BgAddRadioComponent;
  let fixture: ComponentFixture<BgAddRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BgAddRadioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BgAddRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
