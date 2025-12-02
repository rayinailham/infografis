/**
 * Diagrams Section
 * Edit this file to modify ERD and Sequence Diagrams content
 */

export function diagramsSection() {
  return `
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

        ${renderActivityGrading()}
        ${renderActivityRegistration()}
        ${renderActivityAI()}

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
        
        ${renderSequenceComplete()}
        ${renderSequenceRegistration()}
        ${renderSequenceRealtime()}
        ${renderSequenceAI()}
        
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
  `
}

function renderActivityGrading() {
  return `
    <div id="activity-grading" class="activity-content active">
      <div class="diagram-card">
        <h5>Activity Diagram: Grading Session</h5>
        <p class="diagram-desc">Alur aktivitas detail selama sesi penilaian berlangsung, dari pemilihan jurusan hingga hasil akhir.</p>
        <div class="diagram-container">
          <img src="/images/Activity_Grading.png" alt="Activity Diagram: Grading Session" class="diagram-img" style="max-height: 600px; max-width: 100%; width: auto; height: auto; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        </div>
      </div>
    </div>
  `
}

function renderActivityRegistration() {
  return `
    <div id="activity-registration" class="activity-content">
      <div class="diagram-card">
        <h5>Activity Diagram: User Registration</h5>
        <p class="diagram-desc">Proses pendaftaran user baru dengan integrasi Firebase Authentication dan penyimpanan data profil ke database.</p>
        <div class="diagram-container">
          <img src="/images/Activity_Registration.png" alt="Activity Diagram: User Registration" class="diagram-img" style="max-height: 600px; max-width: 100%; width: auto; height: auto; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        </div>
      </div>
    </div>
  `
}

function renderActivityAI() {
  return `
    <div id="activity-ai" class="activity-content">
      <div class="diagram-card">
        <h5>Activity Diagram: AI Service Integration</h5>
        <p class="diagram-desc">Integrasi dengan Google Gemini API untuk generasi pertanyaan, analisis jawaban, dan pembuatan laporan akhir.</p>
        <div class="diagram-container">
          <img src="/images/Activity_AI_Integration.png" alt="Activity Diagram: AI Service Integration" class="diagram-img" style="max-height: 600px; max-width: 100%; width: auto; height: auto; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        </div>
      </div>
    </div>
  `
}

function renderActivityError() {
  return `
    <div id="activity-error" class="activity-content">
      <div class="diagram-card">
        <h5>Activity Diagram: Error Handling & Recovery</h5>
        <p class="diagram-desc">Mekanisme error handling dan recovery untuk memastikan sistem tetap berjalan dengan baik dalam berbagai skenario kegagalan.</p>
        <div class="diagram-container">
          <img src="/images/Activity_Error_Handling.png" alt="Activity Diagram: Error Handling" class="diagram-img" style="max-height: 600px; max-width: 100%; width: auto; height: auto; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        </div>
      </div>
    </div>
  `
}

function renderActivityTimeout() {
  return `
    <div id="activity-timeout" class="activity-content">
      <div class="diagram-card">
        <h5>Activity Diagram: Session Timeout & Cleanup</h5>
        <p class="diagram-desc">Proses otomatis untuk menangani sesi yang kedaluwarsa dan cleanup data yang tidak diperlukan.</p>
        <div class="diagram-container">
          <img src="/images/Activity_Session_Timeout.png" alt="Activity Diagram: Session Timeout" class="diagram-img" style="max-height: 600px; max-width: 100%; width: auto; height: auto; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        </div>
      </div>
    </div>
  `
}

function renderSequenceComplete() {
  return `
    <div id="seq-complete" class="seq-content active">
      <div class="seq-card">
        <h5>Complete Grading Session Flow</h5>
        <p class="seq-desc">Alur lengkap dari awal hingga akhir sesi grading, mulai dari autentikasi user, pembuatan sesi, percakapan dengan AI, hingga generasi laporan akhir.</p>
        
        <div class="seq-diagram-container">
          <img src="/images/Complete Grading Session Sequence.png" alt="Complete Grading Session Sequence" class="seq-diagram-img" style="width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        </div>
      </div>
    </div>
  `
}

function renderSequenceRegistration() {
  return `
    <div id="seq-registration" class="seq-content">
      <div class="seq-card">
        <h5>User Registration Flow</h5>
        <p class="seq-desc">Proses pendaftaran user baru dengan integrasi Firebase Authentication dan penyimpanan data profil ke database.</p>
        
        <div class="seq-diagram-container">
          <img src="/images/User Registration Flow sequence.png" alt="User Registration Flow" class="seq-diagram-img" style="width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        </div>
      </div>
    </div>
  `
}

function renderSequenceRealtime() {
  return `
    <div id="seq-realtime" class="seq-content">
      <div class="seq-card">
        <h5>Real-time Communication Flow</h5>
        <p class="seq-desc">Detail implementasi WebSocket untuk komunikasi real-time antara frontend dan backend selama sesi grading aktif.</p>
        
        <div class="seq-diagram-container">
          <img src="/images/Realtime Communication sequence.png" alt="Realtime Communication Flow" class="seq-diagram-img" style="width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        </div>
      </div>
    </div>
  `
}

function renderSequenceAI() {
  return `
    <div id="seq-ai" class="seq-content">
      <div class="seq-card">
        <h5>AI Service Integration Flow</h5>
        <p class="seq-desc">Integrasi dengan Google Gemini API untuk generasi pertanyaan, analisis jawaban, dan pembuatan laporan akhir.</p>
        
        <div class="seq-diagram-container">
          <img src="/images/AI Service Integration Flow sequence.png" alt="AI Service Integration Flow" class="seq-diagram-img" style="width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        </div>
      </div>
    </div>
  `
}

// Add tab switching functionality after DOM is loaded
if (typeof document !== 'undefined') {
  document.addEventListener('click', (e) => {
    // Handle Sequence Diagram tabs
    if (e.target.classList.contains('seq-tab')) {
      const tabId = e.target.dataset.tab
      
      // Remove active from all tabs and contents
      document.querySelectorAll('.seq-tab').forEach(tab => tab.classList.remove('active'))
      document.querySelectorAll('.seq-content').forEach(content => content.classList.remove('active'))
      
      // Add active to clicked tab and corresponding content
      e.target.classList.add('active')
      document.getElementById('seq-' + tabId)?.classList.add('active')
    }

    // Handle Activity Diagram tabs
    if (e.target.classList.contains('activity-tab')) {
      const tabId = e.target.dataset.tab
      
      // Remove active from all tabs and contents
      document.querySelectorAll('.activity-tab').forEach(tab => tab.classList.remove('active'))
      document.querySelectorAll('.activity-content').forEach(content => content.classList.remove('active'))
      
      // Add active to clicked tab and corresponding content
      e.target.classList.add('active')
      document.getElementById('activity-' + tabId)?.classList.add('active')
    }
  })
}
