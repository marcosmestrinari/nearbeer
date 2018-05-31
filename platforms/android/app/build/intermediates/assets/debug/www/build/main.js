webpackJsonp([0],{

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_promise_polyfill__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_promise_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_promise_polyfill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__usuarioeditar_usuarioeditar__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






/**
 * Generated class for the UsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UsuarioPage = /** @class */ (function () {
    // usuario$: Observable<Usuario[]>;
    function UsuarioPage(navCtrl, navParams, viewCtrl, db, afAuth, asCtrl, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.db = db;
        this.afAuth = afAuth;
        this.asCtrl = asCtrl;
        this.toast = toast;
        var uid = this.afAuth.auth.currentUser.uid;
        // this.usuarioRef = this.db.collection<Usuario>('usuarios');
        // this.usuarioRef = this.db.collection('usuarios');
        this.usuarioRef = this.db.collection('usuarios', function (ref) { return ref.where('id', '==', uid); });
        this.usuario$ = this.usuarioRef.valueChanges();
    }
    UsuarioPage.prototype.salvar = function (form) {
        return __awaiter(this, void 0, void 0, function () {
            var nome, email, uid, obj;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        nome = form.value.nome;
                        email = form.value.email;
                        return [4 /*yield*/, this.afAuth.auth.currentUser.uid];
                    case 1:
                        uid = _a.sent();
                        obj = {
                            'nome': nome
                        };
                        return [2 /*return*/];
                }
            });
        });
    };
    UsuarioPage.prototype.gerenciar = function (id) {
        var _this = this;
        this.asCtrl.create({
            buttons: [
                {
                    text: "Apagar",
                    role: "destructive",
                    handler: function () {
                        _this.db.doc("clientes/" + id).delete();
                    }
                },
                {
                    text: "Editar",
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__usuarioeditar_usuarioeditar__["a" /* UsuarioEditarPage */], { id: id });
                    }
                },
                {
                    text: "Cancelar",
                    role: "cancel"
                }
            ]
        }).present();
    };
    UsuarioPage.prototype.ionViewWillLoad = function () {
        var _this = this;
        // alert(this.afAuth.auth.currentUser.uid);
        this.afAuth.authState.subscribe(function (data) {
            if (data && data.email && data.uid) {
                _this.toast.create({
                    message: "Perfil de usu\u00E1rio - [Visualiza\u00E7\u00E3o]",
                    duration: 5000
                }).present();
            }
        });
    };
    UsuarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-usuario',template:/*ion-inline-start:"C:\ionic3\nearbeer\src\pages\usuario\usuario.html"*/'<ion-header  >\n  <ion-navbar color="primary">\n    <ion-title><div style="text-indent:1em; font-size:16px;">Perfil de Usuário [Visualização]</div></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding id="usuario" class="cor_fundo_verde">\n	<ion-list>\n      <ion-card class="left-card-border_laranja">\n    \n		<ion-item *ngFor="let usuario of usuario$ | async" \n      (click)="gerenciar(usuario.id)" >\n\n        <ion-avatar item-start>\n          <img [src]="usuario.foto" />\n        </ion-avatar>\n\n        <ion-grid>\n          \n          <ion-row>\n            <ion-col col-4><b>nome</b> </ion-col>\n            <ion-col col-20><p>{{usuario.nome}}</p> </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-4><b>email</b> </ion-col>\n            <ion-col col-20><p>{{usuario.email}}</p> </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-4><b>Senha</b> </ion-col>\n            <ion-col col-20><p>******</p> </ion-col>\n          </ion-row>\n\n        </ion-grid>\n        \n    \n		</ion-item>\n    <ion-item>\n      <button ion-button full block class="cor_fundo_laranja">Trocar Imagem</button>\n    </ion-item>\n  </ion-card>\n	</ion-list>\n</ion-content>'/*ion-inline-end:"C:\ionic3\nearbeer\src\pages\usuario\usuario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */]])
    ], UsuarioPage);
    return UsuarioPage;
}());

//# sourceMappingURL=usuario.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapaPage = /** @class */ (function () {
    function MapaPage(navCtrl, geolocation) {
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        // this.getMinhaPosicao();
    }
    MapaPage.prototype.getMinhaPosicao = function () {
        var _this = this;
        this.options = {
            enableHighAccuracy: false
        };
        this.geolocation.getCurrentPosition(this.options).then(function (pos) {
            _this.currentPos = pos;
            // console.log(pos);
            _this.addMapa(pos.coords.latitude, pos.coords.longitude);
        }, function (err) {
            // console.log("Erroo : " + err.message);
            ;
        });
    };
    MapaPage.prototype.getLugar = function (latLng) {
        var service = new google.maps.places.PlacesService(this.map);
        var request = {
            location: latLng,
            radius: 1000,
            types: ["bar", "pub", "Conveniência", "lanchonete", "serve festa", "restaurant", "beer", "cerveja", "padaria", "panificadora", "mercado", "bebida"]
        };
        return new Promise(function (resolve, reject) {
            service.nearbySearch(request, function (results, status) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    resolve(results);
                }
                else {
                    reject(status);
                }
            });
        });
    };
    MapaPage.prototype.criarMarcador = function (place) {
        var _this = this;
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: place.geometry.location
        });
        var content = '<p>' + place.name + '<p>'; // "<p>nome do ponto !</p>";          
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.close();
            infoWindow.open(_this.map, marker);
        });
    };
    MapaPage.prototype.addMarcador = function () {
        var _this = this;
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter()
        });
        var content = "<p>Cervejas em um raio de <br>1000 metros a partir daqui !</p>";
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
        });
    };
    MapaPage.prototype.addMapa = function (lat, long) {
        var _this = this;
        var latLng = new google.maps.LatLng(lat, long);
        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        this.getLugar(latLng).then(function (results) {
            _this.places = results;
            for (var i = 0; i < results.length; i++) {
                _this.criarMarcador(results[i]);
            }
        }, function (status) { return console.log(status); });
        this.addMarcador();
    };
    MapaPage.prototype.ionViewDidEnter = function () {
        this.getMinhaPosicao();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MapaPage.prototype, "mapElement", void 0);
    MapaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mapa',template:/*ion-inline-start:"C:\ionic3\nearbeer\src\pages\mapa\mapa.html"*/'<script src="http://maps.google.com/maps/api/js?key=AIzaSyCbgAEIr7KEh4peLAo7PFBG3B6XQ8iZ6XM&libraries=places"></script>\n<ion-header>\n  <ion-navbar color="primary">\n       <ion-title>\n            <div style="text-indent:1em; font-size:16px;"> O Mapa da sua cerveja favorita</div>\n      </ion-title>\n     \n      <!-- <div style="text-indent:1em" > O Mapa da sua cerveja favorita</div> -->\n  </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n  \n  <div #map id="map"></div> \n  \n  <div style="width : 100% ;height: 60%">\n      <ion-list>\n      <ion-item *ngFor="let lugares of places">\n          <p><b>{{lugares.name}}</b></p><ion-badge item-end color="secondary">está a: metros</ion-badge>\n      </ion-item>\n      </ion-list>\n  </div>\n  \n  </ion-content>'/*ion-inline-end:"C:\ionic3\nearbeer\src\pages\mapa\mapa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
    ], MapaPage);
    return MapaPage;
}());

