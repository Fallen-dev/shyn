export default function price(price = 0, discountPercent = 0) {
	return {
		format(number: number) {
			return Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(number)
		},
		saving() {
			const saving = (price * discountPercent) / 100
			return this.format(saving)
		},
		afterDiscount() {
			const discount = price - (price * discountPercent) / 100
			return this.format(discount)
		}
	}
}
