!
function() {
    "use strict";
    function e(e) {
        e.otherwise("/home")
    }
    e.$inject = ["$urlRouterProvider"],
    angular.module("KingAdmin.pages", ["ui.router", "KingAdmin.pages.config", "KingAdmin.pages.home", "KingAdmin.pages.common", "KingAdmin.pages.sys", "KingAdmin.pages.dict"]).config(e)
} (),
function() {
    "use strict";
    angular.module("KingAdmin.theme", ["toastr", "chart.js", "angular-chartist", "angular.morris-chart", "textAngular", "KingAdmin.theme.components"])
} (),
function() {
    "use strict";
    function e(e) {
        e.latencyThreshold = 1,
        e.includeSpinner = !1
    }
    e.$inject = ["ktCfpLoadingBarProvider"],
    angular.module("KingAdmin.pages.common", ["kt-angular-loading-bar"]).config(e)
} (),
function() {
    "use strict";
    function e(e) {
        e.interceptors.push("authExpiredInterceptor")
    }
    e.$inject = ["$httpProvider"],
    angular.module("KingAdmin.pages.config", []).config(e)
} (),
function() {
    "use strict";
    function e(e) {
        e.state("dict", {
            url: "/dict",
            template: "<ui-view></ui-view>",
            "abstract": !0,
            title: "字典管理",
            sidebarMeta: {
                icon: "ion-grid",
                order: 300
            }
        })
    }
    e.$inject = ["$stateProvider"],
    angular.module("KingAdmin.pages.dict", ["KingAdmin.pages.dict.dict", "KingAdmin.pages.dict.dictclass"]).config(e)
} (),
function() {
    "use strict";
    function e(e) {
        e.state("home", {
            url: "/home",
            templateUrl: "app/pages/home/home.html",
            controller: "HomeControlller",
            controllerAs: "kt",
            title: "首页",
            sidebarMeta: {
                icon: "ion-android-home",
                order: 0
            }
        })
    }
    e.$inject = ["$stateProvider"],
    angular.module("KingAdmin.pages.home", []).config(e)
} (),
function() {
    "use strict";
    function e(e, t) {
        e.state("sys", {
            url: "/sys",
            template: "<ui-view></ui-view>",
            "abstract": !0,
            title: "系统管理",
            sidebarMeta: {
                icon: "ion-grid",
                order: 300
            }
        })
    }
    e.$inject = ["$stateProvider", "$urlRouterProvider"],
    angular.module("KingAdmin.pages.sys", ["KingAdmin.pages.sys.user", "KingAdmin.pages.sys.menu", "KingAdmin.pages.sys.role"]).config(e)
} (),
function() {
    "use strict";
    angular.module("KingAdmin.theme.components", [])
} (),
function() {
    "use strict";
    function e(e) {
        e.state("dict.dict", {
            url: "/dict",
            templateUrl: "app/pages/dict/dict/dictlist.html",
            controller: "DictListCtrl",
            controllerAs: "kt",
            title: "字典管理",
            sidebarMeta: {
                order: 1
            }
        })
    }
    e.$inject = ["$stateProvider"],
    angular.module("KingAdmin.pages.dict.dict", []).config(e)
} (),
function() {
    "use strict";
    function e(e) {
        e.state("dict.dictclass", {
            url: "/dictclass",
            templateUrl: "app/pages/dict/dictclass/dictclasslist.html",
            controller: "DictClassListCtrl",
            controllerAs: "kt",
            title: "字典分类",
            sidebarMeta: {
                order: 1
            }
        })
    }
    e.$inject = ["$stateProvider"],
    angular.module("KingAdmin.pages.dict.dictclass", []).config(e)
} (),
function() {
    "use strict";
    function e(e) {
        e.state("sys.menu", {
            url: "/menu",
            templateUrl: "app/pages/sys/menu/menulist.html",
            controller: "MenuListCtrl",
            controllerAs: "kt",
            title: "菜单管理",
            sidebarMeta: {
                order: 3
            }
        }).state("sys.menu.edit", {
            url: "/edit/:id",
            title: "编辑菜单",
            onEnter: ["$stateParams", "$state", "$uibModal",
            function(e, t, n) {
                n.open({
                    templateUrl: "app/pages/sys/menu/menu.html",
                    controller: "MenuCtrl",
                    controllerAs: "kt",
                    backdrop: "static",
                    size: "lg"
                }).result.then(function() {
                    t.go("sys.menu", null, {
                        reload: !0
                    })
                },
                function() {
                    t.go("^")
                })
            }]
        }).state("sys.menu.add", {
            url: "/add/:id?isAdd",
            title: "新增菜单",
            onEnter: ["$stateParams", "$state", "$uibModal",
            function(e, t, n) {
                n.open({
                    templateUrl: "app/pages/sys/menu/menu.html",
                    controller: "MenuCtrl",
                    controllerAs: "kt",
                    backdrop: "static",
                    size: "lg"
                }).result.then(function() {
                    t.go("sys.menu", null, {
                        reload: !0
                    })
                },
                function() {
                    t.go("^")
                })
            }]
        })
    }
    e.$inject = ["$stateProvider"],
    angular.module("KingAdmin.pages.sys.menu", []).config(e)
} (),
function() {
    "use strict";
    function e(e) {
        e.state("sys.role", {
            url: "/role",
            templateUrl: "app/pages/sys/role/rolelist.html",
            controller: "RoleListCtrl",
            controllerAs: "kt",
            title: "角色管理",
            sidebarMeta: {
                order: 1
            }
        }).state("sys.role.add", {
            url: "/add",
            title: "新增角色",
            views: {
                "@": {
                    templateUrl: "app/pages/sys/role/role.html",
                    controller: "RoleCtrl",
                    controllerAs: "kt"
                }
            }
        }).state("sys.role.edit", {
            url: "/edit/:id",
            title: "编辑角色",
            views: {
                "@": {
                    templateUrl: "app/pages/sys/role/role.html",
                    controller: "RoleCtrl",
                    controllerAs: "kt"
                }
            }
        }).state("sys.role.view", {
            url: "/view/:id?isView",
            title: "查看角色",
            views: {
                "@": {
                    templateUrl: "app/pages/sys/role/role.html",
                    controller: "RoleCtrl",
                    controllerAs: "kt"
                }
            }
        })
    }
    e.$inject = ["$stateProvider"],
    angular.module("KingAdmin.pages.sys.role", []).config(e)
} (),
function() {
    "use strict";
    function e(e, t) {
        e.state("sys.user", {
            url: "/user",
            templateUrl: "app/pages/sys/user/userlist.html",
            controller: "UserListCtrl",
            controllerAs: "kt",
            title: "用户管理",
            sidebarMeta: {
                order: 0,
                icon: "ion-grid"
            }
        }).state("sys.user.add", {
            url: "/add",
            title: "新增用户",
            views: {
                "@": {
                    templateUrl: "app/pages/sys/user/user.html",
                    controller: "UserCtrl",
                    controllerAs: "kt"
                }
            }
        }).state("sys.user.edit", {
            url: "/edit/:id",
            title: "编辑用户",
            views: {
                "@": {
                    templateUrl: "app/pages/sys/user/user.html",
                    controller: "UserCtrl",
                    controllerAs: "kt"
                }
            }
        }).state("sys.user.view", {
            url: "/view/:id?isView",
            title: "查看用户",
            views: {
                "@": {
                    templateUrl: "app/pages/sys/user/user.html",
                    controller: "UserCtrl",
                    controllerAs: "kt"
                }
            }
        }),
        t.when("/sys", "/sys/user")
    }
    e.$inject = ["$stateProvider", "$urlRouterProvider"],
    angular.module("KingAdmin.pages.sys.user", []).config(e)
} (),
angular.module("KingAdmin", ["ngAnimate", "ngStorage", "ui.bootstrap", "ui.sortable", "ui.router", "ngResource", "ngTouch", "toastr", "smart-table", "xeditable", "ui.slimscroll", "ngJsTree", "angular-progress-button-styles", "KingAdmin.theme", "KingAdmin.pages"]),
function() {
    "use strict";
    function e(e, t) {
        e.changeTheme({
            blur: !0
        }),
        e.changeColors({
            "default": "rgba(#000000, 0.2)",
            defaultText: "#ffffff",
            dashboard: {
                white: "#ffffff"
            }
        })
    }
    e.$inject = ["baConfigProvider", "colorHelper"],
    angular.module("KingAdmin.theme").config(e)
} (),
function() {
    "use strict";
    function e(e) {
        var o = {
            theme: {
                blur: !1
            },
            colors: {
                "default": t["default"],
                defaultText: t.defaultText,
                border: t.border,
                borderDark: t.borderDark,
                primary: n.primary,
                info: n.info,
                success: n.success,
                warning: n.warning,
                danger: n.danger,
                primaryLight: e.tint(n.primary, 30),
                infoLight: e.tint(n.info, 30),
                successLight: e.tint(n.success, 30),
                warningLight: e.tint(n.warning, 30),
                dangerLight: e.tint(n.danger, 30),
                primaryDark: e.shade(n.primary, 15),
                infoDark: e.shade(n.info, 15),
                successDark: e.shade(n.success, 15),
                warningDark: e.shade(n.warning, 15),
                dangerDark: e.shade(n.danger, 15),
                dashboard: {
                    blueStone: i.blueStone,
                    surfieGreen: i.surfieGreen,
                    silverTree: i.silverTree,
                    gossip: i.gossip,
                    white: i.white
                }
            }
        };
        return o.changeTheme = function(e) {
            angular.merge(o.theme, e)
        },
        o.changeColors = function(e) {
            angular.merge(o.colors, e)
        },
        o.$get = function() {
            return delete o.$get,
            o
        },
        o
    }
    e.$inject = ["colorHelper"];
    var t = {
        "default": "#ffffff",
        defaultText: "#666666",
        border: "#dddddd",
        borderDark: "#aaaaaa"
    },
    n = {
        primary: "#209e91",
        info: "#2dacd1",
        success: "#90b900",
        warning: "#dfb81c",
        danger: "#e85656"
    },
    i = {
        blueStone: "#005562",
        surfieGreen: "#0e8174",
        silverTree: "#6eba8c",
        gossip: "#b9f2a1",
        white: "#10c4b5"
    };
    angular.module("KingAdmin.theme").provider("baConfig", e)
} (),
function() {
    "use strict";
    function e(e, t, n) {
        function i(e) {
            return e.toString(16)
        }
        function o(e) {
            return parseInt(e, 16)
        }
        for (var s = "#",
        a = 1; 7 > a; a += 2) {
            var r = o(e.substr(a, 2)),
            l = o(t.substr(a, 2)),
            c = i(Math.floor(l + (r - l) * (n / 100)));
            s += ("0" + c).slice( - 2)
        }
        return s
    }
    var t = "/static/img/";
    angular.module("KingAdmin.theme").constant("layoutSizes", {
        resWidthCollapseSidebar: 1200,
        resWidthHideSidebar: 500
    }).constant("layoutPaths", {
        images: {
            root: t,
            profile: t + "app/profile/",
            amMap: "/static/img/theme/vendor/ammap//dist/ammap/images/",
            amChart: "/static/img/theme/vendor/amcharts/dist/amcharts/images/"
        }
    }).constant("colorHelper", {
        tint: function(t, n) {
            return e("#ffffff", t, n)
        },
        shade: function(t, n) {
            return e("#000000", t, n)
        }
    })
} (),
function() {
    "use strict";
    function e(e, t, n, i, o, s, a, r, l, c, d) {
        var u = [i.loadAmCharts(), e(1e3)],
        m = a;
        m.blur && (m.mobile ? u.unshift(i.loadImg(n.images.root + "blur-bg-mobile.jpg")) : (u.unshift(i.loadImg(n.images.root + "blur-bg.jpg")), u.unshift(i.loadImg(n.images.root + "blur-bg-blurred.jpg")))),
        t.content = {},
        o.all(u).then(function() {
            c.isLogin(function(e) {
                "0" == e.code ? (t.account = e.result.user, t.menuItems = e.result.menu, d.setPermissions(e.result.perms), t.$pageFinishedLoading = !0, r.initialize()) : l.open("auth.html", "_self")
            })
        }),
        t.$baSidebarService = s
    }
    e.$inject = ["$timeout", "$rootScope", "layoutPaths", "preloader", "$q", "baSidebarService", "themeLayoutSettings", "stateHandler", "$window", "UserService", "hasPermsService"],
    angular.module("KingAdmin.theme").run(e)
} (),
function() {
    "use strict";
    function e(e) {
        var t = /android|webos|iphone|ipad|ipod|blackberry|windows phone/.test(navigator.userAgent.toLowerCase()),
        n = t ? "mobile": "",
        i = e.theme.blur ? "blur-theme": "";
        return angular.element(document.body).addClass(n).addClass(i),
        {
            blur: e.theme.blur,
            mobile: t
        }
    }
    e.$inject = ["baConfig"],
    angular.module("KingAdmin.theme").service("themeLayoutSettings", e)
} (),
function() {
    "use strict";
    function e(e, t, n, i) {
        e.items = n,
        e.user = {},
        e.save = function() {
            i.password(e.user,
            function(e) {
                t.close(!0)
            })
        },
        e.arePasswordsEqual = function() {
            return e.user.newpassword == e.newpassword
        }
    }
    e.$inject = ["$scope", "$uibModalInstance", "items", "UserService"],
    angular.module("KingAdmin.pages.common").controller("CommomCtrl", e)
} (),
/*
 * angular-loading-bar
 *
 * intercepts XHR requests and creates a loading bar.
 * Based on the excellent nprogress work by rstacruz (more info in readme)
 *
 * (c) 2013 Wes Cruver
 * License: MIT
 */
