console.log("script.js loaded");

var endpoint = "https://api.giphy.com/v1/gifs/search?api_key=r3aYm2692lk5yNMZNQfztmQ2Tcit58Yr&q=cats&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips";

function getCatGifs() {
    fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            const gifs = data.data;
            const output = gifs.map(gif => gif.images.original.url);

            console.log(output);

            const gifContainer = document.getElementById("gifContainer");
            gifContainer.innerHTML = '';

            output.forEach(url => {
                const img = document.createElement('img');
                img.src = url;
                gifContainer.appendChild(img);
            });
        }) 
    .catch(error => {
        console.error("Error fetching gifs:", error);
    });
}

document.getElementById("searchBtn").addEventListener("click", getCatGifs);

