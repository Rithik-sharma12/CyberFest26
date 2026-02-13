// ========================================
// Event Data
// ========================================
const events = [
    {
        id: 1,
        title: 'NYX-CTF',
        description: 'Capture The Flag competition - the ultimate cybersecurity challenge! Test your hacking skills, exploit vulnerabilities, and solve complex security puzzles. Individual and team categories available. Win exciting prizes and recognition!',
        date: '2026-02-26',
        time: '9:00 AM',
        endDate: '2026-02-26',
        endTime: '6:00 PM',
        venue: 'Cyber Security Lab, Block C',
        fee: 250,
        category: 'tech',
        image: '',
        contact: 'nyxctf@cyberfest26.edu',
        isOpen: true
    },
    {
        id: 2,
        title: 'Among Us',
        description: 'Real-life social deduction game inspired by the popular video game! Work together to complete tasks while identifying the imposters among you. Strategic thinking, communication, and deception skills required. Epic prize pool!',
        date: '2026-02-26',
        time: '9:00 AM',
        endDate: '2026-02-26',
        endTime: '8:00 PM',
        venue: 'Student Activity Center',
        fee: 250,
        category: 'cultural',
        image: '',
        contact: 'amongus@cyberfest26.edu',
        isOpen: true
    },
    {
        id: 3,
        title: 'Hidden Key',
        description: 'An immersive treasure hunt and puzzle-solving adventure! Decode cryptic clues, solve riddles, and navigate through challenging obstacles to find the hidden key. Perfect blend of physical and mental challenges.',
        date: '2026-02-26',
        time: '9:00 AM',
        endDate: '2026-02-26',
        endTime: '5:00 PM',
        venue: 'Campus-wide Event',
        fee: 250,
        category: 'tech',
        image: '',
        contact: 'hiddenkey@cyberfest26.edu',
        isOpen: true
    },
    {
        id: 4,
        title: 'Mind Spark',
        description: 'Innovation and ideation competition where brilliant minds collide! Present your groundbreaking ideas, innovative solutions, and creative projects. Categories include Tech, Social Impact, and Creative Arts. Mentorship and funding opportunities available.',
        date: '2026-02-26',
        time: '9:00 AM',
        endDate: '2026-02-26',
        endTime: '6:00 PM',
        venue: 'Innovation Hub',
        fee: 0,
        category: 'business',
        image: '',
        contact: 'mindspark@cyberfest26.edu',
        isOpen: true
    },
    {
        id: 5,
        title: 'Trace the Truth (TTT)',
        description: 'Digital forensics and investigation challenge! Analyze evidence, trace digital footprints, and solve cybercrime mysteries. Real-world scenarios, professional tools, and expert guidance. Perfect for aspiring cybersecurity professionals.',
        date: '2026-02-26',
        time: '9:00 AM',
        endDate: '2026-02-26',
        endTime: '4:30 PM',
        venue: 'Digital Forensics Lab',
        fee: 250,
        category: 'tech',
        image: '',
        contact: 'ttt@cyberfest26.edu',
        isOpen: true
    }
];

// ========================================
// State Management
// ========================================
let registrations = JSON.parse(localStorage.getItem('registrations')) || [];

// ========================================
// Initialize App
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initMatrixRain();
    renderEvents();
    setupNavigation();
    initMobileMenu();
    initScrollReveal();
});

// ========================================
// Mobile Menu
// ========================================
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const navLinkItems = document.querySelectorAll('.nav-link');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking a link
        navLinkItems.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }
}

// ========================================
// Scroll Reveal Animations
// ========================================
function initScrollReveal() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    // Observe elements with reveal classes
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    revealElements.forEach(el => observer.observe(el));

    // Also observe event cards when they're rendered
    const eventsGrid = document.getElementById('eventsGrid');
    if (eventsGrid) {
        const gridObserver = new MutationObserver(() => {
            const eventCards = eventsGrid.querySelectorAll('.event-card');
            eventCards.forEach(card => {
                card.classList.add('reveal');
                observer.observe(card);
            });
        });
        gridObserver.observe(eventsGrid, { childList: true });
    }

    // Add reveal class to sections
    document.querySelectorAll('.section-header, .about-content, .footer-content').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
}

