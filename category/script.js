var status= function(response){
  if (response.status!==200){
    return Promice.reject(new Error(response.statusText))
  }
  return Promice.resolve(response)
}
var json= function (response){
  return response.json()
}

fetch('http://46.101.146.101:8081/categories/')
.then(status)
.then(json)
.then(function(data){
  console.log('data',data)

  let tilder = document.createElement("div");
  tilder.textContent = data[0].title;
  document.body.appendChild(tilder);

  let tilderimg = document.createElement("img");
  tilderimg.src = data[0].category_image_url;
  document.body.appendChild(tilderimg);

  let sport = document.createElement("div");
  sport.textContent = data[1].title;
  document.body.appendChild(sport);

  let sportimg = document.createElement("img");
  sportimg.src = data[1].category_image_url;
  document.body.appendChild(sportimg);

  let art = document.createElement("div");
  art.textContent = data[2].title;
  document.body.appendChild(art);

  let artimg = document.createElement("img");
  artimg.src = data[2].category_image_url;
  document.body.appendChild(artimg);


  let drive = document.createElement("div");
  drive.textContent = data[3].title;
  document.body.appendChild(drive);

  let driveimg = document.createElement("img");
  driveimg.src = data[3].category_image_url;
  document.body.appendChild(driveimg);

  let science = document.createElement("div");
  science.textContent = data[4].title;
  document.body.appendChild(science);

  let scienceimg = document.createElement("img");
  scienceimg.src = data[4].category_image_url;
  document.body.appendChild(scienceimg);

  let it = document.createElement("div");
  it.textContent = data[5].title;
  document.body.appendChild(it);

  let itimg = document.createElement("img");
  itimg.src = data[5].category_image_url;
  document.body.appendChild(itimg);

  let beauty = document.createElement("div");
  beauty.textContent = data[6].title;
  document.body.appendChild(beauty);

  let beautyimg = document.createElement("img");
  beautyimg.src = data[6].category_image_url;
  document.body.appendChild(beautyimg);


  let business = document.createElement("div");
  business.textContent = data[7].title;
  document.body.appendChild(business);

  let businessimg = document.createElement("img");
  businessimg.src = data[7].category_image_url;
  document.body.appendChild(businessimg);

  let exam = document.createElement("div");
  exam.textContent = data[8].title;
  document.body.appendChild(exam);

  let examimg = document.createElement("img");
  examimg.src = data[8].category_image_url;
  document.body.appendChild(examimg);

  let course = document.createElement("div");
  course.textContent = data[9].title;
  document.body.appendChild(course);

  let courseimg = document.createElement("img");
  courseimg.src = data[9].category_image_url;
  document.body.appendChild(courseimg);

})
