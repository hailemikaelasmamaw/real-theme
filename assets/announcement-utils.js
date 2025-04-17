document.addEventListener('DOMContentLoaded', async function () {
    const bar = document.querySelector('[data-announcement-bar]');
    if (!bar) return;
  
    try {
      const res = await fetch('https://ipapi.co/json/');
      const data = await res.json();
      const country = data.country_name;
  
      let message = 'Welcome to our store!';
  
      if (country === 'Ethiopia') {
        message = '🎉 Free shipping available in Ethiopia!';
      } else if (country === 'United States') {
        message = '🇺🇸 Fast 2-day shipping across the U.S.';
      }
  
      bar.textContent = message;
      bar.classList.add('show');
    } catch (error) {
      console.error('Location detection failed:', error);
    }
  });
  