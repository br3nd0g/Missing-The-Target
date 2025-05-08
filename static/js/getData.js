const dataEndpoint = (window.location.protocol + '//' + window.location.host) + "/getData";
let data;

function getData(url){
    fetch(url)
        .then((response) => response.json())
        .then((json) =>{
            data = json;
            console.log(data);
            createGraphs(data);
        });
}

getData(dataEndpoint);