//# sourceMappingURL=mapa.js.map

/***/ }),

/***/ 167:
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
webpackEmptyAsyncContext.id = 167;

/***/ }),

/***/ 211:
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
webpackEmptyAsyncContext.id = 211;

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registro_registro__ = __webpack_require__(263);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(afAuth, navCtrl, alertCtrl) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
    }
    LoginPage.prototype.registrar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__registro_registro__["a" /* RegistroPage */]);
    };
    LoginPage.prototype.entrar = function (form) {
        var _this = this;
        var email = form.value.email;
        var senha = form.value.senha;
        this.afAuth.auth.signInWithEmailAndPassword(email, senha)
            .then(function (user) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__registro_registro__["a" /* RegistroPage */]);
        })
            .catch(function (error) {
            _this.alertCtrl.create({
                title: "Falha na autenticação",
                subTitle: _this.getMessage(error.code),
                buttons: ["OK"]
            }).present();
        });
    };
    LoginPage.prototype.getMessage = function (code) {
        switch (code) {
            case "auth/invalid-email":
                return "E-mail mal formatado";
            case "auth/user-disabled":
                return "Usuário bloqueado.";
            case "auth/user-not-found":
                return "Usuário não cadastrado";
            case "auth/wrong-password":
                return "Senha incorreta";
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\ionic3\nearbeer\src\pages\login\login.html"*/'<ion-content padding id="login" class="cor_fundo_verde">\n  <img  src="https://firebasestorage.googleapis.com/v0/b/nearbeer-b5c74.appspot.com/o/logo%2FLogo.png?alt=media&token=4dadc6c0-d480-41d7-97a9-90224a0cf612" class="logo"/>\n  <h1 padding ><span>O mapa da Cerveja</span></h1>\n  <!-- <ion-grid>\n    <ion-row>\n      <ion-col>\n        <h1>Near Beer</h1>\n        <div>o radar da Cerveja</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid> -->\n\n<form #form="ngForm" (ngSubmit)="entrar(form)" >\n  <ion-item class="cor_fundo_verde">\n    <ion-label class="cor_fonte_laranja" stacked>E-mail</ion-label>\n    <ion-input type="email" name="email" ngModel></ion-input>\n  </ion-item>\n  <ion-item class="cor_fundo_verde">\n    <ion-label class="cor_fonte_laranja" stacked>Senha</ion-label>\n    <ion-input type="password" name="senha" ngModel></ion-input>\n  </ion-item>\n  <button class="cor_fundo_laranja" ion-button full >Entrar</button>\n  <button class="cor_fundo_laranja" ion-button full type="button" (click)="registrar()">Registrar</button>\n</form> \n</ion-content>'/*ion-inline-end:"C:\ionic3\nearbeer\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegistroPage = /** @class */ (function () {
    function RegistroPage(afAuth, navCtrl, alertCtrl, db) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.db = db;
    }
    RegistroPage.prototype.registrar = function (form) {
        var _this = this;
        var id;
        var nome = form.value.nome;
        var email = form.value.email;
        var senha = form.value.senha;
        var codigo = Math.floor(Math.random() * 1000) + 1;
        var adm = false;
        var foto = "https://firebasestorage.googleapis.com/v0/b/nearbeer-b5c74.appspot.com/o/logo%2FLogo.png?alt=media&token=4dadc6c0-d480-41d7-97a9-90224a0cf612";
        this.afAuth.auth.createUserWithEmailAndPassword(email, senha)
            .then(function (user) {
            _this.db.collection('usuarios').doc(user.uid).set({
                id: user.uid,
                nome: nome,
                email: email,
                codigo: codigo,
                sorteado: '',
                adm: false,
                foto: foto
            });
        })
            .catch(function (error) {
            _this.alertCtrl.create({
                title: 'Erro no registro',
                subTitle: error.message,
                buttons: ["Ok"]
            }).present();
        });
    };
    RegistroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registro',template:/*ion-inline-start:"C:\ionic3\nearbeer\src\pages\registro\registro.html"*/'<ion-header id="registro"  >\n  <ion-navbar  color="primary">\n    <ion-title><div style="text-indent:1em; font-size:16px;">Registro</div></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="cor_fundo_verde">\n  <ion-list>\n\n    <form #form="ngForm" (ngSubmit)="registrar(form)" >\n      \n      <ion-item class="cor_fundo_verde">\n        <ion-label class="cor_fonte_laranja" stacked>Nome</ion-label>\n        <ion-input type="text" name="nome" ngModel></ion-input>\n      </ion-item>\n\n      <ion-item class="cor_fundo_verde">\n        <ion-label class="cor_fonte_laranja" stacked>E-mail</ion-label>\n        <ion-input type="email" name="email" ngModel></ion-input>\n      </ion-item>\n\n      <ion-item class="cor_fundo_verde">\n        <ion-label class="cor_fonte_laranja" stacked>Senha</ion-label>\n        <ion-input type="password" name="senha" ngModel></ion-input>\n      </ion-item>\n\n\n        <button class="cor_fundo_laranja" ion-button block>Registrar</button>\n \n    </form>\n\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\ionic3\nearbeer\src\pages\registro\registro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], RegistroPage);
    return RegistroPage;
}());

