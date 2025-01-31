import HermitCard from './_hermit-card'

class EvilJevinCommonHermitCard extends HermitCard {
	constructor() {
		super({
			id: 'eviljevin_common',
			name: 'Evil Jevin',
			rarity: 'common',
			hermitType: 'miner',
			health: 260,
			primary: {
				name: 'Pickle',
				cost: ['miner'],
				damage: 60,
				power: null,
			},
			secondary: {
				name: 'Slime',
				cost: ['miner', 'miner', 'any'],
				damage: 90,
				power: null,
			},
		})
	}

	register(game) {}
}

export default EvilJevinCommonHermitCard
