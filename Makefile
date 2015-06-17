all:
	rm -f dist/fxos-tabswitcher-addon.zip
	cd src && zip -X9ro ../dist/fxos-tabswitcher-addon.zip .
