import type { NextApiRequest, NextApiResponse } from 'next'
import { gitbook, homemade, pistachio, watermelon, mint, gold } from '../../consts'

export type Product = {
    id : number,
    name : string,
    description : string,
    price : number,
    pricePerTen : number,
    picture : string,
    link : string,
    discount : boolean,
    discountAmount : number
}

export type PartialProduct = {
  id : number,
  name : string,
  price : number,
  pricePerTen : number,
  picture : string,
  discount : boolean,
  discountAmount : number,
}

export const coffees : Product[] = [
    {
        id : 1,
        name : "Homemade",
        description : "A coffee from the machine, we put it into a capsule. Hopefully it's still good",
        price : 0.49,
        pricePerTen : 4.90,
        picture : homemade,
        link : gitbook,
        discount : false,
        discountAmount : 1
    },{
        id : 2,
        name : "Watermelon",
        description : "A refreshing coffee to brighten your afternon",
        price : 0.43,
        pricePerTen : 4.30,
        picture : watermelon,
        link : gitbook,
        discount : false,
        discountAmount : 1
    },{
        id : 3,
        name : "Mint",
        description : "A nice coffee for every mint enjoyer to wake you up and improve your breath",
        price : 0.46,
        pricePerTen : 4.60,
        picture : mint,
        link : gitbook,
        discount : true, 
        discountAmount : 0.7
    },{
        id : 4,
        name : "Pistachio",
        description : "Pistachios are cool.",
        price : 1.50,
        pricePerTen : 15,
        picture : pistachio,
        link : gitbook,
        discount : false,
        discountAmount : 1
    },{
        id : 5, 
        name : "Gold Experience",
        description : "Fresh as a golden wind, a divine requiem",
        price : 0.49,
        pricePerTen : 4.90,
        picture : gold,
        link : gitbook,
        discount : true,
        discountAmount : 0.8
    }
]

export default async function handler(req : NextApiRequest,res : NextApiResponse){
  res.status(200).json(coffees.map((coffee) => ({
      id: coffee.id,
      name: coffee.name,
      price: coffee.price,
      pricePerTen : coffee.pricePerTen,
      picture: coffee.picture,
      discount: coffee.discount,
      discountAmount: coffee.discountAmount,
    })))
}