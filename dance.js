Move.require.define("dance","dance.mv",function(require,module,exports){
  var M, _MoveKWArgsT, Text, extend, create, print, dprint, repeat, after, JSON, __class, EventEmitter, EHTML, version, _ap, _op, _np, nativeMap, nativeFoldl, nativeFoldr, nativeFilter, nativeAll, nativeAny, nativeSort;
  M = Move.runtime, _MoveKWArgsT = M._MoveKWArgsT, Text = M.Text, extend = M.extend, create = M.create, print = M.print, dprint = M.dprinter(module), repeat = M.repeat, after = M.after, JSON = M.JSON, __class = M.__class, EventEmitter = M.EventEmitter;
  EHTML = Move.EHTML;
  exports.version = version = "0.1.0";
  _ap = Array.prototype;
  _op = Object.prototype;
  _np = Number.prototype;
  nativeMap = _ap.map, nativeFoldl = _ap.reduce, nativeFoldr = _ap.reduceRight, nativeFilter = _ap.filter, nativeAll = _ap.every, nativeAny = _ap.some, nativeSort = _ap.sort;
  _ap.__defineGetter__("clone", function () {
    var clone;
    clone = this.slice(0, this.length);
    return clone;
  });
  _ap.__defineGetter__("tail", function () {
    if (this.length <= 1) return [];
    return this.slice(1, this.length);
  });
  _ap.__defineGetter__("head", function () {
    return this[0];
  });
  _ap.__defineGetter__("last", function () {
    return this[this.length - 1];
  });
  _ap.__defineGetter__("init", function () {
    return this.slice(0, this.length - 1);
  });
  _ap.__defineGetter__("empty", function () {
    return this.length === 0;
  });
  _ap.__defineGetter__("_reverse", function () {
    if (this.length === 0) return [];
    return this.clone.reverse();
  });
  _ap.__defineGetter__("rev", function () {
    return this._reverse;
  });
  _ap.add = _ap.append = function append(a) {
    a !== null && typeof a === "object" && a.__kw === _MoveKWArgsT && (arguments.keywords = a, a = a.a);
    return this.concat(a);
  };
  _ap.fadd = function fadd(a) {
    a !== null && typeof a === "object" && a.__kw === _MoveKWArgsT && (arguments.keywords = a, a = a.a);
    return this.slice(0, 1).add(a);
  };
  _ap.map = nativeMap || function (f) {
    f !== null && typeof f === "object" && f.__kw === _MoveKWArgsT && (arguments.keywords = f, f = f.f);
    if (this.empty) return [];
    return [ f(this.head) ].add(this.tail.map(f));
  };
  _ap.foldl = nativeFoldl || function (f, z) {
    f !== null && typeof f === "object" && f.__kw === _MoveKWArgsT && (arguments.keywords = f, z = f.z, f = f.f);
    if (!z && z !== 0) throw "Foldl: no initial value specified";
    if (this.empty) return z;
    return f(this.head, this.tail.foldl(f, z));
  };
  _ap.foldr = nativeFoldr || function (f, z) {
    f !== null && typeof f === "object" && f.__kw === _MoveKWArgsT && (arguments.keywords = f, z = f.z, f = f.f);
    if (!z && z !== 0) throw "Foldr: no initial value specified";
    return this._reverse.foldl(f, z);
  };
  _ap.__defineGetter__("and", function () {
    return this.foldr(function (a, b) {
      a !== null && typeof a === "object" && a.__kw === _MoveKWArgsT && (arguments.keywords = a, b = a.b, a = a.a);
      return a && b;
    }, true);
  });
  _ap.__defineGetter__("or", function () {
    return this.foldr(function (a, b) {
      a !== null && typeof a === "object" && a.__kw === _MoveKWArgsT && (arguments.keywords = a, b = a.b, a = a.a);
      return a || b;
    }, false);
  });
  _ap.__defineGetter__("sum", function () {
    var sum;
    sum = this.foldl(function (a, b) {
      a !== null && typeof a === "object" && a.__kw === _MoveKWArgsT && (arguments.keywords = a, b = a.b, a = a.a);
      return a + b;
    }, 0);
    if (sum === undefined) return 0;
    return sum;
  });
  _ap.__defineGetter__("product", function () {
    var product;
    product = this.foldl(function (a, b) {
      a !== null && typeof a === "object" && a.__kw === _MoveKWArgsT && (arguments.keywords = a, b = a.b, a = a.a);
      return a * b;
    }, 1);
    if (product === undefined) return 0;
    return product;
  });
  _ap.__defineGetter__("_concat", function () {
    return this.foldl(function (a, b) {
      a !== null && typeof a === "object" && a.__kw === _MoveKWArgsT && (arguments.keywords = a, b = a.b, a = a.a);
      return a.add(b);
    }, []);
  });
  _ap.__defineGetter__("conc", function () {
    return this._concat;
  });
  _ap.any = nativeAny || function (f) {
    f !== null && typeof f === "object" && f.__kw === _MoveKWArgsT && (arguments.keywords = f, f = f.f);
    return this.map(f).or;
  };
  _ap.all = nativeAll || function (f) {
    f !== null && typeof f === "object" && f.__kw === _MoveKWArgsT && (arguments.keywords = f, f = f.f);
    return this.map(f).and;
  };
  _ap.concatMap = function concatMap(f) {
    f !== null && typeof f === "object" && f.__kw === _MoveKWArgsT && (arguments.keywords = f, f = f.f);
    return this._concat.map(f);
  };
  _ap.__defineGetter__("maximum", function () {
    return this.maximumBy(function (a, b) {
      a !== null && typeof a === "object" && a.__kw === _MoveKWArgsT && (arguments.keywords = a, b = a.b, a = a.a);
      return a >= b;
    });
  });
  _ap.__defineGetter__("minimum", function () {
    return this.minimumBy(function (a, b) {
      a !== null && typeof a === "object" && a.__kw === _MoveKWArgsT && (arguments.keywords = a, b = a.b, a = a.a);
      return a <= b;
    });
  });
  _ap.insert = function insert(e) {
    e !== null && typeof e === "object" && e.__kw === _MoveKWArgsT && (arguments.keywords = e, e = e.e);
    return this.insertBy(e, function (a, b) {
      a !== null && typeof a === "object" && a.__kw === _MoveKWArgsT && (arguments.keywords = a, b = a.b, a = a.a);
      return e <= b;
    });
  };
  _ap._delete = _ap.del = function del(e) {
    e !== null && typeof e === "object" && e.__kw === _MoveKWArgsT && (arguments.keywords = e, e = e.e);
    return this.deleteBy(e, function (a, b) {
      a !== null && typeof a === "object" && a.__kw === _MoveKWArgsT && (arguments.keywords = a, b = a.b, a = a.a);
      return e === b;
    });
  };
  _op.replicate = function replicate(n) {
    n !== null && typeof n === "object" && n.__kw === _MoveKWArgsT && (arguments.keywords = n, n = n.n);
    if (n <= 0) return [];
    return [ this ].add(this.replicate(n - 1));
  };
  _ap.take = function take(n) {
    n !== null && typeof n === "object" && n.__kw === _MoveKWArgsT && (arguments.keywords = n, n = n.n);
    if (n === 0 || this.empty) return [];
    return this.fadd(this.tail.take(n - 1));
  };
  _ap.drop = function drop(n) {
    n !== null && typeof n === "object" && n.__kw === _MoveKWArgsT && (arguments.keywords = n, n = n.n);
    if (n === 0 || this.empty) return this;
    return this.tail.drop(n - 1);
  };
  _ap.takeWhile = function takeWhile(f) {
    f !== null && typeof f === "object" && f.__kw === _MoveKWArgsT && (arguments.keywords = f, f = f.f);
    if (this.empty) return [];
    if (f(this.head)) return this.fadd(this.tail.takeWhile(f));
    return [];
  };
  _ap.dropWhile = function dropWhile(f) {
    f !== null && typeof f === "object" && f.__kw === _MoveKWArgsT && (arguments.keywords = f, f = f.f);
    if (this.empty) return [];
    if (f(this.head)) return this.tail.dropWhile(f);
    return this;
  };
  _ap.__defineGetter__("group", function () {
    return this.groupBy(function (a, b) {
      a !== null && typeof a === "object" && a.__kw === _MoveKWArgsT && (arguments.keywords = a, b = a.b, a = a.a);
      return a === b;
    });
  });
  _ap.elem = function elem(e) {
    e !== null && typeof e === "object" && e.__kw === _MoveKWArgsT && (arguments.keywords = e, e = e.e);
    return !(this.indexOf(e) === -1);
  };
  _ap.notElem = function notElem(e) {
    e !== null && typeof e === "object" && e.__kw === _MoveKWArgsT && (arguments.keywords = e, e = e.e);
    return !this.elem(e);
  };
  _ap.find = function find(f) {
    f !== null && typeof f === "object" && f.__kw === _MoveKWArgsT && (arguments.keywords = f, f = f.f);
    if (this.empty) return null;
    if (f(this.head)) return this.head;
    return this.tail.find(f);
  };
  _ap.filter = nativeFilter || function (f) {
    f !== null && typeof f === "object" && f.__kw === _MoveKWArgsT && (arguments.keywords = f, f = f.f);
    if (this.empty) return [];
    if (f(this.head)) return this.fadd(this.tail.filter(f));
    return this.tail.filter(f);
  };
  _ap.zip = function zip(ar) {
    ar !== null && typeof ar === "object" && ar.__kw === _MoveKWArgsT && (arguments.keywords = ar, ar = ar.ar);
    if (this.empty || ar.empty) return [];
    return [ [ this.head, ar.head ] ].add(this.tail.zip(ar.tail));
  };
  _np.__defineGetter__("even", function () {
    return this % 2 === 0;
  });
  _np.__defineGetter__("odd", function () {
    return !this.even;
  });
  _ap.maximumBy = _ap.minimumBy = function minimumBy(f) {
    f !== null && typeof f === "object" && f.__kw === _MoveKWArgsT && (arguments.keywords = f, f = f.f);
    if (this.empty) return undefined;
    if (this.length === 1) return this.head;
    if (f(this.head, this.tail.maximumBy(f))) return this.head;
    return this.tail.maximumBy(f);
  };
  _ap.insertBy = function insertBy(e, f) {
    e !== null && typeof e === "object" && e.__kw === _MoveKWArgsT && (arguments.keywords = e, f = e.f, e = e.e);
    if (this.empty) return [ e ];
    if (f(e, this.head)) return [ e ].add(this);
    return this.fadd(this.tail.insertBy(e, f));
  };
  _ap.deleteBy = function deleteBy(e, f) {
    e !== null && typeof e === "object" && e.__kw === _MoveKWArgsT && (arguments.keywords = e, f = e.f, e = e.e);
    if (this.empty) return undefined;
    if (f(e, this.head)) return this.tail;
    return this.fadd(this.tail.deleteBy(e, f));
  };
  _ap.sortBy = function sortBy(f) {
    f !== null && typeof f === "object" && f.__kw === _MoveKWArgsT && (arguments.keywords = f, f = f.f);
    if (!nativeSort) throw "sortBy: you're missing sort(), uppgrade!";
    return this.clone.sort(f);
  };
  _ap.groupBy = function groupBy(f) {
    f !== null && typeof f === "object" && f.__kw === _MoveKWArgsT && (arguments.keywords = f, f = f.f);
    var e, n, o;
    if (this.empty) return [];
    if (this.length === 1) return [ [ this.head ] ];
    e = this.head;
    n = this.tail.takeWhile(function (a) {
      a !== null && typeof a === "object" && a.__kw === _MoveKWArgsT && (arguments.keywords = a, a = a.a);
      return f(e, a);
    });
    n = [ e ].add(n);
    o = this.drop(n.length);
    return [ n ].add(o.groupBy(f));
  };
  return null;
});