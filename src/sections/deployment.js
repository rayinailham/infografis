/**
 * Deployment Section
 * Edit this file to modify deployment techniques content
 */

export function deploymentSection() {
  return `
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
          ${renderDockerCompose()}
          ${renderCloudflareTunnel()}
          ${renderHealthMonitoring()}
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
  `
}

function renderDockerCompose() {
  return `
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
  `
}

function renderCloudflareTunnel() {
  return `
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
  `
}

function renderHealthMonitoring() {
  return `
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
  `
}
