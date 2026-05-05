/* ========== LOADING SCREEN ANIMATION ========== */

class EnvelopeLoadingScreen {
    constructor() {
        this.loadingScreen = document.getElementById('loadingScreen');
        this.envelope = document.getElementById('envelope');
        this.sealContainer = document.getElementById('sealContainer');
        this.sealSvg = document.getElementById('sealSvg');
        this.cracksSvg = document.getElementById('cracksSvg');
        this.particlesContainer = document.getElementById('particlesContainer');
        this.envelopeLight = document.getElementById('envelopeLight');
        this.lightBurst = document.getElementById('lightBurst');
        this.dustContainer = document.getElementById('dustContainer');
        this.skipBtn = document.getElementById('skipBtn');

        this.isAnimating = false;
        this.skipClicked = false;

        this.init();
    }

    init() {
        // Pré-carregar check se animação já foi vista
        if (sessionStorage.getItem('loadingAnimationComplete')) {
            this.skipAnimation();
            return;
        }

        this.skipBtn.addEventListener('click', () => this.skipAnimation());
        
        // Iniciar animação após pequeno delay
        setTimeout(() => this.startAnimation(), 300);
    }

    startAnimation() {
        this.isAnimating = true;
        
        // Fase 1: Seal pulse (já está no CSS com 2.2s)
        // Fase 2: Vibration and seal breaking - timing ajustado para efeito máximo
        setTimeout(() => this.breakSeal(), 1400);
    }

    breakSeal() {
        // Mostrar rachaduras
        this.cracksSvg.classList.add('visible');
        
        // Criar partículas de explosão
        this.createParticles();
        
        // Som sutil sincronizado
        this.playBreakSound();
        
        // Abrir envelope imediatamente
        setTimeout(() => this.openEnvelope(), 400);
    }

    createParticles() {
        const particleCount = 25;
        const angles = [];
        
        // Distribuir partículas em ângulos
        for (let i = 0; i < particleCount; i++) {
            angles.push((360 / particleCount) * i + Math.random() * 25);
        }

        angles.forEach((angle, index) => {
            setTimeout(() => {
                const particle = document.createElement('div');
                const rand = Math.random();
                let className = 'particle';
                
                if (rand > 0.6) {
                    className += ' blue-light';
                } else if (rand > 0.3) {
                    className += ' blue-dark';
                } else {
                    className += ' white';
                }
                
                particle.className = className;
                
                const distance = 70 + Math.random() * 50;
                const rad = (angle * Math.PI) / 180;
                const tx = Math.cos(rad) * distance;
                const ty = Math.sin(rad) * distance;
                
                particle.style.setProperty('--tx', `${tx}px`);
                particle.style.setProperty('--ty', `${ty}px`);
                particle.style.width = (2 + Math.random() * 3) + 'px';
                particle.style.height = particle.style.width;
                particle.style.animation = `particleExplode 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`;
                
                this.particlesContainer.appendChild(particle);
                
                // Remover após animação
                setTimeout(() => particle.remove(), 900);
            }, index * 35);
        });
    }

    openEnvelope() {
        // Abrir flaps do envelope
        const envelopeSvg = document.querySelector('.envelope-svg');
        const leftFlap = document.querySelector('.left-flap');
        const rightFlap = document.querySelector('.right-flap');
        
        envelopeSvg.classList.add('opening');
        leftFlap.classList.add('opening');
        rightFlap.classList.add('opening', 'right-flap');
        
        // Animar selo para desaparecer
        this.sealSvg.classList.add('opening');
        
        // Animar envelope para se abrir
        this.envelope.classList.add('opening');
        
        // Efeito de luz
        this.envelopeLight.classList.add('glowing');
        
        // Ativar burst de luz
        this.activateLightBurst();
        
        // Criar poeira/dust
        this.createDustParticles();
        
        // Fade out e remover - timing ajustado
        setTimeout(() => this.finishAnimation(), 2200);
    }

    activateLightBurst() {
        this.lightBurst.classList.add('active');
        
        document.querySelectorAll('.burst-particle').forEach((particle) => {
            particle.classList.add('active');
        });
    }

    createDustParticles() {
        const dustCount = 40;
        
        for (let i = 0; i < dustCount; i++) {
            setTimeout(() => {
                const dust = document.createElement('div');
                const rand = Math.random();
                
                if (rand > 0.6) {
                    dust.className = 'dust large';
                } else if (rand > 0.3) {
                    dust.className = 'dust medium';
                } else {
                    dust.className = 'dust small';
                }
                
                const startX = (Math.random() - 0.5) * 250;
                const startY = (Math.random() - 0.5) * 250;
                const drift = (Math.random() - 0.5) * 150;
                
                dust.style.left = `${50 + startX / 250}%`;
                dust.style.top = `${50 + startY / 250}%`;
                dust.style.setProperty('--drift', `${drift}px`);
                
                const duration = 1.4 + Math.random() * 1;
                dust.style.animation = `dustFloat ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`;
                
                this.dustContainer.appendChild(dust);
                
                // Remover após animação
                setTimeout(() => dust.remove(), duration * 1000);
            }, i * 25);
        }
    }

