var headerClass = 'tab-header',
	contentClass = 'tab-content';

var tabHeaders = document.getElementsByClassName(headerClass);
for (var i = 0; i < tabHeaders.length; i++) {
	tabHeaders[i].addEventListener('click', activateTab);
}

function activateTab(event) {
	var myID = this.id, // e.g. tab-header-1
		contentID = myID.replace('header', 'content'); // result: tab-content-1
	
	deactivateAllTabs();
	
	document.getElementById(myID).className =  headerClass + ' active';
	document.getElementById(contentID).className = contentClass + ' active';
}

function deactivateAllTabs() {
	var tabHeaders = document.getElementsByClassName(headerClass),
		tabContents = document.getElementsByClassName(contentClass);
	
	for (var i = 0; i < tabHeaders.length; i++) {
		tabHeaders[i].className = headerClass;
		tabContents[i].className = contentClass;
	}
}