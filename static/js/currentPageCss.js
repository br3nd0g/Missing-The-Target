const currentUrl = window.location.pathname;

switch (currentUrl){
    case "/":
        document.getElementById("indexLink").classList.add("currentPage");
        break;

    case "/data-visualisation":
        document.getElementById("dataVisLink").classList.add("currentPage");
        break;
}