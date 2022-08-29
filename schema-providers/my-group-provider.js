import {BaseProvider} from "./../packages/crs-schema/es/html/crs-base-provider.js";

export class MyGroupProvider extends BaseProvider {
    get key() {
        return "my-group"
    }

    get template() {
        return `<my-group title="__title__" __attributes__ __styles__ >
                    <div slot="body">__content__</div>
                </my-group>`;
    }

    async process(item) {
        const parts = await super.process(item);
        return this.setValues(this.template, {
            "__attributes__": parts.attributes,
            "__styles__": parts.styles,
            "__title__": await this.parser.parseStringValue(item.title),
            "__content__": parts.children
        });
    }

    validate(item, errors) {
        this.assert(() => item.title == null, errors, "Group should have a title property");
        this.assert(() => item.elements, errors, "Group should have element properties");
    }
}