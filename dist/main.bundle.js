webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/_services/accounts.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return OnlyLoggedInUsersGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SignupGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AccountsService = (function () {
    function AccountsService(http, router) {
        this.http = http;
        this.router = router;
        this.currentUser = localStorage.getItem('currentUser');
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.isLoggedIn = false;
        this.non_field_errors = false;
        this.SignUperrors = false;
        this.emailerrors = false;
        this.usernameerrors = false;
        this.token = "";
        this.headers.append('Content-Type', 'application/json');
        // this.headers.append('Authorization', `Token ${this.currentUser}`);
    }
    AccountsService.prototype.getisLoggedIn = function () {
        if (localStorage.getItem('currentUser')) {
            return true;
        }
        else {
            return false;
        }
    };
    AccountsService.prototype.isLoggedInn = function () {
        var data;
        data = localStorage.getItem('currentUser');
        if (data)
            return true;
        else
            return false;
    };
    AccountsService.prototype.signup = function (data) {
        var _this = this;
        var user1;
        var data1;
        var url = "https://tourofheroes-atley.herokuapp.com/api/rest-auth/registration/";
        return this.http
            .post(url, JSON.stringify(data), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            user1 = response.json()['key'];
            _this.token = user1;
            _this.SignUperrors = false;
            _this.emailerrors = false;
            _this.usernameerrors = false;
            if (user1) {
                localStorage.setItem('currentUser', user1);
            }
            data1 = localStorage.getItem('currentUser');
            _this.isLoggedIn = true;
            _this.router.navigate(['dashboard']);
            console.log(data1);
        })
            .catch(function (response) {
            user1 = response.json();
            _this.SignUperrors = true;
            if (user1.email) {
                _this.emailerrors = true;
            }
            if (user1.username) {
                _this.usernameerrors = true;
            }
        });
    };
    AccountsService.prototype.editprofile = function (data) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        // let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        //     if (currentUser) {
        //         this.headers.append({ 'Authorization': 'Bearer ' + currentUser.json });
        // }
        if (currentUser) {
            this.headers.append({ 'Authorization': 'Token ' + currentUser.json });
        }
        var url = "https://tourofheroes-atley.herokuapp.com/api/rest-auth/registration/";
        return this.http
            .post(url, JSON.stringify(data), { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AccountsService.prototype.loin = function (data) {
        var _this = this;
        var user1;
        var data1;
        var url = "https://tourofheroes-atley.herokuapp.com/api/accounts/";
        return this.http
            .post(url, JSON.stringify(data), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            user1 = response.json()['key'];
            if (user1) {
                localStorage.setItem('currentUser', user1);
            }
            data1 = localStorage.getItem('currentUser');
            _this.router.navigate(['dashboard']);
            console.log(data1);
        })
            .catch(this.handleError);
    };
    AccountsService.prototype.login = function (data) {
        var _this = this;
        var user1;
        var data1;
        var url = "https://tourofheroes-atley.herokuapp.com/api/rest-auth/login/";
        return this.http
            .post(url, JSON.stringify(data), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            user1 = response.json()['key'];
            _this.non_field_errors = false;
            _this.token = user1;
            if (user1) {
                localStorage.setItem('currentUser', user1);
            }
            data1 = localStorage.getItem('currentUser');
            _this.isLoggedIn = true;
            _this.router.navigate(['dashboard']);
            console.log(data1);
        })
            .catch(function (response) {
            user1 = response.json();
            _this.non_field_errors = true;
        });
    };
    AccountsService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AccountsService.prototype.logout2 = function () {
        var _this = this;
        // remove user from local storage to log user out
        var url = "https://tourofheroes-atley.herokuapp.com/api/rest-auth/logout/";
        return this.http
            .post(url, { headers: this.headers })
            .toPromise()
            .then(function (response) {
            localStorage.removeItem('currentUser');
            _this.token = "";
            _this.isLoggedIn = false;
            _this.router.navigate(['login']);
        })
            .catch(this.handleError);
    };
    AccountsService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return AccountsService;
}());
AccountsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AccountsService);

