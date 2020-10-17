function Caray() {
    if (arguments.length === 0) {
        this.length = 0;
    }
    if (arguments.length === 1) {
        var argument = arguments[0];

        if (typeof argument === 'number') {
            if (Number.isInteger(argument)) this.length = argument;
            else throw new RangeError('Invalid array length');
        } else {
            this[0] = argument;
            this.length = 1;
        }
    }
    if (arguments.length > 1) {
        for (var i = 0; i < arguments.length; i++) {
            this[i] = arguments[i];
        }
        this.length = arguments.length;
    }

}

Caray.prototype.push = function() {
    for (var i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i];
        this.length++;
    }
}

Caray.prototype.forEach = function(callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

    for (var index = 0; index < this.length; index++) {
        var element = this[index];
        callback(element, index, this);
    }
}

Caray.prototype.every = function(callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

    for (var i = 0; i < this.length; i++)
        if (!callback(this[i])) return false;

    return true;
}

Caray.prototype.map = function(callback) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

    var result = new Caray;

    for (var index = 0; index < this.length; index++) {
        result[index] = callback(this[index], index, this);
        result.length++;
    }

    return result;
}

Caray.prototype.some = function(callback, thisArg) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');
    for (var i = 0; i < this.length; i++) {
        if (callback.call(thisArg, this[i], i, this)) return true;
    }
    return false;
}

Caray.prototype.forEach = function(callback, thisArg) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');
    for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
    }
}

Caray.prototype.filter = function(callback, thisArg) {
    var newArr = new Caray;
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');
    for (var i = 0; i < this.length; i++) {
        if (callback.call(thisArg, this[i], i, this)) {
            newArr[newArr.length] = this[i]
            newArr.length++
        }
    }
    return newArr;
}

Caray.prototype.reduce = function(callback, initialValue) {
    var accumulator = (initialValue === undefined) ? undefined : initialValue;
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

    for (var i = 0; i < this.length; i++) {
        if (accumulator === undefined && i === 0) {
            accumulator = this[i];
        } else {
            accumulator = callback(accumulator, this[i], i, this);
        }
    }
    return accumulator;
}

Caray.prototype.reverse = function() {
    var aux = "";
    for (var i = 0; i < this.length / 2; i++) {
        aux = this[i];
        this[i] = this[this.length - (i + 1)];
        this[this.length - (i + 1)] = aux;
    }
    return this;
}