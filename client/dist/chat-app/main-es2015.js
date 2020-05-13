(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");








const routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "home", component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: "login", component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: "register", component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/loader/loader.component */ "./src/app/components/loader/loader.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'chat-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "container-fluid"], [1, "row"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_1__["LoaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/__ivy_ngcc__/fesm2015/ngx-socket-io.js");
/* harmony import */ var toppy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! toppy */ "./node_modules/toppy/__ivy_ngcc__/fesm2015/toppy.js");
/* harmony import */ var angular2_draggable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-draggable */ "./node_modules/angular2-draggable/__ivy_ngcc__/fesm2015/angular2-draggable.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/side-menu/side-menu.component */ "./src/app/components/side-menu/side-menu.component.ts");
/* harmony import */ var _components_chat_menu_chat_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/chat-menu/chat-menu.component */ "./src/app/components/chat-menu/chat-menu.component.ts");
/* harmony import */ var _components_chat_window_chat_window_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/chat-window/chat-window.component */ "./src/app/components/chat-window/chat-window.component.ts");
/* harmony import */ var _components_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/user-info/user-info.component */ "./src/app/components/user-info/user-info.component.ts");
/* harmony import */ var _components_models_disconnected_model_disconnected_model_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/models/disconnected-model/disconnected-model.component */ "./src/app/components/models/disconnected-model/disconnected-model.component.ts");
/* harmony import */ var _components_models_call_model_call_model_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/models/call-model/call-model.component */ "./src/app/components/models/call-model/call-model.component.ts");
/* harmony import */ var _components_models_settings_model_settings_model_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/models/settings-model/settings-model.component */ "./src/app/components/models/settings-model/settings-model.component.ts");
/* harmony import */ var _components_models_edit_profile_model_edit_profile_model_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/models/edit-profile-model/edit-profile-model.component */ "./src/app/components/models/edit-profile-model/edit-profile-model.component.ts");
/* harmony import */ var _components_models_add_friend_model_add_friend_model_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/models/add-friend-model/add-friend-model.component */ "./src/app/components/models/add-friend-model/add-friend-model.component.ts");
/* harmony import */ var _components_models_new_group_model_new_group_model_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/models/new-group-model/new-group-model.component */ "./src/app/components/models/new-group-model/new-group-model.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_file_helpers__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-file-helpers */ "./node_modules/ngx-file-helpers/__ivy_ngcc__/fesm2015/ngx-file-helpers.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/ngx-cookie-service.js");
/* harmony import */ var _components_chat_menu_user_list_item_user_list_item_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/chat-menu/user-list-item/user-list-item.component */ "./src/app/components/chat-menu/user-list-item/user-list-item.component.ts");
/* harmony import */ var _components_chat_menu_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/chat-menu/user-list/user-list.component */ "./src/app/components/chat-menu/user-list/user-list.component.ts");
/* harmony import */ var _components_chat_window_message_list_message_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/chat-window/message-list/message-list.component */ "./src/app/components/chat-window/message-list/message-list.component.ts");
/* harmony import */ var _components_chat_window_message_list_message_message_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/chat-window/message-list/message/message.component */ "./src/app/components/chat-window/message-list/message/message.component.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/loader/loader.component */ "./src/app/components/loader/loader.component.ts");
/* harmony import */ var _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @ctrl/ngx-emoji-mart */ "./node_modules/@ctrl/ngx-emoji-mart/__ivy_ngcc__/fesm2015/ctrl-ngx-emoji-mart.js");
/* harmony import */ var _components_profile_panel_profile_panel_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/profile-panel/profile-panel.component */ "./src/app/components/profile-panel/profile-panel.component.ts");
/* harmony import */ var _pipes_time_ago_pipe__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pipes/time-ago.pipe */ "./src/app/pipes/time-ago.pipe.ts");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pipes/filter.pipe */ "./src/app/pipes/filter.pipe.ts");
/* harmony import */ var _components_user_profile_image_user_profile_image_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/user-profile-image/user-profile-image.component */ "./src/app/components/user-profile-image/user-profile-image.component.ts");
/* harmony import */ var _components_right_panel_right_panel_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/right-panel/right-panel.component */ "./src/app/components/right-panel/right-panel.component.ts");
/* harmony import */ var _components_incoming_call_incoming_call_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/incoming-call/incoming-call.component */ "./src/app/components/incoming-call/incoming-call.component.ts");
/* harmony import */ var _components_min_call_window_min_call_window_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/min-call-window/min-call-window.component */ "./src/app/components/min-call-window/min-call-window.component.ts");
/* harmony import */ var _components_max_video_call_max_video_call_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/max-video-call/max-video-call.component */ "./src/app/components/max-video-call/max-video-call.component.ts");
/* harmony import */ var _pipes_message_pipe__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./pipes/message.pipe */ "./src/app/pipes/message.pipe.ts");










































const config = { url: src_environments_environment__WEBPACK_IMPORTED_MODULE_28__["environment"].SERVER_URL, options: {} };
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_23__["CookieService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"],
            _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_30__["PickerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"],
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["SocketIoModule"].forRoot(config),
            toppy__WEBPACK_IMPORTED_MODULE_3__["ToppyModule"],
            ngx_file_helpers__WEBPACK_IMPORTED_MODULE_22__["NgxFileHelpersModule"],
            angular2_draggable__WEBPACK_IMPORTED_MODULE_4__["AngularDraggableModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_8__["SideMenuComponent"],
        _components_chat_menu_chat_menu_component__WEBPACK_IMPORTED_MODULE_9__["ChatMenuComponent"],
        _components_chat_window_chat_window_component__WEBPACK_IMPORTED_MODULE_10__["ChatWindowComponent"],
        _components_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_11__["UserInfoComponent"],
        _components_models_disconnected_model_disconnected_model_component__WEBPACK_IMPORTED_MODULE_12__["DisconnectedModelComponent"],
        _components_models_call_model_call_model_component__WEBPACK_IMPORTED_MODULE_13__["CallModelComponent"],
        _components_models_settings_model_settings_model_component__WEBPACK_IMPORTED_MODULE_14__["SettingsModelComponent"],
        _components_models_edit_profile_model_edit_profile_model_component__WEBPACK_IMPORTED_MODULE_15__["EditProfileModelComponent"],
        _components_models_add_friend_model_add_friend_model_component__WEBPACK_IMPORTED_MODULE_16__["AddFriendModelComponent"],
        _components_models_new_group_model_new_group_model_component__WEBPACK_IMPORTED_MODULE_17__["NewGroupModelComponent"],
        _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_18__["DashboardComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"],
        _components_register_register_component__WEBPACK_IMPORTED_MODULE_20__["RegisterComponent"],
        _components_chat_menu_user_list_item_user_list_item_component__WEBPACK_IMPORTED_MODULE_24__["UserListItemComponent"],
        _components_chat_menu_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_25__["UserListComponent"],
        _components_chat_window_message_list_message_list_component__WEBPACK_IMPORTED_MODULE_26__["MessageListComponent"],
        _components_chat_window_message_list_message_message_component__WEBPACK_IMPORTED_MODULE_27__["MessageComponent"],
        _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_29__["LoaderComponent"],
        _components_profile_panel_profile_panel_component__WEBPACK_IMPORTED_MODULE_31__["ProfilePanelComponent"],
        _pipes_time_ago_pipe__WEBPACK_IMPORTED_MODULE_32__["TimeAgoPipe"],
        _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_33__["FilterPipe"],
        _components_user_profile_image_user_profile_image_component__WEBPACK_IMPORTED_MODULE_34__["UserProfileImageComponent"],
        _components_right_panel_right_panel_component__WEBPACK_IMPORTED_MODULE_35__["RightPanelComponent"],
        _components_incoming_call_incoming_call_component__WEBPACK_IMPORTED_MODULE_36__["IncomingCallComponent"],
        _components_min_call_window_min_call_window_component__WEBPACK_IMPORTED_MODULE_37__["MinCallWindowComponent"],
        _components_max_video_call_max_video_call_component__WEBPACK_IMPORTED_MODULE_38__["MaxVideoCallComponent"],
        _pipes_message_pipe__WEBPACK_IMPORTED_MODULE_39__["MessagePipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"],
        _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_30__["PickerModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["SocketIoModule"], toppy__WEBPACK_IMPORTED_MODULE_3__["ToppyModule"],
        ngx_file_helpers__WEBPACK_IMPORTED_MODULE_22__["NgxFileHelpersModule"],
        angular2_draggable__WEBPACK_IMPORTED_MODULE_4__["AngularDraggableModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                    _components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_8__["SideMenuComponent"],
                    _components_chat_menu_chat_menu_component__WEBPACK_IMPORTED_MODULE_9__["ChatMenuComponent"],
                    _components_chat_window_chat_window_component__WEBPACK_IMPORTED_MODULE_10__["ChatWindowComponent"],
                    _components_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_11__["UserInfoComponent"],
                    _components_models_disconnected_model_disconnected_model_component__WEBPACK_IMPORTED_MODULE_12__["DisconnectedModelComponent"],
                    _components_models_call_model_call_model_component__WEBPACK_IMPORTED_MODULE_13__["CallModelComponent"],
                    _components_models_settings_model_settings_model_component__WEBPACK_IMPORTED_MODULE_14__["SettingsModelComponent"],
                    _components_models_edit_profile_model_edit_profile_model_component__WEBPACK_IMPORTED_MODULE_15__["EditProfileModelComponent"],
                    _components_models_add_friend_model_add_friend_model_component__WEBPACK_IMPORTED_MODULE_16__["AddFriendModelComponent"],
                    _components_models_new_group_model_new_group_model_component__WEBPACK_IMPORTED_MODULE_17__["NewGroupModelComponent"],
                    _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_18__["DashboardComponent"],
                    _components_login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"],
                    _components_register_register_component__WEBPACK_IMPORTED_MODULE_20__["RegisterComponent"],
                    _components_chat_menu_user_list_item_user_list_item_component__WEBPACK_IMPORTED_MODULE_24__["UserListItemComponent"],
                    _components_chat_menu_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_25__["UserListComponent"],
                    _components_chat_window_message_list_message_list_component__WEBPACK_IMPORTED_MODULE_26__["MessageListComponent"],
                    _components_chat_window_message_list_message_message_component__WEBPACK_IMPORTED_MODULE_27__["MessageComponent"],
                    _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_29__["LoaderComponent"],
                    _components_profile_panel_profile_panel_component__WEBPACK_IMPORTED_MODULE_31__["ProfilePanelComponent"],
                    _pipes_time_ago_pipe__WEBPACK_IMPORTED_MODULE_32__["TimeAgoPipe"],
                    _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_33__["FilterPipe"],
                    _components_user_profile_image_user_profile_image_component__WEBPACK_IMPORTED_MODULE_34__["UserProfileImageComponent"],
                    _components_right_panel_right_panel_component__WEBPACK_IMPORTED_MODULE_35__["RightPanelComponent"],
                    _components_incoming_call_incoming_call_component__WEBPACK_IMPORTED_MODULE_36__["IncomingCallComponent"],
                    _components_min_call_window_min_call_window_component__WEBPACK_IMPORTED_MODULE_37__["MinCallWindowComponent"],
                    _components_max_video_call_max_video_call_component__WEBPACK_IMPORTED_MODULE_38__["MaxVideoCallComponent"],
                    _pipes_message_pipe__WEBPACK_IMPORTED_MODULE_39__["MessagePipe"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"],
                    _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_30__["PickerModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"],
                    ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["SocketIoModule"].forRoot(config),
                    toppy__WEBPACK_IMPORTED_MODULE_3__["ToppyModule"],
                    ngx_file_helpers__WEBPACK_IMPORTED_MODULE_22__["NgxFileHelpersModule"],
                    angular2_draggable__WEBPACK_IMPORTED_MODULE_4__["AngularDraggableModule"]
                ],
                providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_23__["CookieService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/chat-menu/chat-menu.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/chat-menu/chat-menu.component.ts ***!
  \*************************************************************/
/*! exports provided: ChatMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMenuComponent", function() { return ChatMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/components/chat-menu/user-list/user-list.component.ts");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipes/filter.pipe */ "./src/app/pipes/filter.pipe.ts");









const _c0 = ["app-chat-menu", ""];
class ChatMenuComponent {
    constructor(userService, chatService) {
        this.userService = userService;
        this.chatService = chatService;
        this.query = "";
        this.index = 0;
    }
    ngOnInit() {
        this.userService.activeUsers.subscribe(data => {
            if (data && data.length) {
                this.users = data;
                if (this.users[this.index])
                    this.updateActiveUser(this.index);
            }
        });
    }
    updateActiveUser(index) {
        this.users[this.index].opened = false;
        this.index = index;
        this.chatService.setActiveUser(this.users[index]);
        this.users[this.index].opened = true;
    }
}
ChatMenuComponent.ɵfac = function ChatMenuComponent_Factory(t) { return new (t || ChatMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"])); };
ChatMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatMenuComponent, selectors: [["", "app-chat-menu", ""]], attrs: _c0, decls: 27, vars: 5, consts: [[1, "col-lg-3", "col-md-3", "col-xs-12", "msg-list"], [1, "col-md-12", "search-bar-container"], ["type", "text", "placeholder", "Search user", 1, "searchbox", 3, "ngModel", "ngModelChange"], [1, "col-md-12", "sorting"], [1, "btn-group"], [1, ""], ["type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "dropdown-toggle", "sort-dropdown"], [1, "caret"], [1, "dropdown-menu"], ["href", "#"], ["role", "separator", 1, "divider"], [3, "users", "updateUser"]], template: function ChatMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChatMenuComponent_Template_input_ngModelChange_2_listener($event) { return ctx.query = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Sort By: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Last received ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Separated link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "app-user-list", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("updateUser", function ChatMenuComponent_Template_app_user_list_updateUser_25_listener($event) { return ctx.updateActiveUser($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.query);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("users", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](26, 2, ctx.users, ctx.query));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__["UserListComponent"]], pipes: [_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_5__["FilterPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdC1tZW51L2NoYXQtbWVudS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "[app-chat-menu]",
                templateUrl: "./chat-menu.component.html",
                styleUrls: ["./chat-menu.component.scss"]
            }]
    }], function () { return [{ type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/chat-menu/user-list-item/user-list-item.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/chat-menu/user-list-item/user-list-item.component.ts ***!
  \*********************************************************************************/
/*! exports provided: UserListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListItemComponent", function() { return UserListItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_models_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/message */ "./src/app/models/message.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pipes_time_ago_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../pipes/time-ago.pipe */ "./src/app/pipes/time-ago.pipe.ts");







const _c0 = ["app-user-list-item", ""];
function UserListItemComponent_ng_container_0_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r55.user.lastMessage.message, " ");
} }
function UserListItemComponent_ng_container_0_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "timeAgo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r56.user.lastMessage.sendDate));
} }
function UserListItemComponent_ng_container_0_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r57.user.unreadCount, " Unread");
} }
const _c1 = function (a0, a1) { return { available: a0, busy: a1 }; };
function UserListItemComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UserListItemComponent_ng_container_0_p_7_Template, 2, 1, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UserListItemComponent_ng_container_0_span_8_Template, 3, 3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UserListItemComponent_ng_container_0_span_9_Template, 2, 1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r54.user.profileImagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c1, ctx_r54.user.online, !ctx_r54.user.online));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r54.user.firstName + " " + ctx_r54.user.lastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r54.user.lastMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r54.user.lastMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r54.user.unreadCount);
} }
class UserListItemComponent {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
        if (this.user.lastMessage &&
            (this.user.lastMessage.messageType === src_app_models_message__WEBPACK_IMPORTED_MODULE_2__["MessageType"].Image ||
                this.user.lastMessage.messageType === src_app_models_message__WEBPACK_IMPORTED_MODULE_2__["MessageType"].Video ||
                this.user.lastMessage.messageType === src_app_models_message__WEBPACK_IMPORTED_MODULE_2__["MessageType"].File)) {
            this.user.lastMessage.message = this.user.lastMessage.message
                .split("/")
                .slice(-1)
                .pop();
        }
    }
    viewProfile() {
        this.userService.viewProfile(this.user.userId);
    }
}
UserListItemComponent.ɵfac = function UserListItemComponent_Factory(t) { return new (t || UserListItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
UserListItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserListItemComponent, selectors: [["", "app-user-list-item", ""]], inputs: { user: "user" }, attrs: _c0, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "col-md-3", "col-xs-4", "user-img"], [3, "src"], [1, "friends-status", 3, "ngClass"], [1, "col-md-9", "col-xs-8", "friend-details"], [1, "friend-name"], ["class", "friend-msg", 4, "ngIf"], ["class", "msg-time", 4, "ngIf"], ["class", "unread-tag", 4, "ngIf"], [1, "friend-msg"], [1, "msg-time"], [1, "unread-tag"]], template: function UserListItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UserListItemComponent_ng_container_0_Template, 10, 9, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], pipes: [_pipes_time_ago_pipe__WEBPACK_IMPORTED_MODULE_4__["TimeAgoPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdC1tZW51L3VzZXItbGlzdC1pdGVtL3VzZXItbGlzdC1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserListItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "[app-user-list-item]",
                templateUrl: "./user-list-item.component.html",
                styleUrls: ["./user-list-item.component.scss"],
            }]
    }], function () { return [{ type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }]; }, { user: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/chat-menu/user-list/user-list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/chat-menu/user-list/user-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _user_list_item_user_list_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-list-item/user-list-item.component */ "./src/app/components/chat-menu/user-list-item/user-list-item.component.ts");




const _c0 = function (a0) { return { "active": a0 }; };
function UserListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserListComponent_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62); const i_r60 = ctx.index; const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r61.updateActiveUser(i_r60); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, user_r59.opened))("user", user_r59);
} }
class UserListComponent {
    constructor() {
        this.updateUser = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    updateActiveUser(index) {
        this.updateUser.emit(index);
    }
}
UserListComponent.ɵfac = function UserListComponent_Factory(t) { return new (t || UserListComponent)(); };
UserListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserListComponent, selectors: [["app-user-list"]], inputs: { users: "users" }, outputs: { updateUser: "updateUser" }, decls: 2, vars: 1, consts: [[1, "col-md-12", "col-xs-12", "msg-items"], ["class", "col-md-12 col-xs-12 msg-card", "app-user-list-item", "", 3, "ngClass", "user", "click", 4, "ngFor", "ngForOf"], ["app-user-list-item", "", 1, "col-md-12", "col-xs-12", "msg-card", 3, "ngClass", "user", "click"]], template: function UserListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserListComponent_div_1_Template, 1, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _user_list_item_user_list_item_component__WEBPACK_IMPORTED_MODULE_2__["UserListItemComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdC1tZW51L3VzZXItbGlzdC91c2VyLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-user-list",
                templateUrl: "./user-list.component.html",
                styleUrls: ["./user-list.component.scss"]
            }]
    }], function () { return []; }, { users: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], updateUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/chat-window/chat-window.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/chat-window/chat-window.component.ts ***!
  \*****************************************************************/
/*! exports provided: ChatWindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatWindowComponent", function() { return ChatWindowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var src_app_models_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/message */ "./src/app/models/message.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var ngx_file_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-file-helpers */ "./node_modules/ngx-file-helpers/__ivy_ngcc__/fesm2015/ngx-file-helpers.js");
/* harmony import */ var src_app_services_call_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/call.service */ "./src/app/services/call.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _message_list_message_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./message-list/message-list.component */ "./src/app/components/chat-window/message-list/message-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ctrl/ngx-emoji-mart */ "./node_modules/@ctrl/ngx-emoji-mart/__ivy_ngcc__/fesm2015/ctrl-ngx-emoji-mart.js");
/* harmony import */ var _pipes_message_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../pipes/message.pipe */ "./src/app/pipes/message.pipe.ts");
















const _c0 = ["filePicker"];
const _c1 = ["app-chat-window", ""];
function ChatWindowComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Last seen 2 hrs ago ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Last seen 2 hrs ago ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatWindowComponent_div_1_Template_a_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.toggleCall(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatWindowComponent_div_1_Template_a_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.viewProfile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r12.activeUser.profileImagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r12.activeUser.firstName + " " + ctx_r12.activeUser.lastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.activeUser.online ? "Online" : "Offline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.activeUser.online ? "Online" : "Offline");
} }
function ChatWindowComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Garvit Rajput");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "14:28");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c2 = function () { return { position: "absolute", bottom: "97px", right: "330px" }; };
function ChatWindowComponent_emoji_mart_5_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "emoji-mart", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("emojiSelect", function ChatWindowComponent_emoji_mart_5_Template_emoji_mart_emojiSelect_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.addEmoji($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showPreview", false);
} }
class ChatWindowComponent {
    constructor(chatService, userService, callService, cdr) {
        this.chatService = chatService;
        this.userService = userService;
        this.callService = callService;
        this.cdr = cdr;
        this.showEmojiPicker = false;
        this.ongoingCall = false;
        this.messageText = "";
        this.query = "";
        this.chatMessages = [];
        this.chatService.activeUserSubject.subscribe((user) => {
            this.activeUser = user;
            this.resetHeight();
        });
        this.chatService.activeMessages.subscribe((messages) => {
            if (!messages)
                messages = [];
            this.chatMessages = [...messages];
            window["scrollToBottom"]();
            this.resetHeight();
        });
        this.chatService.searchSubject.subscribe((q) => {
            this.query = q;
        });
        this.resetHeight();
        this.user = this.userService.getUser();
    }
    viewProfile() {
        this.userService.viewProfile(this.activeUser.userId);
    }
    call() {
        console.log(this.activeUser);
        this.callService.makeCall(this.activeUser.userId);
    }
    toggleEmojiPicker() {
        this.showEmojiPicker = !this.showEmojiPicker;
    }
    addEmoji(event) {
        this.messageText = `${this.messageText}${event.emoji.native}`;
        this.showEmojiPicker = false;
        window["$"]("#message-input").focus();
    }
    toggleCall() {
        this.call();
        //this.ongoingCall = !this.ongoingCall;
        this.resetHeight();
    }
    ignoreTooBigFile(file) {
        if (file.size >= 3000000)
            console.log("large file");
        return file.size < 3000000;
    }
    ngOnInit() {
        this.resetHeight();
    }
    sendMessage() {
        if (this.messageText.length) {
            let type = this.chatService.isValidUrl(this.messageText)
                ? src_app_models_message__WEBPACK_IMPORTED_MODULE_2__["MessageType"].Url
                : src_app_models_message__WEBPACK_IMPORTED_MODULE_2__["MessageType"].Text;
            this.chatService.sendMessage(this.messageText, type);
            this.messageText = "";
        }
    }
    onReadStart(fileCount) {
        //file reading
    }
    onFilePicked(file) {
        this.picked = file;
    }
    resetHeight() {
        setTimeout(() => {
            let $ = window["$"];
            if ($(".audio-call").outerHeight()) {
                $(".msg-container").height(window.screen.height -
                    $(".audio-call").outerHeight() -
                    $(".msg-chat-header").outerHeight() -
                    $(".msgbox-container").outerHeight() -
                    125);
            }
            else {
                $(".msg-container").height(window.screen.height -
                    $(".msg-chat-header").outerHeight() -
                    $(".msgbox-container").outerHeight() -
                    125);
            }
            window["scrollToBottom"]();
        }, 100);
    }
    onReadEnd(fileCount) {
        try {
            let messageType = src_app_models_message__WEBPACK_IMPORTED_MODULE_2__["MessageType"].File;
            let content = this.picked.content;
            switch (this.picked.type.split("/")[0]) {
                case "image":
                    messageType = src_app_models_message__WEBPACK_IMPORTED_MODULE_2__["MessageType"].Image;
                    break;
                case "video":
                    messageType = src_app_models_message__WEBPACK_IMPORTED_MODULE_2__["MessageType"].Video;
                    break;
                default:
                    content = this.picked.name;
                    break;
            }
            this.chatMessages.push({
                id: "",
                content: content,
                from: this.user.userId,
                to: this.activeUser.userId,
                type: messageType,
                timeStamp: new Date(),
            });
            this.chatService
                .uploadFile(this.picked.underlyingFile)
                .subscribe((res) => {
                this.chatService.sendMessage(res.path, messageType);
            });
            this.filePicker.reset();
        }
        catch (error) { }
    }
}
ChatWindowComponent.ɵfac = function ChatWindowComponent_Factory(t) { return new (t || ChatWindowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_call_service__WEBPACK_IMPORTED_MODULE_5__["CallService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
ChatWindowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatWindowComponent, selectors: [["", "app-chat-window", ""]], viewQuery: function ChatWindowComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.filePicker = _t.first);
    } }, attrs: _c1, decls: 18, vars: 9, consts: [[1, "col-lg-7", "col-lg-offset-3", "col-md-6", "col-md-offset-3", "col-xs-12", "p-l-r-0", "msg-chatbox"], ["class", "col-md-12 col-xs-12 msg-chat-header", 4, "ngIf"], ["class", "col-md-12 audio-call", 4, "ngIf"], ["app-message-list", "", 1, "col-md-12", "msg-container", 3, "messages"], ["class", "emoji-mart", "color", "#3db16b", "title", "Pick your emoji\u2026", 3, "showPreview", "style", "emojiSelect", 4, "ngIf"], [1, "col-md-12", "msgbox-container"], [1, "m-0", 3, "submit"], [1, "col-md-12"], ["type", "text", "placeholder", "Type your message here...", "name", "messageText", "id", "message-input", 1, "msgbox", 3, "ngModel", "ngModelChange"], [1, "action-item"], ["href", "javascript:void(0);", "ngxFilePicker", "", 1, "attachment-icon", 3, "filter", "readStart", "filePick", "readEnd"], ["filePicker", "ngxFilePicker"], ["href", "javascript:void(0);", 1, "smiley-icon", 3, "click"], ["href", "javascript:void(0);", 1, "send-icon", 3, "click"], [1, "col-md-12", "col-xs-12", "msg-chat-header"], [1, "col-md-1", "col-xs-3", "msg-chatbox-img"], [3, "src"], [1, "friends-status", "busy"], [1, "col-md-3", "col-xs-5", "friend-details"], [1, "friend-name"], [1, "hidden-sm", "hidden-md", "hidden-lg"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-time"], [1, "col-md-4", "hidden-xs", "status-details"], [1, "col-md-4", "col-xs-4", "setting-container"], [1, "setting"], ["href", "javascript:void(0);", 1, "privatechat"], [1, "call", 3, "click"], [1, "settings", 3, "click"], [1, "col-md-12", "audio-call"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-star", "fav-icon"], [1, "caller-name"], [1, "call-time"], [1, "col-md-12", "callers-section"], [1, "col-md-6"], [1, "col-md-6", "callers-list"], [1, "col-md-3", "caller"], ["src", "assets/img/user4.jpg"], ["src", "assets/img/user5.jpg"], [1, "col-md-3", "caller", "add-caller"], ["src", "assets/img/add-call.png"], [1, "call-action"], ["href", "javascript:void(0);", 1, "screenshare"], ["href", "javascript:void(0);", 1, "mute"], ["href", "javascript:void(0);", 1, "disconnect"], ["href", "javascript:void(0);", 1, "chat"], ["color", "#3db16b", "title", "Pick your emoji\u2026", 1, "emoji-mart", 3, "showPreview", "emojiSelect"]], template: function ChatWindowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatWindowComponent_div_1_Template, 28, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatWindowComponent_div_2_Template, 29, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChatWindowComponent_emoji_mart_5_Template, 1, 4, "emoji-mart", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ChatWindowComponent_Template_form_submit_7_listener() { return ctx.sendMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChatWindowComponent_Template_input_ngModelChange_9_listener($event) { return ctx.messageText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("readStart", function ChatWindowComponent_Template_a_readStart_12_listener($event) { return ctx.onReadStart($event); })("filePick", function ChatWindowComponent_Template_a_filePick_12_listener($event) { return ctx.onFilePicked($event); })("readEnd", function ChatWindowComponent_Template_a_readEnd_12_listener($event) { return ctx.onReadEnd($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatWindowComponent_Template_a_click_15_listener() { return ctx.toggleEmojiPicker(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatWindowComponent_Template_a_click_17_listener() { return ctx.sendMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ongoingCall);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("messages", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 6, ctx.chatMessages, ctx.query));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showEmojiPicker);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.messageText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("filter", ctx.ignoreTooBigFile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _message_list_message_list_component__WEBPACK_IMPORTED_MODULE_7__["MessageListComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], ngx_file_helpers__WEBPACK_IMPORTED_MODULE_4__["FilePickerDirective"], _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_9__["PickerComponent"]], pipes: [_pipes_message_pipe__WEBPACK_IMPORTED_MODULE_10__["MessagePipe"]], styles: [".emoji-mart[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 87px;\n  right: 30px;\n}\n\n.m-0[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGF0LXdpbmRvdy9EOlxcV29ya1xcQ29kZVxcQ2hhdC1BcHAtR01cXGNoYXQtYXBwLXNlcnZlclxcY2xpZW50L3NyY1xcYXBwXFxjb21wb25lbnRzXFxjaGF0LXdpbmRvd1xcY2hhdC13aW5kb3cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdC13aW5kb3cvY2hhdC13aW5kb3cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDRjs7QURDQTtFQUNFLFdBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdC13aW5kb3cvY2hhdC13aW5kb3cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZW1vamktbWFydCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogODdweDtcclxuICByaWdodDogMzBweDtcclxufVxyXG4ubS0wIHtcclxuICBtYXJnaW46IDBweDtcclxufVxyXG4iLCIuZW1vamktbWFydCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiA4N3B4O1xuICByaWdodDogMzBweDtcbn1cblxuLm0tMCB7XG4gIG1hcmdpbjogMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatWindowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "[app-chat-window]",
                templateUrl: "./chat-window.component.html",
                styleUrls: ["./chat-window.component.scss"],
            }]
    }], function () { return [{ type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: src_app_services_call_service__WEBPACK_IMPORTED_MODULE_5__["CallService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { filePicker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["filePicker", { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/components/chat-window/message-list/message-list.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/chat-window/message-list/message-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: MessageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageListComponent", function() { return MessageListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message/message.component */ "./src/app/components/chat-window/message-list/message/message.component.ts");








const _c0 = ["app-message-list", ""];
const _c1 = function (a0, a1) { return { "send": a0, "receive": a1 }; };
function MessageListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 1);
} if (rf & 2) {
    const message_r64 = ctx.$implicit;
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c1, message_r64.to === (ctx_r63.activeUser == null ? null : ctx_r63.activeUser.userId), message_r64.to !== (ctx_r63.activeUser == null ? null : ctx_r63.activeUser.userId)))("message", message_r64)("activeUser", ctx_r63.activeUser)("user", ctx_r63.user)("isReceived", message_r64.to !== (ctx_r63.activeUser == null ? null : ctx_r63.activeUser.userId));
} }
class MessageListComponent {
    constructor(chatService, userService) {
        this.chatService = chatService;
        this.chatService.activeUserSubject.subscribe(user => {
            this.activeUser = user;
        });
        this.user = userService.getUser();
    }
    ngOnInit() { }
}
MessageListComponent.ɵfac = function MessageListComponent_Factory(t) { return new (t || MessageListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
MessageListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MessageListComponent, selectors: [["", "app-message-list", ""]], inputs: { messages: "messages" }, attrs: _c0, decls: 1, vars: 1, consts: [["class", "col-md-12 col-xs-12 msg", "app-message", "", 3, "ngClass", "message", "activeUser", "user", "isReceived", 4, "ngFor", "ngForOf"], ["app-message", "", 1, "col-md-12", "col-xs-12", "msg", 3, "ngClass", "message", "activeUser", "user", "isReceived"]], template: function MessageListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MessageListComponent_div_0_Template, 1, 8, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messages);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _message_message_component__WEBPACK_IMPORTED_MODULE_4__["MessageComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdC13aW5kb3cvbWVzc2FnZS1saXN0L21lc3NhZ2UtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "[app-message-list]",
                templateUrl: "./message-list.component.html",
                styleUrls: ["./message-list.component.scss"]
            }]
    }], function () { return [{ type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }]; }, { messages: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/chat-window/message-list/message/message.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/chat-window/message-list/message/message.component.ts ***!
  \**********************************************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_models_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/message */ "./src/app/models/message.ts");
/* harmony import */ var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pipes_time_ago_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../pipes/time-ago.pipe */ "./src/app/pipes/time-ago.pipe.ts");








