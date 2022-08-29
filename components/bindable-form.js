export class BindableForm extends crsbinding.classes.BindableElement {
    async connectedCallback() {
        super.connectedCallback();
        await this.initTemplate();
    }

    async disconnectedCallback() {
        super.disconnectedCallback();
    }

    get schema() {
        return this.getProperty("schema");
    }

    set schema(newValue) {
        if (this._dataId == null) return;
        this.schemaHasChanged(newValue);
    }

    async initTemplate() {
        const result = await fetch("./components/bindable-form.html").then(result => result.text());
        const instance = document.createElement("template");
        instance.innerHTML = result;
        this.appendChild(instance.content.cloneNode(true));
        this.detailsElement = this.querySelector(".form-container");
        if (this.schema != null) await this.refreshFromSchema();
    }

    async schemaHasChanged(newValue) {
        await this.clear();
        this.setProperty("schema", newValue);
        if (newValue != null) {
            await this.refreshFromSchema();
        }
    }

    async clear() {
        if (this.detailsElement != null) {
            await crsbinding.providerManager.releaseElement(this.detailsElement);
            this.detailsElement.innerHTML = "";
        }
    }

    async refreshFromSchema() {
        if (this.schema == null) return;

        const html = await globalThis.schema.parser.parse(this.schema);

        if (this.querySelector(".form-container") != null) {
            const container = this.querySelector(".form-container");
            container.innerHTML = html;
            await crsbinding.parsers.parseElements(this.children, this._dataId);
            this.dispatchEvent(new CustomEvent("ready"));
        }
    }
}

customElements.define('bindable-form', BindableForm);