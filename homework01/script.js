const price_dress = 15.678;
const price_bag = 123.965;
const price_coat = 90.2345;

const max_sum = Math.max(price_dress,price_coat,price_bag);
const min_sum = Math.min(price_bag,price_coat,price_dress);

console.log ( 'Максимальна сума ' + max_sum);
console.log  ( 'Мінімальна сума ' + min_sum);

const price_everything = (price_dress + price_bag + price_coat);
console.log ( 'Ціна всіх товарів ' + price_everything);

const price_dress_new = Math.floor(price_dress);
const price_bag_new = Math.floor(price_bag);
const price_coat_new = Math.floor(price_coat);
const price_dress_and_bag = (price_dress_new + price_bag_new);
const price_dress_and_coat = (price_dress_new + price_coat_new);
const price_bag_and_coat = (price_bag_new + price_coat_new);
const price_everything_new = (price_bag_new + price_coat_new + price_dress_new);
const price_everything_new_round = ( Math.round( price_everything_new / 100 ) * 100 );
console.log ( 'Завкруглена ціна всіх товарів ' + price_everything_new_round);

if (price_everything_new>price_everything_new_round)
{console.log (true) }
else {
    console.log(false)
}
const rest =( 500 - price_everything);
console.log('Сума решти ' + rest);

const medium_price = ( (price_bag + price_coat + price_dress) / 3 ).toFixed (2);
console.log ('Середня ціна ' + medium_price);

const max_discount = 50;
const min_discount = 10;
const random_discount = Math.round( (max_discount-min_discount) * Math.random(max_discount) + min_discount);
console.log ('Випадкова знижка ' + random_discount + ' %');

const sum_discount = (price_everything * (random_discount / 100 ));
console.log(sum_discount)
const price_with_discount = (price_everything - sum_discount).toFixed(2);
console.log ( 'Сума до оплати зі знижкою ' + price_with_discount);

const cost = (price_everything / 2);
console.log (cost)

const profit = ( cost - sum_discount );
console.log ( 'Чистий прибуток ' + profit)

// Advanced 

const all_info = `
Максимальна сума ${max_sum}
Мінімальна сума ${min_sum}
Ціна всіх товарів ${price_everything}
Завкруглена ціна всіх товарів ${price_everything_new_round}
Сума решти ${rest}
Середня ціна ${medium_price}
Випадкова знижка ${random_discount}%
Сума до оплати зі знижкою ${price_with_discount}
Чистий прибуток ${profit}
`
console.log (all_info)