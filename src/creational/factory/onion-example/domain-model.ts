export type domainModel = {
	id: number
	businessLogic: string
}

const isError = (e: unknown): e is Error => e instanceof Error
export const errorHandler = (e: unknown): string => isError(e) ? e.message : 'Unknown error'