
function LoginPanel($el) {
    this.$el = $el;
    this.url = 'server/login.php';
}

LoginPanel.prototype.init = function() {
    let _this = this;
    $('#login-btn').on('click', function() {
        let data = {
            username: $('#username', _this.$el).val(),
            password: $('#password', _this.$el).val()
        }
        $.ajax({
            method: 'POST',
            dataType: 'json',
            data: data,
            url: _this.url
        }).then(function(data) {
            if (data.success) {
                $(document).trigger('show-panel', {panel: 'list-panel'});
                sessionStorage.logged = 1;
            } else {
                alert(data.error);
            }
        })
    });
}
