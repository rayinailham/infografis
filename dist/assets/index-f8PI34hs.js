(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(e){if(e.ep)return;e.ep=!0;const a=t(e);fetch(e.href,a)}})();function l(){return`
    <section class="hero">
      <div class="container">
        <h1>ProdiPlan.id</h1>
        <p class="subtitle">AI Essay Preparedness Grader - Platform evaluasi kesiapan jurusan kuliah berbasis kecerdasan buatan untuk siswa SMA Indonesia</p>
        <span class="badge">📅 Desember 2025 | Tim Pengembangan ProdiPlan</span>
      </div>
    </section>
  `}function o(){return`
    <section class="section">
      <div class="container">
        <div class="section-header">
          <div class="section-number">1</div>
          <h2 class="section-title">Konsep Proyek</h2>
          <p class="section-subtitle">Membantu siswa SMA menemukan kesiapan mereka untuk jurusan kuliah melalui sesi tanya jawab interaktif dengan AI</p>
        </div>
        
        <div class="concept-grid">
          <div class="concept-text">
            <h3 class="concept-title">🎯 Tujuan Utama</h3>
            <p>AI Essay Preparedness Grader adalah fitur inovatif untuk platform web ProdiPlan.id yang menggunakan kecerdasan buatan dalam bentuk <strong>conversational agent</strong> untuk menganalisis esai jawaban siswa mengenai jurusan kuliah pilihan mereka.</p>
            
            <ul class="feature-list">
              <li>
                <div class="feature-icon">💬</div>
                <span>Interaksi natural melalui chat berbasis AI</span>
              </li>
              <li>
                <div class="feature-icon">📝</div>
                <span>Analisis mendalam terhadap jawaban esai siswa</span>
              </li>
              <li>
                <div class="feature-icon">📊</div>
                <span>Skor kesiapan dengan skala 0-100 yang terukur</span>
              </li>
              <li>
                <div class="feature-icon">💡</div>
                <span>Rekomendasi personal untuk peningkatan</span>
              </li>
              <li>
                <div class="feature-icon">📈</div>
                <span>Laporan komprehensif dengan insight mendalam</span>
              </li>
            </ul>
          </div>
          
          <div class="card">
            <h4 class="card-title"><span>📊</span> Parameter Sistem</h4>
            <div class="stats-grid">
              <div class="stat-item">
                <div class="stat-value">5</div>
                <div class="stat-label">Pertanyaan per Sesi</div>
              </div>
              <div class="stat-item">
                <div class="stat-value">0-100</div>
                <div class="stat-label">Rentang Skor</div>
              </div>
              <div class="stat-item">
                <div class="stat-value">30m</div>
                <div class="stat-label">Timeout Sesi</div>
              </div>
              <div class="stat-item">
                <div class="stat-value">∞</div>
                <div class="stat-label">History Tersimpan</div>
              </div>
            </div>
            <div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid #e2e8f0;">
              <p style="font-size: 0.8rem; color: #64748b; text-align: center;">
                Powered by <strong>Google Gemini AI</strong> untuk analisis cerdas dan respons natural
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function d(){return`
    <section class="section">
      <div class="container">
        <div class="section-header">
          <div class="section-number">2</div>
          <h2 class="section-title">Diagram Sistem</h2>
          <p class="section-subtitle">Entity Relationship Diagram dan Sequence Flow dari sistem AI Essay Preparedness Grader</p>
        </div>
        
        <!-- ERD Section -->
        <div class="diagram-section-title">
          <span>📊</span> Entity Relationship Diagram (ERD)
        </div>

        <div class="erd-image-container" style="margin-bottom: 32px; text-align: center;">
          <img src="/images/ERD.png" alt="Entity Relationship Diagram" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        </div>
        
        <!-- Relationships -->
        <div class="relationship-grid">
          <div class="relationship-card">
            <h6>Users → Grading Sessions</h6>
            <div class="relationship-type">1 : N</div>
            <p class="relationship-desc">Satu user dapat memiliki banyak grading sessions</p>
          </div>
          <div class="relationship-card">
            <h6>Grading Sessions → Messages</h6>
            <div class="relationship-type">1 : N</div>
            <p class="relationship-desc">Satu session dapat memiliki banyak messages</p>
          </div>
          <div class="relationship-card">
            <h6>Grading Sessions → Results</h6>
            <div class="relationship-type">1 : 1</div>
            <p class="relationship-desc">Satu session menghasilkan satu grading result</p>
          </div>
        </div>
        
        <!-- Use Case & Activity Diagrams -->
        <div class="diagram-section-title" style="margin-top: 48px;">
          <span>📐</span> Use Case & Activity Diagrams
        </div>

        <!-- Use Case Diagram -->
        <div class="diagram-card" style="margin-bottom: 32px;">
            <h5>Use Case Diagram</h5>
            <p class="diagram-desc">Gambaran fungsionalitas sistem dari perspektif pengguna (Mahasiswa) dan interaksinya dengan AI System.</p>
            <div class="diagram-container">
                <img src="/images/UseCase.png" alt="Use Case Diagram" class="diagram-img">
            </div>
        </div>

        <!-- Activity Diagrams with Tabs -->
        <div class="activity-tabs" id="activityTabs">
          <button class="activity-tab active" data-tab="grading">Grading Session</button>
          <button class="activity-tab" data-tab="registration">User Registration</button>
          <button class="activity-tab" data-tab="ai">AI Integration</button>
        </div>

        ${g()}
        ${c()}
        ${p()}

        <!-- Sequence Diagrams -->
        <div class="diagram-section-title" style="margin-top: 48px;">
          <span>🔄</span> Sequence Diagrams
        </div>
        
        <div class="seq-tabs" id="seqTabs">
          <button class="seq-tab active" data-tab="complete">Complete Grading Flow</button>
          <button class="seq-tab" data-tab="registration">User Registration</button>
          <button class="seq-tab" data-tab="realtime">Realtime Communication</button>
          <button class="seq-tab" data-tab="ai">AI Service Integration</button>
        </div>
        
        ${m()}
        ${u()}
        ${v()}
        ${b()}
        
        <!-- Key Integration Points -->
        <div class="key-points">
          <h5>🔗 Key Integration Points</h5>
          <div class="key-points-grid">
            <div class="key-point-item">
              <span>🔐</span>
              <h6>Authentication</h6>
              <p>Firebase Auth</p>
            </div>
            <div class="key-point-item">
              <span>🔌</span>
              <h6>Real-time</h6>
              <p>WebSocket</p>
            </div>
            <div class="key-point-item">
              <span>🤖</span>
              <h6>AI Processing</h6>
              <p>Google Gemini</p>
            </div>
            <div class="key-point-item">
              <span>💾</span>
              <h6>Data Storage</h6>
              <p>PostgreSQL</p>
            </div>
            <div class="key-point-item">
              <span>⚡</span>
              <h6>Caching</h6>
              <p>Redis</p>
            </div>
            <div class="key-point-item">
              <span>📊</span>
              <h6>Monitoring</h6>
              <p>Health Checks</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function g(){return`
    <div id="activity-grading" class="activity-content active">
      <div class="diagram-card">
        <h5>Activity Diagram: Grading Session</h5>
        <p class="diagram-desc">Alur aktivitas detail selama sesi penilaian berlangsung, dari pemilihan jurusan hingga hasil akhir.</p>
        <div class="diagram-container">
          <img src="/images/Activity_Grading.png" alt="Activity Diagram: Grading Session" class="diagram-img" style="max-height: 600px; max-width: 100%; width: auto; height: auto; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        </div>
      </div>
    </div>
  `}function c(){return`
    <div id="activity-registration" class="activity-content">
      <div class="diagram-card">
        <h5>Activity Diagram: User Registration</h5>
        <p class="diagram-desc">Proses pendaftaran user baru dengan integrasi Firebase Authentication dan penyimpanan data profil ke database.</p>
        <div class="diagram-container">
          <img src="/images/Activity_Registration.png" alt="Activity Diagram: User Registration" class="diagram-img" style="max-height: 600px; max-width: 100%; width: auto; height: auto; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        </div>
      </div>
    </div>
  `}function p(){return`
    <div id="activity-ai" class="activity-content">
      <div class="diagram-card">
        <h5>Activity Diagram: AI Service Integration</h5>
        <p class="diagram-desc">Integrasi dengan Google Gemini API untuk generasi pertanyaan, analisis jawaban, dan pembuatan laporan akhir.</p>
        <div class="diagram-container">
          <img src="/images/Activity_AI_Integration.png" alt="Activity Diagram: AI Service Integration" class="diagram-img" style="max-height: 600px; max-width: 100%; width: auto; height: auto; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        </div>
      </div>
    </div>
  `}function m(){return`
    <div id="seq-complete" class="seq-content active">
      <div class="seq-card">
        <h5>Complete Grading Session Flow</h5>
        <p class="seq-desc">Alur lengkap dari awal hingga akhir sesi grading, mulai dari autentikasi user, pembuatan sesi, percakapan dengan AI, hingga generasi laporan akhir.</p>
        
        <div class="seq-diagram-container">
          <img src="/images/Complete Grading Session Sequence.png" alt="Complete Grading Session Sequence" class="seq-diagram-img" style="width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        </div>
      </div>
    </div>
  `}function u(){return`
    <div id="seq-registration" class="seq-content">
      <div class="seq-card">
        <h5>User Registration Flow</h5>
        <p class="seq-desc">Proses pendaftaran user baru dengan integrasi Firebase Authentication dan penyimpanan data profil ke database.</p>
        
        <div class="seq-diagram-container">
          <img src="/images/User Registration Flow sequence.png" alt="User Registration Flow" class="seq-diagram-img" style="width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        </div>
      </div>
    </div>
  `}function v(){return`
    <div id="seq-realtime" class="seq-content">
      <div class="seq-card">
        <h5>Real-time Communication Flow</h5>
        <p class="seq-desc">Detail implementasi WebSocket untuk komunikasi real-time antara frontend dan backend selama sesi grading aktif.</p>
        
        <div class="seq-diagram-container">
          <img src="/images/Realtime Communication sequence.png" alt="Realtime Communication Flow" class="seq-diagram-img" style="width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        </div>
      </div>
    </div>
  `}function b(){return`
    <div id="seq-ai" class="seq-content">
      <div class="seq-card">
        <h5>AI Service Integration Flow</h5>
        <p class="seq-desc">Integrasi dengan Google Gemini API untuk generasi pertanyaan, analisis jawaban, dan pembuatan laporan akhir.</p>
        
        <div class="seq-diagram-container">
          <img src="/images/AI Service Integration Flow sequence.png" alt="AI Service Integration Flow" class="seq-diagram-img" style="width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        </div>
      </div>
    </div>
  `}typeof document<"u"&&document.addEventListener("click",s=>{var i,t;if(s.target.classList.contains("seq-tab")){const r=s.target.dataset.tab;document.querySelectorAll(".seq-tab").forEach(e=>e.classList.remove("active")),document.querySelectorAll(".seq-content").forEach(e=>e.classList.remove("active")),s.target.classList.add("active"),(i=document.getElementById("seq-"+r))==null||i.classList.add("active")}if(s.target.classList.contains("activity-tab")){const r=s.target.dataset.tab;document.querySelectorAll(".activity-tab").forEach(e=>e.classList.remove("active")),document.querySelectorAll(".activity-content").forEach(e=>e.classList.remove("active")),s.target.classList.add("active"),(t=document.getElementById("activity-"+r))==null||t.classList.add("active")}});function y(){return`
    <section class="section">
      <div class="container">
        <div class="section-header">
          <div class="section-number">3</div>
          <h2 class="section-title">Aplikasi Web (Frontend)</h2>
          <p class="section-subtitle">Antarmuka modern dan responsif yang memudahkan siswa SMA dalam menggunakan platform ProdiPlan</p>
        </div>
        
        <!-- Row 1: Technology & User Journey -->
        <div class="tech-grid">
          ${h()}
          ${x()}
        </div>

        <!-- Page Details - Each page gets full width for detailed explanation -->
        <div style="margin-top: 2rem;">
          ${k()}
        </div>

        <div style="margin-top: 2rem;">
          ${f()}
        </div>

      

        <div style="margin-top: 2rem;">
          ${S()}
        </div>

        <div style="margin-top: 2rem;">
          ${w()}
        </div>

        <div style="margin-top: 2rem;">
          ${A()}
        </div>

        <!-- Row: Key Features -->
        <div class="tech-grid" style="margin-top: 2rem;">
          ${P()}
          ${T()}
          ${I()}
        </div>
      </div>
    </section>
  `}function h(){return`
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
  `}function x(){return`
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
  `}function k(){return`
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
  `}function f(){return`
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
  `}function S(){return`
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
  `}function w(){return`
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
  `}function A(){return`
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
  `}function P(){return`
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
  `}function T(){return`
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
  `}function I(){return`
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
  `}function z(){return`
    <section class="section">
      <div class="container">
        <div class="section-header">
          <div class="section-number">4</div>
          <h2 class="section-title">Backend Microservices Architecture</h2>
          <p class="section-subtitle">Sistem terdistribusi dengan spesialisasi service untuk skalabilitas dan maintainability</p>
        </div>
        
        <!-- Architecture Overview -->
        <div style="margin-bottom: 2rem;">
          ${R()}
        </div>

        <!-- Detailed Services - Each service gets its own detailed section -->
        <div style="margin-bottom: 2rem;">
          ${C()}
        </div>

        <div style="margin-bottom: 2rem;">
          ${D()}
        </div>

        <div style="margin-bottom: 2rem;">
          ${j()}
        </div>

        <div style="margin-bottom: 2rem;">
          ${L()}
        </div>

        <div style="margin-bottom: 2rem;">
          ${G()}
        </div>

        <div style="margin-bottom: 2rem;">
          ${E()}
        </div>

        <!-- Infrastructure Grid -->
        <div class="tech-grid">
          ${F()}
          ${q()}
        </div>
      </div>
    </section>
  `}function R(){return`
    <div class="card" style="grid-column: span 3;">
      <h4 class="card-title"><span>🏗️</span> Arsitektur Sistem</h4>
      <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">Sistem menggunakan arsitektur microservices dengan 6 service utama yang berkomunikasi melalui API Gateway.</p>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
        <div style="background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: white; padding: 1rem; border-radius: 12px; text-align: center;">
          <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">🌐</div>
          <strong>API Gateway</strong>
          <div style="font-size: 0.8rem; opacity: 0.9;">:4000</div>
        </div>
        <div style="background: linear-gradient(135deg, #22c55e, #16a34a); color: white; padding: 1rem; border-radius: 12px; text-align: center;">
          <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">🔐</div>
          <strong>Auth Service</strong>
          <div style="font-size: 0.8rem; opacity: 0.9;">:4001</div>
        </div>
        <div style="background: linear-gradient(135deg, #a855f7, #7c3aed); color: white; padding: 1rem; border-radius: 12px; text-align: center;">
          <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">📝</div>
          <strong>Session Service</strong>
          <div style="font-size: 0.8rem; opacity: 0.9;">:4002</div>
        </div>
        <div style="background: linear-gradient(135deg, #f97316, #ea580c); color: white; padding: 1rem; border-radius: 12px; text-align: center;">
          <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">🤖</div>
          <strong>Grading Worker</strong>
          <div style="font-size: 0.8rem; opacity: 0.9;">:4003</div>
        </div>
        <div style="background: linear-gradient(135deg, #ec4899, #db2777); color: white; padding: 1rem; border-radius: 12px; text-align: center;">
          <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">⚡</div>
          <strong>WebSocket</strong>
          <div style="font-size: 0.8rem; opacity: 0.9;">:4004</div>
        </div>
        <div style="background: linear-gradient(135deg, #06b6d4, #0891b2); color: white; padding: 1rem; border-radius: 12px; text-align: center;">
          <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">📊</div>
          <strong>Result Service</strong>
          <div style="font-size: 0.8rem; opacity: 0.9;">:4005</div>
        </div>
      </div>

      <div style="display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center;">
        <div style="background: rgba(59, 130, 246, 0.1); padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.85rem;">
          <strong>🔗 Cloudflare Tunnel</strong> - Zero Trust Access
        </div>
        <div style="background: rgba(34, 197, 94, 0.1); padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.85rem;">
          <strong>🗄️ PostgreSQL</strong> - :4015
        </div>
        <div style="background: rgba(239, 68, 68, 0.1); padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.85rem;">
          <strong>⚡ Redis</strong> - :4016
        </div>
      </div>
    </div>
  `}function C(){return`
    <div class="card" style="grid-column: span 3;">
      <h4 class="card-title"><span>🔐</span> Auth Service (Port: 4001)</h4>
      <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">Bertanggung jawab penuh atas autentikasi dan autorisasi pengguna dalam sistem. Terintegrasi dengan Firebase Authentication untuk keamanan maksimal.</p>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
        <!-- Core Features -->
        <div style="background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.1)); padding: 1.25rem; border-radius: 12px; border: 1px solid rgba(34, 197, 94, 0.2);">
          <h5 style="color: var(--accent-green); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
            <span>⚙️</span> Fitur Utama
          </h5>
          <ul class="tech-list" style="margin: 0;">
            <li><strong>Firebase Integration</strong> - Autentikasi dengan Firebase Authentication</li>
            <li><strong>JWT Token</strong> - Access token dengan refresh token mechanism</li>
            <li><strong>Role-based Access</strong> - Pembatasan akses berdasarkan role (user/admin)</li>
            <li><strong>Session Validation</strong> - Validasi token di setiap request</li>
            <li><strong>Password Reset</strong> - Reset password via email</li>
          </ul>
        </div>

        <!-- API Endpoints -->
        <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(37, 99, 235, 0.1)); padding: 1.25rem; border-radius: 12px; border: 1px solid rgba(59, 130, 246, 0.2);">
          <h5 style="color: var(--accent-blue); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
            <span>🔗</span> API Endpoints
          </h5>
          <div style="font-family: monospace; font-size: 0.85rem;">
            <div style="padding: 0.5rem; background: white; border-radius: 6px; margin-bottom: 0.5rem;">
              <span style="background: #22c55e; color: white; padding: 0.15rem 0.5rem; border-radius: 4px; font-size: 0.75rem;">POST</span>
              <span style="margin-left: 0.5rem;">/auth/register</span>
            </div>
            <div style="padding: 0.5rem; background: white; border-radius: 6px; margin-bottom: 0.5rem;">
              <span style="background: #22c55e; color: white; padding: 0.15rem 0.5rem; border-radius: 4px; font-size: 0.75rem;">POST</span>
              <span style="margin-left: 0.5rem;">/auth/login</span>
            </div>
            <div style="padding: 0.5rem; background: white; border-radius: 6px; margin-bottom: 0.5rem;">
              <span style="background: #22c55e; color: white; padding: 0.15rem 0.5rem; border-radius: 4px; font-size: 0.75rem;">POST</span>
              <span style="margin-left: 0.5rem;">/auth/refresh</span>
            </div>
            <div style="padding: 0.5rem; background: white; border-radius: 6px; margin-bottom: 0.5rem;">
              <span style="background: #3b82f6; color: white; padding: 0.15rem 0.5rem; border-radius: 4px; font-size: 0.75rem;">GET</span>
              <span style="margin-left: 0.5rem;">/auth/me</span>
            </div>
            <div style="padding: 0.5rem; background: white; border-radius: 6px; margin-bottom: 0.5rem;">
              <span style="background: #f59e0b; color: white; padding: 0.15rem 0.5rem; border-radius: 4px; font-size: 0.75rem;">PATCH</span>
              <span style="margin-left: 0.5rem;">/auth/profile</span>
            </div>
            <div style="padding: 0.5rem; background: white; border-radius: 6px; margin-bottom: 0.5rem;">
              <span style="background: #22c55e; color: white; padding: 0.15rem 0.5rem; border-radius: 4px; font-size: 0.75rem;">POST</span>
              <span style="margin-left: 0.5rem;">/auth/forgot-password</span>
            </div>
            <div style="padding: 0.5rem; background: white; border-radius: 6px;">
              <span style="background: #ef4444; color: white; padding: 0.15rem 0.5rem; border-radius: 4px; font-size: 0.75rem;">DELETE</span>
              <span style="margin-left: 0.5rem;">/auth/user</span>
            </div>
          </div>
        </div>

        <!-- Technology Stack -->
        <div style="background: linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(168, 85, 247, 0.1)); padding: 1.25rem; border-radius: 12px; border: 1px solid rgba(147, 51, 234, 0.2);">
          <h5 style="color: var(--accent-purple); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
            <span>🛠️</span> Tech Stack
          </h5>
          <ul class="tech-list" style="margin: 0;">
            <li><strong>Framework:</strong> Hono.js (lightweight & fast)</li>
            <li><strong>Auth Provider:</strong> Firebase Authentication</li>
            <li><strong>Token:</strong> JWT dengan RS256 algorithm</li>
            <li><strong>Validation:</strong> Zod schema validation</li>
            <li><strong>Storage:</strong> PostgreSQL (users table)</li>
          </ul>
        </div>
      </div>
    </div>
  `}function D(){return`
    <div class="card" style="grid-column: span 3;">
      <h4 class="card-title"><span>📝</span> Session Service (Port: 4002)</h4>
      <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">Mengelola siklus hidup sesi grading aktif dari awal hingga selesai. Mencatat status, progress, dan metadata setiap sesi.</p>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
        <!-- Session Lifecycle -->
        <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(37, 99, 235, 0.1)); padding: 1.25rem; border-radius: 12px; border: 1px solid rgba(59, 130, 246, 0.2);">
          <h5 style="color: var(--accent-blue); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
            <span>🔄</span> Session Lifecycle
          </h5>
          <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1rem;">
            <span style="background: #22c55e; color: white; padding: 0.35rem 0.75rem; border-radius: 20px; font-size: 0.8rem;">Active</span>
            <span>→</span>
            <span style="background: #3b82f6; color: white; padding: 0.35rem 0.75rem; border-radius: 20px; font-size: 0.8rem;">In Progress</span>
            <span>→</span>
            <span style="background: #a855f7; color: white; padding: 0.35rem 0.75rem; border-radius: 20px; font-size: 0.8rem;">Completed</span>
          </div>
          <ul class="tech-list" style="margin: 0;">
            <li><strong>Create Session</strong> - Inisiasi sesi baru dengan target jurusan</li>
            <li><strong>Track Progress</strong> - Monitor pertanyaan & jawaban</li>
            <li><strong>Complete Session</strong> - Finalisasi dan trigger analisis AI</li>
            <li><strong>Expire Handler</strong> - Auto-expire sesi yang timeout</li>
          </ul>
        </div>

        <!-- API Endpoints -->
        <div style="background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.1)); padding: 1.25rem; border-radius: 12px; border: 1px solid rgba(34, 197, 94, 0.2);">
          <h5 style="color: var(--accent-green); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
            <span>🔗</span> API Endpoints
          </h5>
          <div style="font-family: monospace; font-size: 0.85rem;">
            <div style="padding: 0.5rem; background: white; border-radius: 6px; margin-bottom: 0.5rem;">
              <span style="background: #22c55e; color: white; padding: 0.15rem 0.5rem; border-radius: 4px; font-size: 0.75rem;">POST</span>
              <span style="margin-left: 0.5rem;">/grading-sessions</span>
              <br><small style="color: var(--text-secondary); margin-left: 3.5rem;">Create new session</small>
            </div>
            <div style="padding: 0.5rem; background: white; border-radius: 6px; margin-bottom: 0.5rem;">
              <span style="background: #3b82f6; color: white; padding: 0.15rem 0.5rem; border-radius: 4px; font-size: 0.75rem;">GET</span>
              <span style="margin-left: 0.5rem;">/grading-sessions</span>
              <br><small style="color: var(--text-secondary); margin-left: 3.5rem;">List user sessions</small>
            </div>
            <div style="padding: 0.5rem; background: white; border-radius: 6px; margin-bottom: 0.5rem;">
              <span style="background: #3b82f6; color: white; padding: 0.15rem 0.5rem; border-radius: 4px; font-size: 0.75rem;">GET</span>
              <span style="margin-left: 0.5rem;">/grading-sessions/{id}</span>
              <br><small style="color: var(--text-secondary); margin-left: 3.5rem;">Get session detail</small>
            </div>
            <div style="padding: 0.5rem; background: white; border-radius: 6px; margin-bottom: 0.5rem;">
              <span style="background: #22c55e; color: white; padding: 0.15rem 0.5rem; border-radius: 4px; font-size: 0.75rem;">POST</span>
              <span style="margin-left: 0.5rem;">/grading-sessions/{id}/complete</span>
              <br><small style="color: var(--text-secondary); margin-left: 3.5rem;">Complete session</small>
            </div>
            <div style="padding: 0.5rem; background: white; border-radius: 6px;">
              <span style="background: #3b82f6; color: white; padding: 0.15rem 0.5rem; border-radius: 4px; font-size: 0.75rem;">GET</span>
              <span style="margin-left: 0.5rem;">/grading-sessions/{id}/messages</span>
              <br><small style="color: var(--text-secondary); margin-left: 3.5rem;">Get chat history</small>
            </div>
          </div>
        </div>

        <!-- Session Data -->
        <div style="background: linear-gradient(135deg, rgba(249, 115, 22, 0.1), rgba(251, 146, 60, 0.1)); padding: 1.25rem; border-radius: 12px; border: 1px solid rgba(249, 115, 22, 0.2);">
          <h5 style="color: var(--accent-orange); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
            <span>📊</span> Data yang Disimpan
          </h5>
          <ul class="tech-list" style="margin: 0;">
            <li><strong>target_major</strong> - Jurusan yang sedang diuji</li>
            <li><strong>status</strong> - active | completed | expired</li>
            <li><strong>current_score</strong> - Skor akumulasi (0-100)</li>
            <li><strong>question_count</strong> - Jumlah pertanyaan dijawab</li>
            <li><strong>max_questions</strong> - Batas pertanyaan (default: 10)</li>
            <li><strong>session_duration</strong> - Durasi dalam menit (default: 60)</li>
            <li><strong>expires_at</strong> - Waktu kadaluarsa sesi</li>
          </ul>
        </div>
      </div>
    </div>
  `}function j(){return`
    <div class="card" style="grid-column: span 3;">
      <h4 class="card-title"><span>🤖</span> Grading Worker (Port: 4003)</h4>
      <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">Unit pemrosesan AI yang menangani analisis esai dan interaksi cerdas. Menggunakan Google Gemini API untuk natural language processing.</p>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
        <!-- AI Processing Flow -->
        <div style="background: linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(168, 85, 247, 0.1)); padding: 1.25rem; border-radius: 12px; border: 1px solid rgba(147, 51, 234, 0.2);">
          <h5 style="color: var(--accent-purple); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
            <span>🔄</span> Alur Pemrosesan AI
          </h5>
          <ol style="margin: 0; padding-left: 1.25rem; color: var(--text-primary);">
            <li style="margin-bottom: 0.5rem;"><strong>Question Generation</strong>
              <br><small style="color: var(--text-secondary);">AI membuat pertanyaan berdasarkan jurusan target</small>
            </li>
            <li style="margin-bottom: 0.5rem;"><strong>Answer Analysis</strong>
              <br><small style="color: var(--text-secondary);">Analisis jawaban dengan context understanding</small>
            </li>
            <li style="margin-bottom: 0.5rem;"><strong>Score Calculation</strong>
              <br><small style="color: var(--text-secondary);">Hitung skor 0-100 per jawaban</small>
            </li>
            <li><strong>Final Report</strong>
              <br><small style="color: var(--text-secondary);">Generate laporan komprehensif</small>
            </li>
          </ol>
        </div>

        <!-- Gemini Integration -->
        <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(37, 99, 235, 0.1)); padding: 1.25rem; border-radius: 12px; border: 1px solid rgba(59, 130, 246, 0.2);">
          <h5 style="color: var(--accent-blue); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
            <span>🧠</span> Google Gemini Integration
          </h5>
          <ul class="tech-list" style="margin: 0;">
            <li><strong>Model:</strong> gemini-1.5-flash</li>
            <li><strong>Prompt Engineering</strong>
              <br><small style="color: var(--text-secondary);">Template khusus untuk evaluasi kesiapan jurusan</small>
            </li>
            <li><strong>Context Window</strong>
              <br><small style="color: var(--text-secondary);">Menyimpan histori percakapan untuk konteks</small>
            </li>
            <li><strong>Response Format</strong>
              <br><small style="color: var(--text-secondary);">Structured JSON untuk scoring dan feedback</small>
            </li>
          </ul>
        </div>

        <!-- Analysis Report -->
        <div style="background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.1)); padding: 1.25rem; border-radius: 12px; border: 1px solid rgba(34, 197, 94, 0.2);">
          <h5 style="color: var(--accent-green); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
            <span>📋</span> Komponen Laporan Analisis
          </h5>
          <ul class="tech-list" style="margin: 0;">
            <li><strong>summary</strong> - Ringkasan umum kesiapan</li>
            <li><strong>strengths</strong> - Kekuatan yang teridentifikasi</li>
            <li><strong>weaknesses</strong> - Area yang perlu ditingkatkan</li>
            <li><strong>recommendations</strong> - Saran konkret</li>
            <li><strong>key_insights</strong> - Skor per aspek (motivasi, teknis, alignment)</li>
            <li><strong>personality_traits</strong> - Analisis kepribadian</li>
            <li><strong>career_suggestions</strong> - Rekomendasi karir alternatif</li>
          </ul>
        </div>

        <!-- Caching Strategy -->
        <div style="background: linear-gradient(135deg, rgba(249, 115, 22, 0.1), rgba(251, 146, 60, 0.1)); padding: 1.25rem; border-radius: 12px; border: 1px solid rgba(249, 115, 22, 0.2);">
          <h5 style="color: var(--accent-orange); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
            <span>⚡</span> Optimasi Performa
          </h5>
          <ul class="tech-list" style="margin: 0;">
            <li><strong>Redis Cache</strong> - Cache pertanyaan umum per jurusan</li>
            <li><strong>Retry Logic</strong> - Auto-retry jika API Gemini gagal</li>
            <li><strong>Queue System</strong> - Background processing untuk analisis berat</li>
            <li><strong>Rate Limiting</strong> - Mencegah abuse API</li>
          </ul>
        </div>
      </div>
    </div>
  `}function L(){return`
    <div class="card" style="grid-column: span 3;">
      <h4 class="card-title"><span>📊</span> Result Service (Port: 4005)</h4>
      <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">Mengelola penyimpanan jangka panjang dan pembuatan laporan hasil analisis. Menyediakan API untuk mengambil hasil assessment.</p>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
        <!-- Core Functions -->
        <div style="background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.1)); padding: 1.25rem; border-radius: 12px; border: 1px solid rgba(34, 197, 94, 0.2);">
          <h5 style="color: var(--accent-green); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
            <span>⚙️</span> Fungsi Utama
          </h5>
          <ul class="tech-list" style="margin: 0;">
            <li><strong>Store Results</strong> - Simpan hasil grading permanen ke PostgreSQL</li>
            <li><strong>Report Generation</strong> - Format laporan untuk display di frontend</li>
            <li><strong>History Management</strong> - Kelola riwayat semua tes user</li>
            <li><strong>Data Aggregation</strong> - Agregasi statistik untuk analytics</li>
          </ul>
        </div>

        <!-- API Endpoints -->
        <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(37, 99, 235, 0.1)); padding: 1.25rem; border-radius: 12px; border: 1px solid rgba(59, 130, 246, 0.2);">
          <h5 style="color: var(--accent-blue); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
            <span>🔗</span> API Endpoints
          </h5>
          <div style="font-family: monospace; font-size: 0.85rem;">
            <div style="padding: 0.5rem; background: white; border-radius: 6px; margin-bottom: 0.5rem;">
              <span style="background: #3b82f6; color: white; padding: 0.15rem 0.5rem; border-radius: 4px; font-size: 0.75rem;">GET</span>
              <span style="margin-left: 0.5rem;">/grading-results/{session_id}</span>
              <br><small style="color: var(--text-secondary); margin-left: 3.5rem;">Get result for specific session</small>
            </div>
            <div style="padding: 0.5rem; background: white; border-radius: 6px;">
              <span style="background: #3b82f6; color: white; padding: 0.15rem 0.5rem; border-radius: 4px; font-size: 0.75rem;">GET</span>
              <span style="margin-left: 0.5rem;">/grading-results</span>
              <br><small style="color: var(--text-secondary); margin-left: 3.5rem;">List all user results (paginated)</small>
            </div>
          </div>
        </div>

        <!-- Result Data Structure -->
        <div style="background: linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(168, 85, 247, 0.1)); padding: 1.25rem; border-radius: 12px; border: 1px solid rgba(147, 51, 234, 0.2);">
          <h5 style="color: var(--accent-purple); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
            <span>📊</span> Struktur Data Hasil
          </h5>
          <ul class="tech-list" style="margin: 0;">
            <li><strong>final_score</strong> - Skor akhir (0-100)</li>
            <li><strong>readiness_level</strong> - not_ready | somewhat_ready | ready | very_ready</li>
            <li><strong>analysis_report</strong> - JSONB berisi laporan lengkap</li>
            <li><strong>created_at</strong> - Timestamp pembuatan hasil</li>
          </ul>
        </div>
      </div>
    </div>
  `}function G(){return`
    <div class="card" style="grid-column: span 3;">
      <h4 class="card-title"><span>⚡</span> WebSocket Service (Port: 4004)</h4>
      <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">Menangani komunikasi real-time dua arah antara client dan server menggunakan Socket.io. Memungkinkan interaksi langsung tanpa refresh halaman.</p>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
        <!-- Connection Flow -->
        <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(37, 99, 235, 0.1)); padding: 1.25rem; border-radius: 12px; border: 1px solid rgba(59, 130, 246, 0.2);">
          <h5 style="color: var(--accent-blue); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
            <span>🔌</span> Alur Koneksi
          </h5>
          <ol style="margin: 0; padding-left: 1.25rem; color: var(--text-primary);">
            <li style="margin-bottom: 0.5rem;"><strong>Connect</strong> - Client connect dengan JWT token</li>
            <li style="margin-bottom: 0.5rem;"><strong>Authenticate</strong> - Server validasi token</li>
            <li style="margin-bottom: 0.5rem;"><strong>Join Room</strong> - Client join ke session room</li>
            <li style="margin-bottom: 0.5rem;"><strong>Exchange</strong> - Pertukaran pesan real-time</li>
            <li><strong>Disconnect</strong> - Cleanup saat client disconnect</li>
          </ol>
        </div>

        <!-- Events -->
        <div style="background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.1)); padding: 1.25rem; border-radius: 12px; border: 1px solid rgba(34, 197, 94, 0.2);">
          <h5 style="color: var(--accent-green); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
            <span>📡</span> Socket Events
          </h5>
          <div style="font-family: monospace; font-size: 0.85rem;">
            <div style="padding: 0.5rem; background: white; border-radius: 6px; margin-bottom: 0.5rem;">
              <span style="background: #22c55e; color: white; padding: 0.15rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">C→S</span>
              <span style="margin-left: 0.5rem;">join_session</span>
            </div>
            <div style="padding: 0.5rem; background: white; border-radius: 6px; margin-bottom: 0.5rem;">
              <span style="background: #3b82f6; color: white; padding: 0.15rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">S→C</span>
              <span style="margin-left: 0.5rem;">session_joined</span>
            </div>
            <div style="padding: 0.5rem; background: white; border-radius: 6px; margin-bottom: 0.5rem;">
              <span style="background: #3b82f6; color: white; padding: 0.15rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">S→C</span>
              <span style="margin-left: 0.5rem;">question</span>
            </div>
            <div style="padding: 0.5rem; background: white; border-radius: 6px; margin-bottom: 0.5rem;">
              <span style="background: #22c55e; color: white; padding: 0.15rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">C→S</span>
              <span style="margin-left: 0.5rem;">answer</span>
            </div>
            <div style="padding: 0.5rem; background: white; border-radius: 6px; margin-bottom: 0.5rem;">
              <span style="background: #3b82f6; color: white; padding: 0.15rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">S→C</span>
              <span style="margin-left: 0.5rem;">score_update</span>
            </div>
            <div style="padding: 0.5rem; background: white; border-radius: 6px;">
              <span style="background: #3b82f6; color: white; padding: 0.15rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">S→C</span>
              <span style="margin-left: 0.5rem;">session_completed</span>
            </div>
          </div>
          <small style="color: var(--text-secondary); display: block; margin-top: 0.5rem;">C→S = Client to Server, S→C = Server to Client</small>
        </div>

        <!-- Features -->
        <div style="background: linear-gradient(135deg, rgba(249, 115, 22, 0.1), rgba(251, 146, 60, 0.1)); padding: 1.25rem; border-radius: 12px; border: 1px solid rgba(249, 115, 22, 0.2);">
          <h5 style="color: var(--accent-orange); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
            <span>🔧</span> Fitur Teknis
          </h5>
          <ul class="tech-list" style="margin: 0;">
            <li><strong>Socket.io</strong> - Library WebSocket dengan fallback polling</li>
            <li><strong>Room Management</strong> - Isolasi session per room</li>
            <li><strong>Auto Reconnect</strong> - Reconnect otomatis dengan exponential backoff</li>
            <li><strong>Message History</strong> - Retrieve missed messages saat reconnect</li>
            <li><strong>Connection State</strong> - Sync state dengan Redis</li>
          </ul>
        </div>
      </div>
    </div>
  `}function E(){return`
    <div class="card" style="grid-column: span 3;">
      <h4 class="card-title"><span>🛡️</span> Admin Service</h4>
      <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">Pusat kontrol untuk manajemen sistem dan pemantauan operasional. Diakses melalui Admin Panel terpisah.</p>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem;">
        <!-- User Management -->
        <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(37, 99, 235, 0.1)); padding: 1.25rem; border-radius: 12px; border: 1px solid rgba(59, 130, 246, 0.2);">
          <h5 style="color: var(--accent-blue); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
            <span>👥</span> User Management
          </h5>
          <ul class="tech-list" style="margin: 0;">
            <li>Lihat semua user terdaftar</li>
            <li>Filter & search user</li>
            <li>Aktivasi/deaktivasi akun</li>
            <li>Lihat detail assessment user</li>
          </ul>
        </div>

        <!-- Assessment Management -->
        <div style="background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.1)); padding: 1.25rem; border-radius: 12px; border: 1px solid rgba(34, 197, 94, 0.2);">
          <h5 style="color: var(--accent-green); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
            <span>📝</span> Assessment Management
          </h5>
          <ul class="tech-list" style="margin: 0;">
            <li>Lihat semua assessment</li>
            <li>Filter by status & date</li>
            <li>Export data ke CSV/Excel</li>
            <li>Lihat detail conversation</li>
          </ul>
        </div>

        <!-- Analytics -->
        <div style="background: linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(168, 85, 247, 0.1)); padding: 1.25rem; border-radius: 12px; border: 1px solid rgba(147, 51, 234, 0.2);">
          <h5 style="color: var(--accent-purple); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
            <span>📈</span> Analytics Dashboard
          </h5>
          <ul class="tech-list" style="margin: 0;">
            <li>Total users & assessments</li>
            <li>Completion rate</li>
            <li>Average score distribution</li>
            <li>Popular majors tested</li>
          </ul>
        </div>

        <!-- System Settings -->
        <div style="background: linear-gradient(135deg, rgba(249, 115, 22, 0.1), rgba(251, 146, 60, 0.1)); padding: 1.25rem; border-radius: 12px; border: 1px solid rgba(249, 115, 22, 0.2);">
          <h5 style="color: var(--accent-orange); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
            <span>⚙️</span> System Settings
          </h5>
          <ul class="tech-list" style="margin: 0;">
            <li>Konfigurasi session duration</li>
            <li>Threshold score settings</li>
            <li>Max questions per session</li>
            <li>Maintenance mode toggle</li>
          </ul>
        </div>
      </div>
    </div>
  `}function F(){return`
    <div class="card">
      <h4 class="card-title"><span>🗄️</span> Data & Infrastructure</h4>
      <ul class="tech-list">
        <li><strong>PostgreSQL:</strong> Relational data (Users, Results)</li>
        <li><strong>Redis:</strong> Caching & Session Management</li>
        <li><strong>RabbitMQ/Kafka:</strong> Inter-service communication</li>
        <li><strong>Docker:</strong> Containerization</li>
        <li><strong>Kubernetes:</strong> Orchestration</li>
      </ul>
    </div>
  `}function q(){return`
    <div class="card">
      <h4 class="card-title"><span>💻</span> Tech Stack</h4>
      <ul class="tech-list">
        <li><strong>Runtime:</strong> Node.js / Bun</li>
        <li><strong>Language:</strong> TypeScript (Type-safe)</li>
        <li><strong>Frameworks:</strong> Express.js / NestJS / Hono</li>
        <li><strong>API Spec:</strong> OpenAPI 3.0</li>
        <li><strong>Gateway:</strong> API Gateway pattern</li>
      </ul>
    </div>
  `}function M(){return`
    <section class="section">
      <div class="container">
        <div class="section-header">
          <div class="section-number">5</div>
          <h2 class="section-title">Hasil Testing</h2>
          <p class="section-subtitle">Laporan pengujian API endpoints dan grading session flow</p>
        </div>
        
        <!-- Test Summary Cards -->
        <div class="test-results">
          <div class="test-card success">
            <div class="test-value success">95.8%</div>
            <div class="test-label">Overall Success Rate</div>
          </div>
          <div class="test-card success">
            <div class="test-value">24</div>
            <div class="test-label">Total Endpoints Tested</div>
          </div>
          <div class="test-card success">
            <div class="test-value">23</div>
            <div class="test-label">Tests Passed</div>
          </div>
          <div class="test-card warning">
            <div class="test-value">1</div>
            <div class="test-label">Tests Failed</div>
          </div>
        </div>
        
        <!-- Test Detail Grid -->
        <div class="test-detail-grid">
          ${$()}
          ${H()}
        </div>
        
        <div class="test-note">
          <strong>⚠️ Catatan:</strong> Satu test gagal karena Gemini API quota exceeded (429 Too Many Requests), bukan karena bug sistem.
        </div>
      </div>
    </section>
  `}function $(){return`
    <div class="card">
      <h4 class="card-title"><span>🔒</span> Auth Service Tests</h4>
      
      <div class="test-item">
        <span>POST /auth/register</span>
        <span class="test-status pass">✓ PASS</span>
      </div>
      <div class="test-item">
        <span>POST /auth/register (duplicate)</span>
        <span class="test-status pass">✓ PASS</span>
      </div>
      <div class="test-item">
        <span>POST /auth/login</span>
        <span class="test-status pass">✓ PASS</span>
      </div>
      <div class="test-item">
        <span>POST /auth/login (wrong password)</span>
        <span class="test-status pass">✓ PASS</span>
      </div>
      <div class="test-item">
        <span>POST /auth/refresh-token</span>
        <span class="test-status pass">✓ PASS</span>
      </div>
      <div class="test-item">
        <span>GET /auth/profile</span>
        <span class="test-status pass">✓ PASS</span>
      </div>
      <div class="test-item">
        <span>PUT /auth/profile</span>
        <span class="test-status pass">✓ PASS</span>
      </div>
      <div class="test-item">
        <span>POST /auth/logout</span>
        <span class="test-status pass">✓ PASS</span>
      </div>
    </div>
  `}function H(){return`
    <div class="card">
      <h4 class="card-title"><span>📝</span> Session & Result Service</h4>
      
      <div class="test-item">
        <span>POST /grading-sessions</span>
        <span class="test-status pass">✓ PASS</span>
      </div>
      <div class="test-item">
        <span>GET /grading-sessions/:id</span>
        <span class="test-status pass">✓ PASS</span>
      </div>
      <div class="test-item">
        <span>GET /grading-sessions (user sessions)</span>
        <span class="test-status pass">✓ PASS</span>
      </div>
      <div class="test-item">
        <span>WebSocket Connection</span>
        <span class="test-status pass">✓ PASS</span>
      </div>
      <div class="test-item">
        <span>WS: Question Generation</span>
        <span class="test-status fail">⚠ FAIL (Quota)</span>
      </div>
      <div class="test-item">
        <span>GET /grading-results/:sessionId</span>
        <span class="test-status pass">✓ PASS</span>
      </div>
      <div class="test-item">
        <span>GET /grading-results/history</span>
        <span class="test-status pass">✓ PASS</span>
      </div>
      <div class="test-item">
        <span>Session Timeout Handling</span>
        <span class="test-status pass">✓ PASS</span>
      </div>
    </div>
  `}function K(){return`
    <section class="section">
      <div class="container">
        <div class="section-header">
          <div class="section-number">6</div>
          <h2 class="section-title">Teknik Deployment</h2>
          <p class="section-subtitle">Containerized deployment dengan Docker Compose dan Cloudflare Tunnel</p>
        </div>
        
        <!-- Deployment Flow -->
        <div class="deploy-flow">
          <div class="deploy-step">
            <div class="deploy-step-icon">💻</div>
            <div class="deploy-step-title">Source Code</div>
            <div class="deploy-step-desc">Git Repository</div>
          </div>
          <div class="deploy-arrow">→</div>
          <div class="deploy-step">
            <div class="deploy-step-icon">🐳</div>
            <div class="deploy-step-title">Docker Build</div>
            <div class="deploy-step-desc">Multi-stage builds</div>
          </div>
          <div class="deploy-arrow">→</div>
          <div class="deploy-step">
            <div class="deploy-step-icon">📦</div>
            <div class="deploy-step-title">Docker Compose</div>
            <div class="deploy-step-desc">Orchestration</div>
          </div>
          <div class="deploy-arrow">→</div>
          <div class="deploy-step">
            <div class="deploy-step-icon">🔒</div>
            <div class="deploy-step-title">Cloudflare Tunnel</div>
            <div class="deploy-step-desc">Zero Trust</div>
          </div>
          <div class="deploy-arrow">→</div>
          <div class="deploy-step">
            <div class="deploy-step-icon">🌐</div>
            <div class="deploy-step-title">Production</div>
            <div class="deploy-step-desc">prodiplan.my.id</div>
          </div>
        </div>
        
        <!-- Infrastructure Cards -->
        <div class="infra-grid">
          ${O()}
          ${U()}
          ${W()}
        </div>
        
        <!-- Code Block -->
        <div class="code-block">
          <h4>🚀 Deployment Commands</h4>
          <pre><span class="comment"># Build dan deploy semua services</span>
docker-compose up -d --build

<span class="comment"># Lihat logs</span>
docker-compose logs -f [service-name]

<span class="comment"># Restart service</span>
docker-compose restart [service-name]

<span class="comment"># Scale service</span>
docker-compose up -d --scale grading-worker=3</pre>
        </div>
      </div>
    </section>
  `}function O(){return`
    <div class="card">
      <h4 class="card-title"><span>🐳</span> Docker Compose</h4>
      <p style="font-size: 0.875rem; color: #64748b; margin-bottom: 12px;">9 containers terpisah untuk modularitas</p>
      <ul style="list-style: none;">
        <li style="padding: 8px 0; font-size: 0.875rem; display: flex; align-items: center; gap: 8px;">
          ✓ Frontend (Next.js)
        </li>
        <li style="padding: 8px 0; font-size: 0.875rem; display: flex; align-items: center; gap: 8px;">
          ✓ API Gateway
        </li>
        <li style="padding: 8px 0; font-size: 0.875rem; display: flex; align-items: center; gap: 8px;">
          ✓ Auth, Session, Result Services
        </li>
        <li style="padding: 8px 0; font-size: 0.875rem; display: flex; align-items: center; gap: 8px;">
          ✓ Grading Worker & WebSocket
        </li>
        <li style="padding: 8px 0; font-size: 0.875rem; display: flex; align-items: center; gap: 8px;">
          ✓ PostgreSQL & Redis
        </li>
      </ul>
    </div>
  `}function U(){return`
    <div class="card">
      <h4 class="card-title"><span>🔒</span> Cloudflare Tunnel</h4>
      <p style="font-size: 0.875rem; color: #64748b; margin-bottom: 12px;">Zero Trust security untuk akses publik</p>
      <ul style="list-style: none;">
        <li style="padding: 8px 0; font-size: 0.875rem; display: flex; align-items: center; gap: 8px;">
          ✓ No exposed ports
        </li>
        <li style="padding: 8px 0; font-size: 0.875rem; display: flex; align-items: center; gap: 8px;">
          ✓ Automatic SSL/TLS
        </li>
        <li style="padding: 8px 0; font-size: 0.875rem; display: flex; align-items: center; gap: 8px;">
          ✓ DDoS protection
        </li>
        <li style="padding: 8px 0; font-size: 0.875rem; display: flex; align-items: center; gap: 8px;">
          ✓ Access control policies
        </li>
        <li style="padding: 8px 0; font-size: 0.875rem; display: flex; align-items: center; gap: 8px;">
          ✓ Custom domain routing
        </li>
      </ul>
    </div>
  `}function W(){return`
    <div class="card">
      <h4 class="card-title"><span>🏥</span> Health Monitoring</h4>
      <p style="font-size: 0.875rem; color: #64748b; margin-bottom: 12px;">Automated health checks</p>
      <ul style="list-style: none;">
        <li style="padding: 8px 0; font-size: 0.875rem; display: flex; align-items: center; gap: 8px;">
          ✓ /health endpoint per service
        </li>
        <li style="padding: 8px 0; font-size: 0.875rem; display: flex; align-items: center; gap: 8px;">
          ✓ Docker healthcheck config
        </li>
        <li style="padding: 8px 0; font-size: 0.875rem; display: flex; align-items: center; gap: 8px;">
          ✓ Auto-restart on failure
        </li>
        <li style="padding: 8px 0; font-size: 0.875rem; display: flex; align-items: center; gap: 8px;">
          ✓ Dependency health checks
        </li>
        <li style="padding: 8px 0; font-size: 0.875rem; display: flex; align-items: center; gap: 8px;">
          ✓ Container logs aggregation
        </li>
      </ul>
    </div>
  `}function _(){return`
    <footer class="footer">
      <div class="container">
        <h3>ProdiPlan.id</h3>
        <p>AI Essay Preparedness Grader - Platform evaluasi kesiapan jurusan kuliah</p>
        <div class="team">
          <p>Tim Pengembangan ProdiPlan | Desember 2025</p>
        </div>
        <!-- Documentation Buttons -->
        <div style="text-align: center; margin-top: 24px; display: flex; justify-content: center; gap: 16px;">
          <a href="/sdd.html" style="text-decoration: none; display: inline-flex; align-items: center; gap: 8px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 24px; border-radius: 8px; font-weight: 600; transition: transform 0.2s;">
            <span>📄</span> Lihat SDD
          </a>
          <a href="/fsd.html" style="text-decoration: none; display: inline-flex; align-items: center; gap: 8px; background: #f1f5f9; color: #1a1a2e; padding: 12px 24px; border-radius: 8px; font-weight: 600; transition: transform 0.2s;">
            <span>📋</span> Lihat FSD
          </a>
        </div>
      </div>
    </footer>
  `}document.querySelector("#app").innerHTML=`
  ${l()}
  ${o()}
  ${d()}
  ${y()}
  ${z()}
  ${M()}
  ${K()}
  ${_()}
`;
