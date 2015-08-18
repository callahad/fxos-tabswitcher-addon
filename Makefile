all:
	mkdir -p dist
	# New-style add-ons
	rm -f dist/fxos-tabswitcher-extension.zip
	cd src && zip -X9ro ../dist/fxos-tabswitcher-extension.zip . -x update.webapp manifest.webapp tabswitcher-addon.js
	# Old-style add-ons
	rm -f dist/fxos-tabswitcher-addon.zip
	cd src && zip -X9ro ../dist/fxos-tabswitcher-addon.zip . -x update.webapp manifest.json tabswitcher-addon.css
