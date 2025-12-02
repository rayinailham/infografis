/**
 * Testing Section
 * Edit this file to modify testing results content
 */

export function testingSection() {
  return `
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
          ${renderAuthServiceTests()}
          ${renderSessionServiceTests()}
        </div>
        
        <div class="test-note">
          <strong>⚠️ Catatan:</strong> Satu test gagal karena Gemini API quota exceeded (429 Too Many Requests), bukan karena bug sistem.
        </div>
      </div>
    </section>
  `
}

function renderAuthServiceTests() {
  return `
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
  `
}

function renderSessionServiceTests() {
  return `
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
  `
}
