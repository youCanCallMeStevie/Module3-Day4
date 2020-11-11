const btnFetch = document.querySelectorAll(".btnFetch");
const bookResults = document.querySelector(".container-images");
const btnModalImages = document.querySelectorAll("button");
let btns = document.getElementsByClassName("btnImageModal");
let shoppingCartBooks = document.querySelector(".cart-items");

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
                                <h6 class="book-title">${book.title}</h6><span class = "book-price">$${book.price}</span>
                                <div>
                                <small class="text-muted">${book.category}</small>
                                </div>

                                </p>
                               <div class="justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-sm btn-outline-secondary btnHide" onclick="hideToggle()">
                                        Skip
                                        </button>
                                        <a><button type="button" class="btn btn-sm btn-outline-success" onclick="addToCart(event)">
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
      console.log(catalogue)
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
btn.addEventListener("click", function (event) {
  event.preventDefault();
  const input = document.querySelector(".form-control").value;
  // console.log(input)
  // bookResults.querySelectorAll("*").forEach((element) => element.remove());
  bookResults.innerHTML="" //same as above
  const filteredLibrary = bookLibrary.filter(item => item.title.toLowerCase().includes(input.toLowerCase())
  );
  // console.log(filteredLibrary)
  // console.log(bookLibrary)
  filteredLibrary.forEach((book) => createBook(book));
});


const filterData = () => {
let result = bookLibrary.filter(item => item.price<10 && item.category==='scifi')
console.log(result)

}
//

const findBook = (bookTitle) => {
return bookLibrary.find(item => item.title === bookTitle)
}

const priceInCart = () => {
  item.reduce((accumulator, current) => accumulator+item.price,0)
}


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





const addToCart = (e) => {
let bookTitle = e.target.closest('.card-body').children[1].innerText
const bookResult = findBook(bookTitle)
let bookPrice = e.target.closest('.card-body').children[2].innerText
const li = document.createElement("li");
li.innerHTML = ` <li>${bookTitle}  ${bookPrice}<span class="close">&times;</span></li>`;
shoppingCartBooks.appendChild(li);
  };


const mapping =() => {
  const cont = document.querySelector('.second-container')
  const mapped =bookLibrary.map(book=> ` <div class="col-sm-3 card mb-4 shadow-sm" >
  <img class="card-img-top d-flex" src="${book.img}">
  <div class="card-body">
     <p class="card-text">
     <h6 class="book-title">${book.title}</h6><span class = "book-price">$${book.price}</span>
     <div>
     <small class="text-muted">${book.category}</small>
     </div>

     </p>
    <div class="justify-content-between align-items-center">
         <div class="btn-group">
             <button type="button" class="btn btn-sm btn-outline-secondary btnHide" onclick="hideToggle()">
             Skip
             </button>
             <a><button type="button" class="btn btn-sm btn-outline-success" onclick="addToCart(event)">
             Add to Cart<span><i class="fas fa-cart-plus ml-3"></i></span>
             </button></a>
         </div>
         
     </div>
    </div>
</div>` )
cont.innerHTML=mapped
  console.log(mapped)
}



window.addEventListener("DOMContentLoaded", (event) => {
  getBooks();


});



//   ${addToCart(
//     book.asin
//   )}
