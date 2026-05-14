// ============================================================
// WORK-KAM - Application Logic (SPA Routing & UI)
// ============================================================

class WorkKamApp {
    constructor() {
        this.currentUser = null;
        this.currentRole = null; // 'candidat' or 'entreprise'
        this.currentFilters = {
            search: '',
            location: '',
            sector: '',
            contracts: []
        };
        
        this.init();
    }

    init() {
        // Mobile Menu Toggle
        document.getElementById('mobileToggle').addEventListener('click', () => {
            document.getElementById('navLinks').classList.toggle('show');
        });

        // Initialize Views & Data
        this.populateHome();
        this.populateFilters();
        this.renderJobsList();
        
        // Initial Navigation based on hash or default to home
        const initialView = window.location.hash.replace('#', '') || 'home';
        this.navigate(initialView);
    }

    // --- Navigation & Routing ---

    navigate(viewId, params = null) {
        // Hide all views
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
        
        // Close mobile menu
        document.getElementById('navLinks').classList.remove('show');
        
        // Update URL Hash
        window.location.hash = viewId;

        // Specific view logic
        if (viewId === 'home') {
            this.populateHome();
        } else if (viewId === 'jobs') {
            this.renderJobsList();
        } else if (viewId === 'job-detail' && params && params.id) {
            this.populateJobDetail(params.id);
        } else if (viewId === 'auth') {
            if (params && params.type) {
                this.switchAuthTab(params.type === 'entreprise' ? 'register' : 'login');
            }
        } else if (viewId === 'dashboard-candidat') {
            if (this.currentRole !== 'candidat') return this.navigate('auth');
            this.populateCandidateDashboard();
        } else if (viewId === 'dashboard-entreprise') {
            if (this.currentRole !== 'entreprise') return this.navigate('auth');
            this.populateCompanyDashboard();
        }

        // Show target view
        const viewEl = document.getElementById(`view-${viewId}`);
        if (viewEl) {
            viewEl.classList.add('active');
            window.scrollTo(0, 0);
        } else {
            this.navigate('home'); // fallback
        }
    }

    // --- Authentication Simulation ---

    switchAuthTab(tabId) {
        document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.auth-form-container').forEach(c => c.classList.remove('active'));
        
        const tabs = document.querySelectorAll('.auth-tab');
        if(tabId === 'login') {
            tabs[0].classList.add('active');
            document.getElementById('auth-login').classList.add('active');
        } else {
            tabs[1].classList.add('active');
            document.getElementById('auth-register').classList.add('active');
        }
    }

    login(role = 'candidat') {
        this.currentRole = role;
        this.currentUser = role === 'candidat' ? WK_DATA.candidateProfile : WK_DATA.companyDashboard;
        
        this.updateNavAuth();
        this.navigate(role === 'candidat' ? 'dashboard-candidat' : 'dashboard-entreprise');
    }

    logout() {
        this.currentUser = null;
        this.currentRole = null;
        this.updateNavAuth();
        this.navigate('home');
    }

    updateNavAuth() {
        const navAuth = document.getElementById('navAuth');
        if (this.currentUser) {
            const initial = this.currentRole === 'candidat' ? 'JB' : 'TAS';
            const dashRoute = this.currentRole === 'candidat' ? 'dashboard-candidat' : 'dashboard-entreprise';
            navAuth.innerHTML = `
                <button class="user-menu-btn" onclick="app.navigate('${dashRoute}')">
                    <div class="user-menu-avatar">${initial}</div>
                    <span>Mon Espace</span>
                </button>
            `;
        } else {
            navAuth.innerHTML = `
                <button class="btn btn-outline" onclick="app.navigate('auth')">Connexion</button>
                <button class="btn btn-primary" onclick="app.navigate('auth')">S'inscrire</button>
            `;
        }
    }

    // --- Data Population (Home) ---

