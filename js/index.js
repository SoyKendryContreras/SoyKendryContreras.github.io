/* M E N U */
	let btnMenu = document.querySelector('#btnMenu');
	let menu = document.querySelector('#menu');
	let mostrarMenu = false;
	btnMenu.addEventListener('click', function(){
		if (mostrarMenu == false) {
			mostrarMenu = true;
			menu.className = 'menu';
		} else {
			mostrarMenu = false;
			menu.className = 'menu hidden';
		}

	})
