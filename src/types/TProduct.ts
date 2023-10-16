type TProduct = {
	_id: string
	user: string
	name: string
	type: string
	price: number
	ingredients: { name: string; quantity: string; _id: string }[]
	method?: string
	glass?: string
	ice?: string
	garnish?: string
	optional?: string[]
	history?: string
}

export default TProduct
