import axios, { AxiosResponse } from 'axios';
import { UserModel } from './../model/userModel';
import { Request, Response } from "express"

export class UserCotroller {
    private model: UserModel

    constructor(model: UserModel) {
        this.model = model
    }


    getString = async (req: Request, res: Response) => {
        const user = await this.model.getaxios().then((resp: AxiosResponse) => resp.data)
        console.log("resultat:", user);
        res.render('user',  { user })
    }

    getDetail = async(req: Request, res: Response) => {
        const id = req.params.id
        const user = await this.model.getaxiosid(id).then((resp: AxiosResponse) => resp.data)
        console.log(user);
        res.render('detail',  { user })
    }

    deleteString = async (req: Request, res: Response) => {
        const id = req.params.id
     this.model.deleteAxios(id)
     res.redirect('/')
      }

      postString =  (req: Request, res: Response) => {
        this.model.postAxios()
         res.render('AddUser')
      }
}
