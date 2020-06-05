function closeConsoleTabs() {
	let tabContainerXPath = ".//ul[contains(@class, 'tabBarItems')]//li[contains(@class, 'tabItem') and contains(@class, 'hasActions')]//div[contains(@class, 'close') and contains(@class, 'slds-context-bar__icon-action')]";
	let closeBtnXPath = "./button[contains(@class, 'slds-button')]";
	let tabContainer = document.evaluate(tabContainerXPath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
	if (tabContainer.snapshotLength === 0) {
		tabContainerXPath = ".//ul[contains(@class, 'x-tab-strip')]//li[contains(@class, 'x-tab-strip-closable')]";
		closeBtnXPath = "./a[contains(@class, 'x-tab-strip-close')]";
		tabContainer = document.evaluate(tabContainerXPath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
	}
	for (var i = 0; i < tabContainer.snapshotLength; i++) {
	    var tab = tabContainer.snapshotItem(i);
	    if (tab) {
	        var btn = document.evaluate(closeBtnXPath, tab, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
	        if (btn.singleNodeValue) {
	            btn.singleNodeValue.click()
	        }
	    }
	}
}

closeConsoleTabs();