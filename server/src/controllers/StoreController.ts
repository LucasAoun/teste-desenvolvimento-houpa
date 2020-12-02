import {Request, Response} from 'express'
import knex from '../database/connection'

class StoreController{
    async create(req: Request, res: Response){
       
       const { name } = req.body
        const store = {
            name,
            thumb: req.file.filename
        } 

        const insertStore = await knex('store').insert(store)
        const storeId = insertStore[0]
        return res.json({
            storeId: storeId,
            ...store,
        }) 
    }

    async index(req: Request, res: Response){
        //buscando todos os registros com todos os detalhes
            const store = await knex('store').select('*') 
            const serializedStore = store.map(sto=>{
                return {
                    ...sto,
                    image_url: `http://localhost:3333/uploads/${sto.thumb}`
                }
            })
            return res.json(serializedStore)
    }

    
    async show(req: Request, res: Response){
        const storeId = req.params.id
        const storeKey = await knex('store').where('id', storeId).first()
        
        if(!storeId){
            return res.status(400).json({message: 'store not found'})
        }

        const serializedStorKey= {
                ...storeKey,
                image_url: `http://localhost:3333/uploads/${storeKey.thumb}`
            
        }
        return res.json(serializedStorKey)
    }
}

export default StoreController