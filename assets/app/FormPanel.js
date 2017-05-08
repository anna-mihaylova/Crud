
function FormPanel($el) {
    this.$el = $el;
    this.url = 'server/save.php';
    this.getUrl = 'server/get.php';
    this.key = '';
}

FormPanel.prototype.init = function() {
    let _this = this;

    $('#save-btn').on('click', function() {
        let data = {
            name: $('#name').val(),
            quantity: $('#quantity').val(),
            price: $('#price').val(),
        }

        if (_this.key) {
            data.key = _this.key;
        }

        $.ajax({
            method: 'POST',
            dataType: 'json',
            data: data,
            url: _this.url
        }).then(function(data) {
            if (data.success) {
                $(document).trigger('show-panel', {panel: 'list-panel'});
            } else {
                alert(data.error);
            }
        })
    });

    this.$el.on('panel-unload', function() {
        _this.$el.find('form').get(0).reset();
        _this.key = '';
    })

    this.$el.on('panel-load', function(event, key) {
        _this.key = key;
        $.getJSON(_this.getUrl + '?key=' + key).then(function(data) {
            $('#name').val(data.name ? data.name : '');
            $('#quantity').val(data.quantity ? data.quantity : '');
            $('#price').val(data.price ? data.price : '');
        });
    })
}
