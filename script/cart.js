let cartItems1=JSON.parse(localStorage.getItem("products"));
    
   //showCard(cartItems1)
   
   function showCard(cartItems1){
    document.querySelector("#cont2").innerHTML="";
    cartItems1.forEach(elem => {
    let div=document.createElement("div");

    let imageProd = document.createElement("img");
    imageProd.setAttribute("src",elem.Image)

    let des=document.createElement("p")
    des.innerText=elem.Description;

    let title=document.createElement("p");
    title.innerText=elem.Title;

    let cost=document.createElement("h3");
    cost.innerText= "Rs"+" "+elem.Price

   div.append(imageProd,des,title,cost);

     document.querySelector("#cont2").append(div);
      
   });
 }
 showCard(cartItems1);


    let cartItems=JSON.parse(localStorage.getItem("cartProducts")) || [];
       //console.log(cartItems);

      // displayCard(cartItems);
    function displayCard(cartItems){
      document.querySelector("#container").innerHTML="";
       cartItems.forEach(elem => {
  
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
      cost.innerText="Rs"+" "+elem.price
  
      div.append(imageProd,des,cate,title,cost);
  
      document.querySelector("#container").append(div);
        
    });
   }
   displayCard(cartItems);
   
    let cost1 = cartItems1.reduce((acc,ele) => acc + Number(ele.Price),0);
    
    let cost2 = cartItems.reduce((acc,ele) => acc + Number(ele.price),0);

    let finalcost =cost2+cost1;
    console.log(finalcost)

    document.querySelector("h1").innerText = "Total price of cart ="+" "+"Rs"+" "+ finalcost;
