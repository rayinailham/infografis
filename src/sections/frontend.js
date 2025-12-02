/**
 * Frontend Development Section
 * Edit this file to modify frontend development details
 * Based on FUNCTIONAL_SPECIFICATION_GDOCS.md and SDD_AI_ESSAY_PREPAREDNESS_GRADER.md
 * Detailed version for comprehensive stakeholder presentation
 */

export function frontendSection() {
  return `
    <section class="section">
      <div class="container">
        <div class="section-header">
          <div class="section-number">3</div>
          <h2 class="section-title">Aplikasi Web (Frontend)</h2>
          <p class="section-subtitle">Antarmuka modern dan responsif yang memudahkan siswa SMA dalam menggunakan platform ProdiPlan</p>
        </div>
        
        <!-- Row 1: Technology & User Journey -->
        <div class="tech-grid">
          ${renderTechnologyOverview()}
          ${renderUserJourney()}
        </div>

        <!-- Page Details - Each page gets full width for detailed explanation -->
        <div style="margin-top: 2rem;">
          ${renderLandingPageDetailed()}
        </div>

        <div style="margin-top: 2rem;">
          ${renderAuthPageDetailed()}
        </div>

        <div style="margin-top: 2rem;">
          ${renderDashboardPageDetailed()}
        </div>

        <div style="margin-top: 2rem;">
          ${renderEssayGraderPageDetailed()}
        </div>

        <div style="margin-top: 2rem;">
          ${renderProfilePageDetailed()}
        </div>

        <div style="margin-top: 2rem;">
          ${renderResultPageDetailed()}
        </div>

        <!-- Row: Key Features -->
        <div class="tech-grid" style="margin-top: 2rem;">
          ${renderKeyFeatures()}
          ${renderRealTimeFeatures()}
          ${renderSecurityFeatures()}
        </div>
      </div>
    </section>
  `
}

function renderTechnologyOverview() {
  return `
    <div class="card">
      <h4 class="card-title"><span>⚡</span> Teknologi yang Digunakan</h4>
      <ul class="tech-list">
        <li>
          <strong>Next.js & React</strong>
          <br><small style="color: var(--text-secondary);">Framework modern untuk membangun website cepat dan responsif</small>
        </li>
        <li>
          <strong>TypeScript</strong>
          <br><small style="color: var(--text-secondary);">Bahasa pemrograman yang lebih aman dengan pengecekan tipe data</small>
        </li>
        <li>
          <strong>Tailwind CSS</strong>
          <br><small style="color: var(--text-secondary);">Alat untuk mempercantik tampilan dengan desain modern</small>
        </li>
        <li>
          <strong>Framer Motion</strong>
          <br><small style="color: var(--text-secondary);">Animasi halus untuk pengalaman pengguna yang menarik</small>
        </li>
        <li>
          <strong>WebSocket</strong>
          <br><small style="color: var(--text-secondary);">Komunikasi real-time antara siswa dan AI</small>
        </li>
      </ul>
    </div>
  `
}

