import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryAllComponent } from './library-all.component';

describe('LibraryAllComponent', () => {
  let component: LibraryAllComponent;
  let fixture: ComponentFixture<LibraryAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibraryAllComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibraryAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
