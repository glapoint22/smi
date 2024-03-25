import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPanelHeaderComponent } from './menu-panel-header.component';

describe('MenuItemPanelHeaderComponent', () => {
  let component: MenuPanelHeaderComponent;
  let fixture: ComponentFixture<MenuPanelHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuPanelHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuPanelHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
