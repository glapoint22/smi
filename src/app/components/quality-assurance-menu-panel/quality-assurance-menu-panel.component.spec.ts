import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityAssuranceMenuPanelComponent } from './quality-assurance-menu-panel.component';

describe('QualityAssuranceMenuPanelComponent', () => {
  let component: QualityAssuranceMenuPanelComponent;
  let fixture: ComponentFixture<QualityAssuranceMenuPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QualityAssuranceMenuPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QualityAssuranceMenuPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
