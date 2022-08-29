import {createSchemaLoader} from "./../packages/crs-schema/es/crs-schema.js";
import {HTMLParser} from "./../packages/crs-schema/es/html/crs-html-parser.js";

//import providers here
//i.e. import {CustomElementProviderClass} from ".../classFile.js";
import {MyGroupProvider} from "./../schema-providers/my-group-provider.js";

globalThis.schema = {
    providers: {
        //define providers here
        //i.e. customElement: CustomElementProviderClass
        myGroup: MyGroupProvider
    }
}

async function createHtmlParser() {
    const manager = await createSchemaLoader(new HTMLParser());

    if (Object.values(globalThis.schema.providers) != null) {
        for (const provider of Object.values(globalThis.schema.providers)) {
            manager.register(provider)
        }
    }

    _setupVariableManager(manager.parser);

    return manager;
}

function _setupVariableManager(parser) {
    let varManager = parser.managers.get("variables");
    varManager.process = (value, key)=> {
        if(typeof value != "string") return value;
        return value.indexOf("@dataModel") !== -1 || isExpression(value) === true || isBindingAttribute(key) === true ? prefixExpression(value) : varManager.getValue(value);
    }
}

const breakers = [" ", "*", "!", "=", "+", "-", "%", "{", "}", "(", ")", "$", ".", "eof", "?", ":", "&", "|", "<", ">"];

function isExpression(value) {
    return value.includes(...breakers);
}

function isBindingAttribute(attributeName = "") {
    return attributeName.includes(".bind") || attributeName.includes(".two-way") || attributeName.includes(".one-way") || attributeName.includes(".condition") || attributeName.includes("for");
}

function prefixExpression(value) {
    return value.split("@").join("schema.variables.");
}

async function setupParser() {
    globalThis.schema.parser = await createHtmlParser()
}

setupParser()