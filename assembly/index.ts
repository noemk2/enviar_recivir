import {Context, ContractPromiseBatch, u128} from "near-sdk-as";

export function pagar(): ContractPromiseBatch {
	return ContractPromiseBatch.create("noem.testnet").transfer(u128.from('10000000000000000000000000'));
}
export function pagar_s(): String {
	ContractPromiseBatch.create(Context.sender).transfer(u128.from('1000000000000000000000000'));
	return "pagado"
}
export function pagar_m(): String {
	ContractPromiseBatch.create(Context.contractName).transfer(u128.from('1000000000000000000000000'));
	return "pagado asi mismo?"
}

export function pagado(): string {
	let user = Context.sender
	let operacion = changetype<u128>(Context.attachedDeposit / u128.from('1000000000000000000000000'))
	return "Hello " + user + " gracias por depocitar " + operacion.toString() + "NEAR";

}

