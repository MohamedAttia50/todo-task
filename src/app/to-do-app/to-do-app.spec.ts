import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoApp } from './to-do-app';

describe('ToDoApp', () => {
  let component: ToDoApp;
  let fixture: ComponentFixture<ToDoApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToDoApp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoApp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