var OnlyLoggedInUsersGuard = (function () {
    function OnlyLoggedInUsersGuard(AccountsService, router) {
        this.AccountsService = AccountsService;
        this.router = router;
    }
    ;
    OnlyLoggedInUsersGuard.prototype.canActivate = function () {
        console.log("OnlyLoggedInUsers");
        if (this.AccountsService.isLoggedInn()) {
            return true;
        }
        else {
            this.router.navigate(['login']);
            window.alert("You don't have permission to view this page");
            return false;
        }
    };
    return OnlyLoggedInUsersGuard;
}());
OnlyLoggedInUsersGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [AccountsService, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object])
], OnlyLoggedInUsersGuard);

var SignupGuard = (function () {
    function SignupGuard(AccountsService, router) {
        this.AccountsService = AccountsService;
        this.router = router;
    }
    ;
    SignupGuard.prototype.canActivate = function () {
        if (this.AccountsService.isLoggedInn()) {
            this.router.navigate(['dashboard']);
            window.alert("You are already logged in");
            return false;
        }
        else {
            return true;
        }
    };
    return SignupGuard;
}());
SignupGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [AccountsService, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
], SignupGuard);

var _a, _b, _c, _d;
//# sourceMappingURL=accounts.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/hero.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_accounts_service__ = __webpack_require__("../../../../../src/app/_services/accounts.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HeroService = (function () {
    function HeroService(http, router, AccountsService) {
        this.http = http;
        this.router = router;
        this.AccountsService = AccountsService;
        this.currentUser = localStorage.getItem('currentUser');
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.heroesUrl = 'https://tourofheroes-atley.herokuapp.com/api/heroes';
        this.isLoggedIn = false;
        // this.headers.append({}"Authorization":"Token 5a6ef85f863b259e54ad0a2651f491674923b654")
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', "Token " + this.currentUser);
    }
    HeroService.prototype.getisLoggedIn = function () {
        if (localStorage.getItem('currentUser')) {
            return true;
        }
        else {
            return false;
        }
    };
    HeroService.prototype.setisLoggedIn = function (value) {
        this.isLoggedIn = value;
    };
    HeroService.prototype.getHeroes = function () {
        var url = this.heroesUrl + "/";
        return this.http.get(url, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    HeroService.prototype.getHero = function (id) {
        var url = this.heroesUrl + "/" + id + "/";
        return this.http.get(url, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    HeroService.prototype.delete = function (id) {
        var url = this.heroesUrl + "/" + id + "/";
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    HeroService.prototype.create = function (name) {
        var url = this.heroesUrl + "/";
        return this.http
            .post(url, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    HeroService.prototype.update = function (hero) {
        var url = this.heroesUrl + "/" + hero.id + "/";
        return this.http
            .put(url, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(function () { return hero; })
            .catch(this.handleError);
    };
    HeroService.prototype.search = function (term) {
        var url = "https://tourofheroes-atley.herokuapp.com/api/search/" + term + "/";
        return this.http
            .get(url, { headers: this.headers })
            .map(function (response) { return response.json(); });
    };
    // firstname:string,lastname:string,email:string,username:string,password:string
    // JSON.stringify({firstname:firstname,lastname:lastname,email:email,username:username,password:password}
    HeroService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return HeroService;
}());
HeroService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_accounts_service__["a" /* AccountsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_accounts_service__["a" /* AccountsService */]) === "function" && _c || Object])
], HeroService);

var _a, _b, _c;
//# sourceMappingURL=hero.service.js.map

/***/ }),

