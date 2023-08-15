var generate_meme = document.querySelector(".generate_meme");
var meme_title = document.querySelector(".meme_title");
var meme_img = document.querySelector(".meme_img");
var meme_author = document.querySelector(".meme_author");

var updateMeme = (url,title,author) => 
{
    console.log(title);
    meme_img.setAttribute("src",url);
    meme_title.innerHTML = title;
    meme_author.innerHTML = `Meme By : ${author}`;
}

var generateMeme = () => {
    //meme will come from API
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => response.json())
    .then((data) => {
        updateMeme(data.url,data.title,data.author);
    })
}
generateMeme();

generate_meme.addEventListener("click", generateMeme);
