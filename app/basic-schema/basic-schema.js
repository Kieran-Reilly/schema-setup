export default class BasicSchema extends crsbinding.classes.ViewBase {
    async connectedCallback() {
        await super.connectedCallback();
        await this.initView();
    }

    async disconnectedCallback() {
        await super.disconnectedCallback();
    }

    async initView() {
        const bindableForm = this._element.querySelector("bindable-form");
        if (bindableForm.dataset.schema != null) {
            const schema = JSON.parse(await fetch(bindableForm.dataset.schema).then(result => result.text()));
            bindableForm.schema = schema;
        }
    }
}