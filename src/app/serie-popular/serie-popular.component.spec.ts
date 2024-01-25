import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriePopularComponent } from './serie-popular.component';

describe('SeriePopularComponent', () => {
  let component: SeriePopularComponent;
  let fixture: ComponentFixture<SeriePopularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriePopularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriePopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
