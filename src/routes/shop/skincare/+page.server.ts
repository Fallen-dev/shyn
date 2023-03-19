import { url } from '$lib/server/url'
import { error } from '@sveltejs/kit'
import type { PageServerLoad } from '../../$types'

type DeferData = Promise<{ products: Array<APIData> }>

export const load: PageServerLoad = async ({ fetch }) : Promise<{allProducts: DeferData}>=> {

	async function getProducts(): DeferData {
		try {
			const res = await fetch(url + '/products/category/skincare')
			if (!res.ok) console.error({ status: res.status, message: res.text })
			return await res.json()
		}
		catch (err: any) {
			throw error(500, {
				message: err
			})
		}
	}

	return {
		allProducts: getProducts()
	}
}