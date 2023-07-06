let martCart = [
  {
    image: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2019/03/What_is_digital_marketing_jpg_7ytL8TjA.jpg?auto=format&q=60&w=1280&h=960&fit=crop&crop=faces",
    name: "Marketing Masterclass - Learn GREAT mart",
    ratingImg: "images/ratings/rating-45.png",
    ratingCount: "230",
    priceCents: "234"
  },
  {
    image: "https://dhg1h5j42swfq.cloudfront.net/2023/02/21224019/19198948-1024x683.jpg",
    name: "The Complete mart & Software Theory for Beginners",
    ratingImg: "images/ratings/rating-45.png",
    ratingCount: "230",
    priceCents: "234"
  },
  {
    image: "https://gdempresa.gesdocument.com/sites/default/files/styles/large/public/2022-04/marketing-digital-tendencias.jpg?itok=8juv80CE",
    name: "Become a Professional mart & Softwareer",
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

let martHTML = '';
martCart.forEach((mart) => {
  martHTML += `
    <div class="col-10 col-md-5 col-lg-3 mx-auto">
      <div class="card">
        <img src="${mart.image}" alt="" class="card-img-top">
        <div class="card-body">
          <div class="card-text h5">${mart.name}</div>
          <div class="card-text">
            <img src="${mart.ratingImg}" alt="" height="20px">
            <span class="link-primary">${mart.ratingCount}</span>
          </div>
          <div class="card-text"><b>$${(mart.priceCents / 100).toFixed(2)}</b></div>
<button class="btn btn-light w-100 btn-add" data-product-name="${mart.name}">Add to Cart</button>
          </div>
      </div>
    </div>
  `;
});

document.getElementById('martrow').innerHTML = martHTML;



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