const _c0 = ["app-message", ""];
function MessageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r65.activeUser == null ? null : ctx_r65.activeUser.profileImagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MessageComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r66.message.content, " ");
} }
function MessageComponent_img_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 11);
} if (rf & 2) {
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r67.message.content + "?size=300", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r67.message.content);
} }
function MessageComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r68.message.fileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r68.message.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MessageComponent_video_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "video", 13);
} if (rf & 2) {
    const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r69.message.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MessageComponent_div_10_div_1_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 11);
} if (rf & 2) {
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r75.metadata.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r75.metadata.title);
} }
function MessageComponent_div_10_div_1_video_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "video", 10);
} if (rf & 2) {
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r76.metadata.video, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c1 = function (a0, a1) { return { "col-md-4": a0, "col-md-12": a1 }; };
function MessageComponent_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MessageComponent_div_10_div_1_img_1_Template, 1, 2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MessageComponent_div_10_div_1_video_2_Template, 1, 1, "video", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c1, ctx_r72.metadata && !ctx_r72.hideinfo, !(ctx_r72.metadata && !ctx_r72.hideinfo)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r72.metadata.imagePath);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r72.metadata.imagePath);
} }
function MessageComponent_div_10_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r73.message.content);
} }
const _c2 = function (a0, a1) { return { "col-md-8": a0, "col-md-12": a1 }; };
function MessageComponent_div_10_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c2, ctx_r74.metadata.video || ctx_r74.metadata.imagePath, !(ctx_r74.metadata.video || ctx_r74.metadata.imagePath)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r74.metadata.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" - ", ctx_r74.metadata.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r74.metadata.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r74.metadata.url);
} }
function MessageComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MessageComponent_div_10_div_1_Template, 3, 6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MessageComponent_div_10_p_2_Template, 2, 1, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MessageComponent_div_10_div_3_Template, 7, 8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r70.metadata && (ctx_r70.metadata.video || ctx_r70.metadata.imagePath));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r70.metadata);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r70.metadata && !ctx_r70.hideinfo);
} }
function MessageComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r71.user == null ? null : ctx_r71.user.profileImagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c3 = function (a0) { return { "col-md-offset-1": a0 }; };
const _c4 = function (a0) { return { url: a0 }; };
class MessageComponent {
    constructor(chatService) {
        this.chatService = chatService;
        this.hideinfo = false;
    }
    ngOnInit() {
        this.message.id = this.message.timeStamp.valueOf().toString();
        this.message.relativeTimeStamp = this.chatService.getTimeStamp(this.message.timeStamp);
        if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production && this.message.content.indexOf(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_URL) == -1 &&
            (this.message.type === src_app_models_message__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Image ||
                this.message.type === src_app_models_message__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Video ||
                this.message.type === src_app_models_message__WEBPACK_IMPORTED_MODULE_1__["MessageType"].File)) {
            this.message.content = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_URL + this.message.content;
        }
        if (this.message.type === src_app_models_message__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Url) {
            this.chatService.getUrlMetadata(this.message.content).subscribe((res) => {
                if (res.success) {
                    this.metadata = res.data.metadata;
                    this.metadata.url = this.message.content;
                    if (this.message.content.indexOf(this.metadata.title) > 1)
                        this.hideinfo = true;
                    window["scrollToBottom"]();
                }
            });
        }
        if (this.message.type === src_app_models_message__WEBPACK_IMPORTED_MODULE_1__["MessageType"].File) {
            this.message.fileName = this.message.content.split("/")[this.message.content.split("/").length - 1];
        }
    }
}
MessageComponent.ɵfac = function MessageComponent_Factory(t) { return new (t || MessageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"])); };
MessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MessageComponent, selectors: [["", "app-message", ""]], inputs: { message: "message", isReceived: "isReceived", activeUser: "activeUser", user: "user" }, attrs: _c0, decls: 16, vars: 18, consts: [["class", "col-lg-1 col-md-2 col-xs-2 msg-user-img", 4, "ngIf"], [1, "col-lg-10", "col-md-9", "col-xs-10", "p-l-r-0", 3, "id", "ngClass"], [1, "col-md-12", "col-xs-12", "p-l-r-0"], [1, "msg-name"], [1, "col-md-12", "col-xs-12", "msg-content", 3, "ngClass"], [4, "ngIf"], [3, "src", "alt", 4, "ngIf"], ["controls", "", "class", "card-img-top", "alt", "message.content", 3, "src", 4, "ngIf"], [1, "msg-time"], [1, "col-lg-1", "col-md-2", "col-xs-2", "msg-user-img"], [3, "src"], [3, "src", "alt"], ["target", "_blank", 3, "href"], ["controls", "", "alt", "message.content", 1, "card-img-top", 3, "src"], [3, "ngClass", 4, "ngIf"], [3, "ngClass"], [3, "src", 4, "ngIf"]], template: function MessageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MessageComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MessageComponent_p_6_Template, 2, 1, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MessageComponent_img_7_Template, 1, 2, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MessageComponent_div_8_Template, 5, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MessageComponent_video_9_Template, 1, 1, "video", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MessageComponent_div_10_Template, 4, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "timeAgo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MessageComponent_div_15_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isReceived);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.message.id)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c3, !ctx.isReceived));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.isReceived ? ctx.activeUser.firstName + " " + ctx.activeUser.lastName : ctx.user.firstName + " " + ctx.user.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c4, ctx.message.type == 5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message.type == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message.type == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message.type == 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message.type == 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message.type == 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 12, ctx.message.timeStamp));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isReceived);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], pipes: [_pipes_time_ago_pipe__WEBPACK_IMPORTED_MODULE_5__["TimeAgoPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdC13aW5kb3cvbWVzc2FnZS1saXN0L21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "[app-message]",
                templateUrl: "./message.component.html",
                styleUrls: ["./message.component.scss"],
            }]
    }], function () { return [{ type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"] }]; }, { message: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isReceived: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], activeUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], user: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _max_video_call_max_video_call_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../max-video-call/max-video-call.component */ "./src/app/components/max-video-call/max-video-call.component.ts");
/* harmony import */ var _chat_menu_chat_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chat-menu/chat-menu.component */ "./src/app/components/chat-menu/chat-menu.component.ts");
/* harmony import */ var _chat_window_chat_window_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chat-window/chat-window.component */ "./src/app/components/chat-window/chat-window.component.ts");
/* harmony import */ var _right_panel_right_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../right-panel/right-panel.component */ "./src/app/components/right-panel/right-panel.component.ts");






