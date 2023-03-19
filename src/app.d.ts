// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
	interface APIData {
		id: string; title: string; description: string; price: string; discountPercentage: string; rating: string; brand: string; category: string; thumbnail: string; images: Array<string>
	}

	type types = 'primary' | 'secondary' | 'tertiary' | 'error'
	type container = 'container'
	type ButtonType = types | `${types}-${container}` | 'surface' | 'disabled' | 'outlined'
}

export {}