// ========================================
// Matrix Rain Effect (Performance Optimized)
// ========================================
function initMatrixRain() {
    const canvas = document.getElementById('matrixCanvas');
    const ctx = canvas.getContext('2d');
    
    // Detect mobile for performance optimization
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
    
    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    
    // Debounced resize handler
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(resizeCanvas, 150);
    });
    
    // Matrix characters - simplified for mobile
    const chars = isMobile 
        ? '01アウカキサシタチナニハヒマミヤユラリ@#$%'
        : 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^&*(){}[]<>?/\\|~`';
    const charArray = chars.split('');
    
    // Colors for the matrix rain
    const colors = [
        '#00ff00', // Green
        '#ff0040', // Red
        '#00a2ff', // Blue
        '#ffff00', // Yellow
        '#bf00ff', // Purple
        '#00ffff', // Cyan
    ];
    
    // Adjust density for mobile
    const fontSize = isMobile ? 16 : 14;
    const columnSpacing = isMobile ? 3 : 1; // Skip columns on mobile
    const columns = Math.floor(canvas.width / fontSize / columnSpacing);
    
    // Array to track position of each column
    const drops = [];
    const dropColors = [];
    const speeds = [];
    
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -100;
        dropColors[i] = colors[Math.floor(Math.random() * colors.length)];
        speeds[i] = 0.5 + Math.random() * 1.5;
    }
    
    // Frame rate control
    const targetFPS = isMobile ? 20 : 30;
    const frameInterval = 1000 / targetFPS;
    let lastFrameTime = 0;
    let animationId;
    
    function draw(currentTime) {
        animationId = requestAnimationFrame(draw);
        
        // Throttle frame rate
        const elapsed = currentTime - lastFrameTime;
        if (elapsed < frameInterval) return;
        lastFrameTime = currentTime - (elapsed % frameInterval);
        
        // Semi-transparent black for trail effect
        ctx.fillStyle = isMobile ? 'rgba(0, 0, 0, 0.08)' : 'rgba(0, 0, 0, 0.03)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.font = `${fontSize}px monospace`;
        
        // Disable shadow on mobile for performance
        const useShadow = !isMobile;
        
        for (let i = 0; i < drops.length; i++) {
            // Random character
            const char = charArray[Math.floor(Math.random() * charArray.length)];
            
            // Get position
            const x = i * fontSize * columnSpacing;
            const y = drops[i] * fontSize;
            
            // Occasional bright "head" character
            if (Math.random() > 0.98) {
                ctx.fillStyle = '#ffffff';
                if (useShadow) {
                    ctx.shadowBlur = 15;
                    ctx.shadowColor = dropColors[i];
                }
            } else {
                ctx.fillStyle = dropColors[i];
                if (useShadow) {
                    ctx.shadowBlur = 8;
                    ctx.shadowColor = dropColors[i];
                }
            }
            
            ctx.fillText(char, x, y);
            
            // Reset shadow
            if (useShadow) ctx.shadowBlur = 0;
            
            // Move drop
            drops[i] += speeds[i];
            
            // Reset when reaching bottom
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
                dropColors[i] = colors[Math.floor(Math.random() * colors.length)];
                speeds[i] = 0.5 + Math.random() * 1.5;
            }
        }
    }
    
    // Start animation with requestAnimationFrame
    animationId = requestAnimationFrame(draw);
    
    // Pause animation when tab is not visible
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            cancelAnimationFrame(animationId);
        } else {
            lastFrameTime = 0;
            animationId = requestAnimationFrame(draw);
        }
    });
}

// ========================================
// Navigation
// ========================================
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const target = link.getAttribute('href');
            
            // Only handle anchor links (#home, #about), let page links navigate normally
            if (target.startsWith('#')) {
                e.preventDefault();
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                
                const targetElement = document.querySelector(target);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
            // For external links like events.html, let them navigate normally
        });
    });

    // Update active link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ========================================
// Render Events
// ========================================
function renderEvents() {
    const eventsGrid = document.getElementById('eventsGrid');
    const filteredEvents = events;
    
    if (filteredEvents.length === 0) {
        eventsGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem;">
                <p style="color: var(--text-muted); font-size: 1.2rem;">No events found in this category.</p>
            </div>
        `;
        return;
    }
    
    eventsGrid.innerHTML = filteredEvents.map(event => createEventCard(event)).join('');
    
    // Add click listeners to event cards
    document.querySelectorAll('.event-card').forEach((card, index) => {
        const event = filteredEvents[index];
        card.addEventListener('click', (e) => {
            if (!e.target.classList.contains('register-btn')) {
                showEventDetail(event);
            }
        });
    });
    
    // Add click listeners to details buttons
    document.querySelectorAll('.details-btn').forEach((btn, index) => {
        const event = filteredEvents[index];
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            showEventDetail(event);
        });
    });
}