//# sourceMappingURL=registro.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__listacliente_listacliente__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mapa_mapa__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl, navParams, afAuth, alertCtrl, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.alertCtrl = alertCtrl;
        this.db = db;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        var uid = this.afAuth.auth.currentUser.uid;
        // this.usuarioRef = this.db.collection<Usuario>('usuarios');
        // this.usuarioRef = this.db.collection('usuarios');
        this.usuarioRef = this.db.collection('usuarios', function (ref) { return ref.where('id', '==', uid); });
        this.usuario$ = this.usuarioRef.valueChanges();
    }
    MenuPage.prototype.abrirCliente = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__listacliente_listacliente__["a" /* ListaClientePage */]);
    };
    MenuPage.prototype.abrirHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    MenuPage.prototype.abrirMapa = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__mapa_mapa__["a" /* MapaPage */]);
    };
    MenuPage.prototype.logoff = function () {
        this.afAuth.auth.signOut().then(function () {
            // let alert = this.alertCtrl.create({
            //   title: 'Aviso!!!',
            //   subTitle: '<br>Logoff Efetuado com Sucesso!!!',
            //   buttons: ['Ok']
            // });
            // alert.present();
            // this.navCtrl.push(LoginComponent);
        });
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"C:\ionic3\nearbeer\src\pages\menu\menu.html"*/'<ion-menu [content]="content">\n\n  <ion-content class="cor_fundo_verde">\n      <ion-avatar item-start>\n          <img src="https://firebasestorage.googleapis.com/v0/b/nearbeer-b5c74.appspot.com/o/logo%2FLogo.png?alt=media&token=4dadc6c0-d480-41d7-97a9-90224a0cf612" />\n        </ion-avatar>\n      <div padding style="text-indent:1em; font-size:16px;" *ngFor="let usuario of usuario$ | async"><b>Olá:</b> {{usuario.nome}} </div>\n    <ion-list class="cor_fundo_verde">\n        \n      <button ion-item (click)="abrirHome()" class="cor_fundo_verde">\n        <ion-icon name="ios-home-outline" ></ion-icon> <b >Home</b>\n      </button>\n      <button ion-item (click)="abrirPerfil()" class="cor_fundo_verde">\n        <ion-icon name="ios-construct-outline" ></ion-icon> <b >Perfil</b>\n      </button>\n      <button ion-item (click)="abrirCliente()" class="cor_fundo_verde">\n        <ion-icon name="ios-beer-outline"></ion-icon> <b>Clientes</b>\n      </button>\n      <button ion-item (click)="abrirMapa()" class="cor_fundo_verde">\n        <ion-icon name="ios-map-outline"></ion-icon> <b>Mapa</b>\n      </button>\n      <button ion-item  class="cor_fundo_verde">\n        <ion-icon name="ios-information-circle-outline"></ion-icon> <b>Curiosidades</b>\n      </button>\n      <button ion-item (click)="logoff()" class="cor_fundo_verde">\n        <ion-icon name="ios-power-outline"></ion-icon> <b>Sair</b>\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu> \n\n<ion-nav  #content id="nav" [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\ionic3\nearbeer\src\pages\menu\menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sorteio_sorteio__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listacliente_listacliente__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__usuario_usuario__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menusorteio_menusorteio__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mapa_mapa__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__listacuriosidade_listacuriosidade__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, afAuth, alertCtrl, db) {
        this.navCtrl = navCtrl;
        this.afAuth = afAuth;
        this.alertCtrl = alertCtrl;
        this.db = db;
        var uid = this.afAuth.auth.currentUser.uid;
        // this.usuarioRef = this.db.collection<Usuario>('usuarios');
        // this.usuarioRef = this.db.collection('usuarios');
        this.usuarioRef = this.db.collection('usuarios', function (ref) { return ref.where('id', '==', uid); });
        this.usuario$ = this.usuarioRef.valueChanges();
    }
    HomePage.prototype.abrirListaSoreio = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__sorteio_sorteio__["a" /* SorteioPage */]);
    };
    HomePage.prototype.abrirCliente = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__listacliente_listacliente__["a" /* ListaClientePage */]);
    };
    HomePage.prototype.abrirMapa = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__mapa_mapa__["a" /* MapaPage */]);
    };
    HomePage.prototype.abrirPerfil = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__usuario_usuario__["a" /* UsuarioPage */]);
    };
    HomePage.prototype.meuSorteio = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__menusorteio_menusorteio__["a" /* MenuSorteioPage */]);
    };
    HomePage.prototype.abrirCuriosidades = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__listacuriosidade_listacuriosidade__["a" /* ListacuriosidadePage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\ionic3\nearbeer\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Near Beer\n      <br>\n      <div style="text-indent:1em; font-size:16px;"> O Mapa da sua cerveja favorita</div>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button menuToggle>menu</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content id="home" class="cor_fundo_verde">\n  <!-- <h2 name="h2">Bem vindo ao NearBeer !!!</h2> -->\n  <p>\n\n    <ion-row>\n      <ion-col col-6>\n        <div>\n          <ion-card class="card_menu">\n            <ion-icon name="ios-beer-outline" (click)="abrirCliente()"></ion-icon>\n            <!-- <img src="https://firebasestorage.googleapis.com/v0/b/nearbeer-b5c74.appspot.com/o/clientes04a.png?alt=media&token=833233eb-6bcb-4537-834d-83d2b4a334f7"/> -->\n            <h2>Clientes</h2>\n          </ion-card>\n        </div>\n      </ion-col>\n      <ion-col col-6>\n        <div>\n          <ion-card class="card_menu">\n            <ion-icon name="ios-construct-outline" (click)="abrirPerfil()"></ion-icon>\n            <!-- <img src="https://firebasestorage.googleapis.com/v0/b/nearbeer-b5c74.appspot.com/o/configuracao03.png?alt=media&token=0a581e03-700d-4047-842b-ab08dfa62f0f"/> -->\n            <h2>Conf. Perfil</h2>\n          </ion-card>\n        </div>\n      </ion-col>\n\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>\n        <div>\n          <ion-card class="card_menu">\n            <ion-icon name="ios-happy-outline" (click)="meuSorteio()"></ion-icon>\n            <!-- <img src="https://firebasestorage.googleapis.com/v0/b/nearbeer-b5c74.appspot.com/o/sorteio01.png?alt=media&token=9a0176b8-e8d6-42f0-9406-d2776ef3277b"/> -->\n            <h2>Sorteio NearBeer</h2>\n          </ion-card>\n        </div>\n      </ion-col>\n      <ion-col col-6>\n        <div>\n          <ion-card class="card_menu">\n\n            <ion-icon name="ios-map-outline" (click)="abrirMapa()"></ion-icon>\n            <!-- <img src="https://firebasestorage.googleapis.com/v0/b/nearbeer-b5c74.appspot.com/o/mapa01.png?alt=media&token=545f79e5-0722-46b2-a500-475bc1e548c7"/> -->\n            <h2>Mapa da Cerveja</h2>\n          </ion-card>\n        </div>\n      </ion-col>\n\n    </ion-row>\n    <ion-row>\n\n      <ion-col col-6>\n        <div>\n          <ion-card class="card_menu">\n            <ion-icon name="ios-information-circle-outline"  (click)="abrirCuriosidades()"></ion-icon>\n            <!-- <img src="https://firebasestorage.googleapis.com/v0/b/nearbeer-b5c74.appspot.com/o/mapa01.png?alt=media&token=545f79e5-0722-46b2-a500-475bc1e548c7"/> -->\n            <h2>Curiosidades</h2>\n          </ion-card>\n        </div>\n      </ion-col>\n\n      <ion-col col-6>\n        <div *ngFor="let usuario of usuario$ | async">\n          <ion-card *ngIf="usuario.adm==true" class="card_menu">\n            <ion-icon name="ios-grid-outline" (click)="abrirListaSoreio()"></ion-icon>\n            <!-- <img src="https://firebasestorage.googleapis.com/v0/b/nearbeer-b5c74.appspot.com/o/mapa01.png?alt=media&token=545f79e5-0722-46b2-a500-475bc1e548c7"/> -->\n            <h2>Sortear</h2>\n          </ion-card>\n          <ion-card *ngIf="usuario.adm==false" class="card_menu">\n\n          </ion-card>\n        </div>\n      </ion-col>\n\n    </ion-row>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\ionic3\nearbeer\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SorteioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__usuarioeditar_usuarioeditar__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/**
 * Generated class for the SorteioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SorteioPage = /** @class */ (function () {
    // usuario$: Observable<Usuario[]>;
    function SorteioPage(navCtrl, navParams, viewCtrl, db, afAuth, asCtrl, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.db = db;
        this.afAuth = afAuth;
        this.asCtrl = asCtrl;
        this.toast = toast;
        var uid = this.afAuth.auth.currentUser.uid;
        // this.usuarioRef = this.db.collection<Usuario>('usuarios');
        // this.usuarioRef = this.db.collection('usuarios');
        this.usuarioRef = this.db.collection('usuarios');
        this.usuario$ = this.usuarioRef.valueChanges();
        var sorteio = Math.floor((Math.random() * 6) + 1);
    }
    SorteioPage.prototype.sorteadoS = function (_usuario) {
        var _this = this;
        this.db.doc('usuarios/' + _usuario.id).update({
            sorteado: 'sim',
        }).then(function () {
            _this.toast.create({
                message: "Atualizado com Sucesso ",
                duration: 5000
            }).present();
            // this.viewCtrl.dismiss(UsuarioComponent);
        });
    };
    SorteioPage.prototype.sorteadoN = function (_usuario) {
        var _this = this;
        this.db.doc('usuarios/' + _usuario.id).update({
            sorteado: '',
        }).then(function () {
            _this.toast.create({
                message: "Atualizado com Sucesso ",
                duration: 5000
            }).present();
            // this.viewCtrl.dismiss(UsuarioComponent);
        });
    };
    SorteioPage.prototype.salvar = function (form) {
        return __awaiter(this, void 0, void 0, function () {
            var nome, email, uid, obj;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        nome = form.value.nome;
                        email = form.value.email;
                        return [4 /*yield*/, this.afAuth.auth.currentUser.uid];
                    case 1:
                        uid = _a.sent();
                        obj = {
                            'nome': nome
                        };
                        return [2 /*return*/];
                }
            });
        });
    };
    SorteioPage.prototype.gerenciar = function (id) {
        var _this = this;
        this.asCtrl.create({
            buttons: [
                {
                    text: "Apagar",
                    role: "destructive",
                    handler: function () {
                        _this.db.doc("clientes/" + id).delete();
                    }
                },
                {
                    text: "Editar",
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__usuarioeditar_usuarioeditar__["a" /* UsuarioEditarPage */], { id: id });
                    }
                },
                {
                    text: "Cancelar",
                    role: "cancel"
                }
            ]
        }).present();
    };
    SorteioPage.prototype.ionViewWillLoad = function () {
        var _this = this;
        // alert(this.afAuth.auth.currentUser.uid);
        this.afAuth.authState.subscribe(function (data) {
            if (data && data.email && data.uid) {
                _this.toast.create({
                    message: "Sorteio ",
                    duration: 5000
                }).present();
            }
        });
    };
    SorteioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sorteio',template:/*ion-inline-start:"C:\ionic3\nearbeer\src\pages\sorteio\sorteio.html"*/'<ion-header >\n  <ion-navbar  color="primary">\n    <ion-title><div style="text-indent:1em; font-size:16px;">Sorteio de Usuarios</div></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding id="usuario" class="cor_fundo_verde">\n<ion-list>\n  <ion-card *ngFor="let usuario of usuario$ | async" class="left-card-border_laranja">\n  <form #form="ngForm"  > \n  <ion-item-sliding>\n    <ion-item >\n\n\n        <!-- <ion-avatar item-start >\n          <img [src]="usuario.foto" />\n        </ion-avatar> -->\n\n        <ion-grid >\n          <ion-row>\n            <ion-col col-3><b>Codigo  </b> </ion-col>\n                <ion-col col-20 ><p>{{usuario.codigo}}</p></ion-col>\n          </ion-row>          \n          <ion-row>\n            <ion-col col-3 ><b>Nome</b> </ion-col>\n            <ion-col col-20  *ngIf="usuario.sorteado"><p>{{usuario.nome}}</p> </ion-col>\n            <ion-col col-20 *ngIf="!usuario.sorteado"><p>************</p> </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-3 ><b>Email</b> </ion-col>\n            <ion-col col-20 *ngIf="usuario.sorteado"><p>{{usuario.email}}</p> </ion-col>\n            <ion-col col-20 *ngIf="!usuario.sorteado"><p>************</p> </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-3><b>Sorteado</b> </ion-col>\n            <ion-col col-20 *ngIf="usuario.sorteado"><p>Sim</p> </ion-col>\n            <ion-col col-20 *ngIf="!usuario.sorteado"><p>Não</p> </ion-col>\n          </ion-row>\n\n\n        </ion-grid>\n    </ion-item>\n\n    <ion-item-options side="right">\n      <button ion-button color="danger" (click)="sorteadoN(usuario)">\n        <ion-icon name="mail"></ion-icon>\n        Sorteado Não\n      </button>\n      <button ion-button color="primary" (click)="sorteadoS(usuario)">\n        <ion-icon name="mail"></ion-icon>\n        Sorteado Sim\n      </button>\n    </ion-item-options>\n  </ion-item-sliding>\n  </form>\n  </ion-card>\n</ion-list>\n</ion-content>'/*ion-inline-end:"C:\ionic3\nearbeer\src\pages\sorteio\sorteio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], SorteioPage);
    return SorteioPage;
}());

