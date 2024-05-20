import Big from 'big.js'
export interface stockTransection {
  price: string
  quantity: string
}
function calculate(...data: stockTransection[]) {
  // จำนวนหุ้นที่ถือครองในปัจจุบัน
  const currentStocks = new Big('0')

  // คำนวณต้นทุนรวมของการซื้อหุ้นในแต่ละรอบการซื้อขาย
  let totalCost = new Big('0')
  for (const transaction of data) {
    const price = new Big(transaction.price)
    const qty = new Big(transaction.quantity)
    totalCost = totalCost.plus(price.times(qty))
  }

  // คำนวณจำนวนหุ้นที่เหลืออยู่
  let remainingStocks = new Big('0')
  data.forEach((e) => {
    const temp = new Big(e.quantity)
    remainingStocks = remainingStocks.plus(temp)
  })
  remainingStocks = remainingStocks.plus(currentStocks)

  // คำนวณต้นทุนเฉลี่ย
  const averageCost = totalCost.div(remainingStocks)

  return {
    averageCost: averageCost.toFixed(2),
    remainingStocks: remainingStocks.toString(),
    totalCost: totalCost.toFixed(2),
  }
}

export default calculate
