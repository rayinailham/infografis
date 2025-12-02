/**
 * Backend Development Section
 * Edit this file to modify backend development details
 * Detailed version for comprehensive stakeholder presentation
 */

export function backendSection() {
  return `
    <section class="section">
      <div class="container">
        <div class="section-header">
          <div class="section-number">4</div>
          <h2 class="section-title">Backend Microservices Architecture</h2>
          <p class="section-subtitle">Sistem terdistribusi dengan spesialisasi service untuk skalabilitas dan maintainability</p>
        </div>
        
        <!-- Architecture Overview -->
        <div style="margin-bottom: 2rem;">
          ${renderArchitectureOverview()}
        </div>

        <!-- Detailed Services - Each service gets its own detailed section -->
        <div style="margin-bottom: 2rem;">
          ${renderAuthServiceDetailed()}
        </div>

        <div style="margin-bottom: 2rem;">
          ${renderSessionServiceDetailed()}
        </div>

        <div style="margin-bottom: 2rem;">
          ${renderGradingWorkerDetailed()}
        </div>

        <div style="margin-bottom: 2rem;">
          ${renderResultServiceDetailed()}
        </div>

        <div style="margin-bottom: 2rem;">
          ${renderWebSocketServiceDetailed()}
        </div>

        <div style="margin-bottom: 2rem;">
          ${renderAdminServiceDetailed()}
        </div>

        <!-- Infrastructure Grid -->
        <div class="tech-grid">
          ${renderDatabase()}
          ${renderRuntimeAndLanguage()}
        </div>
      </div>
    </section>
  `
}

function renderArchitectureOverview() {
  return `
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
  `
}

function renderAuthServiceDetailed() {
  return `
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
  `
}

function renderSessionServiceDetailed() {
  return `
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
  `
}

function renderGradingWorkerDetailed() {
  return `
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
  `
}

function renderResultServiceDetailed() {
  return `
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
  `
}

function renderWebSocketServiceDetailed() {
  return `
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
  `
}

function renderAdminServiceDetailed() {
  return `
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
  `
}

function renderDatabase() {
  return `
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
  `
}

function renderRuntimeAndLanguage() {
  return `
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
  `
}
