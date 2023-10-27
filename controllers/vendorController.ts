import { createVendorLogin } from "../dto/vendor.dto"
import { findVendor } from "./adminController"
import {Response, Request, NextFunction} from "express"
import {Vendor} from "../models"


export const vendorLogin = async (req: Request, res: Response, next: NextFunction) => {
    const {email, password} = <createVendorLogin>req.body
    const vendor = await Vendor.findOne({email: email, password: password})
    if (vendor) res.json(vendor)
    res.json({"message": "Verndor not found"})
    
}


