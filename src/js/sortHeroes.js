export default function sortHeroes(object) {
    return object.sort((prev, next) => next.health - prev.health);
}
