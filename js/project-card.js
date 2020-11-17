const template = document.createElement('template');
    template.innerHTML=`
    <style>
        .project-card {
            padding: 1.5em;
            margin: 2em 0;
            color: #fafafa;
            background-color: #333;
            border-radius: 5px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
                -ms-flex-direction: column;
                    flex-direction: column;
            row-gap : 1.5em;
        }

        .project-card .title {
            font-size: 1.4rem;
        }

        .project-card .btn-visit {
            border-radius: 5px;
            display: block;
            text-align: center;
            text-decoration: none;
            padding: .5em;
            -webkit-transition: 0.3s;
            transition: 0.3s;
            background-color: #f5f5f5;
            color: #1d1d1d;
        }
        
        .project-card .btn-visit:hover {
            -webkit-transition: 0.3s;
            transition: 0.3s;
            background-color: #ffffff;
        }
    </style>
    <div class="project-card">
        <div class="title"><slot name='title'></div>
        <div class="description"><slot name='description'></div>
        <a href="" target="_blank" rel="noopener noreferrer" class="btn-visit">Take a look 🙂</a>
    </div>
    `;

class ProjectCard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('.title').innerHTML = this.getAttribute('title');
        this.shadowRoot.querySelector('.description').innerHTML = this.getAttribute('description');
        this.shadowRoot.querySelector('.btn-visit').href = this.getAttribute('url');

    }
}

window.customElements.define('project-card',ProjectCard);