function renderUserJourney() {
  return `
    <div class="card card-wide">
      <h4 class="card-title"><span>🚀</span> Alur Penggunaan Aplikasi</h4>
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; padding: 1rem 0;">
        <div style="text-align: center; flex: 1; min-width: 120px;">
          <div style="background: var(--accent-blue); color: white; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 0.5rem; font-size: 1.5rem;">1</div>
          <strong>Landing Page</strong>
          <br><small style="color: var(--text-secondary);">Mengenal platform</small>
        </div>
        <div style="color: var(--text-secondary); font-size: 1.5rem;">→</div>
        <div style="text-align: center; flex: 1; min-width: 120px;">
          <div style="background: var(--accent-purple); color: white; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 0.5rem; font-size: 1.5rem;">2</div>
          <strong>Daftar/Masuk</strong>
          <br><small style="color: var(--text-secondary);">Buat akun</small>
        </div>
        <div style="color: var(--text-secondary); font-size: 1.5rem;">→</div>
        <div style="text-align: center; flex: 1; min-width: 120px;">
          <div style="background: var(--accent-green); color: white; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 0.5rem; font-size: 1.5rem;">3</div>
          <strong>Dashboard</strong>
          <br><small style="color: var(--text-secondary);">Halaman utama</small>
        </div>
        <div style="color: var(--text-secondary); font-size: 1.5rem;">→</div>
        <div style="text-align: center; flex: 1; min-width: 120px;">
          <div style="background: var(--accent-orange); color: white; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 0.5rem; font-size: 1.5rem;">4</div>
          <strong>Tes Essay</strong>
          <br><small style="color: var(--text-secondary);">Jawab pertanyaan</small>
        </div>
        <div style="color: var(--text-secondary); font-size: 1.5rem;">→</div>
        <div style="text-align: center; flex: 1; min-width: 120px;">
          <div style="background: var(--accent-pink); color: white; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 0.5rem; font-size: 1.5rem;">5</div>
          <strong>Lihat Hasil</strong>
          <br><small style="color: var(--text-secondary);">Analisis & saran</small>
        </div>
      </div>
    </div>
  `
}

// ==================== DETAILED PAGE SECTIONS ====================

function renderLandingPageDetailed() {
  return `
    <div class="card" style="grid-column: span 3;">
      <h4 class="card-title"><span>🏠</span> Halaman Utama (Landing Page)</h4>
      <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">Halaman pertama yang dilihat pengunjung untuk memperkenalkan platform ProdiPlan dan mengajak mereka mendaftar.</p>
      
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem;">
        <!-- Hero Section -->
        <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1)); padding: 1.25rem; border-radius: 12px; border: 1px solid rgba(59, 130, 246, 0.2);">
          <h5 style="color: var(--accent-blue); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
            <span>🎯</span> Hero Section
          </h5>
          <ul class="tech-list" style="margin: 0;">
            <li><strong>Judul Utama</strong> - "Temukan Jurusan Kuliah yang Tepat untuk Anda dalam 5 Menit"</li>
            <li><strong>Animasi Teks</strong> - SplitText untuk efek muncul kata per kata</li>
            <li><strong>CTA Buttons</strong> - "Mulai Gratis" dan "Lihat Demo"</li>
            <li><strong>Trust Indicators</strong> - Gratis, Tanpa kartu kredit, Hasil instan</li>
          </ul>
        </div>

        <!-- Features Section -->
        <div style="background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.1)); padding: 1.25rem; border-radius: 12px; border: 1px solid rgba(34, 197, 94, 0.2);">
          <h5 style="color: var(--accent-green); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
            <span>✨</span> Fitur Unggulan
          </h5>
          <ul class="tech-list" style="margin: 0;">
            <li><strong>Analisis AI Mendalam</strong> - NLP dengan akurasi tinggi</li>
            <li><strong>Rekomendasi Jurusan</strong> - 3-5 jurusan yang dipersonalisasi</li>
            <li><strong>Progress Tracking</strong> - Dashboard interaktif real-time</li>
            <li><strong>Keamanan Enterprise</strong> - Enkripsi tingkat tinggi</li>
            <li><strong>Hasil Instan</strong> - Laporan dalam 5 menit</li>
            <li><strong>Laporan Detail</strong> - Analisis kekuatan & kelemahan</li>
          </ul>
        </div>

        <!-- How It Works -->
        <div style="background: linear-gradient(135deg, rgba(249, 115, 22, 0.1), rgba(251, 146, 60, 0.1)); padding: 1.25rem; border-radius: 12px; border: 1px solid rgba(249, 115, 22, 0.2);">
          <h5 style="color: var(--accent-orange); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
            <span>📋</span> Cara Kerja
          </h5>
          <ul class="tech-list" style="margin: 0;">
            <li><strong>Step 1</strong> - Daftar akun gratis</li>
            <li><strong>Step 2</strong> - Pilih jurusan impian</li>
            <li><strong>Step 3</strong> - Jawab 5 pertanyaan essay</li>
            <li><strong>Step 4</strong> - Terima analisis AI</li>
          </ul>
        </div>

        <!-- Additional Sections -->
        <div style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(219, 39, 119, 0.1)); padding: 1.25rem; border-radius: 12px; border: 1px solid rgba(236, 72, 153, 0.2);">
          <h5 style="color: var(--accent-pink); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
            <span>📦</span> Section Lainnya
          </h5>
          <ul class="tech-list" style="margin: 0;">
            <li><strong>Testimonials</strong> - Carousel ulasan pengguna</li>
            <li><strong>CTA Section</strong> - Ajakan mendaftar dengan tombol besar</li>
            <li><strong>Footer</strong> - Link navigasi, kontak, sosial media</li>
          </ul>
        </div>
      </div>

      <div style="margin-top: 1.5rem;">
        <img src="/frontend/landingpage.jpg" alt="Landing Page" style="width: 100%; border-radius: 12px; border: 1px solid #e5e7eb; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
      </div>
    </div>
  `
}

