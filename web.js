let webCart = [
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwh8CWY_FhMlHLQnlwynJNqK70KDBuisDFTn3Ix9buXjXtRjHMKfRnFvsH1igk3y761sc&usqp=CAU",
name: "11Graphic web Masterclass - Learn GREAT web",
ratingImg: "images/ratings/rating-45.png",
ratingCount: "230",
priceCents: "234"
},
{
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf5w3Z0Z7-fVxrvcr-VfTQk1sPEFBGOnlRC8qXm_Hj2cwq67MixBtytz5i--1iwBXgazI&usqp=CAU",
name: "The Complete Graphic web Theory for Beginners",
ratingImg: "images/ratings/rating-45.png",
ratingCount: "230",
priceCents: "234"
},
{
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9V3rlsZBMbTpamxFz7Ewm2tFKPtf3kyWKOeemCMp9-aw5lWR2fxewyJAUBlTQORXI2CQ&usqp=CAU",
name: "Become a Professional Graphic weber",
ratingImg: "images/ratings/rating-45.png",
ratingCount: "230",
priceCents: "234"
},
{
  image: "https://quickbooks.intuit.com/oidam/intuit/sbseg/en_us/Blog/Illustration/operating-costs-header-image-us-en.jpg",
name: "Graphic web For Real Beginners",
ratingImg: "images/ratings/rating-45.png",
ratingCount: "230",
priceCents: "234"
}
];

let webHTML = '';
webCart.forEach((web) => {
webHTML += `
<div class="col-10 col-md-5 col-lg-3 mx-auto">
<div class="card">
<img src="${web.image}" alt="" class="card-img-top">
<div class="card-body">
<div class="card-text h5">${web.name}</div>
<div class="card-text">
<img src="${web.ratingImg}" alt="" height="20px">
<span class="link-primary">${web.ratingCount}</span>
</div>
<div class="card-text"><b>$${(web.priceCents / 100).toFixed(2)}</b></div>
<button class="btn btn-light w-100 btn-add" data-product-name="${web.name}">Add to Cart</button>
</div>
</div>
</div>
`;
});

document.getElementById('webrow').innerHTML = webHTML;



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
