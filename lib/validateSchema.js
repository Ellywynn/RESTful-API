module.exports = async (model, req) => {
    // Get model schema
    const schema = await model.describe();
    const columns = Object.keys(schema);

    // we do not need ids so we remove it
    delete columns.id;
    delete req.body.id;

    // Validate each column
    for(const column of columns) {
        // if there is no needed column
        if(!(column in req.body) && schema[column].defaultValue === null) {
            return false;
        }
    }

    return true;
}