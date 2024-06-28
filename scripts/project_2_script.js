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
                const data = json.data;
                console.log(data);
                const url = json.data.images.fixed_height.url;
                console.log(url);
                let img=`<img src="${url}" alt="${data.title}" />`
                elementOutputArea.innerHTML = `<div>${JSON.stringify(data.title)}</div>`;
                elementOutputArea.innerHTML = img; 
            });
    }

    function handleClickArray() {
        console.log("handleClickArray called");   
        const elementOutputArea = document.getElementById("outputArea");
        const search = document.getElementById("search").value;
        let url = `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${API_KEY}&limit=${PAGE_SIZE}&offset=${offset}`
        console.log('url=' + url);

        fetch(url, {method: "GET"})
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                console.log(json.pagination);
                elementOutputArea.innerHTML = "";
                for (let data of json.data) {
                    //let tag = `<div>${JSON.stringify(data.title)}</div>`
                    const url = data.images.fixed_height.url;
                    let img=`<img src="${url}" alt="${data.title}" />`
                    elementOutputArea.innerHTML += img;
                    
            }
        });
    }


const list = document.querySelector("#data-list");
const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");

let startIndex = 0;
let endIndex = 10;

const mapData = () => {
  const slicedData = dataSet
    .slice(startIndex, endIndex)
    .map((row) => {
      return `<li>${row.name}</li>`;
    })
    .join("");
  list.innerHTML = slicedData;
}

mapData();

prevButton.addEventListener("click", () => {
  if (endIndex < 20) {
    startIndex = 0;
    endIndex = 10;
  } else {
    startIndex -= 10;
    endIndex -= 10;
  }
  
});

nextButton.addEventListener("click", () => {
  if (endIndex < dataSet.length) {
    startIndex += 10;
    endIndex += 10;
  }
  
});