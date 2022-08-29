export const schema = {
    "body": {
        "elements": [
            {
                "element": "h2",
                "content": "Basic Form"
            },
            {
                "element": "div",
                "attributes": {
                    "class": "input-container"
                },
                "elements": [
                    {
                        "element": "label",
                        "content": "Text Input"
                    },
                    {
                        "element": "input",
                        "attributes": {
                            "type": "text"
                        }
                    },
                    {
                        "element": "label",
                        "content": "Number Input"
                    },
                    {
                        "element": "input",
                        "attributes": {
                            "type": "number"
                        }
                    },
                    {
                        "element": "label",
                        "content": "Colour Input"
                    },
                    {
                        "element": "input",
                        "attributes": {
                            "type": "color"
                        }
                    }
                ]
            },
            {
                "element": "h2",
                "content": "Some Information"
            },
            {
                "element": "p",
                "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequatur cupiditate ea, fuga id, impedit incidunt inventore ipsa magnam molestiae, praesentium quaerat quos ratione similique temporibus. Enim eveniet iusto optio?"
            },
            {
                "element": "ul",
                "elements": [
                    {
                        "element": "li",
                        "content": "List Item 1"
                    },
                    {
                        "element": "li",
                        "content": "List Item 2"
                    },
                    {
                        "element": "li",
                        "content": "List Item 3"
                    }
                ]
            },
            {
                "element": "a",
                "content": "Link to info",
                "attributes": {
                    "href": "https://www.google.com/",
                    "target": "_blank"
                }
            },
            {
                "element": "a",
                "content": "Link to more info",
                "attributes": {
                    "href": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                    "target": "_blank"
                }
            },
            {
                "element": "my-group",
                "title": "Schema Generated Group",
                "elements": [
                    {
                        "element": "p",
                        "content": "This is a schema generated group"
                    }
                ],
                "attributes": {
                    "expanded": "false"
                }
            }
        ]
    }
}