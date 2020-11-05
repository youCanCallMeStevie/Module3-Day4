const btnFetch = document.querySelectorAll(".btnFetch");
const bookResults = document.querySelector(".container-images");
const btnModalImages = document.querySelectorAll("button");
let btns = document.getElementsByClassName("btnImageModal");

//       console.log(parsedJson);
//     })
//     .catch((e) => console.log(e));
// };
//   bookResults
//     .querySelectorAll("*")
//     .forEach((element) => element.remove());

const createBook = (book) => {
  //   parsedJson.forEach((element) => {
  const div = document.createElement("div");
//   console.log(book);
  div.classList.add("col-md-4");
  div.classList.add("books-container");
  div.innerHTML = ` <div class="card mb-4 shadow-sm" >
                             <img class="card-img-top d-flex" src="${book.img}">
                             <div class="card-body">
                                <p class="card-text">
                                <h6>"${book.title}"</h6> $${book.price}
                                <div>
                                <small class="text-muted">${book.category}</small>
                                </div>

                                </p>
                               <div class="justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-sm btn-outline-secondary btnHide" onclick="hideToggle()">
                                        Skip
                                        </button>
                                        <a><button type="button" class="btn btn-sm btn-outline-success" onclick="">
                                        Add to Cart<span><i class="fas fa-cart-plus ml-3"></i></span>
                                        </button></a>
                                    </div>
                                    
                                </div>
                               </div>
                           </div>`;
  bookResults.appendChild(div);
};
let bookLibrary = [];
const getBooks = () => {
  fetch(`https://striveschool-api.herokuapp.com/books/`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((catalogue) => {
      bookLibrary = catalogue;
      catalogue.forEach((item) => createBook(item));
      // bookResults
      //   .querySelectorAll("*")
      //   .forEach((element) => element.remove());
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

const btn = document.querySelector(".search-btn");
btn.addEventListener("click", function (e) {
  e.preventDefault();
  const input = document.querySelector(".form-control").value;
  console.log(input)
  bookResults.querySelectorAll("*").forEach((element) => element.remove());
  const filteredLibrary = bookLibrary.filter(item => item.title.toLowerCase().includes(input.toLowerCase())
  );
  console.log(filteredLibrary)
  console.log(bookLibrary)
  filteredLibrary.forEach((book) => createBook(book));
});

//   const basket = [];
//   const addToCart = (asin) => basket.push(asin);
//   const books = fetch("https://striveschool-api.herokuapp.com/books/");
//   let basketBooks = books.filter((book) => basket.includes(book));

const closebtns = document.getElementsByClassName("close");
let i;
for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
    this.parentElement.style.display = 'none';
  });
}

window.addEventListener("DOMContentLoaded", (event) => {
  getBooks();
});

//   ${addToCart(
//     book.asin
//   )}
