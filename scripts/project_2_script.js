const API_KEY="KsZLDr69nDEELdE1IQEZmZAtpXRbSKlz"
    const PAGE_SIZE=10;
    let offset=0;
    function handleClickRandom() {
        console.log("handleClickRandom called");   
        const search = "api.giphy.com/v1/gifs/random"; 
        const elementOutputArea = document.getElementById("outputArea");
        let url = `http://${search}?api_key=${API_KEY}`;
        console.log('url=' + url);

        fetch(url, {method: "GET"})
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                const data = json.data.images.fixed_height.url;
                elementOutputArea.innerHTML = data; 
                
            });
    }
