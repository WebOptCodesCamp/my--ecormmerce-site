let content = document.querySelector(".content");
let products = [
  {
  
      "id":1,
  "name":"green sport shoe",
  "price":1500,
      "category":"shoe",
       "thumb":"images/products/shoe1-1.jpg"
  },
  {
  
      "id":2,
  "name":"brown sport shoe",
  "price":1750,
      "category":"shoe",
       "thumb":"images/products/shoe1-3.jpg"
  },{
  
      "id":3,
  "name":"red nike shoe",
  "price":1450,
      "category":"shoe",
       "thumb":"images/products/shoe1.jpg"
  },{
  
      "id":4,
  "name":"laptop dell",
  "price":24560,
      "category":"electronic",
       "thumb":"images/products/electronic1.jpg"
  },
  {
  
      "id":5,
  "name":"samsung smartphone",
  "price":18960,
      "category":"electronic",
       "thumb":"images/products/electronic2.jpg"
  },
  {
  
      "id":6,
  "name":"smart earphones",
  "price":3670,
      "category":"electronic",
       "thumb":"images/products/electronic3.jpg"
  }
  
  
  
  ];



const addtohtml = () =>{
content.innerHTML = "";

    
console.log(products);
products.forEach(product=>{

let item  = document.createElement("div");
item.classList.add("item");
item.dataset.id = product.id;
item.innerHTML = `

<img src="${product.thumb}" alt="" class="cover">
  <div class="details">
    <h3 class="item-ti">${product.name}shoe</h3>
    <h4 class="price">price: <span>${product.price} ksh</span></h4>
    <button class="add-cart" data-id="${product.id}">add-cart</button>
  </div>

`;
content.appendChild(item);

}
)

    /*const loading = document.createElement("h5");
    loading.style.color = "green";
    loading.style.textAlign ="center";
    loading.style.fontFamily ="monospace";
    loading.style.fontWeight = 900;*/

    
      

}

addtohtml();

content.addEventListener("click",(e)=>{
  let position = e.target;
  if(position.classList.contains("add-cart")){
  let ids = position.dataset.id;
  addtocart(ids)
  
  
  }
  
  });



  let carts = [];


  const addtocart = (id) =>{
    let checkpos = carts.findIndex((value)=> value.id == id);
    if(carts.length < 1){
     carts = [
      { 
        id:id,
        quantity:1
      }
     ]
    
    }else if(checkpos < 0){
  carts.push({
    id:id,
    quantity:1
  });

    }else{
      carts[checkpos].quantity += 1;

    }

  displaycart(carts)
  };

const  displaycart = (mycart) =>{
let cartlist = document.querySelector(".cartlist");

mycart.forEach((val)=>{
  let pos = products.findIndex((prod)=>prod.id == val.id );

let cartitem = document.createElement("div");
cartitem.classList.add("cartitem");
cartitem.innerHTML = `
<div class="imagecon">
<img src="${products[pos].thumb}" class="cartimg"/>
</div>
<div class ="cartdetails"></div>



`
cartlist.appendChild(cartitem)


})




}


