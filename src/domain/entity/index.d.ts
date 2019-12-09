export interface Order {
    id?: string;
    retailerId: string;
    date: Date;
    updatedAt: Date;
    status: string; //대기(미발행), 초안, 완료(영수)
    isDeleted: boolean;
  }

  //Retailer
  export interface Retailer {
    id: string;
    name: string;
    detail?: RetailerDetail;
  }

  export interface RetailerDetail {
    id: number;
    format: OrderFormat;
    address: RetailerAddress; 
    phoneNumber: RetailerPhoneNumber; 
    email: RetailerEmail; 
    ceoName: string; 
    businessInfo: BusinessInfo;
    bankInfo: BankInfo;
  }

  export interface RetailerAddress {
    id?: string;
    office: string;
    warehouse: string;
  }

  export interface RetailerPhoneNumber {
    id: number;
    office: string;
    ceo: string;
  }

  export interface RetailerEmail {
    id: number;
    order: string;
    ceo: string;
  }
  
  export interface BusinessInfo {
    id: number;
    registerName: string;
    registerNumber: number;
  }

  export interface MemoAboutRetailer {
    id: number;
    retailerId: string;
    memo: string;
  }

  export interface Task {
    id: string;
    order: string;
    productCode: string;
    productName: string;
    productOption: string;
    productPrice: number;
    requestedComment: string;
    requestedQuantity: number;
    retailer: string;
    state: State; //사입관련정보
    type: string; //구분
    wholesaler: string;
    isDeleted: boolean;
  }

  export interface Wholesaler {
    id: string;
    retailerId: string;
    name: string;
    address: WholesalerAddress;
    contacts: WholesalerContact[];
    bankInfos: BankInfo[];
  }

  //부가세는 도매업체가 정하는 느낌
  export interface WholesalerDetail {
    wholesalerId: string,
    taxType: string
  }

  export interface State {
    checkOut: CheckOut;
    comment: string;
    id: string;
    quantity: number;
    status: string;
    types: number;
  }

  export interface WholesalerContact {
    content: string;
    type: string;
  }

  export interface WholesalerAddress {
    building: Building;
    floor: string;
    detail: string;
  }

  export interface Building {
    id: string;
    displayName: string;
    fullName: string;
    simpleName: string;
  }

  export interface BankInfo {
    id: number;
    bank: string;
    accountNumber: string;
    owner: string;
    type: string;
    briefs: string; //추가
    isActive: number;
    createdAt: number;
    updatedAt: number;
  }
  

  export interface OrderFormat {
    id: number;
    formatItems: OrderFormatItem[];
  }

  export interface OrderFormatItem {
    id:number;
    name: string;
    type: string;
    ordinal: number;
  }

  export interface Invoice {
    id?: string;
    invoiceId?: string;
    retailerId: string;
    orderId: string;
    amount: number;
    status?: number;
    version?: number;
    createdAt?: number;
    updatedAt?: number;
    invoiceWholesalerItems?: InvoiceWholesalerItem[];
  }
  export interface InvoiceWholesalerItem {
    id?: string;
    orderId: string;
    retailerId: string;
    wholesalerId: string;
    invoiceItems: Array<InvoiceItem>;
    inStoreCredit: number;
    isTaxIncluded: boolean;
    isTaxFormIssued: boolean;
    totalPrice: number;
    returnTotal: number;
    isApplyReturn: boolean;
    isCashPrepaid: boolean;
  }
  export interface InvoiceItem {
    id?: string;
    invoiceId?: string;
    orderId: string;
    taskId: string;
    retailerId: string;
    wholesalerId: string;
    productName: string;
    productCode: string;
    productOption: string;
    productPrice: number;
    requestComment: string;
    requestQuantity: number;
    state: InvoiceItemState;
    type: string;
  }
  export interface InvoiceItemState {
    id?: string;
    stateId: string;
    quantity: number;
    comment: string;
    status: number;
    checkOut: boolean;
    type: number;
  }
  export interface InStoreCredit {
    id?: string;
    retailerId: string;
    wholesalerId: string;
    amount: number;
  }
  export interface CheckOut {
    id: number;
    isCheckedOut: boolean;
  }
  export interface User {
    key: string;
    id: string;
    password: string;
  }
  export interface WholesalerExpression {
    id?: string;
    wholesalerId: string;
    retailerId: string;
    expression: string;
  }