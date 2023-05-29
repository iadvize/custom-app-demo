import type { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'cors'
import { coffees } from './products'

const cors = Cors({
  methods: ['POST', 'GET', 'HEAD'],
})

function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
 ) {
  return new Promise((resolve, reject) => {
   fn(req, res, (result: any) => {
     if (result instanceof Error) {
       return reject(result)
     }
     return resolve(result)
    })
  })
 }

type Message = {
	id : string,
	authorType: string,
	text: string
}

type Action = {
    "highlight":string,
    "intent":{
        "key": string,
        "payload" : {
            any  : any
        }
    }
}
    
type Commande = {
    "type": string,
    "messageId": string,
    "actions": Action[]
}

export default async function handler(req : NextApiRequest,res : NextApiResponse){

    runMiddleware(req,res,cors) //run the middleware to avoid cors Errors
  
    const commandes : Commande[] = []
    const messages = req.body.messages 
    messages.forEach((message : Message) => { //for every messages
        coffees.forEach(coffee =>{              //for every coffee
          if (message.text.toLowerCase().includes(coffee.name.toLowerCase())){ //if the coffee is in the message
                commandes.push(   //add the following commande to commands
                  {
                    "type": "addMessageActions", 
                    "messageId": message.id, //the id of the message
                    "actions": [
                      {
                        "highlight": coffee.name, //highlight the name of the coffee in the message
                        "intent": { 
                          "key": coffee.id.toString(), //the key is the id of the coffee
                          "payload": {
                            any : coffee, //pass the coffee object to the custom app
                          }
                        }
                      }
                    ]
                  },
                )
              }
        })
    });
    res.send({
        "commands" : commandes //send the array of command to the custom app
    })
}