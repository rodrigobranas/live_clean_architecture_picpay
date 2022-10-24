import Invoice from "./Invoice";

export default interface IInvoiceRepository {
	getInvoice (cardNumber: string, month: number, year: number): Promise<Invoice>;
}