import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalancingMenuPanelComponent } from './balancing-menu-panel.component';

describe('BalancingMenuPanelComponent', () => {
  let component: BalancingMenuPanelComponent;
  let fixture: ComponentFixture<BalancingMenuPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BalancingMenuPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BalancingMenuPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
