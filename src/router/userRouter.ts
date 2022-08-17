import { UserModel } from './../model/userModel';
import express from "express"
import { UserCotroller } from '../controller/userCotroller';

const router = express.Router()
const model = new UserModel();
const controller = new UserCotroller(model);

router.get('/', controller.getString)
router.get('/add', controller.postString)
router.get('/detail/:id', controller.getDetail)
router.get('/:id/delete', controller.deleteString)

export default router