    populateHome() {
        // Stats
        this.animateValue("stat-offres", 0, WK_DATA.stats.offres, 1500);
        this.animateValue("stat-candidats", 0, WK_DATA.stats.candidats, 1500);
        this.animateValue("stat-entreprises", 0, WK_DATA.stats.entreprises, 1500);

        // Recent Jobs (show only featured or first 6)
        const container = document.getElementById('home-jobs-container');
        if(container.innerHTML.trim() === '') {
            const recentJobs = WK_DATA.jobs.slice(0, 6);
            container.innerHTML = recentJobs.map(job => this.createJobCardHTML(job)).join('');
        }
    }

    animateValue(id, start, end, duration) {
        const obj = document.getElementById(id);
        if(!obj) return;
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start).toLocaleString('fr-FR');
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    // --- Jobs Listing & Filters ---

    populateFilters() {
        // Locations
        const locSelect = document.getElementById('job-location');
        WK_DATA.locations.forEach(loc => {
            locSelect.insertAdjacentHTML('beforeend', `<option value="${loc}">${loc}</option>`);
        });

        // Sectors
        const sectorSelect = document.getElementById('job-sector');
        WK_DATA.sectors.forEach(sec => {
            sectorSelect.insertAdjacentHTML('beforeend', `<option value="${sec}">${sec}</option>`);
        });

        // Contracts
        const contractsDiv = document.getElementById('filter-contracts');
        WK_DATA.contractTypes.forEach(type => {
            contractsDiv.insertAdjacentHTML('beforeend', `
                <label class="filter-option">
                    <input type="checkbox" value="${type}" onchange="app.updateContractFilters(this)">
                    <span>${type}</span>
                </label>
            `);
        });
    }

    updateContractFilters(checkbox) {
        if (checkbox.checked) {
            this.currentFilters.contracts.push(checkbox.value);
        } else {
            this.currentFilters.contracts = this.currentFilters.contracts.filter(c => c !== checkbox.value);
        }
        this.renderJobsList();
    }

    filterJobs() {
        this.currentFilters.search = document.getElementById('job-search').value.toLowerCase();
        this.currentFilters.location = document.getElementById('job-location').value;
        this.currentFilters.sector = document.getElementById('job-sector').value;
        this.renderJobsList();
    }

    renderJobsList() {
        const container = document.getElementById('jobs-list-container');
        
        let filteredJobs = WK_DATA.jobs.filter(job => {
            const matchSearch = job.title.toLowerCase().includes(this.currentFilters.search) || 
                                job.company.toLowerCase().includes(this.currentFilters.search);
            const matchLocation = this.currentFilters.location === '' || job.location === this.currentFilters.location;
            const matchSector = this.currentFilters.sector === '' || job.sector === this.currentFilters.sector;
            const matchContract = this.currentFilters.contracts.length === 0 || this.currentFilters.contracts.includes(job.contract);
            
            return matchSearch && matchLocation && matchSector && matchContract;
        });

        if (filteredJobs.length === 0) {
            container.innerHTML = `<div class="text-center w-100 py-5"><h3 class="text-muted">Aucune offre ne correspond à vos critères.</h3></div>`;
            container.style.display = 'block';
        } else {
            container.style.display = 'grid';
            container.innerHTML = filteredJobs.map(job => this.createJobCardHTML(job)).join('');
        }
    }

    createJobCardHTML(job) {
        const company = WK_DATA.companies.find(c => c.id === job.companyId) || WK_DATA.companies[0];
        const featuredClass = job.featured ? 'job-card-featured' : '';
        
        return `
            <div class="job-card ${featuredClass}" onclick="app.navigate('job-detail', {id: ${job.id}})" style="cursor: pointer;">
                <div class="job-header">
                    <div class="company-logo" style="background-color: ${company.color}">${company.logo}</div>
                    <div>
                        <h3 class="job-title">${job.title}</h3>
                        <div class="company-name">${company.name}</div>
                    </div>
                </div>
                <div class="job-tags">
                    <span class="tag"><i class="fa-solid fa-location-dot"></i> ${job.location}</span>
                    <span class="tag"><i class="fa-solid fa-file-contract"></i> ${job.contract}</span>
                </div>
                <p class="job-desc">${job.description}</p>
                <div class="job-footer">
                    <span class="job-date">Il y a 2 jours</span>
                    <button class="btn btn-text">Voir <i class="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
        `;
    }