function renderAuthPageDetailed() {
  return `
    <div class="card" style="grid-column: span 3;">
      <h4 class="card-title"><span>🔐</span> Halaman Autentikasi (Login & Registrasi)</h4>
      <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">Memungkinkan pengguna untuk masuk ke akun yang sudah ada atau membuat akun baru dengan integrasi Firebase Authentication.</p>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.5rem;">
        <!-- Registration Form -->
        <div style="background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.1)); padding: 1.25rem; border-radius: 12px; border: 1px solid rgba(34, 197, 94, 0.2);">
          <h5 style="color: var(--accent-green); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
            <span>📝</span> Form Registrasi
          </h5>
          <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 1rem;">Data yang dikumpulkan untuk membuat akun baru:</p>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
            <div style="background: white; padding: 0.75rem; border-radius: 8px; border: 1px solid #e5e7eb;">
              <strong style="font-size: 0.85rem;">👤 Nama Lengkap</strong>
              <br><small style="color: var(--text-secondary);">Text input dengan validasi</small>
            </div>
            <div style="background: white; padding: 0.75rem; border-radius: 8px; border: 1px solid #e5e7eb;">
              <strong style="font-size: 0.85rem;">📧 Email</strong>
              <br><small style="color: var(--text-secondary);">Dengan format validation</small>
            </div>
            <div style="background: white; padding: 0.75rem; border-radius: 8px; border: 1px solid #e5e7eb;">
              <strong style="font-size: 0.85rem;">🔒 Password</strong>
              <br><small style="color: var(--text-secondary);">Min 8 karakter, visibility toggle</small>
            </div>
            <div style="background: white; padding: 0.75rem; border-radius: 8px; border: 1px solid #e5e7eb;">
              <strong style="font-size: 0.85rem;">📅 Tanggal Lahir</strong>
              <br><small style="color: var(--text-secondary);">Date picker</small>
            </div>
            <div style="background: white; padding: 0.75rem; border-radius: 8px; border: 1px solid #e5e7eb;">
              <strong style="font-size: 0.85rem;">🏫 Asal Sekolah</strong>
              <br><small style="color: var(--text-secondary);">Searchable dropdown</small>
            </div>
            <div style="background: white; padding: 0.75rem; border-radius: 8px; border: 1px solid #e5e7eb;">
              <strong style="font-size: 0.85rem;">🎓 Jurusan Impian</strong>
              <br><small style="color: var(--text-secondary);">Searchable dropdown</small>
            </div>
          </div>
        </div>

        <!-- Login Form -->
        <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(37, 99, 235, 0.1)); padding: 1.25rem; border-radius: 12px; border: 1px solid rgba(59, 130, 246, 0.2);">
          <h5 style="color: var(--accent-blue); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
            <span>🔑</span> Form Login
          </h5>
          <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 1rem;">Fitur yang tersedia di halaman login:</p>
          
          <ul class="tech-list" style="margin: 0;">
            <li><strong>Email & Password</strong> - Input dengan real-time validation</li>
            <li><strong>Ingat Saya</strong> - Checkbox untuk sesi lebih lama</li>
            <li><strong>Lupa Password</strong> - Link ke reset password via email</li>
            <li><strong>Toggle Password</strong> - Tombol show/hide password</li>
            <li><strong>Auto Redirect</strong> - Ke dashboard setelah login sukses</li>
          </ul>

          <div style="margin-top: 1rem; padding: 0.75rem; background: rgba(59, 130, 246, 0.1); border-radius: 8px;">
            <strong style="font-size: 0.85rem; color: var(--accent-blue);">🔒 Keamanan</strong>
            <p style="margin: 0.5rem 0 0 0; font-size: 0.85rem; color: var(--text-secondary);">
              Integrasi Firebase Authentication dengan JWT token untuk keamanan maksimal
            </p>
          </div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1.5rem;">
        <img src="/frontend/loginpage.jpg" alt="Login Page" style="width: 100%; border-radius: 12px; border: 1px solid #e5e7eb; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
        <img src="/frontend/registerpage.jpg" alt="Register Page" style="width: 100%; border-radius: 12px; border: 1px solid #e5e7eb; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
      </div>
    </div>
  `
}