//# sourceMappingURL=sorteio.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/**
 * Generated class for the ClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ClientePage = /** @class */ (function () {
    function ClientePage(db, navCtrl, afAuth) {
        this.db = db;
        this.navCtrl = navCtrl;
        this.afAuth = afAuth;
        this.ref = db.collection('clientes');
    }
    ClientePage.prototype.salvar = function (form) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var nome, email, endereco, status, uid, obj;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        nome = form.value.nome;
                        email = form.value.email;
                        endereco = form.value.endereco;
                        status = form.value.status;
                        return [4 /*yield*/, this.afAuth.auth.currentUser.uid];
                    case 1:
                        uid = _a.sent();
                        obj = {
                            'nome': nome,
                            'email': email,
                            'endereco': endereco,
                            'status': status,
                            'uid': uid
                        };
                        //this.clienteService.create(cliente);
                        this.ref.add(obj).then(function (_ref) {
                            _this.db.doc("clientes/" + _ref.id).update({ id: _ref.id })
                                .then(function () {
                                _this.navCtrl.pop();
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ClientePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cliente',template:/*ion-inline-start:"C:\ionic3\nearbeer\src\pages\cliente\cliente.html"*/'<ion-header >\n  <ion-navbar  color="primary">\n    <ion-title><div style="text-indent:1em; font-size:16px;">Novo Cliente</div></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding id="cliente" class="cor_fundo_verde">\n  <ion-list >\n    <ion-card class="left-card-border_laranja">\n      <form #form="ngForm" (ngSubmit)="salvar(form)">\n        <ion-item>\n          <ion-label stacked>Nome</ion-label>\n          <ion-input type="text" name="nome" ngModel></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>E-mail</ion-label>\n          <ion-input type="email" name="email" ngModel></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>End.</ion-label>\n          <ion-input type="text" name="endereco" ngModel></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label>Status</ion-label>\n            <ion-select name="status" [(ngModel)]="status">\n              <ion-option value="Inativo">Ativo</ion-option>\n              <ion-option value="Ativo">Inativo</ion-option>\n            </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <button ion-button block class="cor_fundo_laranja" >Salvar</button>\n        </ion-item>\n\n      </form>\n    </ion-card>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\ionic3\nearbeer\src\pages\cliente\cliente.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], ClientePage);
    return ClientePage;
}());

//# sourceMappingURL=cliente.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClienteEditarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__listacliente_listacliente__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ClienteeditarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ClienteEditarPage = /** @class */ (function () {
    function ClienteEditarPage(db, navCtrl, afAuth, toast, viewCtrl, navParams) {
        this.db = db;
        this.navCtrl = navCtrl;
        this.afAuth = afAuth;
        this.toast = toast;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        var uid = afAuth.auth.currentUser.uid;
        var id = navParams.get('id');
        this.clienteRef = db.collection('clientes', function (ref) { return ref
            .where('id', '==', id); });
        this.cliente$ = this.clienteRef.valueChanges();
    }
    ClienteEditarPage.prototype.update = function (_cliente) {
        var _this = this;
        this.db.doc('clientes/' + _cliente.id).update({
            nome: _cliente.nome,
            email: _cliente.email,
            endereco: _cliente.endereco,
            status: _cliente.status
        }).then(function () {
            _this.toast.create({
                message: "Atualizado com Sucesso ",
                duration: 5000
            }).present();
            _this.viewCtrl.dismiss(__WEBPACK_IMPORTED_MODULE_4__listacliente_listacliente__["a" /* ListaClientePage */]);
        });
    };
    ClienteEditarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-clienteeditar',template:/*ion-inline-start:"C:\ionic3\nearbeer\src\pages\clienteeditar\clienteeditar.html"*/'<ion-header>\n  <ion-navbar  color="primary">\n    <ion-title><div style="text-indent:1em; font-size:16px;">Novo Cliente</div></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding id="cliente" class="cor_fundo_verde">\n  <ion-list *ngFor="let cliente of cliente$ | async">\n    <ion-card class="left-card-border_laranja">\n      <form #form="ngForm" (ngSubmit)="update(cliente)">\n        <ion-item>\n          <ion-label stacked>Nome</ion-label>\n          <ion-input type="text" name="nome" [(ngModel)]="cliente.nome"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>E-mail</ion-label>\n          <ion-input type="email" name="email" [(ngModel)]="cliente.email"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>Endereço</ion-label>\n          <ion-input type="text" name="endereco" [(ngModel)]="cliente.endereco"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label>Status</ion-label>\n            <ion-select name="status" [(ngModel)]="cliente.status">\n              <ion-option value="Ativo">Ativo</ion-option>\n              <ion-option value="Inativo">Inativo</ion-option>\n            </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <button ion-button block class="cor_fundo_laranja" >Salvar</button>\n        </ion-item>\n\n      </form>\n    </ion-card>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\ionic3\nearbeer\src\pages\clienteeditar\clienteeditar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ClienteEditarPage);
    return ClienteEditarPage;
}());

//# sourceMappingURL=clienteeditar.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuSorteioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__usuarioeditar_usuarioeditar__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/**
 * Generated class for the MenusorteioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuSorteioPage = /** @class */ (function () {
    // usuario$: Observable<Usuario[]>;
    function MenuSorteioPage(navCtrl, navParams, viewCtrl, db, afAuth, asCtrl, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.db = db;
        this.afAuth = afAuth;
        this.asCtrl = asCtrl;
        this.toast = toast;
        var uid = this.afAuth.auth.currentUser.uid;
        // this.usuarioRef = this.db.collection<Usuario>('usuarios');
        // this.usuarioRef = this.db.collection('usuarios');
        this.usuarioRef = this.db.collection('usuarios', function (ref) { return ref.where('id', '==', uid); });
        this.usuario$ = this.usuarioRef.valueChanges();
    }
    // update(_usuario: Usuario) {
    //   this.usuarioDoc.update(_usuario);
    // }
    MenuSorteioPage.prototype.salvar = function (form) {
        return __awaiter(this, void 0, void 0, function () {
            var nome, email, uid, obj;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        nome = form.value.nome;
                        email = form.value.email;
                        return [4 /*yield*/, this.afAuth.auth.currentUser.uid];
                    case 1:
                        uid = _a.sent();
                        obj = {
                            'nome': nome
                        };
                        return [2 /*return*/];
                }
            });
        });
    };
    MenuSorteioPage.prototype.gerenciar = function (id) {
        var _this = this;
        this.asCtrl.create({
            buttons: [
                {
                    text: "Apagar",
                    role: "destructive",
                    handler: function () {
                        _this.db.doc("clientes/" + id).delete();
                    }
                },
                {
                    text: "Editar",
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__usuarioeditar_usuarioeditar__["a" /* UsuarioEditarPage */], { id: id });
                    }
                },
                {
                    text: "Cancelar",
                    role: "cancel"
                }
            ]
        }).present();
    };
    MenuSorteioPage.prototype.ionViewWillLoad = function () {
        var _this = this;
        // alert(this.afAuth.auth.currentUser.uid);
        this.afAuth.authState.subscribe(function (data) {
            if (data && data.email && data.uid) {
                _this.toast.create({
                    message: "Voce esta alterando o seu cadastro",
                    duration: 5000
                }).present();
            }
        });
    };
    MenuSorteioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menusorteio',template:/*ion-inline-start:"C:\ionic3\nearbeer\src\pages\menusorteio\menusorteio.html"*/'<ion-header>\n	<ion-navbar color="primary">\n		<ion-title><div style="text-indent:1em; font-size:16px;">Resultado do sorteio</div></ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding id="usuario" class="cor_fundo_verde">\n	<ion-list>\n		<ion-card class="left-card-border_laranja" *ngFor="let usuario of usuario$ | async">\n\n			<label padding>\n\n\n				Ola {{usuario.nome}}, vocé esta concorrendo ao sorteio de brindes NearBeer, o nome dos sorteados serão anunciados no microfone e tambem aparecerá uma msg nessa tela, fique a tento. \n\n\n			</label>\n   <h2>	Seu codigo de sorteio é <b>{{usuario.codigo}}</b></h2>\n			 <ion-item>\n      <h1 *ngIf="usuario.sorteado">Parabéns, Voce foi sorteado</h1>\n      <h1 *ngIf="!usuario.sorteado">Você ainda nao foi sorteado</h1>\n    </ion-item>\n		</ion-card>\n	</ion-list>\n</ion-content>'/*ion-inline-end:"C:\ionic3\nearbeer\src\pages\menusorteio\menusorteio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], MenuSorteioPage);
    return MenuSorteioPage;
}());

