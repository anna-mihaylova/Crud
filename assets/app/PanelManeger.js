
function PanelManager() {
    this.panels = ['login-panel', 'form-panel', 'list-panel'];
    this.defaultPanel = 'login-panel';
}

PanelManager.prototype.show = function (name, data) {
    for (let i in this.panels) {
        let $panel = $('#' + this.panels[i]);
        if (this.panels[i] == name) {
            $panel.show('slow', function() {
                $(this).trigger('panel-load', data);
            });
        } else {
            $panel.hide('slow');
            $panel.trigger('panel-unload');
        }
    }
}

PanelManager.prototype.init = function() {
    if (sessionStorage.logged) {
        this.defaultPanel = 'list-panel';
    }
    this.show(this.defaultPanel);
    var _this = this;
    $(document).on('show-panel', function(e, data) {
        _this.show(data.panel, data.data);
    })
}
