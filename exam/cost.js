const items=[{name:'shirt',price:25},
{name:'jeans',price:50},
{name:'shoes',price:80}];

const cartItem= items.map((e=>items * items))
console.log(cartItem)


function Totalcost(cartItems) {
    const total = cartItems.reduce((accumulator, item) => {
      return accumulator + items;
    }, 0);
  
    return total;
  }
console.log(Totalcost)