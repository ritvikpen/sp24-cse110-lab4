function sumValues(num1, num2, add) {
    if(add){
        const result = 0 
        result = num1 + num2;
        console.log('values added: ', result);
    } else return;
    console.log('final result: ', result);
}

function discountPrices(prices, discount){
    const discounted = [];
    //const finalPrice = 0;
    
    for(let i = 0; i < prices.length; i++){
        const discountedPrice = prices[i] * (1 - discount);
        //finalPrice = Math.round(discountedPrice * 100) / 100;
        discounted.push(discountedPrice);
    }

    //console.log(i);
    //console.log(length);
    //console.log(finalPrice);

    return discounted;
}

let student = {
    name: 'Sarah',
    major: 'Computer Science',
    'Grad Year': '2022',
    greeting: function(){console.log('Hello!');},
    'Favorite Teacher': {
        name: 'Thomas Powell',
        course: 'CSE 110'
    },
    courseLoad: ['CSE 110', 'CSE 134', 'VIS 41']
};

let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2,
};