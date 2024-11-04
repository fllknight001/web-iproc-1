function openTab(event, tabId) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tabContent => tabContent.classList.add('hidden'));

    // Reset all tabs to inactive state
    const tabs = document.querySelectorAll('.pill-tab');
    tabs.forEach(tab => {
        tab.classList.remove('text-blue-600', 'bg-blue-100');
        tab.classList.add('text-gray-600', 'bg-gray-100');
    });

    // Show selected tab content and set active tab
    document.getElementById(tabId).classList.remove('hidden');
    event.currentTarget.classList.add('text-blue-600', 'bg-blue-100');
    event.currentTarget.classList.remove('text-gray-600', 'bg-gray-100');
}

// Automatically open the default tab
document.getElementById("defaultOpen").click();