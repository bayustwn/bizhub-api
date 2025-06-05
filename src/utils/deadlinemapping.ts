export function deadlineMap(deadline:string) {
    return new Date(new Date(deadline).setHours(23, 59, 59, 999));
}