/***/ "../../../../../src/app/accounts/account.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyUser; });
var MyUser = (function () {
    function MyUser() {
    }
    return MyUser;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ "../../../../../src/app/accounts/hero-form.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\"\n      integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\n<form #f=\"ngForm\" (ngSubmit)=\"onSubmit()\" style=\"padding-left:500px\">\n<!-- <div class=\"form-group\">\n  <label for=\"firstname\">First Name</label>\n  <input type=\"text\" class=\"form-control\" id=\"first_name\"\n         required\n         [(ngModel)]=\"model.first_name\" name=\"first_name\">\n</div>\n<div class=\"form-group\">\n  <label for=\"Last Name\">Last Name</label>\n  <input type=\"text\" class=\"form-control\" id=\"last_name\"\n         required\n         [(ngModel)]=\"model.last_name\" name=\"last_name\">\n</div> -->\n<br>\n<div *ngIf=\"this.AccountsService.SignUperrors\"\n     class=\"alert alert-danger\" style=\"width:400px\">\n     <div *ngIf=\"this.AccountsService.emailerrors\">\n     A user is already registered with this e-mail address.\n      </div>\n      <div *ngIf=\"this.AccountsService.usernameerrors\">\n      A user with that username already exists.\n    </div>\n</div>\n<div class=\"form-group\">\n  <label for=\"email\">Email</label>\n  <input type=\"email\" class=\"form-control\" id=\"email\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" #email=\"ngModel\"\n         required\n         [(ngModel)]=\"model.email\" name=\"email\" style=\"width:400px\">\n            <br>\n         <div *ngIf=\"email.invalid && (email.dirty || email.touched)\"\n              class=\"alert alert-danger\" style=\"width:400px\">\n\n           <div *ngIf=\"email.errors.pattern\">\n             Enter a valid Email address\n           </div>\n\n         </div>\n</div>\n\n<div class=\"form-group\">\n  <label for=\"username\">Username</label>\n  <input type=\"text\" class=\"form-control\" id=\"username\"\n         required\n         [(ngModel)]=\"model.username\" name=\"username\" #name=\"ngModel\" minlength=4 style=\"width:400px\">\n         <br>\n         <div *ngIf=\"name.invalid && (name.dirty || name.touched)\"\n              class=\"alert alert-danger\" style=\"width:400px\">\n\n           <div *ngIf=\"name.errors.required\">\n             Username is required.\n           </div>\n           <div *ngIf=\"name.errors.minlength\">\n             Username must be at least 4 characters long.\n           </div>\n\n         </div>\n\n</div>\n<div class=\"form-group\">\n  <label for=\"password1\">Password</label>\n  <input type=\"password\" class=\"form-control\" id=\"password1\" pattern=\"^(?=\\D*\\d)(?=.*?[a-zA-Z])(?=[\\w!$(),.:;?@{}\\[\\]^-]{8,}$)((.)\\2?(?!\\2))+$\"\n         required\n         [(ngModel)]=\"model.password1\" name=\"password1\" #password=\"ngModel\" minlength=8 style=\"width:400px\" >\n            <br>\n         <div *ngIf=\"password.invalid && (password.dirty && password.touched)\"\n              class=\"alert alert-danger\" style=\"width:400px\">\n\n           <div *ngIf=\"password.errors.required\">\n             Password is required.\n           </div>\n           <div *ngIf=\"password.errors.minlength\">\n             Password must be 8 characters long, we need another {{password.errors.minlength.requiredLength - password.errors.minlength.actualLength}} characters\n           </div>\n           <div *ngIf=\"password.errors.pattern\">\n             Password should contain atleat one letter and one digit.\n           </div>\n\n         </div>\n\n</div>\n<div class=\"form-group\">\n  <label for=\"password2\"> Confirm Password</label>\n        <input type=\"Password\" class=\"form-control\" id=\"password2\" required minlength=\"8\"\n            [(ngModel)] =\"model.password2\" name=\"password2\" #password2=\"ngModel\" style=\"width:400px\">\n            <br>\n        <div *ngIf=\" ((password2.touched) && (password.value!=password2.value)) \"\n             class=\"alert alert-danger\" style=\"width:400px\">\n              Password doesnot match\n        </div>\n</div>\n<button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"f.invalid\" [disabled]=\"password.value!=password2.value\" >SignUp</button>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/accounts/hero-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__account__ = __webpack_require__("../../../../../src/app/accounts/account.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_accounts_service__ = __webpack_require__("../../../../../src/app/_services/accounts.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeroFormComponent = (function () {
    function HeroFormComponent(AccountsService) {
        this.AccountsService = AccountsService;
        this.model = __WEBPACK_IMPORTED_MODULE_1__account__["a" /* MyUser */];
    }
    HeroFormComponent.prototype.onSubmit = function () {
        if (this.form.valid) {
            this.AccountsService.signup(this.form.value);
            console.log("Form Submitted!");
        }
    };
    return HeroFormComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", Object)
], HeroFormComponent.prototype, "form", void 0);
HeroFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'hero-form',
        template: __webpack_require__("../../../../../src/app/accounts/hero-form.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_accounts_service__["a" /* AccountsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_accounts_service__["a" /* AccountsService */]) === "function" && _a || Object])
], HeroFormComponent);

