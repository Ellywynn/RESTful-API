module.exports = (msg, code = 500) => {
    return {error: msg, code};
}