import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  //declarations serve to indicate the used modules
  declarations: [AppComponent, HeaderComponent, UserComponent],
  bootstrap: [AppComponent],
  //#Note:
  // *While you are migrating the application to use Modules, the existing standalone's can be defined in the imports
  // *BrowserModule - Should always be imported, In the main Application Module
  imports: [BrowserModule, SharedModule, TasksModule],
})
export class AppModule {}
