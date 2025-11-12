// --- Elemen ---
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const chatbotContainer = document.getElementById('chatbot-container'); 
const chatbotToggle = document.getElementById('chatbot-toggle'); 

// --- Data Kontak saya ---
const CONTACT_INFO = {
    instagram: "Fzanraka_",
    tiktok: "Fzan_Raka",
    facebook: "fauzan_raka",
    whatsapp: "08124515784"
};

// --- FUNGSI BUKA/TUTUP CHATBOT ---
function toggleChatbot() {
    chatbotContainer.classList.toggle('hidden');
    // tampilkan pesan selamat datang 
    if (!chatbotContainer.classList.contains('hidden') && chatBox.children.length === 0) {
        displayMessage(getWelcomeMessage(), 'bot');
    }
}

// --- menampilkan pesan chat box ---
function displayMessage(text, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add(sender === 'bot' ? 'bot-message' : 'user-message');
    messageElement.innerHTML = text.replace(/\n/g, '<br>'); 
    chatBox.appendChild(messageElement);
    // scroll otomatis
    chatBox.scrollTop = chatBox.scrollHeight;
}

// --- Logika chat Bot  ---
function getBotResponse(input) {
    const cleanedInput = input.trim().toLowerCase();

    switch (cleanedInput) {
        case '1':
            return `Tentu.\n\n perkenalkan saya Fauzan Raka Wijaya Kusuma usia saya saat ini 21 tahun dan sedang melanjutkan studi di Universitas Indraprasta.\n\nSaya bekerja sebagai Administrasi Pendaftaran. saya menyukai alur kerja yang jelas dan fokus membangun kerja sama yang baik untuk perusahaan.\n\n2. Apa saja yang dapat saya kerjakan?\n3. Kontak dan Media Sosial\n[M] Menu Utama`;
        
        case '2':
            return `Keahlian Fauzan Raka terbagi dalam dua kategori utama:\n\nA. Desain & Media:\n- Design Grafis\n- Videografi dan Audio Visual\n- Fotografi\n\nB. Pengembangan Web:\n- HTML, CSS, JavaScript\n\n1. Tentang saya\n3. Kontak dan Media Sosial\n[M] Menu Utama`;
            
        // ... respon chat bot

case '3':
    return `Baiklah, Anda dapat terhubung dengan Fauzan dan untuk info lebih lanjut kamu dapat menghubungi saya melalui sosmed berikut:\n\n` + 
           `- Instagram <a href="https://www.instagram.com/fzanraka?igsh=MTdpMjA5eHRobnZ0dQ==" target="_blank"> : fzanraka_</a>\n` +
           `- TikTok <a href="https://www.tiktok.com/@fzanraka?_t=ZS-8zWPdWqrpA2&_r=1" target="_blank"> : fzan_raka</a>\n` +
           `- Facebook <a href="https://www.facebook.com/share/17TCTqwfjp/" target="_blank"> : FzanRaka_</a>\n` +
           `- WhatsApp<a href="https://wa.me/qr/XVTGB7W3OXS4P1" target="_blank">\n(Chat Langsung)</a>\n\n` +
           `1. Tentang saya\n2. Apa saja yang dapat saya kerjakan?\n[M] Menu Utama`;
// ...

        case 'm':
        case 'menu':
            return getWelcomeMessage();

        default:
            return `Maaf, saya hanya dapat memproses informasi yang tersedia di menu. Silakan ketik nomor pilihan atau 'M' untuk kembali ke Menu Utama.`;
    }
}

// --- Pesan Selamat Datang ---
function getWelcomeMessage() {
    return `Halo! Selamat datang di website Fauzan Raka\n\nSaya dapat membantu kamu mengetahui informasi singkat tentang saya. Silakan pilih topik:\n\n1. Tentang saya\n2. Apa saja yang dapat saya kerjakan?\n3. Kontak dan Media Sosial`;
}

// --- kirim Pesan ---
function sendMessage() {
    const input = userInput.value;
    if (input === '') return;

    displayMessage(input, 'user');
    
    const botResponse = getBotResponse(input);
    
    setTimeout(() => {
        displayMessage(botResponse, 'bot');
    }, 500);

    userInput.value = '';
}

// --- Inisialisasi ---
window.onload = function() {
    // kirim pesan dengan tombol Enter
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
};