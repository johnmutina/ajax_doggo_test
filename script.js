const DOG_URL = "https://dog.ceo/api/breeds/image/random";
const dogDiv = document.querySelector(".doggo");

function getDog() {

    const request = fetch(DOG_URL);
    
    request.then(function(res){
        const data = res.json();
        return data;
    }).then(function(response){
        const picture = response.message;
        const image = document.createElement("img");
        image.src = picture;
        image.alt = "Cute doggo";
        dogDiv.appendChild(image);
    })
};

document.querySelector(".new-doggo").addEventListener("click", getDog);