// ========================================
// Create Event Card
// ========================================
function createEventCard(event) {
    const isRegistered = registrations.some(reg => reg.eventId === event.id);
    
    return `
        <div class="event-card" data-category="${event.category}">
            <img src="${event.image}" alt="${event.title}" class="event-image">
            <div class="event-content">
                <span class="event-category">TECH</span>
                <h3 class="event-title">${event.title}</h3>
                <p class="event-description">${event.description.substring(0, 100)}...</p>
                
                <div class="event-details">
                    <div class="detail-row">
                        <span class="detail-icon">📅</span>
                        <span>${formatDate(event.date)} at ${event.time}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-icon">📍</span>
                        <span>${event.venue}</span>
                    </div>
                </div>
                
                <div class="event-footer">
                    <div class="event-price ${event.fee === 0 ? 'free' : ''}">
                        ${event.fee === 0 ? 'FREE' : `₹${event.fee}`}
                    </div>
                    <button class="details-btn">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    `;
}

// ========================================
// Show Event Detail Modal
// ========================================
function showEventDetail(event) {
    const modal = document.getElementById('eventModal');
    const modalBody = document.getElementById('modalBody');
    const isRegistered = registrations.some(reg => reg.eventId === event.id);
    
    modalBody.innerHTML = `
        <div class="event-detail-header">
            <span class="event-category">TECH</span>
            <h2 class="event-detail-title">${event.title}</h2>
            <p class="event-detail-description">${event.description.substring(0, 120)}...</p>
        </div>
        
        <div class="event-detail-info">
            <div class="info-item">
                <span class="info-item-icon">📅</span>
                <div class="info-item-content">
                    <strong>Date</strong>
                    <span>${formatDate(event.date)}</span>
                </div>
            </div>
            
            <div class="info-item">
                <span class="info-item-icon">⏰</span>
                <div class="info-item-content">
                    <strong>Time</strong>
                    <span>${event.time} - ${event.endTime}</span>
                </div>
            </div>
            
            <div class="info-item">
                <span class="info-item-icon">📍</span>
                <div class="info-item-content">
                    <strong>Venue</strong>
                    <span>${event.venue}</span>
                </div>
            </div>
            
            <div class="info-item">
                <span class="info-item-icon">💰</span>
                <div class="info-item-content">
                    <strong>Fee</strong>
                    <span class="${event.fee === 0 ? 'free' : ''}">${event.fee === 0 ? 'FREE' : `₹${event.fee}`}</span>
                </div>
            </div>
        </div>
        
        <div class="modal-btn-group">
            <button class="modal-cancel-btn" onclick="closeEventModal()">Cancel</button>
        </div>
    `;
    
    modal.classList.add('active');
    setupModalClose(modal);
}

// ========================================
// Show Registration Form
// ========================================
function showRegistrationForm(eventId) {
    const event = typeof eventId === 'object' ? eventId : events.find(e => e.id === eventId);
    
    // Close event detail modal if open
    document.getElementById('eventModal').classList.remove('active');
    
    const modal = document.getElementById('registrationModal');
    document.getElementById('eventId').value = event.id;
    
    modal.classList.add('active');
    setupModalClose(modal);
    
    const form = document.getElementById('registrationForm');
    form.onsubmit = (e) => {
        e.preventDefault();
        handleRegistration(event);
    };
}

// ========================================
// Handle Registration
// ========================================
function handleRegistration(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    
    // Check if already registered
    if (registrations.some(reg => reg.eventId === event.id && reg.email === email)) {
        alert('You are already registered for this event!');
        return;
    }
    
    // Create registration
    const registration = {
        id: Date.now(),
        eventId: event.id,
        eventTitle: event.title,
        name,
        email,
        phone,
        registeredAt: new Date().toISOString()
    };
    
    // Save registration
    registrations.push(registration);
    localStorage.setItem('registrations', JSON.stringify(registrations));
    
    // Update event registered count
    event.registered++;
    
    // Close modal and show success
    document.getElementById('registrationModal').classList.remove('active');
    showSuccessMessage();
    
    // Reset form
    document.getElementById('registrationForm').reset();
    
    // Re-render events to update UI
    renderEvents();
}

// ========================================
// Show Success Message
// ========================================
function showSuccessMessage() {
    const successMsg = document.getElementById('successMessage');
    successMsg.classList.add('show');
    
    setTimeout(() => {
        successMsg.classList.remove('show');
    }, 3000);
}

// ========================================
// Modal Close Functionality
// ========================================
function setupModalClose(modal) {
    const closeBtn = modal.querySelector('.modal-close');
    
    closeBtn.onclick = () => {
        modal.classList.remove('active');
    };
    
    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    };
}

// Close Event Modal
function closeEventModal() {
    const modal = document.getElementById('eventModal');
    modal.classList.remove('active');
}

// ========================================
// Utility Functions
// ========================================
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// ========================================
// Make showRegistrationForm globally available
// ========================================
window.showRegistrationForm = showRegistrationForm;
