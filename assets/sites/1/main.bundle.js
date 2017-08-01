webpackJsonp([1,4],{

/***/ 120:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 120;


/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(145);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(252),
        styles: [__webpack_require__(217)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__b_header_b_header_component__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__b_main_b_main_component__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__b_footer_b_footer_component__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__b_main_navigation_buttons_navigation_buttons_component__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__b_main_input_template_input_template_component__ = __webpack_require__(71);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__b_header_b_header_component__["a" /* BHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_7__b_main_b_main_component__["a" /* BMainComponent */],
            __WEBPACK_IMPORTED_MODULE_8__b_footer_b_footer_component__["a" /* BFooterComponent */],
            __WEBPACK_IMPORTED_MODULE_9__b_main_navigation_buttons_navigation_buttons_component__["a" /* NavigationButtonsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__b_main_input_template_input_template_component__["a" /* InputTemplateComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BFooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BFooterComponent = (function () {
    function BFooterComponent() {
    }
    BFooterComponent.prototype.ngOnInit = function () {
    };
    return BFooterComponent;
}());
BFooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-b-footer',
        template: __webpack_require__(253),
        styles: [__webpack_require__(218)]
    }),
    __metadata("design:paramtypes", [])
], BFooterComponent);

//# sourceMappingURL=b-footer.component.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BHeaderComponent = (function () {
    function BHeaderComponent() {
    }
    BHeaderComponent.prototype.ngOnInit = function () {
    };
    return BHeaderComponent;
}());
BHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-b-header',
        template: __webpack_require__(254),
        styles: [__webpack_require__(219)]
    }),
    __metadata("design:paramtypes", [])
], BHeaderComponent);

//# sourceMappingURL=b-header.component.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BMainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BMainComponent = (function () {
    function BMainComponent() {
        this.task = '';
        this.send = '';
        this.readyTemplate = '';
    }
    BMainComponent.prototype.ngOnInit = function () {
    };
    BMainComponent.prototype.onNavigationItemClicked = function (item) {
        this.task = item;
    };
    BMainComponent.prototype.onSendName = function (name) {
        this.send = name;
    };
    BMainComponent.prototype.onSendReadyTemplate = function (template) {
        this.readyTemplate = template;
    };
    BMainComponent.prototype.onSaveTemplateClicked = function (boolean) {
        this.disableButton = boolean;
    };
    return BMainComponent;
}());
BMainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-b-main',
        template: __webpack_require__(255),
        styles: [__webpack_require__(220)]
    }),
    __metadata("design:paramtypes", [])
], BMainComponent);

//# sourceMappingURL=b-main.component.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Elements; });
var Elements = (function () {
    function Elements() {
        this._elements = [];
        this._cssRules = [];
        this._cssTemplate = [];
    }
    Elements.prototype._fixElementName = function (tags, blockName, classNames, mod) {
        var inputStr = classNames;
        var arr = [];
        var hyphen = "";
        if (inputStr.indexOf("-") === -1) {
            for (var i = 0; i <= inputStr.length; i++) {
                if (!isNaN(inputStr[i])) {
                    arr.push(inputStr[i]);
                    inputStr = inputStr.replace(inputStr[i], "");
                    i--;
                    hyphen = "-";
                }
            }
            inputStr = inputStr + hyphen;
            for (var i = 0; i < arr.length; i++) {
                inputStr = inputStr + arr[i];
            }
        }
        this.generateRuleCss(blockName, inputStr, mod);
        var tag = '<' + tags;
        var closeTag = '\n</' + tags + '>\n';
        var className = ' class="' + blockName + '__' + inputStr + mod + '">';
        this._elements.push({
            "tag": tag,
            "name": inputStr,
            "className": className,
            "closeTag": closeTag,
            "childs": []
        });
    };
    Object.defineProperty(Elements.prototype, "items", {
        get: function () {
            return this._elements;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Elements.prototype, "cssRules", {
        get: function () {
            return this._cssRules;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Elements.prototype, "cssTemplate", {
        get: function () {
            return this._cssTemplate;
        },
        enumerable: true,
        configurable: true
    });
    Elements.prototype.addElement = function (tags, blockName, classNames, modifier) {
        var mod = modifier;
        if (!isNaN(mod[0])) {
            alert("modifier is incorrect: " + mod);
        }
        else if (mod === undefined || mod === "") {
            mod = "";
        }
        else {
            mod = "--" + mod;
        }
        if (tags === undefined || tags === "") {
            alert('tag is empty');
        }
        if (classNames === undefined || classNames === "" || !isNaN(classNames[0])) {
            alert('element name is empty');
        }
        else {
            this._fixElementName(tags, blockName, classNames, mod);
        }
    };
    Elements.prototype.addChildElement = function (tagChild, childElem, modifier, classNames, index) {
        var childClassName = childElem.value;
        var tags = tagChild.value;
        var mod = modifier.value;
        if (!isNaN(mod[0])) {
            throw new Error("modifier is incorrect: " + mod);
        }
        else if (mod === undefined || mod === "") {
            mod = "";
        }
        else {
            mod = "--" + mod;
        }
        if (tags === undefined || tags === "") {
            throw new Error("tag is empty: " + tags);
        }
        if (childClassName === "" || childClassName === undefined || !isNaN(childClassName[0])) {
            throw new Error("Invalid input type: " + '\"' + childClassName + '\"|' + ' Please use the correct spelling of the element: \"element-1\"');
        }
        this.generateRuleCss(classNames, childClassName, mod);
        this._elements[index].childs.push({
            "tag": '\n<' + tags,
            "name": ' class=\"' + classNames + '__' + childClassName + mod + '\">',
            "closeTag": '</' + tags + '>'
        });
        tagChild.value = "";
        childElem.value = "";
        modifier.value = "";
    };
    Elements.prototype.removeElement = function (index) {
        this._elements.splice(index, 1);
    };
    Elements.prototype.removeChildElement = function (name) {
        for (var i = 0; i < this._elements.length; i++) {
            for (var j = 0; j < this._elements[i].childs.length; j++) {
                if (this._elements[i].childs[j].name === name) {
                    this._elements[i].childs.splice(j, 1);
                }
            }
        }
    };
    Elements.prototype.generateCss = function (block, template) {
        var mainRule = '.' + block + ' { /*enter your property..*/ }';
        this._cssTemplate.push({
            "mainRule": mainRule,
            "rules": [].concat(template)
        });
    };
    Elements.prototype.generateRuleCss = function (block, element, modifier) {
        var rule;
        if (modifier === undefined || modifier === "") {
            rule = '.' + block + '__' + element + ' { /*enter your property..*/ }';
            this._cssRules.push(rule);
        }
        else {
            rule = '.' + block + '__' + element + modifier + ' { /*enter your property..*/ }';
            this._cssRules.push(rule);
        }
        this.generateCss(block, this._cssRules);
    };
    return Elements;
}());