    // --- Job Detail ---

    populateJobDetail(jobId) {
        const job = WK_DATA.jobs.find(j => j.id === jobId);
        if (!job) return this.navigate('jobs');

        const company = WK_DATA.companies.find(c => c.id === job.companyId);

        document.getElementById('job-detail-title').textContent = job.title;
        document.getElementById('job-detail-company').textContent = company.name;
        document.getElementById('job-detail-location').textContent = job.location;
        document.getElementById('job-detail-contract').textContent = job.contract;
        document.getElementById('job-detail-salary').textContent = job.salary;
        document.getElementById('job-detail-description').textContent = job.description;
        document.getElementById('job-detail-date').textContent = job.date;
        document.getElementById('job-detail-expires').textContent = job.expires;

        const logoEl = document.getElementById('job-detail-company-logo');
        logoEl.textContent = company.logo;
        logoEl.style.backgroundColor = company.color;

        document.getElementById('job-detail-company-desc').textContent = company.description;

        // Lists
        const respEl = document.getElementById('job-detail-responsibilities');
        respEl.innerHTML = job.responsibilities.map(r => `<li>${r}</li>`).join('');

        const profEl = document.getElementById('job-detail-profile');
        profEl.innerHTML = job.profile.map(p => `<li>${p}</li>`).join('');

        const skillsEl = document.getElementById('job-detail-skills');
        skillsEl.innerHTML = job.skills.map(s => `<span class="tag">${s}</span>`).join('');
    }

    // --- Dashboards ---

    populateCandidateDashboard() {
        const data = WK_DATA.candidateProfile;
        
        document.getElementById('cand-name').textContent = data.name;
        document.getElementById('cand-title').textContent = data.title;
        document.getElementById('cand-app-count').textContent = data.applications.length;
        document.getElementById('cand-saved-count').textContent = data.savedJobs.length;
        document.getElementById('cand-completeness').textContent = data.completeness + '%';

        const tbody = document.getElementById('cand-applications-list');
        tbody.innerHTML = data.applications.map(app => `
            <tr>
                <td><strong>${app.job}</strong></td>
                <td>${app.company}</td>
                <td>${app.date}</td>
                <td><span class="status-badge ${app.statusClass}">${app.status}</span></td>
            </tr>
        `).join('');
    }

    populateCompanyDashboard() {
        const data = WK_DATA.companyDashboard;

        document.getElementById('comp-name').textContent = data.name;
        document.getElementById('comp-sector').textContent = data.sector;
        document.getElementById('comp-active-offers').textContent = data.stats.activeOffers;
        document.getElementById('comp-total-apps').textContent = data.stats.totalApplications;
        document.getElementById('comp-new-apps').textContent = data.stats.newThisWeek;

        const offersBody = document.getElementById('comp-offers-list');
        offersBody.innerHTML = data.offers.map(offer => `
            <tr>
                <td><strong>${offer.title}</strong><br><small class="text-muted">Exp: ${offer.expires}</small></td>
                <td>${offer.applications} cand.</td>
                <td><span class="status-badge ${offer.status === 'Publié' ? 'status-accepted' : 'status-pending'}">${offer.status}</span></td>
            </tr>
        `).join('');

        const appsBody = document.getElementById('comp-recent-apps');
        appsBody.innerHTML = data.recentApplications.map(app => `
            <tr>
                <td><strong>${app.name}</strong><br><small class="text-muted">${app.date}</small></td>
                <td>${app.job}</td>
                <td><span class="tag" style="background:#e0f2fe; color:#0284c7;">${app.match}%</span></td>
                <td><button class="btn btn-outline btn-sm">Gérer</button></td>
            </tr>
        `).join('');
    }
}

// Initialize Application
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new WorkKamApp();
});
