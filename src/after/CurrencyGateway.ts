import axios from "axios";
import HttpClient from "./HttpClient";

export default class CurrencyGateway {

	constructor (readonly httpClient: HttpClient) {
		
	}

	async getCurrency () {
		return this.httpClient.get("http://localhost:3000/currencies");
	}
}