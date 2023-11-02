let apikey = "3408abaadf6240e38435645e200055f0";


let mainContainer = document.querySelector(".mainContainer");


window.addEventListener("load", async () => {
    let newsobj = await getData("India");

   displayOnScreen(newsobj.articles);

})


async function getData(query) {
    let data = await fetch(`https://newsapi.org/v2/everything?q=tesla&from=2023-09-23&sortBy=publishedAt&apiKey=${apikey}`);

    let newsobj = await data.json()

    // console.log(newsobj);

    return newsobj;

}




function displayOnScreen(newsobj){
     let news = newsobj[0];

     let myele = document.createElement('div');

    //  let imageUrl =news.

     myele.innerHTML=` <div class="card" style="width: 18rem;">
     <img class="card-img-top" src="..." alt="Card image cap">
     <div class="card-body">
       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       <a href="#" class="btn btn-primary">Go somewhere</a>
     </div>
   </div>`
}