// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Language translations
    const translations = {
        en: {
            'logo': 'Shani Kitchen',
            'nav-home': 'Home',
            'nav-menu': 'Menu',
            'nav-about': 'About',
            'nav-contact': 'Contact',
            'hero-title': 'Home Made With Love',
            'hero-subtitle': 'SHANI KITCHEN',
            'hero-description': 'Authentic flavors, crafted with passion and served with love',
            'btn-view-menu': 'View Menu',
            'btn-order-now': 'Order Now',
            'menu-title': 'Our Menu',
            'menu-subtitle': 'Delicious dishes made with the finest ingredients',
            'family-pack': 'Family Pack',
            'ayam-single-desc': 'Fresh chicken with aromatic rice',
            'ayam-couple-desc': 'Double portion of our signature chicken',
            'daging-hitam-desc': 'Traditional black beef curry',
            'kambing-hitam-desc': 'Rich mutton in black curry',
            'sup-tulang-desc': 'Rich bone marrow soup with mutton',
            'lamb-shank-desc': 'Tender lamb shank with rice',
            'family-small-desc': 'Perfect for small family gatherings',
            'family-big-desc': 'Great for large family celebrations',
            'nasi-ganja-ayam-desc': 'Addictive rice with spiced fried chicken',
            'daging-itam-desc': 'Traditional black beef curry',
            'kambing-itam-desc': 'Rich mutton in black curry',
            'sup-tulang-kambing-desc': 'Rich bone marrow soup with mutton',
            'about-title': 'About Shani Kitchen',
            'about-desc-1': 'At Shani Kitchen, we believe that food is not just about sustenance – it\'s about love, tradition, and bringing people together. Every dish we prepare is made with the finest ingredients and a commitment to authentic flavors.',
            'about-desc-2': 'Our signature dishes, from the aromatic Nasi Arab Talam to the addictive Nasi Ganja, are crafted using traditional recipes passed down through generations, combined with modern cooking techniques.',
            'feature-love': 'Made with Love',
            'feature-fresh': 'Fresh Ingredients',
            'feature-authentic': 'Authentic Recipes',
            'contact-title': 'Get in Touch',
            'contact-desc': 'Ready to taste our delicious food? Contact us to place your order or visit our kitchen!',
            'contact-hours': 'Open Daily: 10:00 AM - 10:00 PM',
            'contact-address': 'Visit us at Shani Kitchen',
            'order-title': 'Order Now',
            'btn-place-order': 'Place Order',
            'footer-logo': 'Shani Kitchen',
            'footer-copyright': '&copy; 2024 Shani Kitchen. Home Made With Love. All rights reserved.',
            'name-placeholder': 'Your Name',
            'phone-placeholder': 'Phone Number',
            'order-placeholder': 'Your Order'
        },
        ms: {
            'logo': 'Shani Kitchen',
            'nav-home': 'Utama',
            'nav-menu': 'Menu',
            'nav-about': 'Tentang',
            'nav-contact': 'Hubungi',
            'hero-title': 'Dibuat Dengan Cinta',
            'hero-subtitle': 'SHANI KITCHEN',
            'hero-description': 'Rasa autentik, dibuat dengan penuh kasih sayang dan disajikan dengan cinta',
            'btn-view-menu': 'Lihat Menu',
            'btn-order-now': 'Pesan Sekarang',
            'menu-title': 'Menu Kami',
            'menu-subtitle': 'Hidangan lazat yang dibuat dengan bahan-bahan terbaik',
            'family-pack': 'Paket Keluarga',
            'ayam-single-desc': 'Ayam segar dengan nasi beraroma',
            'ayam-couple-desc': 'Dua bahagian ayam tanda tangan kami',
            'daging-hitam-desc': 'Kari daging hitam tradisional',
            'kambing-hitam-desc': 'Kambing kaya dalam kari hitam',
            'sup-tulang-desc': 'Sup sumsum tulang yang kaya dengan kambing',
            'lamb-shank-desc': 'Kaki kambing yang lembut dengan nasi',
            'family-small-desc': 'Sempurna untuk perhimpunan keluarga kecil',
            'family-big-desc': 'Hebat untuk sambutan keluarga besar',
            'nasi-ganja-ayam-desc': 'Nasi yang membuat ketagihan dengan ayam goreng berempah',
            'daging-itam-desc': 'Kari daging hitam tradisional',
            'kambing-itam-desc': 'Kambing kaya dalam kari hitam',
            'sup-tulang-kambing-desc': 'Sup sumsum tulang yang kaya dengan kambing',
            'about-title': 'Tentang Shani Kitchen',
            'about-desc-1': 'Di Shani Kitchen, kami percaya bahawa makanan bukan hanya tentang keperluan – ia tentang cinta, tradisi, dan mengumpulkan orang bersama. Setiap hidangan yang kami sediakan dibuat dengan bahan-bahan terbaik dan komitmen kepada rasa autentik.',
            'about-desc-2': 'Hidangan tanda tangan kami, dari Nasi Arab Talam yang harum hingga Nasi Ganja yang membuat ketagihan, dibuat menggunakan resipi tradisional yang diturunkan melalui generasi, digabungkan dengan teknik memasak moden.',
            'feature-love': 'Dibuat Dengan Cinta',
            'feature-fresh': 'Bahan-Bahan Segar',
            'feature-authentic': 'Resipi Autentik',
            'contact-title': 'Hubungi Kami',
            'contact-desc': 'Sedia untuk merasai makanan lazat kami? Hubungi kami untuk membuat pesanan atau kunjungi dapur kami!',
            'contact-hours': 'Buka Setiap Hari: 10:00 PG - 10:00 PTG',
            'contact-address': 'Lawati kami di Shani Kitchen',
            'order-title': 'Pesan Sekarang',
            'btn-place-order': 'Buat Pesanan',
            'footer-logo': 'Shani Kitchen',
            'footer-copyright': '&copy; 2024 Shani Kitchen. Dibuat Dengan Cinta. Hak cipta terpelihara.',
            'name-placeholder': 'Nama Anda',
            'phone-placeholder': 'Nombor Telefon',
            'order-placeholder': 'Pesanan Anda'
        }
    };

    let currentLang = localStorage.getItem('selectedLanguage') || 'en';

    // Language switching functionality
    function switchLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('selectedLanguage', lang);
        
        // Update all elements with data-lang attribute
        document.querySelectorAll('[data-lang]').forEach(element => {
            const key = element.getAttribute('data-lang');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // Update placeholders
        document.querySelectorAll('[data-lang-placeholder]').forEach(element => {
            const key = element.getAttribute('data-lang-placeholder');
            if (translations[lang][key]) {
                element.placeholder = translations[lang][key];
            }
        });

        // Update active button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang-btn') === lang) {
                btn.classList.add('active');
            }
        });

        // Show notification
        showNotification(lang === 'en' ? 'Language changed to English' : 'Bahasa ditukar kepada Bahasa Melayu', 'info');
    }

    // Language button event listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang-btn');
            switchLanguage(lang);
        });
    });

    // Initialize language on page load
    switchLanguage(currentLang);
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.padding = '0.5rem 0';
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.padding = '1rem 0';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    });

    // Menu Item Hover Effects
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Intersection Observer for Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.menu-item, .about-text, .contact-info, .contact-form');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Menu Item Click Animation
    const menuOverlays = document.querySelectorAll('.menu-overlay');
    menuOverlays.forEach(overlay => {
        overlay.addEventListener('click', function(e) {
            e.preventDefault();
            const menuItem = this.closest('.menu-item');
            const itemName = menuItem.querySelector('h4').textContent;
            const itemPrice = menuItem.querySelector('.menu-price').textContent;
            
            // Create ripple effect
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.background = 'rgba(255, 255, 255, 0.5)';
            ripple.style.borderRadius = '50%';
            ripple.style.transform = 'translate(-50%, -50%)';
            ripple.style.pointerEvents = 'none';
            ripple.style.animation = 'ripple 0.6s ease-out';
            
            const rect = this.getBoundingClientRect();
            ripple.style.left = (e.clientX - rect.left) + 'px';
            ripple.style.top = (e.clientY - rect.top) + 'px';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
                showNotification(`${itemName} added to cart! ${itemPrice}`);
            }, 600);
        });
    });

    // Contact Form Submission
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const phone = this.querySelector('input[type="tel"]').value;
            const order = this.querySelector('textarea').value;
            
            // Validate form
            if (!name || !phone || !order) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            // Simulate form submission
            showNotification('Order placed successfully! We will contact you soon.', 'success');
            this.reset();
        });
    }

    // Notification System
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            padding: 1rem 1.5rem;
            background: ${type === 'success' ? '#27ae60' : type === 'error' ? '#e74c3c' : '#3498db'};
            color: white;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
            z-index: 10000;
            transform: translateX(400px);
            transition: transform 0.3s ease;
            font-weight: 500;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }

    // Add ripple animation to CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                width: 200px;
                height: 200px;
                opacity: 0;
            }
        }
        
        .notification {
            animation: slideInRight 0.3s ease;
        }
        
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        .hamburger.active span:nth-child(1) {
            transform: rotate(-45deg) translate(-5px, 6px);
        }
        
        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active span:nth-child(3) {
            transform: rotate(45deg) translate(-5px, -6px);
        }
        
        @media (max-width: 768px) {
            .nav-menu {
                position: fixed;
                left: -100%;
                top: 70px;
                flex-direction: column;
                background-color: white;
                width: 100%;
                text-align: center;
                transition: 0.3s;
                box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
                padding: 2rem 0;
            }
            
            .nav-menu.active {
                left: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Parallax Effect for Hero Section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const heroContent = document.querySelector('.hero-content');
        
        if (hero && heroContent) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });

    // Dynamic Year in Footer
    const footerYear = document.querySelector('.footer-content p');
    if (footerYear) {
        const currentYear = new Date().getFullYear();
        footerYear.innerHTML = footerYear.innerHTML.replace('2024', currentYear);
    }

    // Loading Animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });

    // Menu Category Animation on Hover
    const menuCategories = document.querySelectorAll('.menu-category');
    menuCategories.forEach(category => {
        category.addEventListener('mouseenter', function() {
            const items = this.querySelectorAll('.menu-item');
            items.forEach((item, index) => {
                setTimeout(() => {
                    item.style.transform = 'translateY(-5px)';
                }, index * 100);
            });
        });
        
        category.addEventListener('mouseleave', function() {
            const items = this.querySelectorAll('.menu-item');
            items.forEach(item => {
                item.style.transform = 'translateY(0)';
            });
        });
    });

    // Social Links Hover Animation
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) rotate(360deg)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotate(0deg)';
        });
    });

    // Button Ripple Effect
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.5);
                left: ${x}px;
                top: ${y}px;
                pointer-events: none;
                transform: scale(0);
                animation: buttonRipple 0.6s ease-out;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Add button ripple animation
    const buttonRippleStyle = document.createElement('style');
    buttonRippleStyle.textContent = `
        @keyframes buttonRipple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(buttonRippleStyle);

    // Shopping Cart Functionality
    let cart = [];

    // Debug: Check if elements exist
    console.log('Cart elements:', {
        cartItems: document.getElementById('cart-items'),
        cartTotal: document.getElementById('cart-total'),
        overlays: document.querySelectorAll('.menu-overlay'),
        menuItems: document.querySelectorAll('.menu-item')
    });

    // Add to cart functionality for menu items - try multiple approaches
    function initCartFunctionality() {
        console.log('Initializing cart functionality...');
        
        // Method 1: Direct event listeners
        document.querySelectorAll('.menu-overlay').forEach((overlay, index) => {
            console.log(`Adding listener to overlay ${index}:`, overlay);
            
            overlay.addEventListener('click', function(e) {
                console.log('Overlay clicked!', e);
                e.preventDefault();
                e.stopPropagation();
                
                const menuItem = this.closest('.menu-item');
                if (!menuItem) {
                    console.error('Could not find parent menu-item');
                    return;
                }
                
                const nameElement = menuItem.querySelector('h4');
                const priceElement = menuItem.querySelector('.menu-price');
                
                if (!nameElement || !priceElement) {
                    console.error('Could not find name or price element', {nameElement, priceElement});
                    return;
                }
                
                const name = nameElement.textContent;
                const priceText = priceElement.textContent;
                
                // Better price parsing
                let price = 0;
                const cleanPriceText = priceText.replace('RM', '').trim();
                
                if (cleanPriceText.includes('-')) {
                    price = parseFloat(cleanPriceText.split('-')[0]);
                } else if (cleanPriceText.includes('/')) {
                    price = parseFloat(cleanPriceText.split('/')[0]);
                } else {
                    price = parseFloat(cleanPriceText);
                }
                
                console.log('Adding to cart:', {name, priceText, price});
                
                addToCart(name, price);
            });
        });
        
        // Method 2: Event delegation (backup)
        document.addEventListener('click', function(e) {
            if (e.target.closest('.menu-overlay')) {
                console.log('Event delegation caught click');
                // The direct listener should handle this, but as backup...
            }
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCartFunctionality);
    } else {
        initCartFunctionality();
    }

    // Test function for manual cart testing
    window.testCart = function() {
        console.log('Test cart function called');
        addToCart('Test Item', 10.00);
    };

    function addToCart(name, price) {
        console.log('addToCart called with:', name, price);
        console.log('Current cart before:', cart);
        
        const existingItem = cart.find(item => item.name === name);
        
        if (existingItem) {
            existingItem.quantity += 1;
            console.log('Updated existing item:', existingItem);
        } else {
            const newItem = {
                name: name,
                price: price,
                quantity: 1
            };
            cart.push(newItem);
            console.log('Added new item:', newItem);
        }
        
        console.log('Cart after adding:', cart);
        updateCart();
        showAddedNotification(name);
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        updateCart();
    }

    function updateQuantity(index, change) {
        if (cart[index].quantity + change > 0) {
            cart[index].quantity += change;
            updateCart();
        }
    }

    function updateCart() {
        console.log('updateCart called, current cart:', cart);
        
        const cartItems = document.getElementById('cart-items');
        const cartTotal = document.getElementById('cart-total');
        
        if (!cartItems || !cartTotal) {
            console.error('Cart elements not found!');
            return;
        }
        
        if (cart.length === 0) {
            cartItems.innerHTML = '<p class="empty-cart">Your cart is empty. Click on menu items to add.</p>';
            cartTotal.textContent = '0.00';
            console.log('Cart is empty, updated display');
            return;
        }
        
        let html = '';
        let total = 0;
        
        cart.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            
            html += `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">RM ${item.price.toFixed(2)} x ${item.quantity}</div>
                    </div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn" onclick="updateQuantity(${index}, -1)">-</button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${index}, 1)">+</button>
                        <span class="remove-item" onclick="removeFromCart(${index})">🗑️</span>
                    </div>
                </div>
            `;
        });
        
        cartItems.innerHTML = html;
        cartTotal.textContent = total.toFixed(2);
        console.log('Cart updated with total:', total);
    }

    function showAddedNotification(itemName) {
        const notification = document.createElement('div');
        notification.className = 'cart-notification';
        notification.textContent = `${itemName} added to cart!`;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--accent-color);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            z-index: 1000;
            animation: slideInRight 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    }

    // Order form submission
    document.getElementById('order-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('customer-name').value;
        const address = document.getElementById('customer-address').value;
        
        if (cart.length === 0) {
            alert('Please add items to your cart first!');
            return;
        }
        
        // Generate WhatsApp message
        let message = `Hello Shani Kitchen! I would like to place an order.\n\n`;
        message += `Name: ${name}\n`;
        message += `Address: ${address}\n\n`;
        message += `Order Details:\n`;
        
        let total = 0;
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            message += `${item.name} x ${item.quantity} = RM ${itemTotal.toFixed(2)}\n`;
        });
        
        message += `\nTotal: RM ${total.toFixed(2)}\n\n`;
        message += `Please confirm my order. Thank you!`;
        
        // Send to WhatsApp
        const whatsappUrl = `https://wa.me/60149632717?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        
        // Clear cart after order
        cart = [];
        updateCart();
        this.reset();
    });

    // Make cart functions global
    window.updateQuantity = updateQuantity;
    window.removeFromCart = removeFromCart;

    // Add notification animations
    const notificationStyle = document.createElement('style');
    notificationStyle.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(notificationStyle);

    // Click to Copy Menu Items - SIMPLE & GUARANTEED TO WORK
    console.log('=== CLICK TO COPY SYSTEM ===');
    
    // Add click listeners to menu items
    document.querySelectorAll('.menu-overlay').forEach((overlay, index) => {
        console.log(`Adding click to copy to overlay ${index}`);
        
        overlay.addEventListener('click', function(e) {
            console.log('Menu item clicked!', e);
            e.preventDefault();
            e.stopPropagation();
            
            const menuItem = this.closest('.menu-item');
            if (!menuItem) {
                console.error('No menu item found');
                return;
            }
            
            const nameElement = menuItem.querySelector('h4');
            if (!nameElement) {
                console.error('No name element found');
                return;
            }
            
            const itemName = nameElement.textContent.trim();
            console.log('Copying item name:', itemName);
            
            // Get the order textarea
            const orderTextarea = document.getElementById('manual-order');
            if (!orderTextarea) {
                console.error('Order textarea not found!');
                return;
            }
            
            // Add item to textarea
            const currentText = orderTextarea.value;
            const newText = currentText ? `${currentText}\n${itemName} - ` : `${itemName} - `;
            orderTextarea.value = newText;
            
            // Focus on textarea for quantity input
            orderTextarea.focus();
            
            // Move cursor to end for quantity input
            orderTextarea.setSelectionRange(orderTextarea.value.length, orderTextarea.value.length);
            
            // Show notification
            showCopyNotification(itemName);
        });
    });
    
    function showCopyNotification(itemName) {
        const notification = document.createElement('div');
        notification.className = 'copy-notification';
        notification.textContent = `${itemName} ditambah ke pesanan!`;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #28a745;
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            z-index: 1000;
            animation: slideInRight 0.3s ease;
            font-weight: 600;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    }
    
    console.log('=== CLICK TO COPY SYSTEM LOADED ===');
    
    // Update form submission for manual order
    const orderForm = document.getElementById('order-form');
    if (orderForm) {
        console.log('Order form found, updating submission');
        
        orderForm.addEventListener('submit', function(e) {
            console.log('Manual order form submitted!');
            e.preventDefault();
            
            const name = document.getElementById('customer-name').value;
            const address = document.getElementById('customer-address').value;
            const manualOrder = document.getElementById('manual-order').value;
            
            console.log('Form data:', {name, address, manualOrder});
            
            if (!name || !address || !manualOrder) {
                alert('Sila isi nama, alamat dan pesanan anda!');
                return;
            }
            
            // WhatsApp message
            const message = `Salam Shani Kitchen! Saya ingin membuat pesanan.\n\nNama: ${name}\nAlamat: ${address}\n\nPesanan:\n${manualOrder}\n\nSila konfirmasi pesanan dan jumlah harga. Terima kasih!`;
            
            const whatsappUrl = `https://wa.me/60149632717?text=${encodeURIComponent(message)}`;
            console.log('Opening WhatsApp:', whatsappUrl);
            
            // Open WhatsApp
            window.open(whatsappUrl, '_blank');
            
            // Clear form
            this.reset();
        });
    } else {
        console.error('Order form not found!');
    }
    
    console.log('=== MANUAL ORDER SYSTEM LOADED ===');
});
