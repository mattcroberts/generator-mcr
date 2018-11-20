const Generator = require("yeoman-generator");

const capitalise = reqiure("../../utils/capitalise");

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);

        this.argument("container-name", { type: String, required: false });
    }

    async prompting() {
        this.answers = await this.prompt([
            {
                type: "input",
                name: "container-name",
                message: "Container Name",
                default: capitalise(this.args[0])
            }
        ]);
    }

    writing() {
        this.fs.copyTpl(
            this.templatePath("container.tsx"),
            this.destinationPath(
                `src/containers/${this.answers["container-name"]}/index.tsx`
            ),
            {
                containerName: this.answers["container-name"]
            }
        );

        this.fs.copyTpl(
            this.templatePath("test.tsx"),
            this.destinationPath(
                `src/containers/${this.answers["container-name"]}/${
                    this.answers["container-name"]
                }.test.tsx`
            ),
            {
                containerName: this.answers["container-name"]
            }
        );
    }
};
