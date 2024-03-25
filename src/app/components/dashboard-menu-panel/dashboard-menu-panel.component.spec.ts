import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMenuPanelComponent } from './dashboard-menu-panel.component';

describe('DashboardMenuPanelComponent', () => {
  let component: DashboardMenuPanelComponent;
  let fixture: ComponentFixture<DashboardMenuPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardMenuPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardMenuPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
