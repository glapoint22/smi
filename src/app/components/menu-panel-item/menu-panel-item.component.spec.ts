import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPanelItemComponent } from './menu-panel-item.component';

describe('MenuPanelItemComponent', () => {
  let component: MenuPanelItemComponent;
  let fixture: ComponentFixture<MenuPanelItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuPanelItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuPanelItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
