import { injectable, inject} from "inversify";

import { Retailer } from "domain/entity";

import { SaveRetailer } from "domain/usecase";

import { RetailerRepository } from "domain/interactor/repository";

@injectable()
export default class SaveRetailerImpl implements SaveRetailer {

    private retailerRepositorty: RetailerRepository;

    constructor(
        @inject("RetailerRepository") retaierRepository: RetailerRepository 
    ) {
        this.retailerRepositorty = retaierRepository;
    }

    execute(retailer: Retailer): Promise<boolean> {
        return this.retailerRepositorty.saveRetailer(retailer);
    }
}