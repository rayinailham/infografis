/**
 * Architecture Section
 * Edit this file to modify system architecture and infrastructure content
 */

export function architectureSection() {
  return `
    <section class="section">
      <div class="container">
        <div class="section-header">
          <div class="section-number">3</div>
          <h2 class="section-title">Arsitektur & Infrastruktur</h2>
          <p class="section-subtitle">Microservices architecture dengan Docker containers dan Cloudflare Tunnel</p>
        </div>
        
        <div class="architecture-diagram">
          <!-- Client Layer -->
          <div class="arch-layer">
            <div class="arch-layer-title">Client Layer</div>
            <div class="arch-boxes">
              <div class="arch-box">🌐 Internet/Client<small>Browser User</small></div>
            </div>
          </div>
          
          <div class="arrow-down">↓</div>
          
          <!-- Security Layer -->
          <div class="arch-layer">
            <div class="arch-layer-title">Security Layer</div>
            <div class="arch-boxes">
              <div class="arch-box external">🔒 Cloudflare Tunnel<small>prodiplan.my.id</small></div>
            </div>
          </div>
          
          <div class="arrow-down">↓</div>
          
          <!-- Gateway Layer -->
          <div class="arch-layer">
            <div class="arch-layer-title">Gateway Layer</div>
            <div class="arch-boxes">
              <div class="arch-box gateway">🚪 API Gateway<small>Port :4000</small></div>
            </div>
          </div>
          
          <div class="arrow-down">↓</div>
          
          <!-- Services Layer -->
          <div class="arch-layer">
            <div class="arch-layer-title">Services Layer</div>
            <div class="arch-boxes">
              <div class="arch-box service">🔐 Auth Service<small>:4001</small></div>
              <div class="arch-box service">📝 Session Service<small>:4002</small></div>
              <div class="arch-box service">🤖 Grading Worker<small>:4003</small></div>
              <div class="arch-box service">🔌 WebSocket Service<small>:4004</small></div>
              <div class="arch-box service">📊 Result Service<small>:4005</small></div>
            </div>
          </div>
          
          <div class="arrow-down">↓</div>
          
          <!-- External Services -->
          <div class="arch-layer">
            <div class="arch-layer-title">External Services</div>
            <div class="arch-boxes">
              <div class="arch-box external">🔥 Firebase Auth<small>Authentication</small></div>
              <div class="arch-box external">✨ Google Gemini<small>AI Processing</small></div>
            </div>
          </div>
          
          <div class="arrow-down">↓</div>
          
          <!-- Infrastructure Layer -->
          <div class="arch-layer">
            <div class="arch-layer-title">Infrastructure Layer</div>
            <div class="arch-boxes">
              <div class="arch-box infra">🐘 PostgreSQL<small>:4015 - Database</small></div>
              <div class="arch-box infra">⚡ Redis<small>:4016 - Cache/Sessions</small></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}
