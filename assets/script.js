document.addEventListener('DOMContentLoaded', function() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', function() {
        item.classList.toggle('open');
      });
    }
  });

  const ctaLinks = document.querySelectorAll('a[href="#cta"]');
  ctaLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const ctaSection = document.getElementById('cta');
      if (ctaSection) {
        ctaSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