//# sourceMappingURL=elements.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SavedTamplate; });
var SavedTamplate = (function () {
    function SavedTamplate() {
        this._templates = [];
    }
    SavedTamplate.prototype.templates = function (template) {
        this._templates.push(template);
    };
    SavedTamplate.prototype.listTemplates = function () {
        return this._templates;
    };
    return SavedTamplate;
}());

//# sourceMappingURL=saved-template.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserCode; });
var UserCode = (function () {
    function UserCode() {
        this._userTemplate = [];
        this._tags = [];
        this._classNames = [];
    }
    UserCode.prototype.findSubstring = function (string, target) {
        var str = string;
        var innerElement = target;
        var pos = 0;
        var arr = [];
        while (true) {
            var foundPos = str.indexOf(innerElement, pos);
            if (foundPos === -1)
                break;
            arr.push(foundPos);
            pos = foundPos + 1;
        }
        return arr;
    };
    UserCode.prototype.checkCodeString = function (check) {
        var str = check;
        var reg = /./g;
        if (str.match(reg)) {
            return check;
        }
        else {
            alert('Invalid symbols type');
        }
    };
    UserCode.prototype.codeTags = function (before, from, arr) {
        //find all tags in arr[str]        
        // if str = div.header work this rule ↓
        if (typeof (before) === "number" && typeof (from) === "number") {
            if (from === 0 && before !== 0) {
                this._tags.push(arr.substring(from, before));
            }
            if (before === 0 && from === 0) {
                this._tags.push(arr);
            }
            else if (before !== 0 && from !== 0) {
                console.error('Error: ' + arr);
            }
        }
        else if (typeof (before) === "object" && typeof (from) === "object") {
            for (var i = 0; i < before.length; i++) {
                if (i === 0) {
                    this._tags.push({
                        "parent": arr.substring(0, before[0]),
                        "childs": []
                    });
                }
                else if (i === (before.length - 1)) {
                    break;
                }
                else {
                    this._tags[this._tags.length - 1].childs.push({
                        "child-parent": arr.substring(from[i - 1] + 1, before[i]),
                        "children": arr.substring(from[i] + 1, before[i + 1])
                    });
                }
            }
        }
        else if (typeof (before) === "object" && typeof (from) === "number") {
            for (var i = 0; i < before.length; i++) {
                if (i === 0) {
                    this._tags.push({
                        "parent": arr.substring(0, before[0]),
                        "child": ""
                    });
                }
                else {
                    this._tags[this._tags.length - 1].child = arr.substring(from + 1, before[i]);
                }
            }
        }
        else {
            console.error('Error: ' + arr);
        }
    };
    UserCode.prototype.codeClassName = function (from, before, arr) {
        //find all class names in arr[str]       
        // if str = div.header work this rule ↓
        if (typeof (from) === "number" && typeof (before) === "number") {
            if (before === 0 && from !== 0) {
                from = from + 1;
                before = arr.length - from;
                this._classNames.push(arr.substr(from, before));
            }
        }
        else if (typeof (from) === "object" && typeof (before) === "object") {
            var step = 0;
            for (var i = 0; i < from.length; i++) {
                if (i === 0) {
                    var end = before[0] - from[0];
                    end = end - 1;
                    this._classNames.push({
                        "parent": arr.substr(from[0] + 1, end),
                        "childs": []
                    });
                }
                else if (i === (from.length - 1)) {
                    break;
                }
                else {
                    // parse string by the name class
                    var end = before[i] - from[i]; // last point parent element
                    end = end - 1;
                    step++; //step for correct display child elem
                    var beforeEnd = before[step + i] - from[i + 1]; // last point child element
                    beforeEnd = beforeEnd - 1;
                    beforeEnd = isNaN(beforeEnd) ? arr.length : beforeEnd;
                    // if child is NaN, add to him length string. 
                    //This if need becouse beforeEnd became not found in [before]                    
                    this._classNames[this._classNames.length - 1].childs.push({
                        "child-parent": arr.substr(from[i] + 1, end),
                        "children": arr.substr(from[step + i] + 1, beforeEnd)
                    });
                    step--; // reset step
                }
            }
        }
        else if (typeof (from) === "object" && typeof (before) === "number") {
            for (var i = 0; i < from.length; i++) {
                if (i === 0) {
                    var end = before - from[0];
                    end = end - 1;
                    this._classNames.push({
                        "parent": arr.substr(from[0] + 1, end),
                        "child": ""
                    });
                }
                else {
                    this._classNames[this._classNames.length - 1].child = arr.substr(from[i] + 1);
                }
            }
        }
    };
    UserCode.prototype.bundleTemplate = function (tags, classNames) {
        var bundleObj = {
            html: "",
            css: ""
        };
        if (tags.length == 1 && classNames.length == 1) {
            if (typeof (tags[0]) !== 'object' && typeof (classNames[0]) !== 'object') {
                for (var i = 0; i < tags.length; i++) {
                    bundleObj.html = '<' + tags[i] + " class=\"" + classNames[i] + "\"></" + tags[i] + ">";
                    bundleObj.css = '.' + classNames[i] + " { /*enter your property..*/ }";
                }
            }
            else if (tags[0].hasOwnProperty("childs")) {
                //loop bundle for html
                var children = "";
                for (var i = 0; i < tags[0].childs.length; i++) {
                    children += '<' + tags[0].childs[i]["child-parent"] + " class=\"" + classNames[0].parent + "__" + classNames[0].childs[i]["child-parent"] + "\">\n" +
                        "<" + tags[0].childs[i].children + " class=\"" + classNames[0].childs[i]["child-parent"] + "__" + classNames[0].childs[i].children + "\"></" + tags[0].childs[i].children + ">"
                        + "</" + tags[0].childs[i]["child-parent"] + ">";
                }
                bundleObj.html = '<' + tags[0].parent + " class=\"" + classNames[0].parent + "\">\n" +
                    children + "</" + tags[0].parent + ">";
                //loop bundle for css rules
                bundleObj.css += '.' + classNames[0].parent + " { /*enter your property..*/ }";
                var lastElem = classNames[0].childs.length - 1;
                for (var j = 0; j < classNames[0].childs.length; j++) {
                    if (classNames[0].childs.length > 1 && j == lastElem) {
                        bundleObj.css += '.' + classNames[0].childs[j]["child-parent"] + "__" + classNames[0].childs[j].children + " { /*enter your property..*/ }";
                    }
                    else {
                        bundleObj.css += '.' + classNames[0].parent + "__" + classNames[0].childs[j]["child-parent"] + " { /*enter your property..*/ }";
                        bundleObj.css += '.' + classNames[0].childs[j]["child-parent"] + "__" + classNames[0].childs[j].children + " { /*enter your property..*/ }";
                    }
                }
            }
            else {
                //loop for bundle html tags user-code
                for (var i = 0; i < tags.length; i++) {
                    bundleObj.html += '<' + tags[i].parent + " class=\"" + classNames[i].parent + "\">\n" +
                        '<' + tags[i].child + " class=\"" + classNames[i].child + "\">" + "</" + tags[i].child + ">\n"
                        + "</" + tags[i].parent + ">\n";
                }
                //loop for bundle css user-code
                for (var j = 0; j < classNames.length; j++) {
                    bundleObj.css += '.' + classNames[j].parent + " { /*enter your property..*/ }\n";
                    bundleObj.css += '.' + classNames[j].child + " { /*enter your property..*/ }\n";
                }
            }
        }
        else {
            //loop for bundle user-code have 2 inner or more childs
            //html tags
            for (var i = 0; i < tags.length; i++) {
                if (typeof (tags[i]) === 'object') {
                    if (tags[i].hasOwnProperty("childs")) {
                        var children = "";
                        for (var l = 0; l < tags[i].childs.length; l++) {
                            children += '<' + tags[i].childs[l]["child-parent"] + " class=\"" + classNames[i].parent + "__" + classNames[i].childs[l]["child-parent"] + "\">\n " +
                                "<" + tags[i].childs[l].children + " class=\"" + classNames[i].childs[l]["child-parent"] + "__" + classNames[i].childs[l].children + "\"></" + tags[i].childs[l].children + ">\n"
                                + "</" + tags[i].childs[l]["child-parent"] + ">\n";
                        }
                        bundleObj.html = '<' + tags[i].parent + " class=\"" + classNames[i].parent + "\">\n " +
                            children + "</" + tags[i].parent + ">\n";
                    }
                    else {
                        bundleObj.html += '<' + tags[i].parent + " class=\"" + classNames[i].parent + "\">\n " +
                            '<' + tags[i].child + " class=\"" + classNames[i].parent + "__" + classNames[i].child + "\">" + "</" + tags[i].child + ">\n "
                            + "</" + tags[i].parent + ">\n ";
                    }
                }
                else {
                    bundleObj.html = '<' + tags[i] + " class=\"" + classNames[i] + "\"></" + tags[i] + ">";
                }
            }
            //loop for bundle user-code have 2 inner or more childs
            //css rules
            for (var c = 0; c < classNames.length; c++) {
                if (typeof (classNames[c]) === 'object') {
                    if (classNames[c].hasOwnProperty("childs")) {
                        bundleObj.css += '.' + classNames[c].parent + " { /*enter your property..*/ }";
                        var lastElem = classNames[c].childs.length - 1;
                        for (var j = 0; j < classNames[c].childs.length; j++) {
                            if (classNames[c].childs.length > 1 && j == lastElem) {
                                bundleObj.css += '.' + classNames[c].childs[j]["child-parent"] + "__" + classNames[c].childs[j].children + " { /*enter your property..*/ }";
                            }
                            else {
                                bundleObj.css += '.' + classNames[c].parent + "__" + classNames[c].childs[j]["child-parent"] + " { /*enter your property..*/ }";
                                bundleObj.css += '.' + classNames[c].childs[j]["child-parent"] + "__" + classNames[c].childs[j].children + " { /*enter your property..*/ }";
                            }
                        }
                    }
                    else {
                        bundleObj.css += '.' + classNames[c].parent + " { /*enter your property..*/ }";
                        bundleObj.css += '.' + classNames[c].parent + "__" + classNames[c].child + " { /*enter your property..*/ }";
                    }
                }
                else {
                    bundleObj.css = '.' + classNames[c] + " { /*enter your property..*/ }";
                }
            }
        }
        this._userTemplate.push(bundleObj);
    };
    Object.defineProperty(UserCode.prototype, "userTemplate", {
        get: function () {
            return this._userTemplate;
        },
        enumerable: true,
        configurable: true
    });
    UserCode.prototype.setUserCode = function (code) {
        // this.checkCodeString(code);
        var str = code;
        //let str = 'div.header\ndiv.test>ul.menu>li.active>p.test\ndiv';   
        this._tags = []; //clear array tags
        this._classNames = []; //clear array class names
        var arrString = str.split('\n');
        var dot = [];
        var innerElement = [];
        var a = 0;
        // add items in arrays [dot] [innerElement] from arrString[],
        // converting arrays
        // two function for creating full object from items [dot] and [innerElemen]
        for (var i = 0; i < arrString.length; i++) {
            dot.push(this.findSubstring(arrString[i], '.').join());
            innerElement.push(this.findSubstring(arrString[i], '>').join());
            //converting array, string to integer
            for (; a < dot.length; a++) {
                //find sub string to break a string into an array and converting to integer
                if (dot[a].indexOf(',') > 0) {
                    dot[a] = dot[a].split(','); //converting string to array
                    for (var s = 0; s < dot[a].length; s++) {
                        dot[a][s] = Number(dot[a][s]);
                    }
                }
                else {
                    dot[a] = Number(dot[a]);
                }
                //read up ↑↑↑
                if (innerElement[a].indexOf(',') > 0) {
                    innerElement[a] = innerElement[a].split(',');
                    for (var s = 0; s < innerElement[a].length; s++) {
                        innerElement[a][s] = Number(innerElement[a][s]);
                    }
                }
                else {
                    innerElement[a] = Number(innerElement[a]);
                }
                this.codeTags(dot[a], innerElement[a], arrString[i]);
                this.codeClassName(dot[a], innerElement[a], arrString[i]);
            }
        }
        this.bundleTemplate(this._tags, this._classNames);
    };
    return UserCode;
}());

