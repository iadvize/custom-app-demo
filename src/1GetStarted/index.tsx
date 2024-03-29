import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { Product,PartialProduct } from "./api/products"
import { api } from "../consts"
//Import Slingleton

//create const instance


async function productAPI(){
  const res = await fetch(api)
  const coffees = await res.json()
  return coffees
}

async function getProduct(id : number) : Promise<Product>{
  const res = await fetch(api+ `/${id}`)
  const coffee = await res.json()
  return coffee
}

function Price({coffee,perTen} : {coffee : PartialProduct, perTen : boolean}){
  
  let euro = Intl.NumberFormat('en-DE', {
    style: 'currency',
    currency: 'EUR',
  });
  return( coffee.discount ? 
  <>
    <p><span className="previousPrice">{euro.format(coffee.price)}</span> {euro.format(coffee.price * coffee.discountAmount)}</p>
    {perTen ? <p><span className="previousPrice">{euro.format(coffee.pricePerTen)}</span> {euro.format(coffee.pricePerTen * coffee.discountAmount)} - 10 pieces</p> : <></>}
  </> : 
  <> 
    <p>{euro.format(coffee.price)}</p>
    {perTen ? <p>{euro.format(coffee.pricePerTen)} - 10 pieces</p> : <></>}
  </>
  )
};

function Profile({back, coffee} : {back : Dispatch<SetStateAction<number>>, coffee : Product}){
    return(
      <div className="profile"> 
        <div className="profileHeader">
          <button onClick={() => back(-1)}>Back</button>
          <h2 id="coffeeName">{coffee.name}</h2>
        </div>
        <div className="profileTop">
          <img src={coffee.picture}/>
          <div className="top-right">
            <p>{coffee.description}</p>
            <div className="price">
              <Price coffee={{id: coffee.id,name: coffee.name,price: coffee.price,pricePerTen : coffee.pricePerTen,picture: coffee.picture,discount: coffee.discount,discountAmount: coffee.discountAmount}} perTen={true}/>
            </div>
          </div>
        </div>
      </div>
    )
}

export default function Index() {

  const [coffees, setCoffees] = useState<Product[]>([])
  const [profile, setProfile] = useState(-1)
  const [profileCoffee, setProfileCoffee] = useState({
    id : -1,
    name : "",
    description : "",
    price : 0,
    pricePerTen : 0,
    picture : "",
    link : "",
    discount : false,
    discountAmount : 1
  })

  useEffect(()=>{

    //call client

    if (coffees.length == 0){
      productAPI().then((res : any)=> {setCoffees(res)})
    }
  })

  function launchProduct(id : number){
    getProduct(id).then(
      coffee=>{
        setProfileCoffee(coffee)
        setProfile(id)
      }
    )
  }

  const listCoffee = coffees.map(coffee=>{
    return(
      <div onClick={()=>launchProduct(coffee.id)} className="card" key={coffee.name}>
        <img src={coffee.picture} className="coffeePic"/>
        <div className="card-right">
          <p>{coffee.name}</p>
          <div className="price">
            <Price coffee={coffee} perTen={false}/>
          </div>
        </div>
        <img className="greaterThan" src="https://t4.ftcdn.net/jpg/03/76/69/25/360_F_376692508_XUzZzz0x3W34II8NlIOfqZQ2Lc26kh58.jpg"/>
      </div>
    )
  })

  return (
    <div>
    {profile === -1 ? (    
      <div className="list">        
        <div className="title">Products</div>
        {listCoffee}
      </div>
      ) : (
      <Profile back={setProfile} coffee={profileCoffee}></Profile>
      )
   }
  </div>
  )
}