import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPanelSectionHeaderComponent } from './menu-panel-section-header.component';

describe('MenuPanelSectionHeaderComponent', () => {
  let component: MenuPanelSectionHeaderComponent;
  let fixture: ComponentFixture<MenuPanelSectionHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuPanelSectionHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuPanelSectionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