//# sourceMappingURL=user-code.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonFooter; });
var ButtonFooter = (function () {
    function ButtonFooter() {
        this._footerTemplate = {
            "name": 'footer',
            "header": '<footer class="footer">',
            "closeHeader": "</footer>",
            "disabled": false,
            "margin": 0
        };
    }
    Object.defineProperty(ButtonFooter.prototype, "template", {
        get: function () {
            return this._footerTemplate;
        },
        enumerable: true,
        configurable: true
    });
    return ButtonFooter;
}());

//# sourceMappingURL=button-footer.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonHeader; });
var ButtonHeader = (function () {
    function ButtonHeader() {
        this._headerTemplate = {
            "name": 'header',
            "header": '<header class="header">',
            "closeHeader": "</header>",
            "disabled": false,
            "margin": 0
        };
    }
    Object.defineProperty(ButtonHeader.prototype, "template", {
        get: function () {
            return this._headerTemplate;
        },
        enumerable: true,
        configurable: true
    });
    return ButtonHeader;
}());

//# sourceMappingURL=button-header.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonMain; });
var ButtonMain = (function () {
    function ButtonMain() {
        this._mainTemplate = {
            "name": 'main',
            "header": '<main class="main">',
            "closeHeader": "</main>",
            "disabled": false,
            "margin": 0
        };
    }
    Object.defineProperty(ButtonMain.prototype, "template", {
        get: function () {
            return this._mainTemplate;
        },
        enumerable: true,
        configurable: true
    });
    return ButtonMain;
}());

