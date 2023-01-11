import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoBackgroundComponent } from './todo-background.component';

describe('TodoBackgroundComponent', () => {
  let component: TodoBackgroundComponent;
  let fixture: ComponentFixture<TodoBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoBackgroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
