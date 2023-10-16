import "./wasm_exec"
import wasmUrl from "./go_prime_number_bg.wasm?url"

const go = new Go();

const result = await WebAssembly.instantiateStreaming(fetch(wasmUrl), go.importObject)
go.run(result.instance);

export const is_prime = result.instance.exports.isPrime;
