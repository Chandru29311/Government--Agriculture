// Script for interactive elements (if any)
document.addEventListener('DOMContentLoaded', () => {
    console.log('Nextley Agriculture Page Loaded');

    // Load user profile from localStorage
    const storedEmail = localStorage.getItem('userEmail');
    const storedRole = localStorage.getItem('userRole');

    if (storedEmail) {
        document.querySelectorAll('.topbar-user-email, .sidebar-user-email').forEach(el => el.innerText = storedEmail);
        // Set avatar initial to first letter of email
        const initial = storedEmail.charAt(0).toUpperCase();
        document.querySelectorAll('.topbar-user-avatar, .sidebar-user-avatar').forEach(el => el.innerText = initial);
    }
    
    if (storedRole) {
        // Format role (e.g. "admin" -> "Admin")
        let formattedRole = storedRole.charAt(0).toUpperCase() + storedRole.slice(1);
        if (storedRole === 'admin') formattedRole = 'Super Admin'; // Custom naming if needed, or just "Admin"
        if (storedRole === 'user') formattedRole = 'Farmer Member';
        
        document.querySelectorAll('.topbar-user-name, .sidebar-user-name').forEach(el => el.innerText = formattedRole);
    }

    // Initialize Dashboard Chart if element exists
    const ctx = document.getElementById('farmOverviewChart');
    if (ctx && typeof Chart !== 'undefined') {
        // Gradient for the chart area
        const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, 'rgba(118, 185, 0, 0.4)'); // Light green top
        gradient.addColorStop(1, 'rgba(118, 185, 0, 0)');   // Transparent bottom

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['May 1', 'May 7', 'May 14', 'May 21', 'May 24'],
                datasets: [{
                    label: 'Farm Overview',
                    data: [10000, 18000, 22000, 31000, 48250],
                    borderColor: '#76b900', // Primary Green
                    backgroundColor: gradient,
                    borderWidth: 2,
                    pointBackgroundColor: '#fff',
                    pointBorderColor: '#76b900',
                    pointBorderWidth: 2,
                    pointRadius: 4,
                    pointHoverRadius: 6,
                    fill: true,
                    tension: 0.4 // Smooth curves
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: '#fff',
                        titleColor: '#333',
                        bodyColor: '#333',
                        borderColor: '#e0e0e0',
                        borderWidth: 1,
                        padding: 10,
                        displayColors: false,
                        callbacks: {
                            label: function(context) {
                                return '₹' + context.parsed.y.toLocaleString();
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        grid: {
                            display: false,
                            drawBorder: false
                        },
                        ticks: {
                            color: '#888',
                            font: {
                                size: 12
                            }
                        }
                    },
                    y: {
                        grid: {
                            color: '#f0f0f0',
                            drawBorder: false,
                            borderDash: [5, 5]
                        },
                        ticks: {
                            color: '#888',
                            font: {
                                size: 12
                            },
                            callback: function(value) {
                                return (value / 1000) + 'K';
                            }
                        },
                        min: 0,
                        max: 50000
                    }
                }
            }
        });
    }

    // Initialize User Farm Output Chart (New Tab)
    const userFarmCtx = document.getElementById('userFarmOutputChart');
    if (userFarmCtx && typeof Chart !== 'undefined') {
        const userFarmGradient = userFarmCtx.getContext('2d').createLinearGradient(0, 0, 0, 400);
        userFarmGradient.addColorStop(0, 'rgba(118, 185, 0, 0.4)');
        userFarmGradient.addColorStop(1, 'rgba(118, 185, 0, 0)');

        new Chart(userFarmCtx, {
            type: 'line',
            data: {
                labels: ['May 1', 'May 7', 'May 14', 'May 21', 'May 24'],
                datasets: [{
                    label: 'Farm Output',
                    data: [10000, 18000, 22000, 31000, 48250],
                    borderColor: '#76b900',
                    backgroundColor: userFarmGradient,
                    borderWidth: 2,
                    pointBackgroundColor: '#fff',
                    pointBorderColor: '#76b900',
                    pointBorderWidth: 2,
                    pointRadius: 4,
                    pointHoverRadius: 6,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    x: { grid: { display: false } },
                    y: { grid: { color: '#f0f0f0' }, beginAtZero: true }
                }
            }
        });
    }

    // Initialize Admin Revenue Chart if element exists
    const adminRevCtx = document.getElementById('adminRevenueChart');
    if (adminRevCtx && typeof Chart !== 'undefined') {
        const gradient = adminRevCtx.getContext('2d').createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, 'rgba(118, 185, 0, 0.4)'); // Light green top
        gradient.addColorStop(1, 'rgba(118, 185, 0, 0)');   // Transparent bottom

        new Chart(adminRevCtx, {
            type: 'line',
            data: {
                labels: ['May 1', 'May 7', 'May 14', 'May 21', 'May 30'],
                datasets: [{
                    label: 'Revenue',
                    data: [45000, 110000, 130000, 185000, 245780],
                    borderColor: '#76b900', // Primary Green
                    backgroundColor: gradient,
                    borderWidth: 2,
                    pointBackgroundColor: '#fff',
                    pointBorderColor: '#76b900',
                    pointBorderWidth: 2,
                    pointRadius: 4,
                    pointHoverRadius: 6,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: '#fff',
                        titleColor: '#333',
                        bodyColor: '#333',
                        borderColor: '#e0e0e0',
                        borderWidth: 1,
                        padding: 10,
                        displayColors: false,
                        callbacks: {
                            label: function(context) {
                                return '₹' + context.parsed.y.toLocaleString();
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        grid: { display: false, drawBorder: false },
                        ticks: { color: '#888', font: { size: 12 } }
                    },
                    y: {
                        grid: { color: '#f0f0f0', drawBorder: false, borderDash: [5, 5] },
                        ticks: {
                            color: '#888',
                            font: { size: 12 },
                            callback: function(value) { return (value / 1000) + 'K'; }
                        },
                        min: 0,
                        max: 300000
                    }
                }
            }
        });
    }

    // Initialize Admin Orders Donut Chart if element exists
    const adminOrdersCtx = document.getElementById('adminOrdersChart');
    if (adminOrdersCtx && typeof Chart !== 'undefined') {
        new Chart(adminOrdersCtx, {
            type: 'doughnut',
            data: {
                labels: ['Delivered', 'Processing', 'Shipped', 'Cancelled'],
                datasets: [{
                    data: [452, 213, 128, 52],
                    backgroundColor: [
                        '#34A853', // Delivered - Green
                        '#FBBC05', // Processing - Yellow
                        '#FABB0588', // Shipped - Lighter Yellow/Orange
                        '#EA4335'  // Cancelled - Red
                    ],
                    borderWidth: 0,
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '75%', // makes it a thin donut
                plugins: {
                    legend: {
                        display: false // We built a custom HTML legend instead
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = context.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                if (context.parsed !== null) {
                                    label += context.parsed;
                                }
                                return label;
                            }
                        }
                    }
                }
            }
        });
    }
    // Set user email in dashboard headers from localStorage
    const savedEmail = localStorage.getItem('userEmail');
    if (savedEmail) {
        const userNameElements = document.querySelectorAll('.user-profile .user-name');
        userNameElements.forEach(el => {
            el.textContent = savedEmail;
        });

        // Update the welcome name in user-dashboard
        const welcomeNameElements = document.querySelectorAll('.welcome-name');
        const mailName = savedEmail.split('@')[0]; // Get the name part before @
        welcomeNameElements.forEach(el => {
            el.textContent = mailName;
        });
    }

    // Handle Login Form Submission and Role Redirect
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const role = document.getElementById('role').value;
            const email = document.getElementById('email').value;
            
            if (email) {
                localStorage.setItem('userEmail', email);
            }
            if (role) {
                localStorage.setItem('userRole', role);
            }
            
            if (role === 'admin') {
                window.location.href = 'admin-dashboard.html';
            } else if (role === 'user') {
                window.location.href = 'user-dashboard.html';
            } else {
                alert('Please select a valid role.');
            }
        });
    }

    // Initialize Admin Reports Chart if it exists
    const adminReportsCtx = document.getElementById('adminReportsChart');
    if (adminReportsCtx && typeof Chart !== 'undefined') {
        new Chart(adminReportsCtx, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [
                    {
                        label: 'Revenue (₹)',
                        data: [120000, 190000, 150000, 220000, 280000, 310000],
                        backgroundColor: '#85A947',
                        borderRadius: 4
                    },
                    {
                        label: 'Expenses (₹)',
                        data: [80000, 110000, 95000, 130000, 160000, 185000],
                        backgroundColor: '#EFE3C2',
                        borderRadius: 4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: { font: { family: "'Inter', sans-serif" } }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: { color: '#f0f0f0' },
                        ticks: { callback: function(value) { return '₹' + value/1000 + 'k'; } }
                    },
                    x: { grid: { display: false } }
                }
            }
        });
    }

    // Initialize Admin Demographics Chart
    const adminDemographicsCtx = document.getElementById('adminDemographicsChart');
    if (adminDemographicsCtx && typeof Chart !== 'undefined') {
        new Chart(adminDemographicsCtx, {
            type: 'pie',
            data: {
                labels: ['Farmers', 'Buyers', 'Partners'],
                datasets: [{
                    data: [65, 25, 10],
                    backgroundColor: ['#85A947', '#EFE3C2', '#3E7B27'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'bottom' }
                }
            }
        });
    }

    // Initialize Admin Order Volume Chart
    const adminOrderVolumeCtx = document.getElementById('adminOrderVolumeChart');
    if (adminOrderVolumeCtx && typeof Chart !== 'undefined') {
        new Chart(adminOrderVolumeCtx, {
            type: 'line',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: 'Orders',
                    data: [120, 190, 150, 220, 180, 250, 300],
                    borderColor: '#3498db',
                    backgroundColor: 'rgba(52, 152, 219, 0.1)',
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: { beginAtZero: true },
                    x: { grid: { display: false } }
                }
            }
        });
    }

    // Initialize Admin Yield Chart
    const adminYieldCtx = document.getElementById('adminYieldChart');
    if (adminYieldCtx && typeof Chart !== 'undefined') {
        new Chart(adminYieldCtx, {
            type: 'doughnut',
            data: {
                labels: ['North', 'South', 'East', 'West'],
                datasets: [{
                    data: [40, 20, 15, 25],
                    backgroundColor: ['#85A947', '#f39c12', '#3498db', '#E74C3C'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '70%',
                plugins: {
                    legend: { position: 'right' }
                }
            }
        });
    }

    // Initialize User Market Chart
    const userMarketCtx = document.getElementById('userMarketChart');
    if (userMarketCtx && typeof Chart !== 'undefined') {
        new Chart(userMarketCtx, {
            type: 'line',
            data: {
                labels: ['1 Aug', '5 Aug', '10 Aug', '15 Aug', '20 Aug', '25 Aug', '30 Aug'],
                datasets: [{
                    label: 'Wheat Price (₹/Qtl)',
                    data: [2750, 2800, 2780, 2810, 2850, 2840, 2850],
                    borderColor: '#3E7B27',
                    backgroundColor: 'rgba(62, 123, 39, 0.1)',
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#fff',
                    pointBorderColor: '#3E7B27'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: false,
                        grid: { color: '#f0f0f0' },
                        ticks: { callback: function(value) { return '₹' + value; } }
                    },
                    x: { grid: { display: false } }
                }
            }
        });
    }

    // Initialize User Demand Chart (Phase 3)
    const userDemandCtx = document.getElementById('userDemandChart');
    if (userDemandCtx && typeof Chart !== 'undefined') {
        new Chart(userDemandCtx, {
            type: 'bar',
            data: {
                labels: ['Wheat', 'Cotton', 'Soybean', 'Onion'],
                datasets: [
                    {
                        label: 'Buyer Demand',
                        data: [85, 90, 60, 45],
                        backgroundColor: '#85A947'
                    },
                    {
                        label: 'Current Supply',
                        data: [60, 40, 75, 80],
                        backgroundColor: '#f39c12'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: { beginAtZero: true, grid: { color: '#f0f0f0' } },
                    x: { grid: { display: false } }
                }
            }
        });
    }

    // Initialize User Expenditure Chart (Phase 3)
    const userExpenditureCtx = document.getElementById('userExpenditureChart');
    if (userExpenditureCtx && typeof Chart !== 'undefined') {
        new Chart(userExpenditureCtx, {
            type: 'pie',
            data: {
                labels: ['Fertilizers', 'Seeds', 'Equipment/Parts', 'Pesticides'],
                datasets: [{
                    data: [45, 25, 20, 10],
                    backgroundColor: ['#85A947', '#f39c12', '#3498db', '#9b59b6'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'right' }
                }
            }
        });
    }
});


// Mobile Menu Toggle Logic
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    
    if (mobileMenuBtn && closeMenuBtn && mobileMenuOverlay) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
        
        closeMenuBtn.addEventListener('click', () => {
            mobileMenuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
        
        // Close menu when a link is clicked
        const mobileLinks = mobileMenuOverlay.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuOverlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // Dashboard Sidebar Toggle Logic
    const dashMenuToggle = document.querySelector('.dash-topbar .menu-toggle');
    const dashSidebar = document.querySelector('.dash-sidebar');
    
    if (dashMenuToggle && dashSidebar) {
        // Create an overlay element dynamically
        const overlay = document.createElement('div');
        overlay.classList.add('sidebar-overlay');
        document.body.appendChild(overlay);

        dashMenuToggle.addEventListener('click', () => {
            dashSidebar.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        overlay.addEventListener('click', () => {
            dashSidebar.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });

        // Auto close when clicking a sidebar link on mobile
        const dashLinks = dashSidebar.querySelectorAll('a');
        dashLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 992) {
                    dashSidebar.classList.remove('active');
                    overlay.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        });
    }

    // Dashboard Tab Toggling Logic
    const tabLinks = document.querySelectorAll('.tab-link');
    const contentSections = document.querySelectorAll('.content-section');

    tabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the target section ID
            const targetId = this.getAttribute('data-target');
            if (!targetId) return;

            // Remove active class from all tab links
            tabLinks.forEach(t => {
                t.classList.remove('active', 'active-solid');
            });

            // Add active class to clicked link
            if (this.classList.contains('admin-nav-item')) {
                this.classList.add('active-solid');
            } else {
                this.classList.add('active');
            }

            // Hide all content sections
            contentSections.forEach(section => {
                section.classList.remove('active');
            });

            // Show target section
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }

            // Update Topbar Title
            const topbarTitle = document.getElementById('topbar-title');
            if (topbarTitle) {
                // Extract text from the link, ignoring the icon
                let text = this.innerText || this.textContent;
                topbarTitle.innerText = text.trim();
            }

            // Close mobile menu if open
            if (window.innerWidth <= 992) {
                const sidebar = document.querySelector('.dash-sidebar');
                const overlay = document.getElementById('mobile-menu-overlay');
                if (sidebar) sidebar.classList.remove('active');
                if (overlay) overlay.classList.remove('active');
            }
        });
    });
});

    // Number Counter Animation
    const counters = document.querySelectorAll(".counter");
    if (counters.length > 0) {
        const observerOptions = {
            threshold: 0.5
        };

        const counterObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseFloat(counter.getAttribute("data-target"));
                    const suffix = counter.getAttribute("data-suffix") || "";
                    const decimals = parseInt(counter.getAttribute("data-decimals")) || 0;
                    const useComma = counter.getAttribute("data-comma") === "true";
                    
                    let current = 0;
                    const duration = 2000; // 2 seconds
                    const steps = 60;
                    const increment = target / steps;
                    const stepTime = Math.abs(Math.floor(duration / steps));
                    
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            current = target;
                            clearInterval(timer);
                        }
                        
                        let displayValue = current.toFixed(decimals);
                        if (useComma) {
                            displayValue = parseFloat(displayValue).toLocaleString();
                        }
                        counter.innerText = displayValue + suffix;
                    }, stepTime);
                    
                    observer.unobserve(counter);
                }
            });
        }, observerOptions);

        counters.forEach(counter => {
            counterObserver.observe(counter);
        });
    }


    // Testimonials Slider
    const slider = document.querySelector(".testimonials-grid.testimonial-slider");
    if (slider) {
        const prevBtn = document.querySelector(".prev-btn");
        const nextBtn = document.querySelector(".next-btn");
        let autoScrollInterval;

        const getScrollAmount = () => {
            const card = slider.querySelector(".testimonial-card");
            return card ? card.offsetWidth + 40 : 0; // width + gap
        };

        const scrollNext = () => {
            if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10) {
                slider.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                slider.scrollBy({ left: getScrollAmount(), behavior: "smooth" });
            }
        };

        const scrollPrev = () => {
            if (slider.scrollLeft <= 0) {
                slider.scrollTo({ left: slider.scrollWidth, behavior: "smooth" });
            } else {
                slider.scrollBy({ left: -getScrollAmount(), behavior: "smooth" });
            }
        };

        if (nextBtn && prevBtn) {
            nextBtn.addEventListener("click", () => {
                scrollNext();
                resetAutoScroll();
            });
            prevBtn.addEventListener("click", () => {
                scrollPrev();
                resetAutoScroll();
            });
        }

        const startAutoScroll = () => {
            autoScrollInterval = setInterval(scrollNext, 5000);
        };

        const resetAutoScroll = () => {
            clearInterval(autoScrollInterval);
            startAutoScroll();
        };

        startAutoScroll();
        
        // Pause on hover
        slider.addEventListener("mouseenter", () => clearInterval(autoScrollInterval));
        slider.addEventListener("mouseleave", startAutoScroll);
    }


function togglePassword(icon) {
    const input = icon.previousElementSibling;
    if (input.type === "password") {
        input.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        input.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    
    if (password && confirmPassword) {
        function validatePassword() {
            if (password.value !== confirmPassword.value) {
                confirmPassword.setCustomValidity('Passwords do not match.');
            } else {
                confirmPassword.setCustomValidity('');
            }
        }
        
        password.addEventListener('input', validatePassword);
        confirmPassword.addEventListener('input', validatePassword);
    }
});
document.addEventListener('DOMContentLoaded', () => {
    if (typeof gsap !== 'undefined') {
        gsap.fromTo('.hero-content h1', {y: 50, opacity: 0}, {y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2, clearProps: 'all'});
        gsap.fromTo('.hero-content p', {y: 30, opacity: 0}, {y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.4, clearProps: 'all'});
        gsap.fromTo('.hero-content .btn', {y: 20, opacity: 0}, {y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.6, stagger: 0.2, clearProps: 'all'});
        gsap.fromTo('.dash-header', {y: -20, opacity: 0}, {y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', clearProps: 'all'});
        gsap.fromTo('.stat-card', {y: 20, opacity: 0}, {y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', stagger: 0.1, delay: 0.3, clearProps: 'all'});
    }
});
