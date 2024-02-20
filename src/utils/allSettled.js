export const allSettled = (promises) => {
    return Promise.allSettled(promises).catch((err) => {
        console.error(err)
    })
}