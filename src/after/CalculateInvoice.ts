import ICurrencyGateway from "./ICurrencyGateway";
import Invoice from "./Invoice";
import InvoiceRepository from "./InvoiceRepository";
import IPurchaseRepository from "./IPurchaseRepository";
import PurchaseCalculator from "./PurchaseCalculator";

export default class CalculateInvoice {

	constructor (
		readonly purchaseRepository: IPurchaseRepository,
		readonly currencyGateway: ICurrencyGateway,
		readonly invoiceRepository: InvoiceRepository
	) {
	}

	async execute (cardNumber: string, month: number, year: number): Promise<Output> {
		// const purchases = await this.purchaseRepository.getPurchases(cardNumber, month, year);
		const currency = await this.currencyGateway.getCurrency();
		// const purchaseCalculator = new PurchaseCalculator();
		// const total = purchaseCalculator.calculate(purchases, currency.amount);
		// const invoice = new Invoice();
		// invoice.addPurchases(purchases);
		const invoice = await this.invoiceRepository.getInvoice(cardNumber, month, year);
		const total = invoice.getTotal(currency.amount);
		return {
			total
		};
	}
}

type Output = {
	total: number
}