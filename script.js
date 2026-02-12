// ========================================
// Event Data
// ========================================
const events = [
    {
        id: 1,
        title: 'NYX-CTF',
        description: 'Capture The Flag competition - the ultimate cybersecurity challenge! Test your hacking skills, exploit vulnerabilities, and solve complex security puzzles. Team event with 2-3 members per team. Win exciting prizes and recognition!',
        date: '2026-02-26',
        time: '9:30 AM',
        endDate: '2026-02-26',
        endTime: '12:00 PM',
        venue: 'IT Lab, MT Block',
        capacity: 100,
        registered: 45,
        fee: 0,
        category: 'tech',
        image: '',
        contact: 'nyxctf@cyberfeast.edu',
        isOpen: true
    },
    {
        id: 2,
        title: 'Among Us',
        description: 'Real-life social deduction game inspired by the popular video game! Work together to complete tasks while identifying the imposters among you. Team event with 2-3 members per team. Strategic thinking, communication, and deception skills required. Epic prize pool!',
        date: '2026-02-26',
        time: '9:30 AM',
        endDate: '2026-02-26',
        endTime: '1:00 PM',
        venue: 'Cyber Lab, MT Block',
        capacity: 80,
        registered: 32,
        fee: 100,
        category: 'cultural',
        image: '',
        contact: 'amongus@cyberfeast.edu',
        isOpen: true
    },
    {
        id: 3,
        title: 'Hidden Key',
        description: 'An immersive treasure hunt and puzzle-solving adventure! Decode cryptic clues, solve riddles, and navigate through challenging obstacles to find the hidden key. Team event with 2-3 members per team. Perfect blend of physical and mental challenges.',
        date: '2026-02-26',
        time: '12:30 PM',
        endDate: '2026-02-26',
        endTime: '2:30 PM',
        venue: 'Drawing Hall, MT Block',
        capacity: 150,
        registered: 67,
        fee: 50,
        category: 'tech',
        image: '',
        contact: 'hiddenkey@cyberfeast.edu',
        isOpen: true
    },
    {
        id: 4,
        title: 'Mind Spark',
        description: 'Innovation and ideation competition where brilliant minds collide! Present your groundbreaking ideas, innovative solutions, and creative projects. Team event with 2-3 members per team. Categories include Tech, Social Impact, and Creative Arts. Mentorship and funding opportunities available.',
        date: '2026-02-26',
        time: '9:30 AM',
        endDate: '2026-02-26',
        endTime: '12:00 PM',
        venue: 'S&H 4101, FT Block',
        capacity: 120,
        registered: 54,
        fee: 150,
        category: 'business',
        image: '',
        contact: 'mindspark@cyberfeast.edu',
        isOpen: true
    },
    {
        id: 5,
        title: 'Trace the Truth (TTT)',
        description: 'Digital forensics and investigation challenge! Analyze evidence, trace digital footprints, and solve cybercrime mysteries. Team event with 2-3 members per team. Real-world scenarios, professional tools, and expert guidance. Perfect for aspiring cybersecurity professionals.',
        date: '2026-02-26',
        time: '12:30 PM',
        endDate: '2026-02-26',
        endTime: '2:30 PM',
        venue: 'IT Lab, MT Block',
        capacity: 60,
        registered: 28,
        fee: 0,
        category: 'tech',
        image: '',
        contact: 'ttt@cyberfeast.edu',
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
    renderEvents();
    setupNavigation();
});

// ========================================
// Navigation
// ========================================
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            const target = link.getAttribute('href');
            document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
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
    
    // Add click listeners to register buttons
    document.querySelectorAll('.register-btn').forEach((btn, index) => {
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
    const availableSpots = event.capacity - event.registered;
    const isFull = availableSpots <= 0;
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
                    <div class="detail-row">
                        <span class="detail-icon">👥</span>
                        <span>${availableSpots} spots available</span>
                    </div>
                </div>
                
                <div class="event-footer">
                    <div class="event-price ${event.fee === 0 ? 'free' : ''}">
                        ${event.fee === 0 ? 'FREE' : `₹${event.fee}`}
                    </div>
                    <button class="register-btn" ${isFull || isRegistered ? 'disabled' : ''}>
                        ${isRegistered ? 'Registered ✓' : isFull ? 'Full' : 'View more details'}
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
    const availableSpots = event.capacity - event.registered;
    const isRegistered = registrations.some(reg => reg.eventId === event.id);
    
    modalBody.innerHTML = `
        <div class="event-detail-header">
            <span class="event-category">TECH</span>
            <h2 class="event-detail-title">${event.title}</h2>
            <p class="event-detail-description">${event.description}</p>
        </div>
        
        <div class="event-detail-info">
            <div class="info-item">
                <span class="info-item-icon">📅</span>
                <div class="info-item-content">
                    <strong>Date & Time</strong>
                    <span>${formatDate(event.date)} - ${formatDate(event.endDate)}</span>
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
                <span class="info-item-icon">👥</span>
                <div class="info-item-content">
                    <strong>Capacity</strong>
                    <span>2-3 members</span>
                </div>
            </div>
            
            <div class="info-item">
                <span class="info-item-icon">💰</span>
                <div class="info-item-content">
                    <strong>Registration Fee</strong>
                    <span class="${event.fee === 0 ? 'free' : ''}">${event.fee === 0 ? 'FREE' : `₹${event.fee}`}</span>
                </div>
            </div>
        </div>
        
        <button class="modal-register-btn" onclick="showRegistrationForm(${event.id})" ${availableSpots <= 0 || isRegistered ? 'disabled' : ''}>
            ${isRegistered ? 'Already Registered ✓' : availableSpots <= 0 ? 'Event Full' : 'Register Now'}
        </button>
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
