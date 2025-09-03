// Quote Carousel Functionality
let currentQuoteIndex = 0;
const quotes = document.querySelectorAll('.quote');
const totalQuotes = quotes.length;

function showNextQuote() {
    // Hide current quote
    quotes[currentQuoteIndex].classList.remove('active');
    
    // Move to next quote
    currentQuoteIndex = (currentQuoteIndex + 1) % totalQuotes;
    
    // Show next quote
    quotes[currentQuoteIndex].classList.add('active');
}

// Start quote carousel
setInterval(showNextQuote, 4000);

// Floating Hearts Animation
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.innerHTML = '❤️';
    
    // Random position
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    
    document.body.appendChild(heart);
    
    // Remove heart after animation
    setTimeout(() => {
        if (heart.parentNode) {
            heart.parentNode.removeChild(heart);
        }
    }, 3000);
}

// Add click event listeners to all clickable hearts
document.addEventListener('DOMContentLoaded', function() {
    const clickableHearts = document.querySelectorAll('.clickable-heart');
    clickableHearts.forEach(heart => {
        heart.addEventListener('click', createFloatingHeart);
    });
});

// Smooth scrolling for any anchor links
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

// Add parallax effect to background hearts
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hearts = document.querySelectorAll('.hearts-bg .heart');
    
    hearts.forEach((heart, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        heart.style.transform = `translateY(${yPos}px) rotate(45deg)`;
    });
});

// Add sparkle effect on click
function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.style.position = 'fixed';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.width = '4px';
    sparkle.style.height = '4px';
    sparkle.style.background = '#ffd700';
    sparkle.style.borderRadius = '50%';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '1000';
    sparkle.style.animation = 'sparkle 1s ease-out forwards';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        if (sparkle.parentNode) {
            sparkle.parentNode.removeChild(sparkle);
        }
    }, 1000);
}

// Add sparkle animation CSS
const sparkleCSS = `
@keyframes sparkle {
    0% {
        opacity: 1;
        transform: scale(0) rotate(0deg);
    }
    50% {
        opacity: 1;
        transform: scale(1) rotate(180deg);
    }
    100% {
        opacity: 0;
        transform: scale(0) rotate(360deg);
    }
}
`;

// Inject sparkle CSS
const style = document.createElement('style');
style.textContent = sparkleCSS;
document.head.appendChild(style);

// Add sparkle effect to clickable hearts
document.addEventListener('DOMContentLoaded', function() {
    const clickableHearts = document.querySelectorAll('.clickable-heart');
    clickableHearts.forEach(heart => {
        heart.addEventListener('click', function(e) {
            const rect = heart.getBoundingClientRect();
            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;
            
            // Create multiple sparkles
            for (let i = 0; i < 8; i++) {
                setTimeout(() => {
                    const angle = (i * 45) * Math.PI / 180;
                    const sparkleX = x + Math.cos(angle) * 30;
                    const sparkleY = y + Math.sin(angle) * 30;
                    createSparkle(sparkleX, sparkleY);
                }, i * 50);
            }
        });
    });
});

// Add typing effect to the main title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', function() {
    const title = document.querySelector('.main-title');
    const originalText = title.textContent;
    
    // Start typing effect after a short delay
    setTimeout(() => {
        typeWriter(title, originalText, 150);
    }, 1000);
});

// Add confetti effect for special moments
function createConfetti() {
    const colors = ['#e91e63', '#f06292', '#ffb6c1', '#ffd700', '#87ceeb'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-10px';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '1000';
        confetti.style.borderRadius = '50%';
        confetti.style.animation = `confettiFall ${2 + Math.random() * 3}s linear forwards`;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            if (confetti.parentNode) {
                confetti.parentNode.removeChild(confetti);
            }
        }, 5000);
    }
}

// Add confetti animation CSS
const confettiCSS = `
@keyframes confettiFall {
    0% {
        transform: translateY(-100vh) rotate(0deg);
        opacity: 1;
    }
    100% {
        transform: translateY(100vh) rotate(720deg);
        opacity: 0;
    }
}
`;

// Inject confetti CSS
const confettiStyle = document.createElement('style');
confettiStyle.textContent = confettiCSS;
document.head.appendChild(confettiStyle);

// Create sparkles effect
function createSparkles() {
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.style.position = 'fixed';
            sparkle.style.left = Math.random() * window.innerWidth + 'px';
            sparkle.style.top = Math.random() * window.innerHeight + 'px';
            sparkle.style.width = '6px';
            sparkle.style.height = '6px';
            sparkle.style.background = '#ffd700';
            sparkle.style.borderRadius = '50%';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.zIndex = '1000';
            sparkle.style.animation = 'sparkle 2s ease-out forwards';
            
            document.body.appendChild(sparkle);
            
            setTimeout(() => {
                if (sparkle.parentNode) {
                    sparkle.parentNode.removeChild(sparkle);
                }
            }, 2000);
        }, i * 80);
    }
}

// Trigger confetti on page load
window.addEventListener('load', function() {
    setTimeout(createConfetti, 2000);
});

// Add keyboard shortcuts for fun interactions
document.addEventListener('keydown', function(e) {
    // Press 'L' for love (creates floating hearts)
    if (e.key.toLowerCase() === 'l') {
        createFloatingHeart();
    }
    
    // Press 'C' for confetti
    if (e.key.toLowerCase() === 'c') {
        createConfetti();
    }
    
    // Press 'S' for sparkles
    if (e.key.toLowerCase() === 's') {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        createSparkle(x, y);
    }
});

