import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPanelSectionComponent } from './menu-panel-section.component';

describe('MenuPanelSectionComponent', () => {
  let component: MenuPanelSectionComponent;
  let fixture: ComponentFixture<MenuPanelSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuPanelSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuPanelSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
