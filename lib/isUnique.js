/** 
 *  Returns an objects for validation that instance is unique.
 *  Used in sequelize model description.
 */
module.exports = (errorMsg = 'Item alredy exists') => {
    return {
        args: true,
        msg: errorMsg
    }
}