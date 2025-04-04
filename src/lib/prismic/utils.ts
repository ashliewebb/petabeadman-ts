export const getLinkedField = <
    T extends { data?: Record<string, unknown> },
    K extends keyof NonNullable<T["data"]>
>(
    field: T | null | undefined,
    key: K,
    fallback: NonNullable<T["data"]>[K] | undefined = undefined
): NonNullable<T["data"]>[K] | undefined => {
    if (
        field &&
        typeof field === 'object' &&
        'data' in field &&
        field.data &&
        key in field.data
    ) {
        return field.data[key] as NonNullable<T["data"]>[K];
    }
    return fallback;
};
