import { url } from '$lib/server/url'
import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ fetch, params, cookies }): Promise<{ product: object; country: string | undefined }> => {
	async function getProduct(): Promise<object> {
		const res = await fetch(url + '/product/' + params.id)
		if (!res.ok)
			throw error(res.status, {
				message: res.statusText
			})
		return res.json()
	}
	return {
		product: getProduct(),
		country: cookies.get('country')
	}
}
