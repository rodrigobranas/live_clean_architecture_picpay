export default interface ICurrencyGateway {
	getCurrency (): Promise<any>;
}