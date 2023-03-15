import random from '$lib/random'
import { url } from '$lib/server/url'
import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ fetch }) => {
	async function getProducts() {
		try {
			const res = await fetch(url + '/products?limit=5&skip=' + random(15))
			if (!res.ok) console.error({ status: res.status, message: res.text })
			return await res.json()
		} catch (err: any) {
			throw error(500, {
				message: err
			})
		}
	}

	return {
		products: getProducts()
	}
}