//# sourceMappingURL=button-main.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonUserCode; });
var ButtonUserCode = (function () {
    function ButtonUserCode() {
        this._userCodeTemplate = {
            "name": 'user-code',
            "header": '<user class="code">',
            "closeHeader": "</user>",
            "disabled": false,
            "margin": 0
        };
    }
    Object.defineProperty(ButtonUserCode.prototype, "template", {
        get: function () {
            return this._userCodeTemplate;
        },
        enumerable: true,
        configurable: true
    });
    return ButtonUserCode;
}());

//# sourceMappingURL=button-user-code.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__button_header__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__button_main__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__button_footer__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__button_user_code__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__paker_templates__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__input_template_input_template_component__ = __webpack_require__(71);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationButtonsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NavigationButtonsComponent = (function () {
    function NavigationButtonsComponent() {
        this._buttonsName = [];
        this.generatedButton = true;
        this.nameButtonsSaved = "";
        this.generateTemplate = "";
        this.itemClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]();
        this.isOn = this.generatedButton;
        this.isReady = true;
        this.imgPath = './src/assets/img/banana.png';
        this._buttonHeader = new __WEBPACK_IMPORTED_MODULE_1__button_header__["a" /* ButtonHeader */]();
        this._buttonMain = new __WEBPACK_IMPORTED_MODULE_2__button_main__["a" /* ButtonMain */]();
        this._buttonFooter = new __WEBPACK_IMPORTED_MODULE_3__button_footer__["a" /* ButtonFooter */]();
        this._buttonUserCode = new __WEBPACK_IMPORTED_MODULE_4__button_user_code__["a" /* ButtonUserCode */]();
        this._paker = new __WEBPACK_IMPORTED_MODULE_5__paker_templates__["a" /* pakerTemplates */]();
        this._inputTemplate = new __WEBPACK_IMPORTED_MODULE_6__input_template_input_template_component__["a" /* InputTemplateComponent */]();
        this.addButtonName(this._buttonHeader.template);
        this.addButtonName(this._buttonMain.template);
        this.addButtonName(this._buttonFooter.template);
        this.addButtonName(this._buttonUserCode.template);
    }
    NavigationButtonsComponent.prototype.decorHtmlTemplate = function () {
    };
    NavigationButtonsComponent.prototype.markButton = function (name) {
        switch (name) {
            case 'header':
                this._buttonHeader.template.disabled = true;
                break;
            case 'main':
                this._buttonMain.template.disabled = true;
                break;
            case 'footer':
                this._buttonFooter.template.disabled = true;
                break;
            case 'user-code':
                this._buttonUserCode.template.disabled = true;
                break;
            default:
                console.log('not correct name' + name);
        }
    };
    NavigationButtonsComponent.prototype.chekMarkButton = function () {
        var _this = this;
        var buttons = this._buttonsName;
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].disabled === true) {
                buttons[i].margin = 10;
            }
            else {
                buttons[i].margin = 0;
            }
        }
        setTimeout(function () {
            _this.isReady = false;
        }, 500);
    };
    NavigationButtonsComponent.prototype.reloadPage = function () {
        setTimeout(function () {
            window.location.reload();
        }, 1500);
    };
    NavigationButtonsComponent.prototype.addButtonName = function (template) {
        return this._buttonsName.push(template);
    };
    NavigationButtonsComponent.prototype.onItemClicked = function (item) {
        this.itemClicked.emit(item);
    };
    NavigationButtonsComponent.prototype.generateProject = function () {
        this._paker.setHtmlCode(this.generateTemplate);
        this._paker.setCssCode(this.generateTemplate);
        this._paker.generateZip();
        this.reloadPage();
    };
    NavigationButtonsComponent.prototype.ngOnInit = function () { };
    NavigationButtonsComponent.prototype.ngOnChanges = function () {
        if (this.generatedButton === false) {
            this.isOn = false;
        }
        if (this.nameButtonsSaved !== "") {
            this.markButton(this.nameButtonsSaved);
        }
    };
    return NavigationButtonsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Object)
], NavigationButtonsComponent.prototype, "generatedButton", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Object)
], NavigationButtonsComponent.prototype, "nameButtonsSaved", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Object)
], NavigationButtonsComponent.prototype, "generateTemplate", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */])(),
    __metadata("design:type", Object)
], NavigationButtonsComponent.prototype, "itemClicked", void 0);
NavigationButtonsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-navigation-buttons',
        template: __webpack_require__(257),
        styles: [__webpack_require__(222)]
    }),
    __metadata("design:paramtypes", [])
], NavigationButtonsComponent);

//# sourceMappingURL=navigation-buttons.component.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jszip__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jszip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jszip__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pakerTemplates; });