class DashboardComponent {
    constructor() {
        window["$"](".loader-container").show();
    }
    ngOnInit() {
        setTimeout(() => {
            window["$"](".loader-container").hide();
        }, 2000);
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 6, vars: 0, consts: [[1, "layout"], [1, "content"], ["app-chat-menu", "", 1, "sidebar-group", "hidden-xs"], ["app-chat-window", "", 1, "chat", "hidden-xs"], ["app-right-panel", "", 1, "col-lg-2", "col-lg-offset-10", "col-md-3", "col-md-offset-9", "col-xs-12", "p-l-r-0", "profile-panel"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-max-video-call");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_max_video_call_max_video_call_component__WEBPACK_IMPORTED_MODULE_1__["MaxVideoCallComponent"], _chat_menu_chat_menu_component__WEBPACK_IMPORTED_MODULE_2__["ChatMenuComponent"], _chat_window_chat_window_component__WEBPACK_IMPORTED_MODULE_3__["ChatWindowComponent"], _right_panel_right_panel_component__WEBPACK_IMPORTED_MODULE_4__["RightPanelComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-dashboard",
                templateUrl: "./dashboard.component.html",
                styleUrls: ["./dashboard.component.scss"]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/incoming-call/incoming-call.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/incoming-call/incoming-call.component.ts ***!
  \*********************************************************************/
/*! exports provided: IncomingCallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomingCallComponent", function() { return IncomingCallComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_call_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/call.service */ "./src/app/services/call.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var angular2_draggable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-draggable */ "./node_modules/angular2-draggable/__ivy_ngcc__/fesm2015/angular2-draggable.js");








function IncomingCallComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IncomingCallComponent_div_0_Template_div_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r87.accept(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Confirm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IncomingCallComponent_div_0_Template_div_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r89.reject(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Reject");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r86.callingUser.profileImagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r86.callingUser.firstName + " " + ctx_r86.callingUser.lastName, " ");
} }
class IncomingCallComponent {
    constructor(callService, userService) {
        this.callService = callService;
        this.userService = userService;
        this.callService.incomingCall.subscribe((id) => {
            this.callingUser = this.userService.getUserByUserId(id);
            console.log(this.callingUser);
        });
    }
    reject() {
        this.callService.rejectCall(this.callingUser.userId);
        this.callingUser = null;
    }
    accept() {
        this.callService.acceptCall(this.callingUser.userId);
        this.callingUser = null;
    }
    ngOnInit() { }
}
IncomingCallComponent.ɵfac = function IncomingCallComponent_Factory(t) { return new (t || IncomingCallComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_call_service__WEBPACK_IMPORTED_MODULE_1__["CallService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
IncomingCallComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IncomingCallComponent, selectors: [["app-incoming-call"]], decls: 1, vars: 1, consts: [["ngDraggable", "", "class", "col-md-12 col-xs-12 p-l-r-0 incoming-call-window", 4, "ngIf"], ["ngDraggable", "", 1, "col-md-12", "col-xs-12", "p-l-r-0", "incoming-call-window"], [1, "col-md-8", "col-md-offset-2", "col-xs-8", "col-xs-offset-2", "incoming-caller"], [1, "col-md-12", "col-xs-12", "animation-border"], [3, "src"], [1, "col-md-12", "col-xs-12"], [1, "col-md-8", "col-md-offset-2", "col-xs-8", "col-xs-offset-2", "m-t-25", "call-action-container"], [1, "call-option", "accept", 3, "click"], ["href", "javascript:void(0);"], [1, "call-option", "cancel", 3, "click"]], template: function IncomingCallComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, IncomingCallComponent_div_0_Template, 16, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.callingUser);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], angular2_draggable__WEBPACK_IMPORTED_MODULE_4__["AngularDraggableDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5jb21pbmctY2FsbC9pbmNvbWluZy1jYWxsLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IncomingCallComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-incoming-call",
                templateUrl: "./incoming-call.component.html",
                styleUrls: ["./incoming-call.component.scss"],
            }]
    }], function () { return [{ type: src_app_services_call_service__WEBPACK_IMPORTED_MODULE_1__["CallService"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/loader/loader.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/loader/loader.component.ts ***!
  \*******************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LoaderComponent {
    constructor() {
        this.displayLoader = false;
    }
    ngOnInit() { }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(); };
LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], decls: 21, vars: 0, consts: [[1, "loader-container", 2, "display", "none"], [1, "loading"], [1, "finger", "finger-1"], [1, "finger-item"], [1, "finger", "finger-2"], [1, "finger", "finger-3"], [1, "finger", "finger-4"], [1, "last-finger"], [1, "last-finger-item"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".loader-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  position: fixed;\r\n  width: 100%;\r\n  z-index: 9999;\r\n  height: 100%;\r\n  overflow: hidden;\r\n  background-color: #3eb16a;\r\n}\r\n\r\n\r\n.loading[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  background-color: #3eb16a;\r\n  left: 50%;\r\n  top: 50%;\r\n  margin: -35px 0 0 -56px;\r\n  width: 112px;\r\n  height: 70px;\r\n  *zoom: 1;\r\n}\r\n\r\n\r\n.loading[_ngcontent-%COMP%]:before, .loading[_ngcontent-%COMP%]:after {\r\n  display: table;\r\n  content: \"\";\r\n}\r\n\r\n\r\n.loading[_ngcontent-%COMP%]:after {\r\n  clear: both;\r\n}\r\n\r\n\r\n.loading[_ngcontent-%COMP%]   .finger[_ngcontent-%COMP%] {\r\n  float: left;\r\n  margin: 0 2px 0 0;\r\n  width: 20px;\r\n  height: 100%;\r\n}\r\n\r\n\r\n.loading[_ngcontent-%COMP%]   .finger-1[_ngcontent-%COMP%] {\r\n  -webkit-animation: finger-1-animation 2s infinite ease-out;\r\n  animation: finger-1-animation 2s infinite ease-out;\r\n}\r\n\r\n\r\n.loading[_ngcontent-%COMP%]   .finger-1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  -webkit-animation: finger-1-animation-span 2s infinite ease-out;\r\n  animation: finger-1-animation-span 2s infinite ease-out;\r\n}\r\n\r\n\r\n.loading[_ngcontent-%COMP%]   .finger-1[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  -webkit-animation: finger-1-animation-i 2s infinite ease-out;\r\n  animation: finger-1-animation-i 2s infinite ease-out;\r\n}\r\n\r\n\r\n.loading[_ngcontent-%COMP%]   .finger-2[_ngcontent-%COMP%] {\r\n  -webkit-animation: finger-2-animation 2s infinite ease-out;\r\n  animation: finger-2-animation 2s infinite ease-out;\r\n}\r\n\r\n\r\n.loading[_ngcontent-%COMP%]   .finger-2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  -webkit-animation: finger-2-animation-span 2s infinite ease-out;\r\n  animation: finger-2-animation-span 2s infinite ease-out;\r\n}\r\n\r\n\r\n.loading[_ngcontent-%COMP%]   .finger-2[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  -webkit-animation: finger-2-animation-i 2s infinite ease-out;\r\n  animation: finger-2-animation-i 2s infinite ease-out;\r\n}\r\n\r\n\r\n.loading[_ngcontent-%COMP%]   .finger-3[_ngcontent-%COMP%] {\r\n  -webkit-animation: finger-3-animation 2s infinite ease-out;\r\n  animation: finger-3-animation 2s infinite ease-out;\r\n}\r\n\r\n\r\n.loading[_ngcontent-%COMP%]   .finger-3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  -webkit-animation: finger-3-animation-span 2s infinite ease-out;\r\n  animation: finger-3-animation-span 2s infinite ease-out;\r\n}\r\n\r\n\r\n.loading[_ngcontent-%COMP%]   .finger-3[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  -webkit-animation: finger-3-animation-i 2s infinite ease-out;\r\n  animation: finger-3-animation-i 2s infinite ease-out;\r\n}\r\n\r\n\r\n.loading[_ngcontent-%COMP%]   .finger-4[_ngcontent-%COMP%] {\r\n  -webkit-animation: finger-4-animation 2s infinite ease-out;\r\n  animation: finger-4-animation 2s infinite ease-out;\r\n}\r\n\r\n\r\n.loading[_ngcontent-%COMP%]   .finger-4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  -webkit-animation: finger-4-animation-span 2s infinite ease-out;\r\n  animation: finger-4-animation-span 2s infinite ease-out;\r\n}\r\n\r\n\r\n.loading[_ngcontent-%COMP%]   .finger-4[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  -webkit-animation: finger-4-animation-i 2s infinite ease-out;\r\n  animation: finger-4-animation-i 2s infinite ease-out;\r\n}\r\n\r\n\r\n.loading[_ngcontent-%COMP%]   .finger-item[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n  -webkit-border-radius: 6px 6px 8px 8px;\r\n  -webkit-background-clip: padding-box;\r\n  -moz-border-radius: 6px 6px 8px 8px;\r\n  -moz-background-clip: padding;\r\n  border-radius: 6px 6px 8px 8px;\r\n  background-clip: padding-box;\r\n  background: #fff;\r\n}\r\n\r\n\r\n.loading[_ngcontent-%COMP%]   .finger-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: auto;\r\n  padding: 5px 5px 0 5px;\r\n}\r\n\r\n\r\n.loading[_ngcontent-%COMP%]   .finger-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before, .loading[_ngcontent-%COMP%]   .finger-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  position: relative;\r\n  display: block;\r\n  margin: 0 0 2px 0;\r\n  width: 100%;\r\n  height: 2px;\r\n  background: #3eb16a;\r\n}\r\n\r\n\r\n.loading[_ngcontent-%COMP%]   .finger-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 3px;\r\n  bottom: 3px;\r\n  width: 14px;\r\n  height: 14px;\r\n  -webkit-border-radius: 10px 10px 7px 7px;\r\n  -webkit-background-clip: padding-box;\r\n  -moz-border-radius: 10px 10px 7px 7px;\r\n  -moz-background-clip: padding;\r\n  border-radius: 10px 10px 7px 7px;\r\n  background-clip: padding-box;\r\n  background: #3eb16a;\r\n}\r\n\r\n\r\n.loading[_ngcontent-%COMP%]   .last-finger[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  float: left;\r\n  width: 24px;\r\n  height: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\n\r\n.loading[_ngcontent-%COMP%]   .last-finger-item[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  right: 0;\r\n  top: 32px;\r\n  width: 110%;\r\n  height: 20px;\r\n  -webkit-border-radius: 0 5px 14px 0;\r\n  -webkit-background-clip: padding-box;\r\n  -moz-border-radius: 0 5px 14px 0;\r\n  -moz-background-clip: padding;\r\n  border-radius: 0 5px 14px 0;\r\n  background-clip: padding-box;\r\n  background: #fff;\r\n  -webkit-animation: finger-5-animation 2s infinite linear;\r\n  animation: finger-5-animation 2s infinite linear;\r\n}\r\n\r\n\r\n.loading[_ngcontent-%COMP%]   .last-finger-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 0;\r\n  top: -8px;\r\n  width: 22px;\r\n  height: 8px;\r\n  background: #fff;\r\n  overflow: hidden;\r\n}\r\n\r\n\r\n.loading[_ngcontent-%COMP%]   .last-finger-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 34px;\r\n  height: 20px;\r\n  -webkit-border-radius: 0 0 15px 15px;\r\n  -webkit-background-clip: padding-box;\r\n  -moz-border-radius: 0 0 15px 15px;\r\n  -moz-background-clip: padding;\r\n  border-radius: 0 0 15px 15px;\r\n  background-clip: padding-box;\r\n  background: #3eb16a;\r\n}\r\n\r\n\r\n@-webkit-keyframes finger-1-animation {\r\n  0% {\r\n    padding: 12px 0 5px 0;\r\n  }\r\n  20% {\r\n    padding: 12px 0 5px 0;\r\n  }\r\n  29% {\r\n    padding: 4px 0 24px 0;\r\n  }\r\n  35% {\r\n    padding: 4px 0 24px 0;\r\n  }\r\n  41% {\r\n    padding: 12px 0 5px 0;\r\n  }\r\n  100% {\r\n    padding: 12px 0 5px 0;\r\n  }\r\n}\r\n\r\n\r\n@keyframes finger-1-animation {\r\n  0% {\r\n    padding: 12px 0 5px 0;\r\n  }\r\n  20% {\r\n    padding: 12px 0 5px 0;\r\n  }\r\n  29% {\r\n    padding: 4px 0 24px 0;\r\n  }\r\n  35% {\r\n    padding: 4px 0 24px 0;\r\n  }\r\n  41% {\r\n    padding: 12px 0 5px 0;\r\n  }\r\n  100% {\r\n    padding: 12px 0 5px 0;\r\n  }\r\n}\r\n\r\n\r\n@-webkit-keyframes finger-1-animation-span {\r\n  0% {\r\n    top: 0;\r\n  }\r\n  20% {\r\n    top: 0;\r\n  }\r\n  29% {\r\n    top: -7px;\r\n  }\r\n  35% {\r\n    top: -7px;\r\n  }\r\n  41% {\r\n    top: 0;\r\n  }\r\n  100% {\r\n    top: 0;\r\n  }\r\n}\r\n\r\n\r\n@keyframes finger-1-animation-span {\r\n  0% {\r\n    top: 0;\r\n  }\r\n  20% {\r\n    top: 0;\r\n  }\r\n  29% {\r\n    top: -7px;\r\n  }\r\n  35% {\r\n    top: -7px;\r\n  }\r\n  41% {\r\n    top: 0;\r\n  }\r\n  100% {\r\n    top: 0;\r\n  }\r\n}\r\n\r\n\r\n@-webkit-keyframes finger-1-animation-i {\r\n  0% {\r\n    bottom: 3px;\r\n    height: 14px;\r\n    -webkit-border-radius: 10px 10px 7px 7px;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 10px 10px 7px 7px;\r\n    -moz-background-clip: padding;\r\n    border-radius: 10px 10px 7px 7px;\r\n    background-clip: padding-box;\r\n  }\r\n  20% {\r\n    bottom: 3px;\r\n    height: 14px;\r\n    -webkit-border-radius: 10px 10px 7px 7px;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 10px 10px 7px 7px;\r\n    -moz-background-clip: padding;\r\n    border-radius: 10px 10px 7px 7px;\r\n    background-clip: padding-box;\r\n  }\r\n  29% {\r\n    bottom: 8px;\r\n    height: 12px;\r\n    -webkit-border-radius: 7px 7px 4px 4px;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 7px 7px 4px 4px;\r\n    -moz-background-clip: padding;\r\n    border-radius: 7px 7px 4px 4px;\r\n    background-clip: padding-box;\r\n  }\r\n  35% {\r\n    bottom: 8px;\r\n    height: 12px;\r\n    -webkit-border-radius: 7px 7px 4px 4px;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 7px 7px 4px 4px;\r\n    -moz-background-clip: padding;\r\n    border-radius: 7px 7px 4px 4px;\r\n    background-clip: padding-box;\r\n  }\r\n  41% {\r\n    bottom: 3px;\r\n    height: 14px;\r\n    -webkit-border-radius: 10px 10px 7px 7px;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 10px 10px 7px 7px;\r\n    -moz-background-clip: padding;\r\n    border-radius: 10px 10px 7px 7px;\r\n    background-clip: padding-box;\r\n  }\r\n  100% {\r\n    bottom: 3px;\r\n    height: 14px;\r\n    -webkit-border-radius: 10px 10px 7px 7px;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 10px 10px 7px 7px;\r\n    -moz-background-clip: padding;\r\n    border-radius: 10px 10px 7px 7px;\r\n    background-clip: padding-box;\r\n  }\r\n}\r\n\r\n\r\n@keyframes finger-1-animation-i {\r\n  0% {\r\n    bottom: 3px;\r\n    height: 14px;\r\n    -webkit-border-radius: 10px 10px 7px 7px;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 10px 10px 7px 7px;\r\n    -moz-background-clip: padding;\r\n    border-radius: 10px 10px 7px 7px;\r\n    background-clip: padding-box;\r\n  }\r\n  20% {\r\n    bottom: 3px;\r\n    height: 14px;\r\n    -webkit-border-radius: 10px 10px 7px 7px;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 10px 10px 7px 7px;\r\n    -moz-background-clip: padding;\r\n    border-radius: 10px 10px 7px 7px;\r\n    background-clip: padding-box;\r\n  }\r\n  29% {\r\n    bottom: 8px;\r\n    height: 12px;\r\n    -webkit-border-radius: 7px 7px 4px 4px;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 7px 7px 4px 4px;\r\n    -moz-background-clip: padding;\r\n    border-radius: 7px 7px 4px 4px;\r\n    background-clip: padding-box;\r\n  }\r\n  35% {\r\n    bottom: 8px;\r\n    height: 12px;\r\n    -webkit-border-radius: 7px 7px 4px 4px;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 7px 7px 4px 4px;\r\n    -moz-background-clip: padding;\r\n    border-radius: 7px 7px 4px 4px;\r\n    background-clip: padding-box;\r\n  }\r\n  41% {\r\n    bottom: 3px;\r\n    height: 14px;\r\n    -webkit-border-radius: 10px 10px 7px 7px;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 10px 10px 7px 7px;\r\n    -moz-background-clip: padding;\r\n    border-radius: 10px 10px 7px 7px;\r\n    background-clip: padding-box;\r\n  }\r\n  100% {\r\n    bottom: 3px;\r\n    height: 14px;\r\n    -webkit-border-radius: 10px 10px 7px 7px;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 10px 10px 7px 7px;\r\n    -moz-background-clip: padding;\r\n    border-radius: 10px 10px 7px 7px;\r\n    background-clip: padding-box;\r\n  }\r\n}\r\n\r\n\r\n@-webkit-keyframes finger-2-animation {\r\n  0% {\r\n    padding: 6px 0 2px 0;\r\n  }\r\n  24% {\r\n    padding: 6px 0 2px 0;\r\n  }\r\n  33% {\r\n    padding: 2px 0 16px 0;\r\n  }\r\n  39% {\r\n    padding: 2px 0 16px 0;\r\n  }\r\n  45% {\r\n    padding: 6px 0 2px 0;\r\n  }\r\n  100% {\r\n    padding: 6px 0 2px 0;\r\n  }\r\n}\r\n\r\n\r\n@keyframes finger-2-animation {\r\n  0% {\r\n    padding: 6px 0 2px 0;\r\n  }\r\n  24% {\r\n    padding: 6px 0 2px 0;\r\n  }\r\n  33% {\r\n    padding: 2px 0 16px 0;\r\n  }\r\n  39% {\r\n    padding: 2px 0 16px 0;\r\n  }\r\n  45% {\r\n    padding: 6px 0 2px 0;\r\n  }\r\n  100% {\r\n    padding: 6px 0 2px 0;\r\n  }\r\n}\r\n\r\n\r\n@-webkit-keyframes finger-2-animation-span {\r\n  0% {\r\n    top: 0;\r\n  }\r\n  24% {\r\n    top: 0;\r\n  }\r\n  33% {\r\n    top: -7px;\r\n  }\r\n  39% {\r\n    top: -7px;\r\n  }\r\n  45% {\r\n    top: 0;\r\n  }\r\n  100% {\r\n    top: 0;\r\n  }\r\n}\r\n\r\n\r\n@keyframes finger-2-animation-span {\r\n  0% {\r\n    top: 0;\r\n  }\r\n  24% {\r\n    top: 0;\r\n  }\r\n  33% {\r\n    top: -7px;\r\n  }\r\n  39% {\r\n    top: -7px;\r\n  }\r\n  45% {\r\n    top: 0;\r\n  }\r\n  100% {\r\n    top: 0;\r\n  }\r\n}\r\n\r\n\r\n@-webkit-keyframes finger-2-animation-i {\r\n  0% {\r\n    bottom: 3px;\r\n    height: 14px;\r\n    -webkit-border-radius: 10px 10px 7px 7px;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 10px 10px 7px 7px;\r\n    -moz-background-clip: padding;\r\n    border-radius: 10px 10px 7px 7px;\r\n    background-clip: padding-box;\r\n  }\r\n  24% {\r\n    bottom: 3px;\r\n    height: 14px;\r\n    -webkit-border-radius: 10px 10px 7px 7px;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 10px 10px 7px 7px;\r\n    -moz-background-clip: padding;\r\n    border-radius: 10px 10px 7px 7px;\r\n    background-clip: padding-box;\r\n  }\r\n  33% {\r\n    bottom: 8px;\r\n    height: 12px;\r\n    -webkit-border-radius: 7px 7px 4px 4px;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 7px 7px 4px 4px;\r\n    -moz-background-clip: padding;\r\n    border-radius: 7px 7px 4px 4px;\r\n    background-clip: padding-box;\r\n  }\r\n  39% {\r\n    bottom: 8px;\r\n    height: 12px;\r\n    -webkit-border-radius: 7px 7px 4px 4px;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 7px 7px 4px 4px;\r\n    -moz-background-clip: padding;\r\n    border-radius: 7px 7px 4px 4px;\r\n    background-clip: padding-box;\r\n  }\r\n  45% {\r\n    bottom: 3px;\r\n    height: 14px;\r\n    -webkit-border-radius: 10px 10px 7px 7px;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 10px 10px 7px 7px;\r\n    -moz-background-clip: padding;\r\n    border-radius: 10px 10px 7px 7px;\r\n    background-clip: padding-box;\r\n  }\r\n  100% {\r\n    bottom: 3px;\r\n    height: 14px;\r\n    -webkit-border-radius: 10px 10px 7px 7px;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 10px 10px 7px 7px;\r\n    -moz-background-clip: padding;\r\n    border-radius: 10px 10px 7px 7px;\r\n    background-clip: padding-box;\r\n  }\r\n}\r\n\r\n\r\n@keyframes finger-2-animation-i {\r\n  0% {\r\n    bottom: 3px;\r\n    height: 14px;\r\n    -webkit-border-radius: 10px 10px 7px 7px;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 10px 10px 7px 7px;\r\n    -moz-background-clip: padding;\r\n    border-radius: 10px 10px 7px 7px;\r\n    background-clip: padding-box;\r\n  }\r\n  24% {\r\n    bottom: 3px;\r\n    height: 14px;\r\n    -webkit-border-radius: 10px 10px 7px 7px;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 10px 10px 7px 7px;\r\n    -moz-background-clip: padding;\r\n    border-radius: 10px 10px 7px 7px;\r\n    background-clip: padding-box;\r\n  }\r\n  33% {\r\n    bottom: 8px;\r\n    height: 12px;\r\n    -webkit-border-radius: 7px 7px 4px 4px;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 7px 7px 4px 4px;\r\n    -moz-background-clip: padding;\r\n    border-radius: 7px 7px 4px 4px;\r\n    background-clip: padding-box;\r\n  }\r\n  39% {\r\n    bottom: 8px;\r\n    height: 12px;\r\n    -webkit-border-radius: 7px 7px 4px 4px;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 7px 7px 4px 4px;\r\n    -moz-background-clip: padding;\r\n    border-radius: 7px 7px 4px 4px;\r\n    background-clip: padding-box;\r\n  }\r\n  45% {\r\n    bottom: 3px;\r\n    height: 14px;\r\n    -webkit-border-radius: 10px 10px 7px 7px;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 10px 10px 7px 7px;\r\n    -moz-background-clip: padding;\r\n    border-radius: 10px 10px 7px 7px;\r\n    background-clip: padding-box;\r\n  }\r\n  100% {\r\n    bottom: 3px;\r\n    height: 14px;\r\n    -webkit-border-radius: 10px 10px 7px 7px;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 10px 10px 7px 7px;\r\n    -moz-background-clip: padding;\r\n    border-radius: 10px 10px 7px 7px;\r\n    background-clip: padding-box;\r\n  }\r\n}\r\n\r\n\r\n@-webkit-keyframes finger-3-animation {\r\n  0% {\r\n    padding: 0 0 0 0;\r\n  }\r\n  28% {\r\n    padding: 0 0 0 0;\r\n  }\r\n  37% {\r\n    padding: 0 0 12px 0;\r\n  }\r\n  43% {\r\n    padding: 0 0 12px 0;\r\n  }\r\n  49% {\r\n    padding: 0 0 0 0;\r\n  }\r\n  100% {\r\n    padding: 0 0 0 0;\r\n  }\r\n}\r\n\r\n\r\n@keyframes finger-3-animation {\r\n  0% {\r\n    padding: 0 0 0 0;\r\n  }\r\n  28% {\r\n    padding: 0 0 0 0;\r\n  }\r\n  37% {\r\n    padding: 0 0 12px 0;\r\n  }\r\n  43% {\r\n    padding: 0 0 12px 0;\r\n  }\r\n  49% {\r\n    padding: 0 0 0 0;\r\n  }\r\n  100% {\r\n    padding: 0 0 0 0;\r\n  }\r\n}\r\n\r\n\r\n@-webkit-keyframes finger-3-animation-span {\r\n  0% {\r\n    top: 0;\r\n  }\r\n  28% {\r\n    top: 0;\r\n  }\r\n  37% {\r\n    top: -7px;\r\n  }\r\n  43% {\r\n    top: -7px;\r\n  }\r\n  49% {\r\n    top: 0;\r\n  }\r\n  100% {\r\n    top: 0;\r\n  }\r\n}\r\n\r\n\r\n@keyframes finger-3-animation-span {\r\n  0% {\r\n    top: 0;\r\n  }\r\n  28% {\r\n    top: 0;\r\n  }\r\n  37% {\r\n    top: -7px;\r\n  }\r\n  43% {\r\n    top: -7px;\r\n  }\r\n  49% {\r\n    top: 0;\r\n  }\r\n  100% {\r\n    top: 0;\r\n  }\r\n}\r\n\r\n\r\n@-webkit-keyframes finger-3-animation-i {\r\n  0% {\r\n    bottom: 3px;\r\n    height: 14px;\r\n    -webkit-border-radius: 10px 10px 7px 7px;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 10px 10px 7px 7px;\r\n    -moz-background-clip: padding;\r\n    border-radius: 10px 10px 7px 7px;\r\n    background-clip: padding-box;\r\n  }\r\n  28% {\r\n    bottom: 3px;\r\n    height: 14px;\r\n    -webkit-border-radius: 10px 10px 7px 7px;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 10px 10px 7px 7px;\r\n    -moz-background-clip: padding;\r\n    border-radius: 10px 10px 7px 7px;\r\n    background-clip: padding-box;\r\n  }\r\n  37% {\r\n    bottom: 8px;\r\n    height: 12px;\r\n    -webkit-border-radius: 7px 7px 4px 4px;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 7px 7px 4px 4px;\r\n    -moz-background-clip: padding;\r\n    border-radius: 7px 7px 4px 4px;\r\n    background-clip: padding-box;\r\n  }\r\n  43% {\r\n    bottom: 8px;\r\n    height: 12px;\r\n    -webkit-border-radius: 7px 7px 4px 4px;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 7px 7px 4px 4px;\r\n    -moz-background-clip: padding;\r\n    border-radius: 7px 7px 4px 4px;\r\n    background-clip: padding-box;\r\n  }\r\n  49% {\r\n    bottom: 3px;\r\n    height: 14px;\r\n    -webkit-border-radius: 10px 10px 7px 7px;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 10px 10px 7px 7px;\r\n    -moz-background-clip: padding;\r\n    border-radius: 10px 10px 7px 7px;\r\n    background-clip: padding-box;\r\n  }\r\n  100% {\r\n    bottom: 3px;\r\n    height: 14px;\r\n    -webkit-border-radius: 10px 10px 7px 7px;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 10px 10px 7px 7px;\r\n    -moz-background-clip: padding;\r\n    border-radius: 10px 10px 7px 7px;\r\n    background-clip: padding-box;\r\n  }\r\n}\r\n\r\n\r\n@keyframes finger-3-animation-i {\r\n  0% {\r\n    bottom: 3px;\r\n    height: 14px;\r\n    -webkit-border-radius: 10px 10px 7px 7px;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 10px 10px 7px 7px;\r\n    -moz-background-clip: padding;\r\n    border-radius: 10px 10px 7px 7px;\r\n    background-clip: padding-box;\r\n  }\r\n  28% {\r\n    bottom: 3px;\r\n    height: 14px;\r\n    -webkit-border-radius: 10px 10px 7px 7px;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 10px 10px 7px 7px;\r\n    -moz-background-clip: padding;\r\n    border-radius: 10px 10px 7px 7px;\r\n    background-clip: padding-box;\r\n  }\r\n  37% {\r\n    bottom: 8px;\r\n    height: 12px;\r\n    -webkit-border-radius: 7px 7px 4px 4px;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 7px 7px 4px 4px;\r\n    -moz-background-clip: padding;\r\n    border-radius: 7px 7px 4px 4px;\r\n    background-clip: padding-box;\r\n  }\r\n  43% {\r\n    bottom: 8px;\r\n    height: 12px;\r\n    -webkit-border-radius: 7px 7px 4px 4px;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 7px 7px 4px 4px;\r\n    -moz-background-clip: padding;\r\n    border-radius: 7px 7px 4px 4px;\r\n    background-clip: padding-box;\r\n  }\r\n  49% {\r\n    bottom: 3px;\r\n    height: 14px;\r\n    -webkit-border-radius: 10px 10px 7px 7px;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 10px 10px 7px 7px;\r\n    -moz-background-clip: padding;\r\n    border-radius: 10px 10px 7px 7px;\r\n    background-clip: padding-box;\r\n  }\r\n  100% {\r\n    bottom: 3px;\r\n    height: 14px;\r\n    -webkit-border-radius: 10px 10px 7px 7px;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 10px 10px 7px 7px;\r\n    -moz-background-clip: padding;\r\n    border-radius: 10px 10px 7px 7px;\r\n    background-clip: padding-box;\r\n  }\r\n}\r\n\r\n\r\n@-webkit-keyframes finger-4-animation {\r\n  0% {\r\n    padding: 8px 0 3px 0;\r\n  }\r\n  32% {\r\n    padding: 8px 0 3px 0;\r\n  }\r\n  41% {\r\n    padding: 4px 0 20px 0;\r\n  }\r\n  47% {\r\n    padding: 4px 0 20px 0;\r\n  }\r\n  53% {\r\n    padding: 8px 0 3px 0;\r\n  }\r\n  100% {\r\n    padding: 8px 0 3px 0;\r\n  }\r\n}\r\n\r\n\r\n@keyframes finger-4-animation {\r\n  0% {\r\n    padding: 8px 0 3px 0;\r\n  }\r\n  32% {\r\n    padding: 8px 0 3px 0;\r\n  }\r\n  41% {\r\n    padding: 4px 0 20px 0;\r\n  }\r\n  47% {\r\n    padding: 4px 0 20px 0;\r\n  }\r\n  53% {\r\n    padding: 8px 0 3px 0;\r\n  }\r\n  100% {\r\n    padding: 8px 0 3px 0;\r\n  }\r\n}\r\n\r\n\r\n@-webkit-keyframes finger-4-animation-span {\r\n  0% {\r\n    top: 0;\r\n  }\r\n  32% {\r\n    top: 0;\r\n  }\r\n  41% {\r\n    top: -7px;\r\n  }\r\n  47% {\r\n    top: -7px;\r\n  }\r\n  53% {\r\n    top: 0;\r\n  }\r\n  100% {\r\n    top: 0;\r\n  }\r\n}\r\n\r\n\r\n@keyframes finger-4-animation-span {\r\n  0% {\r\n    top: 0;\r\n  }\r\n  32% {\r\n    top: 0;\r\n  }\r\n  41% {\r\n    top: -7px;\r\n  }\r\n  47% {\r\n    top: -7px;\r\n  }\r\n  53% {\r\n    top: 0;\r\n  }\r\n  100% {\r\n    top: 0;\r\n  }\r\n}\r\n\r\n\r\n@-webkit-keyframes finger-4-animation-i {\r\n  0% {\r\n    bottom: 3px;\r\n    height: 14px;\r\n    -webkit-border-radius: 10px 10px 7px 7px;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 10px 10px 7px 7px;\r\n    -moz-background-clip: padding;\r\n    border-radius: 10px 10px 7px 7px;\r\n    background-clip: padding-box;\r\n  }\r\n  32% {\r\n    bottom: 3px;\r\n    height: 14px;\r\n    -webkit-border-radius: 10px 10px 7px 7px;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 10px 10px 7px 7px;\r\n    -moz-background-clip: padding;\r\n    border-radius: 10px 10px 7px 7px;\r\n    background-clip: padding-box;\r\n  }\r\n  41% {\r\n    bottom: 8px;\r\n    height: 12px;\r\n    -webkit-border-radius: 7px 7px 4px 4px;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 7px 7px 4px 4px;\r\n    -moz-background-clip: padding;\r\n    border-radius: 7px 7px 4px 4px;\r\n    background-clip: padding-box;\r\n  }\r\n  47% {\r\n    bottom: 8px;\r\n    height: 12px;\r\n    -webkit-border-radius: 7px 7px 4px 4px;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 7px 7px 4px 4px;\r\n    -moz-background-clip: padding;\r\n    border-radius: 7px 7px 4px 4px;\r\n    background-clip: padding-box;\r\n  }\r\n  53% {\r\n    bottom: 3px;\r\n    height: 14px;\r\n    -webkit-border-radius: 10px 10px 7px 7px;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 10px 10px 7px 7px;\r\n    -moz-background-clip: padding;\r\n    border-radius: 10px 10px 7px 7px;\r\n    background-clip: padding-box;\r\n  }\r\n  100% {\r\n    bottom: 3px;\r\n    height: 14px;\r\n    -webkit-border-radius: 10px 10px 7px 7px;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 10px 10px 7px 7px;\r\n    -moz-background-clip: padding;\r\n    border-radius: 10px 10px 7px 7px;\r\n    background-clip: padding-box;\r\n  }\r\n}\r\n\r\n\r\n@keyframes finger-4-animation-i {\r\n  0% {\r\n    bottom: 3px;\r\n    height: 14px;\r\n    -webkit-border-radius: 10px 10px 7px 7px;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 10px 10px 7px 7px;\r\n    -moz-background-clip: padding;\r\n    border-radius: 10px 10px 7px 7px;\r\n    background-clip: padding-box;\r\n  }\r\n  32% {\r\n    bottom: 3px;\r\n    height: 14px;\r\n    -webkit-border-radius: 10px 10px 7px 7px;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 10px 10px 7px 7px;\r\n    -moz-background-clip: padding;\r\n    border-radius: 10px 10px 7px 7px;\r\n    background-clip: padding-box;\r\n  }\r\n  41% {\r\n    bottom: 8px;\r\n    height: 12px;\r\n    -webkit-border-radius: 7px 7px 4px 4px;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 7px 7px 4px 4px;\r\n    -moz-background-clip: padding;\r\n    border-radius: 7px 7px 4px 4px;\r\n    background-clip: padding-box;\r\n  }\r\n  47% {\r\n    bottom: 8px;\r\n    height: 12px;\r\n    -webkit-border-radius: 7px 7px 4px 4px;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 7px 7px 4px 4px;\r\n    -moz-background-clip: padding;\r\n    border-radius: 7px 7px 4px 4px;\r\n    background-clip: padding-box;\r\n  }\r\n  53% {\r\n    bottom: 3px;\r\n    height: 14px;\r\n    -webkit-border-radius: 10px 10px 7px 7px;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 10px 10px 7px 7px;\r\n    -moz-background-clip: padding;\r\n    border-radius: 10px 10px 7px 7px;\r\n    background-clip: padding-box;\r\n  }\r\n  100% {\r\n    bottom: 3px;\r\n    height: 14px;\r\n    -webkit-border-radius: 10px 10px 7px 7px;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 10px 10px 7px 7px;\r\n    -moz-background-clip: padding;\r\n    border-radius: 10px 10px 7px 7px;\r\n    background-clip: padding-box;\r\n  }\r\n}\r\n\r\n\r\n@-webkit-keyframes finger-5-animation {\r\n  0% {\r\n    top: 32px;\r\n    right: 0;\r\n    -webkit-border-radius: 0 5px 14px 0;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 0 5px 14px 0;\r\n    -moz-background-clip: padding;\r\n    border-radius: 0 5px 14px 0;\r\n    background-clip: padding-box;\r\n    transform: rotate(0deg);\r\n  }\r\n  34% {\r\n    top: 32px;\r\n    right: 0;\r\n    -webkit-border-radius: 0 5px 14px 0;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 0 5px 14px 0;\r\n    -moz-background-clip: padding;\r\n    border-radius: 0 5px 14px 0;\r\n    background-clip: padding-box;\r\n    transform: rotate(0deg);\r\n  }\r\n  43% {\r\n    top: 20px;\r\n    right: 2px;\r\n    -webkit-border-radius: 0 8px 20px 0;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 0 8px 20px 0;\r\n    -moz-background-clip: padding;\r\n    border-radius: 0 8px 20px 0;\r\n    background-clip: padding-box;\r\n    transform: rotate(-12deg);\r\n  }\r\n  50% {\r\n    top: 20px;\r\n    right: 2px;\r\n    -webkit-border-radius: 0 8px 20px 0;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 0 8px 20px 0;\r\n    -moz-background-clip: padding;\r\n    border-radius: 0 8px 20px 0;\r\n    background-clip: padding-box;\r\n    transform: rotate(-12deg);\r\n  }\r\n  60% {\r\n    top: 32px;\r\n    right: 0;\r\n    -webkit-border-radius: 0 5px 14px 0;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 0 5px 14px 0;\r\n    -moz-background-clip: padding;\r\n    border-radius: 0 5px 14px 0;\r\n    background-clip: padding-box;\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    top: 32px;\r\n    right: 0;\r\n    -webkit-border-radius: 0 5px 14px 0;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 0 5px 14px 0;\r\n    -moz-background-clip: padding;\r\n    border-radius: 0 5px 14px 0;\r\n    background-clip: padding-box;\r\n    transform: rotate(0deg);\r\n  }\r\n}\r\n\r\n\r\n@keyframes finger-5-animation {\r\n  0% {\r\n    top: 32px;\r\n    right: 0;\r\n    -webkit-border-radius: 0 5px 14px 0;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 0 5px 14px 0;\r\n    -moz-background-clip: padding;\r\n    border-radius: 0 5px 14px 0;\r\n    background-clip: padding-box;\r\n    transform: rotate(0deg);\r\n  }\r\n  34% {\r\n    top: 32px;\r\n    right: 0;\r\n    -webkit-border-radius: 0 5px 14px 0;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 0 5px 14px 0;\r\n    -moz-background-clip: padding;\r\n    border-radius: 0 5px 14px 0;\r\n    background-clip: padding-box;\r\n    transform: rotate(0deg);\r\n  }\r\n  43% {\r\n    top: 20px;\r\n    right: 2px;\r\n    -webkit-border-radius: 0 8px 20px 0;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 0 8px 20px 0;\r\n    -moz-background-clip: padding;\r\n    border-radius: 0 8px 20px 0;\r\n    background-clip: padding-box;\r\n    transform: rotate(-12deg);\r\n  }\r\n  50% {\r\n    top: 20px;\r\n    right: 2px;\r\n    -webkit-border-radius: 0 8px 20px 0;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 0 8px 20px 0;\r\n    -moz-background-clip: padding;\r\n    border-radius: 0 8px 20px 0;\r\n    background-clip: padding-box;\r\n    transform: rotate(-12deg);\r\n  }\r\n  60% {\r\n    top: 32px;\r\n    right: 0;\r\n    -webkit-border-radius: 0 5px 14px 0;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 0 5px 14px 0;\r\n    -moz-background-clip: padding;\r\n    border-radius: 0 5px 14px 0;\r\n    background-clip: padding-box;\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    top: 32px;\r\n    right: 0;\r\n    -webkit-border-radius: 0 5px 14px 0;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 0 5px 14px 0;\r\n    -moz-background-clip: padding;\r\n    border-radius: 0 5px 14px 0;\r\n    background-clip: padding-box;\r\n    transform: rotate(0deg);\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFdBQVc7RUFDWCxhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7OztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixTQUFTO0VBQ1QsUUFBUTtFQUNSLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osWUFBWTtHQUNaLE9BQVE7QUFDVjs7O0FBQ0E7O0VBRUUsY0FBYztFQUNkLFdBQVc7QUFDYjs7O0FBQ0E7RUFDRSxXQUFXO0FBQ2I7OztBQUNBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtBQUNkOzs7QUFDQTtFQUNFLDBEQUEwRDtFQUMxRCxrREFBa0Q7QUFDcEQ7OztBQUNBO0VBQ0UsK0RBQStEO0VBQy9ELHVEQUF1RDtBQUN6RDs7O0FBQ0E7RUFDRSw0REFBNEQ7RUFDNUQsb0RBQW9EO0FBQ3REOzs7QUFDQTtFQUNFLDBEQUEwRDtFQUMxRCxrREFBa0Q7QUFDcEQ7OztBQUNBO0VBQ0UsK0RBQStEO0VBQy9ELHVEQUF1RDtBQUN6RDs7O0FBQ0E7RUFDRSw0REFBNEQ7RUFDNUQsb0RBQW9EO0FBQ3REOzs7QUFDQTtFQUNFLDBEQUEwRDtFQUMxRCxrREFBa0Q7QUFDcEQ7OztBQUNBO0VBQ0UsK0RBQStEO0VBQy9ELHVEQUF1RDtBQUN6RDs7O0FBQ0E7RUFDRSw0REFBNEQ7RUFDNUQsb0RBQW9EO0FBQ3REOzs7QUFDQTtFQUNFLDBEQUEwRDtFQUMxRCxrREFBa0Q7QUFDcEQ7OztBQUNBO0VBQ0UsK0RBQStEO0VBQy9ELHVEQUF1RDtBQUN6RDs7O0FBQ0E7RUFDRSw0REFBNEQ7RUFDNUQsb0RBQW9EO0FBQ3REOzs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHNDQUFzQztFQUN0QyxvQ0FBb0M7RUFDcEMsbUNBQW1DO0VBQ25DLDZCQUE2QjtFQUM3Qiw4QkFBOEI7RUFDOUIsNEJBQTRCO0VBQzVCLGdCQUFnQjtBQUNsQjs7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7O0FBQ0E7O0VBRUUsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOzs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osd0NBQXdDO0VBQ3hDLG9DQUFvQztFQUNwQyxxQ0FBcUM7RUFDckMsNkJBQTZCO0VBQzdCLGdDQUFnQztFQUNoQyw0QkFBNEI7RUFDNUIsbUJBQW1CO0FBQ3JCOzs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7OztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixtQ0FBbUM7RUFDbkMsb0NBQW9DO0VBQ3BDLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0IsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixnQkFBZ0I7RUFDaEIsd0RBQXdEO0VBQ3hELGdEQUFnRDtBQUNsRDs7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFNBQVM7RUFDVCxXQUFXO0VBQ1gsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7OztBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLG9DQUFvQztFQUNwQyxpQ0FBaUM7RUFDakMsNkJBQTZCO0VBQzdCLDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIsbUJBQW1CO0FBQ3JCOzs7QUFDQTtFQUNFO0lBQ0UscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLHFCQUFxQjtFQUN2QjtBQUNGOzs7QUFDQTtFQUNFO0lBQ0UscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLHFCQUFxQjtFQUN2QjtBQUNGOzs7QUFDQTtFQUNFO0lBQ0UsTUFBTTtFQUNSO0VBQ0E7SUFDRSxNQUFNO0VBQ1I7RUFDQTtJQUNFLFNBQVM7RUFDWDtFQUNBO0lBQ0UsU0FBUztFQUNYO0VBQ0E7SUFDRSxNQUFNO0VBQ1I7RUFDQTtJQUNFLE1BQU07RUFDUjtBQUNGOzs7QUFDQTtFQUNFO0lBQ0UsTUFBTTtFQUNSO0VBQ0E7SUFDRSxNQUFNO0VBQ1I7RUFDQTtJQUNFLFNBQVM7RUFDWDtFQUNBO0lBQ0UsU0FBUztFQUNYO0VBQ0E7SUFDRSxNQUFNO0VBQ1I7RUFDQTtJQUNFLE1BQU07RUFDUjtBQUNGOzs7QUFDQTtFQUNFO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWix3Q0FBd0M7SUFDeEMsb0NBQW9DO0lBQ3BDLHFDQUFxQztJQUNyQyw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWix3Q0FBd0M7SUFDeEMsb0NBQW9DO0lBQ3BDLHFDQUFxQztJQUNyQyw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixzQ0FBc0M7SUFDdEMsb0NBQW9DO0lBQ3BDLG1DQUFtQztJQUNuQyw2QkFBNkI7SUFDN0IsOEJBQThCO0lBQzlCLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixzQ0FBc0M7SUFDdEMsb0NBQW9DO0lBQ3BDLG1DQUFtQztJQUNuQyw2QkFBNkI7SUFDN0IsOEJBQThCO0lBQzlCLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWix3Q0FBd0M7SUFDeEMsb0NBQW9DO0lBQ3BDLHFDQUFxQztJQUNyQyw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWix3Q0FBd0M7SUFDeEMsb0NBQW9DO0lBQ3BDLHFDQUFxQztJQUNyQyw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLDRCQUE0QjtFQUM5QjtBQUNGOzs7QUFDQTtFQUNFO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWix3Q0FBd0M7SUFDeEMsb0NBQW9DO0lBQ3BDLHFDQUFxQztJQUNyQyw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWix3Q0FBd0M7SUFDeEMsb0NBQW9DO0lBQ3BDLHFDQUFxQztJQUNyQyw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixzQ0FBc0M7SUFDdEMsb0NBQW9DO0lBQ3BDLG1DQUFtQztJQUNuQyw2QkFBNkI7SUFDN0IsOEJBQThCO0lBQzlCLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixzQ0FBc0M7SUFDdEMsb0NBQW9DO0lBQ3BDLG1DQUFtQztJQUNuQyw2QkFBNkI7SUFDN0IsOEJBQThCO0lBQzlCLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWix3Q0FBd0M7SUFDeEMsb0NBQW9DO0lBQ3BDLHFDQUFxQztJQUNyQyw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWix3Q0FBd0M7SUFDeEMsb0NBQW9DO0lBQ3BDLHFDQUFxQztJQUNyQyw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLDRCQUE0QjtFQUM5QjtBQUNGOzs7QUFDQTtFQUNFO0lBQ0Usb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLG9CQUFvQjtFQUN0QjtBQUNGOzs7QUFDQTtFQUNFO0lBQ0Usb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLG9CQUFvQjtFQUN0QjtBQUNGOzs7QUFDQTtFQUNFO0lBQ0UsTUFBTTtFQUNSO0VBQ0E7SUFDRSxNQUFNO0VBQ1I7RUFDQTtJQUNFLFNBQVM7RUFDWDtFQUNBO0lBQ0UsU0FBUztFQUNYO0VBQ0E7SUFDRSxNQUFNO0VBQ1I7RUFDQTtJQUNFLE1BQU07RUFDUjtBQUNGOzs7QUFDQTtFQUNFO0lBQ0UsTUFBTTtFQUNSO0VBQ0E7SUFDRSxNQUFNO0VBQ1I7RUFDQTtJQUNFLFNBQVM7RUFDWDtFQUNBO0lBQ0UsU0FBUztFQUNYO0VBQ0E7SUFDRSxNQUFNO0VBQ1I7RUFDQTtJQUNFLE1BQU07RUFDUjtBQUNGOzs7QUFDQTtFQUNFO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWix3Q0FBd0M7SUFDeEMsb0NBQW9DO0lBQ3BDLHFDQUFxQztJQUNyQyw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWix3Q0FBd0M7SUFDeEMsb0NBQW9DO0lBQ3BDLHFDQUFxQztJQUNyQyw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixzQ0FBc0M7SUFDdEMsb0NBQW9DO0lBQ3BDLG1DQUFtQztJQUNuQyw2QkFBNkI7SUFDN0IsOEJBQThCO0lBQzlCLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixzQ0FBc0M7SUFDdEMsb0NBQW9DO0lBQ3BDLG1DQUFtQztJQUNuQyw2QkFBNkI7SUFDN0IsOEJBQThCO0lBQzlCLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWix3Q0FBd0M7SUFDeEMsb0NBQW9DO0lBQ3BDLHFDQUFxQztJQUNyQyw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWix3Q0FBd0M7SUFDeEMsb0NBQW9DO0lBQ3BDLHFDQUFxQztJQUNyQyw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLDRCQUE0QjtFQUM5QjtBQUNGOzs7QUFDQTtFQUNFO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWix3Q0FBd0M7SUFDeEMsb0NBQW9DO0lBQ3BDLHFDQUFxQztJQUNyQyw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWix3Q0FBd0M7SUFDeEMsb0NBQW9DO0lBQ3BDLHFDQUFxQztJQUNyQyw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixzQ0FBc0M7SUFDdEMsb0NBQW9DO0lBQ3BDLG1DQUFtQztJQUNuQyw2QkFBNkI7SUFDN0IsOEJBQThCO0lBQzlCLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixzQ0FBc0M7SUFDdEMsb0NBQW9DO0lBQ3BDLG1DQUFtQztJQUNuQyw2QkFBNkI7SUFDN0IsOEJBQThCO0lBQzlCLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWix3Q0FBd0M7SUFDeEMsb0NBQW9DO0lBQ3BDLHFDQUFxQztJQUNyQyw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWix3Q0FBd0M7SUFDeEMsb0NBQW9DO0lBQ3BDLHFDQUFxQztJQUNyQyw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLDRCQUE0QjtFQUM5QjtBQUNGOzs7QUFDQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGOzs7QUFDQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGOzs7QUFDQTtFQUNFO0lBQ0UsTUFBTTtFQUNSO0VBQ0E7SUFDRSxNQUFNO0VBQ1I7RUFDQTtJQUNFLFNBQVM7RUFDWDtFQUNBO0lBQ0UsU0FBUztFQUNYO0VBQ0E7SUFDRSxNQUFNO0VBQ1I7RUFDQTtJQUNFLE1BQU07RUFDUjtBQUNGOzs7QUFDQTtFQUNFO0lBQ0UsTUFBTTtFQUNSO0VBQ0E7SUFDRSxNQUFNO0VBQ1I7RUFDQTtJQUNFLFNBQVM7RUFDWDtFQUNBO0lBQ0UsU0FBUztFQUNYO0VBQ0E7SUFDRSxNQUFNO0VBQ1I7RUFDQTtJQUNFLE1BQU07RUFDUjtBQUNGOzs7QUFDQTtFQUNFO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWix3Q0FBd0M7SUFDeEMsb0NBQW9DO0lBQ3BDLHFDQUFxQztJQUNyQyw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWix3Q0FBd0M7SUFDeEMsb0NBQW9DO0lBQ3BDLHFDQUFxQztJQUNyQyw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixzQ0FBc0M7SUFDdEMsb0NBQW9DO0lBQ3BDLG1DQUFtQztJQUNuQyw2QkFBNkI7SUFDN0IsOEJBQThCO0lBQzlCLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixzQ0FBc0M7SUFDdEMsb0NBQW9DO0lBQ3BDLG1DQUFtQztJQUNuQyw2QkFBNkI7SUFDN0IsOEJBQThCO0lBQzlCLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWix3Q0FBd0M7SUFDeEMsb0NBQW9DO0lBQ3BDLHFDQUFxQztJQUNyQyw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWix3Q0FBd0M7SUFDeEMsb0NBQW9DO0lBQ3BDLHFDQUFxQztJQUNyQyw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLDRCQUE0QjtFQUM5QjtBQUNGOzs7QUFDQTtFQUNFO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWix3Q0FBd0M7SUFDeEMsb0NBQW9DO0lBQ3BDLHFDQUFxQztJQUNyQyw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWix3Q0FBd0M7SUFDeEMsb0NBQW9DO0lBQ3BDLHFDQUFxQztJQUNyQyw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixzQ0FBc0M7SUFDdEMsb0NBQW9DO0lBQ3BDLG1DQUFtQztJQUNuQyw2QkFBNkI7SUFDN0IsOEJBQThCO0lBQzlCLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixzQ0FBc0M7SUFDdEMsb0NBQW9DO0lBQ3BDLG1DQUFtQztJQUNuQyw2QkFBNkI7SUFDN0IsOEJBQThCO0lBQzlCLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWix3Q0FBd0M7SUFDeEMsb0NBQW9DO0lBQ3BDLHFDQUFxQztJQUNyQyw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWix3Q0FBd0M7SUFDeEMsb0NBQW9DO0lBQ3BDLHFDQUFxQztJQUNyQyw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLDRCQUE0QjtFQUM5QjtBQUNGOzs7QUFDQTtFQUNFO0lBQ0Usb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLG9CQUFvQjtFQUN0QjtBQUNGOzs7QUFDQTtFQUNFO0lBQ0Usb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLG9CQUFvQjtFQUN0QjtBQUNGOzs7QUFDQTtFQUNFO0lBQ0UsTUFBTTtFQUNSO0VBQ0E7SUFDRSxNQUFNO0VBQ1I7RUFDQTtJQUNFLFNBQVM7RUFDWDtFQUNBO0lBQ0UsU0FBUztFQUNYO0VBQ0E7SUFDRSxNQUFNO0VBQ1I7RUFDQTtJQUNFLE1BQU07RUFDUjtBQUNGOzs7QUFDQTtFQUNFO0lBQ0UsTUFBTTtFQUNSO0VBQ0E7SUFDRSxNQUFNO0VBQ1I7RUFDQTtJQUNFLFNBQVM7RUFDWDtFQUNBO0lBQ0UsU0FBUztFQUNYO0VBQ0E7SUFDRSxNQUFNO0VBQ1I7RUFDQTtJQUNFLE1BQU07RUFDUjtBQUNGOzs7QUFDQTtFQUNFO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWix3Q0FBd0M7SUFDeEMsb0NBQW9DO0lBQ3BDLHFDQUFxQztJQUNyQyw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWix3Q0FBd0M7SUFDeEMsb0NBQW9DO0lBQ3BDLHFDQUFxQztJQUNyQyw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixzQ0FBc0M7SUFDdEMsb0NBQW9DO0lBQ3BDLG1DQUFtQztJQUNuQyw2QkFBNkI7SUFDN0IsOEJBQThCO0lBQzlCLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixzQ0FBc0M7SUFDdEMsb0NBQW9DO0lBQ3BDLG1DQUFtQztJQUNuQyw2QkFBNkI7SUFDN0IsOEJBQThCO0lBQzlCLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWix3Q0FBd0M7SUFDeEMsb0NBQW9DO0lBQ3BDLHFDQUFxQztJQUNyQyw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWix3Q0FBd0M7SUFDeEMsb0NBQW9DO0lBQ3BDLHFDQUFxQztJQUNyQyw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLDRCQUE0QjtFQUM5QjtBQUNGOzs7QUFDQTtFQUNFO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWix3Q0FBd0M7SUFDeEMsb0NBQW9DO0lBQ3BDLHFDQUFxQztJQUNyQyw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWix3Q0FBd0M7SUFDeEMsb0NBQW9DO0lBQ3BDLHFDQUFxQztJQUNyQyw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixzQ0FBc0M7SUFDdEMsb0NBQW9DO0lBQ3BDLG1DQUFtQztJQUNuQyw2QkFBNkI7SUFDN0IsOEJBQThCO0lBQzlCLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixzQ0FBc0M7SUFDdEMsb0NBQW9DO0lBQ3BDLG1DQUFtQztJQUNuQyw2QkFBNkI7SUFDN0IsOEJBQThCO0lBQzlCLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWix3Q0FBd0M7SUFDeEMsb0NBQW9DO0lBQ3BDLHFDQUFxQztJQUNyQyw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWix3Q0FBd0M7SUFDeEMsb0NBQW9DO0lBQ3BDLHFDQUFxQztJQUNyQyw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLDRCQUE0QjtFQUM5QjtBQUNGOzs7QUFDQTtFQUNFO0lBQ0UsU0FBUztJQUNULFFBQVE7SUFDUixtQ0FBbUM7SUFDbkMsb0NBQW9DO0lBQ3BDLGdDQUFnQztJQUNoQyw2QkFBNkI7SUFDN0IsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUU1Qix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLFNBQVM7SUFDVCxRQUFRO0lBQ1IsbUNBQW1DO0lBQ25DLG9DQUFvQztJQUNwQyxnQ0FBZ0M7SUFDaEMsNkJBQTZCO0lBQzdCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFFNUIsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxTQUFTO0lBQ1QsVUFBVTtJQUNWLG1DQUFtQztJQUNuQyxvQ0FBb0M7SUFDcEMsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3QiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBRTVCLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsU0FBUztJQUNULFVBQVU7SUFDVixtQ0FBbUM7SUFDbkMsb0NBQW9DO0lBQ3BDLGdDQUFnQztJQUNoQyw2QkFBNkI7SUFDN0IsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUU1Qix5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLFNBQVM7SUFDVCxRQUFRO0lBQ1IsbUNBQW1DO0lBQ25DLG9DQUFvQztJQUNwQyxnQ0FBZ0M7SUFDaEMsNkJBQTZCO0lBQzdCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFFNUIsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxTQUFTO0lBQ1QsUUFBUTtJQUNSLG1DQUFtQztJQUNuQyxvQ0FBb0M7SUFDcEMsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3QiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBRTVCLHVCQUF1QjtFQUN6QjtBQUNGOzs7QUFDQTtFQUNFO0lBQ0UsU0FBUztJQUNULFFBQVE7SUFDUixtQ0FBbUM7SUFDbkMsb0NBQW9DO0lBQ3BDLGdDQUFnQztJQUNoQyw2QkFBNkI7SUFDN0IsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUU1Qix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLFNBQVM7SUFDVCxRQUFRO0lBQ1IsbUNBQW1DO0lBQ25DLG9DQUFvQztJQUNwQyxnQ0FBZ0M7SUFDaEMsNkJBQTZCO0lBQzdCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFFNUIsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxTQUFTO0lBQ1QsVUFBVTtJQUNWLG1DQUFtQztJQUNuQyxvQ0FBb0M7SUFDcEMsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3QiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBRTVCLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsU0FBUztJQUNULFVBQVU7SUFDVixtQ0FBbUM7SUFDbkMsb0NBQW9DO0lBQ3BDLGdDQUFnQztJQUNoQyw2QkFBNkI7SUFDN0IsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUU1Qix5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLFNBQVM7SUFDVCxRQUFRO0lBQ1IsbUNBQW1DO0lBQ25DLG9DQUFvQztJQUNwQyxnQ0FBZ0M7SUFDaEMsNkJBQTZCO0lBQzdCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFFNUIsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxTQUFTO0lBQ1QsUUFBUTtJQUNSLG1DQUFtQztJQUNuQyxvQ0FBb0M7SUFDcEMsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3QiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBRTVCLHVCQUF1QjtFQUN6QjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGVyLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogOTk5OTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2ViMTZhO1xyXG59XHJcblxyXG5cclxuLmxvYWRpbmcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2ViMTZhO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0b3A6IDUwJTtcclxuICBtYXJnaW46IC0zNXB4IDAgMCAtNTZweDtcclxuICB3aWR0aDogMTEycHg7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gICp6b29tOiAxO1xyXG59XHJcbi5sb2FkaW5nOmJlZm9yZSxcclxuLmxvYWRpbmc6YWZ0ZXIge1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbn1cclxuLmxvYWRpbmc6YWZ0ZXIge1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcbi5sb2FkaW5nIC5maW5nZXIge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbjogMCAycHggMCAwO1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4ubG9hZGluZyAuZmluZ2VyLTEge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmaW5nZXItMS1hbmltYXRpb24gMnMgaW5maW5pdGUgZWFzZS1vdXQ7XHJcbiAgYW5pbWF0aW9uOiBmaW5nZXItMS1hbmltYXRpb24gMnMgaW5maW5pdGUgZWFzZS1vdXQ7XHJcbn1cclxuLmxvYWRpbmcgLmZpbmdlci0xIHNwYW4ge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmaW5nZXItMS1hbmltYXRpb24tc3BhbiAycyBpbmZpbml0ZSBlYXNlLW91dDtcclxuICBhbmltYXRpb246IGZpbmdlci0xLWFuaW1hdGlvbi1zcGFuIDJzIGluZmluaXRlIGVhc2Utb3V0O1xyXG59XHJcbi5sb2FkaW5nIC5maW5nZXItMSBpIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogZmluZ2VyLTEtYW5pbWF0aW9uLWkgMnMgaW5maW5pdGUgZWFzZS1vdXQ7XHJcbiAgYW5pbWF0aW9uOiBmaW5nZXItMS1hbmltYXRpb24taSAycyBpbmZpbml0ZSBlYXNlLW91dDtcclxufVxyXG4ubG9hZGluZyAuZmluZ2VyLTIge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmaW5nZXItMi1hbmltYXRpb24gMnMgaW5maW5pdGUgZWFzZS1vdXQ7XHJcbiAgYW5pbWF0aW9uOiBmaW5nZXItMi1hbmltYXRpb24gMnMgaW5maW5pdGUgZWFzZS1vdXQ7XHJcbn1cclxuLmxvYWRpbmcgLmZpbmdlci0yIHNwYW4ge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmaW5nZXItMi1hbmltYXRpb24tc3BhbiAycyBpbmZpbml0ZSBlYXNlLW91dDtcclxuICBhbmltYXRpb246IGZpbmdlci0yLWFuaW1hdGlvbi1zcGFuIDJzIGluZmluaXRlIGVhc2Utb3V0O1xyXG59XHJcbi5sb2FkaW5nIC5maW5nZXItMiBpIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogZmluZ2VyLTItYW5pbWF0aW9uLWkgMnMgaW5maW5pdGUgZWFzZS1vdXQ7XHJcbiAgYW5pbWF0aW9uOiBmaW5nZXItMi1hbmltYXRpb24taSAycyBpbmZpbml0ZSBlYXNlLW91dDtcclxufVxyXG4ubG9hZGluZyAuZmluZ2VyLTMge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmaW5nZXItMy1hbmltYXRpb24gMnMgaW5maW5pdGUgZWFzZS1vdXQ7XHJcbiAgYW5pbWF0aW9uOiBmaW5nZXItMy1hbmltYXRpb24gMnMgaW5maW5pdGUgZWFzZS1vdXQ7XHJcbn1cclxuLmxvYWRpbmcgLmZpbmdlci0zIHNwYW4ge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmaW5nZXItMy1hbmltYXRpb24tc3BhbiAycyBpbmZpbml0ZSBlYXNlLW91dDtcclxuICBhbmltYXRpb246IGZpbmdlci0zLWFuaW1hdGlvbi1zcGFuIDJzIGluZmluaXRlIGVhc2Utb3V0O1xyXG59XHJcbi5sb2FkaW5nIC5maW5nZXItMyBpIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogZmluZ2VyLTMtYW5pbWF0aW9uLWkgMnMgaW5maW5pdGUgZWFzZS1vdXQ7XHJcbiAgYW5pbWF0aW9uOiBmaW5nZXItMy1hbmltYXRpb24taSAycyBpbmZpbml0ZSBlYXNlLW91dDtcclxufVxyXG4ubG9hZGluZyAuZmluZ2VyLTQge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmaW5nZXItNC1hbmltYXRpb24gMnMgaW5maW5pdGUgZWFzZS1vdXQ7XHJcbiAgYW5pbWF0aW9uOiBmaW5nZXItNC1hbmltYXRpb24gMnMgaW5maW5pdGUgZWFzZS1vdXQ7XHJcbn1cclxuLmxvYWRpbmcgLmZpbmdlci00IHNwYW4ge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmaW5nZXItNC1hbmltYXRpb24tc3BhbiAycyBpbmZpbml0ZSBlYXNlLW91dDtcclxuICBhbmltYXRpb246IGZpbmdlci00LWFuaW1hdGlvbi1zcGFuIDJzIGluZmluaXRlIGVhc2Utb3V0O1xyXG59XHJcbi5sb2FkaW5nIC5maW5nZXItNCBpIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogZmluZ2VyLTQtYW5pbWF0aW9uLWkgMnMgaW5maW5pdGUgZWFzZS1vdXQ7XHJcbiAgYW5pbWF0aW9uOiBmaW5nZXItNC1hbmltYXRpb24taSAycyBpbmZpbml0ZSBlYXNlLW91dDtcclxufVxyXG4ubG9hZGluZyAuZmluZ2VyLWl0ZW0ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA2cHggNnB4IDhweCA4cHg7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNnB4IDZweCA4cHggOHB4O1xyXG4gIC1tb3otYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweCA2cHggOHB4IDhweDtcclxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuLmxvYWRpbmcgLmZpbmdlci1pdGVtIHNwYW4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZzogNXB4IDVweCAwIDVweDtcclxufVxyXG4ubG9hZGluZyAuZmluZ2VyLWl0ZW0gc3BhbjpiZWZvcmUsXHJcbi5sb2FkaW5nIC5maW5nZXItaXRlbSBzcGFuOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDAgMCAycHggMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDJweDtcclxuICBiYWNrZ3JvdW5kOiAjM2ViMTZhO1xyXG59XHJcbi5sb2FkaW5nIC5maW5nZXItaXRlbSBpIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogM3B4O1xyXG4gIGJvdHRvbTogM3B4O1xyXG4gIHdpZHRoOiAxNHB4O1xyXG4gIGhlaWdodDogMTRweDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHggMTBweCA3cHggN3B4O1xyXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDEwcHggMTBweCA3cHggN3B4O1xyXG4gIC1tb3otYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCA3cHggN3B4O1xyXG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgYmFja2dyb3VuZDogIzNlYjE2YTtcclxufVxyXG4ubG9hZGluZyAubGFzdC1maW5nZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogMjRweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4ubG9hZGluZyAubGFzdC1maW5nZXItaXRlbSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMzJweDtcclxuICB3aWR0aDogMTEwJTtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwIDVweCAxNHB4IDA7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogMCA1cHggMTRweCAwO1xyXG4gIC1tb3otYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgNXB4IDE0cHggMDtcclxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGZpbmdlci01LWFuaW1hdGlvbiAycyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgYW5pbWF0aW9uOiBmaW5nZXItNS1hbmltYXRpb24gMnMgaW5maW5pdGUgbGluZWFyO1xyXG59XHJcbi5sb2FkaW5nIC5sYXN0LWZpbmdlci1pdGVtIGkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogLThweDtcclxuICB3aWR0aDogMjJweDtcclxuICBoZWlnaHQ6IDhweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmxvYWRpbmcgLmxhc3QtZmluZ2VyLWl0ZW0gaTphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDM0cHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMCAwIDE1cHggMTVweDtcclxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAwIDAgMTVweCAxNXB4O1xyXG4gIC1tb3otYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxNXB4IDE1cHg7XHJcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICBiYWNrZ3JvdW5kOiAjM2ViMTZhO1xyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBmaW5nZXItMS1hbmltYXRpb24ge1xyXG4gIDAlIHtcclxuICAgIHBhZGRpbmc6IDEycHggMCA1cHggMDtcclxuICB9XHJcbiAgMjAlIHtcclxuICAgIHBhZGRpbmc6IDEycHggMCA1cHggMDtcclxuICB9XHJcbiAgMjklIHtcclxuICAgIHBhZGRpbmc6IDRweCAwIDI0cHggMDtcclxuICB9XHJcbiAgMzUlIHtcclxuICAgIHBhZGRpbmc6IDRweCAwIDI0cHggMDtcclxuICB9XHJcbiAgNDElIHtcclxuICAgIHBhZGRpbmc6IDEycHggMCA1cHggMDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDAgNXB4IDA7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgZmluZ2VyLTEtYW5pbWF0aW9uIHtcclxuICAwJSB7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDAgNXB4IDA7XHJcbiAgfVxyXG4gIDIwJSB7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDAgNXB4IDA7XHJcbiAgfVxyXG4gIDI5JSB7XHJcbiAgICBwYWRkaW5nOiA0cHggMCAyNHB4IDA7XHJcbiAgfVxyXG4gIDM1JSB7XHJcbiAgICBwYWRkaW5nOiA0cHggMCAyNHB4IDA7XHJcbiAgfVxyXG4gIDQxJSB7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDAgNXB4IDA7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgcGFkZGluZzogMTJweCAwIDVweCAwO1xyXG4gIH1cclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmluZ2VyLTEtYW5pbWF0aW9uLXNwYW4ge1xyXG4gIDAlIHtcclxuICAgIHRvcDogMDtcclxuICB9XHJcbiAgMjAlIHtcclxuICAgIHRvcDogMDtcclxuICB9XHJcbiAgMjklIHtcclxuICAgIHRvcDogLTdweDtcclxuICB9XHJcbiAgMzUlIHtcclxuICAgIHRvcDogLTdweDtcclxuICB9XHJcbiAgNDElIHtcclxuICAgIHRvcDogMDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0b3A6IDA7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgZmluZ2VyLTEtYW5pbWF0aW9uLXNwYW4ge1xyXG4gIDAlIHtcclxuICAgIHRvcDogMDtcclxuICB9XHJcbiAgMjAlIHtcclxuICAgIHRvcDogMDtcclxuICB9XHJcbiAgMjklIHtcclxuICAgIHRvcDogLTdweDtcclxuICB9XHJcbiAgMzUlIHtcclxuICAgIHRvcDogLTdweDtcclxuICB9XHJcbiAgNDElIHtcclxuICAgIHRvcDogMDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0b3A6IDA7XHJcbiAgfVxyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBmaW5nZXItMS1hbmltYXRpb24taSB7XHJcbiAgMCUge1xyXG4gICAgYm90dG9tOiAzcHg7XHJcbiAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHggMTBweCA3cHggN3B4O1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggN3B4IDdweDtcclxuICAgIC1tb3otYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDdweCA3cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIH1cclxuICAyMCUge1xyXG4gICAgYm90dG9tOiAzcHg7XHJcbiAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHggMTBweCA3cHggN3B4O1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggN3B4IDdweDtcclxuICAgIC1tb3otYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDdweCA3cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIH1cclxuICAyOSUge1xyXG4gICAgYm90dG9tOiA4cHg7XHJcbiAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDdweCA3cHggNHB4IDRweDtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogN3B4IDdweCA0cHggNHB4O1xyXG4gICAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmc7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHggN3B4IDRweCA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIH1cclxuICAzNSUge1xyXG4gICAgYm90dG9tOiA4cHg7XHJcbiAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDdweCA3cHggNHB4IDRweDtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogN3B4IDdweCA0cHggNHB4O1xyXG4gICAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmc7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHggN3B4IDRweCA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIH1cclxuICA0MSUge1xyXG4gICAgYm90dG9tOiAzcHg7XHJcbiAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHggMTBweCA3cHggN3B4O1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggN3B4IDdweDtcclxuICAgIC1tb3otYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDdweCA3cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIGJvdHRvbTogM3B4O1xyXG4gICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggN3B4IDdweDtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDdweCA3cHg7XHJcbiAgICAtbW96LWJhY2tncm91bmQtY2xpcDogcGFkZGluZztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCA3cHggN3B4O1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBmaW5nZXItMS1hbmltYXRpb24taSB7XHJcbiAgMCUge1xyXG4gICAgYm90dG9tOiAzcHg7XHJcbiAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHggMTBweCA3cHggN3B4O1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggN3B4IDdweDtcclxuICAgIC1tb3otYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDdweCA3cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIH1cclxuICAyMCUge1xyXG4gICAgYm90dG9tOiAzcHg7XHJcbiAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHggMTBweCA3cHggN3B4O1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggN3B4IDdweDtcclxuICAgIC1tb3otYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDdweCA3cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIH1cclxuICAyOSUge1xyXG4gICAgYm90dG9tOiA4cHg7XHJcbiAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDdweCA3cHggNHB4IDRweDtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogN3B4IDdweCA0cHggNHB4O1xyXG4gICAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmc7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHggN3B4IDRweCA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIH1cclxuICAzNSUge1xyXG4gICAgYm90dG9tOiA4cHg7XHJcbiAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDdweCA3cHggNHB4IDRweDtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogN3B4IDdweCA0cHggNHB4O1xyXG4gICAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmc7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHggN3B4IDRweCA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIH1cclxuICA0MSUge1xyXG4gICAgYm90dG9tOiAzcHg7XHJcbiAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHggMTBweCA3cHggN3B4O1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggN3B4IDdweDtcclxuICAgIC1tb3otYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDdweCA3cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIGJvdHRvbTogM3B4O1xyXG4gICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggN3B4IDdweDtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDdweCA3cHg7XHJcbiAgICAtbW96LWJhY2tncm91bmQtY2xpcDogcGFkZGluZztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCA3cHggN3B4O1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICB9XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZpbmdlci0yLWFuaW1hdGlvbiB7XHJcbiAgMCUge1xyXG4gICAgcGFkZGluZzogNnB4IDAgMnB4IDA7XHJcbiAgfVxyXG4gIDI0JSB7XHJcbiAgICBwYWRkaW5nOiA2cHggMCAycHggMDtcclxuICB9XHJcbiAgMzMlIHtcclxuICAgIHBhZGRpbmc6IDJweCAwIDE2cHggMDtcclxuICB9XHJcbiAgMzklIHtcclxuICAgIHBhZGRpbmc6IDJweCAwIDE2cHggMDtcclxuICB9XHJcbiAgNDUlIHtcclxuICAgIHBhZGRpbmc6IDZweCAwIDJweCAwO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHBhZGRpbmc6IDZweCAwIDJweCAwO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGZpbmdlci0yLWFuaW1hdGlvbiB7XHJcbiAgMCUge1xyXG4gICAgcGFkZGluZzogNnB4IDAgMnB4IDA7XHJcbiAgfVxyXG4gIDI0JSB7XHJcbiAgICBwYWRkaW5nOiA2cHggMCAycHggMDtcclxuICB9XHJcbiAgMzMlIHtcclxuICAgIHBhZGRpbmc6IDJweCAwIDE2cHggMDtcclxuICB9XHJcbiAgMzklIHtcclxuICAgIHBhZGRpbmc6IDJweCAwIDE2cHggMDtcclxuICB9XHJcbiAgNDUlIHtcclxuICAgIHBhZGRpbmc6IDZweCAwIDJweCAwO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHBhZGRpbmc6IDZweCAwIDJweCAwO1xyXG4gIH1cclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmluZ2VyLTItYW5pbWF0aW9uLXNwYW4ge1xyXG4gIDAlIHtcclxuICAgIHRvcDogMDtcclxuICB9XHJcbiAgMjQlIHtcclxuICAgIHRvcDogMDtcclxuICB9XHJcbiAgMzMlIHtcclxuICAgIHRvcDogLTdweDtcclxuICB9XHJcbiAgMzklIHtcclxuICAgIHRvcDogLTdweDtcclxuICB9XHJcbiAgNDUlIHtcclxuICAgIHRvcDogMDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0b3A6IDA7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgZmluZ2VyLTItYW5pbWF0aW9uLXNwYW4ge1xyXG4gIDAlIHtcclxuICAgIHRvcDogMDtcclxuICB9XHJcbiAgMjQlIHtcclxuICAgIHRvcDogMDtcclxuICB9XHJcbiAgMzMlIHtcclxuICAgIHRvcDogLTdweDtcclxuICB9XHJcbiAgMzklIHtcclxuICAgIHRvcDogLTdweDtcclxuICB9XHJcbiAgNDUlIHtcclxuICAgIHRvcDogMDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0b3A6IDA7XHJcbiAgfVxyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBmaW5nZXItMi1hbmltYXRpb24taSB7XHJcbiAgMCUge1xyXG4gICAgYm90dG9tOiAzcHg7XHJcbiAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHggMTBweCA3cHggN3B4O1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggN3B4IDdweDtcclxuICAgIC1tb3otYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDdweCA3cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIH1cclxuICAyNCUge1xyXG4gICAgYm90dG9tOiAzcHg7XHJcbiAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHggMTBweCA3cHggN3B4O1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggN3B4IDdweDtcclxuICAgIC1tb3otYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDdweCA3cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIH1cclxuICAzMyUge1xyXG4gICAgYm90dG9tOiA4cHg7XHJcbiAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDdweCA3cHggNHB4IDRweDtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogN3B4IDdweCA0cHggNHB4O1xyXG4gICAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmc7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHggN3B4IDRweCA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIH1cclxuICAzOSUge1xyXG4gICAgYm90dG9tOiA4cHg7XHJcbiAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDdweCA3cHggNHB4IDRweDtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogN3B4IDdweCA0cHggNHB4O1xyXG4gICAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmc7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHggN3B4IDRweCA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIH1cclxuICA0NSUge1xyXG4gICAgYm90dG9tOiAzcHg7XHJcbiAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHggMTBweCA3cHggN3B4O1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggN3B4IDdweDtcclxuICAgIC1tb3otYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDdweCA3cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIGJvdHRvbTogM3B4O1xyXG4gICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggN3B4IDdweDtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDdweCA3cHg7XHJcbiAgICAtbW96LWJhY2tncm91bmQtY2xpcDogcGFkZGluZztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCA3cHggN3B4O1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBmaW5nZXItMi1hbmltYXRpb24taSB7XHJcbiAgMCUge1xyXG4gICAgYm90dG9tOiAzcHg7XHJcbiAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHggMTBweCA3cHggN3B4O1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggN3B4IDdweDtcclxuICAgIC1tb3otYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDdweCA3cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIH1cclxuICAyNCUge1xyXG4gICAgYm90dG9tOiAzcHg7XHJcbiAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHggMTBweCA3cHggN3B4O1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggN3B4IDdweDtcclxuICAgIC1tb3otYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDdweCA3cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIH1cclxuICAzMyUge1xyXG4gICAgYm90dG9tOiA4cHg7XHJcbiAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDdweCA3cHggNHB4IDRweDtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogN3B4IDdweCA0cHggNHB4O1xyXG4gICAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmc7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHggN3B4IDRweCA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIH1cclxuICAzOSUge1xyXG4gICAgYm90dG9tOiA4cHg7XHJcbiAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDdweCA3cHggNHB4IDRweDtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogN3B4IDdweCA0cHggNHB4O1xyXG4gICAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmc7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHggN3B4IDRweCA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIH1cclxuICA0NSUge1xyXG4gICAgYm90dG9tOiAzcHg7XHJcbiAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHggMTBweCA3cHggN3B4O1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggN3B4IDdweDtcclxuICAgIC1tb3otYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDdweCA3cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIGJvdHRvbTogM3B4O1xyXG4gICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggN3B4IDdweDtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDdweCA3cHg7XHJcbiAgICAtbW96LWJhY2tncm91bmQtY2xpcDogcGFkZGluZztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCA3cHggN3B4O1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICB9XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZpbmdlci0zLWFuaW1hdGlvbiB7XHJcbiAgMCUge1xyXG4gICAgcGFkZGluZzogMCAwIDAgMDtcclxuICB9XHJcbiAgMjglIHtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDA7XHJcbiAgfVxyXG4gIDM3JSB7XHJcbiAgICBwYWRkaW5nOiAwIDAgMTJweCAwO1xyXG4gIH1cclxuICA0MyUge1xyXG4gICAgcGFkZGluZzogMCAwIDEycHggMDtcclxuICB9XHJcbiAgNDklIHtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDA7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgcGFkZGluZzogMCAwIDAgMDtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBmaW5nZXItMy1hbmltYXRpb24ge1xyXG4gIDAlIHtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDA7XHJcbiAgfVxyXG4gIDI4JSB7XHJcbiAgICBwYWRkaW5nOiAwIDAgMCAwO1xyXG4gIH1cclxuICAzNyUge1xyXG4gICAgcGFkZGluZzogMCAwIDEycHggMDtcclxuICB9XHJcbiAgNDMlIHtcclxuICAgIHBhZGRpbmc6IDAgMCAxMnB4IDA7XHJcbiAgfVxyXG4gIDQ5JSB7XHJcbiAgICBwYWRkaW5nOiAwIDAgMCAwO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDA7XHJcbiAgfVxyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBmaW5nZXItMy1hbmltYXRpb24tc3BhbiB7XHJcbiAgMCUge1xyXG4gICAgdG9wOiAwO1xyXG4gIH1cclxuICAyOCUge1xyXG4gICAgdG9wOiAwO1xyXG4gIH1cclxuICAzNyUge1xyXG4gICAgdG9wOiAtN3B4O1xyXG4gIH1cclxuICA0MyUge1xyXG4gICAgdG9wOiAtN3B4O1xyXG4gIH1cclxuICA0OSUge1xyXG4gICAgdG9wOiAwO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRvcDogMDtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBmaW5nZXItMy1hbmltYXRpb24tc3BhbiB7XHJcbiAgMCUge1xyXG4gICAgdG9wOiAwO1xyXG4gIH1cclxuICAyOCUge1xyXG4gICAgdG9wOiAwO1xyXG4gIH1cclxuICAzNyUge1xyXG4gICAgdG9wOiAtN3B4O1xyXG4gIH1cclxuICA0MyUge1xyXG4gICAgdG9wOiAtN3B4O1xyXG4gIH1cclxuICA0OSUge1xyXG4gICAgdG9wOiAwO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRvcDogMDtcclxuICB9XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZpbmdlci0zLWFuaW1hdGlvbi1pIHtcclxuICAwJSB7XHJcbiAgICBib3R0b206IDNweDtcclxuICAgIGhlaWdodDogMTRweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDdweCA3cHg7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDEwcHggMTBweCA3cHggN3B4O1xyXG4gICAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggN3B4IDdweDtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgfVxyXG4gIDI4JSB7XHJcbiAgICBib3R0b206IDNweDtcclxuICAgIGhlaWdodDogMTRweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDdweCA3cHg7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDEwcHggMTBweCA3cHggN3B4O1xyXG4gICAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggN3B4IDdweDtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgfVxyXG4gIDM3JSB7XHJcbiAgICBib3R0b206IDhweDtcclxuICAgIGhlaWdodDogMTJweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogN3B4IDdweCA0cHggNHB4O1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA3cHggN3B4IDRweCA0cHg7XHJcbiAgICAtbW96LWJhY2tncm91bmQtY2xpcDogcGFkZGluZztcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweCA3cHggNHB4IDRweDtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgfVxyXG4gIDQzJSB7XHJcbiAgICBib3R0b206IDhweDtcclxuICAgIGhlaWdodDogMTJweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogN3B4IDdweCA0cHggNHB4O1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA3cHggN3B4IDRweCA0cHg7XHJcbiAgICAtbW96LWJhY2tncm91bmQtY2xpcDogcGFkZGluZztcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweCA3cHggNHB4IDRweDtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgfVxyXG4gIDQ5JSB7XHJcbiAgICBib3R0b206IDNweDtcclxuICAgIGhlaWdodDogMTRweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDdweCA3cHg7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDEwcHggMTBweCA3cHggN3B4O1xyXG4gICAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggN3B4IDdweDtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgYm90dG9tOiAzcHg7XHJcbiAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHggMTBweCA3cHggN3B4O1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggN3B4IDdweDtcclxuICAgIC1tb3otYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDdweCA3cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGZpbmdlci0zLWFuaW1hdGlvbi1pIHtcclxuICAwJSB7XHJcbiAgICBib3R0b206IDNweDtcclxuICAgIGhlaWdodDogMTRweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDdweCA3cHg7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDEwcHggMTBweCA3cHggN3B4O1xyXG4gICAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggN3B4IDdweDtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgfVxyXG4gIDI4JSB7XHJcbiAgICBib3R0b206IDNweDtcclxuICAgIGhlaWdodDogMTRweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDdweCA3cHg7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDEwcHggMTBweCA3cHggN3B4O1xyXG4gICAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggN3B4IDdweDtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgfVxyXG4gIDM3JSB7XHJcbiAgICBib3R0b206IDhweDtcclxuICAgIGhlaWdodDogMTJweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogN3B4IDdweCA0cHggNHB4O1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA3cHggN3B4IDRweCA0cHg7XHJcbiAgICAtbW96LWJhY2tncm91bmQtY2xpcDogcGFkZGluZztcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweCA3cHggNHB4IDRweDtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgfVxyXG4gIDQzJSB7XHJcbiAgICBib3R0b206IDhweDtcclxuICAgIGhlaWdodDogMTJweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogN3B4IDdweCA0cHggNHB4O1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA3cHggN3B4IDRweCA0cHg7XHJcbiAgICAtbW96LWJhY2tncm91bmQtY2xpcDogcGFkZGluZztcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweCA3cHggNHB4IDRweDtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgfVxyXG4gIDQ5JSB7XHJcbiAgICBib3R0b206IDNweDtcclxuICAgIGhlaWdodDogMTRweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDdweCA3cHg7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDEwcHggMTBweCA3cHggN3B4O1xyXG4gICAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggN3B4IDdweDtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgYm90dG9tOiAzcHg7XHJcbiAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHggMTBweCA3cHggN3B4O1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggN3B4IDdweDtcclxuICAgIC1tb3otYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDdweCA3cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIH1cclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmluZ2VyLTQtYW5pbWF0aW9uIHtcclxuICAwJSB7XHJcbiAgICBwYWRkaW5nOiA4cHggMCAzcHggMDtcclxuICB9XHJcbiAgMzIlIHtcclxuICAgIHBhZGRpbmc6IDhweCAwIDNweCAwO1xyXG4gIH1cclxuICA0MSUge1xyXG4gICAgcGFkZGluZzogNHB4IDAgMjBweCAwO1xyXG4gIH1cclxuICA0NyUge1xyXG4gICAgcGFkZGluZzogNHB4IDAgMjBweCAwO1xyXG4gIH1cclxuICA1MyUge1xyXG4gICAgcGFkZGluZzogOHB4IDAgM3B4IDA7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgcGFkZGluZzogOHB4IDAgM3B4IDA7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgZmluZ2VyLTQtYW5pbWF0aW9uIHtcclxuICAwJSB7XHJcbiAgICBwYWRkaW5nOiA4cHggMCAzcHggMDtcclxuICB9XHJcbiAgMzIlIHtcclxuICAgIHBhZGRpbmc6IDhweCAwIDNweCAwO1xyXG4gIH1cclxuICA0MSUge1xyXG4gICAgcGFkZGluZzogNHB4IDAgMjBweCAwO1xyXG4gIH1cclxuICA0NyUge1xyXG4gICAgcGFkZGluZzogNHB4IDAgMjBweCAwO1xyXG4gIH1cclxuICA1MyUge1xyXG4gICAgcGFkZGluZzogOHB4IDAgM3B4IDA7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgcGFkZGluZzogOHB4IDAgM3B4IDA7XHJcbiAgfVxyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBmaW5nZXItNC1hbmltYXRpb24tc3BhbiB7XHJcbiAgMCUge1xyXG4gICAgdG9wOiAwO1xyXG4gIH1cclxuICAzMiUge1xyXG4gICAgdG9wOiAwO1xyXG4gIH1cclxuICA0MSUge1xyXG4gICAgdG9wOiAtN3B4O1xyXG4gIH1cclxuICA0NyUge1xyXG4gICAgdG9wOiAtN3B4O1xyXG4gIH1cclxuICA1MyUge1xyXG4gICAgdG9wOiAwO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRvcDogMDtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBmaW5nZXItNC1hbmltYXRpb24tc3BhbiB7XHJcbiAgMCUge1xyXG4gICAgdG9wOiAwO1xyXG4gIH1cclxuICAzMiUge1xyXG4gICAgdG9wOiAwO1xyXG4gIH1cclxuICA0MSUge1xyXG4gICAgdG9wOiAtN3B4O1xyXG4gIH1cclxuICA0NyUge1xyXG4gICAgdG9wOiAtN3B4O1xyXG4gIH1cclxuICA1MyUge1xyXG4gICAgdG9wOiAwO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRvcDogMDtcclxuICB9XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZpbmdlci00LWFuaW1hdGlvbi1pIHtcclxuICAwJSB7XHJcbiAgICBib3R0b206IDNweDtcclxuICAgIGhlaWdodDogMTRweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDdweCA3cHg7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDEwcHggMTBweCA3cHggN3B4O1xyXG4gICAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggN3B4IDdweDtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgfVxyXG4gIDMyJSB7XHJcbiAgICBib3R0b206IDNweDtcclxuICAgIGhlaWdodDogMTRweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDdweCA3cHg7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDEwcHggMTBweCA3cHggN3B4O1xyXG4gICAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggN3B4IDdweDtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgfVxyXG4gIDQxJSB7XHJcbiAgICBib3R0b206IDhweDtcclxuICAgIGhlaWdodDogMTJweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogN3B4IDdweCA0cHggNHB4O1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA3cHggN3B4IDRweCA0cHg7XHJcbiAgICAtbW96LWJhY2tncm91bmQtY2xpcDogcGFkZGluZztcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweCA3cHggNHB4IDRweDtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgfVxyXG4gIDQ3JSB7XHJcbiAgICBib3R0b206IDhweDtcclxuICAgIGhlaWdodDogMTJweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogN3B4IDdweCA0cHggNHB4O1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA3cHggN3B4IDRweCA0cHg7XHJcbiAgICAtbW96LWJhY2tncm91bmQtY2xpcDogcGFkZGluZztcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweCA3cHggNHB4IDRweDtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgfVxyXG4gIDUzJSB7XHJcbiAgICBib3R0b206IDNweDtcclxuICAgIGhlaWdodDogMTRweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDdweCA3cHg7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDEwcHggMTBweCA3cHggN3B4O1xyXG4gICAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggN3B4IDdweDtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgYm90dG9tOiAzcHg7XHJcbiAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHggMTBweCA3cHggN3B4O1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggN3B4IDdweDtcclxuICAgIC1tb3otYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDdweCA3cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGZpbmdlci00LWFuaW1hdGlvbi1pIHtcclxuICAwJSB7XHJcbiAgICBib3R0b206IDNweDtcclxuICAgIGhlaWdodDogMTRweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDdweCA3cHg7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDEwcHggMTBweCA3cHggN3B4O1xyXG4gICAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggN3B4IDdweDtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgfVxyXG4gIDMyJSB7XHJcbiAgICBib3R0b206IDNweDtcclxuICAgIGhlaWdodDogMTRweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDdweCA3cHg7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDEwcHggMTBweCA3cHggN3B4O1xyXG4gICAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggN3B4IDdweDtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgfVxyXG4gIDQxJSB7XHJcbiAgICBib3R0b206IDhweDtcclxuICAgIGhlaWdodDogMTJweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogN3B4IDdweCA0cHggNHB4O1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA3cHggN3B4IDRweCA0cHg7XHJcbiAgICAtbW96LWJhY2tncm91bmQtY2xpcDogcGFkZGluZztcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweCA3cHggNHB4IDRweDtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgfVxyXG4gIDQ3JSB7XHJcbiAgICBib3R0b206IDhweDtcclxuICAgIGhlaWdodDogMTJweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogN3B4IDdweCA0cHggNHB4O1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA3cHggN3B4IDRweCA0cHg7XHJcbiAgICAtbW96LWJhY2tncm91bmQtY2xpcDogcGFkZGluZztcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweCA3cHggNHB4IDRweDtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgfVxyXG4gIDUzJSB7XHJcbiAgICBib3R0b206IDNweDtcclxuICAgIGhlaWdodDogMTRweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDdweCA3cHg7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDEwcHggMTBweCA3cHggN3B4O1xyXG4gICAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggN3B4IDdweDtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgYm90dG9tOiAzcHg7XHJcbiAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHggMTBweCA3cHggN3B4O1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggN3B4IDdweDtcclxuICAgIC1tb3otYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDdweCA3cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIH1cclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmluZ2VyLTUtYW5pbWF0aW9uIHtcclxuICAwJSB7XHJcbiAgICB0b3A6IDMycHg7XHJcbiAgICByaWdodDogMDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMCA1cHggMTRweCAwO1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAwIDVweCAxNHB4IDA7XHJcbiAgICAtbW96LWJhY2tncm91bmQtY2xpcDogcGFkZGluZztcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgNXB4IDE0cHggMDtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDM0JSB7XHJcbiAgICB0b3A6IDMycHg7XHJcbiAgICByaWdodDogMDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMCA1cHggMTRweCAwO1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAwIDVweCAxNHB4IDA7XHJcbiAgICAtbW96LWJhY2tncm91bmQtY2xpcDogcGFkZGluZztcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgNXB4IDE0cHggMDtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDQzJSB7XHJcbiAgICB0b3A6IDIwcHg7XHJcbiAgICByaWdodDogMnB4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwIDhweCAyMHB4IDA7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDAgOHB4IDIwcHggMDtcclxuICAgIC1tb3otYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCA4cHggMjBweCAwO1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTEyZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMmRlZyk7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICB0b3A6IDIwcHg7XHJcbiAgICByaWdodDogMnB4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwIDhweCAyMHB4IDA7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDAgOHB4IDIwcHggMDtcclxuICAgIC1tb3otYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCA4cHggMjBweCAwO1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTEyZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMmRlZyk7XHJcbiAgfVxyXG4gIDYwJSB7XHJcbiAgICB0b3A6IDMycHg7XHJcbiAgICByaWdodDogMDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMCA1cHggMTRweCAwO1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAwIDVweCAxNHB4IDA7XHJcbiAgICAtbW96LWJhY2tncm91bmQtY2xpcDogcGFkZGluZztcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgNXB4IDE0cHggMDtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdG9wOiAzMnB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDAgNXB4IDE0cHggMDtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMCA1cHggMTRweCAwO1xyXG4gICAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDVweCAxNHB4IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGZpbmdlci01LWFuaW1hdGlvbiB7XHJcbiAgMCUge1xyXG4gICAgdG9wOiAzMnB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDAgNXB4IDE0cHggMDtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMCA1cHggMTRweCAwO1xyXG4gICAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDVweCAxNHB4IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAzNCUge1xyXG4gICAgdG9wOiAzMnB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDAgNXB4IDE0cHggMDtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMCA1cHggMTRweCAwO1xyXG4gICAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDVweCAxNHB4IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICA0MyUge1xyXG4gICAgdG9wOiAyMHB4O1xyXG4gICAgcmlnaHQ6IDJweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMCA4cHggMjBweCAwO1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAwIDhweCAyMHB4IDA7XHJcbiAgICAtbW96LWJhY2tncm91bmQtY2xpcDogcGFkZGluZztcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgOHB4IDIwcHggMDtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xMmRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTJkZWcpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgdG9wOiAyMHB4O1xyXG4gICAgcmlnaHQ6IDJweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMCA4cHggMjBweCAwO1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAwIDhweCAyMHB4IDA7XHJcbiAgICAtbW96LWJhY2tncm91bmQtY2xpcDogcGFkZGluZztcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgOHB4IDIwcHggMDtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xMmRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTJkZWcpO1xyXG4gIH1cclxuICA2MCUge1xyXG4gICAgdG9wOiAzMnB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDAgNXB4IDE0cHggMDtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMCA1cHggMTRweCAwO1xyXG4gICAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDVweCAxNHB4IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRvcDogMzJweDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwIDVweCAxNHB4IDA7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDAgNXB4IDE0cHggMDtcclxuICAgIC1tb3otYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCA1cHggMTRweCAwO1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-loader",
                templateUrl: "./loader.component.html",
                styleUrls: ["./loader.component.css"]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function LoginComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Failure!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.message, " ");
} }
function LoginComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent__svg_svg_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "circle", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_a_36_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_a_36_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.signIn(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "form-control-invalid": a0 }; };
class LoginComponent {
    constructor(router, formBuilder, authService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.submitted = false;
        this.waitingResponse = false;
        this.message = "";
    }
    ngOnInit() {
        this.authService.logOut();
        document.getElementsByTagName("body")[0].classList.add("form-membership");
        this.loginForm = this.formBuilder.group({
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]]
        });
    }
    get f() {
        return this.loginForm.controls;
    }
    signIn() {
        this.message = "";
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.waitingResponse = true;
        this.authService
            .authenticate(this.loginForm.value)
            .subscribe((res) => {
            this.waitingResponse = false;
            if (res) {
                this.router.navigate(["home"]);
            }
            else {
                this.message = "Invalid Credentials";
            }
        });
    }
    ngOnDestroy() {
        document
            .getElementsByTagName("body")[0]
            .classList.remove("form-membership");
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 50, vars: 11, consts: [[1, "col-md-7", "hidden-xs", "user-auth-static"], [1, "col-md-5", "col-md-offset-7", "col-xs-12", "user-auth-form-container"], [3, "formGroup", "ngSubmit"], [1, "col-dm-12", "col-xs-12", "user-auth-form"], [1, "col-xs-12"], [1, "col-md-12", "col-xs-12", "p-l-r-0"], [1, "col-md-5", "col-xs-6"], ["href", "javascript:void(0);", 1, "btn", "social-login", "fb"], ["href", "javascript:void(0);", 1, "btn", "social-login", "tw"], [1, "col-md-12", "col-xs-12", "m-t-50"], [1, "seprator"], [1, "seprator-content"], ["class", "col-md-9 m-t-10", 4, "ngIf"], [1, "col-md-9", "col-xs-12", "field-container"], [1, "field"], ["formControlName", "email", "type", "email", "placeholder", "Email", "required", "", "name", "email", "id", "email", "placeholder", "jane.appleseed@example.com", 3, "ngClass"], ["for", "email"], ["formControlName", "password", "type", "password", "placeholder", "Password", "required", "", "name", "password", "id", "password", "placeholder", "********", 3, "ngClass"], ["for", "password"], [1, "col-md-9", "col-xs-12"], [1, "col-md-6", "col-xs-6", "p-l-0"], [1, "col-md-6", "col-xs-6", "p-r-0"], ["href", "javascript:void(0);", 1, "forgot-password"], ["class", "progress-bar", 4, "ngIf"], [1, "col-md-12", "col-xs-12", "m-t-25"], ["class", "spinner", "width", "40px", "height", "40px", "viewBox", "0 0 66 66", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], ["class", "btn auth-btn active-screen", 3, "click", 4, "ngIf"], [1, "col-md-12", "col-xs-12", "m-t-15"], [1, "redirect"], ["routerLink", "/register"], [1, "col-md-12", "col-xs-12", "m-t-20"], [1, "footer-link"], ["href", "javascript:void(0);"], [1, "col-md-9", "m-t-10"], [1, "alert", "alert-danger"], [1, "progress-bar"], [1, "progress-bar-value"], ["width", "40px", "height", "40px", "viewBox", "0 0 66 66", "xmlns", "http://www.w3.org/2000/svg", 1, "spinner"], ["fill", "none", "stroke-width", "6", "stroke-linecap", "round", "cx", "33", "cy", "33", "r", "30", 1, "path"], [1, "btn", "auth-btn", "active-screen", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_2_listener() { return ctx.signIn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Hey Ambrose! Please Login to Your Account! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Facebook ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Twitter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "OR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LoginComponent_div_18_Template, 5, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Forgot Password? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, LoginComponent_div_33_Template, 2, 0, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, LoginComponent__svg_svg_35_Template, 2, 0, "svg", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, LoginComponent_a_36_Template, 2, 0, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Don't have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Sign Up!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ul", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Terms and Conditions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Privacy Policy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message !== "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.submitted && ctx.f.email.errors && (ctx.f.email.errors.required || ctx.f.email.errors.email)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.submitted && ctx.f.password.errors && (ctx.f.password.errors.required || ctx.f.password.errors.minlength)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.waitingResponse);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.waitingResponse);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.waitingResponse);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-login",
                templateUrl: "./login.component.html",
                styleUrls: ["./login.component.scss"]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/max-video-call/max-video-call.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/max-video-call/max-video-call.component.ts ***!
  \***********************************************************************/
/*! exports provided: MaxVideoCallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaxVideoCallComponent", function() { return MaxVideoCallComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_call_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/call.service */ "./src/app/services/call.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function MaxVideoCallComponent_div_0_video_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "video", 14);
} if (rf & 2) {
    const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("srcObject", ctx_r104.getMainVideoStream());
} }
function MaxVideoCallComponent_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "video", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("srcObject", ctx_r105.localStream);
} }
function MaxVideoCallComponent_div_0_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "video", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("srcObject", ctx_r106.getSecondaryVideoStream());
} }
const _c0 = function (a0) { return { active: a0 }; };
function MaxVideoCallComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MaxVideoCallComponent_div_0_video_1_Template, 1, 1, "video", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MaxVideoCallComponent_div_0_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r108); const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r107.toggleWindow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Garvit Rajput");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "14:30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MaxVideoCallComponent_div_0_div_10_Template, 3, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MaxVideoCallComponent_div_0_div_11_Template, 3, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MaxVideoCallComponent_div_0_Template_a_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r108); const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r109.toggleScreen(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MaxVideoCallComponent_div_0_Template_a_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r108); const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r110.toggleMute(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MaxVideoCallComponent_div_0_Template_a_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r108); const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r111.disconnect(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MaxVideoCallComponent_div_0_Template_a_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r108); const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r112.toggleVideo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r103.getMainVideoStream());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r103.localStream.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r103.getSecondaryVideoStream());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r103.screenDisabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx_r103.audioDisabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx_r103.videoDisabled));
} }
class MaxVideoCallComponent {
    constructor(callService, cdr) {
        this.callService = callService;
        this.cdr = cdr;
        this.videoDisabled = true;
        this.screenDisabled = true;
        this.streams = {};
        this.audioDisabled = false;
        this.maxWindow = false;
    }
    ngOnInit() {
        this.callService.remoteStreamSubject.subscribe((stream) => {
            this.remoteStream = stream;
            this.cdr.detectChanges();
        });
        this.callService.localStreamSubject.subscribe((stream) => {
            this.localStream = stream;
            this.cdr.detectChanges();
        });
        this.callService.streamSubject.subscribe((s) => {
            if (s.id)
                this.streams[s.id] = s.stream;
            this.cdr.detectChanges();
        });
        this.callService.maximizeWindow.subscribe((flag) => {
            this.maxWindow = flag;
            console.log("called");
            this.cdr.detectChanges();
        });
    }
    toggleWindow() {
        this.callService.toggleWindow();
        this.cdr.detectChanges();
    }
    getMainVideoStream() {
        if (this.streams[this.callService.ongoingCall.connectedUserId + "_screen"] &&
            this.streams[this.callService.ongoingCall.connectedUserId + "_screen"].id)
            return this.streams[this.callService.ongoingCall.connectedUserId + "_screen"];
        else if (this.streams[this.callService.ongoingCall.connectedUserId + "_video"] &&
            this.streams[this.callService.ongoingCall.connectedUserId + "_video"].id)
            return this.streams[this.callService.ongoingCall.connectedUserId + "_video"];
        else
            return null;
    }
    getSecondaryVideoStream() {
        if (this.streams[this.callService.ongoingCall.connectedUserId + "_screen"] &&
            this.streams[this.callService.ongoingCall.connectedUserId + "_screen"]
                .id &&
            this.streams[this.callService.ongoingCall.connectedUserId + "_video"] &&
            this.streams[this.callService.ongoingCall.connectedUserId + "_video"].id) {
            return this.streams[this.callService.ongoingCall.connectedUserId + "_video"];
        }
        else
            return null;
    }
    toggleVideo() {
        if (this.videoDisabled) {
            this.callService.enableVideo();
        }
        else {
            this.callService.disableVideo();
        }
        this.videoDisabled = !this.videoDisabled;
        this.cdr.detectChanges();
    }
    toggleScreen() {
        if (this.screenDisabled) {
            this.callService.enableScreen();
        }
        else {
            this.callService.disableScreen();
        }
        this.screenDisabled = !this.screenDisabled;
        this.cdr.detectChanges();
    }
    toggleMute() {
        this.callService.toggleMute();
        this.audioDisabled = !this.audioDisabled;
        this.cdr.detectChanges();
    }
    disconnect() {
        this.callService.disconnect();
    }
}
MaxVideoCallComponent.ɵfac = function MaxVideoCallComponent_Factory(t) { return new (t || MaxVideoCallComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_call_service__WEBPACK_IMPORTED_MODULE_1__["CallService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
MaxVideoCallComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MaxVideoCallComponent, selectors: [["app-max-video-call"]], decls: 1, vars: 1, consts: [["class", "max-video-call container-fluid embed-responsive embed-responsive-4by3", 4, "ngIf"], [1, "max-video-call", "container-fluid", "embed-responsive", "embed-responsive-4by3"], ["class", "embed-responsive-item", "autoplay", "", "muted", "", 3, "srcObject", 4, "ngIf"], ["href", "javascript:void(0);", 1, "minimize", 3, "click"], [1, "col-md-8", "user-details"], [1, "name"], [1, "time"], ["class", "col-md-2 p-l-r-0 child-left", 4, "ngIf"], ["class", "col-md-2 p-l-r-0 child-right", 4, "ngIf"], [1, "col-md-12", "call-action"], ["href", "javascript:void(0);", 1, "screenshare", 3, "ngClass", "click"], ["href", "javascript:void(0);", 1, "mute", 3, "ngClass", "click"], ["href", "javascript:void(0);", 1, "disconnect", 3, "click"], ["href", "javascript:void(0);", 1, "video", 3, "ngClass", "click"], ["autoplay", "", "muted", "", 1, "embed-responsive-item", 3, "srcObject"], [1, "col-md-2", "p-l-r-0", "child-left"], [1, "embed-responsive", "embed-responsive-16by9"], ["muted", "", "autoplay", "", 1, "embed-responsive-item", 3, "srcObject"], [1, "col-md-2", "p-l-r-0", "child-right"]], template: function MaxVideoCallComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MaxVideoCallComponent_div_0_Template, 22, 12, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.maxWindow && ctx.remoteStream.id);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWF4LXZpZGVvLWNhbGwvbWF4LXZpZGVvLWNhbGwuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaxVideoCallComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-max-video-call",
                templateUrl: "./max-video-call.component.html",
                styleUrls: ["./max-video-call.component.scss"],
            }]
    }], function () { return [{ type: src_app_services_call_service__WEBPACK_IMPORTED_MODULE_1__["CallService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/min-call-window/min-call-window.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/min-call-window/min-call-window.component.ts ***!
  \*************************************************************************/
/*! exports provided: MinCallWindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinCallWindowComponent", function() { return MinCallWindowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_call_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/call.service */ "./src/app/services/call.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function MinCallWindowComponent_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MinCallWindowComponent_div_0_div_11_video_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "video", 25);
} if (rf & 2) {
    const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("srcObject", ctx_r94.getMainVideoStream());
} }
function MinCallWindowComponent_div_0_div_11_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "video", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("srcObject", ctx_r95.getSecondaryVideoStream());
} }
function MinCallWindowComponent_div_0_div_11_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "video", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("srcObject", ctx_r96.localStream);
} }
function MinCallWindowComponent_div_0_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MinCallWindowComponent_div_0_div_11_video_3_Template, 1, 1, "video", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MinCallWindowComponent_div_0_div_11_div_4_Template, 3, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MinCallWindowComponent_div_0_div_11_div_5_Template, 3, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r93.getMainVideoStream());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r93.getSecondaryVideoStream());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r93.localStream.id);
} }
const _c0 = function (a0) { return { "active": a0 }; };
function MinCallWindowComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MinCallWindowComponent_div_0_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r98); const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r97.toggleWindow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Garvit Rajput");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "14:28");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MinCallWindowComponent_div_0_div_10_Template, 7, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MinCallWindowComponent_div_0_div_11_Template, 6, 3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MinCallWindowComponent_div_0_Template_a_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r98); const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r99.toggleScreen(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MinCallWindowComponent_div_0_Template_a_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r98); const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r100.toggleMute(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MinCallWindowComponent_div_0_Template_a_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r98); const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r101.disconnect(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MinCallWindowComponent_div_0_Template_a_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r98); const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r102.toggleVideo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r90.getMainVideoStream());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r90.getMainVideoStream());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx_r90.screenDisabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx_r90.audioDisabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx_r90.videoDisabled));
} }
function MinCallWindowComponent_video_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "video", 29);
} if (rf & 2) {
    const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("srcObject", ctx_r91.remoteStream);
} }
class MinCallWindowComponent {
    constructor(callService, cdr) {
        this.callService = callService;
        this.cdr = cdr;
        this.videoDisabled = true;
        this.streams = {};
        this.screenDisabled = true;
        this.audioDisabled = false;
        this.maxWindow = false;
    }
    ngOnInit() {
        this.callService.remoteStreamSubject.subscribe((stream) => {
            this.remoteStream = stream;
            this.cdr.detectChanges();
        });
        this.callService.localStreamSubject.subscribe((stream) => {
            this.localStream = stream;
            this.cdr.detectChanges();
        });
        this.callService.streamSubject.subscribe((s) => {
            if (s.id)
                this.streams[s.id] = s.stream;
            this.cdr.detectChanges();
        });
        this.callService.maximizeWindow.subscribe((flag) => {
            this.maxWindow = flag;
            this.cdr.detectChanges();
        });
    }
    getMainVideoStream() {
        if (this.streams[this.callService.ongoingCall.connectedUserId + "_screen"] &&
            this.streams[this.callService.ongoingCall.connectedUserId + "_screen"].id)
            return this.streams[this.callService.ongoingCall.connectedUserId + "_screen"];
        else if (this.streams[this.callService.ongoingCall.connectedUserId + "_video"] &&
            this.streams[this.callService.ongoingCall.connectedUserId + "_video"].id)
            return this.streams[this.callService.ongoingCall.connectedUserId + "_video"];
        else
            return null;
    }
    getSecondaryVideoStream() {
        if (this.streams[this.callService.ongoingCall.connectedUserId + "_screen"] &&
            this.streams[this.callService.ongoingCall.connectedUserId + "_screen"]
                .id &&
            this.streams[this.callService.ongoingCall.connectedUserId + "_video"] &&
            this.streams[this.callService.ongoingCall.connectedUserId + "_video"].id) {
            return this.streams[this.callService.ongoingCall.connectedUserId + "_video"];
        }
        else
            return null;
    }
    toggleWindow() {
        this.callService.toggleWindow();
    }
    toggleVideo() {
        if (this.videoDisabled) {
            this.callService.enableVideo();
        }
        else {
            this.callService.disableVideo();
        }
        this.videoDisabled = !this.videoDisabled;
        this.cdr.detectChanges();
    }
    toggleScreen() {
        if (this.screenDisabled) {
            this.callService.enableScreen();
        }
        else {
            this.callService.disableScreen();
        }
        this.screenDisabled = !this.screenDisabled;
        this.cdr.detectChanges();
    }
    toggleMute() {
        this.callService.toggleMute();
        this.audioDisabled = !this.audioDisabled;
        this.cdr.detectChanges();
    }
    disconnect() {
        this.callService.disconnect();
    }
}
MinCallWindowComponent.ɵfac = function MinCallWindowComponent_Factory(t) { return new (t || MinCallWindowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_call_service__WEBPACK_IMPORTED_MODULE_1__["CallService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
MinCallWindowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MinCallWindowComponent, selectors: [["app-min-call-window"]], decls: 2, vars: 2, consts: [["class", "col-md-12 p-l-r-0 min-call-window", 4, "ngIf"], ["class", "hidden", "autoplay", "", "class", "embed-responsive-item", 3, "srcObject", 4, "ngIf"], [1, "col-md-12", "p-l-r-0", "min-call-window"], ["href", "javascript:void(0);", 1, "maximize", 3, "click"], [1, "col-md-12"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-star", "fav-icon"], [1, "caller-name"], [1, "call-time"], ["class", "col-md-12 p-l-r-0 audio", 4, "ngIf"], ["class", "col-md-12 p-l-r-0 video", 4, "ngIf"], [1, "col-md-12", "call-action"], ["href", "javascript:void(0);", 1, "screenshare", 3, "ngClass", "click"], ["href", "javascript:void(0);", 1, "mute", 3, "ngClass", "click"], ["href", "javascript:void(0);", 1, "disconnect", 3, "click"], ["href", "javascript:void(0);", 1, "video", 3, "ngClass", "click"], [1, "col-md-12", "p-l-r-0", "audio"], [1, "col-md-12", "user-list"], ["src", "assets/img/user3.jpg"], ["src", "assets/img/user5.jpg"], [1, "col-md-12", "p-l-r-0", "video"], [1, "col-md-12", "p-l-r-0", "master"], [1, "embed-responsive", "embed-responsive-4by3"], ["autoplay", "", "muted", "", "class", "embed-responsive-item", 3, "srcObject", 4, "ngIf"], ["class", "col-md-4 p-l-r-0 child-left", 4, "ngIf"], ["class", "col-md-4 p-l-r-0 child", 4, "ngIf"], ["autoplay", "", "muted", "", 1, "embed-responsive-item", 3, "srcObject"], [1, "col-md-4", "p-l-r-0", "child-left"], ["muted", "", "autoplay", "", 1, "embed-responsive-item", 3, "srcObject"], [1, "col-md-4", "p-l-r-0", "child"], ["autoplay", "", 1, "embed-responsive-item", 3, "srcObject"]], template: function MinCallWindowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MinCallWindowComponent_div_0_Template, 22, 11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MinCallWindowComponent_video_1_Template, 1, 1, "video", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.remoteStream.id && !ctx.maxWindow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.remoteStream.id);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWluLWNhbGwtd2luZG93L21pbi1jYWxsLXdpbmRvdy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MinCallWindowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-min-call-window",
                templateUrl: "./min-call-window.component.html",
                styleUrls: ["./min-call-window.component.scss"],
            }]
    }], function () { return [{ type: src_app_services_call_service__WEBPACK_IMPORTED_MODULE_1__["CallService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/models/add-friend-model/add-friend-model.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/models/add-friend-model/add-friend-model.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AddFriendModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFriendModelComponent", function() { return AddFriendModelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



class AddFriendModelComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
AddFriendModelComponent.ɵfac = function AddFriendModelComponent_Factory(t) { return new (t || AddFriendModelComponent)(); };
AddFriendModelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddFriendModelComponent, selectors: [["app-add-friend-model"]], decls: 24, vars: 0, consts: [["id", "addFriends", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modal-dialog-zoom"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], [1, "ti-user"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], [1, "ti-close"], [1, "modal-body"], [1, "alert", "alert-info"], [1, "form-group"], ["for", "emails", 1, "col-form-label"], ["type", "text", "id", "emails", 1, "form-control"], ["for", "message", 1, "col-form-label"], ["id", "message", 1, "form-control"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary"]], template: function AddFriendModelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Add Friends ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Send invitations to friends.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Email addresses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Invitation message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kZWxzL2FkZC1mcmllbmQtbW9kZWwvYWRkLWZyaWVuZC1tb2RlbC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddFriendModelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-friend-model',
                templateUrl: './add-friend-model.component.html',
                styleUrls: ['./add-friend-model.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/models/call-model/call-model.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/models/call-model/call-model.component.ts ***!
  \**********************************************************************/
/*! exports provided: CallModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallModelComponent", function() { return CallModelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CallModelComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
CallModelComponent.ɵfac = function CallModelComponent_Factory(t) { return new (t || CallModelComponent)(); };
CallModelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CallModelComponent, selectors: [["app-call-model"]], decls: 16, vars: 0, consts: [["id", "call", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "call", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modal-dialog-zoom"], [1, "modal-content"], [1, "modal-body"], [1, "call"], [1, "call-background", 2, "background", "url(/assets/images/call-bg.png)"], [1, "mb-4", "avatar", "avatar-xl"], ["src", "https://banner2.kisspng.com/20180523/tha/kisspng-businessperson-computer-icons-avatar-clip-art-lattice-5b0508dc6a3a10.0013931115270566044351.jpg", 1, "rounded-circle"], [1, "text-center"], [1, "action-button"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-danger", "btn-floating", "btn-lg"], [1, "ti-close"], ["type", "button", 1, "btn", "btn-success", "btn-pulse", "btn-floating", "btn-lg"], [1, "fa", "fa-phone"]], template: function CallModelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "figure", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Jennica Kindred calling ...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kZWxzL2NhbGwtbW9kZWwvY2FsbC1tb2RlbC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CallModelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-call-model',
                templateUrl: './call-model.component.html',
                styleUrls: ['./call-model.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/models/disconnected-model/disconnected-model.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/models/disconnected-model/disconnected-model.component.ts ***!
  \**************************************************************************************/
/*! exports provided: DisconnectedModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisconnectedModelComponent", function() { return DisconnectedModelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DisconnectedModelComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
DisconnectedModelComponent.ɵfac = function DisconnectedModelComponent_Factory(t) { return new (t || DisconnectedModelComponent)(); };
DisconnectedModelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DisconnectedModelComponent, selectors: [["app-disconnected-model"]], decls: 32, vars: 0, consts: [["id", "disconnected", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modal-dialog-zoom"], [1, "modal-content"], [1, "modal-body"], [1, "connection-error"], [1, "text-center"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "width", "862.899px", "height", "862.9px", "viewBox", "0 0 862.899 862.9", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 862.899 862.9"], ["cx", "385.6", "cy", "656.1", "r", "79.8"], ["d", "M561.7,401c-15.801-10.3-32.601-19.2-50.2-26.6c-39.9-16.9-82.3-25.5-126-25.5c-44.601,0-87.9,8.9-128.6,26.6\n                                      c-39.3,17-74.3,41.3-104.1,72.2L253.5,545c34.899-36.1,81.8-56,132-56c49,0,95.1,19.1,129.8,53.8l25.4-25.399L493,469.7L561.7,401\n                                      z"], ["d", "M385.6,267.1c107.601,0,208.9,41.7,285.3,117.4l98.5-99.5c-50-49.5-108.1-88.4-172.699-115.6\n                                      c-66.9-28.1-138-42.4-211.101-42.4c-73.6,0-145,14.4-212.3,42.9c-65,27.5-123.3,66.8-173.3,116.9l99,99\n                                      C175.5,309.299,277.3,267.1,385.6,267.1z"], ["points", "616.8,402.5 549.7,469.599 639.2,559.099 549.7,648.599 616.8,715.7 706.3,626.2 795.8,715.7 862.899,648.599\n                                      773.399,559.099 862.899,469.599 795.8,402.5 706.3,492 \t\t"], [1, "modal-footer", "justify-content-center"], ["type", "button", 1, "btn", "btn-primary", "btn-lg"]], template: function DisconnectedModelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Application disconnected...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "circle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "polygon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Reconnect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kZWxzL2Rpc2Nvbm5lY3RlZC1tb2RlbC9kaXNjb25uZWN0ZWQtbW9kZWwuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DisconnectedModelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-disconnected-model',
                templateUrl: './disconnected-model.component.html',
                styleUrls: ['./disconnected-model.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/models/edit-profile-model/edit-profile-model.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/models/edit-profile-model/edit-profile-model.component.ts ***!
  \**************************************************************************************/
/*! exports provided: EditProfileModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileModelComponent", function() { return EditProfileModelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function EditProfileModelComponent_img_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 67);
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r40.profileImagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a0) { return { "form-control-invalid": a0 }; };
class EditProfileModelComponent {
    constructor(userService, formBuilder) {
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.button_text = "Save";
    }
    ngOnInit() {
        this.userService.userSubject.subscribe(d => {
            this.user = d;
            if (d.profileImagePath && d.profileImagePath.indexOf("https://ui-avatars.com") === -1)
                this.profileImagePath = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_URL}${d.profileImagePath}`;
            this.profileForm = this.formBuilder.group({
                firstName: [this.user.firstName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                lastName: [this.user.lastName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                mobile: [this.user.mobile],
                website: [this.user.website],
                city: [this.user.city],
                state: [this.user.state],
                country: [this.user.country],
                bio: [this.user.bio],
                profileImagePath: [this.user.profileImagePath],
                facebookProfileUrl: [this.user.facebookProfileUrl],
                linkedInProfileUrl: [this.user.linkedInProfileUrl],
                twitterProfileUrl: [this.user.twitterProfileUrl],
                googlePlusProfileUrl: [this.user.googlePlusProfileUrl],
                instagramProfileUrl: [this.user.instagramProfileUrl],
                dribbleProfileUrl: [this.user.dribbleProfileUrl]
            });
        });
    }
    // convenience getter for easy access to form fields
    get f() {
        return this.profileForm.controls;
    }
    selectImage(file) {
        let reader = new FileReader();
        reader.onload = (e) => {
            setTimeout(() => {
                this.profileImagePath = e.target.result;
            });
        };
        this.imageSelected = file.target.files[0];
        reader.readAsDataURL(this.imageSelected);
    }
    submit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.profileForm.invalid) {
            window["$"]('.nav-tabs a[href="#personal"]').tab("show");
            return;
        }
        this.userService
            .updateUserProfile(this.profileForm.value, this.imageSelected)
            .subscribe(res => {
            if (res)
                this.button_text = "Saved successfully";
            else
                this.button_text = "Failed";
            setTimeout(() => {
                this.button_text = "Save";
            }, 3000);
        });
    }
}
EditProfileModelComponent.ɵfac = function EditProfileModelComponent_Factory(t) { return new (t || EditProfileModelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
EditProfileModelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditProfileModelComponent, selectors: [["app-edit-profile-model"]], decls: 135, vars: 9, consts: [["id", "editProfileModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modal-dialog-zoom"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], [1, "ti-pencil"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], [1, "ti-close"], [1, "modal-body"], ["role", "tablist", 1, "nav", "nav-tabs"], [1, "nav-item"], ["data-toggle", "tab", "href", "#personal", "role", "tab", "aria-controls", "personal", "aria-selected", "true", 1, "nav-link", "active"], ["data-toggle", "tab", "href", "#about", "role", "tab", "aria-controls", "about", "aria-selected", "false", 1, "nav-link"], ["data-toggle", "tab", "href", "#social-links", "role", "tab", "aria-controls", "social-links", "aria-selected", "false", 1, "nav-link"], [3, "formGroup"], [1, "tab-content"], ["id", "personal", "role", "tabpanel", 1, "tab-pane", "show", "active"], [1, "form-group"], ["for", "firstName", 1, "col-form-label"], [1, "input-group"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "ti-user"], ["formControlName", "firstName", "type", "text", "id", "firstName", 1, "form-control", 3, "ngClass"], ["for", "lastName", 1, "col-form-label"], ["type", "text", "formControlName", "lastName", "id", "lastName", 1, "form-control", 3, "ngClass"], [1, "col-form-label"], [1, "d-flex", "align-items-center"], [1, "avatar", "mr-3", "item-rtl"], ["class", "rounded-circle", 3, "src", 4, "ngIf"], [1, "custom-file"], ["type", "file", "id", "customFile", 1, "custom-file-input", 3, "change"], ["for", "customFile", 1, "custom-file-label"], ["for", "website", 1, "col-form-label"], [1, "ti-link"], ["type", "text", "formControlName", "website", "id", "website", 1, "form-control"], ["for", "phone", 1, "col-form-label"], [1, "ti-mobile"], ["type", "text", "formControlName", "mobile", "id", "phone", 1, "form-control"], ["id", "about", "role", "tabpanel", 1, "tab-pane"], [1, "ti-map-alt"], ["type", "text", "formControlName", "city", "id", "website", 1, "form-control"], ["type", "text", "formControlName", "state", "id", "website", 1, "form-control"], ["type", "text", "formControlName", "country", "id", "website", 1, "form-control"], ["for", "about-text", 1, "col-form-label"], ["formControlName", "bio", "id", "about-text", 1, "form-control"], ["id", "social-links", "role", "tabpanel", 1, "tab-pane"], [1, "input-group-text", "bg-facebook"], [1, "ti-facebook"], ["type", "text", "formControlName", "facebookProfileUrl", 1, "form-control"], [1, "input-group-text", "bg-twitter"], [1, "ti-twitter"], ["type", "text", "formControlName", "twitterProfileUrl", 1, "form-control"], [1, "input-group-text", "bg-instagram"], [1, "ti-instagram"], ["type", "text", "formControlName", "instagramProfileUrl", 1, "form-control"], [1, "input-group-text", "bg-linkedin"], [1, "ti-linkedin"], ["type", "text", "formControlName", "linkedInProfileUrl", 1, "form-control"], [1, "input-group-text", "bg-dribbble"], [1, "ti-dribbble"], ["type", "text", "formControlName", "dribbleProfileUrl", 1, "form-control"], [1, "input-group-text", "bg-google"], [1, "ti-google"], ["type", "text", "formControlName", "googlePlusProfileUrl", 1, "form-control"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "rounded-circle", 3, "src"]], template: function EditProfileModelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Profile Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Personal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Social Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "form", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Avatar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "figure", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, EditProfileModelComponent_img_45_Template, 1, 1, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditProfileModelComponent_Template_input_change_47_listener($event) { return ctx.selectImage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Choose file");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Write a few words that describe you");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "textarea", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "input", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "i", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "i", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "input", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "i", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "input", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "i", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "input", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "button", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditProfileModelComponent_Template_button_click_133_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.profileForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.submitted && ctx.f.firstName.errors && ctx.f.firstName.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.submitted && ctx.f.lastName.errors && ctx.f.lastName.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileImagePath);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.button_text);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kZWxzL2VkaXQtcHJvZmlsZS1tb2RlbC9lZGl0LXByb2ZpbGUtbW9kZWwuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditProfileModelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-edit-profile-model",
                templateUrl: "./edit-profile-model.component.html",
                styleUrls: ["./edit-profile-model.component.scss"]
            }]
    }], function () { return [{ type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/models/new-group-model/new-group-model.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/models/new-group-model/new-group-model.component.ts ***!
  \********************************************************************************/
/*! exports provided: NewGroupModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewGroupModelComponent", function() { return NewGroupModelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var toppy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! toppy */ "./node_modules/toppy/__ivy_ngcc__/fesm2015/toppy.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");











const _c0 = ["tpl"];
const _c1 = ["el"];
function NewGroupModelComponent_ng_template_22_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewGroupModelComponent_ng_template_22_li_2_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const user_r46 = ctx.$implicit; const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r47.addUser(user_r46); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewGroupModelComponent_ng_template_22_li_2_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const user_r46 = ctx.$implicit; const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r49.addUser(user_r46); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "figure", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", user_r46.profileImagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r46.firstName + " " + user_r46.lastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r46.email, " ");
} }
function NewGroupModelComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NewGroupModelComponent_ng_template_22_li_2_Template, 9, 3, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r43.filteredUsers);
} }
function NewGroupModelComponent_div_24_figure_2_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "figure", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewGroupModelComponent_div_24_figure_2_Template_figure_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const user_r51 = ctx.$implicit; const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r52.removeUser(user_r51); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("title", "", user_r51.firstName + " " + user_r51.lastName, " </br> Click to remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", user_r51.profileImagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function NewGroupModelComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NewGroupModelComponent_div_24_figure_2_Template, 2, 2, "figure", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r44.selectedUsers);
} }
const _c2 = function (a0) { return { "form-control-invalid": a0 }; };
class NewGroupModelComponent {
    constructor(_toppy, userService, formBuilder, chatService) {
        this._toppy = _toppy;
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.chatService = chatService;
        this.filteredUsers = [];
        this.users = [];
        this.selectedUsers = [];
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            groupName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        const position = new toppy__WEBPACK_IMPORTED_MODULE_1__["RelativePosition"]({
            placement: toppy__WEBPACK_IMPORTED_MODULE_1__["OutsidePlacement"].BOTTOM_LEFT,
            src: this.el.nativeElement
        });
        this.overlay = this._toppy
            .position(position)
            .content(this.tpl) // template ref
            .create();
        this.fetchAllUsers();
    }
    get f() {
        return this.form.controls;
    }
    fetchAllUsers() {
        this.userService.activeUsers.subscribe(res => {
            this.users = res;
            this.filteredUsers = res;
        });
    }
    inputChange() {
        this.filteredUsers = this.users.filter(u => {
            return ((u.firstName + " " + u.lastName)
                .toUpperCase()
                .includes(this.el.nativeElement.value.toUpperCase()) &&
                !this.selectedUsers.some(s => s.userId == u.userId));
        });
    }
    submit() {
        this.message = "";
        this.submitted = true;
        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }
        if (!this.selectedUsers.length) {
            this.message = "Please Add Users";
            return;
        }
        let data = {
            groupName: this.form.value.groupName,
            description: this.form.value.description,
            users: this.selectedUsers.map(u => u.userId)
        };
        this.chatService.createGroup(data).subscribe(res => {
        });
    }
    addUser(user) {
        if (!this.selectedUsers.filter(v => v.userId == user.userId).length) {
            this.selectedUsers.push(user);
            this.message = "";
        }
        setTimeout(() => {
            window["$"]('[data-toggle="tooltip"]').tooltip();
        });
    }
    open() {
        this.inputChange();
        this.overlay.open();
    }
    removeUser(user) {
        this.selectedUsers.splice(this.selectedUsers.findIndex(function (i) {
            return i.userId === user.userId;
        }), 1);
    }
    close() {
        setTimeout(() => {
            this.overlay.close();
        }, 200);
    }
}
NewGroupModelComponent.ɵfac = function NewGroupModelComponent_Factory(t) { return new (t || NewGroupModelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](toppy__WEBPACK_IMPORTED_MODULE_1__["Toppy"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"])); };
NewGroupModelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewGroupModelComponent, selectors: [["app-new-group-model"]], viewQuery: function NewGroupModelComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tpl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.el = _t.first);
    } }, decls: 32, vars: 9, consts: [["id", "newGroup", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modal-dialog-zoom"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], [1, "fa", "fa-users"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], [1, "ti-close"], [1, "modal-body"], [3, "formGroup"], [1, "form-group"], ["for", "group_name", 1, "col-form-label"], ["type", "text", "formControlName", "groupName", "id", "group_name", 1, "form-control", 3, "ngClass"], [1, "form-group", "dropdown"], ["for", "users", 1, "col-form-label"], ["type", "text", "id", "users", "placeholder", "Find user", 1, "form-control", 3, "click", "blur", "input"], ["el", ""], [1, "text-danger"], ["tpl", ""], ["class", "form-group", 4, "ngIf"], ["for", "description", 1, "col-form-label"], ["formControlName", "description", "id", "group_name", "id", "description", 1, "form-control", 3, "ngClass"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "user-list-container"], [1, "list-group", "list-group-flush"], ["class", "list-group-item open-chat", 3, "click", 4, "ngFor", "ngForOf"], [1, "list-group-item", "open-chat", 3, "click"], [3, "click"], [1, "avatar"], [1, "rounded-circle", 3, "src"], [1, "users-list-body"], [1, "title"], [1, "email"], [1, "avatar-group"], ["data-toggle", "tooltip", "data-placement", "bottom", "data-html", "true", "class", "avatar", 3, "title", "click", 4, "ngFor", "ngForOf"], ["data-toggle", "tooltip", "data-placement", "bottom", "data-html", "true", 1, "avatar", 3, "title", "click"]], template: function NewGroupModelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " New Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Group name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewGroupModelComponent_Template_input_click_18_listener() { return ctx.open(); })("blur", function NewGroupModelComponent_Template_input_blur_18_listener() { return ctx.close(); })("input", function NewGroupModelComponent_Template_input_input_18_listener() { return ctx.inputChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, NewGroupModelComponent_ng_template_22_Template, 3, 1, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, NewGroupModelComponent_div_24_Template, 3, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "textarea", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewGroupModelComponent_Template_button_click_30_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Create Group ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c2, ctx.submitted && ctx.f.groupName.errors && ctx.f.groupName.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedUsers.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, ctx.submitted && ctx.f.description.errors && ctx.f.description.errors.required));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".user-list-container[_ngcontent-%COMP%] {\n  background-color: white;\n  border: 1px solid #ccc;\n}\n\n.user-list-container[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  display: flex;\n}\n\n.user-list-container[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  margin-bottom: 0;\n  color: #969696;\n}\n\n.user-list-container[_ngcontent-%COMP%]   .users-list-body[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  margin-bottom: 0px;\n}\n\n.title[_ngcontent-%COMP%] {\n  margin-bottom: 0px !important;\n  font-size: 16px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2RlbHMvbmV3LWdyb3VwLW1vZGVsL0Q6XFxXb3JrXFxDb2RlXFxDaGF0LUFwcC1HTVxcY2hhdC1hcHAtc2VydmVyXFxjbGllbnQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG1vZGVsc1xcbmV3LWdyb3VwLW1vZGVsXFxuZXctZ3JvdXAtbW9kZWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbW9kZWxzL25ldy1ncm91cC1tb2RlbC9uZXctZ3JvdXAtbW9kZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBRUEsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQ0VGOztBRENBO0VBQ0UsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kZWxzL25ldy1ncm91cC1tb2RlbC9uZXctZ3JvdXAtbW9kZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1saXN0LWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxufVxyXG5cclxuLnVzZXItbGlzdC1jb250YWluZXIgbGkge1xyXG4gIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi51c2VyLWxpc3QtY29udGFpbmVyIC5lbWFpbCB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAtby10ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgY29sb3I6ICM5Njk2OTY7XHJcbn1cclxuLnVzZXItbGlzdC1jb250YWluZXIgLnVzZXJzLWxpc3QtYm9keSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4iLCIudXNlci1saXN0LWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xufVxuXG4udXNlci1saXN0LWNvbnRhaW5lciBsaSB7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4udXNlci1saXN0LWNvbnRhaW5lciAuZW1haWwge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAtby10ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGNvbG9yOiAjOTY5Njk2O1xufVxuXG4udXNlci1saXN0LWNvbnRhaW5lciAudXNlcnMtbGlzdC1ib2R5IHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi50aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewGroupModelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-new-group-model",
                templateUrl: "./new-group-model.component.html",
                styleUrls: ["./new-group-model.component.scss"]
            }]
    }], function () { return [{ type: toppy__WEBPACK_IMPORTED_MODULE_1__["Toppy"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"] }]; }, { tpl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["tpl", { static: true }]
        }], el: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["el", { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/components/models/settings-model/settings-model.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/models/settings-model/settings-model.component.ts ***!
  \******************************************************************************/
/*! exports provided: SettingsModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModelComponent", function() { return SettingsModelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SettingsModelComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
SettingsModelComponent.ɵfac = function SettingsModelComponent_Factory(t) { return new (t || SettingsModelComponent)(); };
SettingsModelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingsModelComponent, selectors: [["app-settings-model"]], decls: 77, vars: 0, consts: [["id", "settingModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modal-dialog-zoom"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], [1, "ti-settings"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], [1, "ti-close"], [1, "modal-body"], ["role", "tablist", 1, "nav", "nav-tabs"], [1, "nav-item"], ["data-toggle", "tab", "href", "#account", "role", "tab", "aria-controls", "account", "aria-selected", "true", 1, "nav-link", "active"], ["data-toggle", "tab", "href", "#notification", "role", "tab", "aria-controls", "notification", "aria-selected", "false", 1, "nav-link"], ["data-toggle", "tab", "href", "#contact", "role", "tab", "aria-controls", "contact", "aria-selected", "false", 1, "nav-link"], [1, "tab-content"], ["id", "account", "role", "tabpanel", 1, "tab-pane", "show", "active"], [1, "form-item", "custom-control", "custom-switch"], ["type", "checkbox", "checked", "", "id", "customSwitch1", 1, "custom-control-input"], ["for", "customSwitch1", 1, "custom-control-label"], ["type", "checkbox", "checked", "", "id", "customSwitch2", 1, "custom-control-input"], ["for", "customSwitch2", 1, "custom-control-label"], ["type", "checkbox", "checked", "", "id", "customSwitch3", 1, "custom-control-input"], ["for", "customSwitch3", 1, "custom-control-label"], ["type", "checkbox", "id", "customSwitch4", 1, "custom-control-input"], ["for", "customSwitch4", 1, "custom-control-label"], ["type", "checkbox", "checked", "", "id", "customSwitch5", 1, "custom-control-input"], ["for", "customSwitch5", 1, "custom-control-label"], ["id", "notification", "role", "tabpanel", 1, "tab-pane"], ["type", "checkbox", "checked", "", "id", "customSwitch6", 1, "custom-control-input"], ["for", "customSwitch6", 1, "custom-control-label"], ["type", "checkbox", "id", "customSwitch7", 1, "custom-control-input"], ["for", "customSwitch7", 1, "custom-control-label"], ["type", "checkbox", "id", "customSwitch8", 1, "custom-control-input"], ["for", "customSwitch8", 1, "custom-control-label"], ["id", "contact", "role", "tabpanel", 1, "tab-pane"], ["type", "checkbox", "id", "customSwitch9", 1, "custom-control-input"], ["for", "customSwitch9", 1, "custom-control-label"], ["type", "checkbox", "checked", "", "id", "customSwitch10", 1, "custom-control-input"], ["for", "customSwitch10", 1, "custom-control-label"], [1, "form-item"], ["data-toggle", "collapse", "href", "#collapseExample", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample"], [1, "ti-plus", "btn-icon"], ["id", "collapseExample", 1, "collapse"], [1, "form-group"], ["type", "text", "placeholder", "Question 1", 1, "form-control"], ["type", "text", "placeholder", "Question 2", 1, "form-control"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary"]], template: function SettingsModelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Notification");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Security");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Allow connected contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Confirm message requests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Profile privacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Developer mode options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Two-step security verification");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Allow mobile notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Notifications from your friends");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Send notifications by email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Suggest changing passwords every month.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Let me know about suspicious entries to your account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Security Questions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "button", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kZWxzL3NldHRpbmdzLW1vZGVsL3NldHRpbmdzLW1vZGVsLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsModelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-settings-model',
                templateUrl: './settings-model.component.html',
                styleUrls: ['./settings-model.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/profile-panel/profile-panel.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/profile-panel/profile-panel.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProfilePanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePanelComponent", function() { return ProfilePanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var src_app_models_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/message */ "./src/app/models/message.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");









function ProfilePanelComponent_div_0_p_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No file Shared");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfilePanelComponent_div_0_li_24_Template(rf, ctx) { if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfilePanelComponent_div_0_li_24_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); const file_r80 = ctx.$implicit; const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r81.handleFileClick(file_r80.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r80 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", file_r80.name, " ");
} }
const _c0 = function (a0, a1) { return { available: a0, busy: a1 }; };
function ProfilePanelComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Options");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfilePanelComponent_div_0_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r83.query = $event; })("keydown", function ProfilePanelComponent_div_0_Template_input_keydown_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r85.queryChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Starred Message ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Shared Files");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ProfilePanelComponent_div_0_p_22_Template, 2, 0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ProfilePanelComponent_div_0_li_24_Template, 3, 1, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r77.activeUser.profileImagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c0, ctx_r77.activeUser.online, !ctx_r77.activeUser.online));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r77.activeUser.firstName + " " + ctx_r77.activeUser.lastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r77.activeUser.online ? "Active Now" : "Offline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r77.query);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r77.files == null ? null : ctx_r77.files.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r77.files);
} }
class ProfilePanelComponent {
    constructor(chatService, userService) {
        this.chatService = chatService;
        this.userService = userService;
        this.query = "";
        this.files = [];
        this.userService.userSubject.subscribe((user) => {
            this.user = user;
        });
        this.chatService.activeUserSubject.subscribe((user) => {
            this.activeUser = user;
            this.query = "";
            this.queryChange();
        });
        this.chatService.activeMessages.subscribe((messages) => {
            if (!messages)
                messages = [];
            this.files = [];
            messages.forEach((msg) => {
                if (msg.type == src_app_models_message__WEBPACK_IMPORTED_MODULE_3__["MessageType"].File ||
                    msg.type == src_app_models_message__WEBPACK_IMPORTED_MODULE_3__["MessageType"].Video ||
                    msg.type == src_app_models_message__WEBPACK_IMPORTED_MODULE_3__["MessageType"].Image) {
                    this.files.push({
                        name: msg.content.split("/").slice(-1).pop(),
                        id: msg.timeStamp.valueOf().toString(),
                        type: msg.type,
                    });
                }
            });
        });
    }
    queryChange() {
        this.chatService.updateSearchQuery(this.query);
    }
    getFileName(msg) {
        return msg.content.split("/").slice(-1).pop();
    }
    handleFileClick(id) {
        var el = document.getElementById(id);
        if (el) {
            el.scrollIntoView();
        }
    }
    ngOnInit() { }
}
ProfilePanelComponent.ɵfac = function ProfilePanelComponent_Factory(t) { return new (t || ProfilePanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
ProfilePanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfilePanelComponent, selectors: [["app-profile-panel"]], decls: 1, vars: 1, consts: [["class", "col-md-12 col-xs-12 p-l-r-0 chat-user-details", 4, "ngIf"], [1, "col-md-12", "col-xs-12", "p-l-r-0", "chat-user-details"], [1, "col-md-6", "col-md-offset-3", "col-xs-6", "col-xs-offset-3", "user-img"], [3, "src"], [1, "user-status", "available"], [1, "user-status", 3, "ngClass"], [1, "col-md-12", "col-xs-12"], [1, "status", "available-status-details"], [1, "col-md-12", "col-xs-12", "p-l-r-0", "chat-user-option", "m-t-25"], ["type", "text", "placeholder", "Search in Conversation", 3, "ngModel", "ngModelChange", "keydown"], ["href", "javascript:void(0);", 1, "starred"], [1, "col-md-12", "col-xs-12", "p-l-r-0", "chat-user-option"], [4, "ngIf"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], ["href", "javascript:void(0);", 1, "doc"]], template: function ProfilePanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProfilePanelComponent_div_0_Template, 25, 10, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeUser);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS1wYW5lbC9wcm9maWxlLXBhbmVsLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfilePanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-profile-panel",
                templateUrl: "./profile-panel.component.html",
                styleUrls: ["./profile-panel.component.scss"],
            }]
    }], function () { return [{ type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function RegisterComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Failure!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.message, " ");
} }
function RegisterComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent__svg_svg_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "circle", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_a_39_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_a_39_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.register(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Sign Up ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "form-control-invalid": a0 }; };
class RegisterComponent {
    constructor(router, formBuilder, authService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.submitted = false;
        this.message = "";
        this.waitingResponse = false;
    }
    ngOnInit() {
        document.getElementsByTagName("body")[0].classList.add("form-membership");
        this.registerForm = this.formBuilder.group({
            firstName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        });
    }
    register() {
        this.message = "";
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.waitingResponse = true;
        this.authService.register(this.registerForm.value)
            .subscribe((res) => {
            this.waitingResponse = false;
            if (res) {
                this.router.navigate(["home"]);
            }
            else {
                this.message = "User Already Exists";
            }
        });
    }
    // convenience getter for easy access to form fields
    get f() {
        return this.registerForm.controls;
    }
    ngOnDestroy() {
        document
            .getElementsByTagName("body")[0]
            .classList.remove("form-membership");
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 53, vars: 17, consts: [[1, "col-md-7", "hidden-xs", "user-auth-static"], [1, "col-md-5", "col-md-offset-7", "col-xs-12", "user-auth-form-container"], [3, "formGroup"], [1, "col-dm-12", "col-xs-12", "user-auth-form"], [1, "col-xs-12"], [1, "col-md-12", "col-xs-12", "p-l-r-0"], [1, "col-md-5", "col-xs-6"], ["href", "javascript:void(0);", 1, "btn", "social-login", "fb"], ["href", "javascript:void(0);", 1, "btn", "social-login", "tw"], [1, "col-md-12", "col-xs-12", "m-t-50"], [1, "seprator"], [1, "seprator-content"], ["class", "col-md-9 m-t-10", 4, "ngIf"], [1, "col-md-9", "col-xs-12", "field-container"], [1, "field"], ["formControlName", "firstName", "type", "text", "placeholder", "First name", "name", "firstName", "id", "firstName", "required", "", 3, "ngClass"], ["for", "firstName"], ["formControlName", "lastName", "type", "text", "placeholder", "Lastname", "placeholder", "Last Name", "id", "lastName", "required", "", 3, "ngClass"], ["for", "lastName"], ["formControlName", "email", "type", "email", "placeholder", "Email", "required", "", "name", "email", "id", "email", "placeholder", "jane.appleseed@example.com", 3, "ngClass"], ["for", "email"], ["formControlName", "password", "type", "password", "placeholder", "Password", "required", "", "name", "password", "id", "password", "placeholder", "********", 3, "ngClass"], ["for", "password"], ["class", "progress-bar", 4, "ngIf"], [1, "col-md-12", "col-xs-12"], ["class", "spinner", "width", "40px", "height", "40px", "viewBox", "0 0 66 66", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], ["class", "btn auth-btn active-screen", "href", "javascript:void(0)", 3, "click", 4, "ngIf"], [1, "col-md-12", "col-xs-12", "m-t-15"], [1, "redirect"], ["routerLink", "/login"], [1, "col-md-12", "col-xs-12", "m-t-20"], [1, "footer-link"], ["href", "javascript:void(0);"], [1, "col-md-9", "m-t-10"], [1, "alert", "alert-danger"], [1, "progress-bar"], [1, "progress-bar-value"], ["width", "40px", "height", "40px", "viewBox", "0 0 66 66", "xmlns", "http://www.w3.org/2000/svg", 1, "spinner"], ["fill", "none", "stroke-width", "6", "stroke-linecap", "round", "cx", "33", "cy", "33", "r", "30", 1, "path"], ["href", "javascript:void(0)", 1, "btn", "auth-btn", "active-screen", 3, "click"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Hey Ambrose! Please Register Your Account! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Facebook ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Twitter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "OR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RegisterComponent_div_18_Template, 5, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, RegisterComponent_div_36_Template, 2, 0, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, RegisterComponent__svg_svg_38_Template, 2, 0, "svg", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, RegisterComponent_a_39_Template, 2, 0, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Already have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Sign in!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "ul", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Terms and Conditions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Privacy Policy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message !== "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.submitted && ctx.f.firstName.errors && ctx.f.firstName.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.submitted && ctx.f.lastName.errors && ctx.f.lastName.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.submitted && ctx.f.email.errors && (ctx.f.email.errors.required || ctx.f.email.errors.email)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx.submitted && ctx.f.password.errors && (ctx.f.password.errors.required || ctx.f.password.errors.minlength)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.waitingResponse);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.waitingResponse);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.waitingResponse);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-register",
                templateUrl: "./register.component.html",
                styleUrls: ["./register.component.scss"]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/right-panel/right-panel.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/right-panel/right-panel.component.ts ***!
  \*****************************************************************/
/*! exports provided: RightPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightPanelComponent", function() { return RightPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _incoming_call_incoming_call_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../incoming-call/incoming-call.component */ "./src/app/components/incoming-call/incoming-call.component.ts");
/* harmony import */ var _min_call_window_min_call_window_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../min-call-window/min-call-window.component */ "./src/app/components/min-call-window/min-call-window.component.ts");
/* harmony import */ var _profile_panel_profile_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../profile-panel/profile-panel.component */ "./src/app/components/profile-panel/profile-panel.component.ts");








