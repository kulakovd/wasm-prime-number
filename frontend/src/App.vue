<script setup lang="ts">
import * as rustPrimeNumber from 'rust-prime-number'
import * as cppPrimeNumber from 'cpp-prime-number'
import * as goPrimeNumber from 'go-prime-number'
import { computed, ref } from 'vue'

const number = ref(0)
const isPrime = computed(() => ({
  rust: rustPrimeNumber.is_prime(number.value),
  cpp: cppPrimeNumber.is_prime(number.value),
  go: goPrimeNumber.is_prime(number.value)
}))
</script>

<template>
  <div class="div">
    <input v-model="number" type="number" />
    <p v-if="isPrime.rust">Rust: Prime</p>
    <p v-else>Rust: Not Prime</p>
    <p v-if="isPrime.cpp">C++: Prime</p>
    <p v-else>C++: Not Prime</p>
    <p v-if="isPrime.go">Go: Prime</p>
    <p v-else>Go: Not Prime</p>
  </div>
</template>

<style scoped>
.div {
  font-size: 2em;
}

input {
  font-size: 2em;
}
</style>