function renderEssayGraderPageDetailed() {
  return `
    <div class="card" style="grid-column: span 3;">
      <h4 class="card-title"><span>📝</span> Halaman Tes Essay (Essay Grader)</h4>
      <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">Halaman utama untuk melakukan tes kesiapan jurusan melalui serangkaian pertanyaan essay dengan AI. Terdiri dari 3 tahapan utama.</p>
      
      <!-- Stages Overview -->
      <div style="display: flex; justify-content: center; align-items: center; gap: 1rem; margin-bottom: 2rem; flex-wrap: wrap;">
        <div style="background: var(--accent-blue); color: white; padding: 0.75rem 1.5rem; border-radius: 25px; font-weight: 600;">
          1. Intro Screen
        </div>
        <div style="color: var(--text-secondary); font-size: 1.5rem;">→</div>
        <div style="background: var(--accent-green); color: white; padding: 0.75rem 1.5rem; border-radius: 25px; font-weight: 600;">
          2. Test Screen
        </div>
        <div style="color: var(--text-secondary); font-size: 1.5rem;">→</div>
        <div style="background: var(--accent-purple); color: white; padding: 0.75rem 1.5rem; border-radius: 25px; font-weight: 600;">
          3. Loading Screen
        </div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.5rem;">
        <!-- Intro Screen -->
        <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(37, 99, 235, 0.1)); padding: 1.25rem; border-radius: 12px; border: 1px solid rgba(59, 130, 246, 0.2);">
          <h5 style="color: var(--accent-blue); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
            <span>📋</span> Tahap 1: Intro Screen
          </h5>
          <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 1rem;">Persiapan sebelum memulai tes:</p>
          <ul class="tech-list" style="margin: 0;">
            <li><strong>Penjelasan Tes</strong> - 5 pertanyaan essay, durasi 10-15 menit</li>
            <li><strong>Tips Menjawab</strong> - Saran untuk hasil terbaik</li>
            <li><strong>Pilih Jurusan</strong> - Dropdown searchable jurusan</li>
            <li><strong>Deteksi Sesi Aktif</strong> - Opsi melanjutkan sesi sebelumnya</li>
            <li><strong>Tombol Mulai</strong> - "Mulai Test Sekarang"</li>
          </ul>
        </div>

        <!-- Test Screen -->
        <div style="background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.1)); padding: 1.25rem; border-radius: 12px; border: 1px solid rgba(34, 197, 94, 0.2);">
          <h5 style="color: var(--accent-green); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
            <span>✍️</span> Tahap 2: Test Screen
          </h5>
          <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 1rem;">Area menjawab pertanyaan dari AI:</p>
          <ul class="tech-list" style="margin: 0;">
            <li><strong>Header</strong> - Timer, progress bar, indikator koneksi</li>
            <li><strong>Area Pertanyaan</strong> - Nomor, teks, tips menjawab</li>
            <li><strong>Textarea Jawaban</strong> - Min 100 karakter, hitungan live</li>
            <li><strong>Navigasi</strong> - Prev/Next, indikator terjawab</li>
            <li><strong>Sidebar</strong> - Quick jump ke soal tertentu</li>
            <li><strong>Review Mode</strong> - Cek semua jawaban sebelum submit</li>
          </ul>
        </div>

        <!-- Loading Screen -->
        <div style="background: linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(168, 85, 247, 0.1)); padding: 1.25rem; border-radius: 12px; border: 1px solid rgba(147, 51, 234, 0.2);">
          <h5 style="color: var(--accent-purple); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
            <span>⏳</span> Tahap 3: Loading Screen
          </h5>
          <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 1rem;">Menunggu AI menganalisis:</p>
          <ul class="tech-list" style="margin: 0;">
            <li><strong>Animasi Loading</strong> - Spinner dengan pesan dinamis</li>
            <li><strong>Progress Indicator</strong> - Tahapan analisis</li>
            <li><strong>Estimasi Waktu</strong> - "Kurang dari 1 menit"</li>
            <li><strong>Auto Redirect</strong> - Ke halaman hasil</li>
          </ul>
        </div>
      </div>

      <!-- Real-time Features -->
      <div style="margin-top: 1.5rem; padding: 1.25rem; background: linear-gradient(135deg, rgba(249, 115, 22, 0.1), rgba(251, 146, 60, 0.1)); border-radius: 12px; border: 1px solid rgba(249, 115, 22, 0.2);">
        <h5 style="color: var(--accent-orange); margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
          <span>⚡</span> Fitur Real-time (WebSocket)
        </h5>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
          <div style="background: white; padding: 0.75rem; border-radius: 8px;">
            <strong>🔌 Connection</strong>
            <p style="margin: 0.25rem 0 0; font-size: 0.85rem; color: var(--text-secondary);">WebSocket dengan Socket.io, auto-reconnect</p>
          </div>
          <div style="background: white; padding: 0.75rem; border-radius: 8px;">
            <strong>❓ Question Event</strong>
            <p style="margin: 0.25rem 0 0; font-size: 0.85rem; color: var(--text-secondary);">Pertanyaan diterima langsung dari server</p>
          </div>
          <div style="background: white; padding: 0.75rem; border-radius: 8px;">
            <strong>📊 Score Update</strong>
            <p style="margin: 0.25rem 0 0; font-size: 0.85rem; color: var(--text-secondary);">Skor diperbarui real-time setelah jawaban</p>
          </div>
          <div style="background: white; padding: 0.75rem; border-radius: 8px;">
            <strong>⏱️ Timer Sync</strong>
            <p style="margin: 0.25rem 0 0; font-size: 0.85rem; color: var(--text-secondary);">Countdown tersinkronisasi dengan server</p>
          </div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1.5rem;">
        <img src="/frontend/startingsession.jpg" alt="Start Session" style="width: 100%; border-radius: 12px; border: 1px solid #e5e7eb; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
        <img src="/frontend/essaysession.jpg" alt="Essay Session" style="width: 100%; border-radius: 12px; border: 1px solid #e5e7eb; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
      </div>
    </div>
  `
}

