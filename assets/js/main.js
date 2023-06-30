// Navbar button open/close
var showBtn = document.getElementById('show-btn');
var showList = document.getElementById("show-list");
var Brand = document.getElementById('brand');


showBtn.addEventListener( "click",() =>{
  showList.classList.toggle("open");
});

// Image appear/Disappear on small screen

function replaceImage() {
  var deviceWidth = window.innerWidth;
  var image = document.getElementById('img_1');
  var image2 = document.getElementById('img_2');
  var image3 = document.getElementById('img_3');

  var newImageSrc;
  if (deviceWidth < 600) {
    image.setAttribute('src',"../assets/images/dmitriy-nushtaev-circle.jpg");
    image2.setAttribute('src',"../assets/images/charlie-green-circle.jpg");
    image3.setAttribute('src',"../assets/images/omar-lopez-circle.jpg");
    image.setAttribute('class','absolute top-2 right-2 w-24 h-24 rounded-full')
    image2.setAttribute('class','absolute top-2 right-2 w-24 h-24 rounded-full')
    image3.setAttribute('class','absolute top-2 right-2 w-24 h-24 rounded-full')
  } else {
    image.setAttribute ('src','../assets/images/dmitriy-nushtaev-tyv3bhizAx8-unsplash(1).jpg');
    image2.setAttribute ('src','../assets/images/charlie-green-3JmfENcL24M-unsplash.jpg');
    image3.setAttribute ('src','../assets/images/omar-lopez-Gx5-zf_HE9w-unsplash.jpg');
    image.setAttribute('class','w-40 sm:w-60')
    image2.setAttribute('class','w-40 sm:w-60')
    image3.setAttribute('class','w-40 sm:w-60')
  }
}

window.addEventListener('resize', replaceImage);

// Call the function initially to perform the image replacement on page load
replaceImage();




