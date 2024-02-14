class TextAnimation {
    constructor(el) {
        this.DOM = {};
        this.DOM.el = (el instanceof HTMLElement) ? el: document.querySelector(el);
        this.chars = this.DOM.el.innerHTML.trim().split("");
        this.DOM.el.innerHTML = this._splitText();
    }

    _splitText() {
        return this.chars.reduce((acc, curr) => {
            return `${acc}<span class='char'>${curr}</span>`
        }, '')
    }

    animate() {
        this.DOM.el.classList.toggle('inview');
    }
}