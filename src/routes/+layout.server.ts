import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ url }): Promise<{url: string}> => {
  return {
    url: url.pathname
  }
}