const _c0 = ["app-right-panel", ""];
const _c1 = function () { return ["/login"]; };
class RightPanelComponent {
    constructor(userService) {
        this.userService = userService;
        this.userService.userSubject.subscribe((user) => {
            this.user = user;
        });
    }
    ngOnInit() { }
}
RightPanelComponent.ɵfac = function RightPanelComponent_Factory(t) { return new (t || RightPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
RightPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RightPanelComponent, selectors: [["", "app-right-panel", ""]], attrs: _c0, decls: 17, vars: 4, consts: [[1, "col-md-12", "col-xs-12", "profile-panel-header"], [1, "col-lg-3", "col-lg-offset-1", "col-md-3", "col-xs-3", "col-xs-offset-2", "img-container"], [3, "src"], [1, "col-lg-7", "col-md-8", "col-md-offset-1", "col-xs-5", "p-l-0"], ["type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "dropdown-toggle", "name"], [1, "caret"], [1, "dropdown-menu"], ["href", "#"], [3, "routerLink"]], template: function RightPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-incoming-call");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-min-call-window");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-profile-panel");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.user == null ? null : ctx.user.profileImagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.firstName + " " + ctx.user.lastName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _incoming_call_incoming_call_component__WEBPACK_IMPORTED_MODULE_3__["IncomingCallComponent"], _min_call_window_min_call_window_component__WEBPACK_IMPORTED_MODULE_4__["MinCallWindowComponent"], _profile_panel_profile_panel_component__WEBPACK_IMPORTED_MODULE_5__["ProfilePanelComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmlnaHQtcGFuZWwvcmlnaHQtcGFuZWwuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RightPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "[app-right-panel]",
                templateUrl: "./right-panel.component.html",
                styleUrls: ["./right-panel.component.scss"],
            }]
    }], function () { return [{ type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/side-menu/side-menu.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/side-menu/side-menu.component.ts ***!
  \*************************************************************/
/*! exports provided: SideMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideMenuComponent", function() { return SideMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SideMenuComponent {
    constructor() {
        this.rightSwipe = false;
    }
    ngOnInit() {
        document.addEventListener("swiped-right", e => {
            this.rightSwipe = true;
        });
        document.addEventListener("swiped-left", e => {
            this.rightSwipe = false;
        });
    }
    get isMobile() {
        return window["jQuery"].browser.mobile;
    }
}
SideMenuComponent.ɵfac = function SideMenuComponent_Factory(t) { return new (t || SideMenuComponent)(); };
SideMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SideMenuComponent, selectors: [["app-side-menu"]], decls: 34, vars: 0, consts: [[1, "col-md-1", "col-sm-3", "col-xs-3", "left-profile-panel"], [1, "col-md-12", "profile-pic"], [1, "profile-status", "available"], ["src", "assets/img/user.jfif "], [1, "col-md-12", "p-l-r-0"], ["type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-default", "dropdown-toggle", "status-change", "available-status"], [1, "caret"], [1, "dropdown-menu", "status-dropdown"], ["href", "#"], [1, "col-md-12", "p-l-r-0", "m-t-100"], [1, "profile-option"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-home"], [1, "notification-lit"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-send"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-inbox"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-user"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-bell"], [1, "col-md-12", "p-l-r-0", "profile-setting"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-cog"]], template: function SideMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Online ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Online");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Busy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Idle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZS1tZW51L3NpZGUtbWVudS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-side-menu",
                templateUrl: "./side-menu.component.html",
                styleUrls: ["./side-menu.component.scss"]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/user-info/user-info.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/user-info/user-info.component.ts ***!
  \*************************************************************/
/*! exports provided: UserInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoComponent", function() { return UserInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = ["app-user-info", ""];
function UserInfoComponent_div_0_hr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr");
} }
function UserInfoComponent_div_0_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "About");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r23.user.bio, " ");
} }
function UserInfoComponent_div_0_hr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr");
} }
function UserInfoComponent_div_0_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r25.user.mobile);
} }
function UserInfoComponent_div_0_hr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr");
} }
function UserInfoComponent_div_0_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx_r27.user.city ? ctx_r27.user.city + (ctx_r27.user.state || ctx_r27.user.country ? "," : "") : "", " ", ctx_r27.user.state ? ctx_r27.user.state + (ctx_r27.user.country ? "," : "") : "", " ", ctx_r27.user.country ? ctx_r27.user.country : "", " ");
} }
function UserInfoComponent_div_0_hr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr");
} }
function UserInfoComponent_div_0_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Website");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r29.user.website, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r29.user.website);
} }
function UserInfoComponent_div_0_hr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr");
} }
function UserInfoComponent_div_0_div_25_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r32.user.facebookProfileUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UserInfoComponent_div_0_div_25_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r33.user.twitterProfileUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UserInfoComponent_div_0_div_25_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r34.user.dribbleProfileUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UserInfoComponent_div_0_div_25_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r35.user.linkedInProfileUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UserInfoComponent_div_0_div_25_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r36.user.googlePlusProfileUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UserInfoComponent_div_0_div_25_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r37.user.instagramProfileUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UserInfoComponent_div_0_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Social Links");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserInfoComponent_div_0_div_25_li_4_Template, 3, 1, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserInfoComponent_div_0_div_25_li_5_Template, 3, 1, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UserInfoComponent_div_0_div_25_li_6_Template, 3, 1, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UserInfoComponent_div_0_div_25_li_7_Template, 3, 1, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UserInfoComponent_div_0_div_25_li_8_Template, 3, 1, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UserInfoComponent_div_0_div_25_li_9_Template, 3, 1, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.user.facebookProfileUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.user.twitterProfileUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.user.dribbleProfileUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.user.linkedInProfileUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.user.googlePlusProfileUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.user.instagramProfileUrl);
} }
const _c1 = function (a0) { return { active: a0 }; };
const _c2 = function (a0, a1) { return { "avatar-state-success": a0, "avatar-state-danger": a1 }; };
function UserInfoComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "About");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserInfoComponent_div_0_Template_li_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.closeSidebar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "figure", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, UserInfoComponent_div_0_hr_16_Template, 1, 0, "hr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, UserInfoComponent_div_0_div_17_Template, 5, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, UserInfoComponent_div_0_hr_18_Template, 1, 0, "hr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, UserInfoComponent_div_0_div_19_Template, 5, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, UserInfoComponent_div_0_hr_20_Template, 1, 0, "hr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, UserInfoComponent_div_0_div_21_Template, 5, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, UserInfoComponent_div_0_hr_22_Template, 1, 0, "hr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, UserInfoComponent_div_0_div_23_Template, 6, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, UserInfoComponent_div_0_hr_24_Template, 1, 0, "hr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, UserInfoComponent_div_0_div_25_Template, 10, 6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c1, ctx_r21.opened));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](17, _c2, ctx_r21.user.online, !ctx_r21.user.online));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r21.user.profileImagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r21.user.firstName + " " + ctx_r21.user.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r21.user.online ? "Online" : "Offline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21.user.bio);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21.user.bio);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21.user.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21.user.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21.user.city || ctx_r21.user.state || ctx_r21.user.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21.user.city || ctx_r21.user.state || ctx_r21.user.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21.user.website);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21.user.website);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21.user.dribbleProfileUrl || ctx_r21.user.facebookProfileUrl || ctx_r21.user.googlePlusProfileUrl || ctx_r21.user.instagramProfileUrl || ctx_r21.user.linkedInProfileUrl || ctx_r21.user.twitterProfileUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21.user.dribbleProfileUrl || ctx_r21.user.facebookProfileUrl || ctx_r21.user.googlePlusProfileUrl || ctx_r21.user.instagramProfileUrl || ctx_r21.user.linkedInProfileUrl || ctx_r21.user.twitterProfileUrl);
} }
class UserInfoComponent {
    constructor(userService) {
        this.userService = userService;
        this.opened = false;
        this.userService.openProfile.subscribe(user => {
            if (user) {
                this.user = user;
                this.opened = true;
                document.getElementById("user-info").classList.add("mobile-open");
            }
        });
    }
    closeSidebar() {
        this.opened = false;
        document.getElementById("user-info").classList.remove("mobile-open");
    }
    ngOnInit() { }
}
UserInfoComponent.ɵfac = function UserInfoComponent_Factory(t) { return new (t || UserInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
UserInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserInfoComponent, selectors: [["", "app-user-info", ""]], attrs: _c0, decls: 1, vars: 1, consts: [["id", "contact-information", "class", "sidebar", 3, "ngClass", 4, "ngIf"], ["id", "contact-information", 1, "sidebar", 3, "ngClass"], [1, "list-inline"], [1, "list-inline-item", 3, "click"], [1, "btn", "btn-light", "sidebar-close"], [1, "ti-close"], [1, "sidebar-body"], [1, "pl-4", "pr-4", "text-center"], [1, "avatar", "avatar-xl", "mb-4", 3, "ngClass"], [1, "rounded-circle", 3, "src"], [1, "text-primary"], [1, "text-muted"], [4, "ngIf"], ["class", "pl-4 pr-4", 4, "ngIf"], [1, "pl-4", "pr-4"], ["target", "_blank", 3, "href"], [1, "list-inline", "social-links"], ["class", "list-inline-item", 4, "ngIf"], [1, "list-inline-item"], ["target", "_blank", 1, "btn", "btn-sm", "btn-floating", "btn-facebook", 3, "href"], [1, "fa", "fa-facebook"], ["target", "_blank", 1, "btn", "btn-sm", "btn-floating", "btn-twitter", 3, "href"], [1, "fa", "fa-twitter"], ["target", "_blank", 1, "btn", "btn-sm", "btn-floating", "btn-dribbble", 3, "href"], [1, "fa", "fa-dribbble"], ["target", "_blank", 1, "btn", "btn-sm", "btn-floating", "btn-linkedin", 3, "href"], [1, "fa", "fa-linkedin"], ["target", "_blank", 1, "btn", "btn-sm", "btn-floating", "btn-google", 3, "href"], [1, "fa", "fa-google"], ["target", "_blank", 1, "btn", "btn-sm", "btn-floating", "btn-instagram", 3, "href"], [1, "fa", "fa-instagram"]], template: function UserInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UserInfoComponent_div_0_Template, 26, 20, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1pbmZvL3VzZXItaW5mby5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "[app-user-info]",
                templateUrl: "./user-info.component.html",
                styleUrls: ["./user-info.component.scss"]
            }]
    }], function () { return [{ type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/user-profile-image/user-profile-image.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/user-profile-image/user-profile-image.component.ts ***!
  \*******************************************************************************/
/*! exports provided: UserProfileImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileImageComponent", function() { return UserProfileImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class UserProfileImageComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
UserProfileImageComponent.ɵfac = function UserProfileImageComponent_Factory(t) { return new (t || UserProfileImageComponent)(); };
UserProfileImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserProfileImageComponent, selectors: [["app-user-profile-image"]], decls: 2, vars: 0, template: function UserProfileImageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "user-profile-image works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1wcm9maWxlLWltYWdlL3VzZXItcHJvZmlsZS1pbWFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProfileImageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-profile-image',
                templateUrl: './user-profile-image.component.html',
                styleUrls: ['./user-profile-image.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");






class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        return this.authService.isLoggedIn();
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/helper/PeerConnection.ts":
/*!******************************************!*\
  !*** ./src/app/helper/PeerConnection.ts ***!
  \******************************************/
/*! exports provided: PeerConnection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeerConnection", function() { return PeerConnection; });
class PeerConnection {
    constructor(id, track, stream, sender, processPeerStream) {
        this.id = "null";
        this.initialize = function () {
            this.createPeerConnection();
        };
        this.processSignal = function (signal) {
            switch (signal.type) {
                case PeerConnectionSignalType.Offer:
                    this.processOffer(signal.data);
                    break;
                case PeerConnectionSignalType.Answer:
                    this.processAnswer(signal.data);
                    break;
                case PeerConnectionSignalType.Candidate:
                    this.processCandidate(signal.data);
                    break;
            }
        };
        this.createPeerConnection = function (flag = true) {
            this.pc = new RTCPeerConnection(PeerConnection.getPeerConnectionConfig());
            if (this.track)
                this.pc.addTrack(this.track, this.stream);
            this.pc.onicecandidate = this.handleIceCandidate.bind(this);
            this.pc.onaddstream = this.handleRemoteStreamAdded.bind(this);
            this.pc.onremovestream = this.handleRemoteStreamRemoved.bind(this);
            this.pc.onconnectionstatechange = this.handlePeerConnectionStateChange.bind(this);
            if (flag)
                this.pc.createOffer(this.setLocalAndSendOffer.bind(this), this.handleCreateOfferError.bind(this));
        };
        this.handleRemoteStreamAdded = function (e) {
            this.addLog("handleRemoteStreamAdded", e);
            if (this.processPeerStream) {
                this.processPeerStream(this.id, e.stream);
            }
        };
        this.handleRemoteStreamRemoved = function (e) {
            if (this.processPeerStream) {
                this.processPeerStream(this.id, null);
            }
            //this.addLog("handleRemoteStreamRemoved", e);
        };
        this.handlePeerConnectionStateChange = function (event) {
            switch (this.pc.connectionState) {
                case "connected":
                    // The connection has become fully connected
                    break;
                case "disconnected":
                case "failed":
                    this.pc.close();
                    break;
                case "closed":
                    if (this.processPeerStream) {
                        this.pc.close();
                    }
                    break;
            }
        };
        this.setLocalAndSendOffer = function (sessionDescription) {
            this.pc.setLocalDescription(sessionDescription);
            this.sendSignal(PeerConnectionSignalType.Offer, sessionDescription);
        };
        this.handleCreateOfferError = function (event) {
            this.addLog("createOffer() error: ", event);
        };
        this.processOffer = function (offer) {
            if (!this.pc)
                this.createPeerConnection(false);
            this.pc.setRemoteDescription(new RTCSessionDescription(offer));
            //this.addLog("Sending answer to peer.");
            this.pc
                .createAnswer()
                .then(this.setLocalAndSendAnswer.bind(this), this.onCreateSessionDescriptionError.bind(this));
        };
        this.setLocalAndSendAnswer = function (sessionDescription) {
            this.pc.setLocalDescription(sessionDescription);
            //this.addLog("setLocalAndSendAnswer sending message", sessionDescription);
            this.sendSignal(PeerConnectionSignalType.Answer, sessionDescription);
        };
        this.onCreateSessionDescriptionError = function (error) {
            this.addLog("Failed to create session description: " + error.toString());
        };
        this.processAnswer = function (data) {
            this.pc.setRemoteDescription(new RTCSessionDescription(data));
        };
        this.handleIceCandidate = function (event) {
            // this.addLog("icecandidate event: ", event);
            if (event.candidate) {
                this.sendSignal(PeerConnectionSignalType.Candidate, {
                    type: "candidate",
                    label: event.candidate.sdpMLineIndex,
                    id: event.candidate.sdpMid,
                    candidate: event.candidate.candidate,
                });
            }
            else {
                //this.addLog("End of candidates.");
            }
        };
        this.processCandidate = function (data) {
            var candidate = new RTCIceCandidate({
                sdpMLineIndex: data.label,
                candidate: data.candidate,
            });
            this.pc.addIceCandidate(candidate);
        };
        this.addLog = function (...arg) {
            console.log(...arg);
        };
        this.sendSignal = function (type, signal) {
            this.sender({
                id: this.id,
                type: type,
                data: signal,
            });
        };
        this.id = id;
        this.track = track;
        this.stream = stream;
        this.sender = sender;
        this.processPeerStream = processPeerStream;
    }
    static getPeerConnectionConfig() {
        return {
            iceServers: [
                {
                    urls: "stun:stun.l.google.com:19302",
                },
            ],
        };
    }
    closeConnection() {
        if (this.track)
            this.track.stop();
        this.pc.close();
    }
}
class PeerConnectionSignal {
}
var PeerConnectionSignalType;
(function (PeerConnectionSignalType) {
    PeerConnectionSignalType[PeerConnectionSignalType["Offer"] = 1] = "Offer";
    PeerConnectionSignalType[PeerConnectionSignalType["Answer"] = 2] = "Answer";
    PeerConnectionSignalType[PeerConnectionSignalType["Candidate"] = 3] = "Candidate";
})(PeerConnectionSignalType || (PeerConnectionSignalType = {}));


/***/ }),

/***/ "./src/app/models/call.ts":
/*!********************************!*\
  !*** ./src/app/models/call.ts ***!
  \********************************/
/*! exports provided: CallSignal, CallSignalType, CallStatus, OngoingCall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallSignal", function() { return CallSignal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallSignalType", function() { return CallSignalType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallStatus", function() { return CallStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OngoingCall", function() { return OngoingCall; });
class CallSignal {
}
var CallSignalType;
(function (CallSignalType) {
    CallSignalType[CallSignalType["IncomingCall"] = 1] = "IncomingCall";
})(CallSignalType || (CallSignalType = {}));
var CallStatus;
(function (CallStatus) {
    CallStatus[CallStatus["Idle"] = 1] = "Idle";
    CallStatus[CallStatus["Incoming"] = 2] = "Incoming";
    CallStatus[CallStatus["Outgoing"] = 3] = "Outgoing";
    CallStatus[CallStatus["InCall"] = 4] = "InCall";
})(CallStatus || (CallStatus = {}));
class OngoingCall {
}


/***/ }),

