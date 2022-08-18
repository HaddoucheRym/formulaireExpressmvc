import { UserModel } from './../model/userModel';
import express from "express"
import { UserCotroller } from '../controller/userCotroller';

const router = express.Router()
const model = new UserModel();
const controller = new UserCotroller(model);

router.get('/', controller.getString)
router.get('/add', controller.postString)
router.post('/add2', controller.addString)
router.get('/detail/:id', controller.getDetail)
router.get('/:id/delete', controller.deleteString)
router.get('/:id/edite', controller.editeString)
router.post('/edite2/:id', controller.valideModif)


export default router