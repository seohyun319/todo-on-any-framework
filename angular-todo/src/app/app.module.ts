import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoBackgroundComponent } from './todo-background/todo-background.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [AppComponent, TodoBackgroundComponent, TodoListComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    //  AppRoutingModule,
    RouterModule.forRoot([{ path: '', component: TodoListComponent }]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
