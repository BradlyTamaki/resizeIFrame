$(document).ready(function () {
    //init resize
    var height = jQuery('#webpartMain').outerHeight(true);
    var width = "100%";
    resizeIFrame(height,width);
    
    //get list data
    $.ajax({
        url: "../_api/web/lists/getByTitle('Promoted Links 2.0')/items?$orderBy=TileOrder",
        contentType: "application/json;odata=verbose;",
        headers: { "accept": "application/json;odata=verbose;" },
        success: function (data) {
            console.log(data);
        }
    })

    //resize
    resizeIFrame($('#webpartMain').outerHeight(true), '100%');
});
function resizeIFrame(height, width) {
    if (!window.parent)
        return;
    var senderId = decodeURIComponent(getQueryStringParameter("SenderId"));
    var message = "<Message senderId=" + senderId + " >"
            + "resize(" + width + "," + height + ")</Message>";
    parent.postMessage(message, '*');
}
function getQueryStringParameter(param) {
    var params = document.URL.split("?")[1].split("&");
    var strParams = "";
    for (var i = 0; i < params.length; i = i + 1) {
        var singleParam = params[i].split("=");
        if (singleParam[0] == param) {
            return singleParam[1];
        }
    }
}
