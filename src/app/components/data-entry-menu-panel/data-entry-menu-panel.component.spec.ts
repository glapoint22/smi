import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataEntryMenuPanelComponent } from './data-entry-menu-panel.component';

describe('DataEntryMenuPanelComponent', () => {
  let component: DataEntryMenuPanelComponent;
  let fixture: ComponentFixture<DataEntryMenuPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataEntryMenuPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataEntryMenuPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
