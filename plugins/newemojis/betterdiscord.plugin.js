/**
 * @name NewEmojis
 * @author Johan#8021
 * @description Affiche les nouveaux émojis que Discord n'a pas encore intégré
 * @version 1.0.0
 * @authorId 277825082334773251
 * @authorLink https://johanstickman.com
 * @website https://github.com/johan-perso/powercord-plugins/tree/main/plugins/newemojis
 * @source https://github.com/johan-perso/powercord-plugins/tree/main/plugins/newemojis
*/

module.exports = class NewEmojis {
	start(){
		// Détecter quand un message est envoyé
		var observer = new MutationObserver(mutations => {
			mutations.forEach(mutation => {
				if(mutation.type == 'childList'){
					if(mutation.addedNodes.length > 0){
						console.log(mutation.addedNodes[0].classList, mutation.addedNodes[0].nodeType);
						// Si c'est un message
						if(mutation.addedNodes[0].classList.contains('messageListItem-ZZ7v6g') || mutation.addedNodes[0].classList.contains('chatContent-3KubbW')){
							// Remplacer les émojis
							Array.from(mutation.addedNodes[0].querySelectorAll('.messageContent-2t3eCI')).forEach(message => {
								// "face-with-peeking-eye"
								if(message.innerText.length > 2) message.innerHTML = message.innerHTML.replaceAll('🫣', `<img aria-label="🫣" alt="🫣" draggable="false" class="emoji" data-type="emoji" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/322/face-with-peeking-eye_1fae3.png">`)
								else message.innerHTML = message.innerHTML.replaceAll('🫣', `<img aria-label="🫣" alt="🫣" draggable="false" class="emoji" data-type="emoji jumboable" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/322/face-with-peeking-eye_1fae3.png">`)

								// "melting-face"
								if(message.innerText.length > 2) message.innerHTML = message.innerHTML.replaceAll('🫠', `<img aria-label="🫠" alt="🫠" draggable="false" class="emoji" data-type="emoji" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/322/melting-face_1fae0.png">`)
								else message.innerHTML = message.innerHTML.replaceAll('🫠', `<img aria-label="🫠" alt="🫠" draggable="false" class="emoji" data-type="emoji jumboable" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/322/melting-face_1fae0.png">`)

								// "face-with-open-eyes-and-hand-over-mouth"
								if(message.innerText.length > 2) message.innerHTML = message.innerHTML.replaceAll('🫢', `<img aria-label="🫢" alt="🫢" draggable="false" class="emoji" data-type="emoji" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/322/face-with-open-eyes-and-hand-over-mouth_1fae2.png">`)
								else message.innerHTML = message.innerHTML.replaceAll('🫢', `<img aria-label="🫢" alt="🫢" draggable="false" class="emoji" data-type="emoji jumboable" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/322/face-with-open-eyes-and-hand-over-mouth_1fae2.png">`)

								// "face-with-peeking-eye"
								if(message.innerText.length > 2) message.innerHTML = message.innerHTML.replaceAll('🫣', `<img aria-label="🫣" alt="🫣" draggable="false" class="emoji" data-type="emoji" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/322/face-with-peeking-eye_1fae3.png">`)
								else message.innerHTML = message.innerHTML.replaceAll('🫣', `<img aria-label="🫣" alt="🫣" draggable="false" class="emoji" data-type="emoji jumboable" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/322/face-with-peeking-eye_1fae3.png">`)

								// "saluting-face"
								if(message.innerText.length > 2) message.innerHTML = message.innerHTML.replaceAll('🫡', `<img aria-label="🫡" alt="🫡" draggable="false" class="emoji" data-type="emoji" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/322/saluting-face_1fae1.png">`)
								else message.innerHTML = message.innerHTML.replaceAll('🫡', `<img aria-label="🫡" alt="🫡" draggable="false" class="emoji" data-type="emoji jumboable" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/322/saluting-face_1fae1.png">`)

								// "dotted-line-face"
								if(message.innerText.length > 2) message.innerHTML = message.innerHTML.replaceAll('🫥', `<img aria-label="🫥" alt="🫥" draggable="false" class="emoji" data-type="emoji" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/dotted-line-face_1fae5.png">`)
								else message.innerHTML = message.innerHTML.replaceAll('🫥', `<img aria-label="🫥" alt="🫥" draggable="false" class="emoji" data-type="emoji jumboable" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/dotted-line-face_1fae5.png">`)

								// "face-with-diagonal-mouth"
								if(message.innerText.length > 2) message.innerHTML = message.innerHTML.replaceAll('🫤', `<img aria-label="🫤" alt="🫤" draggable="false" class="emoji" data-type="emoji" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/322/face-with-diagonal-mouth_1fae4.png">`)
								else message.innerHTML = message.innerHTML.replaceAll('🫤', `<img aria-label="🫤" alt="🫤" draggable="false" class="emoji" data-type="emoji jumboable" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/322/face-with-diagonal-mouth_1fae4.png">`)

								// "face-holding-back-tears"
								if(message.innerText.length > 2) message.innerHTML = message.innerHTML.replaceAll('🥹', `<img aria-label="🥹" alt="🥹" draggable="false" class="emoji" data-type="emoji" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/face-holding-back-tears_1f979.png">`)
								else message.innerHTML = message.innerHTML.replaceAll('🥹', `<img aria-label="🥹" alt="🥹" draggable="false" class="emoji" data-type="emoji jumboable" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/face-holding-back-tears_1f979.png">`)

								// "index-pointing-at-the-viewer"
								if(message.innerText.length > 2) message.innerHTML = message.innerHTML.replaceAll('🫵', `<img aria-label="🫵" alt="🫵" draggable="false" class="emoji" data-type="emoji" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/index-pointing-at-the-viewer_1faf5.png">`)
								else message.innerHTML = message.innerHTML.replaceAll('🫵', `<img aria-label="🫵" alt="🫵" draggable="false" class="emoji" data-type="emoji jumboable" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/index-pointing-at-the-viewer_1faf5.png">`)

								// "heart-hands"
								if(message.innerText.length > 2) message.innerHTML = message.innerHTML.replaceAll('🫶', `<img aria-label="🫶" alt="🫶" draggable="false" class="emoji" data-type="emoji" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/322/heart-hands_1faf6.png">`)
								else message.innerHTML = message.innerHTML.replaceAll('🫶', `<img aria-label="🫶" alt="🫶" draggable="false" class="emoji" data-type="emoji jumboable" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/322/heart-hands_1faf6.png">`)

								// "biting-lip"
								if(message.innerText.length > 2) message.innerHTML = message.innerHTML.replaceAll('🫦', `<img aria-label="🫦" alt="🫦" draggable="false" class="emoji" data-type="emoji" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/322/biting-lip_1fae6.png">`)
								else message.innerHTML = message.innerHTML.replaceAll('🫦', `<img aria-label="🫦" alt="🫦" draggable="false" class="emoji" data-type="emoji jumboable" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/322/biting-lip_1fae6.png">`)

								// "person-with-crown"
								if(message.innerText.length > 2) message.innerHTML = message.innerHTML.replaceAll('🫅', `<img aria-label="🫅" alt="🫅" draggable="false" class="emoji" data-type="emoji" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/322/person-with-crown_1fac5.png">`)
								else message.innerHTML = message.innerHTML.replaceAll('🫅', `<img aria-label="🫅" alt="🫅" draggable="false" class="emoji" data-type="emoji jumboable" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/322/person-with-crown_1fac5.png">`)

								// "pregnant-man"
								if(message.innerText.length > 2) message.innerHTML = message.innerHTML.replaceAll('🫃', `<img aria-label="🫃" alt="🫃" draggable="false" class="emoji" data-type="emoji" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/322/pregnant-man_1fac3.png">`)
								else message.innerHTML = message.innerHTML.replaceAll('🫃', `<img aria-label="🫃" alt="🫃" draggable="false" class="emoji" data-type="emoji jumboable" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/322/pregnant-man_1fac3.png">`)

								// "troll"
								if(message.innerText.length > 2) message.innerHTML = message.innerHTML.replaceAll('🧌', `<img aria-label="🧌" alt="🧌" draggable="false" class="emoji" data-type="emoji" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/322/troll_1f9cc.png">`)
								else message.innerHTML = message.innerHTML.replaceAll('🧌', `<img aria-label="🧌" alt="🧌" draggable="false" class="emoji" data-type="emoji jumboable" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/322/troll_1f9cc.png">`)
							})
						}
					}
				}
			})
		})
		observer.observe(document.querySelector('#app-mount'), {
			childList: true,
			subtree: true
		})
	}
	stop(){}
}
