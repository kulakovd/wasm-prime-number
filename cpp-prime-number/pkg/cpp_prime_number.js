import Module from './cpp_prime_number_bg';
import wasmUrl from './cpp_prime_number_bg.wasm?url';

const module = await Module({
  locateFile: () => wasmUrl,
});

export const is_prime = module.cwrap('is_prime', 'boolean', ['number']);
