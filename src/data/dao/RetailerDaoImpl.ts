import { injectable, inject } from "inversify";

import { RetailerDao } from "data/interactor/repository";
import { getManager } from "typeorm";
import { RetailerVO } from "data/vo/RetailerVO";
import { RetailerDetailVO } from "data/vo/RetailerDetailVO";
// import { Retailer } from "data/domain/entity";


@injectable()
export default class RetailerDaoOImpl implements RetailerDao {

    getRetailer(id: string): Promise<RetailerVO> {
        const retailerVoRepository = getManager().getRepository(RetailerVO);
        return retailerVoRepository.findOne(id)
    }

    saveRetailer(retailer: RetailerVO): Promise<boolean> {
        const retailerVoRepository = getManager().getRepository(RetailerVO);
        console.log(retailer);
        return new Promise((resolve, reject) => {
            retailerVoRepository.save(retailer)
                .then((res) => {
                    resolve(true)
                }).catch((err) => {
                    resolve(false)
                })
        })
    }
}