//# sourceMappingURL=menusorteio.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListacuriosidadePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__curiosidade_curiosidade__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ListacuriosidadePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListacuriosidadePage = /** @class */ (function () {
    function ListacuriosidadePage(db, navCtrl, afAuth, asCtrl) {
        this.db = db;
        this.navCtrl = navCtrl;
        this.afAuth = afAuth;
        this.asCtrl = asCtrl;
        var uid = afAuth.auth.currentUser.uid;
        this.lista = db
            .collection('curiosidades')
            .valueChanges();
        this.initializeItens();
    }
    // public add() : void {
    //   this.navCtrl.push(ClientePage);
    // }
    ListacuriosidadePage.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    ListacuriosidadePage.prototype.detalhar = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__curiosidade_curiosidade__["a" /* CuriosidadePage */], { id: id });
    };
    ListacuriosidadePage.prototype.initializeItens = function () {
        this.itens = this.lista;
    };
    ListacuriosidadePage.prototype.getItens = function (ev) {
        // Reset items back to all of the items
        this.initializeItens();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.itens = this.itens.filter(function (item) {
                return (item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    ListacuriosidadePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-listacuriosidade',template:/*ion-inline-start:"C:\ionic3\nearbeer\src\pages\listacuriosidade\listacuriosidade.html"*/'<ion-header >\n    <ion-navbar color="primary">\n  \n      <ion-title><div style="text-indent:1em; font-size:16px;">Curiosidades</div></ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding id="curiosidade" class="cor_fundo_verde">\n  \n    <!-- <ion-fab right bottom>\n      <button ion-fab color="primary" (click)="add()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-fab> -->\n  \n    <ion-list>\n      <!-- <ion-searchbar  (ionInput)="getItens($event)"></ion-searchbar> -->\n      <ion-searchbar  ></ion-searchbar>\n      <ion-card *ngFor="let curiosidade of lista | async" class="left-card-border_laranja">\n        <ion-item  \n          >\n          <div item-start style="height: 80px; width: 80px;">\n            <img style="height: 80px; width: 80px;"  [src]="curiosidade.imagem" />\n          </div> \n  \n          <ion-grid>\n            <ion-row>\n              <ion-col col-4 ><b>Nome:</b> </ion-col>\n\n            </ion-row>\n            <ion-row>\n\n              <ion-col col-20><p><b>{{curiosidade.tipo}}</b></p> </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-4><b>Descrição:</b> </ion-col>\n              <ion-col col-20><p><b><div style="max-width: 15ch;\n                overflow: hidden;\n                text-overflow: ellipsis;\n                white-space: nowrap">{{curiosidade.descricao}}</div></b></p> </ion-col>\n            </ion-row>\n\n  \n          </ion-grid>\n        </ion-item>\n        <ion-item><button ion-button full block class="cor_fundo_laranja" (click)="detalhar(curiosidade.id)">Detalhes</button></ion-item>\n      </ion-card>\n    </ion-list>\n  \n  </ion-content>'/*ion-inline-end:"C:\ionic3\nearbeer\src\pages\listacuriosidade\listacuriosidade.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], ListacuriosidadePage);
    return ListacuriosidadePage;
}());

