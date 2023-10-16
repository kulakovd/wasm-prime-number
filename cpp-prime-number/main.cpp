#include <stdio.h>
#include <emscripten/emscripten.h>

int main() {
    printf("Hello from C++!\n");
    return 0;
}

#ifdef __cplusplus
#define EXTERN extern "C"
#else
#define EXTERN
#endif

EXTERN EMSCRIPTEN_KEEPALIVE bool is_prime(int n) {
  if (n <= 1) {
      return false;
  }
  if (n <= 3) {
      return true;
  }
  if (n % 2 == 0 || n % 3 == 0) {
      return false;
  }
  for (int i = 5; i * i <= n; i = i + 6) {
      if (n % i == 0 || n % (i + 2) == 0) {
          return false;
      }
  }
  return true;
}
