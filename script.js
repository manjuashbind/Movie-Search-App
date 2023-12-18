function searchmovie(){
let moviename=document.getElementById("input").value
if(moviename==''){
    alert("Enter Movie name")
}
else{

console.log(moviename);
try{
    fetch(`https://www.omdbapi.com/?apikey=ddd5e7b5&t=${moviename}`)

    .then(data=>data.json())
    .then(data=>{
        displaymovie(data);
    })
    .catch((error)=>console.log("Error fetching Data",error));
    }

catch{
    alert("movie does not exist")
}
}
}
function displaymovie(data){
    console.log(data);
    let result=document.getElementById("result")
    if(data.Response ==='False'){
        output=`<div class=" bg-black opacity-75 text-white p-3 fw-medium shadow rounded"><h1>oops!..${data.Error}</h1>
                    <h2>Search for another Movie</h2></div>`
        
        result.innerHTML=output;
    }
else{
    let output=`<div class="bg-black rounded bg-opacity-75 p-2"><img  src="${data.Poster}" style="max-width:400px; height:250px; object-fit:cover;">
    <h3 id="title" class="text-danger "> ${data.Title}</h3>
    <p id="plot" class="text-light text-start">Plot : ${data.Plot}</p>
    <p id="director" class="text-light text-start">Director : ${data.Director}</p>
    <p id="actor" class="text-light text-start">Actors : ${data.Actors}</p>
    <p id="rating" class="text-light text-start">Year : ${data.Year} , Language : ${data.Language} ,  Imdb Rating : ${data.imdbRating}</p>
    </div>`
    console.log(data.Rating);
    result.innerHTML=output;
}
}