interface productInfo {
  title: string;
  price: number;
  id: number;
  thumbnail: string,
  qty?:number

}

interface Item {
  item: productInfo;
  target: string
}

export default Item