let successies = [{
  image: "https://img-c.udemycdn.com/user/200_H/9685726_67e7_4.jpg",
  name: "John Deo",
  course: 'Machine Learning',
  rating:'images/ratings/rating-40.png'
},
  {
    image: "https://img-c.udemycdn.com/user/200_H/9685726_67e7_4.jpg",
    name: "John Deo",
    course: 'Machine Learning',
    rating: 'images/ratings/rating-40.png'
  },
  {
    image: "https://img-c.udemycdn.com/user/200_H/9685726_67e7_4.jpg",
    name: "John Deo",
    course: 'Machine Learning',
    rating: 'images/ratings/rating-40.png'
  },
  {
    image: "https://img-c.udemycdn.com/user/200_H/9685726_67e7_4.jpg",
    name: "John Deo",
    course: 'Machine Learning',
    rating: 'images/ratings/rating-40.png'
  },
  {
    image: "https://img-c.udemycdn.com/user/200_H/9685726_67e7_4.jpg",
    name: "John Deo",
    course: 'Machine Learning',
    rating: 'images/ratings/rating-40.png'
  },
  {
    image: "https://img-c.udemycdn.com/user/200_H/9685726_67e7_4.jpg",
    name: "John Deo",
    course: 'Machine Learning',
    rating: 'images/ratings/rating-40.png'
  },
  {
    image: "https://img-c.udemycdn.com/user/200_H/9685726_67e7_4.jpg",
    name: "John Deo",
    course: 'Machine Learning',
    rating: 'images/ratings/rating-40.png'
  },
  {
    image: "https://img-c.udemycdn.com/user/200_H/9685726_67e7_4.jpg",
    name: "John Deo",
    course: 'Machine Learning',
    rating: 'images/ratings/rating-40.png'
  },
  {
    image: "https://img-c.udemycdn.com/user/200_H/9685726_67e7_4.jpg",
    name: "John Deo",
    course: 'Machine Learning',
    rating: 'images/ratings/rating-40.png'
  },
  {
    image: "https://img-c.udemycdn.com/user/200_H/9685726_67e7_4.jpg",
    name: "John Deo",
    course: 'Machine Learning',
    rating: 'images/ratings/rating-40.png'
  },
  {
    image: "https://img-c.udemycdn.com/user/200_H/9685726_67e7_4.jpg",
    name: "John Deo",
    course: 'Machine Learning',
    rating: 'images/ratings/rating-40.png'
  },
  {
    image: "https://img-c.udemycdn.com/user/200_H/9685726_67e7_4.jpg",
    name: "John Deo",
    course: 'Machine Learning',
    rating: 'images/ratings/rating-40.png'
  },
  {
    image: "https://img-c.udemycdn.com/user/200_H/9685726_67e7_4.jpg",
    name: "John Deo",
    course: 'Machine Learning',
    rating: 'images/ratings/rating-40.png'
  },
  {
    image: "https://img-c.udemycdn.com/user/200_H/9685726_67e7_4.jpg",
    name: "John Deo",
    course: 'Machine Learning',
    rating: 'images/ratings/rating-40.png'
  },
  {
    image: "https://img-c.udemycdn.com/user/200_H/9685726_67e7_4.jpg",
    name: "John Deo",
    course: 'Machine Learning',
    rating: 'images/ratings/rating-40.png'
  },
  {
    image: "https://img-c.udemycdn.com/user/200_H/9685726_67e7_4.jpg",
    name: "John Deo",
    course: 'Machine Learning',
    rating: 'images/ratings/rating-40.png'
  },
]
  

let successHTML = '';
successies.forEach((success) => {
  successHTML += `
  
<div class="col-12 col-md-6 col-lg-4  col-xl-3 m-2 mx-auto shadow">
<div class="row p-2">
<div class="col-5">
<img src="${success.image}" alt="" class="img-fluid">
</div>
<div class="col-7 ">
<div class="h5">${success.name}</div>
<p>${success.course}</p>
<div><img src="${success.rating}" alt="" height="20px"></div>
</div>
</div>
</div>
  `;
})

document.getElementById('successrow').innerHTML = successHTML;