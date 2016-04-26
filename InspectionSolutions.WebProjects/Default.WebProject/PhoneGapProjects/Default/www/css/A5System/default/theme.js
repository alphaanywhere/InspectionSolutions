
var a5_AJAX_treeDefaults = {
	focusClassName: 'A5TreeFocused',
	node: {
		className: '',
		selectedClassName: 'A5TreeSelected',
		labelClassName: 'A5TreeLabel',
		leaf: {
			firstImage: 'CSS/A5System/default/tree/lf.png',
			image: 'CSS/A5System/default/tree/l.png',
			lastImage: 'CSS/A5System/default/tree/ll.png'
		},
		branch: {
			firstExpandedImage: 'CSS/A5System/default/tree/bcf.png',
			firstCollapsedImage: 'CSS/A5System/default/tree/bof.png',
			expandedImage: 'CSS/A5System/default/tree/bc.png',
			collapsedImage: 'CSS/A5System/default/tree/bo.png',
			lastExpandedImage: 'CSS/A5System/default/tree/bcl.png',
			lastCollapsedImage: 'CSS/A5System/default/tree/bol.png'
		}
	},
	branch: {
		lineImage: 'CSS/A5System/default/tree/b.png',
		nullImage: 'CSS/A5System/default/tree/n.png'
	}
}

var a5_AJAX_autoSuggestDefaults = {
	className: 'A5SuggestionList',
	item: {
		className: 'A5SuggestionListEntry',
		selectedClassName: 'A5SuggestionListEntrySelected',
		keyClassName: 'A5SuggestionListKey'
	},
	title: {
		className: 'A5SuggestionListColumnTitle'
	}
}

var a5_AJAX_editComboDefaults = {
	className: 'A5EditCombo',
	item: {
		className: 'A5EditComboEntry',
		selectedClassName: 'A5EditComboEntrySelected',
		keyClassName: 'A5EditComboKey'
	},
	title: {
		className: 'A5EditComboColumnTitle'
	}
}


var a5_AJAX_windowDefaults = {
	className: 'A5Window',
	lockUIClassName: 'A5WindowLock',
	title: {
		className: 'A5WindowTitle',
		imageClose: 'images/$$window.button.close.png.a5image'
	},
	body: {
		className: 'A5WindowBody'
	},
	footer: {
		className: 'A5WindowFooter'
	},
	_buttonDefaults: {
		className: 'A5WindowButton',
		width: '.5in'
	}
}

var a5_AJAX_accordionDefaults = {
	titleClassName: 'A5AccordionTitleOff',
	titleSelectedClassName: 'A5AccordionTitleOn',
	titleDisabledClassName: 'A5AccordionTitleDisabled',
	paneClassName: 'A5AccordionPane'
}

var a5_AJAX_tabDefaults = {
	tabClassName: 'A5TabTopOff',
	tabSelectedClassName: 'A5TabTopOn',
	tabDisabledClassName: 'A5TabTopDisabled',
	paneClassName: 'A5TabTopPane'
}