var _a;
//# sourceMappingURL=hero-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/accounts/login.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\"\n      integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\n<div class=\"wrapper\">\n<form #f=\"ngForm\" (ngSubmit)=\"onSubmit()\" style=\"padding-left:500px\">\n  <br>\n  <div *ngIf=\"this.AccountsService.non_field_errors\"\n       class=\"alert alert-danger\" style=\"width:400px\">\n\n  Invalid Username or Password\n\n  </div>\n<div class=\"form-group\">\n  <label for=\"username\">Username</label>\n  <input type=\"text\" class=\"form-control\" id=\"username\"\n         required\n         [(ngModel)]=\"model.username\" name=\"username\" style=\"width:400px\">\n</div>\n\n<div class=\"form-group\">\n  <label for=\"password\">Password</label>\n  <input type=\"password\" class=\"form-control\" id=\"password\"\n         required\n         [(ngModel)]=\"model.password\" name=\"password\" style=\"width:400px\">\n</div>\n<button type=\"submit\" class=\"btn btn-primary align\" [disabled]=\"f.invalid\" >Login</button>\n</form>\n</div>\n<script type=\"text/javascript\">\n  .align {\n    position: absolute;\n    top: 50%;\n}\n.wrapper {\n    text-align: center;\n}\n</script>\n"

/***/ }),

/***/ "../../../../../src/app/accounts/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__account__ = __webpack_require__("../../../../../src/app/accounts/account.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_accounts_service__ = __webpack_require__("../../../../../src/app/_services/accounts.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyLoginComponent = (function () {
    function MyLoginComponent(AccountsService) {
        this.AccountsService = AccountsService;
        this.model = __WEBPACK_IMPORTED_MODULE_1__account__["a" /* MyUser */];
    }
    MyLoginComponent.prototype.onSubmit = function () {
        if (this.form.valid) {
            this.AccountsService.login(this.form.value);
            console.log("Form Submitted!");
        }
    };
    return MyLoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", Object)
], MyLoginComponent.prototype, "form", void 0);
MyLoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'hero-login',
        template: __webpack_require__("../../../../../src/app/accounts/login.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_accounts_service__["a" /* AccountsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_accounts_service__["a" /* AccountsService */]) === "function" && _a || Object])
], MyLoginComponent);

var _a;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/accounts/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyLogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_accounts_service__ = __webpack_require__("../../../../../src/app/_services/accounts.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyLogoutComponent = (function () {
    function MyLogoutComponent(AccountsService) {
        this.AccountsService = AccountsService;
    }
    MyLogoutComponent.prototype.ngOnInit = function () {
        this.AccountsService.logout2();
        console.log("Logged out");
    };
    return MyLogoutComponent;
}());
MyLogoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'hero-login',
        template: __webpack_require__("../../../../../src/app/accounts/login.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_accounts_service__["a" /* AccountsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_accounts_service__["a" /* AccountsService */]) === "function" && _a || Object])
], MyLogoutComponent);

