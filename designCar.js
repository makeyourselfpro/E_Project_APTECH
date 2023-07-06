let designCart = [
  {
    image: "https://i0.wp.com/www.graphic-design-institute.com/wp-content/uploads/2020/02/the-best-applications-to-learn-as-a-graphics-designer.jpg?fit=1200%2C800&ssl=1",
    name: "Graphic Design Masterclass - Learn GREAT Design",
    ratingImg: "images/ratings/rating-45.png",
    ratingCount: "230",
    priceCents: "234"
  },
  {
    image: "https://www.digitaleduschool.com/wp-content/uploads/2021/08/What-will-you-learn-in-the-Graphic-Design-Course-at-Digital-Education-School-1.png",
    name: "The Complete Graphic Design Theory for Beginners",
    ratingImg: "images/ratings/rating-45.png",
    ratingCount: "230",
    priceCents: "234"
  },
  {
    image: "https://essinstitute.in/wp-content/uploads/2022/10/best-graphic-designing-softwares-1-1024x576.jpg",
    name: "Become a Professional Graphic Designer",
    ratingImg: "images/ratings/rating-45.png",
    ratingCount: "230",
    priceCents: "234"
  },
  {
    image: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/04/106032482.jpeg?auto=format&q=60&w=1280&h=750&fit=crop&crop=faces",
    name: "Graphic Design For Real Beginners",
    ratingImg: "images/ratings/rating-45.png",
    ratingCount: "230",
    priceCents: "234"
  }
];

let designHTML = '';
designCart.forEach((design) => {
  designHTML += `
    <div class="col-10 col-md-5 col-lg-3 mx-auto">
      <div class="card">
        <img src="${design.image}" alt="" class="card-img-top">
        <div class="card-body">
          <div class="card-text h5">${design.name}</div>
          <div class="card-text">
            <img src="${design.ratingImg}" alt="" height="20px">
            <span class="link-primary">${design.ratingCount}</span>
          </div>
          <div class="card-text"><b>$${(design.priceCents / 100).toFixed(2)}</b></div>
          <button class="btn btn-light w-100 btn-add" data-product-name="${design.name}">Add to Cart</button>
        </div>
      </div>
    </div>
  `;
});

document.getElementById('designrow').innerHTML = designHTML;

document.querySelectorAll('.btn-add').forEach((button) => {
  button.addEventListener('click', () => {
    const productName = button.dataset.productName;
    let matching;
    cart.forEach((item) => { if (productName === item.productName) { matching = item } });
    if (matching) { design.ratingCount } {
      cart.push({name:productName})
    }

  })
  
})
alert(productName + " is added to cart")


// document.getElementById('products-grid').innerHTML = productsHTML;

// document.querySelectorAll('.add-to-cart').forEach((button) => {
//   button.addEventListener('click', () => {
//     const productId = button.dataset.productId;
//     let matching;
//     cart.forEach((item) => { if (productId === item.productId) { matching = item } });
//     if (matching) { productId.Quantity += 1 } else { cart.push({ productId: productId, Quantity: 1 }) }


//     let cartQuantity = 0;

//     cart.forEach((item) => {
//       cartQuantity += item.Quantity;
//     })
//     document.querySelector(".cart-quantity").innerHTML = cartQuantity;

//   });
// });
