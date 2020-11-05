const btnFetch = document.querySelectorAll(".btnFetch");
const containerImgs = document.querySelector(".container-images");
const btnModalImages = document.querySelectorAll("button");
let btns = document.getElementsByClassName("btnImageModal");

const getBooks = (param) => {
  fetch(`https://striveschool-api.herokuapp.com/books/?title=${param}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((parsedJson) => {
    containerImgs.querySelectorAll('*').forEach(element=>element.remove())

      //       console.log(parsedJson);
      //     })
      //     .catch((e) => console.log(e));
      // };
      //   containerImgs
      //     .querySelectorAll("*")
      //     .forEach((element) => element.remove());

      parsedJson.forEach((element) => {
        const div = document.createElement("div");
        console.log(element);
        div.classList.add("col-md-4");
        div.classList.add("books-container");
        div.innerHTML = ` <div class="card mb-4 shadow-sm">
                             <img class="card-img-top" src="${element.img}">
                             <div class="card-body">
                                <p class="card-text">
                                "${element.title}", $${element.price}
                                <div>
                                <small class="text-muted">${element.category}</small>
                                </div>

                                </p>
                               <div class="justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-sm btn-outline-secondary btnHide" onclick="hideToggle()">
                                        Skip
                                        </button>
                                        <button type="button" class="btn btn-sm btn-success " onclick="addToCart()">
                                        Add to Cart
                                        </button>
                                    </div>
                                    
                                </div>
                               </div>
                           </div>`;
        containerImgs.appendChild(div);
      });
    });
};

const hideToggle = () => {
  let allCards = document.querySelectorAll(".books-container");
  let btnsHide = document.querySelectorAll(".btnHide");
  for (let i = 0; i < btnsHide.length; i++) {
    btnsHide[i].onclick = function () {
      allCards[i].style.display = "none";
    };
  }
};

const btn = document.querySelector('.search-btn')
btn.addEventListener('click', function(e){
  e.preventDefault()
  const input = document.querySelector('.form-control').value
  getBooks(input)
})
// }
// const btn = document.querySelector('.search-btn')
// btn.addEventListener('click', function(e){
//   e.preventDefault()
//   const input = document.querySelector('.form-control').value
//   getPhotos(input)
// })

//array.filter for search
