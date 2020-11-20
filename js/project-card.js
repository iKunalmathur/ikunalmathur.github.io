class ProjectCard extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = `<div class="project shadow">
                    <h4 class="project-title">${this.getAttribute('title')}</h4>
                    <p class="project-description">${this.getAttribute('description')}</p>
                    <div class="btn-overlay shadow">
                        <a href="${this.getAttribute('url')}" target="_blank" rel="noopener noreferrer" class="btn btn-round link-project">
                            <i class="fas fa-external-link-alt"></i>
                        </a>
                    </div>
                </div>`;
    }
}

window.customElements.define('project-card',ProjectCard);