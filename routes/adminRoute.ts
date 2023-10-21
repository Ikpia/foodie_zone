import express, {Request, Response, NextFunction } from "express"
import { createVendor, getAllVendors, getVendor } from "../controllers";
const router = express.Router()

router.post("/vendor", createVendor)
router.get("/all_vendors", getAllVendors)
router.get("/vendor/:id", getVendor)

router.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.json({"message": "Hello its admin"})
})

export {router as adminRoute}