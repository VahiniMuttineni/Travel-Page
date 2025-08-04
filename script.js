const places = [
  {
    name: "Hyderabad",
    region: "telangana",
    img: "https://s7ap1.scene7.com/is/image/incredibleindia/2-charminar_hyderabad_telangana-1-city-hero?qlt=82&ts=1742190636845"
  },
  {
    name: "Tirupati",
    region: "andhra pradesh",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Tirumala_090615.jpg"
  },
  {
    name: "Alleppey",
    region: "kerala",
    img: "https://content.jdmagicbox.com/comp/def_content/house-boats-on-hire/f72917cc62-house-boats-on-hire-5-vha64.jpg"
  },
  {
    name: "Goa",
    region: "goa",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyi8_9OHutdrIOZt8m9S2GwaN4VbJIWf3wpQ&s"
  },
  {
    name: "Taj Mahal",
    region: "uttar pradesh",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Taj-Mahal.jpg/640px-Taj-Mahal.jpg"
  },
  {
    name: "Manali",
    region: "himachal pradesh",
    img: "https://static.toiimg.com/thumb/115938897/Manali-in-winter.jpg?width=1200&height=900"
  },
  {
    name: "Arunachalam",
    region: "tamil nadu",
    img: "https://static.wixstatic.com/media/d37a82_f1e2d7a2e7004e4ca3b896cf5e12b876~mv2.jpg/v1/fill/w_814,h_1000,al_c,q_85,usm_0.66_1.00_0.01/d37a82_f1e2d7a2e7004e4ca3b896cf5e12b876~mv2.jpg"
  },
  {
    name: "Araku",
    region: "andhra pradesh",
    img: "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2022/05/02172006/Road-to-Araku.jpg"
  },
  {
    name: "Kuntala Falls",
    region: "telangana",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlOPgYnSV1i8rtqNvu525NL5AuX1WBXYR_vw&s"
  },
  {
    name: "Kodaikanal",
    region: "tamil nadu",
    img: "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2022/08/Mannavanur-Lake-Kodaikanal-Tamil-Nadu.jpg?resize=1200%2C900&ssl=1"
  },
  {
    name: "Bhadrachalam Temple",
    region: "telangana",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXd41X3bpsDMuHcwDCLthQb5oOPiMpMk8lBA&s"
  },
  {
    name: "Warangal Fort",
    region: "telengana",
    img: "https://media1.thrillophilia.com/filestore/ty54dofyd9z9qr0mjybft09zmb1i_1581421578_fort.jpg?w=400&dpr=2"
  }
];

const transport = [
  {
    name: "Metro",
    img: "https://img.staticmb.com/mbcontent/images/crop/uploads/2023/2/hyderabad-metro-phase-2_0_1200.jpg.webp"
  },
  {
    name: "Indian Railways",
    img: "https://etimg.etb2bimg.com/photo/117453520.cms"
  },
  {
    name: "Indigo Airways",
    img: "https://images.cnbctv18.com/uploads/2022/02/IndiGo.jpg?impolicy=website&width=1200&height=900"
  },
  {
    name: "Air India",
    img: "https://images.indianexpress.com/2024/11/Left-to-right-2024-11-11T113850.129.jpg"
  }
];

const food = [
  {
    name: "Dum Biryani",
    img: "https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg"
  },
  {
    name: "Rasmalai",
    img: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_960,w_960//InstamartAssets/rasmalai%20(1).webp?updatedAt=1727156174218"
  },
  {
    name: "Andhra Thali",
    img: "https://images.squarespace-cdn.com/content/v1/5f2fa039103c7a08856032c1/1601863773858-EDHX9C4V32M3OP2S5QPV/Adjustments.jpeg"
  },
  {
    name: "Kunafa",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSu6cdSETizQG5z_OHkdmE3nbkjNlx8jPKcw&s"
  }
];

const hotels = [
  {
    name: "Taj Falaknuma Palace",
    img: "https://images.trvl-media.com/lodging/4000000/3150000/3141200/3141149/b4c883d2.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill"
  },
  {
    name: "Hyatt Hyderabad Gachibowli",
    img: "https://gos3.ibcdn.com/7466095a733311e79a770a4cef95d023.jpg"
  },
  {
    name: "Manjeera Sarovar Premiere",
    img: "https://assets.simplotel.com/simplotel/image/upload/x_0,y_125,w_4000,h_2250,c_crop,q_80,fl_progressive/w_900,h_506,f_auto,c_fit/manjeera-sarovar-premiere-rajahmundry/HOTEL_DAY_VIEW_zwrvlv"
  },
  {
    name: "Novotel",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/97/13/5a/novotel-visakhapatnam.jpg?w=900&h=500&s=1"
  }
];

window.onload = () => {
  document.getElementById("cardContainer").innerHTML = "";
  document.getElementById("region").parentElement.parentElement.style.display = "none";
};

function showCategory(category) {
  const container = document.getElementById("cardContainer");
  const filter = document.getElementById("region").parentElement.parentElement;

  container.innerHTML = "";

  if (category === "places") {
    filter.style.display = "block";
    filterPlaces();
  } else {
    filter.style.display = "none";
    let data = [];
    if (category === "transport") data = transport;
    else if (category === "food") data = food;
    else if (category === "hotels") data = hotels;

    displaySimpleCards(data);
  }
}

function filterPlaces() {
  const selected = document.getElementById("region").value;
  const filtered = selected === "all" ? places : places.filter(p => p.region === selected);
  displayCards(filtered);
}

function displayCards(data) {
  const container = document.getElementById("cardContainer");
  container.innerHTML = data.map(place => `
    <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
      <div class="card h-100">
        <img src="${place.img}" class="card-img-top" alt="${place.name}">
        <div class="card-body">
          <h5 class="card-title">${place.name}</h5>
          <p class="card-text text-muted">Region: ${place.region.charAt(0).toUpperCase() + place.region.slice(1)}</p>
        </div>
      </div>
    </div>
  `).join('');
}

function displaySimpleCards(data) {
  const container = document.getElementById("cardContainer");
  if (data.length === 0) {
    container.innerHTML = "<p class='text-center'>No data available.</p>";
    return;
  }
  container.innerHTML = data.map(item => `
    <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
      <div class="card h-100">
        <img src="${item.img}" class="card-img-top" alt="${item.name}">
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
        </div>
      </div>
    </div>
  `).join('');
}
