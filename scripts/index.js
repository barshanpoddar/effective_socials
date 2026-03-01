const statCards = document.querySelectorAll("#statCards .statCard");

if (statCards.length) {
	const revealCards = () => {
		statCards.forEach((card, index) => {
			setTimeout(() => {
				card.classList.add("show");
			}, index * 120);
		});
	};

	const cardsContainer = document.querySelector("#statCards");

	if (cardsContainer && "IntersectionObserver" in window) {
		const observer = new IntersectionObserver(
			(entries, currentObserver) => {
				const entry = entries[0];
				if (!entry.isIntersecting) {
					return;
				}

				revealCards();
				currentObserver.disconnect();
			},
			{ threshold: 0.25 }
		);

		observer.observe(cardsContainer);
	} else {
		revealCards();
	}
}
