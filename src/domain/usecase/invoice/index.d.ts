import {
    Order,
    Invoice,
    InvoiceItem,
    InvoiceWholesalerItem
  } from "domain/entity";
  
  //1_Invoice_Drafe, 3_Invoice_Final page에서 사용됨
  export interface GetInvoices {
    execute(): Promise<Invoice[]>;
  }
  
  //2_청구서 발행->미발행 리스트
  export interface GetUnIssuedInvoices {
    execute(): Promise<Invoice[]>;
  }
  
  //3_청구서 item, 5_invoice_final
  export interface GetUnIssuedInvoiceWholesaleritems {
    execute(unissuedInvoice: Invoice): Promise<InvoiceWholesalerItem[]>;
  }
  
  //save draft
  export interface SaveUnIssuedInvoice {
    execute(unissuedInvoice: Invoice): Promise<Invoice[]>;
  }
  
  //reload draft(update invoice)
  export interface GetInvoiceWholesaleritems {
    execute(invoice: Invoice): Promise<InvoiceWholesalerItem[]>;
  }
  
  //get version list
  export interface GetVersions {
    execute(): Promise<Invoice[]>;
  }
  
  //delete draft
  export interface deleteInvoice {
    execute(invoice: Invoice): void;
  }
  
  //완성된 청구서 내역
  //sort
  export interface SortInvoices {
    execute(invoices: Invoice[], by: string): Promise<Invoice[]>;
  }
  
  export interface FilterByDate {
    execute(invoices: Invoice[], from: Date, to: Date): Promise<Invoice[]>;
  }
  
  //pagenation
  export interface PrevOrders {
    execute(
      invoices: Invoice[],
      offset: number,
      limit: number
    ): Promise<Invoice[]>;
  }
  
  export interface NextOrders {
    execute(
      invoices: Invoice[],
      offset: number,
      limit: number
    ): Promise<Invoice[]>;
  }

  