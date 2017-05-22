/* function which changes the iframe using the sidebar buttons*/
function sidebarButtonChanger(id){
    var path = 'html/' + id + "_page.html";
    var header = id + " page";

    var newIframe = "<iframe id = 'pageLinker' src=" + path +" width='100%' height='100%'></iframe>";

    $("#pageName").html(header);

    $("#pageLinker").attr("src", path);
}

