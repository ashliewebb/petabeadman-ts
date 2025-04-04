export const getLinkedField = <T extends { data?: unknown }>(
    field: T | null | undefined,
    key: string,
    fallback: any = undefined
) => {
    if (field && typeof field === 'object' && 'data' in field && field.data) {
        return (field.data as Record<string, any>)[key] ?? fallback;
    }
    return fallback;
};
