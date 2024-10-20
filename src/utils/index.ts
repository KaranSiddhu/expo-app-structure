export const isObjectEmpty = (obj: unknown): boolean => {
	return obj === null || (typeof obj === 'object' && Object.keys(obj || {}).length === 0);
};

export const isArrayEmpty = (arr: unknown): boolean => {
	return arr === null || (Array.isArray(arr) && arr.length === 0);
};
