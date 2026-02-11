#!/usr/bin/env python3
"""Update portfolio to add GitHub projects"""

import shutil
from pathlib import Path

portfolio_path = Path("D:\\Education\\Portfolio\\index.html")

# Create backup
shutil.copy(str(portfolio_path), str(portfolio_path) + ".backup")
print("✓ Backup created")

# Read the file
with open(portfolio_path, 'r', encoding='utf-8') as f:
    content = f.read()

# GitHub projects HTML
github_projects = '''<!-- GitHub Project 1: Image Manipulation Detection -->
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
              <h3>Threat Intelligence Hub <span style="background: #667eea; color: white; padding: 2px 6px; border-radius: 3px; font-size: 11px; margin-left: 5px;">Master\'s Ready</span></h3>
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

            '''

# Find the insertion point (before first existing project card in cybersecurity section)
search_marker = '<!-- Cybersecurity Projects -->'
marker_pos = content.find(search_marker)

if marker_pos == -1:
    print("❌ Error: Could not find cybersecurity projects marker")
    exit(1)

# Find the first project card after the marker
project_card_marker = '<div class="project-card">'
insert_pos = content.find(project_card_marker, marker_pos)

if insert_pos == -1:
    print("❌ Error: Could not find first project card")
    exit(1)

# Insert the GitHub projects
new_content = content[:insert_pos] + github_projects + content[insert_pos:]

# Write the updated file
with open(portfolio_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("✅ Successfully added 3 GitHub projects!")
print("📍 Projects added to cybersecurity section")
print("🔄 Refresh your browser (Ctrl+Shift+R) to see changes")
print(f"📄 File: {portfolio_path}")
