import {Request, Response, NextFunction} from "express"
import {createVendorInputs} from "../dto/vendor.dto"
import {Vendor} from "../models"

export const findVendor = async (id: string | undefined, email?: string) => {
    if (id != undefined) {
        return await Vendor.findById(id)
    } else if (email) {
        return await Vendor.findOne({email: email})
    } else {
        return null
    }
}
export const createVendor = async (req: Request, res: Response, next: NextFunction) => {
    const {name, owenerName, foodType, pincode, address, phone, password, email} = <createVendorInputs>req.body
    const registeredVendor = await findVendor(email)
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
    const vendors = await Vendor.find({})
    res.json(vendors)
}

export const getVendorById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    try {
        const vendor = await findVendor(id)
        if (vendor !== null) {
            res.json(vendor)
        }
    } catch (err) {
        res.json({"message": "vendor with this id is not registered"})
    }
}