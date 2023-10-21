import {Request, Response, NextFunction} from "express"
import {createVendorInputs} from "../dto/vendor.dto"
import {Vendor} from "../models"

export const createVendor = async (req: Request, res: Response, next: NextFunction) => {
    const {name, owenerName, foodType, pincode, address, phone, password, email} = <createVendorInputs>req.body
    const registeredVendor = await Vendor.findOne({email: email})
    const vendor = new Vendor({ ...req.body, serviceAvailable: true, coverImage: [], rating: 3})
    if (!registeredVendor) {
        vendor.save().then(() => {
            res.json({"message": "vendor created successfully"})
        }).catch((err) =>{
            res.json({"message": err})
        })
    } else {
        res.json({"message": "vendor with this email is registered already"})
    }
}

export const getAllVendors = async (req: Request, res: Response, next: NextFunction) => {
    
}

export const getVendor = async (req: Request, res: Response, next: NextFunction) => {
    
}