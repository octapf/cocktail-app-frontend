export default interface IProduct {
	id: number
	name: string
	type: string
	ingredients?: { name: string; quantity: string }[]
	method?: string
	glass?: string
	ice?: string
	garnish?: string
	optional?: string[]
	price: number
}
