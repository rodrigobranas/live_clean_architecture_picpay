import Invoice from "../../src/after/Invoice";
import Purchase from "../../src/after/Purchase";

test("Deve criar uma fatura", function () {
	const invoice = new Invoice();
	invoice.addPurchases([
		new Purchase("", 1000, "USD")
	]);
	expect(invoice.getTotal(3)).toBe(3000);
});