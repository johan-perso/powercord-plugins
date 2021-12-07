const { Plugin } = require('powercord/entities');

module.exports = class spam extends Plugin {
	startPlugin (){
		powercord.api.commands.registerCommand({
			command: 'spam',
			description: 'Lance un spam via SelfbotWeb',
			usage: '{c}',
			executor: async (args) => {
				// Obtenir l'identifiant du salon
				var id = window.location.href.split("/")
				id = id[id.length - 1]

				// On affiche un message d'erreur
				window.open(`https://selfbot.johanstickman.com/?${id}`, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');

				// Envoyer le message
				return {
					send: false,
					result: 'Une page du Selfbot s\'est ouverte dans votre navigateur par défaut.'
				}
			}
		});
	}

	pluginWillUnload (){
		powercord.api.commands.unregisterCommand('spam');
	}
}
