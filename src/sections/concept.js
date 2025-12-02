/**
 * Concept Section
 * Edit this file to modify the project concept content
 */

export function conceptSection() {
  return `
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
  `
}