function() {
    "use strict";
    angular.module("kt-angular-loading-bar", ["kt.cfp.loadingBar"]).config(["$httpProvider",
    function(e) {
        var t = ["$q", "$cacheFactory", "$timeout", "$rootScope", "$log", "ktCfpLoadingBar",
        function(t, n, i, o, s, a) {
            function r() {
                i.cancel(d),
                a.complete(),
                m = 0,
                u = 0
            }
            function l(t) {
                var i, o = n.get("$http"),
                s = e.defaults; ! t.cache && !s.cache || t.cache === !1 || "GET" !== t.method && "JSONP" !== t.method || (i = angular.isObject(t.cache) ? t.cache: angular.isObject(s.cache) ? s.cache: o);
                var a = void 0 !== i ? void 0 !== i.get(t.url) : !1;
                return void 0 !== t.cached && a !== t.cached ? t.cached: (t.cached = a, a)
            }
            function c(e) {
                return "GET" === e.method || "POST" === e.method && e.url.indexOf("get") >= 0 ? !1 : !0
            }
            var d, u = 0,
            m = 0,
            p = a.latencyThreshold;
            return {
                request: function(e) {
                    return e.ignoreLoadingBar || l(e) || (c(e) && (o.$httpLoading = !0), o.$broadcast("ktCfpLoadingBar:loading", {
                        url: e.url
                    }), 0 === u && (d = i(function() {
                        a.start()
                    },
                    p)), u++, a.set(m / u)),
                    e
                },
                response: function(e) {
                    return e && e.config ? (e.config.ignoreLoadingBar || l(e.config) || (m++, c(e.config) && (o.$httpLoading = !1), o.$broadcast("ktCfpLoadingBar:loaded", {
                        url: e.config.url,
                        result: e
                    }), m >= u ? r() : a.set(m / u)), e) : (s.error("Broken interceptor detected: Config object not supplied in response:\n https://github.com/chieffancypants/angular-loading-bar/pull/50"), e)
                },
                responseError: function(e) {
                    return e && e.config ? (e.config.ignoreLoadingBar || l(e.config) || (m++, c(e.config) && (o.$httpLoading = !1), o.$broadcast("ktCfpLoadingBar:loaded", {
                        url: e.config.url,
                        result: e
                    }), m >= u ? r() : a.set(m / u)), t.reject(e)) : (s.error("Broken interceptor detected: Config object not supplied in rejection:\n https://github.com/chieffancypants/angular-loading-bar/pull/50"), t.reject(e))
                }
            }
        }];
        e.interceptors.push(t)
    }]),
    angular.module("kt.cfp.loadingBar", []).provider("ktCfpLoadingBar",
    function() {
        this.autoIncrement = !0,
        this.includeSpinner = !0,
        this.includeBar = !0,
        this.latencyThreshold = 100,
        this.startSize = .02,
        this.parentSelector = "body",
        this.spinnerTemplate = '<div id="loading-bar-spinner"><div class="spinner-icon"></div></div>',
        this.loadingBarTemplate = '<div id="loading-bar"><div class="bar"><div class="peg"></div></div></div>',
        this.$get = ["$injector", "$document", "$timeout", "$rootScope",
        function(e, t, n, i) {
            function o() {
                if (d || (d = e.get("$animate")), n.cancel(m), !h) {
                    var o = t[0],
                    a = o.querySelector ? o.querySelector(p) : t.find(p)[0];
                    a || (a = o.getElementsByTagName("body")[0]);
                    var r = angular.element(a),
                    l = a.lastChild && angular.element(a.lastChild);
                    i.$broadcast("ktCfpLoadingBar:started"),
                    h = !0,
                    y && d.enter(g, r, l),
                    k && d.enter(b, r, g),
                    s($)
                }
            }
            function s(e) {
                if (h) {
                    var t = 100 * e + "%";
                    f.css("width", t),
                    v = e,
                    w && (n.cancel(u), u = n(function() {
                        a()
                    },
                    250))
                }
            }
            function a() {
                if (! (r() >= 1)) {
                    var e = 0,
                    t = r();
                    e = t >= 0 && .25 > t ? (3 * Math.random() + 3) / 100 : t >= .25 && .65 > t ? 3 * Math.random() / 100 : t >= .65 && .9 > t ? 2 * Math.random() / 100 : t >= .9 && .99 > t ? .005 : 0;
                    var n = r() + e;
                    s(n)
                }
            }
            function r() {
                return v
            }
            function l() {
                v = 0,
                h = !1
            }
            function c() {
                d || (d = e.get("$animate")),
                i.$broadcast("ktCfpLoadingBar:completed"),
                s(1),
                n.cancel(m),
                m = n(function() {
                    var e = d.leave(g, l);
                    e && e.then && e.then(l),
                    d.leave(b)
                },
                500)
            }
            var d, u, m, p = this.parentSelector,
            g = angular.element(this.loadingBarTemplate),
            f = g.find("div").eq(0),
            b = angular.element(this.spinnerTemplate),
            h = !1,
            v = 0,
            w = this.autoIncrement,
            k = this.includeSpinner,
            y = this.includeBar,
            $ = this.startSize;
            return {
                start: o,
                set: s,
                status: r,
                inc: a,
                complete: c,
                autoIncrement: this.autoIncrement,
                includeSpinner: this.includeSpinner,
                latencyThreshold: this.latencyThreshold,
                parentSelector: this.parentSelector,
                startSize: this.startSize
            }
        }]
    })
} (),
function() {
    "use strict";
    function e(e) {
        function t(t, n, i, o, s) {
            e.open({
                animation: !0,
                templateUrl: t,
                controller: i || "CommomCtrl",
                size: n || "sm",
                resolve: {
                    items: function() {
                        return o
                    }
                }
            }).result.then(function(e) {
                return s(e)
            })
        }
        function n(e, n, i) {
            t(i, "sm", "CommomCtrl", e, n)
        }
        function i(e, t) {
            n(e, t, "app/pages/common/modalTemplates/infoModal.html")
        }
        function o(e, t) {
            n(e, t, "app/pages/common/modalTemplates/successModal.html")
        }
        function s(e, t) {
            n(e, t, "app/pages/common/modalTemplates/warningModal.html")
        }
        function a(e, t) {
            n(e, t, "app/pages/common/modalTemplates/dangerModal.html")
        }
        return {
            show: t,
            info: i,
            success: o,
            warning: s,
            danger: a
        }
    }
    e.$inject = ["$uibModal"],
    angular.module("KingAdmin.pages.common").factory("CommonService", e)
} (),
function() {
    "use strict";
    function e() {
        return {
            restrict: "AE",
            scope: {
                inputKeyup: "="
            },
            link: function(e, t, n) {
                t.on("keyup",
                function(t) {
                    var n = window.event ? t.keyCode: t.which;
                    13 == n && e.inputKeyup()
                })
            }
        }
    }
    angular.module("KingAdmin.pages.common").directive("inputKeyup", e)
} (),
function() {
    "use strict";
    function e(e, t, n, i, o) {
        e.signout = function() {
            i.signout({},
            function(e) {
                n.open("auth.html", "_self")
            })
        },
        e.password = function() {
            o.show("app/pages/common/modalTemplates/password.html", "lg", "CommomCtrl")
        }
    }
    e.$inject = ["$scope", "$rootScope", "$window", "UserService", "CommonService"],
    angular.module("KingAdmin.pages.common").controller("MainController", e)
} (),
function() {
    "use strict";
    function e() {
        return {
            restrict: "E",
            template: '<input type="number" min="1"  class="select-page form-control" ng-model="inputPage" ng-change="selectPage(inputPage)">',
            link: function(e, t, n) {
                e.$watch("currentPage",
                function(t) {
                    e.inputPage = t
                })
            }
        }
    }
    angular.module("KingAdmin.pages.common").directive("pageSelect", e)
} (),
function() {
    "use strict";
    function e() {
        return {
            restrict: "A",
            require: "?ngOptions",
            priority: 1500,
            link: {
                pre: function(e, t, n) {
                    t.append('<option data-hidden="true" disabled value="">' + (n.title || "Select something") + "</option>")
                },
                post: function(e, t, n) {
                    function i() {
                        t.selectpicker("refresh")
                    }
                    n.ngModel && e.$watch(n.ngModel, i),
                    n.ngDisabled && e.$watch(n.ngDisabled, i),
                    t.selectpicker({
                        dropupAuto: !1,
                        hideDisabled: !0
                    })
                }
            }
        }
    }
    angular.module("KingAdmin.pages.common").directive("selectpicker", e)
} (),
function() {
    "use strict";
    function e(e) {
        function t(e) {}
        var n = {
            responseError: t
        };
        return n
    }
    e.$inject = ["$q"],
    angular.module("KingAdmin.pages.config").factory("authExpiredInterceptor", e)
} (),
function() {
    "use strict";
    function e(e) {
        return {
            link: function(t, n, i) {
                function o() {
                    var t = e.hasPermission(s);
                    t && !a || !t && a ? n.show() : n.hide()
                }
                if (!angular.isString(i.hasPerms)) throw "hasPerms value must be a string";
                var s = i.hasPerms.trim(),
                a = "!" === s[0];
                a && (s = s.slice(1).trim()),
                o(),
                t.$on("permissionsChanged", o)
            }
        }
    }
    e.$inject = ["hasPermsService"],
    angular.module("KingAdmin.pages.config").directive("hasPerms", e)
} (),
function() {
    "use strict";
    function e(e, t) {
        var n = [];
        return {
            setPermissions: function(t) {
                n = t,
                e.$broadcast("permissionsChanged")
            },
            hasPermission: function(e) {
                if (0 == n.length) return t.open("auth.html", "_self"),
                !1;
                e = e.trim();
                for (var i = !1,
                o = 0; o < n.length; o++) if (e === n[o]) {
                    i = !0;
                    break
                }
                return i
            }
        }
    }
    e.$inject = ["$rootScope", "$window"],
    angular.module("KingAdmin.pages.config").factory("hasPermsService", e)
} (),
function() {
    "use strict";
    function e(e, t, n, i, o, s) {
        function a() {
            var t = e.$on("$stateChangeStart",
            function(t, a, r, l) {
                e.toState = a,
                e.toStateParams = r,
                e.fromState = l,
                a.external && (t.preventDefault(), n.open(a.url, "_self")),
                "home" == a.name || s.hasPermission(a.name) || (o.warning("没有权限访问该页面", "提示", {
                    progressBar: !0
                }), i.path("/home"))
            }),
            a = e.$on("$stateChangeSuccess",
            function(e, t, n, i, o) {});
            e.$on("$destroy",
            function() {
                angular.isDefined(t) && null !== t && t(),
                angular.isDefined(a) && null !== a && a()
            })
        }
        return {
            initialize: a
        }
    }
    e.$inject = ["$rootScope", "$state", "$window", "$location", "toastr", "hasPermsService"],
    angular.module("KingAdmin.pages.config").factory("stateHandler", e)
} (),
function() {
    "use strict";
    function e(e, t, n, i) {}
    e.$inject = ["$scope", "$rootScope", "$window", "UserService"],
    angular.module("KingAdmin.pages.home").controller("HomeControlller", e)
} (),
function() {
    "use strict";
    function e(e) {
        angular.extend(e, {
            closeButton: !0,
            closeHtml: "<button>&times;</button>",
            timeOut: 5e3,
            autoDismiss: !1,
            containerId: "toast-container",
            maxOpened: 0,
            newestOnTop: !0,
            positionClass: "toast-top-right",
            preventDuplicates: !1,
            preventOpenDuplicates: !1,
            target: "body"
        })
    }
    e.$inject = ["toastrConfig"],
    angular.module("KingAdmin.theme.components").config(e)
} (),
function() {
    "use strict";
    function e(e) {
        return {
            link: function(t, n) {
                e(function() {
                    function t(t) {
                        e(function() {
                            n.html(t)
                        },
                        30)
                    }
                    var i = n.attr("new-value"),
                    o = parseInt(n.html());
                    if (i > o) for (var s = o; i >= s; s++) t(s);
                    else for (var a = o; a >= i; a--) t(a);
                    e(function() {
                        n.next().find("i").addClass("show-arr")
                    },
                    500)
                },
                3500)
            }
        }
    }
    e.$inject = ["$timeout"],
    angular.module("KingAdmin.theme").directive("animatedChange", e)
} (),
function() {
    "use strict";
    function e() {
        return {
            restrict: "A",
            link: function(e, t) {
                t.bind("keydown",
                function(e) {
                    var t = e.target;
                    $(t).height(0);
                    var n = $(t)[0].scrollHeight;
                    n = 16 > n ? 16 : n,
                    $(t).height(n)
                }),
                setTimeout(function() {
                    var e = t;
                    $(e).height(0);
                    var n = $(e)[0].scrollHeight;
                    n = 16 > n ? 16 : n,
                    $(e).height(n)
                },
                0)
            }
        }
    }
    angular.module("KingAdmin.theme").directive("autoExpand", e)
} (),
function() {
    "use strict";
    function e(e, t) {
        return {
            link: function(n, i, o) {
                var s = t(o.autoFocus);
                n.$watch(s,
                function(t) {
                    t === !0 && e(function() {
                        i[0].focus(),
                        i[0].select()
                    })
                }),
                i.bind("blur",
                function() {
                    n.$apply(s.assign(n, !1))
                })
            }
        }
    }
    e.$inject = ["$timeout", "$parse"],
    angular.module("KingAdmin.theme").directive("autoFocus", e)
} (),
function() {
    "use strict";
    function e() {
        return {
            restrict: "AE",
            templateUrl: function(e, t) {
                return t.includeWithScope
            }
        }
    }
    angular.module("KingAdmin.theme").directive("includeWithScope", e)
} (),
function() {
    "use strict";
    function e(e) {
        return {
            restrict: "EA",
            template: "<div></div>",
            replace: !0,
            scope: {
                min: "=",
                max: "=",
                type: "@",
                prefix: "@",
                maxPostfix: "@",
                prettify: "=",
                prettifySeparator: "@",
                grid: "=",
                gridMargin: "@",
                postfix: "@",
                step: "@",
                hideMinMax: "@",
                hideFromTo: "@",
                from: "=",
                to: "=",
                disable: "=",
                onChange: "=",
                onFinish: "=",
                values: "=",
                timeout: "@"
            },
            link: function(t, n) {
                n.ionRangeSlider({
                    min: t.min,
                    max: t.max,
                    type: t.type,
                    prefix: t.prefix,
                    maxPostfix: t.maxPostfix,
                    prettify_enabled: t.prettify,
                    prettify_separator: t.prettifySeparator,
                    grid: t.grid,
                    gridMargin: t.gridMargin,
                    postfix: t.postfix,
                    step: t.step,
                    hideMinMax: t.hideMinMax,
                    hideFromTo: t.hideFromTo,
                    from: t.from,
                    to: t.to,
                    disable: t.disable,
                    onChange: t.onChange,
                    onFinish: t.onFinish,
                    values: t.values
                }),
                t.$watch("min",
                function(t) {
                    e(function() {
                        n.data("ionRangeSlider").update({
                            min: t
                        })
                    })
                },
                !0),
                t.$watch("max",
                function(t) {
                    e(function() {
                        n.data("ionRangeSlider").update({
                            max: t
                        })
                    })
                }),
                t.$watch("from",
                function(t) {
                    e(function() {
                        n.data("ionRangeSlider").update({
                            from: t
                        })
                    })
                }),
                t.$watch("to",
                function(t) {
                    e(function() {
                        n.data("ionRangeSlider").update({
                            to: t
                        })
                    })
                }),
                t.$watch("disable",
                function(t) {
                    e(function() {
                        n.data("ionRangeSlider").update({
                            disable: t
                        })
                    })
                })
            }
        }
    }
    e.$inject = ["$timeout"],
    angular.module("KingAdmin.theme").directive("ionSlider", e)
} (),
function() {
    "use strict";
    function e() {
        return {
            link: function(e, t) {
                t.bind("change",
                function(t) {
                    e.file = (t.srcElement || t.target).files[0],
                    e.getFile()
                })
            }
        }
    }
    angular.module("KingAdmin.theme").directive("ngFileSelect", e)
} (),
function() {
    "use strict";
    function e() {
        return {
            scope: {
                scrollPosition: "=",
                maxHeight: "="
            },
            link: function(e) {
                $(window).on("scroll",
                function() {
                    var t = $(window).scrollTop() > e.maxHeight;
                    t !== e.prevScrollTop && e.$apply(function() {
                        e.scrollPosition = t
                    }),
                    e.prevScrollTop = t
                })
            }
        }
    }
    angular.module("KingAdmin.theme").directive("scrollPosition", e)
} (),
function() {
    "use strict";
    function e() {
        return {
            scope: {
                trackWidth: "=",
                minWidth: "="
            },
            link: function(e, t) {
                e.trackWidth = $(t).width() < e.minWidth,
                e.prevTrackWidth = e.trackWidth,
                $(window).resize(function() {
                    var n = $(t).width() < e.minWidth;
                    n !== e.prevTrackWidth && e.$apply(function() {
                        e.trackWidth = n
                    }),
                    e.prevTrackWidth = n
                })
            }
        }
    }
    angular.module("KingAdmin.theme").directive("trackWidth", e)
} (),
function() {
    "use strict";
    function e(e, t) {
        return {
            restrict: "A",
            link: function(n, i) {
                var o = 1e3;
                t.$pageFinishedLoading && (o = 100),
                e(function() {
                    i.removeClass("full-invisible"),
                    i.addClass("animated zoomIn")
                },
                o)
            }
        }
    }
    e.$inject = ["$timeout", "$rootScope"],
    angular.module("KingAdmin.theme").directive("zoomIn", e)
} (),
function() {
    "use strict";
    function e() {
        this.isDescendant = function(e, t) {
            for (var n = t.parentNode; null != n;) {
                if (n == e) return ! 0;
                n = n.parentNode
            }
            return ! 1
        },
        this.hexToRGB = function(e, t) {
            var n = parseInt(e.slice(1, 3), 16),
            i = parseInt(e.slice(3, 5), 16),
            o = parseInt(e.slice(5, 7), 16);
            return "rgba(" + n + ", " + i + ", " + o + ", " + t + ")"
        }
    }
    angular.module("KingAdmin.theme").service("baUtil", e)
} (),
function() {
    "use strict";
    function e(e) {
        var t = function(e, t, n) {
            return function() {
                n.$apply(function() {
                    t.resolve(e.result)
                })
            }
        },
        n = function(e, t, n) {
            return function() {
                n.$apply(function() {
                    t.reject(e.result)
                })
            }
        },
        i = function(e, t) {
            return function(e) {
                t.$broadcast("fileProgress", {
                    total: e.total,
                    loaded: e.loaded
                })
            }
        },
        o = function(e, o) {
            var s = new FileReader;
            return s.onload = t(s, e, o),
            s.onerror = n(s, e, o),
            s.onprogress = i(s, o),
            s
        },
        s = function(t, n) {
            var i = e.defer(),
            s = o(i, n);
            return s.readAsDataURL(t),
            i.promise
        };
        return {
            readAsDataUrl: s
        }
    }
    e.$inject = ["$q"],
    angular.module("KingAdmin.theme").service("fileReader", e)
} (),
function() {
    "use strict";
    function e(e) {
        return {
            loadImg: function(t) {
                var n = e.defer(),
                i = new Image;
                return i.src = t,
                i.onload = function() {
                    n.resolve()
                },
                n.promise
            },
            loadAmCharts: function() {
                var t = e.defer();
                return AmCharts.ready(function() {
                    t.resolve()
                }),
                t.promise
            }
        }
    }
    e.$inject = ["$q"],
    angular.module("KingAdmin.theme").service("preloader", e)
} (),
function() {
    "use strict";
    function e(e) {
        return {
            start: function(t, n, i) {
                function o() {
                    return t(n, i)
                }
                var s = o();
                angular.element(e).bind("focus",
                function() {
                    s && t.cancel(s),
                    s = o()
                }),
                angular.element(e).bind("blur",
                function() {
                    s && t.cancel(s)
                })
            }
        }
    }
    e.$inject = ["$window"],
    angular.module("KingAdmin.theme").service("stopableInterval", e)
} (),
function() {
    "use strict";
    function e(e, t, n, i, o) {
        var s = this;
        s.dictlist = [],
        s.dictClassList = [],
        o.getList({},
        function(e) {
            s.dictClassList = e.result
        }),
        s.showClassCode = function(e) {
            var n = [];
            return e && (n = t("filter")(s.dictClassList, {
                id: e
            })),
            n.length ? n[0].code: "请选择分类"
        },
        s.addRow = function() {
            s.inserted = {
                id: null,
                dictClassId: "",
                code: null,
                text: null,
                remark: null
            },
            s.dictlist.push(s.inserted)
        },
        s.save = function(e) {
            return null == e.code || "" == e.code ? void n.warning("编号不能为空", "提示:", {
                progressBar: !0
            }) : void i.save(e,
            function(e) {
                s.LoadPage()
            })
        },
        s.LoadPage = function(e) {
            e = e || s.tableState,
            e.pagination.number = e.pagination.number || 5,
            i.getSmartData(e,
            function(t) {
                e.pagination.numberOfPages = t.result.pages,
                e.pagination.totalItemCount = t.result.total,
                s.tableState = e,
                s.dictlist = t.result.records
            })
        },
        s.del = function(e) {
            return null == e ? void s.LoadPage() : void i.del({
                id: e
            },
            function(e) {
                s.LoadPage()
            })
        },
        s.checkboxes = {
            checked: !1,
            items: {}
        },
        e.$watch("kt.checkboxes.checked",
        function(e) {
            angular.forEach(s.dictlist,
            function(t) {
                s.checkboxes.items[t.id] = e
            })
        })
    }
    e.$inject = ["$scope", "$filter", "toastr", "DictService", "DictClassService"],
    angular.module("KingAdmin.pages.dict.dict").controller("DictListCtrl", e)
} (),
function() {
    "use strict";
    function e(e, t, n) {
        function i(n, i) {
            e("sys/dict/getSmartData", {},
            {
                query: {
                    method: "POST"
                }
            }).query(n,
            function(e) {
                console.log(e),
                i(e)
            },
            function(e) {
                t.error(e, "提示", {
                    progressBar: !0
                })
            })
        }
        function o(e, i) {
            n.danger("确定删除?",
            function() {
                c["delete"](e,
                function(e) {
                    0 == e.code ? t.success("删除成功！", "提示", {
                        progressBar: !0
                    }) : t.warning("删除失败！", "提示", {
                        progressBar: !0
                    }),
                    i(e)
                },
                function(e) {
                    t.error(e, "提示", {
                        progressBar: !0
                    })
                })
            })
        }
        function s(e, i) {
            n.info("确定保存?",
            function() {
                angular.isDefined(e.id) && null != e.id ? c.update(e,
                function(e) {
                    console.log(e),
                    t.success("保存成功", "提示", {
                        progressBar: !0
                    }),
                    i(e)
                },
                function(e) {
                    t.error(e, "提示", {
                        progressBar: !0
                    })
                }) : c.create(e,
                function(e) {
                    console.log(e),
                    t.success("保存成功", "提示", {
                        progressBar: !0
                    }),
                    i(e)
                },
                function(e) {
                    t.error(e, "提示", {
                        progressBar: !0
                    })
                })
            })
        }
        function a(e, n) {
            c.get(e,
            function(e) {
                console.log(e),
                n(e)
            },
            function(e) {
                t.error(e, "提示", {
                    progressBar: !0
                })
            })
        }
        function r(n, i) {
            e("sys/dict/getlist/:code").get({
                code: n
            },
            function(e) {
                console.log(e),
                i(e)
            },
            function(e) {
                t.error(e, "提示", {
                    progressBar: !0
                })
            })
        }
        function l(n) {
            e("sys/dict/getlist/:code").get({
                code: n
            },
            function(e) {
                return console.log(e),
                e.result
            },
            function(e) {
                return t.error(e, "提示", {
                    progressBar: !0
                }),
                null
            })
        }
        var c = e("sys/dict/:id", {},
        {
            create: {
                method: "POST"
            },
            update: {
                method: "PUT"
            }
        });
        return {
            getSmartData: i,
            del: o,
            save: s,
            getInfo: a,
            getList: r,
            getDict: l
        }
    }
    e.$inject = ["$resource", "toastr", "CommonService"],
    angular.module("KingAdmin.pages.dict.dict").factory("DictService", e)
} (),
function() {
    "use strict";
    function e(e, t, n) {
        var i = this;
        i.dictlist = [],
        i.addRow = function() {
            i.inserted = {
                id: null,
                code: null,
                remark: null
            },
            i.dictlist.push(i.inserted)
        },
        i.save = function(e) {
            return null == e.code || "" == e.code ? void t.warning("编号不能为空", "提示:", {
                progressBar: !0
            }) : void n.save(e,
            function(e) {
                i.LoadPage()
            })
        },
        i.LoadPage = function(e) {
            e = e || i.tableState,
            e.pagination.number = e.pagination.number || 5,
            n.getSmartData(e,
            function(t) {
                e.pagination.numberOfPages = t.result.pages,
                e.pagination.totalItemCount = t.result.total,
                i.tableState = e,
                i.dictlist = t.result.records
            })
        },
        i.del = function(e) {
            return null == e ? void i.LoadPage() : void n.del({
                id: e
            },
            function(e) {
                i.LoadPage()
            })
        },
        i.checkboxes = {
            checked: !1,
            items: {}
        },
        e.$watch("kt.checkboxes.checked",
        function(e) {
            angular.forEach(i.dictlist,
            function(t) {
                i.checkboxes.items[t.id] = e
            })
        })
    }
    e.$inject = ["$scope", "toastr", "DictClassService"],
    angular.module("KingAdmin.pages.dict.dictclass").controller("DictClassListCtrl", e)
} (),
function() {
    "use strict";
    function e(e, t, n) {
        function i(n, i) {
            e("sys/dictclass/getSmartData", {},
            {
                query: {
                    method: "POST"
                }
            }).query(n,
            function(e) {
                console.log(e),
                i(e)
            },
            function(e) {
                t.error(e, "提示", {
                    progressBar: !0
                })
            })
        }
        function o(e, i) {
            n.danger("确定删除?",
            function() {
                l["delete"](e,
                function(e) {
                    0 == e.code ? t.success("删除成功！", "提示", {
                        progressBar: !0
                    }) : t.warning("删除失败！", "提示", {
                        progressBar: !0
                    }),
                    i(e)
                },
                function(e) {
                    t.error(e, "提示", {
                        progressBar: !0
                    })
                })
            })
        }
        function s(e, n) {
            angular.isDefined(e.id) && null != e.id ? l.update(e,
            function(e) {
                console.log(e),
                t.success("保存成功", "提示", {
                    progressBar: !0
                }),
                n(e)
            },
            function(e) {
                t.error(e, "提示", {
                    progressBar: !0
                })
            }) : l.create(e,
            function(e) {
                console.log(e),
                t.success("保存成功", "提示", {
                    progressBar: !0
                }),
                n(e)
            },
            function(e) {
                t.error(e, "提示", {
                    progressBar: !0
                })
            })
        }
        function a(e, n) {
            l.get(e,
            function(e) {
                console.log(e),
                n(e)
            },
            function(e) {
                t.error(e, "提示", {
                    progressBar: !0
                })
            })
        }
        function r(n, i) {
            e("sys/dictclass/getlist").get(n,
            function(e) {
                console.log(e),
                i(e)
            },
            function(e) {
                t.error(e, "提示", {
                    progressBar: !0
                })
            })
        }
        var l = e("sys/dictclass/:id", {},
        {
            create: {
                method: "POST"
            },
            update: {
                method: "PUT"
            }
        });
        return {
            getSmartData: i,
            del: o,
            save: s,
            getInfo: a,
            getList: r
        }
    }
    e.$inject = ["$resource", "toastr", "CommonService"],
    angular.module("KingAdmin.pages.dict.dictclass").factory("DictClassService", e)
} (),
function() {
    "use strict";
    function e(e, t) {
        var n = e.colors.dashboard;
        t.getList({},
        function(e) {
            var i = e.result,
            o = $("#calendar").fullCalendar({
                header: {
                    left: "prev,next today",
                    center: "title",
                    right: "month,agendaWeek,agendaDay"
                },
                monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                monthNamesShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                dayNames: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
                dayNamesShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
                today: ["今天"],
                firstDay: 1,
                buttonText: {
                    today: "本月",
                    month: "月",
                    week: "周",
                    day: "日",
                    prev: "上一月",
                    next: "下一月"
                },
                selectable: !0,
                selectHelper: !0,
                select: function(e, i) {
                    var s, a = prompt("标注:");
                    a && (s = {
                        title: a,
                        start: e,
                        end: i,
                        color: n.blueStone
                    },
                    t.save(s,
                    function(e) {
                        o.fullCalendar("renderEvent", s, !0)
                    })),
                    o.fullCalendar("unselect")
                },
                editable: !0,
                eventLimit: !0,
                events: i
            })
        })
    }
    e.$inject = ["baConfig", "CalendarService"],
    angular.module("KingAdmin.pages.home").controller("CalendarControlller", e)
} (),
function() {
    "use strict";
    function e(e, t, n) {
        function i(e, n) {
            r["delete"](e,
            function(e) {
                0 == e.code ? t.success("删除成功！", "提示", {
                    progressBar: !0
                }) : t.warning("删除失败！", "提示", {
                    progressBar: !0
                }),
                n(e)
            },
            function(e) {
                t.error(e, "提示", {
                    progressBar: !0
                })
            })
        }
        function o(e, n) {
            angular.isDefined(e.id) && null != e.id ? r.update(e,
            function(e) {
                console.log(e),
                t.success("保存成功", "提示", {
                    progressBar: !0
                }),
                n(e)
            },
            function(e) {
                t.error(e, "提示", {
                    progressBar: !0
                })
            }) : r.create(e,
            function(e) {
                console.log(e),
                t.success("保存成功", "提示", {
                    progressBar: !0
                }),
                n(e)
            },
            function(e) {
                t.error(e, "提示", {
                    progressBar: !0
                })
            })
        }
        function s(e, n) {
            r.get(e,
            function(e) {
                console.log(e),
                n(e)
            },
            function(e) {
                t.error(e, "提示", {
                    progressBar: !0
                })
            })
        }
        function a(n, i) {
            e("sys/calendar/getlist").get(n,
            function(e) {
                console.log(e),
                i(e)
            },
            function(e) {
                t.error(e, "提示", {
                    progressBar: !0
                })
            })
        }
        var r = e("sys/calendar/:id", {},
        {
            create: {
                method: "POST"
            },
            update: {
                method: "PUT"
            }
        });
        return {
            del: i,
            save: o,
            getInfo: s,
            getList: a
        }
    }
    e.$inject = ["$resource", "toastr", "CommonService"],
    angular.module("KingAdmin.pages.home").factory("CalendarService", e)
} (),
function() {
    "use strict";
    function e() {
        return {
            restrict: "E",
            controller: "CalendarControlller",
            templateUrl: "app/pages/home/calendar/calendar.html"
        }
    }
    angular.module("KingAdmin.pages.home").directive("homeCalendar", e)
} (),
function() {
    "use strict";
    function e(e, t, n, i, o) {
        function s() {
            return n.get("management/metrics").then(function(t) {
                e.metrics = t.data,
                e.charts = [{
                    color: c,
                    description: "内存",
                    stats: e.metrics.mem,
                    icon: "refresh"
                },
                {
                    color: c,
                    description: "线程",
                    stats: e.metrics.threads,
                    icon: "person"
                },
                {
                    color: c,
                    description: "加载类",
                    stats: e.metrics.classes,
                    icon: "money"
                },
                {
                    color: c,
                    description: "登录次数",
                    stats: e.metrics["counter.status.200.api.login"],
                    icon: "face"
                }]
            })
        }
        function a(e, t) {
            return Math.random() * (t - e) + e
        }
        function r() {
            $(".chart").each(function() {
                var e = $(this);
                e.easyPieChart({
                    easing: "easeOutBounce",
                    onStep: function(e, t, n) {
                        $(this.el).find(".percent").text(Math.round(n))
                    },
                    barColor: e.attr("rel"),
                    trackColor: "rgba(0,0,0,0)",
                    size: 84,
                    scaleLength: 0,
                    animation: 2e3,
                    lineWidth: 9,
                    lineCap: "round"
                })
            }),
            $(".refresh-data").on("click",
            function() {
                l()
            })
        }
        function l() {
            $(".pie-charts .chart").each(function(e, t) {
                $(t).data("easyPieChart").update(a(55, 90))
            })
        }
        s();
        var c = o.hexToRGB(i.colors.defaultText, .2);
        t(function() {
            r(),
            l()
        },
        1e3)
    }
    e.$inject = ["$scope", "$timeout", "$http", "baConfig", "baUtil"],
    angular.module("KingAdmin.pages.home").controller("PieChartControlller", e)
} (),
function() {
    "use strict";
    function e() {
        return {
            restrict: "E",
            controller: "PieChartControlller",
            templateUrl: "app/pages/home/pieChart/pieChart.html"
        }
    }
    angular.module("KingAdmin.pages.home").directive("homePieChart", e)
} (),
function() {
    "use strict";
    function e() {
        return {
            restrict: "E",
            templateUrl: "app/pages/home/popularApp/popularApp.html"
        }
    }
    angular.module("KingAdmin.pages.home").directive("popularApp", e)
} (),
function() {
    "use strict";
    function e() {
        return {
            restrict: "EA",
            controller: "TodoControlller",
            templateUrl: "app/pages/home/todo/todo.html"
        }
    }
    angular.module("KingAdmin.pages.home").directive("homeTodo", e)
} (),
function() {
    "use strict";
    function e(e, t, n) {
        e.transparent = t.theme.blur,
        e.newTodoText = "",
        e.todoList = [],
        n.getList({},
        function(t) {
            e.todoList = t.result
        }),
        e.addToDoItem = function(t, i) { ! i && 13 !== t.which || "" == e.newTodoText || n.save({
                text: e.newTodoText
            },
            function(t) {
                e.todoList.unshift({
                    text: e.newTodoText
                }),
                e.newTodoText = ""
            })
        },
        e.deleleTodo = function(e) {
            n.del({
                id: e.id
            },
            function(t) {
                e.deleted = !0
            })
        }
    }
    e.$inject = ["$scope", "baConfig", "TodoService"],
    angular.module("KingAdmin.pages.home").controller("TodoControlller", e)
} (),
function() {
    "use strict";
    function e(e, t, n) {
        function i(e, n) {
            r["delete"](e,
            function(e) {
                0 == e.code ? t.success("删除成功！", "提示", {
                    progressBar: !0
                }) : t.warning("删除失败！", "提示", {
                    progressBar: !0
                }),
                n(e)
            },
            function(e) {
                t.error(e, "提示", {
                    progressBar: !0
                })
            })
        }
        function o(e, n) {
            angular.isDefined(e.id) && null != e.id ? r.update(e,
            function(e) {
                console.log(e),
                t.success("保存成功", "提示", {
                    progressBar: !0
                }),
                n(e)
            },
            function(e) {
                t.error(e, "提示", {
                    progressBar: !0
                })
            }) : r.create(e,
            function(e) {
                console.log(e),
                t.success("保存成功", "提示", {
                    progressBar: !0
                }),
                n(e)
            },
            function(e) {
                t.error(e, "提示", {
                    progressBar: !0
                })
            })
        }
        function s(e, n) {
            r.get(e,
            function(e) {
                console.log(e),
                n(e)
            },
            function(e) {
                t.error(e, "提示", {
                    progressBar: !0
                })
            })
        }
        function a(n, i) {
            e("sys/todo/getlist").get(n,
            function(e) {
                console.log(e),
                i(e)
            },
            function(e) {
                t.error(e, "提示", {
                    progressBar: !0
                })
            })
        }
        var r = e("sys/todo/:id", {},
        {
            create: {
                method: "POST"
            },
            update: {
                method: "PUT"
            }
        });
        return {
            del: i,
            save: o,
            getInfo: s,
            getList: a
        }
    }
    e.$inject = ["$resource", "toastr", "CommonService"],
    angular.module("KingAdmin.pages.home").factory("TodoService", e)
} (),
function() {
    "use strict";
    function e(e, t, n) {
        e.transparent = t.theme.blur;
        var i = t.colors.dashboard;
        e.doughnutData = [{
            value: 2e3,
            color: i.white,
            highlight: n.shade(i.white, 15),
            label: "Other",
            percentage: 87,
            order: 1
        },
        {
            value: 1500,
            color: i.blueStone,
            highlight: n.shade(i.blueStone, 15),
            label: "Search engines",
            percentage: 22,
            order: 4
        },
        {
            value: 1e3,
            color: i.surfieGreen,
            highlight: n.shade(i.surfieGreen, 15),
            label: "Referral Traffic",
            percentage: 70,
            order: 3
        },
        {
            value: 1200,
            color: i.silverTree,
            highlight: n.shade(i.silverTree, 15),
            label: "Direct Traffic",
            percentage: 38,
            order: 2
        },
        {
            value: 400,
            color: i.gossip,
            highlight: n.shade(i.gossip, 15),
            label: "Ad Campaigns",
            percentage: 17,
            order: 0
        }];
        var o = document.getElementById("chart-area").getContext("2d");
        window.myDoughnut = new Chart(o).Doughnut(e.doughnutData, {
            segmentShowStroke: !1,
            percentageInnerCutout: 64,
            responsive: !0
        })
    }
    e.$inject = ["$scope", "baConfig", "colorHelper"],
    angular.module("KingAdmin.pages.home").controller("TrafficChartCtrl", e)
} (),
function() {
    "use strict";
    function e() {
        return {
            restrict: "E",
            controller: "TrafficChartCtrl",
            templateUrl: "app/pages/home/trafficChart/trafficChart.html"
        }
    }
    angular.module("KingAdmin.pages.home").directive("trafficChart", e)
} (),
function() {
    "use strict";
    function e(e, t, n, i, o, s) {
        var a = this;
        a.menu = {},
        t.isAdd ? a.isAdd = !0 : a.isAdd = !1,
        a.types = [],
        !a.isAdd && t.id ? o.getInfo({
            id: t.id
        },
        function(e) {
            a.menu = e
        }) : a.menu.parentId = t.id,
        s.getList("MENUTYPE",
        function(e) {
            a.types = e.result,
            a.isShowType = !0
        }),
        a.save = function() {
            o.save(a.menu,
            function(e) {
                i.close(!0)
            })
        }
    }
    e.$inject = ["$scope", "$stateParams", "$state", "$uibModalInstance", "MenuService", "DictService"],
    angular.module("KingAdmin.pages.sys.menu").controller("MenuCtrl", e)
} (),
function() {
    "use strict";
    function e(e, t, n, i, o) {
        var s = this;
        s.menulist = [],
        s.types = [],
        o.getList("MENUTYPE",
        function(e) {
            s.types = e.result,
            s.isShowType = !0
        }),
        s.del = function(e) {
            i.del({
                id: e
            },
            function(e) {
                t.go("sys.menu", null, {
                    reload: !0
                })
            })
        },
        i.getMenuTree({
            roleId: ""
        },
        function(e) {
            s.treeData = e.result,
            s.treeshow = !0,
            n(function() {
                s.basicTree.bind("select_node.jstree",
                function(e, t) {
                    s.selectNode(t.node)
                })
            },
            500)
        }),
        s.basicConfig = {
            core: {
                check_callback: !0,
                worker: !0
            },
            types: {
                "default": {
                    icon: !1
                }
            },
            checkbox: {
                keep_selected_style: !1
            },
            plugins: ["types", "wholerow"],
            version: 1
        },
        s.selectNode = function(e) {
            i.getInfo({
                id: e.original.id
            },
            function(t) {
                s.menu = t,
                s.isShowBtn = !0,
                e.children.length > 0 ? s.isShowDelBtn = !0 : s.isShowDelBtn = !1,
                "2" == s.menu.type ? s.isShowAddBtn = !0 : s.isShowAddBtn = !1
            })
        }
    }
    e.$inject = ["$scope", "$state", "$timeout", "MenuService", "DictService"],
    angular.module("KingAdmin.pages.sys.menu").controller("MenuListCtrl", e)
} (),
function() {
    "use strict";
    function e(e, t, n) {
        function i(n, i) {
            e("sys/menu/getSmartData", {},
            {
                query: {
                    method: "POST"
                }
            }).query(n,
            function(e) {
                console.log(e),
                i(e)
            },
            function(e) {
                t.error(e, "提示", {
                    progressBar: !0
                })
            })
        }
        function o(n, i) {
            e("sys/menu/getMenuTree", {},
            {
                get: {
                    method: "GET"
                }
            }).get(n,
            function(e) {
                console.log(e),
                i(e)
            },
            function(e) {
                t.error(e, "提示", {
                    progressBar: !0
                })
            })
        }
        function s(e, i) {
            n.danger("确定删除?",
            function() {
                l["delete"](e,
                function(e) {
                    0 == e.code ? t.success("删除成功！", "提示", {
                        progressBar: !0
                    }) : t.warning("删除失败！", "提示", {
                        progressBar: !0
                    }),
                    i(e)
                },
                function(e) {
                    t.error(e, "提示", {
                        progressBar: !0
                    })
                })
            })
        }
        function a(e, i) {
            n.info("确定保存?",
            function() {
                angular.isDefined(e.id) && null != e.id ? l.update(e,
                function(e) {
                    console.log(e),
                    t.success("保存成功", "提示", {
                        progressBar: !0
                    }),
                    i(e)
                },
                function(e) {
                    t.error(e, "提示", {
                        progressBar: !0
                    })
                }) : l.create(e,
                function(e) {
                    console.log(e),
                    t.success("保存成功", "提示", {
                        progressBar: !0
                    }),
                    i(e)
                },
                function(e) {
                    t.error(e, "提示", {
                        progressBar: !0
                    })
                })
            })
        }
        function r(e, n) {
            l.get(e,
            function(e) {
                console.log(e),
                n(e)
            },
            function(e) {
                t.error(e, "提示", {
                    progressBar: !0
                })
            })
        }
        var l = e("sys/menu/:id", {},
        {
            create: {
                method: "POST"
            },
            update: {
                method: "PUT"
            }
        });
        return {
            getSmartData: i,
            getMenuTree: o,
            del: s,
            save: a,
            getInfo: r
        }
    }
    e.$inject = ["$resource", "toastr", "CommonService"],
    angular.module("KingAdmin.pages.sys.menu").factory("MenuService", e)
} (),
function() {
    "use strict";
    function e(e, t, n, i, o) {
        var s = this;
        s.role = {},
        t.isView ? s.isView = !0 : s.isView = !1,
        t.id ? i.getInfo({
            id: t.id
        },
        function(e) {
            s.role = e
        }) : s.isAdd = !0,
        o.getMenuTree({
            roleId: t.id
        },
        function(e) {
            s.treeData = e.result,
            s.treeshow = !0
        }),
        s.save = function() {
            var e = s.basicTree.jstree().get_checked(!0);
            console.log(e),
            s.role.menuTree = [],
            angular.forEach(e,
            function(e) {
                s.role.menuTree.push(e.original)
            }),
            i.save(s.role,
            function(e) {
                n.go("sys.role")
            })
        },
        s.basicConfig = {
            core: {
                check_callback: !0,
                worker: !0
            },
            types: {
                "default": {
                    icon: !1
                }
            },
            checkbox: {
                keep_selected_style: !1
            },
            plugins: ["types", "wholerow", "checkbox"],
            version: 1
        }
    }
    e.$inject = ["$scope", "$stateParams", "$state", "RoleService", "MenuService"],
    angular.module("KingAdmin.pages.sys.role").controller("RoleCtrl", e)
} (),
function() {
    "use strict";
    function e(e, t) {
        var n = this;
        n.rolelist = [],
        n.LoadPage = function(e) {
            e = e || n.tableState,
            e.pagination.number = e.pagination.number || 5,
            t.getSmartData(e,
            function(t) {
                e.pagination.numberOfPages = t.result.pages,
                e.pagination.totalItemCount = t.result.total,
                n.tableState = e,
                n.rolelist = t.result.records
            })
        },
        n.del = function(e) {
            t.del({
                id: e
            },
            function(e) {
                n.LoadPage()
            })
        },
        n.checkboxes = {
            checked: !1,
            items: {}
        },
        e.$watch("kt.checkboxes.checked",
        function(e) {
            angular.forEach(n.rolelist,
            function(t) {
                n.checkboxes.items[t.id] = e
            })
        })
    }
    e.$inject = ["$scope", "RoleService"],
    angular.module("KingAdmin.pages.sys.role").controller("RoleListCtrl", e)
} (),
function() {
    "use strict";
    function e(e, t, n) {
        function i(n, i) {
            e("sys/role/getSmartData", {},
            {
                query: {
                    method: "POST"
                }
            }).query(n,
            function(e) {
                console.log(e),
                i(e)
            },
            function(e) {
                t.error(e, "提示", {
                    progressBar: !0
                })
            })
        }
        function o(e, i) {
            n.danger("确定删除?",
            function() {
                l["delete"](e,
                function(e) {
                    0 == e.code ? t.success("删除成功！", "提示", {
                        progressBar: !0
                    }) : t.warning("删除失败！", "提示", {
                        progressBar: !0
                    }),
                    i(e)
                },
                function(e) {
                    t.error(e, "提示", {
                        progressBar: !0
                    })
                })
            })
        }
        function s(e, i) {
            n.info("确定保存?",
            function() {
                angular.isDefined(e.id) && null != e.id ? l.update(e,
                function(e) {
                    console.log(e),
                    t.success("保存成功", "提示", {
                        progressBar: !0
                    }),
                    i(e)
                },
                function(e) {
                    t.error(e, "提示", {
                        progressBar: !0
                    })
                }) : l.create(e,
                function(e) {
                    console.log(e),
                    t.success("保存成功", "提示", {
                        progressBar: !0
                    }),
                    i(e)
                },
                function(e) {
                    t.error(e, "提示", {
                        progressBar: !0
                    })
                })
            })
        }
        function a(e, n) {
            l.get(e,
            function(e) {
                console.log(e),
                n(e)
            },
            function(e) {
                t.error(e, "提示", {
                    progressBar: !0
                })
            })
        }
        function r(n, i) {
            e("sys/role/getlist").get(n,
            function(e) {
                console.log(e),
                i(e)
            },
            function(e) {
                t.error(e, "提示", {
                    progressBar: !0
                })
            })
        }
        var l = e("sys/role/:id", {},
        {
            create: {
                method: "POST"
            },
            update: {
                method: "PUT"
            }
        });
        return {
            getSmartData: i,
            del: o,
            save: s,
            getInfo: a,
            getList: r
        }
    }
    e.$inject = ["$resource", "toastr", "CommonService"],
    angular.module("KingAdmin.pages.sys.role").factory("RoleService", e)
} (),
function() {
    "use strict";
    function e(e, t, n, i, o, s) {
        var a = this;
        a.user = {},
        a.user.rolelist = [],
        a.statuses = [],
        t.isView ? a.isView = !0 : a.isView = !1,
        t.id ? i.getInfo({
            id: t.id
        },
        function(e) {
            a.user = e
        }) : a.isAdd = !0,
        s.getList("USERSTATUS",
        function(e) {
            a.statuses = e.result,
            a.isShowStatus = !0
        }),
        o.getList({
            userId: t.id
        },
        function(e) {
            a.user.rolelist = e.result
        }),
        a.save = function() {
            i.save(a.user,
            function(e) {
                n.go("sys.user")
            })
        },
        a.arePasswordsEqual = function() {
            return a.user.password == a.password
        }
    }
    e.$inject = ["$scope", "$stateParams", "$state", "UserService", "RoleService", "DictService"],
    angular.module("KingAdmin.pages.sys.user").controller("UserCtrl", e)
} (),
function() {
    "use strict";
    function e(e, t, n, i) {
        var o = this;
        o.userlist = [],
        o.status = [],
        i.getList("USERSTATUS",
        function(e) {
            o.status = e.result
        }),
        o.LoadPage = function(e) {
            e = e || o.tableState,
            e.pagination.number = e.pagination.number || 5,
            n.getSmartData(e,
            function(t) {
                e.pagination.numberOfPages = t.result.pages,
                e.pagination.totalItemCount = t.result.total,
                o.tableState = e,
                o.userlist = t.result.records
            })
        },
        o.showStatus = function(e) {
            var n = [];
            return (e.status || 0 == e.status) && (n = t("filter")(o.status, {
                code: e.status
            })),
            n.length ? n[0].text: "Not set"
        },
        o.del = function(e) {
            n.del({
                id: e
            },
            function(e) {
                o.LoadPage()
            })
        },
        o.checkboxes = {
            checked: !1,
            items: {}
        },
        e.$watch("kt.checkboxes.checked",
        function(e) {
            angular.forEach(o.userlist,
            function(t) {
                o.checkboxes.items[t.id] = e
            })
        })
    }
    e.$inject = ["$scope", "$filter", "UserService", "DictService"],
    angular.module("KingAdmin.pages.sys.user").controller("UserListCtrl", e)
} (),
function() {
    "use strict";
    function e(e, t, n) {
        function i(n, i) {
            e("sys/users/getSmartData", {},
            {
                query: {
                    method: "POST"
                }
            }).query(n,
            function(e, t) {
                console.log(e),
                angular.isFunction(i) && i(e),
                i(e)
            },
            function(e) {
                t.error(e, "提示", {
                    progressBar: !0
                })
            })
        }
        function o(e, i) {
            n.danger("确定删除?",
            function() {
                u["delete"](e,
                function(e) {
                    0 == e.code ? t.success("删除成功！", "提示", {
                        progressBar: !0
                    }) : t.warning("删除失败！", "提示", {
                        progressBar: !0
                    }),
                    angular.isFunction(i) && i(e)
                },
                function(e) {
                    t.error(e, "提示", {
                        progressBar: !0
                    })
                })
            })
        }
        function s(e, i) {
            n.info("确定保存?",
            function() {
                angular.isDefined(e.id) && null != e.id ? u.update(e,
                function(e) {
                    console.log(e),
                    t.success("保存成功", "提示", {
                        progressBar: !0
                    }),
                    angular.isFunction(i) && i(e)
                },
                function(e) {
                    t.error(e, "提示", {
                        progressBar: !0
                    })
                }) : u.create(e,
                function(e) {
                    console.log(e),
                    t.success("保存成功", "提示", {
                        progressBar: !0
                    }),
                    angular.isFunction(i) && i(e)
                },
                function(e) {
                    t.error(e, "提示", {
                        progressBar: !0
                    })
                })
            })
        }
        function a(e, n) {
            u.get(e,
            function(e) {
                console.log(e),
                angular.isFunction(n) && n(e)
            },
            function(e) {
                t.error(e, "提示", {
                    progressBar: !0
                })
            })
        }
        function r(n, i) {
            e("api/login", {},
            {
                login: {
                    method: "POST"
                }
            }).login(n,
            function(e, n) {
                "0" == e.code ? angular.isFunction(i) && i(e) : t.error(e.msg, "提示", {
                    progressBar: !0
                }),
                console.log(e)
            },
            function(e) {
                t.error(e, "提示", {
                    progressBar: !0
                })
            })
        }
        function l(n, i) {
            e("api/signout", {},
            {
                signout: {
                    method: "GET"
                }
            }).signout(n,
            function(e, n) {
                "0" == e.code ? (t.success("保存成功", "提示", {
                    progressBar: !0
                }), angular.isFunction(i) && i(e)) : t.error(e.msg, "提示", {
                    progressBar: !0
                })
            },
            function(e) {
                t.error(e, "提示", {
                    progressBar: !0
                })
            })
        }
        function c(n) {
            e("api/isLogin", {},
            {
                isLogin: {
                    method: "GET"
                }
            }).isLogin({},
            function(e, t) {
                angular.isFunction(n) && n(e)
            },
            function(e) {
                t.error(e, "提示", {
                    progressBar: !0
                })
            })
        }
        function d(i, o) {
            n.info("确定保存?",
            function() {
                e("api/password", {},
                {
                    password: {
                        method: "PUT"
                    }
                }).password(i,
                function(e, n) {
                    "0" == e.code ? (t.success("保存成功", "提示", {
                        progressBar: !0
                    }), angular.isFunction(o) && o(e)) : t.error(e.msg, "提示", {
                        progressBar: !0
                    })
                },
                function(e) {
                    t.error(e, "提示", {
                        progressBar: !0
                    })
                })
            })
        }
        var u = e("sys/users/:id", {},
        {
            create: {
                method: "POST"
            },
            update: {
                method: "PUT"
            }
        });
        return {
            getSmartData: i,
            del: o,
            save: s,
            getInfo: a,
            login: r,
            signout: l,
            isLogin: c,
            password: d
        }
    }
    e.$inject = ["$resource", "toastr", "CommonService"],
    angular.module("KingAdmin.pages.sys.user").factory("UserService", e)
} (),
function() {
    "use strict";
    function e(e, t) {
        return angular.extend({},
        e, {
            template: function(n, i) {
                var o = '<div  class="panel ' + (t.theme.blur ? "panel-blur": "") + " full-invisible " + (i.baPanelClass || "");
                return o += '" zoom-in ' + (t.theme.blur ? "ba-panel-blur": "") + ">",
                o += e.template(n, i),
                o += "</div>"
            }
        })
    }
    e.$inject = ["baPanel", "baConfig"],
    angular.module("KingAdmin.theme").directive("baPanel", e)
} (),
function() {
    "use strict";
    function e() {
        return {
            restrict: "A",
            transclude: !0,
            template: function(e, t) {
                var n = '<div class="panel-body" ng-transclude></div>';
                if (t.baPanelTitle) {
                    var i = '<div class="panel-heading clearfix"><h3 class="panel-title">' + t.baPanelTitle + "</h3></div>";
                    n = i + n
                }
                return n
            }
        }
    }
    angular.module("KingAdmin.theme").factory("baPanel", e)
} (),
function() {
    "use strict";
    function e(e, t, n) {
        var i;
        return e.bodyBgLoad().then(function() {
            i = e.getBodyBgImageSizes()
        }),
        t.addEventListener("resize",
        function() {
            i = e.getBodyBgImageSizes()
        }),
        {
            restrict: "A",
            link: function(o, s) {
                function a() {
                    i && s.css({
                        backgroundSize: Math.round(i.width) + "px " + Math.round(i.height) + "px",
                        backgroundPosition: Math.floor(i.positionX) + "px " + Math.floor(i.positionY) + "px"
                    })
                }
                n.$isMobile || (e.bodyBgLoad().then(function() {
                    setTimeout(a)
                }), t.addEventListener("resize", a), o.$on("$destroy",
                function() {
                    t.removeEventListener("resize", a)
                }))
            }
        }
    }
    e.$inject = ["baPanelBlurHelper", "$window", "$rootScope"],
    angular.module("KingAdmin.theme").directive("baPanelBlur", e)
} (),
function() {
    "use strict";
    function e(e) {
        var t = e.defer(),
        n = getComputedStyle(document.body, ":before"),
        i = new Image;
        i.src = n.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, "$2"),
        i.onerror = function() {
            t.reject()
        },
        i.onload = function() {
            t.resolve()
        },
        this.bodyBgLoad = function() {
            return t.promise
        },
        this.getBodyBgImageSizes = function() {
            var e = document.documentElement.clientWidth,
            t = document.documentElement.clientHeight;
            if (! (640 >= e)) {
                var n, o, s = i.height / i.width,
                a = t / e;
                return a > s ? (n = t, o = t / s) : (o = e, n = e * s),
                {
                    width: o,
                    height: n,
                    positionX: (e - o) / 2,
                    positionY: (t - n) / 2
                }
            }
        }
    }
    e.$inject = ["$q"],
    angular.module("KingAdmin.theme").service("baPanelBlurHelper", e)
} (),
function() {
    "use strict";
    function e(e) {
        return angular.extend({},
        e, {
            link: function(e, t, n) {
                t.addClass("panel panel-white"),
                n.baPanelClass && t.addClass(n.baPanelClass)
            }
        })
    }
    e.$inject = ["baPanel"],
    angular.module("KingAdmin.theme").directive("baPanelSelf", e)
} (),
function() {
    "use strict";
    function e(e, t, n, i) {
        n.theme = "bs3",
        i.bs3.submitTpl = '<button type="submit" class="btn btn-primary btn-with-icon"><i class="ion-checkmark-round"></i></button>',
        i.bs3.cancelTpl = '<button type="button" ng-click="$form.$cancel()" class="btn btn-default btn-with-icon"><i class="ion-close-round"></i></button>',
        console.log(e.menuItems),
        e.defaultSidebarState = e.menuItems[0].stateRef,
        e.hoverItem = function(t) {
            e.showHoverElem = !0,
            e.hoverElemHeight = t.currentTarget.clientHeight;
            var n = 66;
            e.hoverElemTop = t.currentTarget.getBoundingClientRect().top - n
        },
        e.$on("$stateChangeSuccess",
        function() {
            t.canSidebarBeHidden() && t.setMenuCollapsed(!0)
        })
    }
    e.$inject = ["$scope", "baSidebarService", "editableOptions", "editableThemes"],
    angular.module("KingAdmin.theme.components").controller("BaSidebarCtrl", e)
} (),
function() {
    "use strict";
    function e(e, t, n, i) {
        var o = $(window);
        return {
            restrict: "E",
            templateUrl: "app/theme/components/baSidebar/ba-sidebar.html",
            controller: "BaSidebarCtrl",
            link: function(i, s) {
                function a(i) {
                    n.isDescendant(s[0], i.target) || !angular.isDefined(i.originalEvent) || i.originalEvent.$sidebarEventProcessed || t.isMenuCollapsed() || !t.canSidebarBeHidden() || (i.originalEvent.$sidebarEventProcessed = !0, e(function() {
                        t.setMenuCollapsed(!0)
                    },
                    10))
                }
                function r() {
                    var e = t.shouldMenuBeCollapsed(),
                    n = l(); (e != t.isMenuCollapsed() || i.menuHeight != n) && i.$apply(function() {
                        i.menuHeight = n,
                        t.setMenuCollapsed(e)
                    })
                }
                function l() {
                    return s[0].childNodes[0].clientHeight - 84
                }
                i.menuHeight = s[0].childNodes[0].clientHeight - 84,
                o.on("click", a),
                o.on("resize", r),
                i.$on("$destroy",
                function() {
                    o.off("click", a),
                    o.off("resize", r)
                })
            }
        }
    }
    e.$inject = ["$timeout", "baSidebarService", "baUtil", "layoutSizes"],
    angular.module("KingAdmin.theme.components").directive("baSidebar", e)
} (),
function() {
    "use strict";
    function e() {
        var e = [];
        this.addStaticItem = function() {
            e.push.apply(e, arguments)
        },
        this.$get = ["$state", "layoutSizes",
        function(t, n) {
            function i() {
                function i() {
                    return t.get().filter(function(e) {
                        return e.sidebarMeta
                    }).map(function(e) {
                        var t = e.sidebarMeta;
                        return {
                            name: e.name,
                            title: e.title,
                            level: (e.name.match(/\./g) || []).length,
                            order: t.order,
                            icon: t.icon,
                            stateRef: e.name
                        }
                    }).sort(function(e, t) {
                        return 100 * (e.level - t.level) + e.order - t.order
                    })
                }
                function o() {
                    return window.innerWidth <= n.resWidthCollapseSidebar
                }
                function s() {
                    return window.innerWidth <= n.resWidthHideSidebar
                }
                var a = o();
                this.getMenuItems = function() {
                    var t = i(),
                    n = t.filter(function(e) {
                        return 0 == e.level
                    });
                    return n.forEach(function(e) {
                        var n = t.filter(function(t) {
                            return 1 == t.level && 0 === t.name.indexOf(e.name)
                        });
                        e.subMenu = n.length ? n: null
                    }),
                    n.concat(e)
                },
                this.shouldMenuBeCollapsed = o,
                this.canSidebarBeHidden = s,
                this.setMenuCollapsed = function(e) {
                    a = e
                },
                this.isMenuCollapsed = function() {
                    return a
                },
                this.toggleMenuCollapsed = function() {
                    a = !a
                },
                this.getAllStateRefsRecursive = function(e) {
                    function t(e) {
                        e.subMenu && e.subMenu.forEach(function(e) {
                            e.stateRef && n.push(e.stateRef),
                            t(e)
                        })
                    }
                    var n = [];
                    return t(e),
                    n
                }
            }
            return new i
        }],
        this.$get.$inject = ["$state", "layoutSizes"]
    }
    angular.module("KingAdmin.theme.components").provider("baSidebarService", e)
} (),
function() {
    "use strict";
    function e(e) {
        return {
            restrict: "A",
            link: function(t, n) {
                n.on("click",
                function(n) {
                    n.originalEvent.$sidebarEventProcessed = !0,
                    t.$apply(function() {
                        e.toggleMenuCollapsed()
                    })
                })
            }
        }
    }
    function t(e) {
        return {
            restrict: "A",
            link: function(t, n) {
                n.on("click",
                function(n) {
                    n.originalEvent.$sidebarEventProcessed = !0,
                    e.isMenuCollapsed() || t.$apply(function() {
                        e.setMenuCollapsed(!0)
                    })
                })
            }
        }
    }
    function n() {
        return {
            restrict: "A",
            controller: "BaSidebarTogglingItemCtrl"
        }
    }
    function i(e, t, n, i, o) {
        function s(e) {
            return e && l.some(function(t) {
                return 0 == e.name.indexOf(t)
            })
        }
        var a = this,
        r = a.$$menuItem = e.$eval(n.baSidebarTogglingItem);
        if (r && r.subMenu && r.subMenu.length) {
            a.$$expandSubmenu = function() {
                console.warn("$$expandMenu should be overwritten by baUiSrefTogglingSubmenu")
            },
            a.$$collapseSubmenu = function() {
                console.warn("$$collapseSubmenu should be overwritten by baUiSrefTogglingSubmenu")
            };
            var l = o.getAllStateRefsRecursive(r);
            a.$expand = function() {
                a.$$expandSubmenu(),
                t.addClass("ba-sidebar-item-expanded")
            },
            a.$collapse = function() {
                a.$$collapseSubmenu(),
                t.removeClass("ba-sidebar-item-expanded")
            },
            a.$toggle = function() {
                t.hasClass("ba-sidebar-item-expanded") ? a.$collapse() : a.$expand()
            },
            s(i.current) && t.addClass("ba-sidebar-item-expanded"),
            e.$on("$stateChangeStart",
            function(e, n) { ! s(n) && t.hasClass("ba-sidebar-item-expanded") && (a.$collapse(), t.removeClass("ba-sidebar-item-expanded"))
            }),
            e.$on("$stateChangeSuccess",
            function(e, n) {
                s(n) && !t.hasClass("ba-sidebar-item-expanded") && (a.$expand(), t.addClass("ba-sidebar-item-expanded"))
            })
        }
    }
    function o(e) {
        return {
            restrict: "A",
            require: "^baSidebarTogglingItem",
            link: function(e, t, n, i) {
                i.$$expandSubmenu = function() {
                    t.slideDown()
                },
                i.$$collapseSubmenu = function() {
                    t.slideUp()
                }
            }
        }
    }
    function s(e) {
        return {
            restrict: "A",
            require: "^baSidebarTogglingItem",
            link: function(t, n, i, o) {
                n.on("click",
                function() {
                    e.isMenuCollapsed() ? (t.$apply(function() {
                        e.setMenuCollapsed(!1)
                    }), o.$expand()) : o.$toggle()
                })
            }
        }
    }
    e.$inject = ["baSidebarService"],
    t.$inject = ["baSidebarService"],
    i.$inject = ["$scope", "$element", "$attrs", "$state", "baSidebarService"],
    o.$inject = ["$state"],
    s.$inject = ["baSidebarService"],
    angular.module("KingAdmin.theme.components").directive("baSidebarToggleMenu", e).directive("baSidebarCollapseMenu", t).directive("baSidebarTogglingItem", n).controller("BaSidebarTogglingItemCtrl", i).directive("baUiSrefTogglingSubmenu", o).directive("baUiSrefToggler", s)
} (),
function() {
    "use strict";
    function e() {
        return {
            restrict: "E",
            transclude: !0,
            templateUrl: "app/theme/components/baWizard/baWizard.html",
            controllerAs: "$baWizardController",
            controller: "baWizardCtrl"
        }
    }
    angular.module("KingAdmin.theme.components").directive("baWizard", e)
} (),
function() {
    "use strict";
    function e(e) {
        function t() {
            n.progress = (n.tabNum + 1) / n.tabs.length * 100
        }
        var n = this;
        n.tabs = [],
        n.tabNum = 0,
        n.progress = 0,
        n.addTab = function(e) {
            e.setPrev(n.tabs[n.tabs.length - 1]),
            n.tabs.push(e),
            n.selectTab(0)
        },
        e.$watch(angular.bind(n,
        function() {
            return n.tabNum
        }), t),
        n.selectTab = function(e) {
            n.tabs[n.tabNum].submit(),
            n.tabs[e].isAvailiable() && (n.tabNum = e, n.tabs.forEach(function(e, t) {
                t == n.tabNum ? e.select(!0) : e.select(!1)
            }))
        },
        n.isFirstTab = function() {
            return 0 == n.tabNum
        },
        n.isLastTab = function() {
            return n.tabNum == n.tabs.length - 1
        },
        n.nextTab = function() {
            n.selectTab(n.tabNum + 1)
        },
        n.previousTab = function() {
            n.selectTab(n.tabNum - 1)
        }
    }
    e.$inject = ["$scope"],
    angular.module("KingAdmin.theme.components").controller("baWizardCtrl", e)
} (),
function() {
    "use strict";
    function e() {
        return {
            restrict: "E",
            transclude: !0,
            require: "^baWizard",
            scope: {
                form: "="
            },
            templateUrl: "app/theme/components/baWizard/baWizardStep.html",
            link: function(e, t, n, i) {
                function o(t) {
                    t ? e.selected = !0 : e.selected = !1
                }
                function s() {
                    e.form && e.form.$setSubmitted(!0)
                }
                function a() {
                    return e.form ? e.form.$valid: !0
                }
                function r() {
                    return c.prevTab ? c.prevTab.isComplete() : !0
                }
                function l(e) {
                    c.prevTab = e
                }
                e.selected = !0;
                var c = {
                    title: n.title,
                    select: o,
                    submit: s,
                    isComplete: a,
                    isAvailiable: r,
                    prevTab: void 0,
                    setPrev: l
                };
                i.addTab(c)
            }
        }
    }
    angular.module("KingAdmin.theme.components").directive("baWizardStep", e)
} (),
function() {
    "use strict";
    function e() {
        return {
            restrict: "E",
            templateUrl: "app/theme/components/backTop/backTop.html",
            controller: function() {
                $("#backTop").backTop({
                    position: 200,
                    speed: 100
                })
            }
        }
    }
    angular.module("KingAdmin.theme.components").directive("backTop", e)
} (),
function() {
    "use strict";
    function e(e, t) {
        return {
            restrict: "E",
            templateUrl: "app/theme/components/contentTop/contentTop.html",
            link: function(e) {
                e.$watch(function() {
                    e.activePageTitle = t.current.title
                })
            }
        }
    }
    e.$inject = ["$location", "$state"],
    angular.module("KingAdmin.theme.components").directive("contentTop", e)
} (),
function() {
    "use strict";
    function e(e, t, n) {
        e.todoList = [],
        e.calendarList = [],
        e.refeshTodo = function() {
            t.getList({},
            function(t) {
                e.todoList = t.result
            })
        },
        e.refeshCalendar = function() {
            n.getList({},
            function(t) {
                e.calendarList = t.result
            })
        },
        e.refeshTodo(),
        e.refeshCalendar()
    }
    e.$inject = ["$scope", "TodoService", "CalendarService"],
    angular.module("KingAdmin.theme.components").controller("MsgCenterCtrl", e)
} (),
function() {
    "use strict";
    function e() {
        return {
            restrict: "E",
            templateUrl: "app/theme/components/msgCenter/msgCenter.html",
            controller: "MsgCenterCtrl"
        }
    }
    angular.module("KingAdmin.theme.components").directive("msgCenter", e)
} (),
function() {
    "use strict";
    function e() {
        return {
            restrict: "E",
            templateUrl: "app/theme/components/pageTop/pageTop.html"
        }
    }
    angular.module("KingAdmin.theme.components").directive("pageTop", e)
} (),
function() {
    "use strict";
    function e() {
        return {
            restrict: "EA",
            scope: {
                ngModel: "="
            },
            templateUrl: "app/theme/components/widgets/widgets.html",
            replace: !0
        }
    }
    angular.module("KingAdmin.theme.components").directive("widgets", e)
} (),
function() {
    "use strict";
    function e(e) {
        return function(t) {
            return e.images.root + t
        }
    }
    e.$inject = ["layoutPaths"],
    angular.module("KingAdmin.theme").filter("appImage", e)
} (),
function() {
    "use strict";
    function e(e) {
        return function(t) {
            return e.images.root + "theme/icon/kameleon/" + t + ".svg"
        }
    }
    e.$inject = ["layoutPaths"],
    angular.module("KingAdmin.theme").filter("kameleonImg", e)
} (),
function() {
    "use strict";
    function e(e) {
        return function(t, n) {
            return n = n || "png",
            e.images.profile + t + "." + n
        }
    }
    e.$inject = ["layoutPaths"],
    angular.module("KingAdmin.theme").filter("profilePicture", e)
} (),
function() {
    "use strict";
    function e() {
        return function(e) {
            return e ? String(e).replace(/<[^>]+>/gm, "") : ""
        }
    }
    angular.module("KingAdmin.theme").filter("plainText", e)
} (),
!
function(e) {
    e.fn.backTop = function(t) {
        var n = this,
        i = e.extend({
            position: 400,
            speed: 500,
            color: "white"
        },
        t),
        o = i.position,
        s = i.speed,
        a = i.color;
        n.addClass("white" == a ? "white": "red" == a ? "red": "green" == a ? "green": "black"),
        n.css({
            right: 40,
            bottom: 40,
            position: "fixed"
        }),
        e(document).scroll(function() {
            var t = e(window).scrollTop();
            t >= o ? n.fadeIn(s) : n.fadeOut(s)
        }),
        n.click(function() {
            e("html, body").animate({
                scrollTop: 0
            },
            {
                duration: 1200
            })
        })
    }
} (jQuery),
angular.module("KingAdmin").run(["$templateCache",
function(e) {
    e.put("app/pages/common/pagination.html", '<div class="row"><div class="col-xs-1 col-md-1 col-sm-1"><select class="form-control selectpicker show-tick" ng-model="stItemsByPage" ng-options="i for i in [5,10,20,25,30]"></select></div><div class="col-xs-9 col-md-9 col-sm-9 col-xs-offset-2 col-md-offset-2 col-sm-offset-2"><div class="btn-toolbar-example"><div class="btn-toolbar" role="toolbar"><div class="btn-group" role="group"><button type="button" class="btn btn-primary" ng-click="selectPage(1)"><i class="ion-chevron-left"></i><i class="ion-chevron-left"></i></button></div><div class="btn-group" role="group"><button type="button" class="btn btn-primary" ng-click="selectPage(currentPage - 1)"><i class="ion-chevron-left"></i></button></div><div class="btn-group" role="group"><button type="button" class="btn btn-default">共: {{totalItemCount}} 条</button> <button type="button" class="btn btn-default btn-xs"><page-select></page-select></button> <button type="button" class="btn btn-default">共: {{numPages}}页</button></div><div class="btn-group" role="group"><button type="button" class="btn btn-primary" ng-click="selectPage(currentPage + 1)"><i class="ion-chevron-right"></i></button></div><div class="btn-group" role="group"><button type="button" class="btn btn-primary" ng-click="selectPage(numPages)"><i class="ion-chevron-right"></i><i class="ion-chevron-right"></i></button></div></div></div></div></div>'),
    e.put("app/pages/home/home.html", '<home-pie-chart></home-pie-chart><div class="row"><div class="col-lg-6 col-md-12 col-sm-12" ba-panel="" ba-panel-title="Acquisition Channels" ba-panel-class="medium-panel traffic-panel"><traffic-chart></traffic-chart></div><div class="col-lg-6 col-md-12 col-sm-12" ba-panel="" ba-panel-class="popular-app medium-panel"><popular-app></popular-app></div></div><div class="col-lg-6 col-md-6 col-xs-12" ba-panel="" ba-panel-title="代办" ba-panel-class="medium-panel feed-comply-panel with-scroll todo-panel"><home-todo></home-todo></div><div class="col-lg-6 col-md-6 col-xs-12" ba-panel="" ba-panel-title="日历" ba-panel-class="medium-panel feed-comply-panel with-scroll calendar-panel"><home-calendar></home-calendar></div>'),
    e.put("app/pages/common/modalTemplates/basicModal.html", '<div class="modal-content"><div class="modal-header"><button type="button" class="close" ng-click="$dismiss()" aria-label="Close"><em class="ion-ios-close-empty sn-link-close"></em></button><h4 class="modal-title" id="myModalLabel">Modal title</h4></div><div class="modal-body">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div><div class="modal-footer"><button type="button" class="btn btn-primary" ng-click="$dismiss()">Save changes</button></div></div>'),
    e.put("app/pages/common/modalTemplates/dangerModal.html", '<div class="modal-content"><div class="modal-header bg-danger"><i class="ion-flame modal-icon"></i><span>提示</span></div><div class="modal-body text-center"><h2>{{ items }}</h2></div><div class="modal-footer"><button type="button" class="btn btn-danger" ng-click="$close()">OK</button></div></div>'),
    e.put("app/pages/common/modalTemplates/infoModal.html", '<div class="modal-content"><div class="modal-header bg-info"><i class="ion-information-circled modal-icon"></i><span>提示</span></div><div class="modal-body text-center"><h2>{{ items }}</h2></div><div class="modal-footer"><button type="button" class="btn btn-info" ng-click="$close()">确定</button></div></div>'),
    e.put("app/pages/common/modalTemplates/largeModal.html", '<div class="modal-content"><div class="modal-header"><button type="button" class="close" ng-click="$dismiss()" aria-label="Close"><em class="ion-ios-close-empty sn-link-close"></em></button><h4 class="modal-title">Modal title</h4></div><div class="modal-body">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div><div class="modal-footer"><button type="button" class="btn btn-primary" ng-click="$dismiss()">Save changes</button></div></div>'),
    e.put("app/pages/common/modalTemplates/password.html", '<div class="kt-modal-content"><div class="modal-header"><button type="button" class="close" ng-click="$dismiss()" aria-label="Close"><em class="ion-ios-close-empty sn-link-close"></em></button><h4 class="modal-title">修改密码</h4></div><div class="modal-body"><div ba-panel="" ba-panel-class="with-scroll light-text"><form name="Form" ng-submit="save()"><div class="form-group"><label for="password">原密码</label> <input type="password" class="form-control" id="password" placeholder="密码" ng-model="user.password" required=""></div><div class="form-group"><label for="password1">新密码</label> <input type="password" class="form-control" id="password1" placeholder="确认密码" ng-model="user.newpassword" required=""></div><div class="form-group" ng-class="{\'has-error\': !arePasswordsEqual()}"><label for="password2">确认密码</label> <input type="password" class="form-control" id="password2" placeholder="确认密码" ng-model="newpassword" required=""></div><div class="form-group"><button type="submit" class="btn btn-danger btn-with-icon"><i class="ion-heart"></i>保存</button></div></form></div></div></div>'),
    e.put("app/pages/common/modalTemplates/smallModal.html", '<div class="modal-content"><div class="modal-header"><button type="button" class="close" ng-click="$dismiss()" aria-label="Close"><em class="ion-ios-close-empty sn-link-close"></em></button><h4 class="modal-title">Modal title</h4></div><div class="modal-body">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div><div class="modal-footer"><button type="button" class="btn btn-primary" ng-click="$dismiss()">Save changes</button></div></div>'),
    e.put("app/pages/common/modalTemplates/successModal.html", '<div class="modal-content"><div class="modal-header bg-success"><i class="ion-checkmark modal-icon"></i><span>提示</span></div><div class="modal-body text-center"><h2>{{ items }}</h2></div><div class="modal-footer"><button type="button" class="btn btn-success" ng-click="$close()">OK</button></div></div>'),
    e.put("app/pages/common/modalTemplates/warningModal.html", '<div class="modal-content"><div class="modal-header bg-warning"><i class="ion-android-warning modal-icon"></i><span>提示</span></div><div class="modal-body text-center"><h2>{{ items }}</h2></div><div class="modal-footer"><button type="button" class="btn btn-warning" ng-click="$close()">OK</button></div></div>'),
    e.put("app/pages/dict/dict/dictlist.html", '<div ba-panel="" ba-panel-title="字典列表" ba-panel-class="xmedium-panel with-scroll light-text"><div class="row add-row-editable-table"><div class="col-md-4"><button has-perms="dict.dict.add" class="btn btn-success btn-with-icon" ng-click="kt.addRow()"><i class="ion-plus-round"></i>新增</button></div><div class="col-md-2 col-md-offset-6"><div class="form-group"><input type="text" class="form-control form-control-rounded" ng-model="kt.tableState.search.text" input-keyup="kt.LoadPage" placeholder="名称"></div></div></div><table class="table table-bordered table-hover table-condensed" st-pipe="kt.LoadPage" st-table="dictlist"><thead><tr class="sortable"><th><label class="table-checkbox checkbox-inline custom-checkbox nowrap"><input type="checkbox" ng-model="kt.checkboxes.checked"> <span></span></label></th><th>序号</th><th st-sort="dictClassId">分类编号</th><th st-sort="code">编号</th><th st-sort="text">名称</th><th st-sort="remark">备注</th><th>操作</th></tr></thead><tbody><tr ng-repeat="dict in kt.dictlist" class="editable-row"><td class="check-td"><div class="mail-checkbox"><label class="checkbox-inline custom-checkbox nowrap"><input type="checkbox" ng-model="kt.checkboxes.items[dict.id]"> <span></span></label></div><div ng-show="false"><span e-name="id" e-form="rowform" editable-text="dict.id"></span></div></td><td>{{$index+1}}</td><td><span editable-select="dict.dictClassId" e-name="dictClassId" e-form="rowform" e-selectpicker="" e-ng-options="s.id as s.code for s in kt.dictClassList">{{ kt.showClassCode(dict.dictClassId) }}</span></td><td><span editable-text="dict.code" e-name="code" e-form="rowform" e-required="">{{dict.code}}</span></td><td><span editable-text="dict.text" e-name="text" e-form="rowform" e-required="">{{dict.text}}</span></td><td><span editable-text="dict.remark" e-name="remark" e-form="rowform">{{dict.remark}}</span></td><td><form editable-form="" name="rowform" ng-show="rowform.$visible" class="form-buttons form-inline" shown="kt.inserted == dict"><button type="submit" ng-disabled="rowform.$data.code==null||rowform.$data.code==\'\'" ng-click="kt.save(rowform.$data)" class="btn btn-info editable-table-button btn-xs">保存</button> <button type="button" ng-disabled="rowform.$waiting" ng-click="rowform.$cancel()" class="btn btn-default editable-table-button btn-xs">取消</button></form><div class="buttons" ng-show="!rowform.$visible"><button has-perms="dict.dict.edit" class="btn btn-warning editable-table-button btn-xs btn-with-icon" ng-click="rowform.$show()"><i class="ion-edit"></i>编辑</button> <button has-perms="dict.dict.delete" class="btn btn-danger editable-table-button btn-xs btn-with-icon" ng-click="kt.del(dict.id)"><i class="ion-trash-a"></i>删除</button></div></td></tr></tbody><tfoot><tr><td colspan="7" class="text-center"><div st-pagination="" st-items-by-page="5"></div></td></tr></tfoot></table></div>'),
    e.put("app/pages/dict/dictclass/dictclasslist.html", '<div ba-panel="" ba-panel-title="字典分类" ba-panel-class="xmedium-panel with-scroll light-text"><div class="row add-row-editable-table"><div class="col-md-4"><button has-perms="dict.dictclass.add" class="btn btn-success btn-with-icon" ng-click="kt.addRow()"><i class="ion-plus-round"></i>新增</button></div><div class="col-md-2 col-md-offset-6"><div class="form-group"><input type="text" class="form-control form-control-rounded" ng-model="kt.tableState.search.code" input-keyup="kt.LoadPage" placeholder="编号"></div></div></div><table class="table table-bordered table-hover table-condensed" st-pipe="kt.LoadPage" st-table="dictlist"><thead><tr class="sortable"><th><label class="table-checkbox checkbox-inline custom-checkbox nowrap"><input type="checkbox" ng-model="kt.checkboxes.checked"> <span></span></label></th><th>序号</th><th st-sort="code">编号</th><th st-sort="remark">备注</th><th>操作</th></tr></thead><tbody><tr ng-repeat="dict in kt.dictlist" class="editable-row"><td class="check-td"><div class="mail-checkbox"><label class="checkbox-inline custom-checkbox nowrap"><input type="checkbox" ng-model="kt.checkboxes.items[dict.id]"> <span></span></label></div><div ng-show="false"><span e-name="id" e-form="rowform" editable-text="dict.id"></span></div></td><td>{{$index+1}}</td><td><span editable-text="dict.code" e-name="code" e-form="rowform" e-required="">{{dict.code}}</span></td><td><span editable-text="dict.remark" e-name="remark" e-form="rowform">{{dict.remark}}</span></td><td><form editable-form="" name="rowform" ng-show="rowform.$visible" class="form-buttons form-inline" shown="kt.inserted == dict"><button type="submit" ng-disabled="rowform.$data.code==null||rowform.$data.code==\'\'" ng-click="kt.save(rowform.$data)" class="btn btn-info editable-table-button btn-xs">保存</button> <button type="button" ng-disabled="rowform.$waiting" ng-click="rowform.$cancel()" class="btn btn-default editable-table-button btn-xs">取消</button></form><div class="buttons" ng-show="!rowform.$visible"><button has-perms="dict.dictclass.edit" class="btn btn-warning editable-table-button btn-xs btn-with-icon" ng-click="rowform.$show()"><i class="ion-edit"></i>编辑</button> <button has-perms="dict.dictclass.delete" class="btn btn-danger editable-table-button btn-xs btn-with-icon" ng-click="kt.del(dict.id)"><i class="ion-trash-a"></i>删除</button></div></td></tr></tbody><tfoot><tr><td colspan="5" class="text-center"><div st-pagination="" st-items-by-page="5"></div></td></tr></tfoot></table></div>'),
    e.put("app/pages/home/calendar/calendar.html", '<div id="calendar" class="blurCalendar"></div>'),
    e.put("app/pages/home/pieChart/pieChart.html", '<div class="row pie-charts"><div class="pie-chart-item-container" ng-repeat="chart in charts"><div ba-panel=""><div class="pie-chart-item"><div class="chart" rel="{{ ::chart.color }}" data-percent="60"><span class="percent"></span></div><div class="description"><div>{{ ::chart.description }}</div><div class="description-stats">{{ ::chart.stats }}</div></div><i class="chart-icon i-{{ ::chart.icon }}"></i></div></div></div></div>'),
    e.put("app/pages/home/popularApp/popularApp.html", '<div class="popular-app-img-container"><div class="popular-app-img"><img ng-src="{{::( \'app/my-app-logo.png\' | appImage )}}"> <span class="logo-text">Super&nbspApp</span></div></div><div class="popular-app-cost row"><div class="col-xs-9">Most Popular App</div><div class="col-xs-3 text-right">175$</div></div><div class="popular-app-info row"><div class="col-xs-4 text-left"><div class="info-label">Total Visits</div><div>47,512</div></div><div class="col-xs-4 text-center"><div class="info-label">New Visits</div><div>9,217</div></div><div class="col-xs-4 text-right"><div class="info-label">Sales</div><div>2,928</div></div></div>'),
    e.put("app/pages/home/todo/todo.html", '<div class="task-todo-container" ng-class="{\'transparent\': transparent}"><input type="text" value="" class="form-control task-todo" placeholder="Task to do.." ng-keyup="addToDoItem($event)" ng-model="newTodoText"> <i ng-click="addToDoItem(\'\',true)" class="add-item-icon ion-plus-round"></i><div class="box-shadow-border"></div><ul class="todo-list" ui-sortable="" ng-model="todoList"><li ng-repeat="item in todoList" ng-if="!item.deleted" ng-init="activeItem=false" ng-class="{checked: isChecked, active: activeItem}" ng-mouseenter="activeItem=true" ng-mouseleave="activeItem=false"><div class="blur-container"><div class="blur-box"></div></div><i class="mark" style="background-color: {{::item.color}}"></i> <label class="todo-checkbox custom-checkbox custom-input-success"><input type="checkbox" ng-model="isChecked"> <span class="cut-with-dots">{{ item.text }}</span></label> <i class="remove-todo ion-ios-close-empty" ng-click="deleleTodo(item)"></i></li></ul></div>'),
    e.put("app/pages/home/trafficChart/trafficChart.html", '<div class="channels-block" ng-class="{\'transparent\': transparent}"><div class="chart-bg"></div><div class="traffic-chart" id="trafficChart"><div class="canvas-holder"><canvas id="chart-area" width="300" height="300"></canvas><div class="traffic-text">1,900,128 <span>Views Total</span></div></div><div class="traffic-legend"></div></div><div class="channels-info"><div><div class="channels-info-item" ng-repeat="item in doughnutData | orderBy:\'order\'"><div class="legend-color" style="background-color: {{::item.color}}"></div><p>{{::item.label}}<span class="channel-number">+{{item.percentage}}%</span></p><div class="progress progress-sm channel-progress"><div class="progress-bar" role="progressbar" aria-valuenow="{{item.percentage}}" aria-valuemin="0" aria-valuemax="100" style="width: {{item.percentage}}%"></div></div></div></div></div></div>'),
    e.put("app/pages/sys/menu/menu.html", '<div class="kt-modal-content"><div class="modal-header"><button type="button" class="close" ng-click="$dismiss()" aria-label="Close"><em class="ion-ios-close-empty sn-link-close"></em></button><h4 class="modal-title">编辑菜单</h4></div><div class="modal-body"><div ba-panel="" ba-panel-class="with-scroll light-text"><form name="Form" ng-submit="kt.save()"><div class="form-group col-md-6 col-sm-6 col-xs-6"><label for="name">名称</label> <input ng-disabled="kt.isView" type="text" class="form-control" id="name" placeholder="名称" ng-model="kt.menu.name" required=""></div><div class="form-group col-md-6 col-sm-6 col-xs-6"><label for="icon">图标</label> <input ng-disabled="kt.isView" type="text" class="form-control" id="icon" placeholder="图标" ng-model="kt.menu.icon"></div><div class="form-group col-md-6 col-sm-6 col-xs-6"><label for="title">标题</label> <input ng-disabled="kt.isView" type="text" class="form-control" id="title" placeholder="标题" ng-model="kt.menu.title"></div><div class="form-group col-md-6 col-sm-6 col-xs-6"><label for="level">目录层级</label> <input ng-disabled="kt.isView" type="number" class="form-control" id="level" placeholder="目录层级" ng-model="kt.menu.level"></div><div class="form-group col-md-6 col-sm-6 col-xs-6"><label for="order">排序号</label> <input ng-disabled="kt.isView" type="number" class="form-control" id="order" placeholder="排序号" ng-model="kt.menu.order"></div><div class="form-group col-md-6 col-sm-6 col-xs-6" ng-if="kt.isShowType"><label for="type">类型</label><select ng-disabled="kt.isView" class="form-control" ng-model="kt.menu.type" id="type" title="类型" data-container="body" selectpicker="" required="" ng-options="item.code as item.text for item in kt.types"></select></div><div class="form-group col-md-6 col-sm-6 col-xs-6"><button type="submit" class="btn btn-danger btn-with-icon" ng-if="!kt.isView"><i class="ion-heart"></i>保存</button></div></form></div></div></div>'),
    e.put("app/pages/sys/menu/menulist.html", '<div class="row" ng-show="kt.isShowBtn"><div class="col-md-12"><div ba-panel="" ba-panel-class="with-scroll light-text"><button has-perms="sys.menu.add" ng-show="!kt.isShowAddBtn" class="btn btn-success btn-with-icon" ui-sref="sys.menu.add({id:kt.menu.id,isAdd:true})"><i class="ion-plus-round"></i>新增</button> <button has-perms="sys.menu.edit" class="btn btn-warning btn-with-icon" ui-sref="sys.menu.edit({id:kt.menu.id})"><i class="ion-edit"></i>编辑</button> <button has-perms="sys.menu.delete" ng-show="!kt.isShowDelBtn" class="btn btn-danger btn-with-icon" ng-click="kt.del(kt.menu.id)"><i class="ion-trash-a"></i>删除</button></div></div></div><div class="row"><div class="col-md-4"><div ba-panel="" ba-panel-class="xmedium-panel with-scroll tree-panel light-text" ba-panel-title="菜单树" ng-if="kt.treeshow"><div js-tree="kt.basicConfig" ng-model="kt.treeData" tree="kt.basicTree"></div></div></div><div class="col-md-8"><div ba-panel="" ba-panel-class="xmedium-panel with-scroll light-text" ba-panel-title="菜单明细"><form name="Form" class="form-horizontal"><div class="form-group"><label for="name" class="col-md-3 control-label">名称</label><div class="col-md-7"><input ng-disabled="true" type="text" class="form-control" id="name" placeholder="名称" ng-model="kt.menu.name"></div></div><div class="form-group"><label for="icon" class="col-md-3 control-label">图标</label><div class="col-md-7"><input ng-disabled="true" type="text" class="form-control" id="icon" placeholder="图标" ng-model="kt.menu.icon"></div></div><div class="form-group"><label for="title" class="col-md-3 control-label">标题</label><div class="col-md-7"><input ng-disabled="true" type="text" class="form-control" id="title" placeholder="标题" ng-model="kt.menu.title"></div></div><div class="form-group"><label for="level" class="col-md-3 control-label">目录层级</label><div class="col-md-7"><input ng-disabled="true" type="text" class="form-control" id="level" placeholder="目录层级" ng-model="kt.menu.level"></div></div><div class="form-group"><label for="order" class="col-md-3 control-label">排序号</label><div class="col-md-7"><input ng-disabled="true" type="text" class="form-control" id="order" placeholder="排序号" ng-model="kt.menu.order"></div></div><div class="form-group" ng-if="kt.isShowType"><label for="type" class="col-md-3 control-label">类型</label><div class="col-md-7"><select ng-disabled="true" class="form-control" ng-model="kt.menu.type" id="type" title="类型" data-container="body" selectpicker="" ng-options="item.code as item.text for item in kt.types"></select></div></div></form></div></div></div>'),
    e.put("app/pages/sys/role/role.html", '<div class="row"><div class="col-md-6"><div ba-panel="" ba-panel-class="with-scroll light-text" ba-panel-title="角色信息"><form name="Form" ng-submit="kt.save()"><div class="form-group"><button ui-sref="sys.role" type="button" class="btn btn-default btn-with-icon"><i class="ion-reply"></i>返回</button> <button type="submit" class="btn btn-danger btn-with-icon" ng-if="!kt.isView"><i class="ion-heart"></i>保存</button></div><div class="form-group"><label for="roleName">名称</label> <input ng-disabled="kt.isView" type="text" class="form-control" id="roleName" placeholder="名称" ng-model="kt.role.roleName" required=""></div><div class="form-group"><label for="remark">备注</label> <input ng-disabled="kt.isView" type="text" class="form-control" id="remark" placeholder="备注" ng-model="kt.role.remark"></div></form></div></div><div class="col-md-6"><div ba-panel="" ba-panel-class="with-scroll light-text" ba-panel-title="授权" ng-if="kt.treeshow"><div js-tree="kt.basicConfig" ng-model="kt.treeData" tree="kt.basicTree"></div></div></div></div>'),
    e.put("app/pages/sys/role/rolelist.html", '<div ba-panel="" ba-panel-title="角色列表" ba-panel-class="xmedium-panel with-scroll light-text"><div class="row add-row-editable-table"><div class="col-md-4"><button has-perms="sys.role.add" class="btn btn-success btn-with-icon" ui-sref="sys.role.add"><i class="ion-plus-round"></i>新增</button></div><div class="col-md-2 col-md-offset-6"><div class="form-group"><input type="text" class="form-control form-control-rounded" ng-model="kt.tableState.search.roleName" input-keyup="kt.LoadPage" placeholder="名称"></div></div></div><table class="table table-bordered table-hover table-condensed" st-pipe="kt.LoadPage" st-table="kt.rolelist"><thead><tr class="sortable"><th><label class="table-checkbox checkbox-inline custom-checkbox nowrap"><input type="checkbox" ng-model="kt.checkboxes.checked"> <span></span></label></th><th>序号</th><th st-sort="roleName">名称</th><th st-sort="remark">备注</th><th>操作</th></tr></thead><tbody><tr ng-repeat="role in kt.rolelist"><td class="check-td"><div class="mail-checkbox"><label class="checkbox-inline custom-checkbox nowrap"><input type="checkbox" ng-model="kt.checkboxes.items[role.id]"> <span></span></label></div></td><td>{{$index+1}}</td><td>{{role.roleName}}</td><td>{{role.remark}}</td><td><div class="buttons"><button has-perms="sys.role.view" class="btn btn-info editable-table-button btn-xs btn-with-icon" ui-sref="sys.role.view({id:role.id,isView:true})"><i class="ion-search"></i>查看</button> <button has-perms="sys.role.edit" class="btn btn-warning editable-table-button btn-xs btn-with-icon" ui-sref="sys.role.edit({id:role.id})"><i class="ion-edit"></i>编辑</button> <button has-perms="sys.role.delete" class="btn btn-danger editable-table-button btn-xs btn-with-icon" ng-click="kt.del(role.id)"><i class="ion-trash-a"></i>删除</button></div></td></tr></tbody><tfoot><tr><td colspan="5" class="text-center"><div st-pagination="" st-items-by-page="5" st-template="app/pages/common/pagination.html"></div></td></tr></tfoot></table></div>'),
    e.put("app/pages/sys/user/user.html", '<div class="row"><div class="col-md-6"><div ba-panel="" ba-panel-class="xmedium-panel with-scroll light-text" ba-panel-title="用户信息"><form name="Form" ng-submit="kt.save()"><div class="form-group"><button ui-sref="sys.user" type="button" class="btn btn-default btn-with-icon"><i class="ion-reply"></i>返回</button> <button type="submit" class="btn btn-danger btn-with-icon" ng-if="!kt.isView"><i class="ion-heart"></i>保存</button></div><div class="form-group"><label for="username">名称</label> <input ng-disabled="kt.isView" type="text" class="form-control" id="username" placeholder="名称" ng-model="kt.user.username" required=""></div><div class="form-group" ng-if="kt.isAdd"><label for="password">密码</label> <input type="password" class="form-control" id="password" placeholder="密码" ng-model="kt.user.password" required=""></div><div class="form-group" ng-if="kt.isAdd" ng-class="{\'has-error\': ! kt.arePasswordsEqual()}"><label for="password1">确认密码</label> <input type="password" class="form-control" id="password1" placeholder="确认密码" ng-model="kt.password" required=""></div><div class="form-group"><label for="email">邮箱</label> <input ng-disabled="kt.isView" type="email" class="form-control" id="email" placeholder="邮箱" ng-model="kt.user.email"></div><div class="form-group"><label for="mobile">电话</label> <input ng-disabled="kt.isView" type="text" class="form-control" id="mobile" placeholder="电话" ng-model="kt.user.mobile"></div><div class="form-group" ng-if="kt.isShowStatus"><label for="status">状态</label><select ng-disabled="kt.isView" class="form-control" ng-model="kt.user.status" id="status" data-style="btn-primary" title="状态" data-container="body" selectpicker="" required="" ng-options="item.code as item.text for item in kt.statuses"></select></div></form></div></div><div class="col-md-6"><div ba-panel="" ba-panel-class="xmedium-panel with-scroll light-text" ba-panel-title="角色列表"><div class="form-group"><div class="input-demo checkbox-demo row"><div class="col-md-2" ng-repeat="role in kt.user.rolelist"><label class="checkbox-inline custom-checkbox nowrap"><input type="checkbox" id="role.id" ng-model="role.checked" ng-disabled="kt.isView"> <span>{{role.roleName}}</span></label></div></div></div></div></div></div>'),
    e.put("app/pages/sys/user/userlist.html", '<div ba-panel="" ba-panel-title="用户列表" ba-panel-class="xmedium-panel with-scroll light-text"><div class="row add-row-editable-table"><div has-perms="sys.user.add" class="col-md-4"><button class="btn btn-success btn-with-icon" ui-sref="sys.user.add"><i class="ion-plus-round"></i>新增</button></div><div class="col-md-offset-8"><div class="form-group col-md-6"><input type="text" class="form-control form-control-rounded" ng-model="kt.tableState.search.username" input-keyup="kt.LoadPage" placeholder="用户名"></div><div class="form-group col-md-6"><input type="text" class="form-control form-control-rounded" ng-model="kt.tableState.search.email" input-keyup="kt.LoadPage" placeholder="邮箱"></div></div></div><table class="table table-bordered table-hover table-condensed" st-pipe="kt.LoadPage" st-table="kt.userlist"><thead><tr class="sortable"><th><label class="table-checkbox checkbox-inline custom-checkbox nowrap"><input type="checkbox" ng-model="kt.checkboxes.checked"> <span></span></label></th><th>序号</th><th st-sort="username">用户名</th><th st-sort="email">邮箱</th><th st-sort="mobile">手机</th><th st-sort="status">状态</th><th>操作</th></tr></thead><tbody><tr ng-repeat="user in kt.userlist"><td class="check-td"><div class="mail-checkbox"><label class="checkbox-inline custom-checkbox nowrap"><input type="checkbox" ng-model="kt.checkboxes.items[user.id]"> <span></span></label></div></td><td>{{$index+1}}</td><td>{{user.username}}</td><td>{{user.email}}</td><td>{{user.mobile}}</td><td>{{kt.showStatus(user)}}</td><td><div class="buttons"><button has-perms="sys.user.view" class="btn btn-info editable-table-button btn-xs btn-with-icon" ui-sref="sys.user.view({id:user.id,isView:true})"><i class="ion-search"></i>查看</button> <button has-perms="sys.user.edit" class="btn btn-warning editable-table-button btn-xs btn-with-icon" ui-sref="sys.user.view({id:user.id})"><i class="ion-edit"></i>编辑</button> <button has-perms="sys.user.delete" class="btn btn-danger editable-table-button btn-xs btn-with-icon" ng-click="kt.del(user.id)"><i class="ion-trash-a"></i>删除</button></div></td></tr></tbody><tfoot><tr><td colspan="7" class="text-center"><div st-pagination="" st-items-by-page="5" st-template="app/pages/common/pagination.html"></div></td></tr></tfoot></table></div>'),
    e.put("app/theme/components/baSidebar/ba-sidebar.html", '<aside class="al-sidebar" ng-swipe-right="$baSidebarService.setMenuCollapsed(false)" ng-swipe-left="$baSidebarService.setMenuCollapsed(true)" ng-mouseleave="hoverElemTop=selectElemTop"><ul class="al-sidebar-list" slimscroll="{height: \'{{menuHeight}}px\'}" slimscroll-watch="menuHeight"><li ng-repeat="item in ::menuItems" class="al-sidebar-list-item" ng-class="::{\'with-sub-menu\': item.subMenu}" ui-sref-active="selected" ba-sidebar-toggling-item="item"><a ng-mouseenter="hoverItem($event, item)" ui-state="item.stateRef || \'\'" ng-href="{{::(item.fixedHref ? item.fixedHref: \'\')}}" ng-if="::!item.subMenu" class="al-sidebar-list-link"><i class="{{ ::item.icon }}"></i><span>{{ ::item.title }}</span></a> <a ng-mouseenter="hoverItem($event, item)" ng-if="::item.subMenu" class="al-sidebar-list-link" ba-ui-sref-toggler=""><i class="{{ ::item.icon }}"></i><span>{{ ::item.title }}</span> <b class="fa fa-angle-down" ui-sref-active="fa-angle-up" ng-if="::item.subMenu"></b></a><ul ng-if="::item.subMenu" class="al-sidebar-sublist" ng-class="{\'slide-right\': item.slideRight}" ba-ui-sref-toggling-submenu=""><li ng-repeat="subitem in ::item.subMenu" ng-class="::{\'with-sub-menu\': subitem.subMenu}" ui-sref-active="selected" ba-sidebar-toggling-item="subitem" class="ba-sidebar-sublist-item"><a ng-mouseenter="hoverItem($event, item)" ng-if="::subitem.subMenu" ba-ui-sref-toggler="" class="al-sidebar-list-link subitem-submenu-link"><span>{{ ::subitem.title }}</span> <b class="fa" ng-class="{\'fa-angle-up\': subitem.expanded, \'fa-angle-down\': !subitem.expanded}" ng-if="::subitem.subMenu"></b></a><ul ng-if="::subitem.subMenu" class="al-sidebar-sublist subitem-submenu-list" ng-class="{expanded: subitem.expanded, \'slide-right\': subitem.slideRight}" ba-ui-sref-toggling-submenu=""><li ng-mouseenter="hoverItem($event, item)" ng-repeat="subSubitem in ::subitem.subMenu" ui-sref-active="selected"><a ng-mouseenter="hoverItem($event, item)" href="" ng-if="::subSubitem.disabled" class="al-sidebar-list-link">{{ ::subSubitem.title }}</a> <a ng-mouseenter="hoverItem($event, item)" ui-state="subSubitem.stateRef || \'\'" ng-if="::!subSubitem.disabled" ng-href="{{::(subSubitem.fixedHref ? subSubitem.fixedHref: \'\')}}">{{::subSubitem.title }}</a></li></ul><a ng-mouseenter="hoverItem($event, item)" href="" ng-if="::(!subitem.subMenu && subitem.disabled)" class="al-sidebar-list-link">{{ ::subitem.title }}</a> <a ng-mouseenter="hoverItem($event, item)" target="{{::(subitem.blank ? \'_blank\' : \'_self\')}}" ng-if="::(!subitem.subMenu && !subitem.disabled)" ui-state="subitem.stateRef || \'\'" ng-href="{{::(subitem.fixedHref ? subitem.fixedHref: \'\')}}">{{ ::subitem.title}}</a></li></ul></li></ul><div class="sidebar-hover-elem" ng-style="{top: hoverElemTop + \'px\', height: hoverElemHeight + \'px\'}" ng-class="{\'show-hover-elem\': showHoverElem }"></div></aside>'),
    e.put("app/theme/components/baWizard/baWizard.html", '<div class="ba-wizard"><div class="ba-wizard-navigation-container"><div ng-repeat="t in $baWizardController.tabs" class="ba-wizard-navigation {{$baWizardController.tabNum == $index ? \'active\' : \'\'}}" ng-click="$baWizardController.selectTab($index)">{{t.title}}</div></div><div class="progress ba-wizard-progress"><div class="progress-bar progress-bar-danger active" role="progressbar" aria-valuemin="0" aria-valuemax="100" ng-style="{width: $baWizardController.progress + \'%\'}"></div></div><div class="steps" ng-transclude=""></div><nav><ul class="pager ba-wizard-pager"><li class="previous"><button ng-disabled="$baWizardController.isFirstTab()" ng-click="$baWizardController.previousTab()" type="button" class="btn btn-primary"><span aria-hidden="true">&larr;</span> previous</button></li><li class="next"><button ng-disabled="$baWizardController.isLastTab()" ng-click="$baWizardController.nextTab()" type="button" class="btn btn-primary">next <span aria-hidden="true">&rarr;</span></button></li></ul></nav></div>'),
    e.put("app/theme/components/baWizard/baWizardStep.html", '<section ng-show="selected" class="step" ng-transclude=""></section>'),
    e.put("app/theme/components/backTop/backTop.html", '<i class="fa fa-angle-up back-top" id="backTop" title="Back to Top"></i>'),
    e.put("app/theme/components/contentTop/contentTop.html", '<div class="content-top clearfix"><ul class="breadcrumb al-breadcrumb"><li><a href="https://git.oschina.net/kingtim/king-admin" target="_blank">oschina</a></li><li><a href="https://github.com/oukingtim/king-admin" target="_blank">github</a></li></ul></div>'),
    e.put("app/theme/components/msgCenter/msgCenter.html", '<ul class="al-msg-center clearfix"><li uib-dropdown=""><a href="" uib-dropdown-toggle=""><i class="fa fa-bell-o"></i><span>{{todoList.length}}</span><div class="notification-ring"></div></a><div uib-dropdown-menu="" class="top-dropdown-menu"><i class="dropdown-arr"></i><div class="header clearfix"><strong>代办</strong> <a ng-click="refeshTodo()">刷新</a></div><div class="msg-list"><a href="" class="clearfix" ng-repeat="msg in todoList"><div class="msg-area"><div ng-bind-html="msg.text"></div><span>{{ msg.createTime }}</span></div></a></div></div></li><li uib-dropdown=""><a href="" class="msg" uib-dropdown-toggle=""><i class="fa fa-envelope-o"></i><span>{{calendarList.length}}</span><div class="notification-ring"></div></a><div uib-dropdown-menu="" class="top-dropdown-menu"><i class="dropdown-arr"></i><div class="header clearfix"><strong>日历</strong> <a ng-click="refeshCalendar()">刷新</a></div><div class="msg-list"><a href="" class="clearfix" ng-repeat="msg in calendarList"><div class="msg-area"><div>{{ msg.title }}</div><span>{{ msg.start | date:\'yyyy-MM-dd\'}} 至 {{ msg.end | date:\'yyyy-MM-dd\'}}</span></div></a></div></div></li></ul>'),
    e.put("app/theme/components/pageTop/pageTop.html", '<div class="page-top clearfix" scroll-position="scrolled" max-height="50" ng-class="{\'scrolled\': scrolled}"><a href="#/home" class="al-logo clearfix"><span>King</span>Admin</a> <a href="" class="collapse-menu-link ion-navicon" ba-sidebar-toggle-menu=""></a><div class="search"><content-top></content-top></div><div class="user-profile clearfix"><div class="al-user-profile" uib-dropdown=""><a uib-dropdown-toggle="" class="profile-toggle-link"><img ng-src="{{::( \'yuo\' | profilePicture )}}"></a><ul class="top-dropdown-menu profile-dropdown" uib-dropdown-menu=""><li><i class="dropdown-arr"></i></li><li><a ui-sref="sys.user.view({id:account.id,isView:true})"><i class="fa fa-user"></i>用户信息</a></li><li><a ng-click="password()"><i class="fa fa-cog"></i>修改密码</a></li><li><a href="" class="signout" ng-click="signout()"><i class="fa fa-power-off"></i>退出</a></li></ul></div><msg-center></msg-center></div></div>'),
    e.put("app/theme/components/widgets/widgets.html", '<div class="widgets"><div ng-repeat="widgetBlock in ngModel" ng-class="{\'row\': widgetBlock.widgets.length > 1}"><div ng-repeat="widgetCol in widgetBlock.widgets" ng-class="{\'col-md-6\': widgetBlock.widgets.length === 2}" ng-model="widgetCol" class="widgets-block"><div ba-panel="" ba-panel-title="{{::widget.title}}" ng-repeat="widget in widgetCol" ba-panel-class="with-scroll {{widget.panelClass}}"><div ng-include="widget.url"></div></div></div></div></div>')
}]);
