import {Request, Response} from 'express'
import knex from '../database/connection'

class ProductController{
    async create(req: Request, res: Response){
       
       const { 
           name,
           price,
           pquantity,
           mquantity,
           gquantity,
           ggquantity,
           description,
           id_store
         } = req.body
        
         const product = {
            name,
            price,
            pquantity,
            mquantity,
            gquantity,
            ggquantity,
            description,
            id_store,
            photo: req.file.filename
        } 

        const insertProduct = await knex('product').insert(product)
        const productId = insertProduct[0]
        return res.json({
            productId: productId,
            ...product,
        }) 
    }

    async index(req: Request, res: Response){
        //buscando todos os registros com todos os detalhes
            const product = await knex('product').select('*') 
            const serializedProduct = product.map(pdt=>{
                return {
                    ...pdt,
                    image_url: `http://localhost:3333/uploads/${pdt.photo}`
                }
            })
            return res.json(serializedProduct)
    }

    
    async show(req: Request, res: Response){
        const productId = req.params.id
        const productKey = await knex('product').where('id', productId).first()
        
        if(!productId){
            return res.status(400).json({message: 'product not found'})
        }

        const serializedProdKey= {
                ...productKey,
                image_url: `http://localhost:3333/uploads/${productKey.photo}`
            
        }
        return res.json(serializedProdKey)
    }
}

export default ProductController