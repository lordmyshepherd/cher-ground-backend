import { injectable, inject} from "inversify";

import { Retailer } from "domain/entity";

import { GetRetailer } from "domain/usecase";

import { RetailerRepository } from "domain/interactor/repository";

@injectable()
export default class GetRetailerImpl implements GetRetailer {

    private retailerRepositorty: RetailerRepository;

    constructor(
        @inject("RetailerRepository") retaierRepository: RetailerRepository 
    ) {
        this.retailerRepositorty = retaierRepository;
    }

    execute(id: string): Promise<Retailer> {
        return this.retailerRepositorty.getRetailer(id);
    }
}