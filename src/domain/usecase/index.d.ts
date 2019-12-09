import {
    Retailer,
    Order,
    Invoice,
    Task,
    Wholesaler,
    Building,
    WholesalerAddress,
    InStoreCredit,
    WholesalerExpression
  } from "domain/entity"

/*Building*/

//1.Building_list_page(상가 리스트)
export interface GetBuildings {
    execute(): Promise<Building[]>
}

//1.Building_list_page(상가 검색)
export interface SearchBuilding {
    execute(buildings: Building[], keyword: string): Promise<Building[]>
}

//1.Building_list_page(상가 정렬)
export interface SortBulidings {
    execute(bulidings: Building[], by: string): Promise<Building[]>
  }

//2~4.Building_Add_page(상가 추가), 5.Building_Detail_page(상가 상세)
export interface AddBuilding {
    execute(building: Building): Promise<Building>
}

//7.Building_Delete_page(상가 삭제)
export interface DeleteBuilding {
    execute(building: Building): void
}

//10.Building_WS_list_page(상가에 포하된 도매 목록)
export interface GetWholesalers {
    execute(building: Building): Promise<Wholesaler[]>
}

//11~12.Building_WS_list_page(도매 상세)
export interface GetWholesaler {
    execute(wholesaler: Wholesaler) : Promise<Wholesaler>
}

//1.Building_Detail_ID(Edit) ??
export interface EditBuildingId {
    execute(building: Building): void
}

//1.Building_Detail_Name 
export interface GetBuildingFullName {
    execute(fullName: Building["fullName"]) : Promise<Building["fullName"]>
}
//2~8. Builiding_Detial_Name
export interface EditBuildingFullName {
    execute(fullName: Building["fullName"]) : Promise<Building["fullName"]>
}

//1.Building_Detail_Display_Name 
export interface GetBuildingDisplayName {
    execute(displayName: Building["displayName"]): Promise<Building["displayName"]>
}

//2~8.Building_Detail_Display_Name
export interface EditBuildingDisplayName {
    execute(displayName: Building["displayName"]): Promise<Building["displayName"]>
}



/*Retailer*/

export interface GetRetailer {
    execute(id: string): Promise<Retailer>;
}

//1,4
export interface GetRetailers {
    execute(): Promise<Retailer[]>;
}
//2 Retail_Add RT 
export interface SaveRetailer {
//execute(retailer: Retailer): Promise<Retailer>; 삭제
    execute(retailer: Retailer): Promise<boolean>;
}

//5 Retail_Detail
export interface GetRetailerInfo {
    execute(retailer: Retailer): Promise<Retailer>;
}
export interface DeleteRetailer {
    execute(retailer: Retailer): Promise<void>;
}

//8 Retail_WS List
export interface GetRelatedWholesalers {
    execute(retailer: Retailer): Promise<Wholesaler[]>;
}

//10 Retail_WS Detail
export interface GetWsExpression {
    execute(retailer: Retailer, wholesaler: Wholesaler): Promise<[Wholesaler, WholesalerExpression]>;
}

export interface DeleteWsExpression {
    execute(retailer: Retailer): Promise<Retailer>;
}
export interface GetCreditInfo {
    execute(retailer: Retailer): Promise<Retailer>;
}
export interface SubtractCredit {
    execute(retailer: Retailer, amount: number, memo: string): Promise<Retailer>;
}
// export interface AddPurchase {
//     execute(
//     retailer: Retailer,
//     amount: number,
//     type: string,
//     memo: string
// ): Promise<Retailer>;
// }