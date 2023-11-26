export type CartItemType = {
  id: number,
  title: string,
  price: number,
  img: string,
  amount: number
}

const cartItems = [
  {
    id: 1,
    title: 'ニードトレイン奏',
    price: 3900,
    img: '/images/kanade.png',
    amount: 1,
  },
  {
    id: 2,
    title: '脳内革命ガール杏',
    price: 8000,
    img: '/images/an.png',
    amount: 1,
  },
  {
    id: 3,
    title: 'VALORANTジェットふぶき',
    price: 7700,
    img: '/images/fubuki.png',
    amount: 1,
  },
  {
    id: 4,
    title: 'メイド虹夏',
    price: 36000,
    img: '/images/nijika.png',
    amount: 1,
  },
]

export default cartItems;