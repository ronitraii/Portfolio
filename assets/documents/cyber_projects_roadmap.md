# Cybersecurity Projects Roadmap (Jan–Jun 2026)

Goal: Build 2–3 applied, explainable security projects that map to DFIR/IDS/malware/network security, with clean repos and short write-ups to support supervisor outreach and scholarships.

## Timeline
- Jan–Feb 2026: Select 2 mini-projects; implement MVPs (2–3 weeks each)
- Mar 2026: Refine + write short technical reports/preprints; tidy repos
- Apr 2026: Draft 1–2 page research statement aligned to target labs
- May 2026: IELTS (only if required); finalize evidence pack; increase outreach
- Jun 2026: Available full-time; extend projects, add benchmarks/demos

## Project Ideas (pick 2–3)
1. Explainable IDS on SOC-like logs
   - Dataset: CIC-IDS2017 or UNSW-NB15
   - Deliverables: notebook + pipeline (train/test), SHAP/LIME explanations, metrics (F1/AUC), README with setup & results.
   - Fit: SOC/DFIR + XAI; high supervisor appeal.

2. Malware triage pipeline (static analysis)
   - Dataset: Malicia/EMBER or curated samples
   - Features: PE header features, strings, simple heuristics
   - Model: gradient boosting + SHAP for feature attribution
   - Deliverables: scripts, small report, safe handling guidelines.

3. DFIR playbook automation
   - Scope: Simulate incident logs (Windows/Sysmon), detection rules (Sigma), triage scripts
   - Deliverables: runbook + scripts + example case write-up.

4. Network security: anomaly detection
   - Dataset: NetFlow/Zeek logs
   - Approach: unsupervised detection + explainability
   - Deliverables: pipeline + visualization dashboard (Streamlit optional).

5. Cloud security: IAM/misconfig scanner
   - Scope: detect basic misconfig patterns (least privilege)
   - Deliverables: CLI tool + sample policies + report.

## Evidence Pack (shareable)
- Academic CV (PDF) — cybersecurity-focused
- GitHub repos with READMEs, results, and reproducible notebooks
- Short technical reports (5–8 pages) or arXiv preprints (optional)
- 1–2 page research statement (problem, approach, contributions, lab fit)
- Unofficial transcript; IELTS/GRE only if required

## Research Statement Outline (1–2 pages)
- Problem: explainable detection & forensics for modern threats
- Prior work: brief context; relevant venues/labs
- Approach: datasets, models, explainability methods; planned evaluation
- Fit: name 2–3 target labs; alignment with their themes
- Outcomes: code, benchmarks, write-ups; potential publications

## Outreach Cadence
- Week 1: Email top 5–7 supervisors (priority score high)
- Week 2: Follow up with project progress line; offer repo/overview
- Monthly: One-paragraph milestone update (results, drafts)
- If interest: Request short call; tailor proposal to their lab

## Repo Structure (example)
```
project-root/
  data/ (readme with source links)
  notebooks/
  src/
  results/
  README.md (setup, usage, metrics)
  LICENSE (MIT)
```

## Optional Certifications (do not delay applications)
- Security+: practical baseline
- eJPT/eCPPT: applied pentesting credibility

## Acceptance Criteria for Each Project
- Trains and evaluates reproducibly
- Includes explainability (e.g., SHAP/LIME) with interpretation
- README has setup, commands, and key results
- Small report summarizing approach and findings