//# sourceMappingURL=listacuriosidade.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CuriosidadePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CuriosidadePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CuriosidadePage = /** @class */ (function () {
    function CuriosidadePage(db, navCtrl, afAuth, asCtrl, navParams) {
        this.db = db;
        this.navCtrl = navCtrl;
        this.afAuth = afAuth;
        this.asCtrl = asCtrl;
        this.navParams = navParams;
        var uid = afAuth.auth.currentUser.uid;
        var id = navParams.get('id');
        this.lista = db
            .collection('curiosidades', function (ref) { return ref
            .where('id', '==', id); })
            .valueChanges();
        this.initializeItens();
    }
    CuriosidadePage_1 = CuriosidadePage;
    // public add() : void {
    //   this.navCtrl.push(ClientePage);
    // }
    CuriosidadePage.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    CuriosidadePage.prototype.detalhar = function (id) {
        this.navCtrl.push(CuriosidadePage_1, { id: id });
    };
    CuriosidadePage.prototype.initializeItens = function () {
        this.itens = this.lista;
    };
    CuriosidadePage.prototype.getItens = function (ev) {
        // Reset items back to all of the items
        this.initializeItens();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.itens = this.itens.filter(function (item) {
                return (item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    CuriosidadePage = CuriosidadePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-curiosidade',template:/*ion-inline-start:"C:\ionic3\nearbeer\src\pages\curiosidade\curiosidade.html"*/'<ion-header >\n    <ion-navbar color="primary">\n  \n      <ion-title><div style="text-indent:1em; font-size:16px;">Curiosidade</div></ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding id="curiosidade" class="cor_fundo_verde">\n  \n    <!-- <ion-fab right bottom>\n      <button ion-fab color="primary" (click)="add()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-fab> -->\n  \n    <ion-list>\n      <!-- <ion-searchbar  (ionInput)="getItens($event)"></ion-searchbar> -->\n      \n      <ion-card *ngFor="let curiosidade of lista | async" class="left-card-border_laranja">\n        <ion-item            >\n          <div item-start style="height: 80px; width: 80px;">\n            <img style="height: 80px; width: 80px;"  [src]="curiosidade.imagem" />\n          </div> \n  \n          <ion-grid>\n\n            <ion-row>\n              <ion-col col-4 ><b>Nome:</b> </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col col-20><p><b>{{curiosidade.tipo}}</b></p> </ion-col>\n            </ion-row>\n            \n\n\n  \n          </ion-grid>\n        </ion-item>\n        <ion-row>\n          <ion-col col-4><b>Descrição:</b> </ion-col>\n\n        </ion-row>\n        <ion-row>\n\n          <ion-col col-20><p><b><div>{{curiosidade.descricao}}</div></b></p> </ion-col>\n        </ion-row>\n\n        \n      </ion-card>\n    </ion-list>\n  \n  </ion-content>'/*ion-inline-end:"C:\ionic3\nearbeer\src\pages\curiosidade\curiosidade.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], CuriosidadePage);
    return CuriosidadePage;
    var CuriosidadePage_1;
}());

