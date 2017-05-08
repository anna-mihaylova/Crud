
$(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
    })
    let panelManager = new PanelManager();


    let loginPanel = new LoginPanel($('#login-panel'));
    loginPanel.init();

    let listPanel = new ListPanel($('#list-panel'));
    listPanel.init();

    let formPanel = new FormPanel($('#form-panel'));
    formPanel.init();

    panelManager.init();
	$('#login-btn').on('click', function() {
		$(document).trigger('show-panel', {panel: 'list-panel'});
	})
})
