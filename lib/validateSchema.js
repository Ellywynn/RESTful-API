module.exports = async (model, data) => {
    // Get model schema
    const schema = await model.describe();
    const columns = Object.keys(schema);

    // we do not need ids so we remove it
    delete columns.id;
    delete data.id;

    // Validate each column
    for(const column of columns) {
        // if there is no needed column
        if(!(column in data) && schema[column].defaultValue === null) {
            console.log(column);
            return false;
        }
    }

    return true;
}