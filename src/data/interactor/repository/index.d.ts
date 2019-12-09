import { RetailerVO } from "data/vo/RetailerVO";

export interface RetailerDao {
    getRetailer(id: string): Promise<RetailerVO>;
    saveRetailer(retailer: RetailerVO): Promise<boolean>;
}