let itCart = [
  {
    image: "https://www.perforce.com/sites/default/files/image/2020-01/image-blog-future-software-development.png",
    name: "Marketing Masterclass - Learn GREAT it",
    ratingImg: "images/ratings/rating-45.png",
    ratingCount: "230",
    priceCents: "234"
  },
  {
    image: "https://www.netsolutions.com/insights/wp-content/uploads/2022/02/future-trends-in-software-development-in-2022.webp",
    name: "The Complete it & Software Theory for Beginners",
    ratingImg: "images/ratings/rating-45.png",
    ratingCount: "230",
    priceCents: "234"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP2qjkZ7SWnUg5aXudfvE5YmZxLdHv_6RcwowLqGgHqs6LpznFTdN2Y4sP78JCUQGruQQ&usqp=CAU",
    name: "Become a Professional it & Softwareer",
    ratingImg: "images/ratings/rating-45.png",
    ratingCount: "230",
    priceCents: "234"
  },
  {
    image: "https://classic.exame.com/wp-content/uploads/2021/10/GettyImages-1222811180.jpg?quality=70&strip=info&w=1024",
    name: "Marketing For Real Beginners",
    ratingImg: "images/ratings/rating-45.png",
    ratingCount: "230",
    priceCents: "234"
  }
];

let itHTML = '';
itCart.forEach((it) => {
  itHTML += `
    <div class="col-10 col-md-5 col-lg-3 mx-auto">
      <div class="card">
        <img src="${it.image}" alt="" class="card-img-top">
        <div class="card-body">
          <div class="card-text h5">${it.name}</div>
          <div class="card-text">
            <img src="${it.ratingImg}" alt="" height="20px">
            <span class="link-primary">${it.ratingCount}</span>
          </div>
          <div class="card-text"><b>$${(it.priceCents / 100).toFixed(2)}</b></div>
<button class="btn btn-light w-100 btn-add" data-product-name="${it.name}">Add to Cart</button>
        </div>
      </div>
    </div>
  `;
});

document.getElementById('itrow').innerHTML = itHTML;



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