/***/ "./src/app/models/message.ts":
/*!***********************************!*\
  !*** ./src/app/models/message.ts ***!
  \***********************************/
/*! exports provided: MessageType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageType", function() { return MessageType; });
var MessageType;
(function (MessageType) {
    MessageType[MessageType["Text"] = 1] = "Text";
    MessageType[MessageType["Image"] = 2] = "Image";
    MessageType[MessageType["File"] = 3] = "File";
    MessageType[MessageType["Video"] = 4] = "Video";
    MessageType[MessageType["Url"] = 5] = "Url";
    MessageType[MessageType["InitiateCall"] = 6] = "InitiateCall";
    MessageType[MessageType["AcceptCall"] = 7] = "AcceptCall";
    MessageType[MessageType["RejectCall"] = 8] = "RejectCall";
    MessageType[MessageType["Disconnect"] = 9] = "Disconnect";
    MessageType[MessageType["Busy"] = 10] = "Busy";
    MessageType[MessageType["Offer"] = 11] = "Offer";
    MessageType[MessageType["Answer"] = 12] = "Answer";
    MessageType[MessageType["Candidate"] = 13] = "Candidate";
})(MessageType || (MessageType = {}));


/***/ }),

/***/ "./src/app/models/signal.ts":
/*!**********************************!*\
  !*** ./src/app/models/signal.ts ***!
  \**********************************/
