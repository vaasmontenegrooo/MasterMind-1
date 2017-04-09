let config = {
    _colors: 5,
    set colors(value) {
        this._colors = value
        this.saveColors()
    },

    _time: 30,
    set time(value) {
        this._time = value
        this.saveTime()
    },

    saveColors: function () {
        sessionStorage.setItem('colors', this._colors);
    },

    saveTime: function () {
        sessionStorage.setItem('time', this._time);
    }    
}


