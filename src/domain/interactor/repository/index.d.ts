import { Retailer } from "domain/entity";

export interface RetailerRepository {
    getRetailer(id: string): Promise<Retailer>
    saveRetailer(retailer: Retailer): Promise<boolean>
}