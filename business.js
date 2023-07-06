let busCart = [
  {
    image: "https://www.jagoanhosting.com/blog/wp-content/uploads/2022/09/web-development-800x500.jpg",
    name: "Web Development Masterclass - Learn GREAT Design",
    ratingImg: "images/ratings/rating-45.png",
    ratingCount: "230",
    priceCents: "234"
  },
  {
    image: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200203200336/13-Things-You-Should-Know-Before-You-Enter-In-Web-Development.png",
    name: "The Complete Web Development Theory for Beginners",
    ratingImg: "images/ratings/rating-45.png",
    ratingCount: "230",
    priceCents: "234"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFkE951NznC989E2IkR6zBMDLnGJAN8Qvzgv1Xa7Lr3qrnPsdZwTkeOBfk1zzJu0wAFaE&usqp=CAU",
    name: "Become a Professional Web Development",
    ratingImg: "images/ratings/rating-45.png",
    ratingCount: "230",
    priceCents: "234"
  },
  {
    image: "https://www.recablog.com/wp-content/uploads/2021/09/web-development.png",
    name: "Graphic bus For Real Beginners",
    ratingImg: "images/ratings/rating-45.png",
    ratingCount: "230",
    priceCents: "234"
  }
];

let busHTML = '';
busCart.forEach((bus) => {
  busHTML += `
    <div class="col-10 col-md-5 col-lg-3 mx-auto">
      <div class="card">
        <img src="${bus.image}" alt="" class="card-img-top">
        <div class="card-body">
          <div class="card-text h5">${bus.name}</div>
          <div class="card-text">
            <img src="${bus.ratingImg}" alt="" height="20px">
            <span class="link-primary">${bus.ratingCount}</span>
          </div>
          <div class="card-text"><b>$${(bus.priceCents / 100).toFixed(2)}</b></div>
<button class="btn btn-light w-100 btn-add" data-product-name="${bus.name}">Add to Cart</button>
        </div>
      </div>
    </div>
  `;
});

document.getElementById('busrow').innerHTML = busHTML;


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