/*! exports provided: OutgoingSignal, IncomingSignal, SignalType, OutgoingSignalData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutgoingSignal", function() { return OutgoingSignal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomingSignal", function() { return IncomingSignal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignalType", function() { return SignalType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutgoingSignalData", function() { return OutgoingSignalData; });
class OutgoingSignal {
}
class IncomingSignal {
}
var SignalType;
(function (SignalType) {
    SignalType[SignalType["register"] = 1] = "register";
    SignalType[SignalType["message"] = 2] = "message";
    SignalType[SignalType["call"] = 3] = "call";
})(SignalType || (SignalType = {}));
class OutgoingSignalData {
}


/***/ }),

/***/ "./src/app/models/stream.ts":
/*!**********************************!*\
  !*** ./src/app/models/stream.ts ***!
  \**********************************/
/*! exports provided: StreamOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreamOptions", function() { return StreamOptions; });
var StreamOptions;
(function (StreamOptions) {
    StreamOptions[StreamOptions["Audio"] = 1] = "Audio";
    StreamOptions[StreamOptions["Video"] = 2] = "Video";
})(StreamOptions || (StreamOptions = {}));


/***/ }),

/***/ "./src/app/pipes/filter.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FilterPipe {
    transform(items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter((it) => {
            return (it.firstName + " " + it.lastName)
                .toLowerCase()
                .includes(searchText);
        });
    }
}
FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
FilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filter", type: FilterPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: "filter",
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pipes/message.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/message.pipe.ts ***!
  \***************************************/