var _a;
//# sourceMappingURL=logout.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__heroes_dashboard_component__ = __webpack_require__("../../../../../src/app/heroes/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__heroes_heroes_component__ = __webpack_require__("../../../../../src/app/heroes/heroes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__heroes_hero_detail_component__ = __webpack_require__("../../../../../src/app/heroes/hero-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__accounts_hero_form_component__ = __webpack_require__("../../../../../src/app/accounts/hero-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__heroes_mycomponent_component__ = __webpack_require__("../../../../../src/app/heroes/mycomponent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__accounts_login_component__ = __webpack_require__("../../../../../src/app/accounts/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__accounts_logout_component__ = __webpack_require__("../../../../../src/app/accounts/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_accounts_service__ = __webpack_require__("../../../../../src/app/_services/accounts.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    // accessible only to guests
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_7__accounts_login_component__["a" /* MyLoginComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_9__services_accounts_service__["c" /* SignupGuard */]]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_7__accounts_login_component__["a" /* MyLoginComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_9__services_accounts_service__["c" /* SignupGuard */]]
    },
    {
        path: 'signup',
        component: __WEBPACK_IMPORTED_MODULE_5__accounts_hero_form_component__["a" /* HeroFormComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_9__services_accounts_service__["c" /* SignupGuard */]]
    },
    // accessible only to authenticated users
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_2__heroes_dashboard_component__["a" /* DashboardComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_9__services_accounts_service__["b" /* OnlyLoggedInUsersGuard */]]
    },
    {
        path: 'detail/:id',
        component: __WEBPACK_IMPORTED_MODULE_4__heroes_hero_detail_component__["a" /* HeroDetailComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_9__services_accounts_service__["b" /* OnlyLoggedInUsersGuard */]]
    },
    {
        path: 'heroes',
        component: __WEBPACK_IMPORTED_MODULE_3__heroes_heroes_component__["a" /* HeroesComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_9__services_accounts_service__["b" /* OnlyLoggedInUsersGuard */]]
    },
    {
        path: 'list',
        component: __WEBPACK_IMPORTED_MODULE_6__heroes_mycomponent_component__["a" /* MyComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_9__services_accounts_service__["b" /* OnlyLoggedInUsersGuard */]]
    },
    {
        path: 'logout',
        component: __WEBPACK_IMPORTED_MODULE_8__accounts_logout_component__["a" /* MyLogoutComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_9__services_accounts_service__["b" /* OnlyLoggedInUsersGuard */]]
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n  font-size: 1.2em;\n  color: #999;\n  margin-bottom: 0;\n}\nh2 {\n  font-size: 2em;\n  margin-top: 0;\n  padding-top: 0;\n}\nnav a {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n}\nnav a:visited, a:link {\n  color: #607D8B;\n}\nnav a:hover {\n  color: #039be5;\n  background-color: #CFD8DC;\n}\nnav a.active {\n  color: #039be5;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_accounts_service__ = __webpack_require__("../../../../../src/app/_services/accounts.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(AccountsService) {
        this.AccountsService = AccountsService;
        this.title = 'Tour of Heroes';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'my-app',
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        template: "\n   <h1 style=\"padding-left:70px\">{{title}}</h1>\n   <nav>\n     <div *ngIf=\"this.AccountsService.getisLoggedIn()\" style=\"padding-left:70px\">\n     <a routerLink=\"/dashboard\">Dashboard</a>\n     <a routerLink=\"/heroes\">Heroes</a>\n     <a routerLink=\"/list\">List</a>\n     <a routerLink=\"/logout\">Logout</a>\n     </div>\n     <div *ngIf=\"!this.AccountsService.getisLoggedIn()\" style=\"padding-left:70px\">\n     <a routerLink=\"/login\">Login</a>\n     <a routerLink=\"/signup\">SignUp</a>\n     </div>\n   </nav>\n   <router-outlet></router-outlet>\n "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_accounts_service__["a" /* AccountsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_accounts_service__["a" /* AccountsService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__heroes_dashboard_component__ = __webpack_require__("../../../../../src/app/heroes/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__heroes_heroes_component__ = __webpack_require__("../../../../../src/app/heroes/heroes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__heroes_hero_detail_component__ = __webpack_require__("../../../../../src/app/heroes/hero-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_hero_service__ = __webpack_require__("../../../../../src/app/_services/hero.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_accounts_service__ = __webpack_require__("../../../../../src/app/_services/accounts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__heroes_hero_search_component__ = __webpack_require__("../../../../../src/app/heroes/hero-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__accounts_hero_form_component__ = __webpack_require__("../../../../../src/app/accounts/hero-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__heroes_mycomponent_component__ = __webpack_require__("../../../../../src/app/heroes/mycomponent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__accounts_login_component__ = __webpack_require__("../../../../../src/app/accounts/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__accounts_logout_component__ = __webpack_require__("../../../../../src/app/accounts/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__interceptor_interceptor_component__ = __webpack_require__("../../../../../src/app/interceptor/interceptor.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_17__interceptor_interceptor_component__["a" /* InterceptorModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__heroes_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_8__heroes_hero_detail_component__["a" /* HeroDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_7__heroes_heroes_component__["a" /* HeroesComponent */],
            __WEBPACK_IMPORTED_MODULE_11__heroes_hero_search_component__["a" /* HeroSearchComponent */],
            __WEBPACK_IMPORTED_MODULE_12__accounts_hero_form_component__["a" /* HeroFormComponent */],
            __WEBPACK_IMPORTED_MODULE_14__heroes_mycomponent_component__["a" /* MyComponent */],
            __WEBPACK_IMPORTED_MODULE_15__accounts_login_component__["a" /* MyLoginComponent */],
            __WEBPACK_IMPORTED_MODULE_16__accounts_logout_component__["a" /* MyLogoutComponent */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__services_hero_service__["a" /* HeroService */], __WEBPACK_IMPORTED_MODULE_10__services_accounts_service__["a" /* AccountsService */], __WEBPACK_IMPORTED_MODULE_10__services_accounts_service__["b" /* OnlyLoggedInUsersGuard */], __WEBPACK_IMPORTED_MODULE_10__services_accounts_service__["c" /* SignupGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/heroes/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[class*='col-'] {\n  float: left;\n  padding-right: 20px;\n  padding-bottom: 20px;\n}\n[class*='col-']:last-of-type {\n  padding-right: 0;\n}\na {\n  text-decoration: none;\n}\n*, *:after, *:before {\n  box-sizing: border-box;\n}\nh3 {\n  text-align: center; margin-bottom: 0;\n}\nh4 {\n  position: relative;\n}\n.grid {\n  margin: 0;\n}\n.col-1-4 {\n  width: 25%;\n}\n.module {\n  padding: 20px;\n  text-align: center;\n  color: #eee;\n  max-height: 120px;\n  min-width: 120px;\n  background-color: #607D8B;\n  border-radius: 2px;\n}\n.module:hover {\n  background-color: #EEE;\n  cursor: pointer;\n  color: #607d8b;\n}\n.grid-pad {\n  padding: 10px 0;\n}\n.grid-pad > [class*='col-']:last-of-type {\n  padding-right: 20px;\n}\n@media (max-width: 600px) {\n  .module {\n    font-size: 10px;\n    max-height: 75px; }\n}\n@media (max-width: 1024px) {\n  .grid {\n    margin: 0;\n  }\n  .module {\n    min-width: 60px;\n  }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/heroes/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Top Heroes</h3>\n<div class=\"grid grid-pad\">\n  <a *ngFor=\"let hero of heroes\"  [routerLink]=\"['/detail', hero.id]\"  class=\"col-1-4\">\n    <div class=\"module hero\">\n      <h4>{{hero.name}}</h4>\n    </div>\n  </a>\n</div>\n<hero-search></hero-search>\n"

/***/ }),

