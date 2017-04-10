var config = {
    _numbercolors: 5,
    set numberColors(value) {
        this._numbercolors = value
        this.saveNumberColors()
    },

    _time: 30,
    set time(value) {
        this._time = value
        this.saveTime()
    },

    saveNumberColors: function () {
        sessionStorage.setItem('numbercolors', this._numbercolors);
    },

    saveTime: function () {
        sessionStorage.setItem('time', this._time);
    }    
}