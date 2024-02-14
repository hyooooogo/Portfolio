class MobileMenu {
    constructor() {
        this.DOM = {};
        this.DOM.btn = document.querySelector('.burger');
        this.DOM.container = document.querySelector('#global-container');
        this.DOM.off = document.querySelector('.menu-off');
        this._addEvent();
        this._menuOff();
    }
    

    _toggle() {
        this.DOM.container.classList.toggle('menu-open');
    }

    _addEvent() {
        this.DOM.btn.addEventListener('click', this._toggle.bind(this));
    }

    _menuOff() {
        this.DOM.off.addEventListener('click', this._toggle.bind(this));
    }
}

