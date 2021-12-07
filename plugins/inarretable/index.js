const { Plugin } = require('powercord/entities');

module.exports = class inarretable extends Plugin {
	startPlugin (){
		powercord.api.commands.registerCommand({
			command: 'inarretable',
			description: 'Je suis inarrêtable.',
			usage: '{c}',
			executor: (args) => ({
				send: false,
				result: "Je suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable\nJe suis inarrêtable"
			})
		});
	}

	pluginWillUnload (){
		powercord.api.commands.unregisterCommand('inarretable');
	}
}
