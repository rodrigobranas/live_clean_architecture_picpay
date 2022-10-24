import AxiosAdapter from "../../src/after/AxiosAdapter";
import CalculateInvoice from "../../src/after/CalculateInvoice";
import CurrencyGateway from "../../src/after/CurrencyGateway";
import ICurrencyGateway from "../../src/after/ICurrencyGateway";
import InvoiceRepository from "../../src/after/InvoiceRepository";
import PgPromiseAdapter from "../../src/after/PgPromiseAdapter";
import PurchaseRepository from "../../src/after/PurchaseRepository";

test("Deve calcular uma fatura", async function () {
	// given
	const databaseConnection = new PgPromiseAdapter();
	const purchaseRepository = new PurchaseRepository(databaseConnection);
	// const purchaseRepository: PurchaseRepository = {
	// 	async getPurchases (cardNumber: string, month: number, year: number): Promise<any> {
	// 		return [
	// 			{ amount: 1000, currency: "USD" }
	// 		]
	// 	}
	// }
	const httpClient = new AxiosAdapter();
	const currencyGateway = new CurrencyGateway(httpClient);
	// const currencyGateway: ICurrencyGateway = {
	// 	async getCurrency (): Promise<any> {
	// 		return {
	// 			amount: 2
	// 		}
	// 	}
	// };
	const invoiceRepository = new InvoiceRepository(databaseConnection);
	const cardNumber = "1234123412341234";
	const month = 10;
	const year = 2022;
	const calculateInvoice = new CalculateInvoice(purchaseRepository, currencyGateway, invoiceRepository);
	// when
	const output = await calculateInvoice.execute(cardNumber, month, year);
	// then
	expect(output.total).toBe(690);
	await databaseConnection.close();
});
