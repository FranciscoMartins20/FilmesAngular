import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieServiceComponent } from './serie-service.component';

describe('SerieServiceComponent', () => {
  let component: SerieServiceComponent;
  let fixture: ComponentFixture<SerieServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerieServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
