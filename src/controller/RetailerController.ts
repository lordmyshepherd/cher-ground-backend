import { injectable, inject} from 'inversify';

import { Retailer } from 'domain/entity';

import { RetailerController } from "controller";

import { GetRetailer, SaveRetailer} from 'domain/usecase';

@injectable()
export default class RetailerControllerImpl implements RetailerController {
    
    private ucGetRetailer: GetRetailer;
    private ucSaveRetailer: SaveRetailer;

    constructor(
        @inject("GetRetailer") getRetailer: GetRetailer,
        @inject("SaveRetailer") saveRetailer: SaveRetailer
    ) {
        this.ucGetRetailer = getRetailer;
        this.ucSaveRetailer = saveRetailer;
    }

    getRetailer = (id: string) => {
        return this.ucGetRetailer.execute(id)
    }

    saveRetailer = (retailer: Retailer) => {
        return this.ucSaveRetailer.execute(retailer)
    }
}