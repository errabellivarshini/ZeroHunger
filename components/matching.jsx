import { kmBetween } from "@/lib/geo";
export function rankByDistance(origin, items) {
    return items
        .map((it) => ({ it, km: kmBetween(origin, it.coords) }))
        .sort((a, b) => a.km - b.km);
}
export function matchNgOs(origin, ngos, max = 4) {
    return rankByDistance(origin, ngos)
        .filter(({ it }) => it.accepting)
        .slice(0, max);
}
export function matchFoodBanks(origin, banks, max = 4) {
    return rankByDistance(origin, banks).slice(0, max);
}
export function matchDonations(origin, donations, max = 4) {
    return rankByDistance(origin, donations).slice(0, max);
}
