(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('ngx-dropzone', ['exports', '@angular/core', '@angular/common', '@angular/platform-browser'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ngx-dropzone'] = {}, global.ng.core, global.ng.common, global.ng.platformBrowser));
}(this, (function (exports, core, common, platformBrowser) { 'use strict';

    var NgxDropzoneLabelDirective = /** @class */ (function () {
        function NgxDropzoneLabelDirective() {
        }
        return NgxDropzoneLabelDirective;
    }());
    NgxDropzoneLabelDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: 'ngx-dropzone-label'
                },] }
    ];

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    /**
     * Coerces a data-bound value (typically a string) to a boolean.
     * Taken from https://github.com/angular/components/blob/master/src/cdk/coercion/boolean-property.ts
     */
    function coerceBooleanProperty(value) {
        return value != null && "" + value !== 'false';
    }
    /**
     * Whether the provided value is considered a number.
     * Taken from https://github.com/angular/components/blob/master/src/cdk/coercion/number-property.ts
     */
    function coerceNumberProperty(value) {
        // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
        // and other non-number values as NaN, where Number just uses 0) but it considers the string
        // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
        return (!isNaN(parseFloat(value)) && !isNaN(Number(value))) ? Number(value) : null;
    }

    var KEY_CODE;
    (function (KEY_CODE) {
        KEY_CODE[KEY_CODE["BACKSPACE"] = 8] = "BACKSPACE";
        KEY_CODE[KEY_CODE["DELETE"] = 46] = "DELETE";
    })(KEY_CODE || (KEY_CODE = {}));
    var NgxDropzonePreviewComponent = /** @class */ (function () {
        function NgxDropzonePreviewComponent(sanitizer) {
            this.sanitizer = sanitizer;
            this._removable = false;
            /** Emitted when the element should be removed. */
            this.removed = new core.EventEmitter();
            /** Make the preview item focusable using the tab key. */
            this.tabIndex = 0;
        }
        Object.defineProperty(NgxDropzonePreviewComponent.prototype, "file", {
            get: function () { return this._file; },
            /** The file to preview. */
            set: function (value) { this._file = value; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxDropzonePreviewComponent.prototype, "removable", {
            /** Allow the user to remove files. */
            get: function () {
                return this._removable;
            },
            set: function (value) {
                this._removable = coerceBooleanProperty(value);
            },
            enumerable: false,
            configurable: true
        });
        NgxDropzonePreviewComponent.prototype.keyEvent = function (event) {
            switch (event.keyCode) {
                case KEY_CODE.BACKSPACE:
                case KEY_CODE.DELETE:
                    this.remove();
                    break;
                default:
                    break;
            }
        };
        Object.defineProperty(NgxDropzonePreviewComponent.prototype, "hostStyle", {
            /** We use the HostBinding to pass these common styles to child components. */
            get: function () {
                var styles = "\n\t\t\tdisplay: flex;\n\t\t\theight: 140px;\n\t\t\tmin-height: 140px;\n\t\t\tmin-width: 180px;\n\t\t\tmax-width: 180px;\n\t\t\tjustify-content: center;\n\t\t\talign-items: center;\n\t\t\tpadding: 0 20px;\n\t\t\tmargin: 10px;\n\t\t\tborder-radius: 5px;\n\t\t\tposition: relative;\n\t\t";
                return this.sanitizer.bypassSecurityTrustStyle(styles);
            },
            enumerable: false,
            configurable: true
        });
        /** Remove method to be used from the template. */
        NgxDropzonePreviewComponent.prototype._remove = function (event) {
            event.stopPropagation();
            this.remove();
        };
        /** Remove the preview item (use from component code). */
        NgxDropzonePreviewComponent.prototype.remove = function () {
            if (this._removable) {
                this.removed.next(this.file);
            }
        };
        NgxDropzonePreviewComponent.prototype.readFile = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            var reader = new FileReader();
                            reader.onload = function (e) {
                                resolve(e.target.result);
                            };
                            reader.onerror = function (e) {
                                console.error("FileReader failed on file " + _this.file.name + ".");
                                reject(e);
                            };
                            if (!_this.file) {
                                return reject('No file to read. Please provide a file using the [file] Input property.');
                            }
                            reader.readAsDataURL(_this.file);
                        })];
                });
            });
        };
        return NgxDropzonePreviewComponent;
    }());
    NgxDropzonePreviewComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngx-dropzone-preview',
                    template: "\n\t\t<ng-content select=\"ngx-dropzone-label\"></ng-content>\n\t\t<ngx-dropzone-remove-badge *ngIf=\"removable\" (click)=\"_remove($event)\">\n\t\t</ngx-dropzone-remove-badge>\n\t",
                    styles: [":host{background-image:linear-gradient(0deg,#ededed,#efefef,#f1f1f1,#f4f4f4,#f6f6f6)}:host:focus,:host:hover{background-image:linear-gradient(0deg,#e3e3e3,#ebeaea,#e8e7e7,#ebeaea,#f4f4f4);outline:0}:host:focus ngx-dropzone-remove-badge,:host:hover ngx-dropzone-remove-badge{opacity:1}:host ngx-dropzone-remove-badge{opacity:0}:host ::ng-deep ngx-dropzone-label{overflow-wrap:break-word}"]
                },] }
    ];
    NgxDropzonePreviewComponent.ctorParameters = function () { return [
        { type: platformBrowser.DomSanitizer }
    ]; };
    NgxDropzonePreviewComponent.propDecorators = {
        file: [{ type: core.Input }],
        removable: [{ type: core.Input }],
        removed: [{ type: core.Output }],
        keyEvent: [{ type: core.HostListener, args: ['keyup', ['$event'],] }],
        hostStyle: [{ type: core.HostBinding, args: ['style',] }],
        tabIndex: [{ type: core.HostBinding, args: ['tabindex',] }]
    };

    /**
     * This service contains the filtering logic to be applied to
     * any dropped or selected file. If a file matches all criteria
     * like maximum size or accept type, it will be emitted in the
     * addedFiles array, otherwise in the rejectedFiles array.
     */
    var NgxDropzoneService = /** @class */ (function () {
        function NgxDropzoneService() {
        }
        NgxDropzoneService.prototype.parseFileList = function (files, accept, maxFileSize, multiple) {
            var addedFiles = [];
            var rejectedFiles = [];
            for (var i = 0; i < files.length; i++) {
                var file = files.item(i);
                if (!this.isAccepted(file, accept)) {
                    this.rejectFile(rejectedFiles, file, 'type');
                    continue;
                }
                if (maxFileSize && file.size > maxFileSize) {
                    this.rejectFile(rejectedFiles, file, 'size');
                    continue;
                }
                if (!multiple && addedFiles.length >= 1) {
                    this.rejectFile(rejectedFiles, file, 'no_multiple');
                    continue;
                }
                addedFiles.push(file);
            }
            var result = {
                addedFiles: addedFiles,
                rejectedFiles: rejectedFiles
            };
            return result;
        };
        NgxDropzoneService.prototype.isAccepted = function (file, accept) {
            if (accept === '*') {
                return true;
            }
            var acceptFiletypes = accept.split(',').map(function (it) { return it.toLowerCase().trim(); });
            var filetype = file.type.toLowerCase();
            var filename = file.name.toLowerCase();
            var matchedFileType = acceptFiletypes.find(function (acceptFiletype) {
                // check for wildcard mimetype (e.g. image/*)
                if (acceptFiletype.endsWith('/*')) {
                    return filetype.split('/')[0] === acceptFiletype.split('/')[0];
                }
                // check for file extension (e.g. .csv)
                if (acceptFiletype.startsWith(".")) {
                    return filename.endsWith(acceptFiletype);
                }
                // check for exact mimetype match (e.g. image/jpeg)
                return acceptFiletype == filetype;
            });
            return !!matchedFileType;
        };
        NgxDropzoneService.prototype.rejectFile = function (rejectedFiles, file, reason) {
            var rejectedFile = file;
            rejectedFile.reason = reason;
            rejectedFiles.push(rejectedFile);
        };
        return NgxDropzoneService;
    }());
    NgxDropzoneService.decorators = [
        { type: core.Injectable }
    ];

    var NgxDropzoneComponent = /** @class */ (function () {
        function NgxDropzoneComponent(service) {
            this.service = service;
            /** Emitted when any files were added or rejected. */
            this.change = new core.EventEmitter();
            /** Set the accepted file types. Defaults to '*'. */
            this.accept = '*';
            this._disabled = false;
            this._multiple = true;
            this._maxFileSize = undefined;
            this._expandable = false;
            this._disableClick = false;
            this._isHovered = false;
        }
        Object.defineProperty(NgxDropzoneComponent.prototype, "_hasPreviews", {
            get: function () {
                return !!this._previewChildren.length;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxDropzoneComponent.prototype, "disabled", {
            /** Disable any user interaction with the component. */
            get: function () {
                return this._disabled;
            },
            set: function (value) {
                this._disabled = coerceBooleanProperty(value);
                if (this._isHovered) {
                    this._isHovered = false;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxDropzoneComponent.prototype, "multiple", {
            /** Allow the selection of multiple files. */
            get: function () {
                return this._multiple;
            },
            set: function (value) {
                this._multiple = coerceBooleanProperty(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxDropzoneComponent.prototype, "maxFileSize", {
            /** Set the maximum size a single file may have. */
            get: function () {
                return this._maxFileSize;
            },
            set: function (value) {
                this._maxFileSize = coerceNumberProperty(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxDropzoneComponent.prototype, "expandable", {
            /** Allow the dropzone container to expand vertically. */
            get: function () {
                return this._expandable;
            },
            set: function (value) {
                this._expandable = coerceBooleanProperty(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NgxDropzoneComponent.prototype, "disableClick", {
            /** Open the file selector on click. */
            get: function () {
                return this._disableClick;
            },
            set: function (value) {
                this._disableClick = coerceBooleanProperty(value);
            },
            enumerable: false,
            configurable: true
        });
        /** Show the native OS file explorer to select files. */
        NgxDropzoneComponent.prototype._onClick = function () {
            if (!this.disableClick) {
                this.showFileSelector();
            }
        };
        NgxDropzoneComponent.prototype._onDragOver = function (event) {
            if (this.disabled) {
                return;
            }
            this.preventDefault(event);
            this._isHovered = true;
        };
        NgxDropzoneComponent.prototype._onDragLeave = function () {
            this._isHovered = false;
        };
        NgxDropzoneComponent.prototype._onDrop = function (event) {
            if (this.disabled) {
                return;
            }
            this.preventDefault(event);
            this._isHovered = false;
            this.handleFileDrop(event.dataTransfer.files);
        };
        NgxDropzoneComponent.prototype.showFileSelector = function () {
            if (!this.disabled) {
                this._fileInput.nativeElement.click();
            }
        };
        NgxDropzoneComponent.prototype._onFilesSelected = function (event) {
            var files = event.target.files;
            this.handleFileDrop(files);
            // Reset the native file input element to allow selecting the same file again
            this._fileInput.nativeElement.value = '';
            // fix(#32): Prevent the default event behaviour which caused the change event to emit twice.
            this.preventDefault(event);
        };
        NgxDropzoneComponent.prototype.handleFileDrop = function (files) {
            var result = this.service.parseFileList(files, this.accept, this.maxFileSize, this.multiple);
            this.change.next({
                addedFiles: result.addedFiles,
                rejectedFiles: result.rejectedFiles,
                source: this
            });
        };
        NgxDropzoneComponent.prototype.preventDefault = function (event) {
            event.preventDefault();
            event.stopPropagation();
        };
        return NgxDropzoneComponent;
    }());
    NgxDropzoneComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngx-dropzone, [ngx-dropzone]',
                    template: "<input #fileInput type=\"file\" [id]=\"id\" [multiple]=\"multiple\" [accept]=\"accept\" [disabled]=\"disabled\"\n  (change)=\"_onFilesSelected($event)\" [attr.aria-label]=\"ariaLabel\" [attr.aria-labelledby]=\"ariaLabelledby\"\n  [attr.aria-describedby]=\"ariaDescribedBy\">\n<ng-content select=\"ngx-dropzone-label\" *ngIf=\"!_hasPreviews\"></ng-content>\n<ng-content select=\"ngx-dropzone-preview\"></ng-content>\n<ng-content></ng-content>\n",
                    providers: [NgxDropzoneService],
                    styles: [":host{align-items:center;background:#fff;border:2px dashed #717386;border-radius:5px;color:#717386;cursor:pointer;display:flex;font-size:16px;height:180px;overflow-x:auto}:host.ngx-dz-hovered{border-style:solid}:host.ngx-dz-disabled{cursor:no-drop;opacity:.5;pointer-events:none}:host.expandable{flex-wrap:wrap;height:unset;min-height:180px;overflow:hidden}:host.unclickable{cursor:default}:host ::ng-deep ngx-dropzone-label{margin:10px auto;text-align:center;z-index:10}:host input{height:.1px;opacity:0;overflow:hidden;position:absolute;width:.1px;z-index:-1}:host input:focus+::ng-deep ngx-dropzone-label{outline:1px dotted #000;outline:5px auto -webkit-focus-ring-color}"]
                },] }
    ];
    NgxDropzoneComponent.ctorParameters = function () { return [
        { type: NgxDropzoneService, decorators: [{ type: core.Self }] }
    ]; };
    NgxDropzoneComponent.propDecorators = {
        _previewChildren: [{ type: core.ContentChildren, args: [NgxDropzonePreviewComponent, { descendants: true },] }],
        _fileInput: [{ type: core.ViewChild, args: ['fileInput', { static: true },] }],
        change: [{ type: core.Output }],
        accept: [{ type: core.Input }],
        disabled: [{ type: core.Input }, { type: core.HostBinding, args: ['class.ngx-dz-disabled',] }],
        multiple: [{ type: core.Input }],
        maxFileSize: [{ type: core.Input }],
        expandable: [{ type: core.Input }, { type: core.HostBinding, args: ['class.expandable',] }],
        disableClick: [{ type: core.Input }, { type: core.HostBinding, args: ['class.unclickable',] }],
        id: [{ type: core.Input }],
        ariaLabel: [{ type: core.Input, args: ['aria-label',] }],
        ariaLabelledby: [{ type: core.Input, args: ['aria-labelledby',] }],
        ariaDescribedBy: [{ type: core.Input, args: ['aria-describedby',] }],
        _isHovered: [{ type: core.HostBinding, args: ['class.ngx-dz-hovered',] }],
        _onClick: [{ type: core.HostListener, args: ['click',] }],
        _onDragOver: [{ type: core.HostListener, args: ['dragover', ['$event'],] }],
        _onDragLeave: [{ type: core.HostListener, args: ['dragleave',] }],
        _onDrop: [{ type: core.HostListener, args: ['drop', ['$event'],] }]
    };

    var NgxDropzoneImagePreviewComponent = /** @class */ (function (_super) {
        __extends(NgxDropzoneImagePreviewComponent, _super);
        function NgxDropzoneImagePreviewComponent(sanitizer) {
            var _this = _super.call(this, sanitizer) || this;
            /** The image data source. */
            _this.defaultImgLoading = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0ibWFyZ2luOiBhdXRvOyBiYWNrZ3JvdW5kOiByZ2IoMjQxLCAyNDIsIDI0Mykgbm9uZSByZXBlYXQgc2Nyb2xsIDAlIDAlOyBkaXNwbGF5OiBibG9jazsgc2hhcGUtcmVuZGVyaW5nOiBhdXRvOyIgd2lkdGg9IjIyNHB4IiBoZWlnaHQ9IjIyNHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgo8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIxNCIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2U9IiM4NWEyYjYiIHN0cm9rZS1kYXNoYXJyYXk9IjIxLjk5MTE0ODU3NTEyODU1MiAyMS45OTExNDg1NzUxMjg1NTIiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+CiAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGR1cj0iMS4xNjI3OTA2OTc2NzQ0MTg0cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVRpbWVzPSIwOzEiIHZhbHVlcz0iMCA1MCA1MDszNjAgNTAgNTAiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9jaXJjbGU+CjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjEwIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZT0iI2JiY2VkZCIgc3Ryb2tlLWRhc2hhcnJheT0iMTUuNzA3OTYzMjY3OTQ4OTY2IDE1LjcwNzk2MzI2Nzk0ODk2NiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjE1LjcwNzk2MzI2Nzk0ODk2NiIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj4KICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgZHVyPSIxLjE2Mjc5MDY5NzY3NDQxODRzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2V5VGltZXM9IjA7MSIgdmFsdWVzPSIwIDUwIDUwOy0zNjAgNTAgNTAiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9jaXJjbGU+CjwhLS0gW2xkaW9dIGdlbmVyYXRlZCBieSBodHRwczovL2xvYWRpbmcuaW8vIC0tPjwvc3ZnPg==';
            _this.imageSrc = _this.sanitizer.bypassSecurityTrustUrl(_this.defaultImgLoading);
            return _this;
        }
        Object.defineProperty(NgxDropzoneImagePreviewComponent.prototype, "file", {
            get: function () { return this._file; },
            /** The file to preview. */
            set: function (value) {
                this._file = value;
                this.renderImage();
            },
            enumerable: false,
            configurable: true
        });
        NgxDropzoneImagePreviewComponent.prototype.ngOnInit = function () {
            this.renderImage();
        };
        NgxDropzoneImagePreviewComponent.prototype.renderImage = function () {
            var _this = this;
            this.readFile()
                .then(function (img) { return setTimeout(function () { return _this.imageSrc = img; }); })
                .catch(function (err) { return console.error(err); });
        };
        return NgxDropzoneImagePreviewComponent;
    }(NgxDropzonePreviewComponent));
    NgxDropzoneImagePreviewComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngx-dropzone-image-preview',
                    template: "\n    <img [src]=\"imageSrc\" />\n\t\t<ng-content select=\"ngx-dropzone-label\"></ng-content>\n    <ngx-dropzone-remove-badge *ngIf=\"removable\" (click)=\"_remove($event)\">\n    </ngx-dropzone-remove-badge>\n\t",
                    providers: [
                        {
                            provide: NgxDropzonePreviewComponent,
                            useExisting: NgxDropzoneImagePreviewComponent
                        }
                    ],
                    styles: [":host{max-width:unset!important;min-width:unset!important;padding:0!important}:host:focus img,:host:hover img{opacity:.7}:host:focus ngx-dropzone-remove-badge,:host:hover ngx-dropzone-remove-badge{opacity:1}:host ngx-dropzone-remove-badge{opacity:0}:host img{border-radius:5px;max-height:100%;opacity:.8}:host ::ng-deep ngx-dropzone-label{overflow-wrap:break-word;position:absolute}"]
                },] }
    ];
    NgxDropzoneImagePreviewComponent.ctorParameters = function () { return [
        { type: platformBrowser.DomSanitizer }
    ]; };
    NgxDropzoneImagePreviewComponent.propDecorators = {
        file: [{ type: core.Input }]
    };

    var NgxDropzoneRemoveBadgeComponent = /** @class */ (function () {
        function NgxDropzoneRemoveBadgeComponent() {
        }
        return NgxDropzoneRemoveBadgeComponent;
    }());
    NgxDropzoneRemoveBadgeComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngx-dropzone-remove-badge',
                    template: "\n    <svg>\n      <line x1=\"0\" y1=\"0\" x2=\"10\" y2=\"10\" />\n      <line x1=\"0\" y1=\"10\" x2=\"10\" y2=\"0\" />\n    </svg>\n  ",
                    styles: [":host{align-items:center;background:#bbb;border-radius:50%;color:#333;cursor:pointer;display:flex;height:22px;justify-content:center;position:absolute;right:5px;top:5px;width:22px}:host:hover{background:#aeaeae}:host>svg{height:10px;width:10px}:host>svg>line{stroke:#fff;stroke-width:2px}"]
                },] }
    ];

    var NgxDropzoneVideoPreviewComponent = /** @class */ (function (_super) {
        __extends(NgxDropzoneVideoPreviewComponent, _super);
        function NgxDropzoneVideoPreviewComponent(sanitizer) {
            return _super.call(this, sanitizer) || this;
        }
        NgxDropzoneVideoPreviewComponent.prototype.ngOnInit = function () {
            if (!this.file) {
                console.error('No file to read. Please provide a file using the [file] Input property.');
                return;
            }
            /**
             * We sanitize the URL here to enable the preview.
             * Please note that this could cause security issues!
             **/
            this.videoSrc = URL.createObjectURL(this.file);
            this.sanitizedVideoSrc = this.sanitizer.bypassSecurityTrustUrl(this.videoSrc);
        };
        NgxDropzoneVideoPreviewComponent.prototype.ngOnDestroy = function () {
            URL.revokeObjectURL(this.videoSrc);
        };
        return NgxDropzoneVideoPreviewComponent;
    }(NgxDropzonePreviewComponent));
    NgxDropzoneVideoPreviewComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngx-dropzone-video-preview',
                    template: "\n    <video *ngIf=\"sanitizedVideoSrc\" controls (click)=\"$event.stopPropagation()\">\n      <source [src]=\"sanitizedVideoSrc\" />\n    </video>\n    <ng-content select=\"ngx-dropzone-label\"></ng-content>\n    <ngx-dropzone-remove-badge *ngIf=\"removable\" (click)=\"_remove($event)\">\n    </ngx-dropzone-remove-badge>\n\t",
                    providers: [
                        {
                            provide: NgxDropzonePreviewComponent,
                            useExisting: NgxDropzoneVideoPreviewComponent
                        }
                    ],
                    styles: [":host{max-width:unset!important;min-width:unset!important;padding:0!important}:host:focus video,:host:hover video{opacity:.7}:host:focus ngx-dropzone-remove-badge,:host:hover ngx-dropzone-remove-badge{opacity:1}:host ngx-dropzone-remove-badge{opacity:0}:host video{border-radius:5px;max-height:100%}:host ::ng-deep ngx-dropzone-label{overflow-wrap:break-word;position:absolute}"]
                },] }
    ];
    NgxDropzoneVideoPreviewComponent.ctorParameters = function () { return [
        { type: platformBrowser.DomSanitizer }
    ]; };

    var NgxDropzoneModule = /** @class */ (function () {
        function NgxDropzoneModule() {
        }
        return NgxDropzoneModule;
    }());
    NgxDropzoneModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule
                    ],
                    declarations: [
                        NgxDropzoneComponent,
                        NgxDropzoneLabelDirective,
                        NgxDropzonePreviewComponent,
                        NgxDropzoneImagePreviewComponent,
                        NgxDropzoneRemoveBadgeComponent,
                        NgxDropzoneVideoPreviewComponent,
                    ],
                    exports: [
                        NgxDropzoneComponent,
                        NgxDropzoneLabelDirective,
                        NgxDropzonePreviewComponent,
                        NgxDropzoneImagePreviewComponent,
                        NgxDropzoneRemoveBadgeComponent,
                        NgxDropzoneVideoPreviewComponent,
                    ]
                },] }
    ];

    /*
     * Public API Surface of ngx-dropzone
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.NgxDropzoneComponent = NgxDropzoneComponent;
    exports.NgxDropzoneImagePreviewComponent = NgxDropzoneImagePreviewComponent;
    exports.NgxDropzoneModule = NgxDropzoneModule;
    exports.NgxDropzonePreviewComponent = NgxDropzonePreviewComponent;
    exports.NgxDropzoneRemoveBadgeComponent = NgxDropzoneRemoveBadgeComponent;
    exports.NgxDropzoneVideoPreviewComponent = NgxDropzoneVideoPreviewComponent;
    exports.ɵa = NgxDropzoneService;
    exports.ɵb = NgxDropzoneLabelDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-dropzone.umd.js.map
