let container = document.querySelector(".cardContainer1");
let page2 = document.querySelector(".cardContainer2");
let page3 = document.querySelector(".cardContainer3");
let page4 = document.querySelector(".cardContainer4");
let page5 = document.querySelector(".cardContainer5");
let allSlides = document.querySelectorAll(".sliderBox");
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");
let arrayDirectory = [];
let pageArray2 = [];
let pageArray3 = [];
let pageArray4 = [];
let pageArray5 = [];

class User {
  constructor(username, position, number, email, businesses, src) {
    this.username = username;
    this.number = number;
    this.email = email;
    this.businesses = businesses;
    this.position = position;
    this.src = src;
  }
}

// users

let user1 = new User(
  "Olayinka Akindayomi",
  "Founder and Service Director",
  " +234 (0) 803 304 7342 ",
  "commpaed@yahoo.com",
  "Healthcare, education and social Care, for children and young adults with Developmental Disabilities"
);

let user2 = new User(
  "Adebayo Adetokunbo",
  "Managing Director",
  "+234 (0) 706 885 3315",
  "toks@marinahrsolutions.com",
  "Recruitment",
  "adebayo"
);

let user3 = new User(
  "Rapheal Adebiyi",
  "",
  "+234 (0) 809 439 2069",
  "r.adebiyi@tesinc.co.uk",
  ""
);

let user4 = new User(
  "Lola Adefope",
  "Managing Director",
  "+234 (0) 163 16102, 447940289395 ",
  "lola.adefope@btmlimited.net",
  "Travel, Tourism & Aviation",
  "lola"
);

let user5 = new User(
  "Seleem Adegunwa",
  "Managing Director",
  "+234 (0) 802 315 2504",
  "seleem.adegunwa@ritefoodsltd.com",
  "Food and Beverages",
  "sadegunwa"
);

let user6 = new User(
  "Aderemi Adejumo",
  "Managing Director",
  " +234 (0) 706 443 6923",
  "radejumo@hotmail.com",
  "SME",
  "dadejumo"
);

let user7 = new User(
  "Charles Adeyemi",
  "Managing Partner",
  "+234 (0)  809 663 3814",
  "charles@chancerystrandandlyon.associates",
  "Law Legal Services Consultancy"
);

let user8 = new User(
  "Pamela Ajayi",
  "Managing Director",
  "+234 (0) 802 315 7937",
  "pamajayi101@gmail.com",
  "Healthcare- Pathology services",
  "pamela"
);

let user9 = new User(
  "Femi Agunbiade",
  " Partner",
  "+234 (0) 806 502 5204",
  "fmagunbiade@gmail.com",
  "Legal",
  "fagun"
);

let user10 = new User(
  "Anthony Ajose",
  "",
  "+234 (0) 706 885 3315",
  "anthony@ajose.net",
  "",
  "panthony"
);

let user11 = new User(
  "Antonia Akinlagun",
  "Managing Director",
  "  +234 (0) 703 667 7798,   447943740665",
  "antonia@mosaicmanagementltd.com",
  "Facilities Management",
  "pantonia"
);

let user12 = new User(
  "Ernest Akinlola",
  " CEO/Founder of both ",
  "+234 (0) 809 944 0060,  447958517882",
  " ernest.akinlola@right-instinct.com",
  "Business Consulting",
  "eakin"
);

let user13 = new User(
  "Dele Aloko",
  "CEO/Lead Consultant",
  "+234 (0) 803 309 5035",
  "dele_aloko@yahoo.com",
  "Human Resources Management, Talent Management, Recruiting, Training & Development, HR Outsourcing",
  "daloko"
);

let user14 = new User(
  "Smoky Ashton",
  "Managing Director",
  "+234 (0) 903 718 0422, +234 (0) 809 949 5600 ",
  "smoky.ashton@eurchem-industries.com",
  "Paints and Coatings, Oil & Gas, Food & Beverage, Tanneries",
  "smoky"
);

let user15 = new User(
  "Neale Atkinson",
  "Executive Director",
  " +234 (0) 703 961 5612",
  "neale.atkinson@btinternet.com",
  "Energy Efficiency, Alternate Energy",
  "natkin"
);

let user16 = new User(
  "Robert Bamgboye",
  "Founder and CEO",
  "+234 (0) 803 314 2038",
  "bbamgboye@current-link.com",
  "Nigeria’s Premier provider of technology to the hospitality industry",
  "robam"
);

let user17 = new User(
  "Nicholas Barrett",
  "Headmaster",
  "+234 (0) 909 006 49170, 447465797888 ",
  "nickbarrett@hotmail.com",
  "Education"
);

