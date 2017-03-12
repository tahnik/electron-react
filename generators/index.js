var Generator = require('yeoman-generator');
var mkdirp = require('mkdirp');

module.exports = Generator.extend({
	initialCopy: function() {
		this.fs.copy(
			this.templatePath(''),
			this.destinationPath('electron-react')
		);
		this.fs.copy(
			this.templatePath('.*'),
			this.destinationPath('electron-react')
		);
	},
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
				},
				{
						type: 'input',
						name: 'repository',
						message: 'What is your project\'s repository URL?'
				},
				{
						type: 'input',
						name: 'author',
						message: 'Name of the author of this project:'
				}
		]).then((answers) => {
			this.name = answers.name;
			this.description = answers.description;
			this.repository = answers.repository;
			this.author = answers.author;
		});
	},
	packageJSON: function() {
		this.fs.copyTpl(
			this.templatePath('_package.json'), 
			this.destinationPath('electron-react/package.json'),
			{ 
				name: this.name, 
				description: this.description, 
				repository: this.repository, 
				author: this.author 
			}
		);
	},
	cleanup: function() {
		this.fs.delete(
			this.destinationPath('electron-react/_package.json')
		);
	}
})