function renderProfilePageDetailed() {
  return `
    <div class="card" style="grid-column: span 3;">
      <h4 class="card-title"><span>👤</span> Halaman Profil Pengguna</h4>
      <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">Menampilkan informasi profil pengguna dan riwayat assessment yang pernah dilakukan.</p>
      
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem;">
        <!-- Profile Card -->
        <div style="background: linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(168, 85, 247, 0.1)); padding: 1.25rem; border-radius: 12px; border: 1px solid rgba(147, 51, 234, 0.2);">
          <h5 style="color: var(--accent-purple); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
            <span>🪪</span> Kartu Profil
          </h5>
          <ul class="tech-list" style="margin: 0;">
            <li><strong>Avatar</strong> - Inisial nama dengan gradient background</li>
            <li><strong>Nama Lengkap</strong> - Dapat diedit</li>
            <li><strong>Email</strong> - Read-only (dari Firebase)</li>
            <li><strong>Tanggal Lahir</strong> - Read-only</li>
            <li><strong>Asal Sekolah</strong> - Read-only</li>
            <li><strong>Jurusan Impian</strong> - Dapat diedit</li>
          </ul>
        </div>

        <!-- Stats Card -->
        <div style="background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.1)); padding: 1.25rem; border-radius: 12px; border: 1px solid rgba(34, 197, 94, 0.2);">
          <h5 style="color: var(--accent-green); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
            <span>📈</span> Statistik Assessment
          </h5>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem; margin-top: 0.75rem;">
            <div style="background: white; padding: 0.75rem; border-radius: 8px; text-align: center;">
              <div style="font-size: 1.5rem; font-weight: bold; color: var(--accent-green);">5</div>
              <small style="color: var(--text-secondary);">Selesai</small>
            </div>
            <div style="background: white; padding: 0.75rem; border-radius: 8px; text-align: center;">
              <div style="font-size: 1.5rem; font-weight: bold; color: var(--accent-blue);">1</div>
              <small style="color: var(--text-secondary);">Berlangsung</small>
            </div>
            <div style="background: white; padding: 0.75rem; border-radius: 8px; text-align: center;">
              <div style="font-size: 1.5rem; font-weight: bold; color: var(--text-secondary);">2</div>
              <small style="color: var(--text-secondary);">Kadaluarsa</small>
            </div>
          </div>
        </div>

        <!-- Assessment History -->
        <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(37, 99, 235, 0.1)); padding: 1.25rem; border-radius: 12px; border: 1px solid rgba(59, 130, 246, 0.2);">
          <h5 style="color: var(--accent-blue); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
            <span>📚</span> Riwayat Assessment
          </h5>
          <ul class="tech-list" style="margin: 0;">
            <li style="color: var(--accent-green);"><strong>✓ Completed</strong> - Bisa lihat hasil analisis</li>
            <li style="color: var(--accent-blue);"><strong>⏳ In Progress</strong> - Bisa dilanjutkan</li>
            <li style="color: var(--text-secondary);"><strong>✗ Expired</strong> - Tidak bisa dilanjutkan</li>
          </ul>
          <p style="margin-top: 1rem; font-size: 0.85rem; color: var(--text-secondary);">
            Setiap item menampilkan: jurusan, tanggal, status, dan skor (jika selesai)
          </p>
        </div>

        <!-- Edit Profile Modal -->
        <div style="background: linear-gradient(135deg, rgba(249, 115, 22, 0.1), rgba(251, 146, 60, 0.1)); padding: 1.25rem; border-radius: 12px; border: 1px solid rgba(249, 115, 22, 0.2);">
          <h5 style="color: var(--accent-orange); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
            <span>✏️</span> Edit Profil Modal
          </h5>
          <ul class="tech-list" style="margin: 0;">
            <li><strong>Form Fields</strong> - Nama & jurusan impian</li>
            <li><strong>Validation</strong> - Real-time input check</li>
            <li><strong>API Call</strong> - PATCH /auth/profile</li>
            <li><strong>Toast Notification</strong> - Sukses/error feedback</li>
          </ul>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1.5rem;">
        <img src="/frontend/profilepage.jpg" alt="Profile Page" style="width: 100%; border-radius: 12px; border: 1px solid #e5e7eb; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
        <img src="/frontend/assessmenthistory.jpg" alt="Assessment History" style="width: 100%; border-radius: 12px; border: 1px solid #e5e7eb; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
      </div>
    </div>
  `
}