let user18 = new User(
  "Tim Beighton",
  " Founder/CEO",
  " +234 (0) 809 400 0065 ,  447465797888",
  "Tim.b@zakisolutions.com",
  "Real Estate, Mining, Agriculture, Finance, FMCG",
  "timb"
);

let user19 = new User(
  "Darren Bennett-Voci",
  "MD",
  "+234 (0) 068 853 315",
  "dbennett-voci@frigoglass.com",
  "Glass Containers / Crown Corks / Plastic Crates (for returnable glass bottles)",
  "daben"
);

let user20 = new User(
  "Dr Glenn Bestall",
  "Business Development Executive",
  "+234 (0) 807 879 3842",
  "drglennbestall@hotmail.com",
  "Oil/gas sector supply and procurement specialists and latterly, 'Energy from Waste project development.",
  "glenbes"
);

let user21 = new User(
  "Folashade Braithwaite",
  "MD",
  "+234 (0) 772 460 1737",
  " Fbraith@yahoo.co.uk",
  "",
  ""
);

let user22 = new User(
  "Dr Ola Brown",
  "Founder",
  " +234 (0) 706 920 1299",
  "drolaflyingdrs@gmail.com",
  "Medical",
  ""
);

let user23 = new User(
  "Collin Butt",
  "Owner. Managing Consultant",
  "+234 (0) 8035 352 331 ",
  "collin.butt@gmail.com",
  "All",
  ""
);

let user24 = new User(
  "John Butter",
  "",
  "+234 (0) 706 620 7155",
  "johnbutter@live.co.uk",
  "",
  ""
);

let user25 = new User(
  "Peter Cameron",
  "Founder and Managing Director",
  "+234 (0) 814 647 8985, 447775653832",
  "petercameron@energymarketsglobal.eu",
  "Energy, Gas, LNG,Power, Economics,Consultancy",
  "peteca"
);

let user26 = new User(
  "Christopher Campos",
  "",
  " +234 (0) 810 637 6969",
  "chris.p.campos@gmail.com",
  "Oil and gas",
  ""
);

let user27 = new User(
  "Lester Clark",
  "",
  "+234 (0) 906 299 8170",
  "lesterclark1@gmail.com",
  "",
  "lescla"
);

let user28 = new User(
  "Adrian Clews",
  "Managing Director",
  "+234 (0) 805 165 1578",
  "aclews@hinckley.com.ng",
  "Ewaste Recycling, It Support and Services",
  ""
);

let user29 = new User(
  "Michael Cockman",
  "General Manager",
  "+234 (0) 904 451 8862, +234 (0) 816 609 9598",
  "mike_cockman@aol.com",
  "Oil & Gas Services",
  "mcock"
);

let user30 = new User(
  "Simon Conway-Jarrett",
  "Director",
  " +234 (0) 803 718 7155 , +44 7429 813806 ",
  "s.conway-jarrett@ecomtrading.eu",
  "cocoa beans processing,cocoa products export",
  "simco"
);

let user31 = new User(
  "Ted Coventry",
  "Director",
  "+234 (0) 803 303 3535",
  "ted@ttsltd.co.uk",
  "Food and beverage, packaging",
  "tedco"
);

let user32 = new User(
  "Peter Crabb",
  "Nigeria Territory Manager",
  "+234 (0) 806 000 0487 , +234 (0) 802 647 2012 ",
  "coronis_nigeria@yahoo.com",
  "Medical Insurance",
  "pcrab"
);

let user33 = new User(
  "Guy Czartoryski",
  "Head of Research",
  "+234 (0) 706 885 3315",
  "g.czartoryski@mail.com",
  "Financial Services",
  ""
);

let user34 = new User(
  "Marie-Claire Daaboul",
  " ",
  "+234 (0) 909 444 4449",
  "Daaboul@btinternet.com",
  "",
  ""
);

let user35 = new User(
  "Mark Daoud",
  "Managing Director",
  "+234 (0) 909 199 9800",
  "mark.daoud@amglogistics.com",
  "Logistics",
  ""
);

let user36 = new User(
  "Alan Davies",
  " Chairman",
  " +234 (0) 909 999 9417",
  "alandavies@jamescubittgroup.com",
  "Real Estate, Architectural Consultancy, Construction",
  ""
);

let user37 = new User(
  "Garry Denis",
  "",
  " +234 (0) 706 418 1169",
  "bushgarry@gmail.com",
  "",
  ""
);

let user38 = new User(
  "Leslie Donnelly",
  "Owner/Chairman/ CEO",
  "+234 (0) 803 301 8083",
  "lbdlagos@yahoo.com",
  "Oilfield supplies",
  ""
);

