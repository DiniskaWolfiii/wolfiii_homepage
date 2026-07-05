export type Credit = {
	name: string;
	url?: string;
};

export type Artwork = {
	/** Exact filename in src/assets/art/ */
	filename: string;
	title: string;
	/** Small gray note under the title, e.g. context or a disclaimer. */
	note?: string;
	/** One or more artists, each rendered as its own linked line. */
	credits?: Credit[];
};

export type ArtworkSection = {
	title: string;
	artworks: Artwork[];
};

export const artSections: ArtworkSection[] = [
	{
		title: 'Ref Sheet',
		artworks: [
			{
				filename: 'refsheet.png',
				title: 'Ref Sheet',
				note: '(Old one, not my new dragon sona)',
			},
		],
	},
	{
		title: "Artworks I've commissioned",
		artworks: [
			{
				filename: 'christmas2025.jpg',
				title: 'Christmas Art',
				credits: [{ name: '@SillyWiwi', url: 'https://sillywiwibae.carrd.co/' }]
			},
			{
				filename: 'burgeramt.png',
				title: 'Pfotenclub Burgeramt',
				credits: [{ name: '@SillyWiwi', url: 'https://sillywiwibae.carrd.co/'}]
			},
			{
				filename: 'badge_notext.png',
				title: 'Badge',
				credits: [{ name: '@SillyWiwi', url: 'https://sillywiwibae.carrd.co/'}]
			},
			{
				filename: 'wolfiii-kuro.jpg',
				title: 'Cuddle session',
				credits: [{ name: '@SillyWiwi', url: 'https://sillywiwibae.carrd.co/'}]
			},
			{
				filename: 'nfcroom2026.png',
				title: 'NFC2026 Roomsign with TheNicked',
				credits: [{ name: '@Kodalexis', url: 'https://linktr.ee/kodalexis'}]
			}
		],
	},
	{
		title: "Artworks I'm part of",
		artworks: [
			{
				filename: 'rollercoaster.png',
				title: 'Rollercoaster',
				credits: [
					{ 
						name: '@myrisdrawwws',
						url: 'https://discord.com/users/1268028902220103772'
					},
					{
						name: 'Belongs to Fen',
						url: 'https://discord.com/users/120597464137859073'
					}
				]
			},
			{
				filename: 'Pawpedition33.png',
				title: 'Clair Obscur: Pawpedition 33',
				credits: [
					{
						name: '@autumnlynx',
						url: 'https://discord.com/users/395750241153974273'
					},
					{
						name: 'Belongs to Nu99et',
						url: 'https://discord.com/users/395750241153974273'
					}
				]
			}
		],
	},
];
