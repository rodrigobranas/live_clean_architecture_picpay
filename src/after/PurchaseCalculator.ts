export default class PurchaseCalculator {
	calculate (purchases: any, currency: number) {
		let total = 0;
		for (const purchase of purchases) {
			if (purchase.currency === "USD") {
				total += parseFloat(purchase.amount) * currency;
			} else {
				total += parseFloat(purchase.amount);
			}
		}
		return total;
	}
}