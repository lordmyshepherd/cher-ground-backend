import { Container } from 'inversify';

import { GetRetailer, SaveRetailer } from 'domain/usecase';
import GetRetailerImpl from "domain/usecase/retailer/GetRetailerImpl"

import { RetailerController } from "controller";
import RetailerControllerImpl from 'controller/RetailerController';

import { RetailerDao } from 'data/interactor/repository';
import RetailerDaoOImpl from 'data/dao/RetailerDaoImpl';

import { RetailerRepository } from 'domain/interactor/repository';
import RetailerRepositoryImpl from 'data/interactor/repository/RetailerRepositoryImpl';

import SaveRetailerImpl from 'domain/usecase/retailer/SaveRetailerImpl';

const container: Container = new Container();

//UseCase
container.bind<GetRetailer>("GetRetailer").to(GetRetailerImpl);
container.bind<SaveRetailer>("SaveRetailer").to(SaveRetailerImpl);

//Dao
container.bind<RetailerDao>("RetailerDao").to(RetailerDaoOImpl);

//Repository
container.bind<RetailerRepository>("RetailerRepository").to(RetailerRepositoryImpl);

//Controller
container.bind<RetailerController>("RetailerController").to(RetailerControllerImpl);

export default container;