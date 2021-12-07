const { Plugin } = require('powercord/entities');

module.exports = class masscopy extends Plugin {
	startPlugin (){
		powercord.api.commands.registerCommand({
			command: 'masscopy',
			description: 'Duplique et envoie un texte sur plusieurs lignes',
			usage: '{c} <texte>',
			executor: async (args) => {
				// Obtenir l'argument dans une variable
				var text = args.join(' ');

				// Si la taille du message est supérieure à 1000 caractères
				if(text.length > 1000) return { send: false, result: 'Oupsi, votre message a atteint une limite de 1000 caractères et ne peut être plus prolonger' }

				// Dupliquer le texte jusqu'à ce qu'il fasse 2000 caractères
				while (text.length < 2000) {
					text += text
				}

				// Envoyer le message
				return {
					send: true,
					result: text.split(args.join(' ')).join(`  ${args.join(' ')}  `).match(/.{1,2000}/g)[0]
				}
			}
		});
	}

	pluginWillUnload (){
		powercord.api.commands.unregisterCommand('masscopy');
	}
}
