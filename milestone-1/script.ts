// Select all editable elements
const editableElements = document.querySelectorAll('.editable');

// Function to save data to local storage
function saveToLocalStorage(section: string, content: string) {
  localStorage.setItem(section, content);
}

// Function to load data from local storage
function loadFromLocalStorage(section: string): string | null {
  return localStorage.getItem(section);
}

// Initialize editable elements with data from local storage
editableElements.forEach((element) => {
  const section = element.getAttribute('data-section');
  if (section) {
    const savedContent = loadFromLocalStorage(section);
    if (savedContent) {
      element.textContent = savedContent;
    }
    
    // Add event listener for content changes
    element.addEventListener('input', () => {
      saveToLocalStorage(section, element.textContent || '');
    });
  }
});
