export const getTotalNumberOfItems = (arr) => {
  return arr.reduce((total , curr) => total+=curr.quantity , 0)
}

export const getPriceOfItems = (arr) => {
  let subTotal = arr.reduce((total , curr) => total += curr.price * curr.quantity, 0);
  subTotal = roundNumber(subTotal)
  const taxes = roundNumber(subTotal * .0825)
  const total = roundNumber(parseFloat(subTotal) + parseFloat(taxes))
  
  return {total , taxes, subTotal}
}

const roundNumber = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
}