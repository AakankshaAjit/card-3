

const API ="https://dummyjson.com/products/"


const fetchData =async()=>{

    const res=  await fetch(API)
    const data  = await res.json()
    console.log(data)
const AllProducts = data.products

for(let i=0 ; i<AllProducts.length ; i++)
{
const ProductName = AllProducts[i].title
const ProductPrice = AllProducts[i].price
const ProductImage = AllProducts[i].thumbnail
const myDiv = document.getElementById('box')
const card = document.createElement('div')
card.classList.add('card')

const MyProductName = document.createElement('span')
MyProductName.innerText=ProductName;
const MyProductPrice = document.createElement('span')
MyProductPrice.innerText=ProductPrice;
const MyProductImage = document.createElement('img')
MyProductImage.src=ProductImage


card.append(MyProductImage, MyProductPrice, MyProductName)

myDiv.append(card)






    

}



}
fetchData()

function submitMyForm(){


    const myEmail = document.getElementById('mail').value
    const mypassword = document.getElementById('pass').value

    if(myEmail==="tasaiaakanksha851@gmail.com"&& mypassword==="123456"){
        localStorage.setItem('auth',true)
        console.log('success')
        window.location.href="index.html"
         

}
else{
    alert('wrong credentials')
    
}
}