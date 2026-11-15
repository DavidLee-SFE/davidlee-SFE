(function () {
	var storageKey = 'davidlee-color-scheme-v2';
	var savedTheme = window.localStorage.getItem(storageKey);
	var theme = savedTheme === 'light' ? 'light' : 'dark';

	document.documentElement.setAttribute('data-theme', theme);

	window.addEventListener('storage', function (event) {
		if (event.key === storageKey) {
			document.documentElement.setAttribute('data-theme', event.newValue === 'dark' ? 'dark' : 'light');
		}
	});

	document.addEventListener('DOMContentLoaded', function () {
		var toggle = document.getElementById('theme-toggle');

		if (!toggle) {
			return;
		}

		var icon = toggle.querySelector('i');
		var label = toggle.querySelector('span');
		var updateToggle = function (isDark) {
			toggle.setAttribute('aria-pressed', String(isDark));
			toggle.setAttribute('aria-label', isDark ? 'Switch to light color scheme' : 'Switch to dark color scheme');
			icon.className = isDark ? 'fa fa-sun-o' : 'fa fa-moon-o';
			label.textContent = isDark ? 'Light mode' : 'Dark mode';
		};

		var currentTheme = document.documentElement.getAttribute('data-theme') === 'dark';
		updateToggle(currentTheme);

		toggle.addEventListener('click', function () {
			var isDark = document.documentElement.getAttribute('data-theme') !== 'dark';
			var theme = isDark ? 'dark' : 'light';

			document.documentElement.setAttribute('data-theme', theme);
			document.body.setAttribute('data-theme', theme);
			window.localStorage.setItem(storageKey, theme);
			updateToggle(isDark);
		});
	});
})();
