;(function (global) {

    var TruncateText = function (length, tail, adjustable) {
        return new TruncateText.init(length, tail, adjustable);
    };

    var text = '';

    TruncateText.prototype = {

        render: function (inputText) {

            text = inputText

            if (text.length === 0 || text.length < this.trimLength) {
                return text;
            }

            if (this.adjustLength) this.adjust();

            return text.substr(0, this.trimLength) + this.tail;
        },

        changeTail: function (tail) {
            this.tail = tail;
            return this;
        },

        changeLength: function (trimLength) {
            if (this.trimLength < -1) {
                throw 'Invalid length';
            }
            this.trimLength = trimLength;
            return this;
        },

        adjust: function () {
            var length = this.trimLength;

            if (text.substr(length - 1, 1) !== ' ') {
                while (text.substr(length, 1) !== ' ') {
                    length++;
                }
                this.trimLength = length;
            }
        }
    };

    TruncateText.init = function (trimLength, tail, adjustable) {
        var self = this;

        self.trimLength = trimLength || 30;
        self.tail = tail || "...";
        self.adjustLength = adjustable || true;
    }

    TruncateText.init.prototype = TruncateText.prototype;

    global.TruncateText = global.$T = TruncateText;


})(window);