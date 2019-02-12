var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/shopping', { useNewUrlParser: true });

var products = [
    new Product({
        mainImagePath: 'https://images.pexels.com/photos/1420902/pexels-photo-1420902.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        secondImagePath: 'https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        thirdImagePath: 'https://images.pexels.com/photos/116910/pexels-photo-116910.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        fourthImagePath: 'https://images.pexels.com/photos/289445/pexels-photo-289445.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: 'Chair',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?',
        price: 90
    }),
    new Product({
        mainImagePath: 'https://images.pexels.com/photos/707582/pexels-photo-707582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        secondImagePath: 'https://images.pexels.com/photos/280264/pexels-photo-280264.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        thirdImagePath: 'https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        fourthImagePath: 'https://images.pexels.com/photos/1198264/pexels-photo-1198264.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: 'Clock',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?',
        price: 50
    }),
    new Product({
        mainImagePath: 'https://images.pexels.com/photos/890669/pexels-photo-890669.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        secondImagePath: 'https://images.pexels.com/photos/17738/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        thirdImagePath: 'https://images.pexels.com/photos/279626/pexels-photo-279626.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        fourthImagePath: 'https://images.pexels.com/photos/269220/pexels-photo-269220.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: 'Table',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?',
        price: 70
    }),
    new Product({
        mainImagePath: 'https://images.pexels.com/photos/1533960/pexels-photo-1533960.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        secondImagePath: 'https://images.pexels.com/photos/1445416/pexels-photo-1445416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        thirdImagePath: 'https://images.pexels.com/photos/796620/pexels-photo-796620.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        fourthImagePath: 'https://images.pexels.com/photos/1309769/pexels-photo-1309769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: 'Flower Pot',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?',
        price: 15
    }),
    new Product({
        mainImagePath: 'https://images.pexels.com/photos/350417/pexels-photo-350417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        secondImagePath: 'https://images.pexels.com/photos/130980/pexels-photo-130980.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        thirdImagePath: 'https://images.pexels.com/photos/357743/pexels-photo-357743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        fourthImagePath: 'https://images.pexels.com/photos/1590141/pexels-photo-1590141.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: 'Spoon',
        description: 'Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        price: 30
    }),
    new Product({
        mainImagePath: 'https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        secondImagePath: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        thirdImagePath: 'https://images.pexels.com/photos/262042/pexels-photo-262042.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        fourthImagePath: 'https://images.pexels.com/photos/242827/pexels-photo-242827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: 'Lamp',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit ist.',
        price: 90
    }),
    new Product({
        mainImagePath: 'https://images.pexels.com/photos/563067/pexels-photo-563067.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        secondImagePath: 'https://images.pexels.com/photos/414553/pexels-photo-414553.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        thirdImagePath: 'https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        fourthImagePath: 'https://images.pexels.com/photos/269264/pexels-photo-269264.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: 'Plate',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?',
        price: 12
    }),
    new Product({
        mainImagePath: 'https://images.pexels.com/photos/606542/pexels-photo-606542.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        secondImagePath: 'https://images.pexels.com/photos/585753/pexels-photo-585753.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        thirdImagePath: 'https://images.pexels.com/photos/1447476/pexels-photo-1447476.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        fourthImagePath: 'https://images.pexels.com/photos/416552/pexels-photo-416552.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: 'Mug',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?',
        price: 10
    }),
    new Product({
        mainImagePath: 'https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        secondImagePath: 'https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        thirdImagePath: 'https://images.pexels.com/photos/256396/pexels-photo-256396.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        fourthImagePath: 'https://images.pexels.com/photos/24576/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: 'Book',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?',
        price: 10
    }),

];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}