    playBreakSound() {
        // Som sofisticado e elegante usando Web Audio API
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const now = audioContext.currentTime;
            
            // Som de cristal quebrando - mais sofisticado
            const osc1 = audioContext.createOscillator();
            const osc2 = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            const gainNode2 = audioContext.createGain();
            
            osc1.connect(gainNode);
            osc2.connect(gainNode2);
            gainNode.connect(audioContext.destination);
            gainNode2.connect(audioContext.destination);
            
            // Primeira onda - frequência mais alta
            osc1.frequency.setValueAtTime(1200, now);
            osc1.frequency.exponentialRampToValueAtTime(300, now + 0.12);
            gainNode.gain.setValueAtTime(0.12, now);
            gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.12);
            
            // Segunda onda - harmônico
            osc2.type = 'sine';
            osc2.frequency.setValueAtTime(600, now);
            osc2.frequency.exponentialRampToValueAtTime(150, now + 0.15);
            gainNode2.gain.setValueAtTime(0.06, now);
            gainNode2.gain.exponentialRampToValueAtTime(0.005, now + 0.15);
            
            osc1.start(now);
            osc2.start(now);
            osc1.stop(now + 0.12);
            osc2.stop(now + 0.15);
        } catch (e) {
            // Ignorar se Audio API não estiver disponível
        }
    }

    finishAnimation() {
        // Remover classe breaking para limpar animação
        this.sealSvg.classList.remove('breaking');
        
        // Adicionar classe hidden ao envelope
        this.envelope.classList.add('hidden');
        
        // Fade out do loading screen
        setTimeout(() => {
            this.loadingScreen.classList.add('hidden');
            sessionStorage.setItem('loadingAnimationComplete', 'true');
            this.isAnimating = false;
        }, 800);
    }

    skipAnimation() {
        if (this.isAnimating) {
            this.skipClicked = true;
            
            // Remover animações em progresso
            this.sealSvg.style.animation = 'none';
            this.cracksSvg.innerHTML = '';
            this.particlesContainer.innerHTML = '';
            this.dustContainer.innerHTML = '';
            this.lightBurst.innerHTML = '';
        }
        
        // Remover tela de loading imediatamente
        this.loadingScreen.classList.add('hidden');
        sessionStorage.setItem('loadingAnimationComplete', 'true');
        this.isAnimating = false;
    }
}

// Inicializar quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    new EnvelopeLoadingScreen();
});

/* ========== END LOADING SCREEN ========== */

const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');
const revealElements = document.querySelectorAll('.reveal');
const countdownIds = {
    days: document.getElementById('days'),
    hours: document.getElementById('hours'),
    minutes: document.getElementById('minutes'),
    seconds: document.getElementById('seconds')
};

menuToggle?.addEventListener('click', () => {
    menu?.classList.toggle('open');
});

document.querySelectorAll('.menu a').forEach((link) => {
    link.addEventListener('click', () => menu?.classList.remove('open'));
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.16 });

revealElements.forEach((el, index) => {
    el.style.transitionDelay = `${Math.min(index * 60, 420)}ms`;
    observer.observe(el);
});

function updateCountdown() {
    const weddingDate = new Date('2026-10-10T16:00:00-03:00').getTime();
    const now = Date.now();
    const diff = weddingDate - now;

    if (diff <= 0) {
        countdownIds.days.textContent = '0';
        countdownIds.hours.textContent = '0';
        countdownIds.minutes.textContent = '0';
        countdownIds.seconds.textContent = '0';
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdownIds.days.textContent = String(days);
    countdownIds.hours.textContent = String(hours).padStart(2, '0');
    countdownIds.minutes.textContent = String(minutes).padStart(2, '0');
    countdownIds.seconds.textContent = String(seconds).padStart(2, '0');

    const countdownCards = document.querySelectorAll('.count-card span');
    countdownCards.forEach((card) => {
        card.animate(
            [
                { transform: 'translateY(0)' },
                { transform: 'translateY(-3px)' },
                { transform: 'translateY(0)' }
            ],
            { duration: 420, easing: 'ease-out' }
        );
    });
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Integração com Supabase
const SUPABASE_URL = 'https://sxxucfbnzowjkasdkvht.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN4eHVjZmJuem93amthc2Rrdmh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY4ODg1MzYsImV4cCI6MjA5MjQ2NDUzNn0.FrxSBRsk0d0ztXpxQQPqvBIuPNcoGTDJNqUSDjNhhFs';
const TABLE_NAME = 'rsvp_confirmacoes';

async function enviarRsvpParaSupabase(dados) {
    try {
        const response = await fetch(`${SUPABASE_URL}/rest/v1/${TABLE_NAME}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apikey': SUPABASE_ANON_KEY,
                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
            },
            body: JSON.stringify(dados)
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Erro ao enviar dados');
        }

        return { success: true };
    } catch (error) {
        console.error('Erro Supabase:', error);
        throw error;
    }
}

const rsvpForm = document.getElementById('rsvpForm');
rsvpForm?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(rsvpForm);
    const nome = formData.get('nome');
    const email = formData.get('email');
    const resposta = formData.get('resposta');
    const mensagem = formData.get('mensagem');

    if (!nome || !email || !resposta) return;

    const botao = rsvpForm.querySelector('button[type="submit"]');
    botao.disabled = true;
    botao.textContent = 'Enviando...';

    try {
        await enviarRsvpParaSupabase({
            nome,
            email,
            resposta,
            mensagem
        });

        const msg = `Obrigado, ${nome}! Sua confirmação foi registrada com sucesso. 💕`;
        alert(msg);
        rsvpForm.reset();
    } catch (error) {
        alert(`Erro ao enviar: ${error.message}`);
    } finally {
        botao.disabled = false;
        botao.textContent = 'Enviar confirmação';
    }
});
