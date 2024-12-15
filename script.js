function encurtarURL(){

    let url = document.getElementById("input-url").value 
    //validar link existente
    if(!url){
        alert('É preciso uma URL para encurtar')
        return;
   }

    //api key: 3ca26eae5bc5495eb5877dcefe58b253

    //encurtar o link

    //headers
    let headers = {
        "Content-Type" : "application/json",
        "apiKey" : "3ca26eae5bc5495eb5877dcefe58b253"
    }

   //dados
    let linkRequest = {
        destination : url,
        domain : {fullName: "rebrand.ly"}
    }

    fetch("https://api.rebrandly.com/v1/links", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(linkRequest)
    })
        .then(response => response.json())
        .then(json =>{
            console.log(json);
            let inputUrl = document.getElementById("input-url");
            inputUrl.value = json.shortUrl;

        });

}

function copiar(){
    let inputUrl = document.getElementById("input-url");

    inputUrl.select();
    inputUrl.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(inputUrl.value);

    alert(`URL copiada com sucesso! ${inputUrl.value}`)


}