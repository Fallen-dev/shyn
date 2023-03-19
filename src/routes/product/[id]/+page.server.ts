import { url } from '$lib/server/url'
import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

type DeferData = Promise<APIData>

export const load: PageServerLoad = async ({ fetch, params }) : Promise<{product: DeferData}>=> {

	async function getProduct(): DeferData {
		try {
			const res = await fetch(url + '/product/' + params.id)
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
		product: getProduct()
	}
}