var pakerTemplates = (function () {
    function pakerTemplates() {
        this.links = "";
        this._viewTemplate = {
            "html": "",
            "cssHeader": "",
            "cssMain": "",
            "cssFooter": "",
            "cssUser": ""
        };
    }
    pakerTemplates.prototype.setHtmlCode = function (object) {
        var arr = [];
        for (var i = 0; i < object.length; i++) {
            arr.push(object[i].block);
            arr.push(object[i].body);
            arr.push(object[i].endBlock);
            if (object[i].hasOwnProperty("user-code")) {
                arr.push(object[i]["user-code"].html);
            }
        }
        var bodyHtml = arr.join('\n');
        this.addHeadLinks(object);
        var htmlBody = "\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n<title>Generate Banana BEM</title>\n" + this.links + "\n</head>\n<body>\n    \n"
            + bodyHtml + "\n\n<!-- GENERATE WITH BANANA BEM -->\n    <!-- Thanks for using -->\n</body>\n</html>\n     ";
        this._viewTemplate.html = htmlBody;
    };
    pakerTemplates.prototype.setCssCode = function (object) {
        for (var i = 0; i < object.length; i++) {
            if (object[i].hasOwnProperty("user-code")) {
                this.pakerCss("u", object[i]["user-code"].css);
            }
            else {
                this.pakerCss(object[i].endBlock[2], object[i].css);
            }
        }
    };
    pakerTemplates.prototype.addHeadLinks = function (object) {
        for (var i = 0; i < object.length; i++) {
            var name = object[i].endBlock[2];
            if (object[i].hasOwnProperty("user-code")) {
                this.links = this.links + '\n<link rel=\"stylesheet\" href=\"./src/user-code/user-code.css\">';
            }
            else {
                switch (name) {
                    case 'h':
                        this.links = this.links + '<link rel=\"stylesheet\" href=\"./src/header/header.css\">\n';
                        break;
                    case 'm':
                        this.links = this.links + '<link rel=\"stylesheet\" href=\"./src/main/main.css\">';
                        break;
                    case 'f':
                        this.links = this.links + '\n<link rel=\"stylesheet\" href=\"./src/footer/footer.css\">';
                        break;
                    default:
                        console.log('not correct name' + name);
                }
            }
        }
    };
    pakerTemplates.prototype.pakerCss = function (name, css) {
        var arr = [];
        if (css[0].hasOwnProperty("rules")) {
            var lastElement = css.length - 1;
            var leng = css[lastElement].rules.length;
            for (var i = 0; i < css[lastElement].rules.length; i++) {
                arr.push(css[lastElement].rules[i]);
            }
        }
        var stringCSS = arr.join('\n');
        var cssBody = "\n        /* GENERATE WITH BANANA BEM */\n        /* THANKS FOR USING ^_^ */\n        \n   ";
        switch (name) {
            case 'h':
                this._viewTemplate.cssHeader = cssBody + css[0].mainRule + '\n' + stringCSS;
                break;
            case 'm':
                this._viewTemplate.cssMain = cssBody + css[0].mainRule + '\n' + stringCSS;
                break;
            case 'f':
                this._viewTemplate.cssFooter = cssBody + css[0].mainRule + '\n' + stringCSS;
                break;
            case 'u':
                this._viewTemplate.cssUser = cssBody + css;
                break;
            default:
                console.log('not correct name' + name);
        }
    };
    pakerTemplates.prototype.generateZip = function () {
        var zip = new __WEBPACK_IMPORTED_MODULE_0_jszip__();
        zip.file("index.html", this._viewTemplate.html);
        if (this._viewTemplate.cssHeader !== "") {
            zip.file("src/header/header.css", this._viewTemplate.cssHeader);
        }
        if (this._viewTemplate.cssMain !== "") {
            zip.file("src/main/main.css", this._viewTemplate.cssMain);
        }
        if (this._viewTemplate.cssFooter !== "") {
            zip.file("src/footer/footer.css", this._viewTemplate.cssFooter);
        }
        if (this._viewTemplate.cssUser !== "") {
            zip.file("src/user-code/user-code.css", this._viewTemplate.cssUser);
        }
        zip.generateAsync({ type: "base64" })
            .then(function (content) {
            location.href = "data:application/zip;base64," + content;
        });
    };
    return pakerTemplates;
}());

//# sourceMappingURL=paker-templates.js.map

/***/ }),

