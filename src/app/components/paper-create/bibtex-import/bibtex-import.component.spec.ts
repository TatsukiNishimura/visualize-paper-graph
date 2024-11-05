import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibtexImportComponent } from './bibtex-import.component';

describe('BibtexImportComponent', () => {
  let component: BibtexImportComponent;
  let fixture: ComponentFixture<BibtexImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BibtexImportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BibtexImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
