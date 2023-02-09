export const fetcher = <T>(url: string, Type: T) =>
    fetch(url).then((res) => res.json() as Promise<typeof Type>);