export const getLinkedField = <
    T extends { data?: Record<string, unknown> },
    K extends string
>(
    field: T | null | undefined,
    key: K,
    fallback?: unknown
): unknown => {
    if (
        field &&
        typeof field === 'object' &&
        'data' in field &&
        field.data &&
        Object.prototype.hasOwnProperty.call(field.data, key)
    ) {
        return (field.data as Record<string, unknown>)[key];
    }
    return fallback;
};
