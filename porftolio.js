// Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Theme toggle with localStorage
    const html = document.documentElement;
    const btn = document.getElementById('theme-toggle');
    const label = document.getElementById('theme-label');

    const applyTheme = (mode) => {
      html.classList.remove('light', 'dark');
      if (mode) html.classList.add(mode);
      label.textContent = mode === 'dark' ? 'Light' : 'Dark';
    };

    // initialize from localStorage or system
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') {
      applyTheme(saved);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      applyTheme(prefersDark ? 'dark' : 'light');
    }

    btn.addEventListener('click', () => {
      const next = html.classList.contains('dark') ? 'light' : 'dark';
      localStorage.setItem('theme', next);
      applyTheme(next);
    });
const hoverOverlay = document.getElementById('hover-overlay');
const hoverImg = document.getElementById('hover-img');

document.querySelectorAll('.zoomable').forEach(img => {
  img.addEventListener('mouseenter', () => {
    hoverImg.src = img.src;
    hoverOverlay.style.display = 'flex';
  });
  
  img.addEventListener('mouseleave', () => {
    hoverOverlay.style.display = 'none';
  });
});