"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacadeService = void 0;
const core_1 = require("@angular/core");
const account_service_1 = require("./account.service");
const dashboard_service_1 = require("./dashboard.service");
const login_service_1 = require("./login.service");
const product_service_1 = require("./product.service");
let FacadeService = class FacadeService {
    constructor(injector) {
        this.injector = injector;
    }
    get accountService() {
        if (!this._accountService) {
            this._accountService = this.injector.get(account_service_1.AccountService);
        }
        return this._accountService;
    }
    get dashboardService() {
        debugger;
        if (!this._dashboardService) {
            this._dashboardService = this.injector.get(dashboard_service_1.DashboardService);
        }
        return this._dashboardService;
    }
    get loginService() {
        if (!this._loginService) {
            this._loginService = this.injector.get(login_service_1.LoginService);
        }
        return this._loginService;
    }
    get productService() {
        if (!this._productService) {
            this._productService = this.injector.get(product_service_1.ProductsService);
        }
        return this._productService;
    }
    getOrderList() {
        return this.accountService.getOrderList();
    }
    getAddress() {
        return this.accountService.getAddress();
    }
    getDashboardContent() {
        return this.dashboardService.getDashboardContent();
    }
    isAuthenticated() {
        return this.loginService.isAuthenticated();
    }
    getProductDetails() {
        return this.productService.getProductDetails();
    }
    getProductOverview() {
        return this.productService.getProductOverview();
    }
};
FacadeService = __decorate([
    (0, core_1.Injectable)()
], FacadeService);
exports.FacadeService = FacadeService;
