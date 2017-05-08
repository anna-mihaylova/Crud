
function ListPanel($el) {
    this.$el = $el;
    this.url = 'server/list.php';
    this.deleteUrl = 'server/delete.php';
}

ListPanel.prototype.init = function() {
    $('#add-new').on('click', function() {
        $(document).trigger('show-panel', {panel: 'form-panel'});
    });
    let _this = this;
    this.$el.on('panel-load', function() {
        _this.loadData();
    });

    this.$el.find('table').on('click', '.btn-delete', function(e) {
        let index = $(this).closest('tr').data('index');

        $.get(_this.deleteUrl + '?key=' + index).then(function() {
            _this.loadData()
        });
    })

    this.$el.find('table').on('click', '.btn-edit', function(e) {
        let index = $(this).closest('tr').data('index');
        $(document).trigger('show-panel', {panel: 'form-panel', data: index})
    })
}

ListPanel.prototype.dataToRows = function(data) {
    let html = '';

    for (let i in data) {
        html += '<tr data-index="' + i + '">' +
            '<td>' + (parseInt(i) + 1) + '</td>' +
            '<td>' + data[i].name + '</td>' +
            '<td>' + data[i].quantity + '</td>' +
            '<td>' + data[i].price + '</td>' +
            '<td> <i class="fa fa-pencil btn-edit" aria-hidden="true"></i>&nbsp;<i class="fa fa-check-circle-o btn-delete" aria-hidden="true"></i></td>'+
            '</tr>';
    }

    return html;
}

ListPanel.prototype.loadData = function() {
    let _this = this;
    $.getJSON(_this.url).then(function(data){
        let $tbody = _this.$el.find('tbody');
        $tbody.html('').append(_this.dataToRows(data));
    });
}
