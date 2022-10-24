import Purchase from "./Purchase";

export default class Invoice {
	private purchases: Purchase[];

	constructor () {
		this.purchases = [];
	}

	addPurchases (purchases: Purchase[]) {
		this.purchases = purchases;
	}

	getTotal (currency: number) {
		let total = 0;
		for (const purchase of this.purchases) {
			if (purchase.currency === "USD") {
				total += purchase.amount * currency;
			} else {
				total += purchase.amount;
			}
		}
		return total;
	}
}