/***/ 145:
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

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".footer {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;    \r\n    font-size: 0.7em;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n.footer p {\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".header {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    padding: 0 3%;\r\n}\r\n.header__logo h1 {\r\n  margin-bottom: 0.2em;\r\n}\r\n.header__logo span { margin: 0 11px; }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".main {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;    \r\n    padding: 0 4%;    \r\n}\r\n\r\n.main__nav {\r\n   -webkit-box-flex: 1;\r\n       -ms-flex-positive: 1;\r\n           flex-grow: 1;\r\n}\r\n.main__inp-template {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex-positive: 1;\r\n            flex-grow: 1;\r\n}\r\n\r\n@media screen and (max-width: 767px) and (min-width: 0px) {\r\n\r\n    .main > * {\r\n        display: none;\r\n    }\r\n    .main::before {\r\n        padding: 30% 10%;        \r\n        content: \"Your device is not supported\";\r\n        font-size: 2em;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".inp-temaplate__template {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;    \r\n}\r\n.template__caption {\r\n    text-align: center;\r\n    font-weight: 700;\r\n    font-size: 22px;\r\n    color: #7e3f12;\r\n}\r\n.template__caption::first-letter {\r\n    text-transform: uppercase;\r\n}\r\n.template__user-code {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    font-size: 1.2em;\r\n}\r\n.user-code {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n.user-code__textarea > textarea:focus {\r\n    outline: none;\r\n}\r\n.user-code__buttons {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    padding-left: 10px;\r\n}\r\n.user-code__buttons > * {\r\n   margin-bottom: 20px;\r\n}\r\n.user-code__buttons > span > input {\r\n    display: inline-block;\r\n    width: 18px;\r\n    cursor: pointer;\r\n}\r\n.template__code-block {\r\n   margin-left: 60px;\r\n   font-size: 17px;\r\n}\r\n.code-block__open-tag, .code-block__close-tag {\r\n    padding: 15px 0 5px 0;\r\n}\r\n.code-block__elements {\r\n  padding-top: 10px;\r\n  padding-left: 15px;\r\n  padding-bottom: 15px;\r\n}\r\n.code-block__elements:last-child {\r\n    padding-bottom: 10px;\r\n}\r\n.elements__child-element {\r\n    padding: 10px 10px 5px 10px;\r\n}\r\n.elements-add {\r\n    padding: 2px 9px;\r\n    border-radius: 5px;\r\n    background-color: yellowgreen;\r\n    color: #ffffff;\r\n    margin-left: 3px;\r\n    transition: color 0.3s, background-color 0.2s;\r\n}\r\n.elements-add:hover {\r\n    cursor: pointer;\r\n    color: #000000;\r\n    background-color: #1acd02;\r\n}\r\n.elements-deleted {\r\n    padding: 2px 9px;\r\n    border-radius: 5px;\r\n    background-color: #99ccff;\r\n    color: #ffffff;\r\n    margin-left: -15px;\r\n    transition: color 0.3s, background-color 0.2s;\r\n}\r\n.elements-deleted:hover {\r\n    cursor: pointer;\r\n    color: #000000;\r\n    background-color: #11ccff;\r\n}\r\n.child-element {\r\n    padding: 0 10px 10px 25px;\r\n}\r\n.child-element__input-form {\r\n    display: inline-block;\r\n}\r\n.name-element--child {\r\n    margin: -1px 2px;\r\n}\r\n.code-block__sub-elem span:first-child {\r\n    background-color: bisque;\r\n    border-radius: 20px;\r\n    padding: 0 7px;\r\n    border: 1px solid #7e3f12;\r\n    font-size: 20px;\r\n}\r\n.code-block__sub-elem span:first-child:hover {\r\n    cursor: pointer;\r\n}\r\n.code-block__select {\r\n    border: 0;\r\n    border-bottom: 0.5px solid #7e3f12;\r\n}\r\n.code-block__select:focus {\r\n    outline: 0;\r\n    border-bottom: 0.5px solid #7e3f12;\r\n}\r\n.code-block__name-element {\r\n    border: 0;\r\n    border-bottom: 0.5px solid #7e3f12;    \r\n    width: 120px;\r\n}\r\n.code-block__name-element:hover { cursor: pointer; }\r\n.code-block__name-element:focus {\r\n    outline: 0;\r\n}\r\n.code-block__modifier {\r\n    font-size: 1em;\r\n    font-weight: bold;\r\n    margin-left: 10px;\r\n}\r\n.code-block__modifier:hover {\r\n    cursor: pointer;\r\n}\r\n.code-block {\r\n    position: relative;\r\n}\r\n.code-block__modifier--input {\r\n    border: 0;\r\n    border-bottom: 0.5px solid #7e3f12;    \r\n    width: 120px;\r\n}\r\n.code-block__modifier--input:focus {\r\n    outline: 0;\r\n}\r\n.code-block__modifier:hover + .modifier {\r\n    display: block;    \r\n}\r\n.modifier {\r\n    display: none;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    width: 300px;\r\n    height: 150px;\r\n    padding: 0 10px;\r\n    background-color: bisque;\r\n    border: 1px solid #7e3f12;\r\n    border-radius: 10px;    \r\n}\r\n.inp-template__save-btn {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    width: 50%;\r\n    height: 150px;\r\n}\r\n.btn {\r\n    border: 0;\r\n}\r\n.save-btn {\r\n    border-radius: 5px;\r\n    width: 80px;\r\n    height: 40px;\r\n    background-color: #7e3f12;\r\n    color: #fff;\r\n    transition: background-color 0.3s, color 0.4s;\r\n}\r\n.save-btn:hover {\r\n    cursor: pointer;\r\n    background-color:#3e3f12;\r\n    color: yellow;\r\n}\r\n\r\n.elements-icon {\r\n    padding: 5px;\r\n    background-color: #11ccff;\r\n    border-radius: 5px;\r\n    color: #ffffff;\r\n    -webkit-transform: rotate(90deg);\r\n            transform: rotate(90deg);\r\n    cursor: pointer;\r\n}\r\n\r\n@media screen and (max-width: 1460px) {\r\n\r\n   .modifier {\r\n    top: 80%;\r\n    left: 35%;\r\n   }\r\n\r\n}\r\n\r\n@media screen and (max-width: 767px) and (min-width: 320px) {\r\n\r\n   .inp-template__template {\r\n       display: none;\r\n   }\r\n   \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".nav__container {    \r\n    display: -webkit-box;    \r\n    display: -ms-flexbox;    \r\n    display: flex;\r\n}\r\n\r\n.nav__menu {\r\n    list-style: none;\r\n    padding: 0;\r\n    width: 140px;\r\n}\r\n\r\n.nav__menu li {\r\n    margin: 20px 0;\r\n    transition: margin-left .5s;\r\n}\r\n\r\n.nav__menu li:hover {\r\n    margin-left: 10px;\r\n}\r\n\r\n.nav__btn-ready {\r\n    margin: 48px 45px;\r\n}\r\n\r\n.nav__compile {\r\n    margin: 35px 90px;\r\n}\r\n\r\n.btn {\r\n    border: 0;\r\n    border: 1px solid #000;\r\n    background: transparent;\r\n    transition: background-color .2s, color .4s;\r\n}\r\n.btn:hover { \r\n    cursor: pointer;\r\n    color:#fff68f;\r\n    background-color:#7e3f12;\r\n}\r\n\r\n.btn--menuButtons {\r\n    width: 110px;\r\n    height: 40px;\r\n    color:#7e3f12;\r\n}\r\n.btn--disbled {    \r\n    color:#fff68f;\r\n    background-color:#7e3f12;\r\n    transition: margin-left 0.4s;\r\n}\r\n.btn--disbled:hover {\r\n    cursor: not-allowed;\r\n}\r\n.btn:first-letter {\r\n    text-transform: uppercase;\r\n}\r\n.btn--ready {\r\n    padding: 20px 30px;\r\n    background-color: #7e3f12;\r\n    color: #fff68f;\r\n}\r\n.ready {\r\n display: none;\r\n}\r\n.disabled {\r\n    opacity: 0.4;\r\n    \r\n}\r\n.disabled:hover {\r\n  cursor: not-allowed;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 252:
/***/ (function(module, exports) {

module.exports = "<app-b-header></app-b-header>\n<app-b-main></app-b-main>\n<app-b-footer></app-b-footer>\n\n"

/***/ }),

/***/ 253:
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <div class=\"footer__text\">\n    <p>Artur Lapaev</p> \n    <p>Epam Traning &copy; 2017</p>\n   </div>\n</footer>"

/***/ }),

/***/ 254:
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n   <div class=\"header__logo\">\n     <h1>Banana BEM</h1>\n     <span>Generate your template</span>\n   </div>\n</header>\n"

/***/ }),

/***/ 255:
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\n  <app-navigation-buttons (itemClicked)=\"onNavigationItemClicked($event)\" [generateTemplate]=\"readyTemplate\" [nameButtonsSaved]=\"send\" [generatedButton]=\"disableButton\" class=\"main__nav\"></app-navigation-buttons>\n  <app-input-template (sendReadyTemplate)=\"onSendReadyTemplate($event)\" (sendingName)=\"onSendName($event)\" (saveBtnClicked)=\"onSaveTemplateClicked($event)\" [renderToDo]=\"task\" class=\"main__inp-template\"></app-input-template>\n</main>\n\n\n"

/***/ }),

