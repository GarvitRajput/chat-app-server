import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { SocketIoModule, SocketIoConfig } from "ngx-socket-io";
import { ToppyModule } from "toppy";
import { AngularDraggableModule } from 'angular2-draggable';

const config: SocketIoConfig = { url: environment.SERVER_URL, options: {} };

import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SideMenuComponent } from "./components/side-menu/side-menu.component";
import { ChatMenuComponent } from "./components/chat-menu/chat-menu.component";
import { ChatWindowComponent } from "./components/chat-window/chat-window.component";
import { UserInfoComponent } from "./components/user-info/user-info.component";
import { DisconnectedModelComponent } from "./components/models/disconnected-model/disconnected-model.component";
import { CallModelComponent } from "./components/models/call-model/call-model.component";
import { SettingsModelComponent } from "./components/models/settings-model/settings-model.component";
import { EditProfileModelComponent } from "./components/models/edit-profile-model/edit-profile-model.component";
import { AddFriendModelComponent } from "./components/models/add-friend-model/add-friend-model.component";
import { NewGroupModelComponent } from "./components/models/new-group-model/new-group-model.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxFileHelpersModule } from "ngx-file-helpers";
import { CookieService } from "ngx-cookie-service";
import { UserListItemComponent } from "./components/chat-menu/user-list-item/user-list-item.component";
import { UserListComponent } from "./components/chat-menu/user-list/user-list.component";
import { MessageListComponent } from "./components/chat-window/message-list/message-list.component";
import { MessageComponent } from "./components/chat-window/message-list/message/message.component";
import { environment } from 'src/environments/environment';
import { LoaderComponent } from './components/loader/loader.component';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { ProfilePanelComponent } from './components/profile-panel/profile-panel.component';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { UserProfileImageComponent } from './components/user-profile-image/user-profile-image.component';
import { RightPanelComponent } from './components/right-panel/right-panel.component';
import { IncomingCallComponent } from './components/incoming-call/incoming-call.component';
import { MinCallWindowComponent } from './components/min-call-window/min-call-window.component';
import { MaxVideoCallComponent } from './components/max-video-call/max-video-call.component';
import { MessagePipe } from './pipes/message.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    ChatMenuComponent,
    ChatWindowComponent,
    UserInfoComponent,
    DisconnectedModelComponent,
    CallModelComponent,
    SettingsModelComponent,
    EditProfileModelComponent,
    AddFriendModelComponent,
    NewGroupModelComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    UserListItemComponent,
    UserListComponent,
    MessageListComponent,
    MessageComponent,
    LoaderComponent,
    ProfilePanelComponent,
    TimeAgoPipe,
    FilterPipe,
    UserProfileImageComponent,
    RightPanelComponent,
    IncomingCallComponent,
    MinCallWindowComponent,
    MaxVideoCallComponent,
    MessagePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    PickerModule,
    ReactiveFormsModule,
    SocketIoModule.forRoot(config),
    ToppyModule,
    NgxFileHelpersModule,
    AngularDraggableModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {}