function renderResultPageDetailed() {
  return `
    <div class="card" style="grid-column: span 3;">
      <h4 class="card-title"><span>📈</span> Halaman Hasil Analisis</h4>
      <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">Menampilkan hasil analisis AI secara komprehensif setelah menyelesaikan tes. Berisi insight mendalam tentang kesiapan pengguna.</p>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
        <!-- Score Card -->
        <div style="background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.1)); padding: 1.25rem; border-radius: 12px; border: 1px solid rgba(34, 197, 94, 0.2);">
          <h5 style="color: var(--accent-green); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
            <span>🎯</span> Skor & Level Kesiapan
          </h5>
          <ul class="tech-list" style="margin: 0;">
            <li><strong>Skor Akhir</strong> - Nilai 0-100 dengan progress circle</li>
            <li><strong>Level Kesiapan</strong>:
              <ul style="margin-top: 0.5rem; padding-left: 1rem;">
                <li style="color: #dc2626;">Belum Siap (0-40)</li>
                <li style="color: #f59e0b;">Cukup Siap (41-60)</li>
                <li style="color: #22c55e;">Siap (61-80)</li>
                <li style="color: #059669;">Sangat Siap (81-100)</li>
              </ul>
            </li>
          </ul>
        </div>

        <!-- Summary & Insights -->
        <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(37, 99, 235, 0.1)); padding: 1.25rem; border-radius: 12px; border: 1px solid rgba(59, 130, 246, 0.2);">
          <h5 style="color: var(--accent-blue); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
            <span>📊</span> Ringkasan & Key Insights
          </h5>
          <ul class="tech-list" style="margin: 0;">
            <li><strong>Summary</strong> - Penjelasan umum hasil analisis</li>
            <li><strong>Key Insights</strong> dengan skor per aspek:
              <ul style="margin-top: 0.5rem; padding-left: 1rem;">
                <li>Motivation Score</li>
                <li>Technical Understanding</li>
                <li>Career Alignment</li>
              </ul>
            </li>
          </ul>
        </div>

        <!-- Strengths & Weaknesses -->
        <div style="background: linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(168, 85, 247, 0.1)); padding: 1.25rem; border-radius: 12px; border: 1px solid rgba(147, 51, 234, 0.2);">
          <h5 style="color: var(--accent-purple); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
            <span>⚖️</span> Kekuatan & Kelemahan
          </h5>
          <ul class="tech-list" style="margin: 0;">
            <li><strong style="color: var(--accent-green);">💪 Kekuatan</strong>
              <br><small style="color: var(--text-secondary);">Aspek-aspek yang menjadi kelebihan pengguna berdasarkan jawaban</small>
            </li>
            <li><strong style="color: var(--accent-orange);">🎯 Kelemahan</strong>
              <br><small style="color: var(--text-secondary);">Area yang masih perlu ditingkatkan untuk persiapan</small>
            </li>
          </ul>
        </div>

        <!-- Recommendations -->
        <div style="background: linear-gradient(135deg, rgba(249, 115, 22, 0.1), rgba(251, 146, 60, 0.1)); padding: 1.25rem; border-radius: 12px; border: 1px solid rgba(249, 115, 22, 0.2);">
          <h5 style="color: var(--accent-orange); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
            <span>💡</span> Rekomendasi
          </h5>
          <ul class="tech-list" style="margin: 0;">
            <li><strong>Saran Persiapan</strong> - Langkah konkret untuk meningkatkan kesiapan</li>
            <li><strong>Saran Karir</strong> - 3-5 jalur karir yang sesuai dengan profil</li>
          </ul>
        </div>

        <!-- Personality Traits -->
        <div style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(219, 39, 119, 0.1)); padding: 1.25rem; border-radius: 12px; border: 1px solid rgba(236, 72, 153, 0.2);">
          <h5 style="color: var(--accent-pink); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
            <span>🧠</span> Karakteristik Kepribadian
          </h5>
          <ul class="tech-list" style="margin: 0;">
            <li><strong>Analytical Thinking</strong> - Kemampuan berpikir analitis</li>
            <li><strong>Problem Solving</strong> - Kemampuan memecahkan masalah</li>
            <li><strong>Creativity</strong> - Tingkat kreativitas</li>
          </ul>
        </div>
      </div>

      <div style="margin-top: 1.5rem;">
        <img src="/frontend/aftersession.jpg" alt="Result Page" style="width: 100%; border-radius: 12px; border: 1px solid #e5e7eb; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
      </div>
    </div>
  `
}

