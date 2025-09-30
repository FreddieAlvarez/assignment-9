console.log("script.js loaded");

var endpoint = "https://api.giphy.com/v1/gifs/search?api_key=r3aYm2692lk5yNMZNQfztmQ2Tcit58Yr&q=cats&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips";

const gifContainer = document.querySelector("#gif-container");
const fetchGifBtn = document.querySelector("#fetch-gif-btn");
const searchInput = document.querySelector("#search-input");

fetchGifBtn.addEventListener("click", async () => {
    const searchTerm = searchInput.value.trim() || "cats";
    const dynamicEndpoint = `https://api.giphy.com/v1/gifs/search?api_key=r3aYm2692lk5yNMZNQfztmQ2Tcit58Yr&q=${encodeURIComponent(searchTerm)}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    
    try{
        const response = await fetch(dynamicEndpoint);
        const data = await response.json();
        const gifs = data.data;

        const output = gifs.map(gif => gif.images.original.url);

        gifContainer.innerHTML = '';

        output.forEach(url => {
            gifContainer.innerHTML += `<img src = "${url}" class = "col-3 mb-3">`;
        });

        console.log("GIFs Loaded:", gifs.map(g=> g.images.original.url));
    } catch (error) {
        console.error("Error fetching gifs:", error);   
    }
});