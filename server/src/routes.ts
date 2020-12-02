import {Router} from 'express'
import multer from 'multer'
import StoreController from './controllers/StoreController'
import ProductController from './controllers/ProductController'
import uploadConfig from './config/upload'

const routes = Router()
const storeController = new StoreController()
const productController = new ProductController()
const upload = multer(uploadConfig)

routes.get('/store', storeController.index)
routes.get('/product', productController.index)

routes.get('/store/:id_store', storeController.show)
routes.get('/product/:id_product', productController.show)

routes.post('/store', upload.single('thumb'), storeController.create)
routes.post('/product', upload.single('photo'), productController.create)

export default routes