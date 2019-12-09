import "reflect-metadata";
import container from "injector";
import * as express from "express";

// import {
//   RetailerController,
// } from './controller/RetailerController';

import {createConnection} from "typeorm";
import { RetailerRepository } from "domain/interactor/repository";
import RetailerRepositoryImpl from "data/interactor/repository/RetailerRepositoryImpl";
import { RetailerController } from "controller";
import RetailerDaoOImpl from "data/dao/RetailerDaoImpl";
import { RetailerDao } from "data/interactor/repository/index";
import { Retailer } from "domain/entity";
// import {BuildingImpl} from "./data/entity/VOBuilding";

class App {
  public app: express.Application;

  /**
   * @ class App
   * @ method bootstrap
   * @ static
   * 
   */
  
  public static bootstrap (): App {
    return new App();
  }

  constructor () {
    this.app = express();

    const retailerController: RetailerController = container.get("RetailerController");

    // const retailerConterollerWithoutDI: RetailerController = new RetailerRepositoryImpl(
    //   new RetailerDaoOImpl(
        
    //   ) as RetailerDao
    // ) as RetailerController

    this.app.get("/", (request: express.Request, response: express.Response, next: express.NextFunction) => {
      retailerController.getRetailer("test")
      //then method는 res 매개변수로 결정 값을 전달 받는다.
        .then((res) => {
          console.log("res");
          console.log(res);

          response.send(res);
        })
        .catch((err) => {
          console.log("err");
          console.log(err);
        })
    });

    this.app.post("/retailer", (request: express.Request, response: express.Response, nex: express.NextFunction) => {

      const retailerTest: Retailer = {
        id: "testId",
        name: "testName",
        detail: {
          id: 1,
          format: {
            id:1,
            formatItems: [{
              id:1,
              name: "이력서 양식",
              type: "스타트업용",
              ordinal: 1 
            },
            {
              id:2,
              name: "이력서 양식2",
              type: "대기업용",
              ordinal: 2
            }
          ]},
          address: {
            id: "1",
            office: "cherground",
            warehouse: "wecode"
          },
          phoneNumber: {
            id:1,
            office: "02-444-4444",
            ceo: "010-2222-4354"
          },
          email: {
            id:1,
            order: "order@gmail.com",
            ceo: "ceo@gmail.com"
          },
          ceoName: "대표님",
          businessInfo: {
            id: 1,
            registerName: "사업자",
            registerNumber: 1234928
          },
          bankInfo: {
            id:1,
            bank: "국민은행",
            accountNumber: "9110283944",
            owner: "팁장님",
            type: "입출금용",
            briefs: "월급받는 용도로 사용하자",
            isActive: 1,
            createdAt: 20191010,
            updatedAt: 20191011
          }
        }
      }

      //retailerController.saveRetailer()의 반환값은 Promise이다.
      retailerController.saveRetailer(retailerTest)
      //then method는 res 매개변수로 결정 값을 전달받는다.
      .then((res) => {
        console.log("retailer 정보를 데이터베이스에 저장했다면 res의 값은 true");
        console.log(res)
        response.send(res)
      })
    })
  }
}

export default App;