/*! exports provided: MessagePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagePipe", function() { return MessagePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MessagePipe {
    transform(items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter((it) => {
            return it.content
                .toLowerCase()
                .includes(searchText);
        });
    }
}
MessagePipe.ɵfac = function MessagePipe_Factory(t) { return new (t || MessagePipe)(); };
MessagePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "message", type: MessagePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessagePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'message'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pipes/time-ago.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/time-ago.pipe.ts ***!
  \****************************************/
/*! exports provided: TimeAgoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeAgoPipe", function() { return TimeAgoPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var javascript_time_ago__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! javascript-time-ago */ "./node_modules/javascript-time-ago/index.js");
/* harmony import */ var javascript_time_ago_locale_en__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! javascript-time-ago/locale/en */ "./node_modules/javascript-time-ago/locale/en/index.js");
/* harmony import */ var javascript_time_ago_locale_en__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(javascript_time_ago_locale_en__WEBPACK_IMPORTED_MODULE_2__);


// Load locale-specific relative date/time formatting rules.


// Add locale-specific relative date/time formatting rules.
javascript_time_ago__WEBPACK_IMPORTED_MODULE_1__["default"].addLocale(javascript_time_ago_locale_en__WEBPACK_IMPORTED_MODULE_2___default.a);
class TimeAgoPipe {
    constructor() {
        this.timeAgo = new javascript_time_ago__WEBPACK_IMPORTED_MODULE_1__["default"]("en-US");
    }
    transform(value, ...args) {
        return this.timeAgo.format(new Date(value));
    }
}
TimeAgoPipe.ɵfac = function TimeAgoPipe_Factory(t) { return new (t || TimeAgoPipe)(); };
TimeAgoPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "timeAgo", type: TimeAgoPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimeAgoPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'timeAgo'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/ngx-cookie-service.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");








class ApiService {
    constructor(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
    }
    get httpOptions() {
        return { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Authorization': this.cookieService.get('token') }) };
    }
    ;
    get(path) {
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(o => {
            this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].SERVER_URL}${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_PATH}${path}`, this.httpOptions)
                .subscribe(d => {
                o.next(d);
            }, e => {
                o.next(e);
            });
        });
    }
    post(path, data) {
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(o => {
            this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].SERVER_URL}${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_PATH}${path}`, data, this.httpOptions)
                .subscribe(d => {
                o.next(d);
            }, e => {
                o.next(e);
            });
        });
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/ngx-cookie-service.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var _models_signal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/signal */ "./src/app/models/signal.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");















