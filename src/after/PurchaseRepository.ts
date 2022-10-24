import pgp from "pg-promise";
import DatabaseConnection from "./DatabaseConnection";
import IPurchaseRepository from "./IPurchaseRepository";
import Purchase from "./Purchase";

export default class PurchaseRepository implements IPurchaseRepository {

	constructor (readonly connection: DatabaseConnection) {
	}

	async getPurchases (cardNumber: string, month: number, year: number) {
		const purchasesData = await this.connection.query("select * from branas.purchase where card_number = $1 and extract(month from date)::integer = $2 and extract(year from date)::integer = $3", [cardNumber, month, year]);
		const purchases: Purchase[] = [];
		for (const purchaseData of purchasesData) {
			purchases.push(new Purchase(purchaseData.card_number, parseFloat(purchaseData.amount), purchaseData.currency));
		}
		return purchases;
	}
}