/***/ "../../../../../src/app/heroes/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_hero_service__ = __webpack_require__("../../../../../src/app/_services/hero.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(heroService) {
        this.heroService = heroService;
    }
    DashboardComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes.slice(1, 5); });
    };
    DashboardComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'my-dashboard',
        template: __webpack_require__("../../../../../src/app/heroes/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/heroes/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_hero_service__["a" /* HeroService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_hero_service__["a" /* HeroService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/heroes/hero-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "label {\n  display: inline-block;\n  width: 3em;\n  margin: .5em 0;\n  color: #607D8B;\n  font-weight: bold;\n}\ninput {\n  height: 2em;\n  font-size: 1em;\n  padding-left: .4em;\n}\nbutton {\n  margin-top: 20px;\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer; cursor: hand;\n}\nbutton:hover {\n  background-color: #cfd8dc;\n}\nbutton:disabled {\n  background-color: #eee;\n  color: #ccc; \n  cursor: auto;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/heroes/hero-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"hero\">\n  <h2>{{hero.name}} details!</h2>\n  <div>\n    <label>id: </label>{{hero.id}}</div>\n  <div>\n    <label>name: </label>\n    <input [(ngModel)]=\"hero.name\" placeholder=\"name\" />\n   </div>\n  <button (click)=\"goBack()\">Back</button>\n  <button (click)=\"save()\">Save</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/heroes/hero-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_hero_service__ = __webpack_require__("../../../../../src/app/_services/hero.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeroDetailComponent = (function () {
    function HeroDetailComponent(heroService, route, location) {
        this.heroService = heroService;
        this.route = route;
        this.location = location;
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.heroService.getHero(+params.get('id')); })
            .subscribe(function (hero) { return _this.hero = hero; });
    };
    HeroDetailComponent.prototype.save = function () {
        var _this = this;
        this.heroService.update(this.hero)
            .then(function () { return _this.goBack(); });
    };
    HeroDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return HeroDetailComponent;
}());
HeroDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'hero-detail',
        template: __webpack_require__("../../../../../src/app/heroes/hero-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/heroes/hero-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_hero_service__["a" /* HeroService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_hero_service__["a" /* HeroService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]) === "function" && _c || Object])
], HeroDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=hero-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/heroes/hero-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-result{\n  border-bottom: 1px solid gray;\n  border-left: 1px solid gray;\n  border-right: 1px solid gray;\n  width:195px;\n  height: 16px;\n  padding: 5px;\n  background-color: white;\n  cursor: pointer;\n}\n\n.search-result:hover {\n  color: #eee;\n  background-color: #607D8B;\n}\n\n#search-box{\n  width: 200px;\n  height: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/heroes/hero-search.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"search-component\">\n  <h4>Hero Search</h4>\n  <input #searchBox id=\"search-box\" (keyup)=\"search(searchBox.value)\" />\n  <div>\n    <div *ngFor=\"let hero of heroes | async\"\n         (click)=\"gotoDetail(hero)\" class=\"search-result\" >\n      {{hero.name}}\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/heroes/hero-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_hero_service__ = __webpack_require__("../../../../../src/app/_services/hero.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Observable class extensions

// Observable operators




var HeroSearchComponent = (function () {
    function HeroSearchComponent(heroService, router) {
        this.heroService = heroService;
        this.router = router;
        this.searchTerms = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
    }
    // Push a search term into the observable stream.
    HeroSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    HeroSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroes = this.searchTerms
            .debounceTime(300) // wait 300ms after each keystroke before considering the term
            .distinctUntilChanged() // ignore if next search term is same as previous
            .switchMap(function (term) { return term // switch to new observable each time the term changes
            ? _this.heroService.search(term)
            : __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of([]); })
            .catch(function (error) {
            // TODO: add real error handling
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of([]);
        });
    };
    HeroSearchComponent.prototype.gotoDetail = function (hero) {
        var link = ['/detail', hero.id];
        this.router.navigate(link);
    };
    return HeroSearchComponent;
}());
HeroSearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'hero-search',
        template: __webpack_require__("../../../../../src/app/heroes/hero-search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/heroes/hero-search.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_8__services_hero_service__["a" /* HeroService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8__services_hero_service__["a" /* HeroService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_hero_service__["a" /* HeroService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], HeroSearchComponent);

var _a, _b;
//# sourceMappingURL=hero-search.component.js.map

/***/ }),