// Add touch support for mobile devices
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', function(e) {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', function(e) {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe up - create floating hearts
            createFloatingHeart();
        } else {
            // Swipe down - create sparkles
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            createSparkle(x, y);
        }
    }
}

// Add resize handler for responsive adjustments
window.addEventListener('resize', function() {
    // Recalculate any size-dependent animations
    const hearts = document.querySelectorAll('.hearts-bg .heart');
    hearts.forEach(heart => {
        heart.style.animation = 'none';
        heart.offsetHeight; // Trigger reflow
        heart.style.animation = null;
    });
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 1s ease-in-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Photo Collage Functionality
document.addEventListener('DOMContentLoaded', function() {
    const photos = document.querySelectorAll('.heart-photo');
    
    photos.forEach(photo => {
        photo.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').src;
            const imgAlt = this.querySelector('img').alt;
            
            // Create and show modal
            openPhotoModal(imgSrc, imgAlt);
            
            // Create floating hearts when clicking photos
            for (let i = 0; i < 2; i++) {
                setTimeout(() => {
                    createFloatingHeart();
                }, i * 100);
            }
        });
    });
});

// Audio Player Functionality
function initializeAudioPlayers() {
    const audioPlayers = document.querySelectorAll('.audio-player audio');
    
    audioPlayers.forEach(audio => {
        audio.addEventListener('play', function() {
            // Stop all other audio players when one starts playing
            audioPlayers.forEach(otherAudio => {
                if (otherAudio !== audio) {
                    otherAudio.pause();
                    otherAudio.currentTime = 0; // Reset to beginning
                }
            });
        });
    });
}

// Photo Modal Functionality
function openPhotoModal(imgSrc, imgAlt) {
    // Create modal overlay
    const modal = document.createElement('div');
    modal.className = 'photo-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <img src="${imgSrc}" alt="${imgAlt}" class="modal-image">
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add event listeners
    modal.addEventListener('click', function(e) {
        if (e.target === modal || e.target.classList.contains('close-modal')) {
            closePhotoModal();
        }
    });
    
    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closePhotoModal();
        }
    });
    
    // Animate modal in
    setTimeout(() => {
        modal.classList.add('show');
        // Trigger fireworks when modal opens
        createFireworks();
    }, 10);
}

function closePhotoModal() {
    const modal = document.querySelector('.photo-modal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            if (modal.parentNode) {
                modal.parentNode.removeChild(modal);
            }
        }, 300);
    }
}

// Fireworks Effect
function createFireworks() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff', '#5f27cd'];
    
    // Create multiple firework bursts
    for (let burst = 0; burst < 8; burst++) {
        setTimeout(() => {
            const centerX = Math.random() * window.innerWidth;
            const centerY = Math.random() * window.innerHeight;
            
            // Create particles for each burst
            for (let i = 0; i < 20; i++) {
                const particle = document.createElement('div');
                particle.className = 'firework-particle';
                particle.style.left = centerX + 'px';
                particle.style.top = centerY + 'px';
                particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                
                document.body.appendChild(particle);
                
                // Animate particle
                const angle = (i * 18) * Math.PI / 180;
                const distance = 80 + Math.random() * 80;
                const endX = centerX + Math.cos(angle) * distance;
                const endY = centerY + Math.sin(angle) * distance;
                
                setTimeout(() => {
                    particle.style.transform = `translate(${endX - centerX}px, ${endY - centerY}px)`;
                    particle.style.opacity = '0';
                }, 50);
                
                // Remove particle after animation
                setTimeout(() => {
                    if (particle.parentNode) {
                        particle.parentNode.removeChild(particle);
                    }
                }, 5500);
            }
        }, burst * 150);
    }
}

// Photo Gallery Functionality
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            // Add click effect
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Create floating hearts when clicking gallery items
            createFloatingHeart();
        });
        
        // Add hover effect for gallery items
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
});

// Photo upload simulation (for demonstration)
function simulatePhotoUpload(placeholder) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.style.display = 'none';
    
    input.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                placeholder.innerHTML = `<img src="${e.target.result}" alt="Uploaded photo" style="width: 100%; height: 100%; object-fit: cover;">`;
                placeholder.style.padding = '0';
                placeholder.style.minHeight = '200px';
                
                // Add success animation
                placeholder.style.animation = 'photoUploadSuccess 0.5s ease-out';
            };
            reader.readAsDataURL(file);
        }
    });
    
    document.body.appendChild(input);
    input.click();
    document.body.removeChild(input);
}

// Add photo upload success animation
const photoUploadCSS = `
@keyframes photoUploadSuccess {
    0% {
        transform: scale(0.8);
        opacity: 0;
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}
`;

// Inject photo upload CSS
const photoUploadStyle = document.createElement('style');
photoUploadStyle.textContent = photoUploadCSS;
document.head.appendChild(photoUploadStyle);

// Add Easter egg - double click on title for special effect
document.addEventListener('DOMContentLoaded', function() {
    const title = document.querySelector('.main-title');
    let clickCount = 0;
    let clickTimer = null;
    
    title.addEventListener('click', function() {
        clickCount++;
        
        if (clickCount === 1) {
            clickTimer = setTimeout(() => {
                clickCount = 0;
            }, 300);
        } else if (clickCount === 2) {
            clearTimeout(clickTimer);
            clickCount = 0;
            
            // Special effect for double click
            createConfetti();
            setTimeout(createFloatingHeart, 500);
            setTimeout(createFloatingHeart, 1000);
        }
    });
    
    // Initialize audio players
    initializeAudioPlayers();
});
