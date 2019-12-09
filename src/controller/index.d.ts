import { Retailer } from "domain/entity";

export interface RetailerController {
    getRetailer(id: string): Promise<Retailer>
    saveRetailer(retailer: Retailer): Promise<boolean>
    // ...
}