/***/ "../../../../../src/app/heroes/heroes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".selected {\n  background-color: #CFD8DC !important;\n  color: white;\n}\n.heroes {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em;\n}\n.heroes li {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n.heroes li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em;\n}\n.heroes li.selected:hover {\n  background-color: #BBD8DC !important;\n  color: white;\n}\n.heroes .text {\n  position: relative;\n  top: -3px;\n}\n.heroes .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\nbutton {\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n}\nbutton:hover {\n  background-color: #cfd8dc;\n}\nbutton.delete {\n  float:right;\n  margin-top: 2px;\n  margin-right: .8em;\n  background-color: gray !important;\n  color:white;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/heroes/heroes.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>My Heroes</h2>\n<div>\n  <label>Hero name:</label> <input #heroName />\n  <button (click)=\"add(heroName.value); heroName.value=''\">\n    Add\n  </button>\n</div>\n<ul class=\"heroes\">\n  <li *ngFor=\"let hero of heroes\" (click)=\"onSelect(hero)\"\n      [class.selected]=\"hero === selectedHero\">\n    <span class=\"badge\">{{hero.id}}</span>\n    <span>{{hero.name}}</span>\n    <button class=\"delete\"\n      (click)=\"delete(hero); $event.stopPropagation()\">x</button>\n  </li>\n</ul>\n<div *ngIf=\"selectedHero\">\n  <h2>\n    {{selectedHero.name | uppercase}} is my hero\n  </h2>\n  <button (click)=\"gotoDetail()\">View Details</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/heroes/heroes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_hero_service__ = __webpack_require__("../../../../../src/app/_services/hero.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeroesComponent = (function () {
    function HeroesComponent(heroService, router) {
        this.heroService = heroService;
        this.router = router;
    }
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService
            .getHeroes()
            .then(function (heroes) { return _this.heroes = heroes; });
    };
    HeroesComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.heroService.create(name)
            .then(function (hero) {
            _this.heroes.push(hero);
            _this.selectedHero = null;
        });
    };
    HeroesComponent.prototype.delete = function (hero) {
        var _this = this;
        this.heroService
            .delete(hero.id)
            .then(function () {
            _this.heroes = _this.heroes.filter(function (h) { return h !== hero; });
            if (_this.selectedHero === hero) {
                _this.selectedHero = null;
            }
        });
    };
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedHero.id]);
    };
    return HeroesComponent;
}());
HeroesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'my-heroes',
        template: __webpack_require__("../../../../../src/app/heroes/heroes.component.html"),
        styles: [__webpack_require__("../../../../../src/app/heroes/heroes.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_hero_service__["a" /* HeroService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_hero_service__["a" /* HeroService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], HeroesComponent);

var _a, _b;
//# sourceMappingURL=heroes.component.js.map

/***/ }),

