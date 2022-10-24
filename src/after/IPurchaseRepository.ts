export default interface IPurchaseRepository {
	getPurchases (cardNumber: string, month: number, year: number): Promise<any>;
}