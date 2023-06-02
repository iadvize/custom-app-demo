import type { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'cors'
import { coffees } from './products'

//const cors

//function runmiddleware

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

    //call middleware
  
    const commandes : Commande[] = []
    const messages = req.body.messages //your messages
    messages.forEach((message : Message) => {
        coffees.forEach(coffee =>{
            if (message.text.toLowerCase().includes(coffee.name.toLowerCase())){
              const matchIndex = message.text.toLowerCase().indexOf(coffee.name.toLowerCase());
              const exact = message.text.substring(matchIndex, matchIndex + coffee.name.length);
                commandes.push(
                  {
                    "type": "addMessageActions",
                    "messageId": message.id,
                    "actions": [
                      {
                        "highlight": exact,
                        "intent": {
                          "key": coffee.id.toString(),
                          "payload": {
                            any : coffee,
                          }
                        }
                      }
                    ]
                  },
                )
              }
        })
    });
    /*res.send({
        "commands" : commandes
      })*/
}