//# sourceMappingURL=curiosidade.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(301);


// platformBrowserDynamic().bootstrapModule(AppModule);
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]).then(function (ref) {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
        window['ngRef'].destroy();
    }
    window['ngRef'] = ref;
    // Otherise, log the boot error
}).catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_cliente_cliente__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_clienteeditar_clienteeditar__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_listacliente_listacliente__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_mapa_mapa__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_menu_menu__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_menusorteio_menusorteio__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_registro_registro__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_sorteio_sorteio__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_usuario_usuario__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_usuarioeditar_usuarioeditar__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_auth__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2_firestore__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_geolocation__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_curiosidade_curiosidade__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_listacuriosidade_listacuriosidade__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var config = {
    apiKey: "AIzaSyC8WE9iYb6oH3uoi1N8hq2F_dd5eVVCr24",
    authDomain: "nearbeer-b5c74.firebaseapp.com",
    databaseURL: "https://nearbeer-b5c74.firebaseio.com",
    projectId: "nearbeer-b5c74",
    storageBucket: "nearbeer-b5c74.appspot.com",
    messagingSenderId: "661589353570"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_cliente_cliente__["a" /* ClientePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_clienteeditar_clienteeditar__["a" /* ClienteEditarPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_listacliente_listacliente__["a" /* ListaClientePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_mapa_mapa__["a" /* MapaPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_menusorteio_menusorteio__["a" /* MenuSorteioPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_registro_registro__["a" /* RegistroPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_sorteio_sorteio__["a" /* SorteioPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_usuario_usuario__["a" /* UsuarioPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_usuarioeditar_usuarioeditar__["a" /* UsuarioEditarPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_menusorteio_menusorteio__["a" /* MenuSorteioPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_curiosidade_curiosidade__["a" /* CuriosidadePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_listacuriosidade_listacuriosidade__["a" /* ListacuriosidadePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_19_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
                __WEBPACK_IMPORTED_MODULE_20_angularfire2_firestore__["b" /* AngularFirestoreModule */], __WEBPACK_IMPORTED_MODULE_18_angularfire2_auth__["b" /* AngularFireAuthModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_cliente_cliente__["a" /* ClientePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_clienteeditar_clienteeditar__["a" /* ClienteEditarPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_listacliente_listacliente__["a" /* ListaClientePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_mapa_mapa__["a" /* MapaPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_menusorteio_menusorteio__["a" /* MenuSorteioPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_registro_registro__["a" /* RegistroPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_sorteio_sorteio__["a" /* SorteioPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_usuario_usuario__["a" /* UsuarioPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_usuarioeditar_usuarioeditar__["a" /* UsuarioEditarPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_menusorteio_menusorteio__["a" /* MenuSorteioPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_curiosidade_curiosidade__["a" /* CuriosidadePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_listacuriosidade_listacuriosidade__["a" /* ListacuriosidadePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_geolocation__["a" /* Geolocation */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_menu_menu__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, afAuth) {
        var _this = this;
        this.afAuth = afAuth;
        platform.ready().then(function () {
            afAuth.authState.subscribe(function (auth) {
                if (auth == null) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_menu_menu__["a" /* MenuPage */];
                }
            });
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\ionic3\nearbeer\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\ionic3\nearbeer\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioEditarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__usuario_usuario__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/**
 * Generated class for the UsuarioeditarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UsuarioEditarPage = /** @class */ (function () {
    // usuario$: Observable<Usuario[]>;
    function UsuarioEditarPage(navCtrl, navParams, viewCtrl, db, afAuth, asCtrl, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.db = db;
        this.afAuth = afAuth;
        this.asCtrl = asCtrl;
        this.toast = toast;
        var uid = this.afAuth.auth.currentUser.uid;
        // this.usuarioRef = this.db.collection<Usuario>('usuarios');
        // this.usuarioRef = this.db.collection('usuarios');
        this.usuarioRef = this.db.collection('usuarios', function (ref) { return ref.where('id', '==', uid); });
        this.usuario$ = this.usuarioRef.valueChanges();
    }
    //  update(id: id) {
    //    this.usuarioRef.update(_usuario);
    //  }
    UsuarioEditarPage.prototype.salvar = function (form) {
        return __awaiter(this, void 0, void 0, function () {
            var nome, email, uid, obj;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        nome = form.value.nome;
                        email = form.value.email;
                        return [4 /*yield*/, this.afAuth.auth.currentUser.uid];
                    case 1:
                        uid = _a.sent();
                        obj = {
                            'nome': nome
                        };
                        return [2 /*return*/];
                }
            });
        });
    };
    UsuarioEditarPage.prototype.update = function (_usuario) {
        var _this = this;
        this.db.doc('usuarios/' + this.afAuth.auth.currentUser.uid).update({
            nome: _usuario.nome,
        }).then(function () {
            _this.toast.create({
                message: "Atualizado com Sucesso ",
                duration: 5000
            }).present();
            _this.viewCtrl.dismiss(__WEBPACK_IMPORTED_MODULE_4__usuario_usuario__["a" /* UsuarioPage */]);
        });
    };
    UsuarioEditarPage.prototype.ionViewWillLoad = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (data) {
            if (data && data.email && data.uid) {
                _this.toast.create({
                    message: "Perfil de usu\u00E1rios - [Edi\u00E7\u00E3o] ",
                    duration: 5000
                }).present();
            }
        });
    };
    UsuarioEditarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-usuarioeditar',template:/*ion-inline-start:"C:\ionic3\nearbeer\src\pages\usuarioeditar\usuarioeditar.html"*/'<ion-header id="registro" >\n  <ion-navbar  color="primary">\n    <ion-title ><div style="text-indent:1em; font-size:16px;">Perfil de Usuário - [Edição]</div></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list *ngFor="let usuario of usuario$ | async">\n\n     <form #form="ngForm" (ngSubmit)="update(usuario)" > \n\n      <ion-item>\n        <ion-label class="cor_fonte_laranja" stacked><b>Nome</b></ion-label>\n        <ion-input type="text" name="nome" [(ngModel)]="usuario.nome" ></ion-input>\n      </ion-item>\n\n        <button class="cor_fundo_laranja" ion-button block (click)="update(usuario)">Salvar</button>\n \n     </form> \n\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\ionic3\nearbeer\src\pages\usuarioeditar\usuarioeditar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], UsuarioEditarPage);
    return UsuarioEditarPage;
}());

