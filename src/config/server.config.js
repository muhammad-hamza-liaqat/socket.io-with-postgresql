const { connectToDatabase } = require("./postgresql.config");

const startServer = async (app) => {
    try {
        const DbConnection = await connectToDatabase();
        // associationCalled();

        app.listen(process.env.PORT, () => {
            console.warn(`server is running at http://localhost:${process.env.PORT}/`)
        })
    } catch (error) {
        console.error("Failed to start the server", error.message);
        process.exit(1);
    }
}

module.exports = startServer;