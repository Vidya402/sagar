// generate html using js
// approch 1
let cards = '<section>';

for(let i=0; i<products.length; i++){
    cards += '<figure>';
    cards += '<img src="../images/'+products[i].imgName+'">';
    cards += '<figcaption>'+products[i].name+'</figcaption>';
    cards += '<figcaption>'+products[i].oldPrice+'</figcaption>';
    cards += '<figcaption>'+products[i].newPrice+'</figcaption>';
    cards += '</figure>';
}
  

cards += '</section>';

// console.log(cards);
document.getElementById("approach1").innerHTML = cards;



// approch 2

let newCard = '<section>';
for(let i=0; i<products.length; i++){
        newCard += `
            <figure>
                <img src="../images/${products[i].imgName} ">
                <figcaption>${products[i].name}</figcaption>
                <figcaption>Oldprice : <del>${products[i].oldPrice}</del></figcaption>
                <figcaption>newprice : ${products[i].newPrice}</figcaption>
            </figure>
        
        `;
}
newCard += '</section>';

document.getElementById('approach2').innerHTML = newCard;