let user39 = new User(
  "Peter Dugdale",
  "Managing Director",
  " +234 (0) 806 018 0786",
  "peterdugdale@hotmail.com",
  "Verification",
  ""
);

let user40 = new User(
  "Abraham Eddie",
  "Principle Consultant",
  "+234 (0)  808 610 1577",
  "eabraham@solutaxconsulting.com",
  "Finance",
  "edabred"
);

let user41 = new User(
  "Mark Edwards",
  " Readymix Operations manager",
  "+234 (0) 708 860 4701",
  "mark.reg.edwards@gmail.com",
  "Construction materials",
  ""
);

let user42 = new User(
  "Colin Egemonye",
  " Managing Partner",
  "+234 (0)  808 336 3327",
  "colin@goldsmithsllp.com",
  "Legal",
  "colegem"
);

let user43 = new User(
  "Margaret Ekerete",
  "Managing Director",
  "+234 (0) 802 303 5763",
  " m.ekerete@networktravels.net",
  "Domestic and International Travel Management",
  ""
);

let user44 = new User(
  "Roger Ellender",
  "Managing Director",
  "+234 (0) 703 417 5913",
  "roger.ellender@yahoo.com",
  "Financial Institutions",
  ""
);

let user45 = new User(
  "Angela Emuwa",
  "Chairman",
  "+234 (0) 803 301 1653",
  "aemuwa@gmail.com",
  "Media - Newspaper publishing , Property Investment , Printing",
  ""
);

let user46 = new User(
  "Babatunde Epega",
  " CEO",
  "+234 (0) 816 084 1180",
  " Baba@emc3.com",
  "Marketing & Events",
  "batep"
);

let user47 = new User(
  "Inem Essien",
  "CEO",
  "+234 (0)   806 312 6026",
  "Inem.Essien@ng.is.co.za",
  "ICT and telecoms",
  "inemes"
);

let user48 = new User(
  "Christopher Evans",
  "",
  "+234 (0) 813 523 8673, 447796393738",
  "cpevans.t21@btinternet.com",
  "Aviation & HSE/Safety",
  ""
);

let user49 = new User(
  "Stanley Evans",
  " Commercial Director",
  "+234 (0) 818 234 3889 ",
  " stanleyevans4@aol.com",
  "Transport",
  "stanev"
);

let user50 = new User(
  "Pelumi Fadairo",
  " Consultant - Marketing & Strategy",
  "+234 (0) 809 949 0314",
  "pelfad@gmail.com",
  "Marketing , Professional Services , Media Communications Strategy Consulting",
  ""
);

// let user41 = new User('Anthony Ajose' , '' ,  '+234 (0)','anthony@ajose.net', '', '')

// let user41 = new User('Anthony Ajose' , '' ,  '+234 (0)','anthony@ajose.net', '', '')

// let user41 = new User('Anthony Ajose' , '' ,  '+234 (0)','anthony@ajose.net', '', '')

// let user41 = new User('Anthony Ajose' , '' ,  '+234 (0)','anthony@ajose.net', '', '')

// let user41 = new User('Anthony Ajose' , '' ,  '+234 (0)','anthony@ajose.net', '', '')

// let user41 = new User('Anthony Ajose' , '' ,  '+234 (0)','anthony@ajose.net', '', '')

// let user41 = new User('Anthony Ajose' , '' ,  '+234 (0)','anthony@ajose.net', '', '')

// let user41 = new User('Anthony Ajose' , '' ,  '+234 (0)','anthony@ajose.net', '', '')

// let user41 = new User('Anthony Ajose' , '' ,  '+234 (0)','anthony@ajose.net', '', '')

// let user41 = new User('Anthony Ajose' , '' ,  '+234 (0)','anthony@ajose.net', '', '')

// let user41 = new User('Anthony Ajose' , '' ,  '+234 (0)','anthony@ajose.net', '', '')

// let user41 = new User('Anthony Ajose' , '' ,  '+234 (0)','anthony@ajose.net', '', '')

arrayDirectory.push(
  user1,
  user2,
  user3,
  user4,
  user5,
  user6,
  user7,
  user8,
  user9,
  user10
);
pageArray2.push(
  user11,
  user12,
  user13,
  user14,
  user15,
  user16,
  user17,
  user18,
  user19,
  user20
);
pageArray3.push(
  user21,
  user22,
  user23,
  user24,
  user25,
  user26,
  user27,
  user28,
  user29,
  user30
);
pageArray4.push(
  user31,
  user32,
  user33,
  user34,
  user35,
  user36,
  user37,
  user38,
  user39,
  user40
);
pageArray5.push(
  user41,
  user42,
  user43,
  user44,
  user45,
  user46,
  user47,
  user48,
  user49,
  user50
);

