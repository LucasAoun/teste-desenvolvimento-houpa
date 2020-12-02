import {Request, Response} from 'express'
import knex from '../database/connection'

class ProductController{
    async create(req: Request, res: Response){
       
       const { 
           name_product,
           price,
           pquantity,
           mquantity,
           gquantity,
           ggquantity,
           description,
           id_store
         } = req.body
        
         const product = {
            name_product,
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
            const product = await knex('product').select('*').join('store', 'product.id_store', '=', 'store.id_store') 
            const serializedProduct = product.map(pdt=>{
                return {
                    ...pdt,
                    image_url: `http://localhost:3333/uploads/${pdt.photo}`,
                    thumb_url: `http://localhost:3333/uploads/${pdt.thumb}`
                }
            })
            return res.json(serializedProduct)
    }

    
    async show(req: Request, res: Response){
        const productId = req.params.id_product
        const productKey = await knex('product').where('id_product', productId).first()
        
        if(!productId){
            return res.status(400).json({message: 'product not found'})
        }

        const storeKey = await knex('store').join('product', 'product.id_store', '=', 'store.id_store').where('store.id_store', productId).select('store.name_store', 'thumb') 
        
        const serializedProdKey= {
                ...productKey,
                image_url: `http://localhost:3333/uploads/${productKey.photo}`,
            
        }
        const serializedStoreKey= {
            ...storeKey,
            thumb_url: `http://localhost:3333/uploads/${storeKey}`
            
    }
        return res.json({serializedProdKey,serializedStoreKey})
    }
}

export default ProductController