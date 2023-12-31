let content = document.querySelector(".content");
let inouttext = document.querySelector(".txt");

let products = [];
fetch("products.json").then(response =>response.json()).then(data=>{
   products = data;
   addtohtml();
})

function load(){
  if (inouttext.value === "") {
    fetch("products.json").then(response =>response.json()).then(data=>{
      products = data;
      addtohtml();
   })
  }else{
products = products.filter((product)=> product.name.toLowerCase().includes(inouttext.value.toLowerCase()));
addtohtml();}
}

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
    let checkpos = carts.findIndex((value)=> value.id === id);
    if(carts.length < 1){
     carts = [
      { 
        id:id,
        quantity:1,
        thumb:products[id-1].thumb,
        price:products[id-1].price,
        name:products[id-1].name
      }
     ]
    
    }else if(checkpos < 0){
  carts.push({
    id:id,
    quantity:1,thumb:products[id-1].thumb,
    price:products[id-1].price,
    name:products[id-1].name


  });

    }else{
      carts[checkpos].quantity += 1;

    }



  
let cartlist = document.querySelector(".cartlist");
cartlist.innerHTML = "";
carts.forEach(cart=>{

let cartitem = document.createElement("div");
cartitem.classList.add("cartitem");
cartitem.innerHTML = `
<div class="imagecon">
<img src="${cart.thumb}" class="cartimg"/>
</div>
<div class ="cartdetails">
<h4 class="itemname">item_name: <span class="spn">${cart.name}</span></h4>
<h4 class="itemname" style="margin-top:12px">unit_price: <span class="spn">${cart.price}</span></h4>
<h4 class="itemname" style="margin-top:12px">item_quantity: <span class="spn">${cart.quantity}</span></h4>
<div class="left">
<input type="number" class="inp" value="${cart.quantity}"  id="${cart.id}" data-id="${cart.id}" oninput="addtocart()"/>
</div>
<h4 class="itemname" style="margin-top:16px;margin-left:18px;font-weight:150;color:red">total_price: <span class="spn" style="color:blue">${cart.quantity*cart.price}</span></h4>

</div>

`

cartlist.appendChild(cartitem);
let mystring = cart.id.toString();
let sltinput = document.getElementById(mystring);
sltinput.addEventListener("change", function(){
let id = sltinput.dataset.id;


let whereupdation = carts.findIndex((cart)=> cart.id == id);

if (carts[whereupdation].quantity === eval(sltinput.value)) {
  carts[whereupdation].quantity = eval(sltinput.value);
  
} else if(carts[whereupdation].quantity < eval(sltinput.value)) {
  carts[whereupdation].quantity +=  eval(sltinput.value)-carts[whereupdation].quantity;
  
}else{

  carts[whereupdation].quantity -= carts[whereupdation].quantity - eval(sltinput.value);
   

}
let ItemIndex = carts.findIndex((cart)=> cart.quantity < 1);
if(ItemIndex){

  carts.splice(0,ItemIndex);


}
})



})
























/*carts.forEach((val)=>{

let cartitem = document.createElement("div");
cartitem.classList.add("cartitem");
cartitem.innerHTML = `




`
cartlist.appendChild(cartitem)


})*/






  };

