import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ResistanceComponent } from './resistance.component';

describe('ResistanceComponent', () => {
  let component: ResistanceComponent;
  let fixture: ComponentFixture<ResistanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [ ResistanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should verify band1 is initialized to 1', () => {
    expect(component.band1).toEqual("1");
  });

  it('should verify band2 is initialized to 0', () => {
    expect(component.band2).toEqual("0");
  });

  it('should verify band3 is initialized to 0', () => {
    expect(component.band3).toEqual("0");
  });

  it('should verify multiplier is initialized to x1', () => {
    expect(component.multiplier).toEqual("x1");
  });

  it('should verify tolerance is initialized to 1%', () => {
    expect(component.tolerance).toEqual("1%");
  });
});
