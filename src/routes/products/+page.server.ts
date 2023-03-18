import { url } from '$lib/server/url'
import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ fetch }): Promise<{ products: object }> => {
	async function getProducts(): Promise<object> {
		const res = await fetch(url + '/products')
		if (!res.ok)
			throw error(res.status, {
				message: res.statusText
			})
		return res.json()
	}
	return {
		products: getProducts(),
	}
}
