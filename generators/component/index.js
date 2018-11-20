const Generator = require("yeoman-generator");

const capitalise = reqiure("../../utils/capitalise");

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);

        this.argument("component-name", { type: String, required: false });
    }

    async prompting() {
        this.answers = await this.prompt([
            {
                type: "input",
                name: "component-name",
                message: "Component Name",
                default: capitalise(this.args[0])
            }
        ]);
    }

    writing() {
        this.fs.copyTpl(
            this.templatePath("component.tsx"),
            this.destinationPath(
                `src/components/${this.answers["component-name"]}/index.tsx`
            ),
            {
                componentName: this.answers["component-name"]
            }
        );

        this.fs.copyTpl(
            this.templatePath("test.tsx"),
            this.destinationPath(
                `src/components/${this.answers["component-name"]}/${
                    this.answers["component-name"]
                }.test.tsx`
            ),
            {
                componentName: this.answers["component-name"]
            }
        );
    }
};
