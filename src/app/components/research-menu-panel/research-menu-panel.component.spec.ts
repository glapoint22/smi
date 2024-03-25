import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchMenuPanelComponent } from './research-menu-panel.component';

describe('ResearchMenuPanelComponent', () => {
  let component: ResearchMenuPanelComponent;
  let fixture: ComponentFixture<ResearchMenuPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearchMenuPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResearchMenuPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
