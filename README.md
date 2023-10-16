# WebAssembly Prime Number Checker

This project exemplifies the use of WebAssembly with 3 languages: C++, Go and Rust.
It runs 3 implementations of the same algorithm to check if a number is prime in WebAssembly.
Frontend shows an input field and returns the result of the 3 implementations.

## Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)
- [make](https://www.gnu.org/software/make/)
- [Rust](https://www.rust-lang.org/tools/install) for Rust
- [wasm-pack](https://rustwasm.github.io/wasm-pack/installer/) for Rust
- [emscripten](https://emscripten.org/docs/getting_started/downloads.html#installation-instructions-using-the-emsdk-recommended) for C++
- [TinyGo](https://tinygo.org/getting-started/) for Go

## Setup

```sh
make
```

## Run

```sh
make start
```
