export const isArrayEmpty = (arr: Array<object | string | number>): boolean => {
	return arr.length === 0;
};

export const isObjectEmpty = (obj: object): boolean => {
	return Object.keys(obj).length === 0;
};