class AuthService {
    constructor(apiService, cookieService, userService, socketService, router) {
        this.apiService = apiService;
        this.cookieService = cookieService;
        this.userService = userService;
        this.socketService = socketService;
        this.router = router;
        this.loggedInUserId = 0;
    }
    isLoggedIn() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]((ob) => {
            if (this.loggedInUserId)
                ob.next(true);
            else {
                this.apiService.get("/user/profile").subscribe((res) => {
                    if (res.success) {
                        this.userService.setUser(res.data.user);
                        this.registerUserOnSocker(this.cookieService.get("token"));
                        this.loggedInUserId = res.data.user.userId;
                        ob.next(true);
                    }
                    else {
                        this.router.navigate(["/login"]);
                        ob.next(false);
                    }
                });
            }
        });
    }
    logOut() {
        this.cookieService.delete("token");
        this.socketService.logout();
    }
    authenticate(cred) {
        cred.password = crypto_js__WEBPACK_IMPORTED_MODULE_5__["SHA256"](cred.password).toString();
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create((o) => {
            this.apiService.post("/authenticate", cred).subscribe((res) => {
                if (res.success) {
                    window["$"](".loader-container").show();
                    this.setToken(res.data.token);
                    setTimeout(() => {
                        this.registerUserOnSocker(res.data.token);
                    }, 0);
                    if (!res.data.user.profileImagePath) {
                        res.data.user.profileImagePath = `https://ui-avatars.com/api/?name=${res.data.user.firstName}+${res.data.user.lastName}&background=0D8ABC&color=fff&rounded=true&size=150`;
                    }
                    this.userService.setUser(res.data.user);
                    o.next(true);
                }
                else {
                    o.next(false);
                }
            });
        });
    }
    setToken(token) {
        this.cookieService.set("token", token);
    }
    registerUserOnSocker(token) {
        let signal = new _models_signal__WEBPACK_IMPORTED_MODULE_7__["OutgoingSignal"]();
        signal.type = _models_signal__WEBPACK_IMPORTED_MODULE_7__["SignalType"].register;
        signal.data = new _models_signal__WEBPACK_IMPORTED_MODULE_7__["OutgoingSignalData"]();
        signal.data.message = token;
        this.socketService.sendSignal(signal);
    }
    register(user) {
        user.password = crypto_js__WEBPACK_IMPORTED_MODULE_5__["SHA256"](user.password).toString();
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create((o) => {
            this.apiService.post("/register", user).subscribe((res) => {
                if (res.success) {
                    window["$"](".loader-container").show();
                    this.setToken(res.data.token);
                    this.registerUserOnSocker(res.data.token);
                    this.userService.setUser(res.data.user);
                    o.next(true);
                }
                else {
                    o.next(false);
                }
            });
        });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_socket_service__WEBPACK_IMPORTED_MODULE_6__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] }, { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }, { type: _socket_service__WEBPACK_IMPORTED_MODULE_6__["SocketService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/call.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/call.service.ts ***!
  \******************************************/
/*! exports provided: CallService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallService", function() { return CallService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models_signal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/signal */ "./src/app/models/signal.ts");
/* harmony import */ var _models_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/message */ "./src/app/models/message.ts");
/* harmony import */ var _models_call__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/call */ "./src/app/models/call.ts");
/* harmony import */ var _helper_PeerConnection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helper/PeerConnection */ "./src/app/helper/PeerConnection.ts");
/* harmony import */ var _models_stream__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/stream */ "./src/app/models/stream.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");













var pcConfig = _helper_PeerConnection__WEBPACK_IMPORTED_MODULE_7__["PeerConnection"].getPeerConnectionConfig();
// Set up audio and video regardless of what devices are present.
var sdpConstraints = {
    offerToReceiveAudio: true,
    offerToReceiveVideo: true,
};
const dataChannelOptions = {
    ordered: true,
    maxPacketLifeTime: 30000,
};
class CallService {
    constructor(socketService, userService) {
        this.socketService = socketService;
        this.userService = userService;
        this.incomingCall = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});
        this.maximizeWindow = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.localStreamSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});
        this.remoteStreamSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});
        this.streamSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});
        this.isMaximizedWindow = false;
        this.localPeer = {};
        this.peer = {};
        this.ongoingCall = new _models_call__WEBPACK_IMPORTED_MODULE_6__["OngoingCall"]();
        this.ongoingCall.status = _models_call__WEBPACK_IMPORTED_MODULE_6__["CallStatus"].Idle;
        this.user = this.userService.getUser();
        this.socketService.event("message").subscribe((_signal) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let signal = JSON.parse(_signal);
            if (signal.type == _models_signal__WEBPACK_IMPORTED_MODULE_4__["SignalType"].call) {
                yield this.processCallSignal(signal.data);
            }
        }));
    }
    processCallSignal(callSignal) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            switch (callSignal.type) {
                case _models_message__WEBPACK_IMPORTED_MODULE_5__["MessageType"].InitiateCall:
                    if (this.ongoingCall.status === _models_call__WEBPACK_IMPORTED_MODULE_6__["CallStatus"].Idle) {
                        this.ongoingCall.status = _models_call__WEBPACK_IMPORTED_MODULE_6__["CallStatus"].Incoming;
                        this.incomingCall.next(callSignal.from);
                    }
                    else {
                        this.sendCallSignal(callSignal.from, _models_message__WEBPACK_IMPORTED_MODULE_5__["MessageType"].Busy);
                    }
                    break;
                case _models_message__WEBPACK_IMPORTED_MODULE_5__["MessageType"].Busy:
                    this.ongoingCall.status = _models_call__WEBPACK_IMPORTED_MODULE_6__["CallStatus"].Idle;
                    this.addLog("busy");
                    break;
                case _models_message__WEBPACK_IMPORTED_MODULE_5__["MessageType"].RejectCall:
                    this.ongoingCall.status = _models_call__WEBPACK_IMPORTED_MODULE_6__["CallStatus"].Idle;
                    this.addLog("rejected");
                    break;
                case _models_message__WEBPACK_IMPORTED_MODULE_5__["MessageType"].Disconnect:
                    this.ongoingCall.status = _models_call__WEBPACK_IMPORTED_MODULE_6__["CallStatus"].Idle;
                    this.addLog("disconnect");
                    break;
                case _models_message__WEBPACK_IMPORTED_MODULE_5__["MessageType"].AcceptCall:
                    this.ongoingCall.status = _models_call__WEBPACK_IMPORTED_MODULE_6__["CallStatus"].InCall;
                    this.ongoingCall.connectedUserId = callSignal.from;
                    this.ongoingCall.callStartTime = new Date();
                    this.addLog("accepted", this.ongoingCall);
                    this.initiateCall();
                    break;
                case _models_message__WEBPACK_IMPORTED_MODULE_5__["MessageType"].Offer:
                    this.onOffer(callSignal.data);
                    break;
                case _models_message__WEBPACK_IMPORTED_MODULE_5__["MessageType"].Answer:
                    this.hendleAnswer(callSignal.data);
                    break;
                case _models_message__WEBPACK_IMPORTED_MODULE_5__["MessageType"].Candidate:
                    this.onCandidate(callSignal.data);
                    break;
            }
        });
    }
    sendCallSignal(id, type, data = null) {
        let signal = new _models_signal__WEBPACK_IMPORTED_MODULE_4__["OutgoingSignal"]();
        signal.type = _models_signal__WEBPACK_IMPORTED_MODULE_4__["SignalType"].call;
        signal.data = new _models_signal__WEBPACK_IMPORTED_MODULE_4__["OutgoingSignalData"]();
        signal.data.to = id;
        signal.data.type = type;
        signal.data.data = data;
        signal.data.isGroupMessage = false;
        this.socketService.sendSignal(signal);
    }
    makeCall(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.localStream = yield this.requestStream(_models_stream__WEBPACK_IMPORTED_MODULE_8__["StreamOptions"].Audio);
            this.ongoingCall.status = _models_call__WEBPACK_IMPORTED_MODULE_6__["CallStatus"].Outgoing;
            this.sendCallSignal(id, _models_message__WEBPACK_IMPORTED_MODULE_5__["MessageType"].InitiateCall);
        });
    }
    disableVideo() {
        let streamId = this.user.userId + "_video";
        if (this.peer[streamId]) {
            this.peer[streamId].closeConnection();
            this.localStreamSubject.next({});
            this.peer[streamId] = null;
            this.sendSignalOverDataChannel({ type: "close", id: streamId });
        }
    }
    enableVideo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let videoStream = yield this.requestStream(_models_stream__WEBPACK_IMPORTED_MODULE_8__["StreamOptions"].Video);
            this.localStreamSubject.next(videoStream);
            let videoTrack = videoStream.getVideoTracks()[0];
            let streamId = this.user.userId + "_video";
            this.peer[streamId] = new _helper_PeerConnection__WEBPACK_IMPORTED_MODULE_7__["PeerConnection"](streamId, videoTrack, videoStream, this.dataChannerSender.bind(this), null);
            this.peer[streamId].initialize();
        });
    }
    disableScreen() {
        let streamId = this.user.userId + "_screen";
        if (this.peer[streamId]) {
            this.peer[streamId].closeConnection();
            this.peer[streamId] = null;
            this.sendSignalOverDataChannel({ type: "close", id: streamId });
        }
    }
    toggleMute() {
        let audioTrack = this.localStream.getAudioTracks()[0];
        audioTrack.enabled = !audioTrack.enabled;
    }
    enableScreen() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let videoStream = yield this.requestScreen();
            let videoTrack = videoStream.getVideoTracks()[0];
            let streamId = this.user.userId + "_screen";
            this.peer[streamId] = new _helper_PeerConnection__WEBPACK_IMPORTED_MODULE_7__["PeerConnection"](streamId, videoTrack, videoStream, this.dataChannerSender.bind(this), null);
            this.peer[streamId].initialize();
        });
    }
    toggleWindow() {
        this.isMaximizedWindow = !this.isMaximizedWindow;
        this.maximizeWindow.next(this.isMaximizedWindow);
    }
    disableAudio() { }
    disconnect() {
        this.sendSignalOverDataChannel({ type: "disconnect" });
        this.closeAllConnections();
    }
    closeAllConnections() {
        this.disableScreen();
        this.disableVideo();
        this.dataChannel.close();
        this.dataChannel = null;
        this.pc.close();
        this.pc = null;
        let audioTrack = this.localStream.getAudioTracks()[0];
        audioTrack.stop();
        this.localStreamSubject.next({});
        this.remoteStreamSubject.next({});
        this.ongoingCall.status = _models_call__WEBPACK_IMPORTED_MODULE_6__["CallStatus"].Idle;
        this.isMaximizedWindow = false;
        this.maximizeWindow.next(this.isMaximizedWindow);
    }
    busy(id) {
        this.sendCallSignal(id, _models_message__WEBPACK_IMPORTED_MODULE_5__["MessageType"].Busy);
    }
    acceptCall(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.localStream = yield this.requestStream(_models_stream__WEBPACK_IMPORTED_MODULE_8__["StreamOptions"].Audio);
            this.ongoingCall.status = _models_call__WEBPACK_IMPORTED_MODULE_6__["CallStatus"].InCall;
            this.ongoingCall.connectedUserId = id;
            this.ongoingCall.callStartTime = new Date();
            this.sendCallSignal(id, _models_message__WEBPACK_IMPORTED_MODULE_5__["MessageType"].AcceptCall);
            this.addLog("accepted", this.ongoingCall);
            this.createPeerConnection();
            let audioTrack = this.localStream.getAudioTracks()[0];
            this.pc.addTrack(audioTrack, this.localStream);
        });
    }
    rejectCall(id) {
        this.ongoingCall.status = _models_call__WEBPACK_IMPORTED_MODULE_6__["CallStatus"].Idle;
        this.sendCallSignal(id, _models_message__WEBPACK_IMPORTED_MODULE_5__["MessageType"].RejectCall);
    }
    initiateCall() {
        this.addLog(">>>>>> creating peer connection");
        this.createPeerConnection(true);
        let audioTrack = this.localStream.getAudioTracks()[0];
        this.pc.addTrack(audioTrack, this.localStream);
        this.doCall();
    }
    doCall() {
        this.addLog("Sending offer to peer");
        this.pc.createOffer(this.setLocalAndSendOffer.bind(this), this.handleCreateOfferError.bind(this));
    }
    onCandidate(message) {
        var candidate = new RTCIceCandidate({
            sdpMLineIndex: message.label,
            candidate: message.candidate,
        });
        this.pc.addIceCandidate(candidate);
    }
    onOffer(message) {
        this.pc.setRemoteDescription(new RTCSessionDescription(message));
        this.doAnswer();
    }
    doAnswer() {
        this.addLog("Sending answer to peer.");
        this.pc
            .createAnswer()
            .then(this.setLocalAndSendAnswer.bind(this), this.onCreateSessionDescriptionError.bind(this));
    }
    hendleAnswer(data) {
        this.pc.setRemoteDescription(new RTCSessionDescription(data));
    }
    setLocalAndSendAnswer(sessionDescription) {
        this.pc.setLocalDescription(sessionDescription);
        this.addLog("setLocalAndSendAnswer sending message", sessionDescription);
        this.sendCallSignal(this.ongoingCall.connectedUserId, _models_message__WEBPACK_IMPORTED_MODULE_5__["MessageType"].Answer, sessionDescription);
    }
    setLocalAndSendOffer(sessionDescription) {
        this.pc.setLocalDescription(sessionDescription);
        this.addLog("setLocalAndSendOffer sending message", sessionDescription);
        this.sendCallSignal(this.ongoingCall.connectedUserId, _models_message__WEBPACK_IMPORTED_MODULE_5__["MessageType"].Offer, sessionDescription);
    }
    onCreateSessionDescriptionError(error) {
        console.trace("Failed to create session description: " + error.toString());
    }
    handleCreateOfferError(event) {
        this.addLog("createOffer() error: ", event);
    }
    requestStream(op) {
        return new Promise((resolve, reject) => {
            let audio = false;
            let video = false;
            if (op == _models_stream__WEBPACK_IMPORTED_MODULE_8__["StreamOptions"].Audio)
                audio = true;
            if (op == _models_stream__WEBPACK_IMPORTED_MODULE_8__["StreamOptions"].Video)
                video = true;
            window["navigator"].mediaDevices
                .getUserMedia({
                audio: audio,
                video: video,
            })
                .then((stream) => {
                this.addLog("Adding local stream.");
                resolve(stream);
            })
                .catch(function (e) {
                alert("getUserMedia() error: " + e.name);
                reject();
            });
        });
    }
    requestScreen() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let captureStream = null;
            var displayMediaStreamConstraints = {
                video: true,
            };
            try {
                if (navigator.mediaDevices["getDisplayMedia"]) {
                    captureStream = yield navigator.mediaDevices["getDisplayMedia"](displayMediaStreamConstraints);
                }
                else {
                    captureStream = yield navigator["getDisplayMedia"](displayMediaStreamConstraints);
                }
            }
            catch (err) {
                console.error("Error: " + err);
            }
            return captureStream;
        });
    }
    addLog(...arg) {
        //console.log(...arg);
    }
    createPeerConnection(createDC = false) {
        try {
            this.pc = new RTCPeerConnection(pcConfig);
            window["pc"] = this.pc;
            if (createDC)
                this.createDataChannel();
            this.pc.onicecandidate = this.handleIceCandidate.bind(this);
            this.pc.onaddstream = this.handleRemoteStreamAdded.bind(this);
            this.pc.ondatachannel = this.onDataChannel.bind(this);
            this.pc.onremovestream = this.handleRemoteStreamRemoved.bind(this);
            this.pc.onconnectionstatechange = this.handlePeerConnectionStateChange.bind(this);
            this.addLog("Created RTCPeerConnnection");
        }
        catch (e) {
            this.addLog("Failed to create PeerConnection, exception: " + e.message);
            alert("Cannot create RTCPeerConnection object.");
            return;
        }
    }
    onDataChannel(event) {
        this.addLog("data channel created");
        if (!this.dataChannel) {
            this.addLog(event);
            this.dataChannel = event.channel;
            this.attachEventsToDataChannel();
        }
    }
    handlePeerConnectionStateChange(event) {
        switch (this.pc.connectionState) {
            case "connected":
                // The connection has become fully connected
                break;
            case "disconnected":
            case "failed":
                this.callDesconnected();
                break;
            case "closed":
                this.callDesconnected();
                break;
        }
    }
    callDesconnected() {
        this.remoteStreamSubject.next({});
        this.ongoingCall.status = _models_call__WEBPACK_IMPORTED_MODULE_6__["CallStatus"].Idle;
        //alert("failed 2");
    }
    handleIceCandidate(event) {
        this.addLog("icecandidate event: ", event);
        if (event.candidate) {
            this.sendCallSignal(this.ongoingCall.connectedUserId, _models_message__WEBPACK_IMPORTED_MODULE_5__["MessageType"].Candidate, {
                type: "candidate",
                label: event.candidate.sdpMLineIndex,
                id: event.candidate.sdpMid,
                candidate: event.candidate.candidate,
            });
        }
        else {
            this.addLog("End of candidates.");
        }
    }
    handleRemoteStreamAdded(event) {
        this.addLog("Remote stream added.");
        this.remoteStream = event.stream;
        this.remoteStreamSubject.next(this.remoteStream);
    }
    handleRemoteStreamRemoved(event) {
        this.remoteStreamSubject.next(null);
        this.addLog("Remote stream removed. Event: ", event);
    }
    createDataChannel() {
        if (!this.dataChannel) {
            this.dataChannel = this.pc.createDataChannel("test");
            this.attachEventsToDataChannel();
            window["dc"] = this.dataChannel;
        }
    }
    attachEventsToDataChannel() {
        this.addLog("called");
        this.dataChannel.onerror = (error) => {
            this.addLog("Data Channel Error:", error);
        };
        this.dataChannel.addEventListener("message", (event) => {
            const message = event.data;
            let signal = JSON.parse(message);
            if (signal.type == "dc") {
                let data = JSON.parse(signal.data);
                if (!this.peer[data.id]) {
                    this.peer[data.id] = new _helper_PeerConnection__WEBPACK_IMPORTED_MODULE_7__["PeerConnection"](data.id, null, null, this.dataChannerSender.bind(this), this.processPeerStream.bind(this));
                }
                this.peer[data.id].processSignal(data);
            }
            else if (signal.type == "close") {
                this.closePeerConnection(signal);
            }
            else if (signal.type == "disconnect") {
                this.closeAllConnections();
            }
            this.addLog("Got Data Channel Message:", event.data);
        });
        this.dataChannel.onopen = () => {
            this.addLog(arguments);
        };
        this.dataChannel.onclose = () => {
            this.addLog("The Data Channel is Closed");
        };
    }
    processPeerStream(id, stream) {
        this.streamSubject.next({ id: id, stream: stream });
    }
    closePeerConnection(data) {
        this.peer[data.id].closeConnection();
        this.peer[data.id] = null;
        this.streamSubject.next({ id: data.id, stream: null });
    }
    dataChannerSender(data) {
        let signal = {
            type: "dc",
            data: JSON.stringify(data),
        };
        this.sendSignalOverDataChannel(signal);
    }
    sendSignalOverDataChannel(signal) {
        if (this.dataChannel)
            this.dataChannel.send(JSON.stringify(signal));
    }
}
CallService.ɵfac = function CallService_Factory(t) { return new (t || CallService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"])); };
CallService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CallService, factory: CallService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CallService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"] }, { type: _user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/chat.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/chat.service.ts ***!
  \******************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var _models_signal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/signal */ "./src/app/models/signal.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notification.service */ "./src/app/services/notification.service.ts");












class ChatService {
    constructor(apiService, socketService, userService, notificationService) {
        this.apiService = apiService;
        this.socketService = socketService;
        this.userService = userService;
        this.notificationService = notificationService;
        this.activeUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.activeMessages = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.searchSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]("");
        this._metadata = {};
        this.messages = { users: {}, groups: {} };
        this.user = this.userService.getUser();
        this.userService.userSubject.subscribe((user) => {
            this.user = user;
        });
        this.socketService.event("message").subscribe((_signal) => {
            let signal = JSON.parse(_signal);
            if (signal.type == _models_signal__WEBPACK_IMPORTED_MODULE_4__["SignalType"].message) {
                let msg = signal.data;
                if (msg) {
                    let message = this.formatMessage(msg.message, msg.type, msg.from, msg.to);
                    this.pushMessage(message, true);
                    if (msg.from !== this._activeUser.userId) {
                        this.trigerNotification(msg);
                    }
                }
            }
        });
    }
    trigerNotification(msg) {
        let user = this.userService.getUserByUserId(msg.from);
        this.notificationService.info(user.firstName, msg.message);
    }
    createGroup(data) {
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create((ob) => {
            this.apiService.post("/group/create", data).subscribe((res) => {
                ob.next(res.success);
            });
        });
    }
    updateSearchQuery(query) {
        this.searchSubject.next(query);
    }
    getUrlMetadata(url) {
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create((ob) => {
            if (this._metadata[url]) {
                ob.next(this._metadata[url]);
            }
            else {
                this.apiService.post("/metadata/get", { url }).subscribe((res) => {
                    this._metadata[url] = res;
                    ob.next(res);
                });
            }
        });
    }
    setActiveUser(user) {
        this._activeUser = user;
        this.activeUserSubject.next(this._activeUser);
        if (!this.messages.users[this._activeUser.userId]) {
            this.initializeChat(this._activeUser.userId, false);
            this.refreshChatWindow();
            this.apiService
                .post("/chat/messages", { isGroup: false, id: this._activeUser.userId })
                .subscribe((response) => {
                if (response.success) {
                    this.messages.users[this._activeUser.userId].fetchStatus = true;
                    response.data.messages.forEach((msg) => {
                        this.messages.users[this._activeUser.userId].chat.push(this.formatMessage(msg.message, msg.messageType, msg.senderId, msg.receiverId, new Date(msg.sendDate)));
                    });
                }
                this.refreshChatWindow();
            });
        }
        else
            this.refreshChatWindow();
        this.userService.resetUnreadCount(this._activeUser.userId);
    }
    getTimeStamp(date) {
        return date.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
        });
    }
    //send message
    sendMessage(text, type) {
        let message = this.formatMessage(text, type);
        let signal = new _models_signal__WEBPACK_IMPORTED_MODULE_4__["OutgoingSignal"]();
        signal.type = _models_signal__WEBPACK_IMPORTED_MODULE_4__["SignalType"].message;
        signal.data = new _models_signal__WEBPACK_IMPORTED_MODULE_4__["OutgoingSignalData"]();
        signal.data.type = message.type;
        signal.data.message = message.content;
        signal.data.to = this._activeUser.userId;
        signal.data.isGroupMessage = false;
        this.socketService.sendSignal(signal);
        this.pushMessage(message);
    }
    formatMessage(text, type, from = this.user.userId, to = this._activeUser.userId, timestamp = new Date()) {
        return {
            timeStamp: timestamp,
            to: to,
            content: text,
            type: type,
            from: from,
        };
    }
    refreshChatWindow() {
        if (!this.messages.users[this._activeUser.userId])
            this.initializeChat(this._activeUser.userId, false);
        this.activeMessages.next(this.messages.users[this._activeUser.userId].chat);
    }
    initializeChat(id, isGroup) {
        this.messages[isGroup ? "group" : "users"][id] = {
            fetchStatus: false,
            chat: [],
        };
    }
    pushMessage(msg, incoming = false) {
        if (!this.messages.users[incoming ? msg.from : msg.to]) {
            this.initializeChat(incoming ? msg.from : msg.to, false);
        }
        this.messages.users[incoming ? msg.from : msg.to].chat.push(msg);
        this.userService.updateLastMessage(msg, this._activeUser.userId);
        this.refreshChatWindow();
    }
    uploadFile(file) {
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create((ob) => {
            const formData = new FormData();
            formData.append("file", file, file.name);
            this.apiService.post("/file/upload", formData).subscribe((res) => {
                if (res.success)
                    ob.next(res.data);
            }, () => {
                ob.next(false);
            });
        });
    }
    isValidUrl(string) {
        try {
            new URL(string);
            return true;
        }
        catch (_) {
            return false;
        }
    }
}
ChatService.ɵfac = function ChatService_Factory(t) { return new (t || ChatService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"])); };
ChatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChatService, factory: ChatService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }, { type: _socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"] }, { type: _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }, { type: _notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/notification.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/notification.service.ts ***!
  \**************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NotificationService {
    constructor() {
    }
    info(title, message) {
        this.triggerNotification("info", title, message);
    }
    success(title, message) {
        this.triggerNotification("success", title, message);
    }
    failure(title, message) {
        this.triggerNotification("error", title, message);
    }
    triggerNotification(type, title, message) {
        window["$"].ambiance({
            message: message,
            title: title,
            type: type
        });
    }
}
NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(); };
NotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotificationService, factory: NotificationService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/socket.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/socket.service.ts ***!
  \********************************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/__ivy_ngcc__/fesm2015/ngx-socket-io.js");




class SocketService {
    constructor(socket) {
        this.socket = socket;
    }
    event(event) {
        return this.socket.fromEvent(event);
    }
    sendSignal(data, event = "message") {
        let signal = JSON.stringify(data);
        this.socket.emit(event, signal);
    }
    logout() {
        this.socket.emit("logout");
    }
}
SocketService.ɵfac = function SocketService_Factory(t) { return new (t || SocketService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__["Socket"])); };
SocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SocketService, factory: SocketService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocketService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return [{ type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__["Socket"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var _models_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/message */ "./src/app/models/message.ts");











class UserService {
    constructor(apiService, router, socketService) {
        this.apiService = apiService;
        this.router = router;
        this.socketService = socketService;
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.activeUsers = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.openProfile = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.users = [];
        this.socketService.event("statusupdate").subscribe((update) => {
            let data = JSON.parse(update);
            this.users.map((user) => {
                if (user.userId == data.userId) {
                    user.online = data.status;
                }
                return user;
            });
            this.activeUsers.next(this.users);
        });
    }
    viewProfile(id) {
        console.log(this.users.filter((u) => u.userId == id));
        this.openProfile.next(this.users.filter((u) => u.userId == id)[0]);
    }
    setUser(user) {
        if (!user.profileImagePath) {
            user.profileImagePath = `https://ui-avatars.com/api/?name=${user.firstName}+${user.lastName}&background=0D8ABC&color=fff&rounded=true&size=150`;
        }
        else {
            user.profileImagePath = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].SERVER_URL + user.profileImagePath;
        }
        this._user = user;
        this.populateUser();
        this.userSubject.next(user);
        document.title = `${user.firstName} ${user.lastName} - ChatApp`;
        this.getAllUsers();
    }
    populateUser() {
        this.apiService.get("/user/profile").subscribe((res) => {
            if (res.success) {
                if (!res.data.user.profileImagePath) {
                    res.data.user.profileImagePath = `https://ui-avatars.com/api/?name=${res.data.user.firstName}+${res.data.user.lastName}&background=0D8ABC&color=fff&rounded=true&size=150`;
                }
                else {
                    res.data.user.profileImagePath =
                        src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].SERVER_URL + res.data.user.profileImagePath;
                }
                this._user = res.data.user;
                this.userSubject.next(this._user);
            }
            else {
                this.router.navigate(["/login"]);
            }
        });
    }
    getActiveUsers() {
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create((o) => {
            this.apiService.get("/user/active-users").subscribe((res) => {
                if (res.success)
                    o.next(this.processUsers(res.data.users));
                else
                    o.next([]);
            });
        });
    }
    getUserByUserId(id) {
        return this.users.filter((user) => user.userId == id)[0];
    }
    getAllUsers() {
        this.apiService.get("/user/active-users").subscribe((res) => {
            if (res.success) {
                this.users = this.processUsers(res.data.users);
                this.activeUsers.next(this.users);
            }
        });
    }
    updateLastMessage(message, activeUserId) {
        let content = message.content;
        for (let index = 0; index < this.users.length; index++) {
            if (this.users[index].userId === message.from ||
                this.users[index].userId === message.to) {
                if (message.type === _models_message__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Image ||
                    message.type === _models_message__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Video ||
                    message.type === _models_message__WEBPACK_IMPORTED_MODULE_6__["MessageType"].File) {
                    content = message.content.split("/").slice(-1).pop();
                }
                this.users[index].lastMessage = {
                    message: content,
                    messageType: message.type,
                    sendDate: message.timeStamp,
                };
                if (!this.users[index].unreadCount) {
                    this.users[index].unreadCount = 0;
                }
                if (!(message.from === activeUserId || message.to === activeUserId))
                    this.users[index].unreadCount += 1;
            }
        }
    }
    resetUnreadCount(id) {
        for (let index = 0; index < this.users.length; index++) {
            if (this.users[index].userId === id) {
                this.users[index].unreadCount = 0;
            }
        }
    }
    updateUserProfile(data, image = null) {
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create((ob) => {
            const formData = new FormData();
            if (image)
                formData.append("file", image, image.name);
            formData.append("data", JSON.stringify(data));
            this.apiService.post("/user/update-profile", formData).subscribe((res) => {
                if (res.success)
                    this.populateUser();
                ob.next(res.success);
            }, (err) => {
                ob.next(false);
            });
        });
    }
    getUser() {
        return this._user;
    }
    processUsers(users) {
        users.forEach((user) => this.processUser(user));
        return users;
    }
    processUser(user) {
        if (user.profileImagePath &&
            user.profileImagePath.indexOf("https://ui-avatars.com") === -1) {
            user.profileImagePath = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].SERVER_URL}${user.profileImagePath}`;
        }
        else
            user.profileImagePath = `https://ui-avatars.com/api/?name=${user.firstName}+${user.lastName}&background=0D8ABC&color=fff&rounded=true&size=150`;
        return user;
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    SERVER_URL: "https://soho-chat.herokuapp.com",
    API_PATH: "/v1"
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    SERVER_URL: "https://soho-chat.herokuapp.com",
    API_PATH: "/v1"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Work\Code\Chat-App-GM\chat-app-server\client\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map