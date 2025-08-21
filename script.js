document.getElementById('year').textContent = new Date().getFullYear();
const menuBtn = document.getElementById('menuBtn');
const navList = document.getElementById('navList');
menuBtn && menuBtn.addEventListener('click', () => {
  if(navList.style.display === 'flex') navList.style.display = '';
  else navList.style.display = 'flex';
  navList.style.flexDirection = 'column';
  navList.style.background = 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))';
  navList.style.padding = '12px';
  navList.style.borderRadius = '10px';
});

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if(href.length > 1 && document.querySelector(href)){
      e.preventDefault();
      document.querySelector(href).scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

function submitForm(e){
  e.preventDefault();
  const status = document.getElementById('formStatus');
  status.textContent = 'Sending...';
  setTimeout(() => {
    status.textContent = 'Thanks! I will reply on email soon.';
    document.getElementById('contactForm').reset();
  }, 900);
  return false;
}
