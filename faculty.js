let faculties = [{
  image: "https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg",
  name: "John Anderson",
  description: "John is a seasoned web developer with over 10 years of experience in the industry. He specializes in front end development and has worked on numerous high profile projects.",
  experience: "Experience: 10+ years",
  rating:"images/ratings/rating-50.png"
},

  {
    image: "https://img-c.udemycdn.com/user/200_H/7799204_2091_5.jpg",
    name: "John Anderson",
    description: "John is a seasoned web developer with over 10 years of experience in the industry. He specializes in front end development and has worked on numerous high profile projects.",
    experience: "Experience: 10+ years",
    rating: "images/ratings/rating-50.png"
  },

  {
    image: "https://img-c.udemycdn.com/user/200_H/12951804_29ef_4.jpg",
    name: "John Anderson",
    description: "John is a seasoned web developer with over 10 years of experience in the industry. He specializes in front end development and has worked on numerous high profile projects.",
    experience: "Experience: 10+ years",
    rating: "images/ratings/rating-50.png"
  },

  {
    image: "https://img-c.udemycdn.com/user/200_H/144750422_274d.jpg",
    name: "John Anderson",
    description: "John is a seasoned web developer with over 10 years of experience in the industry. He specializes in front end development and has worked on numerous high profile projects.",
    experience: "Experience: 10+ years",
    rating: "images/ratings/rating-50.png"
  },

  {
    image: "https://img-c.udemycdn.com/user/200_H/2364054_83cd_5.jpg",
    name: "John Anderson",
    description: "John is a seasoned web developer with over 10 years of experience in the industry. He specializes in front end development and has worked on numerous high profile projects.",
    experience: "Experience: 10+ years",
    rating: "images/ratings/rating-50.png"
  },

  {
    image: "https://img-c.udemycdn.com/user/200_H/16649710_ee35_3.jpg",
    name: "John Anderson",
    description: "John is a seasoned web developer with over 10 years of experience in the industry. He specializes in front end development and has worked on numerous high profile projects.",
    experience: "Experience: 10+ years",
    rating: "images/ratings/rating-50.png"
  },]

let facultyHTML = '';
faculties.forEach((faculty) => {
  facultyHTML += `
  
<div class="col-12 col-lg-6 p-5">
<div class="row">
<div class="col-12 col-lg-6"><img
src="${faculty.image}" alt="" class="img-fluid w-100">
</div>
<div class="col-12 col-lg-6">
<div class="h2">${faculty.name}</div>
<p>${faculty.description} </p>
<div class="col-12">
<div class="col-7 h6">
<p>${faculty.experience}</p>
</div>
<div class="col-5">
<div class=""><img src="${faculty.rating}" alt="" height="20px"></div>
</div>
</div>
</div>
</div>
</div>
  `;
})

document.getElementById("facultyrow").innerHTML = facultyHTML;