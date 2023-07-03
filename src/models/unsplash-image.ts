export type UnsplashImage = {
	description: string | null;
	user: {
		username: string | null;
	};
	urls: {
		raw: string;
	};
	width: number;
	height: number;
};
