/* event listener listens to messages containing a target path, and then changes the iframe */
window.addEventListener('message', function(event){
    var path = event.data;

    $("#pageLinker").attr("src", path)
});

/* function which changes the iframe using the sidebar buttons*/
function sidebarButtonChanger(id){
    var path = "html/" + id + "_page.html";
    var header = id[0].toUpperCase() + id.slice(1) + " Page";

    var newIframe = "<iframe id = 'pageLinker' src=" + path + " width='100%' height='100%'></iframe>";

    $("#pageName").html(header);

    $("#pageLinker").attr("src", path);
}

/*Sets the page to the drama summary*/
function toDramaSummary(target_path){
    var path = target_path;

    /* can send a message to another window, which listens in onto the message and changes the iframe */
    window.parent.postMessage(target_path, '*');
}

