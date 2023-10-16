import Module from './cpp_prime_number_bg';

const module = await Module();

export const is_prime = module.cwrap('is_prime', 'boolean', ['number']);
