var Generator = require('yeoman-generator');
var mkdirp = require('mkdirp');

module.exports = Generator.extend({
	prompts: function() {
		return this.prompt([
				{
						type: 'input',
						name: 'name',
						message: 'What is your project name?',
						default: 'electron-react'
				}, 
				{
						type: 'input',
						name: 'description',
						message: 'What is your project\'s description?'
				}
		]).then((answers) => {
			this.name = answers.name;
			this.description = answers.description;
		});
	},
	initialCopy: function() {
		this.fs.copy(
			this.templatePath(''),
			this.destinationPath(this.name)
		);
		this.fs.copy(
			this.templatePath('.*'),
			this.destinationPath(this.name)
		);
	},
	packageJSON: function() {
		this.fs.copyTpl(
			this.templatePath('_package.json'), 
			this.destinationPath(this.name + '/package.json'),
			{ 
				name: this.name, 
				description: this.description
			}
		);
	},
	cleanup: function() {
		this.fs.delete(
			this.destinationPath(this.name + '_package.json')
		);
	},
	end: function() {
		var npmDir = process.cwd() + '/' + this.name;
		process.chdir(npmDir)
		this.installDependencies({
			bower: false,
			npm: true
		});
	}
})