/***/ 256:
/***/ (function(module, exports) {

module.exports = "<div class=\"inp-template__template \">\n    <p class=\"template__caption\">\n        {{renderToDo.name}}\n    </p>\n    <div *ngIf=\"renderToDo.name === 'user-code'\" class=\"template__info-user-code\">\n        <div class=\"info-user-code\">\n            <p>How to use: </p>\n            <p>\n                <b>first:</b> selector , <b>second:</b> <b>.</b>class , <b>third:</b> <b> > </b> add child element.\n                <br>\n                <span><b>Example:</b> <br>\n        div.header <br>\n        div.header>div.nav\n        </span>\n            </p>\n        </div>\n        <div class=\"info-user-code info-user-code--warning\">\n            <span><strong>Warning! </strong> user-code does not work with such examples: </span>\n            <p>\n                <span>div.header>div</span> <br>\n                <span>div>div.header>ul and etc.</span>\n            </p>\n        </div>\n        <div class=\"user-code\">\n\n            <div class=\"user-code__textarea\">\n                <textarea #userCode cols=\"50\" rows=\"15\" [style.background]=\"this.backgroundArea\" [style.color]=\"this.textColorArea\"></textarea>\n            </div>\n\n            <div class=\"user-code__buttons\">\n                <span> background: <input #bgArea (input)=\"switchBackground(bgArea.value)\" type=\"color\"> </span>\n                <span> text color: <input #txtClr (input)=\"switchTextColor(txtClr.value)\" type=\"color\"> </span>\n                <button (click)=\"_userCode.setUserCode(userCode.value)\" (click)=\"saveTemplate([],[],renderToDo.name)\" (click)=\"OnBtnClicked()\"\n                    class=\"btn save-btn\">save</button>\n            </div>\n\n        </div>\n\n    </div>\n    <div *ngIf=\"renderToDo.name !== 'user-code'\" class=\"template__code-block code-block\" [style.display]=\"isShow ? 'none' : 'block'\">\n\n        <div class=\"code-block__open-tag\">{{renderToDo.header}}</div>\n\n        <div class=\"code-block__elements\" *ngFor=\"let elem of _elements.items; let i = index\">\n            <span (click)=\"_elements.removeElement(i)\" class=\"elements-deleted\">X</span> {{elem.tag}}{{elem.className}}\n            <i (click)=\"showChildElement()\" class=\"fa fa-level-down elements-icon\" aria-hidden=\"true\"></i>\n            <span *ngIf=\"!isChild\"></span>\n            <div *ngIf=\"isChild\" class=\"elements__child-element\">\n                <div class=\"child-element\" *ngFor=\"let child of _elements.items[i].childs; let i = index\">\n                    <span (click)=\"_elements.removeChildElement(child.name)\" class=\"elements-deleted\">X</span> {{child.tag}}\n                    {{child.name}} {{child.closeTag}}\n                </div>\n\n                <span (click)=\"_elements.addChildElement(tagChild,childClassName,childModifier,elem.name,i)\" class=\"elements-add\">+</span>\n\n                <div class=\"child-element__input-form\">\n                    <select #tagChild class=\"code-block__select\">\n            <optgroup label=\"block elements\">\n             <option value=\"div\">div</option>\n             <option value=\"p\">p</option>\n             <option value=\"section\">section</option>\n             <option value=\"nav\">nav</option>\n             <option value=\"artical\">artical</option>\n             <option value=\"aside\">aside</option>\n             <option value=\"form\">form</option>\n             <option value=\"hr\">hr</option>\n            </optgroup>\n            \n            <optgroup label=\"list-items tags\"> \n             <option value=\"ul\">ul</option>\n             <option value=\"ol\">ol</option>\n             <option value=\"li\">li</option>\n            </optgroup> \n\n            <optgroup label=\"table tags\">             \n             <option value=\"table\">table</option>\n             <option value=\"th\">th</option>\n             <option value=\"tr\">tr</option>\n             <option value=\"td\">td</option>\n            </optgroup>\n\n            <optgroup label=\"inline elements\">\n             <option value=\"span\">span</option>\n             <option value=\"a\">a</option>\n             <option value=\"button\">button</option>\n             <option value=\"span\">span</option>\n             <option value=\"img\">img</option>\n             <option value=\"canvas\">canvas</option>\n             <option value=\"input\">input</option>\n             <option value=\"textarea\">textarea</option>\n            </optgroup>\n            </select>\n                    <span class=\"code-block__class\">class=\"</span>\n                    <input #childClassName type=\"text\" class=\"code-block__name-element name-element--child\" placeholder=\"element name\">\n                    <input #childModifier type=\"text\" class=\"code-block__name-element name-element--child\" placeholder=\"modifier\">\n                </div>\n\n            </div>\n            {{elem.closeTag}}\n        </div>\n\n        <div class=\"code-block__sub-elem\">\n            <span (click)=\"_elements.addElement(tag,renderToDo.name,className,modifier)\">+</span>\n            <select [(ngModel)]=\"tag\" class=\"code-block__select\">\n            <optgroup label=\"block elements\">\n             <option value=\"div\">div</option>\n             <option value=\"p\">p</option>\n             <option value=\"section\">section</option>\n             <option value=\"nav\">nav</option>\n             <option value=\"artical\">artical</option>\n             <option value=\"aside\">aside</option>\n             <option value=\"form\">form</option>\n             <option value=\"hr\">hr</option>\n            </optgroup>\n            \n            <optgroup label=\"list-items tags\"> \n             <option value=\"ul\">ul</option>\n             <option value=\"ol\">ol</option>\n             <option value=\"li\">li</option>\n            </optgroup> \n\n            <optgroup label=\"table tags\">             \n             <option value=\"table\">table</option>\n             <option value=\"th\">th</option>\n             <option value=\"tr\">tr</option>\n             <option value=\"td\">td</option>\n            </optgroup>\n\n            <optgroup label=\"inline elements\">\n             <option value=\"span\">span</option>\n             <option value=\"a\">a</option>\n             <option value=\"button\">button</option>\n             <option value=\"span\">span</option>\n             <option value=\"img\">img</option>\n             <option value=\"canvas\">canvas</option>\n             <option value=\"input\">input</option>\n             <option value=\"textarea\">textarea</option>\n            </optgroup>\n            </select>\n            <span class=\"code-block__class\">class=\"</span>\n\n            <input [(ngModel)]=\"className\" type=\"text\" class=\"code-block__name-element\" placeholder=\"element name\">\n\n\n            <span class=\"code-block__class\">\"</span>\n            <span *ngIf=\"!isModifier\" (click)=\"showModifier()\" class=\"code-block__modifier\">?</span>\n            <input *ngIf=\"isModifier\" [(ngModel)]=\"modifier\" class=\"code-block__modifier--input\" type=\"text\" placeholder=\"modifier\">\n            <div class=\"modifier\">\n                <p><strong>Modifier:</strong> block__element--modifier</p>\n                Cущность, определяющая внешний вид, состояние или поведение блока либо элемента.\n            </div>\n        </div>\n\n        <div class=\"code-block__close-tag\">{{renderToDo.closeHeader}}</div>\n    </div>\n    <div class=\"inp-template__save-btn\">\n        <button (click)=\"saveTemplate(renderToDo.header,renderToDo.closeHeader,renderToDo.name)\" (click)=\"OnBtnClicked()\" [hidden]=\"_elements.items.length < 1\"\n            class=\"btn save-btn\">save</button>\n\n    </div>\n\n\n</div>"

/***/ }),

