// let carts = document.querySelectorALL('.add-cart');

// for (let i=0; i < carts.length; i++) {
//    carts[i].addEventListener('click', () => {
//     cartNumbers();
//    })
// }

// function cartNumbers() {
// localStorage.setItem('cartNumbers', 1)
// }






// Cart.on('added', function(argumentsObject) {
//    alert("You've added " + argumentsObject.item.quantity + " item(s).");
//  });

//  Cart.addItem({
//    id: '123456',
//    price: 20,
//    quantity: 1,
//    label: 'TURTLE',
//    image: "./img/dusan-veverkolog-_NgSXe2cJPk-unsplash.jpg"
//  });

var shop = [{
    title: 'REPTILES',
    image: "./img/dusan-veverkolog-_NgSXe2cJPk-unsplash.jpg",
    price: '20.00',
    description: "Small Turtles  All welcome!"
},
{
    title: 'REPTILES2',
    image: './img/meg-jerrard-shBI86pfie0-unsplash.jpg',
    price: '2000.0',
    description: " Pet Gator "
},
{
    title: 'REPTILES3',
    image: './img/snake.jpg',
    price: '200.0',
    description: "Pet Snake"
}, {
    title: 'REPTILES4',
    image: './img/wallace-heng-njsOI5hXeRQ-unsplash.jpg',
    price: '100.0',
    description: "Pet Frog "
}, {
    title: 'REPTILE5',
    image: './img/jean-daniel-photography-MvlOfRZkgKg-unsplash.jpg',
    price: '75.0',
    description: "Pet Lizard"
}, {
    title: 'Cat1',
    image: './img/manja-vitolic-gKXKBY-C-Dk-unsplash.jpg',
    price: '20.0',
    description: "W/B/CAT"
}, {
    title: 'Cat2',
    image: "./img/amber-kipp-75715CVEJhI-unsplash.jpg",
    price: '200.0',
    description: "Orange/CAT"
}, {
    title: 'Cat3',
    image: "./img/alexander-london-mJaD10XeD7w-unsplash (1).jpg",
    price: '200.0',
    description: "Brown/CAT"
}, {
    title: 'Cat4',
    image: "./img/hang-niu-Tn8DLxwuDMA-unsplash.jpg",
    price: '150.0',
    description: "White/Kitten"
}, {
    title: 'Cat5',
    image: "./img/loan-7AIDE8PrvA0-unsplash.jpg",
    price: '75.0',
    description: "Yawn/Kitten"
}, {
    title: 'Beta',
    image: "./img/worachat-sodsri-nCz_ZgnbtaE-unsplash.jpg",
    price: '20.0',
    description: "Fish"
}, {
    title: 'Orange Cichlid',
    image: "./img/pawel-czerwinski-qlnoAyck9Zc-unsplash.jpg",
    price: '10.0',
    description: "Fish"
}, {
    title: 'Seahorse',
    image: "./img/david-clode-fG1fdervp1E-unsplash.jpg",
    price: '200.0',
    description: "Fish"
}, {
    title: 'Jelly Fish',
    image: "./img/ganapathy-kumar-5fhcbkOPhwA-unsplash.jpg",
    price: '150.0',
    description: "Fish"
}, {
    title: 'Star Fish',
    image: "./img/david-clode-JdNixbsLwS8-unsplash.jpg",
    price: '75.0',
    description: "Fish"
}, {
    title: 'Brown/Dog',
    image: "./img/michael-g-HABpQjcr7OE-unsplash.jpg",
    price: '20.0',
    description: "Dog1"
}, {
    title: 'White/Dog',
    image: "./img/michael-g-9_hkkM0SKIA-unsplash.jpg",
    price: '100.0',
    description: "Dog2"
}, {
    title: 'Black/Dog',
    image: "./img/michael-g-GFPrsgfQSPM-unsplash.jpg",
    price: '200.0',
    description: "Dog3"
}, {
    title: 'W/B/Dog',
    image: "./img/michael-g-fP55lv8t0Yo-unsplash.jpg",
    price: '150.0',
    description: "Dog4 "
}, {
    title: 'PitBull',
    image: "./img/lucas-ludwig-cjWmmMUCRhY-unsplash.jpg",
    price: '75.0',
    description: "Dog5"
},
]

// <div class="card" style="width: 18rem;">
//   <img src="..." class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>

var postHTML = ' '
for (var i = 0; i < shop.length; i++) {
var heading = '<div class="card text-center mb-5" style="width: 18rem;"> <h5 class="card-title">' + shop[i].title + '</h5>'
var image = '<img class=" card-img-top " src="' + shop[i].image + '"/>'
var price = '<p> $' + shop[i].price + '</p>'
var description = '<div class=""><p class="card-text">' + shop[i].description + '</p> <a href="#" class="btn btn-primary">Go somewhere</a></div></div>'
var concatThis = heading + image + price + description;
postHTML = postHTML + concatThis
}

// var yourImg = document.getElementById('yourImgId');
// if(yourImg && yourImg.style) {
//     yourImg.style.height = '100px';
//     yourImg.style.width = '200px';
// }
document.getElementById('shop').innerHTML = postHTML