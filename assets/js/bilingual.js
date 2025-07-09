// Bilingual Article Functionality
// Language preference management and tab switching

function switchLanguage(lang) {
  // Hide all language content
  document.querySelectorAll('.lang-content').forEach(content => {
    content.classList.add('hidden');
  });
  
  // Show selected language content
  const selectedContent = document.getElementById('lang-' + lang);
  if (selectedContent) {
    selectedContent.classList.remove('hidden');
  }
  
  // Update button states
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  // Activate selected button
  const selectedBtn = document.querySelector(`[data-lang="${lang}"]`);
  if (selectedBtn) {
    selectedBtn.classList.add('active');
  }
  
  // Save language preference
  localStorage.setItem('preferredLanguage', lang);
  
  // Update URL hash without scrolling
  if (history.replaceState) {
    history.replaceState(null, null, '#' + lang);
  }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
  // Get language preference from URL hash, localStorage, or default to Spanish
  let lang = 'es'; // Default to Spanish
  
  // Check URL hash first
  if (window.location.hash) {
    const hashLang = window.location.hash.substring(1);
    if (hashLang === 'es' || hashLang === 'en') {
      lang = hashLang;
    }
  } else {
    // Check localStorage
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
      lang = savedLang;
    }
  }
  
  // Apply the language
  switchLanguage(lang);
});

// Handle browser back/forward navigation
window.addEventListener('hashchange', function() {
  if (window.location.hash) {
    const hashLang = window.location.hash.substring(1);
    if (hashLang === 'es' || hashLang === 'en') {
      switchLanguage(hashLang);
    }
  }
});

// Export for use in other scripts
window.bilingualUtils = {
  switchLanguage: switchLanguage
};