/***/ 257:
/***/ (function(module, exports) {

module.exports = "<div class=\"nav__container\">\n  <ul class=\"nav__menu\">\n    <li *ngFor=\"let item of _buttonsName\">\n      <button class=\"btn btn--menuButtons\"\n              (click)=\"onItemClicked(item)\"\n              [disabled]='item.disabled === true'\n              [ngClass]=\"{'btn--disbled' : item.disabled === true}\"\n              [style.marginLeft.px]=\"item.margin\"\n      >{{item.name}}</button>\n    </li> \n  </ul>\n   <div [ngClass]=\"{ready : isReady}\" class=\"nav__btn-ready\">\n     <button class=\"btn btn--ready\"\n             (click)=\"generateProject()\">\n       <img src=\"{{imgPath}}\" width=\"100\" alt=\"img-banana\">\n       <p>Banana ready</p>\n      </button>\n   </div>\n </div>\n  <div class=\"nav__compile\">\n    <button class=\"btn btn--menuButtons\" \n            (click)=\"chekMarkButton()\" \n            [disabled]='isOn'\n            [ngClass]=\"{disabled : isOn}\"\n            >GENERATE</button>\n  </div>\n\n"

/***/ }),

/***/ 301:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(121);


/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__saved_template__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__elements__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_code__ = __webpack_require__(138);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputTemplateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InputTemplateComponent = (function () {
    function InputTemplateComponent() {
        this._templates = [];
        this.renderToDo = 'Rendring...';
        this.saveBtnClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]();
        this.sendingName = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]();
        this.sendReadyTemplate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]();
        this.templateName = "";
        this.modifier = "";
        this.className = "";
        this.tag = "";
        this.isModifier = false;
        this.isChild = false;
        this.backgroundArea = "#1E1E1E";
        this.textColorArea = "#00d604";
        this._save = new __WEBPACK_IMPORTED_MODULE_1__saved_template__["a" /* SavedTamplate */]();
        this._elements = new __WEBPACK_IMPORTED_MODULE_2__elements__["a" /* Elements */]();
        this._userCode = new __WEBPACK_IMPORTED_MODULE_3__user_code__["a" /* UserCode */]();
    }
    InputTemplateComponent.prototype.switchBackground = function (color) {
        this.backgroundArea = color;
    };
    InputTemplateComponent.prototype.switchTextColor = function (color) {
        this.textColorArea = color;
    };
    InputTemplateComponent.prototype.showChildElement = function () {
        this.isChild = true;
    };
    InputTemplateComponent.prototype.getTemplate = function () {
        var temp = this._save.listTemplates();
        return temp;
    };
    InputTemplateComponent.prototype.clearForm = function () {
        this.className = "";
        this.tag = "";
        this.renderToDo = "";
        this.isShow = true;
        this.modifier = "";
        this.isModifier = false;
        this._elements.items.splice(0, this._elements.items.length);
        this._templates.splice(0, this._templates.length);
        this._elements.cssRules.splice(0, this._elements.cssRules.length);
        this._elements.cssTemplate.splice(0, this._elements.cssTemplate.length);
    };
    InputTemplateComponent.prototype.clearElement = function () {
        this.className = "";
        this.tag = "";
        this.modifier = "";
        this.isModifier = false;
    };
    InputTemplateComponent.prototype.saveTemplate = function (block, endBlock, nameBlock) {
        var obj = "";
        var child = "";
        this.templateName = nameBlock;
        var userCode = this._userCode.userTemplate;
        for (var i = 0; i < this._elements.items.length; i++) {
            for (var j = 0; j < this._elements.items[i].childs.length; j++) {
                child = child + this._elements.items[i].childs[j].tag +
                    this._elements.items[i].childs[j].name +
                    this._elements.items[i].childs[j].closeTag;
            }
            obj = obj + this._elements.items[i].tag +
                this._elements.items[i].className +
                child +
                this._elements.items[i].closeTag;
            child = "";
        }
        this._templates.push({
            "block": block,
            "body": obj,
            "endBlock": endBlock,
            "css": [].concat(this._elements.cssTemplate)
        });
        if (userCode.length !== 0) {
            this._templates[0]["user-code"] = userCode[0];
        }
        for (var i = 0; i < this._templates.length; i++) {
            this._save.templates(this._templates[i]);
        }
        this.clearForm();
    };
    InputTemplateComponent.prototype.OnBtnClicked = function (boolean) {
        boolean = false;
        this.saveBtnClicked.emit(boolean);
        this.sendingName.emit(this.templateName);
        this.sendReadyTemplate.emit(this.getTemplate());
    };
    InputTemplateComponent.prototype.showModifier = function () {
        this.isModifier = true;
    };
    InputTemplateComponent.prototype.ngOnInit = function () { };
    InputTemplateComponent.prototype.ngOnChanges = function () {
        if (this.renderToDo === "") {
            this.isShow = true;
        }
        else {
            this.isShow = false;
            this.tag = "";
            this.className = "";
            this._elements.items.splice(0, this._elements.items.length);
        }
    };
    return InputTemplateComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", String)
], InputTemplateComponent.prototype, "renderToDo", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */])(),
    __metadata("design:type", Object)
], InputTemplateComponent.prototype, "saveBtnClicked", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */])(),
    __metadata("design:type", Object)
], InputTemplateComponent.prototype, "sendingName", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */])(),
    __metadata("design:type", Object)
], InputTemplateComponent.prototype, "sendReadyTemplate", void 0);
InputTemplateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-input-template',
        template: __webpack_require__(256),
        styles: [__webpack_require__(221)]
    }),
    __metadata("design:paramtypes", [])
], InputTemplateComponent);

//# sourceMappingURL=input-template.component.js.map

/***/ })

},[302]);
//# sourceMappingURL=main.bundle.js.map