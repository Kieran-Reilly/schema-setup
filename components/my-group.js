class MyGroup extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {
        await this.initTemplate();
        this.setGroupTitle();
        this.setToggleButton();
        if (this.expanded === undefined) this.expanded = "true";
    }

    disconnectedCallback() {
        this.toggleButton.removeEventListener("click", this.toggleHandler);
        this.toggleHandler = null;
        this.body = null;
        this._expanded = null;
        this._title = null;
    }

    static get observedAttributes() {
        return ["expanded"];
    }

    get expanded() {
        return this.getAttribute("expanded") || this._expanded;
    }

    set expanded(newValue) {
        if (this._expanded === newValue) return;

        this._expanded = newValue;
        if (newValue === "false") {
            this.classList.add("group-hidden");
        } else {
            this.classList.remove("group-hidden");
        }
    }

    get title() {
        return this._title || this.getAttribute("title");
    }

    set title(newValue) {
        if (this._title === newValue) return

        this._title = newValue;
        this.setGroupTitle();
    }

    async initTemplate() {
        const result = await fetch("./components/my-group.html").then(result => result.text());
        const instance = document.createElement("template");
        instance.innerHTML = result;

        this.attachShadow({mode: 'open'}).appendChild(instance.content.cloneNode(true));
        this.body = this.querySelector("[slot='body']");
    }

    setGroupTitle() {
        const header = this.shadowRoot.querySelector("h4");
        if (header != null) {
            header.innerText = this.title;
            this.setAttribute("title", this.title);
        }
    }

    setToggleButton() {
        this.toggleButton = this.shadowRoot.querySelector(".group-button");
        if (this.toggleButton != null) {
            this.toggleHandler = this.toggleGroup.bind(this);
            this.toggleButton.addEventListener("click", this.toggleHandler);
        }
    }

    toggleGroup() {
        if (this.expanded == "false") {
            this.setAttribute("expanded", "true");
            this.body?.classList.remove("hidden")
        } else {
            this.setAttribute("expanded", "false");
            this.body?.classList.add("hidden")
        }
    }
}

customElements.define("my-group", MyGroup)