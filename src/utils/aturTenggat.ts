export function aturTenggat(tenggat: string) {
    return new Date(new Date(tenggat).setHours(23, 59, 59, 999));
}