import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCardComponent } from './page-card.component';

describe('PageCardComponent', () => {
  let component: PageCardComponent;
  let fixture: ComponentFixture<PageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCardComponent);
    component = fixture.componentInstance;
    component.title = 'Hello';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('title should have value displayed', () => {
    const hostElement: HTMLElement = fixture.nativeElement;
    const titleDisplay: HTMLElement = hostElement.querySelector('p')!;
    expect(titleDisplay.textContent).toContain('Hello');
  });
});
