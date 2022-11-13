
    let slideIndex = 0;
    showSlides();
    
    function showSlides() {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}
      slides[slideIndex-1].style.display = "block";
      setTimeout(showSlides, 2000); 
    }
    
    
    let data = [
      {
        "id": 41,
        "title": "Campus Sutra",
        "color": "Black",
        "gender": "Male",
        "category": "Jacket",
        "description": "Men Solid Bomber Jacket",
        "price": "1249",
        "rating": "3.9",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/10/23/81b33604-9e09-40c7-bcca-2e48e0dfa7aa1571822670368-1.jpg"
      },
      {
        "id": 42,
        "title": "HIGHLANDER",
        "color": "Black",
        "gender": "Male",
        "category": "Jacket",
        "description": "Men Padded Jacket",
        "price": "1199",
        "rating": "4",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15835932/2021/10/22/76522080-743c-48b3-8dc5-3b4a6b15d1cf1634909782241HIGHLANDERMenBlackColourblockedPufferJacket1.jpg"
      },
      {
        "id": 43,
        "title": "Domyos By Decathlon",
        "color": "Black",
        "gender": "Male",
        "category": "Jacket",
        "description": "Lightweight Training",
        "price": "956",
        "rating": "4.1",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/6/9/35c16521-1708-4c8d-9ea3-c67a1cea93a91623212921914-1.jpg"
      },
      {
        "id": 44,
        "title": "Campus Sutra",
        "color": "Blue",
        "gender": "Male",
        "category": "Jacket",
        "description": "Men Solid Varsity Jacket",
        "price": "599",
        "rating": "3.9",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/6996811/2018/7/23/2058ea63-57d1-461e-8f82-ab16617b39da1532339067981-Campus-Sutra-Full-Sleeve-Solid-Men-Jacket-6361532339067785-1.jpg"
      },
      {
        "id": 45,
        "title": "HIGHLANDER",
        "color": "Blue",
        "gender": "Male",
        "category": "Jacket",
        "description": "Men Solid Denim Jacket",
        "price": "1159",
        "rating": "4.6",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/10/26/e327db60-12a2-4d81-a404-a81ac8c1ed291572062812112-1.jpg"
      },
      {
        "id": 46,
        "title": "WRONG",
        "color": "Blue",
        "gender": "Male",
        "category": "Jacket",
        "description": "Men Slim Fit Bomber Jacket",
        "price": "1999",
        "rating": "4.8",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10187067/2019/10/22/34b7f065-33f9-4665-9015-1329eb1762ab1571725612018-WROGN-Men-Navy-Blue-Solid-Slim-Fit-Bomber-Jacket-15515717256-6.jpg"
      },
      {
        "id": 47,
        "title": "Yuuki",
        "color": "Blue",
        "gender": "Male",
        "category": "Jacket",
        "description": "Men Lightweight Sporty Jacket",
        "price": "1299",
        "rating": "3.9",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16599628/2021/12/23/48241942-218b-4be6-a0ba-4da5fb9fbe461640258132026Jackets1.jpg"
      },
      {
        "id": 48,
        "title": "WRONG",
        "color": "Brown",
        "gender": "Male",
        "category": "Jacket",
        "description": "Men Solid Tailores Jacket",
        "price": "2159",
        "rating": "4.2",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/h_280,q_90,w_210/v1/assets/images/1845112/2020/1/29/36abaaf7-4ba3-4714-8e0d-84034313fe291580299535086-RDSTR-Men-Brown-Solid-Biker-Jacket-1791580299532304-1.jpg"
      },
      {
        "id": 49,
        "title": "HIGHLANDER",
        "color": "Brown",
        "gender": "Male",
        "category": "Jacket",
        "description": "Men Solid Bomber Jacket",
        "price": "1239",
        "rating": "3.8",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/h_280,q_90,w_210/v1/assets/images/productimage/2019/11/22/fa4acb33-cd26-478a-b10a-356e802ac6951574420102977-1.jpg"
      },
      {
        "id": 50,
        "title": "HIGHLANDER",
        "color": "Brown",
        "gender": "Male",
        "category": "Jacket",
        "description": "Men Solid Biker Jacket",
        "price": "1639",
        "rating": "4.3",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10773542/2020/11/18/bf554e45-d9e9-488f-b003-1d870a2218131605695911454HIGHLANDERMenBrownSolidBikerJacket1.jpg"
      },
      {
        "id": 51,
        "title": "Leather Retail",
        "color": "Brown",
        "gender": "female",
        "category": "Jacket",
        "description": "Solid Leather Jacket",
        "price": "2699",
        "rating": "4.4",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14455420/2021/6/23/37bff78e-cce8-46de-9648-9d5be1d0eaf51624446043415-Leather-Retail-Women-Brown-Solid-Lightweight-Leather-Jacket--1.jpg"
      },
      {
        "id": 52,
        "title": "URBANIC",
        "color": "Brown",
        "gender": "female",
        "category": "Jacket",
        "description": "Longline Tailored Jacket",
        "price": "2034",
        "rating": "3.6",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15851260/2021/12/3/450816b9-e39b-4876-b77d-e16a87e8adcb1638506617149URBANICWomenBrownSolidLonglineTailoredJacket1.jpg"
      },
      {
        "id": 53,
        "title": "Woods",
        "color": "Brown",
        "gender": "female",
        "category": "Jacket",
        "description": "Women Striped Bomber Jacket",
        "price": "1989",
        "rating": "4.6",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16491532/2021/12/13/eb959844-7274-4d95-8cab-61a57f4bce961639371856698WoodsWomenBrownStripedLeatherWaterResistantBomberwithEmbroid1.jpg"
      },
      {
        "id": 54,
        "title": "Tokyo Talkies",
        "color": "Black",
        "gender": "female",
        "category": "Jacket",
        "description": "Puffer Jacket",
        "price": "1099",
        "rating": "4.1",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15927640/2021/10/26/4cd42dc9-d96a-4e2e-89eb-6df0e8b393c81635232658135TokyoTalkiesWomenBlackPufferJacket1.jpg"
      },
      {
        "id": 55,
        "title": "Leather Retail",
        "color": "Black",
        "gender": "female",
        "category": "Jacket",
        "description": "Solid Biker Jacket",
        "price": "2599",
        "rating": "4.3",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12635674/2020/10/13/2a2b4c37-f29f-448b-b03b-e23df37e1b8b1602565065693TopsakheriWomenTopsakheriWomenTrousersakheriWomenTopsakheriW1.jpg"
      },
      {
        "id": 56,
        "title": "DOOR74",
        "color": "Black",
        "gender": "female",
        "category": "Jacket",
        "description": "Checked Tailored Jacket",
        "price": "899",
        "rating": "3.6",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/1/6/bcf54495-5146-4327-919f-998a2456bf6d1609929038028-1.jpg"
      },
      {
        "id": 57,
        "title": "Tokyo Talkies",
        "color": "Black",
        "gender": "female",
        "category": "Jacket",
        "description": "Women Puffer Jacket",
        "price": "930",
        "rating": "4.2",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15982502/2021/11/2/a1c6206b-6bee-4659-90e4-26b3351e63dd1635838052135TokyoTalkiesWomenBlueCropPaddedJacketwithPatchwork1.jpg"
      },
      {
        "id": 58,
        "title": "Roadster",
        "color": "Blue",
        "gender": "female",
        "category": "Jacket",
        "description": "",
        "price": "919",
        "rating": "4.5",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12178110/2020/9/15/32a696c1-e454-46bd-ab81-2705423e363e1600147562895-Roadster-Women-Jackets-2251600147560316-1.jpg"
      },
      {
        "id": 59,
        "title": "Mast & Harbour",
        "color": "Blue",
        "gender": "female",
        "category": "Jacket",
        "description": "Faded Denim Jacket",
        "price": "1014",
        "rating": "4.4",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15507910/2021/12/15/abf718e5-67b3-4038-9e6f-9fba15e96d7c1639552195152-Mast--Harbour-Women-Jackets-9551639552194481-1.jpg"
      },
      {
        "id": 60,
        "title": "Honey bt Pantaloons",
        "color": "Blue",
        "gender": "female",
        "category": "Jacket",
        "description": "Parka Jacket",
        "price": "1574",
        "rating": "4.5",
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16557204/2021/12/20/cef86fd8-f3de-4b67-8e71-038272b489a41639988369497HoneybyPantaloonsWomenNavyBlueColourblockedLonglineParkaJack1.jpg"
      }
    ];
    let cartItems=JSON.parse(localStorage.getItem("cartProducts")) || [];

     function displayCard(data){
      document.querySelector("#container").innerHTML="";
       data.forEach(elem => {
  
      let div=document.createElement("div");
  
      let imageProd = document.createElement("img");
      imageProd.setAttribute("src",elem.image)
  
      let des=document.createElement("p")
      des.innerText=elem.description
  
      let cate = document.createElement("p")
      cate.innerText=elem.gender
  
      let title=document.createElement("p");
      title.innerText=elem.title;
  
      let cost=document.createElement("h3");
      cost.innerText= "Rs"+" "+elem.price
  
      let btn=document.createElement("button");
      btn.innerText="Add to card"
  
      btn.addEventListener("click",function(){
          cartItems.push(elem);
          localStorage.setItem("cartProducts",JSON.stringify(cartItems));
      })
      div.append(imageProd,des,cate,title,cost,btn);
  
      document.querySelector("#container").append(div);
        
    });
   }
   displayCard(data);
