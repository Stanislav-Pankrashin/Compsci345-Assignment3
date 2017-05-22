/* sets the domain of every page to prevent crossdomain issues*/
window.addEventListener('load', setDomain);

function setDomain(){
    document.domain = '';
}


/* function which changes the iframe using the sidebar buttons*/
function sidebarButtonChanger(id){
    var path = "html/" + id + "_page.html";
    var header = id[0].toUpperCase() + id.slice(1) + " Page";

    var newIframe = "<iframe id = 'pageLinker' src=" + path + " width='100%' height='100%'></iframe>";

    $("#pageName").html(header);

    $("#pageLinker").attr("src", path);
}

/*Sets the page to the drama summary*/
function toDramaSummary(){
    var path = 'play_summary.html';
    var header = "Play Summary Page";

    var newIframe = "<iframe id = 'pageLinker' src=" + path +" width='100%' height='100%'></iframe>";

    $("#pageName").html(header);

    window.parent.$("#pageLinker").attr("src", path);
}

