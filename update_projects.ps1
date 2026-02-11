# Update portfolio index.html to add GitHub projects

$portfolioPath = "D:\Education\Portfolio\index.html"

# Create backup
Copy-Item $portfolioPath "$portfolioPath.backup" -Force
Write-Host "✓ Backup created: $portfolioPath.backup"

# Read the entire file
$content = Get-Content $portfolioPath -Raw

# Find the cybersecurity section and add GitHub projects
$searchPattern = "<!-- Cybersecurity Projects -->"
$searchIndex = $content.IndexOf($searchPattern)

if ($searchIndex -eq -1) {
    Write-Host "❌ Error: Could not find cybersecurity projects section"
    exit 1
}

# Find the first project card after the section header
$searchPattern2 = '<div class="project-card">'
$searchIndex2 = $content.IndexOf($searchPattern2, $searchIndex)

if ($searchIndex2 -eq -1) {
    Write-Host "❌ Error: Could not find first project card"
    exit 1
}

# GitHub projects HTML to insert
$githubProjects = @'
<!-- GitHub Project 1: Image Manipulation Detection -->
            <div class="project-card github-project">
              <div class="project-icon">
                <i class="fas fa-image"></i>
              </div>
              <h3>AI-Based Image Manipulation Detection <span style="background: #667eea; color: white; padding: 2px 6px; border-radius: 3px; font-size: 11px; margin-left: 5px;">GitHub</span></h3>
              <p>Production-ready deep learning system detecting image forgery, deepfakes, and face manipulation. Features CNN-based analysis with PyTorch, Flask REST API, Next.js frontend, Docker containerization, and GitHub Actions CI/CD pipeline.</p>
              <div class="project-tags">
                <span class="tag">PyTorch</span>
                <span class="tag">CNN</span>
                <span class="tag">Flask</span>
                <span class="tag">Next.js</span>
                <span class="tag">Docker</span>
                <span class="tag">13 Commits</span>
              </div>
              <a href="https://github.com/ronitraii/image-manipulation-detection" target="_blank" class="project-link">View on GitHub <i class="fab fa-github"></i></a>
            </div>

            <!-- GitHub Project 2: Web Vulnerability Scanner -->
            <div class="project-card github-project">
              <div class="project-icon">
                <i class="fas fa-search"></i>
              </div>
              <h3>Web Vulnerability Scanner <span style="background: #667eea; color: white; padding: 2px 6px; border-radius: 3px; font-size: 11px; margin-left: 5px;">GitHub</span></h3>
              <p>Comprehensive penetration testing framework for identifying web application vulnerabilities. Detects SQL injection, XSS, CSRF, security headers. Tested against DVWA with detailed reporting capabilities.</p>
              <div class="project-tags">
                <span class="tag">Python</span>
                <span class="tag">Flask</span>
                <span class="tag">Penetration Testing</span>
                <span class="tag">DVWA</span>
                <span class="tag">Web Security</span>
                <span class="tag">9 Commits</span>
              </div>
              <a href="https://github.com/ronitraii/web-vulnerability-scanner" target="_blank" class="project-link">View on GitHub <i class="fab fa-github"></i></a>
            </div>

            <!-- GitHub Project 3: Threat Intelligence Hub -->
            <div class="project-card github-project">
              <div class="project-icon">
                <i class="fas fa-brain"></i>
              </div>
              <h3>Threat Intelligence Hub <span style="background: #667eea; color: white; padding: 2px 6px; border-radius: 3px; font-size: 11px; margin-left: 5px;">Master's Ready</span></h3>
              <p>Research-grade 4-module threat detection platform. Modules: Network IDS (95% accuracy), Enhanced Log Analysis, Malware Detection (91.5%), Incident Response Dashboard. Built over 1.5 months with REST API and web dashboard.</p>
              <div class="project-tags">
                <span class="tag">PyTorch</span>
                <span class="tag">Ensemble ML</span>
                <span class="tag">IDS/IPS</span>
                <span class="tag">Threat Analysis</span>
                <span class="tag">Flask API</span>
                <span class="tag">11 Commits</span>
              </div>
              <a href="https://github.com/ronitraii/threat-intelligence-hub" target="_blank" class="project-link">View on GitHub <i class="fab fa-github"></i></a>
            </div>

            '@ 

# Insert the GitHub projects before the first existing project card
$newContent = $content.Insert($searchIndex2, $githubProjects)

# Save the updated file
Set-Content $portfolioPath $newContent -Encoding UTF8

Write-Host "✅ Successfully added 3 GitHub projects to cybersecurity section!"
Write-Host "📍 Location: Before the existing Nmap/Keylogger projects"
Write-Host "🔄 Refresh your browser (Ctrl+Shift+R) to see the updated portfolio"
