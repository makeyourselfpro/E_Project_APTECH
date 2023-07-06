let personalCart = [
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgpDlXR6UQjE4TJ2n8Ulgnpy7Ric1uqwabbw&usqp=CAU",
    name: "Graphic personal Masterclass - Learn GREAT personal",
    ratingImg: "images/ratings/rating-45.png",
    ratingCount: "230",
    priceCents: "234"
  },
  {
    image: "https://qph.cf2.quoracdn.net/main-qimg-49d65d8ea6de4d7d958894d6cb7db4fc-lq",
    name: "The Complete Graphic personal Theory for Beginners",
    ratingImg: "images/ratings/rating-45.png",
    ratingCount: "230",
    priceCents: "234"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwh8CWY_FhMlHLQnlwynJNqK70KDBuisDFTn3Ix9buXjXtRjHMKfRnFvsH1igk3y761sc&usqp=CAU",
    name: "Become a Professional Graphic personaler",
    ratingImg: "images/ratings/rating-45.png",
    ratingCount: "230",
    priceCents: "234"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwh8CWY_FhMlHLQnlwynJNqK70KDBuisDFTn3Ix9buXjXtRjHMKfRnFvsH1igk3y761sc&usqp=CAU",
    name: "Graphic personal For Real Beginners",
    ratingImg: "images/ratings/rating-45.png",
    ratingCount: "230",
    priceCents: "234"
  }
];

let personalHTML = '';
personalCart.forEach((personal) => {
  personalHTML += `
    <div class="col-10 col-md-5 col-lg-3 mx-auto">
      <div class="card">
        <img src="${personal.image}" alt="" class="card-img-top">
        <div class="card-body">
          <div class="card-text h5">${personal.name}</div>
          <div class="card-text">
            <img src="${personal.ratingImg}" alt="" height="20px">
            <span class="link-primary">${personal.ratingCount}</span>
          </div>
          <div class="card-text"><b>$${(personal.priceCents / 100).toFixed(2)}</b></div>
<button class="btn btn-light w-100 btn-add" data-product-name="${personal.name}">Add to Cart</button>
          </div>
      </div>
    </div>
  `;
});

document.getElementById('personalrow').innerHTML = personalHTML;



document.querySelectorAll('.btn-add').forEach((button) => {
  button.addEventListener('click', () => {
    const productName = button.dataset.productName;
    let matching;
    cart.forEach((item) => { if (productName === item.productName) { matching = item } });
    if (matching) { design.ratingCount } {
      cart.push({ name: productName })
    }
    alert(productName + " is added to cart")

  })
})
