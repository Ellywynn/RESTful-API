module.exports = (errorMsg = 'Item alredy exists') => {
    return {
        args: true,
        msg: errorMsg
    }
}