//  pageArray4

function sortNames(ar) {
  ar.sort((a, b) => {
    if (a.username > b.username) {
      return 1;
    } else {
      return -1;
    }
  });
}

sortNames(arrayDirectory);
sortNames(pageArray2);
sortNames(pageArray4);
sortNames(pageArray5);

function createUser() {
  for (let i = 0; i < arrayDirectory.length; i++) {
    let eachUser = arrayDirectory[i].username;
    let position = arrayDirectory[i].position;
    let userNumber = arrayDirectory[i].number;
    let userEmail = arrayDirectory[i].email;
    let company = arrayDirectory[i].businesses;
    let photo = arrayDirectory[i].src;
    addNewUser(
      eachUser,
      position,
      userNumber,
      userEmail,
      company,
      container,
      photo
    );
  }
}

function createpage2() {
  for (let i = 0; i < pageArray2.length; i++) {
    let eachUser = pageArray2[i].username;
    let position = pageArray2[i].position;
    let userNumber = pageArray2[i].number;
    let userEmail = pageArray2[i].email;
    let company = pageArray2[i].businesses;
    let photo = pageArray2[i].src;
    addNewUser(
      eachUser,
      position,
      userNumber,
      userEmail,
      company,
      page2,
      photo
    );
  }
}

function createpage3() {
  for (let i = 0; i < pageArray3.length; i++) {
    let eachUser = pageArray3[i].username;
    let position = pageArray3[i].position;
    let userNumber = pageArray3[i].number;
    let userEmail = pageArray3[i].email;
    let company = pageArray3[i].businesses;
    let photo = pageArray3[i].src;
    addNewUser(
      eachUser,
      position,
      userNumber,
      userEmail,
      company,
      page3,
      photo
    );
  }
}

function createpage4() {
  for (let i = 0; i < pageArray4.length; i++) {
    let eachUser = pageArray4[i].username;
    let position = pageArray4[i].position;
    let userNumber = pageArray4[i].number;
    let userEmail = pageArray4[i].email;
    let company = pageArray4[i].businesses;
    let photo = pageArray4[i].src;
    addNewUser(
      eachUser,
      position,
      userNumber,
      userEmail,
      company,
      page4,
      photo
    );
  }
}

function createpage5() {
  for (let i = 0; i < pageArray5.length; i++) {
    let eachUser = pageArray5[i].username;
    let position = pageArray5[i].position;
    let userNumber = pageArray5[i].number;
    let userEmail = pageArray5[i].email;
    let company = pageArray5[i].businesses;
    let photo = pageArray5[i].src;
    addNewUser(
      eachUser,
      position,
      userNumber,
      userEmail,
      company,
      page5,
      photo
    );
  }
}

createpage5();

createpage4();

createpage3();

createpage2();

createUser();

function addNewUser(
  name,
  position,
  number,
  email,
  company,
  containerBox,
  photo
) {
  let card = document.createElement("div");
  card.setAttribute("class", "card-container row");
  let template = `  

    <img class = "profileImg col-lg-3" src='/img/membersImages/${photo}.jpg'alt="">
     
     <div class="details col-lg-9">
        <h2 class="nameTitle">${name} , ${position}</h2> 
         <p class="tels">${number} , <a href="#">${email}</a> </p>
         <p class="sector tels">Business Sectors</p>
         <p class="companies tels">${company}</p>
      </div>
     `;

  card.innerHTML = template;

  containerBox.appendChild(card);
}

// navigating & slides

let count = 0;
let newCount = 0;

allSlides.forEach((slide) => {
  slide.style.display = "none";
});

function showSlide() {
  if (count <= 0) {
    count = 0;
    nextBtn.disabled = false;
    prevBtn.disabled = true;
  }
  if (count > allSlides.length - 1) {
    // count = 0
    count = allSlides.length - 1;
    nextBtn.disabled = true;
    prevBtn.disabled = false;
  }

  allSlides[newCount].style.display = "none";
  allSlides[count].style.display = "initial";

  newCount = count;
}

allSlides[0].style.display = "initial";

nextBtn.addEventListener("click", () => {
  prevBtn.disabled = false;
  count++;
  showSlide();
});

prevBtn.addEventListener("click", () => {
  nextBtn.disabled = false;
  count--;
  showSlide();
});

// swipper

function swipper() {
  var swiper = new Swiper(".swiper-container3", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
}
swipper();
