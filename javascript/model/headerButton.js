export function headerButton() {
    if (!location.hash) return;

    const target = document.querySelector(location.hash);
    target?.scrollIntoView({ behavior: "smooth" });
}