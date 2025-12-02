/**
 * Footer Section
 * Edit this file to modify the footer content
 */

export function footerSection() {
  return `
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
  `
}
