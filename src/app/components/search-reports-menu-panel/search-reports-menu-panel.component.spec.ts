import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchReportsMenuPanelComponent } from './search-reports-menu-panel.component';

describe('SearchReportsMenuPanelComponent', () => {
  let component: SearchReportsMenuPanelComponent;
  let fixture: ComponentFixture<SearchReportsMenuPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchReportsMenuPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchReportsMenuPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
