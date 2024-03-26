import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationMenuPanelComponent } from './administration-menu-panel.component';

describe('AdministrationMenuPanelComponent', () => {
  let component: AdministrationMenuPanelComponent;
  let fixture: ComponentFixture<AdministrationMenuPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministrationMenuPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdministrationMenuPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
