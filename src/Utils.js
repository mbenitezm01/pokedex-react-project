export const strCapital = (string) => {
    if (string) {
        const first = string.charAt(0);
        const remaining = string.substring(1);
        const firstCapital = first.toUpperCase();
        return firstCapital + remaining;
    }
}