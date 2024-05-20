interface DCATriger {
  dcaId: string;
  title: string;
  describtion: string;
  frequency: string;
  dateCreated: string;
  userId: string;
}

interface User {
  userId: string;
  userpass: string;
  username: string;
  name: string;
  lastname: string;
}

interface Currency {
  exchangeRate: number;
  cost: number;
  currency: string;
  buyDate: string;
  userId: string;
}

interface Invest {
  cost: number;
  buyDate: string;
  userId: string;
  symbol: string;
  currency: string;
  price: number;
  amount: number;
}
//ดึงราคาตอน 20.30 กับ 03.00 ถ้าปิดใกล้เคียง