//# sourceMappingURL=usuarioeditar.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaClientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cliente_cliente__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__clienteeditar_clienteeditar__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import {ClienteService} from '../../providers/cliente.service';


/**
 * Generated class for the ListaclientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListaClientePage = /** @class */ (function () {
    function ListaClientePage(db, navCtrl, afAuth, asCtrl) {
        this.db = db;
        this.navCtrl = navCtrl;
        this.afAuth = afAuth;
        this.asCtrl = asCtrl;
        var uid = afAuth.auth.currentUser.uid;
        this.lista = db
            .collection('clientes', function (ref) { return ref
            .where('uid', '==', uid); })
            .valueChanges();
        this.initializeItens();
    }
    ListaClientePage.prototype.add = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cliente_cliente__["a" /* ClientePage */]);
    };
    ListaClientePage.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    ListaClientePage.prototype.gerenciar = function (id) {
        var _this = this;
        this.asCtrl.create({
            buttons: [
                {
                    text: "Apagar",
                    role: "destructive",
                    handler: function () {
                        _this.db.doc("clientes/" + id).delete();
                    }
                },
                {
                    text: "Editar",
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__clienteeditar_clienteeditar__["a" /* ClienteEditarPage */], { id: id });
                    }
                },
                {
                    text: "Cancelar",
                    role: "cancel"
                }
            ]
        }).present();
    };
    ListaClientePage.prototype.initializeItens = function () {
        this.itens = this.lista;
    };
    ListaClientePage.prototype.getItens = function (ev) {
        // Reset items back to all of the items
        this.initializeItens();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.itens = this.itens.filter(function (item) {
                return (item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    ListaClientePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-listacliente',template:/*ion-inline-start:"C:\ionic3\nearbeer\src\pages\listacliente\listacliente.html"*/'<ion-header >\n	<ion-navbar color="primary">\n\n		<ion-title><div style="text-indent:1em; font-size:16px;">Lista de Clientes</div></ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding id="listacliente" class="cor_fundo_verde">\n\n  <ion-fab right bottom>\n    <button ion-fab color="primary" (click)="add()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n\n	<ion-list>\n    <ion-searchbar  (ionInput)="getItens($event)"></ion-searchbar>\n    <ion-card *ngFor="let cliente of lista | async" class="left-card-border_laranja">\n      <ion-item  \n        (click)="gerenciar(cliente.id)">\n        <!-- <ion-avatar item-start>\n          <img [src]="cliente.imagem" />\n        </ion-avatar> -->\n\n        <ion-grid>\n          <ion-row>\n            <ion-col col-4 ><b>Nome:</b> </ion-col>\n            <ion-col col-20><p><b>{{cliente.nome}}</b></p> </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-4><b>Email:</b> </ion-col>\n            <ion-col col-20><p><b>{{cliente.email}}</b></p> </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-4><b>Ender.:</b> </ion-col>\n            <ion-col col-20><p><b>{{cliente.endereco}}</b></p> </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-4><b>Status:</b> </ion-col>\n            <ion-col col-20><p><b>{{cliente.status}}</b></p></ion-col>\n          </ion-row>\n\n        </ion-grid>\n      </ion-item>\n      <ion-item><button ion-button full block class="cor_fundo_laranja">Ver no mapa</button></ion-item>\n    </ion-card>\n	</ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\ionic3\nearbeer\src\pages\listacliente\listacliente.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], ListaClientePage);
    return ListaClientePage;
}());

//# sourceMappingURL=listacliente.js.map

/***/ })

},[284]);
//# sourceMappingURL=main.js.map