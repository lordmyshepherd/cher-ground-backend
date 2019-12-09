import { injectable, inject } from "inversify";

import { Retailer, OrderFormat, OrderFormatItem, RetailerPhoneNumber, RetailerEmail, BusinessInfo } from "domain/entity";

import { RetailerRepository } from "domain/interactor/repository";

import { RetailerDao } from ".";

import { RetailerVO } from "data/vo/RetailerVO";
import { RetailerDetailVO } from "data/vo/RetailerDetailVO";
import { OrderFormatVO } from "data/vo/OrderFormatVO"
import { OrderFormatItemVO } from "data/vo/OrderFormatItemVO";
import { Entity } from "typeorm";

import { RetailerAddressVO } from "data/vo/RetailerAddressVO";
import { RetailerPhoneNumberVO } from "data/vo/RetailerPhoneNumberVO";
import { RetailerEmailVO } from "data/vo/RetailerEmailVO"
import { BusinessInfoVO } from "data/vo/BusineesInfoVO";
import { BankInfoVO } from "data/vo/BankInfoVO";

@injectable()
class RetailerRepositoryImpl implements RetailerRepository {

    private retailerDao: RetailerDao;

    constructor(
        @inject("RetailerDao") retailerDao: RetailerDao
    ) {
        this.retailerDao = retailerDao;
    }
    
    //Promise는 최초 실행함수(execute)를 통해서 실행된다.
    /*Promise를 선언할 때, function(resolve,reject){resolve() or reject()} 콜백 함수를 인자로 전달
    프로미스가 정상으로 수행됐다면 충족 상태가 되어 resolve함수를 호출하게 된다.*/

    /*
    const mPromise = new Promise((resolve,reject) => {
        resolve(1); 
    }

    //Promise가 대기상태에서 값이 결정되면 then 메서드를 이용해서 resolve 함수를 호출하여 값을 전달받을 수 있다.
    mPromise.then(res => {
        console.log(typeof res, res)
    })

    결과 number 1 */
         
    getRetailer(id: string): Promise<Retailer> {
        const vo: Promise<RetailerVO> = this.retailerDao.getRetailer(id);

        return new Promise<Retailer>((resolve, reject) => {
            vo
            .then((vr: RetailerVO) => {
                if (vr !== undefined) {
                    resolve(this.EntityMapper(vr));
                } else {
                    reject("no retailer found");
                }
            })
        })
    }

    // getRetailer(id: string): Promise<Retailer> {
    //     const vo: Promise<RetailerVO> = this.retailerDao.getRetailer(id);

    //     return new Promise<Retailer>((resolve, reject) => {
    //         vo
    //         .then((vr: RetailerVO) => {
    //             if (vr !== undefined) {
    //                 resolve(this.EntityMapper(vr));
    //             } else {
    //                 reject("no retailer found");
    //             }
    //         })
    //     })
    // }
    
    saveRetailer(retailer: Retailer): Promise<boolean> {
        // retailer -> retailerVO

        //retailerDao(실제로 DB에 retailerVO를 저장하는 로직을 가지고 있는 class)에서 saveRetailer 함수를 호출한 후에 vo변수에 할당.
        const vo: Promise<boolean> = this.retailerDao.saveRetailer(this.VOMapper(retailer));

        return new Promise((resolve, reject) => {
            vo
            .then((res) => {
                //resolve(res);
                this.retailerDao.saveRetailer(this.VOMapper(retailer))
                .then((res: boolean) => { resolve(res); })
            })
        })
    }

    // saveRetailer(retailer: Retailer): Promise<boolean> {
    //     // retailer -> retailerVO

    //     //retailerDao(실제로 DB에 retailerVO를 저장하는 로직을 가지고 있는 class)에서 saveRetailer 함수를 호출한 후에 vo변수에 할당.
    //     const vo: Promise<boolean> = this.retailerDao.saveRetailer(this.VOMapper(retailer));

    //     return new Promise((resolve, reject) => {
    //         vo
    //         .then((res) => {
    //             //resolve(res);
    //             this.retailerDao.saveRetailer(this.VOMapper(retailer))
    //             .then((res: boolean) => { resolve(res); })
    //         })
    //     })
    // }
    
    VOMapper(entity: Retailer): RetailerVO {

        const orderFormat: OrderFormatVO = {
            id: entity.detail.format.id,
            formatItems: null  
        }

        let orderFormatItems : Array<OrderFormatItemVO> = new Array();
        for (let i:number = 0; i < OrderFormatItemVO.length; i++){
            orderFormatItems[i] = {
                id: entity.detail.format.formatItems[i].id,
                name: entity.detail.format.formatItems[i].name,
                type: entity.detail.format.formatItems[i].type,
                ordinal: entity.detail.format.formatItems[i].ordinal,
                format: orderFormat
            }
        }

        const retailerAddress: RetailerAddressVO = {
            id: entity.detail.address.id,
            office: entity.detail.address.office,
            warehouse: entity.detail.address.warehouse
        }

        const retailerPhoneNumber: RetailerPhoneNumberVO = {
            id: entity.detail.phoneNumber.id,
            office: entity.detail.phoneNumber.office,
            ceo: entity.detail.phoneNumber.ceo
        }

        const retailerEmail: RetailerEmailVO = {
            id: entity.detail.email.id,
            order: entity.detail.email.order,
            ceo: entity.detail.email.ceo,
        }

        const businessInfo: BusinessInfoVO = {
            id: entity.detail.businessInfo.id,
            registerName: entity.detail.businessInfo.registerName,
            registerNumber: entity.detail.businessInfo.registerNumber
        }

        const bankInfo: BankInfoVO = {
            id: entity.detail.bankInfo.id,
            bank: entity.detail.bankInfo.bank,
            accountNumber: entity.detail.bankInfo.accountNumber,
            owner: entity.detail.bankInfo.owner,
            type: entity.detail.bankInfo.type,
            briefs: entity.detail.bankInfo.briefs,
            isActive: entity.detail.bankInfo.isActive,
            createdAt: entity.detail.bankInfo.createdAt,
            updatedAt: entity.detail.bankInfo.updatedAt
        }

        const retailerDetail: RetailerDetailVO = {
            id: entity.detail.id,
            ceoName: entity.detail.ceoName,
            address: retailerAddress,
            format: orderFormat,
            phoneNumber: retailerPhoneNumber,
            email: retailerEmail,
            businessInfo: businessInfo,
            bankInfo: bankInfo
        }        

        const retailer: RetailerVO = {
            id: entity.id,
            name: entity.name,
            detail: retailerDetail
        }

        orderFormat.formatItems = orderFormatItems;

        return retailer;
    }

    EntityMapper(vo: RetailerVO): Retailer {

        const retailerVO: RetailerVO = {
            id: vo.id,
            name: vo.name,
            detail: null
        }

        return retailerVO;
    }
}

export default RetailerRepositoryImpl;