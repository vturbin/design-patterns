"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const account_service_1 = require("./services/account.service");
const dashboard_service_1 = require("./services/dashboard.service");
const factory_service_1 = require("./services/factory.service");
const login_service_1 = require("./services/login.service");
const product_service_1 = require("./services/product.service");
const app_routing_module_1 = require("./app-routing.module");
const app_component_1 = require("./app.component");
const orders_component_1 = require("./orders/orders.component");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, core_1.NgModule)({
        declarations: [
            app_component_1.AppComponent,
            orders_component_1.OrdersComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule
        ],
        providers: [factory_service_1.FacadeService, product_service_1.ProductsService, login_service_1.LoginService, dashboard_service_1.DashboardService, account_service_1.AccountService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
