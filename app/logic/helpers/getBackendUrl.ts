export const getBackendUrl = (app) => {
    if (app === "strapi") return process.env.STRAPI_URL
    if (app === "back-end") return process.env.API_URL
    throw new Error('Bad argument value provided')
}