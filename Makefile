all:
	$(MAKE) -C cpp-prime-number
	$(MAKE) -C go-prime-number
	$(MAKE) -C rust-prime-number
	$(MAKE) -C frontend

start:
	$(MAKE) -C frontend start
