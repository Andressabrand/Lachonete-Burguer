const list = document.querySelector("ul")
const buttonShowAll = document.querySelector(".show-all")
const buttonMap = document.querySelector(".map-all")
const sumAll = document.querySelector(".redunce-all")
const buttonFilter = document.querySelector(".filter-all")





function showAll(productArray) {
    let myLi = ""
    productArray.forEach((product) => {
        myLi = myLi +

            `
        
                <li>
                    <img src="${product.src}">
                    <p> ${product.name}</p>
                    <p class="price-item"> R$ ${product.price}</p>
                 </li>
        
        
        
        `
    })

    list.innerHTML = myLi

}


function mapAll() {
    const menu = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,




    }))
    showAll(menu)
}


function sumAllItems() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
    console.log(totalValue)
  
    

    list.innerHTML =
        `
    <li>
    
    <p> "O Valor total é de ${totalValue}"</p>


   </li>


    
    
    `
console.log(totalValue)

}

function smallFilter (){
const yesVegan = menuOptions.filter((product)=> product.vegan) 



showAll(yesVegan)



}









buttonShowAll.addEventListener("click", () => showAll(menuOptions))
buttonMap.addEventListener("click", mapAll)
sumAll.addEventListener("click", sumAllItems)
buttonFilter.addEventListener("click", smallFilter)