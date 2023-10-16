.ONESHELL:
all:
	em++ main.cpp \
		-s EXPORTED_FUNCTIONS=_is_prime \
		-s EXPORTED_RUNTIME_METHODS=ccall,cwrap \
		-s EXPORT_ES6=1 \
		-s ENVIRONMENT="web" \
		-s SINGLE_FILE=1 \
		-s MODULARIZE=1 \
		-o ./pkg/cpp_prime_number_bg.js
	cd pkg && yarn link
