type Index = [string, [{ src: string }]]

export default function (sources: object) {
	return Object.entries(sources).map((index: Index) => ({
		type: `image/${index[0]}`,
		srcset: index[1][0].src
	}))
}
