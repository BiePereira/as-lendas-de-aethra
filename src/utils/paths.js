export function getPath(path = "") {
    const base = import.meta.env.BASE_URL.replace(/\/$/, "");
    const limpo = path.replace(/^\/|\/$/g, "");
    return limpo ? `${base}/${limpo}/` : `${base}/`;
}