/***/ "../../../../../src/app/heroes/mycomponent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_hero_service__ = __webpack_require__("../../../../../src/app/_services/hero.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyComponent = (function () {
    // Inject HttpClient into your component or service.
    function MyComponent(heroService, router) {
        this.heroService = heroService;
        this.router = router;
    }
    MyComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService
            .getHeroes()
            .then(function (results) { return _this.results = results; });
    };
    MyComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    return MyComponent;
}());
MyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'my-component',
        template: "\n<p>fdcbhdfgnhdfgzcnhdgzfn</p>\n  <li *ngFor=\"let hero of results\">\n    {{ hero.name }}\n  </li>\n"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_hero_service__["a" /* HeroService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_hero_service__["a" /* HeroService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], MyComponent);

var _a, _b;
//# sourceMappingURL=mycomponent.component.js.map

/***/ }),

/***/ "../../../../../src/app/interceptor/interceptor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpsRequestInterceptor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterceptorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_accounts_service__ = __webpack_require__("../../../../../src/app/_services/accounts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpsRequestInterceptor = (function () {
    function HttpsRequestInterceptor(currentUserService) {
        this.currentUserService = currentUserService;
    }
    HttpsRequestInterceptor.prototype.intercept = function (req, next) {
        var token = this.currentUserService.token;
        debugger;
        var dupReq;
        if (token) {
            dupReq = req.clone({ headers: req.headers.set('Authorization', 'Token ' + token) });
        }
        dupReq = req.clone({ headers: req.headers.set('Authorization', 'Token ' + token) });
        debugger;
        return next.handle(dupReq);
    };
    return HttpsRequestInterceptor;
}());
HttpsRequestInterceptor = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_accounts_service__["a" /* AccountsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_accounts_service__["a" /* AccountsService */]) === "function" && _a || Object])
], HttpsRequestInterceptor);

;
var InterceptorModule = (function () {
    function InterceptorModule() {
    }
    return InterceptorModule;
}());
InterceptorModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: HttpsRequestInterceptor, multi: true }
        ]
    })
], InterceptorModule);

var _a;
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
//
// import { AccountsService } from '../_services/accounts.service';
//
// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {
//
//     constructor(private currentUserService: AccountsService) { }
//
//     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         console.log(JSON.stringify(req));
// debugger
//         const token: string = this.currentUserService.token;
//         if (token) {
//             req = req.clone({ headers: req.headers.set('Authorization', 'Token ' + token) });
//         }
//         return next.handle(req);
//     }
// }
//# sourceMappingURL=interceptor.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map