// ==================== ORIGINAL COMPACT FUNCTIONS (REMOVED) ====================
// These have been replaced by the detailed versions above
// ==================== KEY FEATURES SECTIONS ====================

function renderKeyFeatures() {
  return `
    <div class="card">
      <h4 class="card-title"><span>✨</span> Fitur Utama</h4>
      <ul class="tech-list">
        <li>
          <strong>Analisis AI Mendalam</strong>
          <br><small style="color: var(--text-secondary);">Teknologi AI menganalisis esai dengan akurasi tinggi</small>
        </li>
        <li>
          <strong>Hasil Instan</strong>
          <br><small style="color: var(--text-secondary);">Laporan komprehensif dalam 5 menit</small>
        </li>
        <li>
          <strong>Rekomendasi Personal</strong>
          <br><small style="color: var(--text-secondary);">3-5 saran jurusan yang dipersonalisasi</small>
        </li>
        <li>
          <strong>Tampilan Responsif</strong>
          <br><small style="color: var(--text-secondary);">Bisa diakses dari HP, tablet, atau laptop</small>
        </li>
      </ul>
    </div>
  `
}

function renderRealTimeFeatures() {
  return `
    <div class="card">
      <h4 class="card-title"><span>⚡</span> Fitur Real-Time</h4>
      <ul class="tech-list">
        <li>
          <strong>Pertanyaan Langsung dari AI</strong>
          <br><small style="color: var(--text-secondary);">AI memberikan pertanyaan secara langsung tanpa refresh</small>
        </li>
        <li>
          <strong>Update Skor Real-time</strong>
          <br><small style="color: var(--text-secondary);">Skor diperbarui setelah setiap jawaban</small>
        </li>
        <li>
          <strong>Timer Countdown</strong>
          <br><small style="color: var(--text-secondary);">Waktu tersisa ditampilkan secara live</small>
        </li>
        <li>
          <strong>Indikator Koneksi</strong>
          <br><small style="color: var(--text-secondary);">Status koneksi ditampilkan kepada pengguna</small>
        </li>
      </ul>
    </div>
  `
}

function renderSecurityFeatures() {
  return `
    <div class="card">
      <h4 class="card-title"><span>🛡️</span> Keamanan & Privasi</h4>
      <ul class="tech-list">
        <li>
          <strong>Autentikasi Aman</strong>
          <br><small style="color: var(--text-secondary);">Login dengan enkripsi dan token keamanan</small>
        </li>
        <li>
          <strong>Halaman Terlindungi</strong>
          <br><small style="color: var(--text-secondary);">Dashboard, tes, dan profil hanya bisa diakses setelah login</small>
        </li>
        <li>
          <strong>Data Terenkripsi</strong>
          <br><small style="color: var(--text-secondary);">Semua data dikirim dengan koneksi aman (HTTPS)</small>
        </li>
        <li>
          <strong>Session Timeout</strong>
          <br><small style="color: var(--text-secondary);">Otomatis logout jika tidak aktif</small>
        </li>
      </ul>
    </div>
  `
}
