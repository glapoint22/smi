import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrespondenceMenuPanelComponent } from './correspondence-menu-panel.component';

describe('CorrespondenceMenuPanelComponent', () => {
  let component: CorrespondenceMenuPanelComponent;
  let fixture: ComponentFixture<CorrespondenceMenuPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorrespondenceMenuPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CorrespondenceMenuPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
