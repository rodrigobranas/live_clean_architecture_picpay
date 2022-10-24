import pgp from "pg-promise";
import DatabaseConnection from "./DatabaseConnection";
import IInvoiceRepository from "./IInvoiceRepository";
import Invoice from "./Invoice";
import IPurchaseRepository from "./IPurchaseRepository";
import Purchase from "./Purchase";

export default class InvoiceRepository implements IInvoiceRepository {

	constructor (readonly connection: DatabaseConnection) {
	}

	async getInvoice (cardNumber: string, month: number, year: number) {
		const purchasesData = await this.connection.query("select * from branas.purchase where card_number = $1 and extract(month from date)::integer = $2 and extract(year from date)::integer = $3", [cardNumber, month, year]);
		const purchases: Purchase[] = [];
		for (const purchaseData of purchasesData) {
			purchases.push(new Purchase(purchaseData.card_number, parseFloat(purchaseData.amount), purchaseData.currency));
		}
		const invoice = new Invoice();
		invoice.addPurchases(purchases);
		return invoice;
	}
}