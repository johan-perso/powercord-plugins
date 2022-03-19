/**
 * @name GooseEverywhere
 * @author Johan#8021
 * @description Modifie toutes les images par des oies 🦢
 * @version 1.0.0
 * @authorId 277825082334773251
 * @authorLink https://johanstickman.com
 * @website https://github.com/johan-perso/powercord-plugins/tree/main/plugins/gooseeverywhere
 * @source https://github.com/johan-perso/powercord-plugins/tree/main/plugins/gooseeverywhere
*/

module.exports = class ExamplePlugin {
	start(){
		setInterval(() => {
			// Images/vidéos
			Array.from(document.querySelectorAll('img')).forEach(e => { if(e.src != 'https://media.discordapp.net/attachments/794895791248244746/954765288002424872/Fares_2.webp') e.src = 'https://media.discordapp.net/attachments/794895791248244746/954765288002424872/Fares_2.webp' })
			Array.from(document.querySelectorAll('video')).forEach(e => { if(e.src != 'https://images-ext-1.discordapp.net/external/1_OfdODcEaQuz1waH1PVEYN7RgHxJbH5jnoT5ZDwoZ8/%3Fc%3DVjFfZGlzY29yZA/https/media.tenor.com/HpQzsDBu5QwAAAPo/goose-honk.mp4') e.src = 'https://images-ext-1.discordapp.net/external/1_OfdODcEaQuz1waH1PVEYN7RgHxJbH5jnoT5ZDwoZ8/%3Fc%3DVjFfZGlzY29yZA/https/media.tenor.com/HpQzsDBu5QwAAAPo/goose-honk.mp4' })

			// Textes
			Array.from(document.getElementsByClassName("activityText-1rR-8O")).forEach(e => { if(e.innerText != 'honk.') e.innerText = 'honk.' })
			Array.from(document.getElementsByClassName("customStatusText-3wj79x")).forEach(e => { if(e.innerText != 'honk.') e.innerText = 'honk.' })

			// Fond en CSS
			Array.from(document.getElementsByClassName("icon-1zKOXL")).forEach(e => { if(e.style.backgroundImage != 'url("https://media.discordapp.net/attachments/794895791248244746/954765288002424872/Fares_2.webp")') e.style.backgroundImage = 'url("https://media.discordapp.net/attachments/794895791248244746/954765288002424872/Fares_2.webp")' })
		}, 500);
	}
	stop(){}
}
