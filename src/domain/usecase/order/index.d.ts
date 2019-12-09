import {
    Retailer,
    Order,
    Invoice,
    Task,
    Wholesaler,
    Building,
    WholesalerAddress
  } from "domain/entity";
  //used in : 01.order_list, 02.order_list
  export interface GetOrders {
    excute(): Promise<Order[]>;
  }
  export interface FilterOrders {
    excute(filterOption: string): Promise<Order[]>;
    //status(대기/완료)
  }
  export interface SortOrders {
    execute(sortOption: string): Promise<Order[]>;
    //retail name순 / 최신순 /
  }
  export interface FilterByDate {
    execute(from: Date, to: Date): Promise<Order[]>;
  }
  export interface SearchOrders {
    excute(keyWord: string): Promise<Order[]>;
    //retailer name,
  }

  // order_list에서 200은 어떻게 표현할 것인지?

  export interface PrevOrders {
    excute(offset: string, limit: string): Promise<Order[]>;
  }
  export interface NextOrders {
    excute(offset: string, limit: string): Promise<Order[]>;
  }
  //used in : 03.order_detail, 06,order_edit
  export interface GetTasks {
    excute(order: Order): Promise<Task[]>;
  }

  //Promise<void> or Promise<any>등으로 응답을 보내줘야한다.

  //used in : 11.order_edit
  export interface SaveEditedOrder {
    // --> soft delete
    excute(tasks: Task[]): void;
  }

  //used in : 12.order_edit
  export interface DeleteOrders {
    // --> soft delete
    excute(order: Order): void; //=>통신하면 promise 써야하는지, boolean,void
  }

  //used in : 18.order_import
  export interface GetRetailers {
    excute(): Promise<Retailer[]>;
  }

  //우선 중복확인 기능과 저장하는 기능을 분라해야함.
  //used in : 26.order_add_replace
  export interface CheckDupl {
    excute(orderId: string): Promise<Task[]>; //=>통신하면 promise 써야하는지, boolean,void
  }

  //주문 덮어쓰기, 추가든 import한 task만 보여주자 
  //덮어쓰는 것은 기존것을 삭제하고 덮어쓰는 방법


  //CheckDupl:true
  // export interface AddTasks {
  //   excute(orderId: string, tasks: Task[]): Promise<Task[]>;
  // }
  // export interface OverRideTasks {
  //   excute(orderId: string, tasks: Task[]): Promise<Task[]>;
  // }
  //CheckDupl: false
  // export interface AddOrder {
  //   excute(orderId: string, tasks: Task[], retailerId: string): Promise<Task[]>;
  // }

  //used in : 23.Order_import page
  export interface SaveTasks {
    excute(orderId: string, tasks: Task[]): void;
  }

  //used in : 31.order_unrecognized_task
  export interface CheckWholesalerName {
    excute(wholesalerName: Array<string>): Promise<boolean>;
  }
  //wholesaler expression이랑 비교를 해서 없는 경우에는  

  //WS Expression
  export interface SearchWholesale {
    excute(wholesalerAddress: WholesalerAddress): Promise<Wholesaler[]>;
  }
  export interface AddWholesale {
    excute(wholesale: Wholesaler): Promise<Wholesaler[]>;
  }
  //assign
  export interface SelectWholesale {
    excute(wholesale: Wholesaler): Promise<Task[]>;
  }

  