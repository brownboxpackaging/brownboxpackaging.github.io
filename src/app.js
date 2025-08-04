import './styles/main.scss';
import '@hybridxweb/copyright-x/dist/copyright-x';

// Enhanced carousel functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize carousel with better settings
    const heroCarousel = document.querySelector('#heroCarousel');
    if (heroCarousel) {
        // Enable keyboard navigation
        heroCarousel.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft') {
                $(heroCarousel).carousel('prev');
            } else if (e.key === 'ArrowRight') {
                $(heroCarousel).carousel('next');
            }
        });
        
        // Pause on hover
        $(heroCarousel).on('mouseenter', function() {
            $(this).carousel('pause');
        }).on('mouseleave', function() {
            $(this).carousel('cycle');
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Enhanced mobile menu functionality
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
        // Handle toggle button clicks
        navbarToggler.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            
            if (!isExpanded) {
                navbarCollapse.classList.add('show');
                document.body.style.overflow = 'hidden';
            } else {
                navbarCollapse.classList.remove('show');
                document.body.style.overflow = '';
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navbarToggler.contains(e.target) && !navbarCollapse.contains(e.target)) {
                navbarCollapse.classList.remove('show');
                navbarToggler.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });
        
        // Close menu when clicking on nav links
        const navLinks = navbarCollapse.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navbarCollapse.classList.remove('show');
                navbarToggler.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });
        
        // Handle escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
                navbarToggler.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });
    }
});

const offerings = document.querySelector('#offerings');

const offers = [
    {
        icon: 'fa-box-open',
        title: 'Corrugated boxes',
        statement: 'For packaging and shipment with single colour flexo printing.'
    },
    {
        icon: 'fa-truck-loading',
        title: 'Duplex boxes',
        statement: 'For products with offset printing and lamination.'
    },
    {
        icon: 'fa-scroll',
        title: 'Corrugated sheets',
        statement: 'for partitioning and other purposes'
    },
    {
        icon: 'fa-toilet-paper',
        title: 'Corrugated rolls',
        statement: 'For cushioning and packaging of fragile products.'
    },
    {
        icon: 'fa-box',
        title: 'Custom made solutions',
        statement: 'For branding, packaging and shipment of your product folio.',
    }
];

if (offerings) {
    offerings.innerHTML = offers.map(
        (offer, index) => {
            return `<div class="row mb-4 fade-in-up" style="animation-delay: ${index * 0.1}s">
            <div class="col-2 col-md-1 d-flex justify-content-center">
              <div class="offering-icon">
                <i class="fas ${offer.icon} fa-lg"></i>
              </div>
            </div>
            <div class="col-10 col-md-11">
              <h5 class="font-weight-bold mb-3 offering-title">${offer.title}</h5>
              <p class="text-muted offering-text">${offer.statement}</p>
            </div>
          </div>`;
        }
    ).join('');
}
