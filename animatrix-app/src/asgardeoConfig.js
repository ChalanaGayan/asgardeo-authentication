const asgardeoConfig = {
    clientID: "S62CYYjSneR4omX1lODUtQiFx8ga",
    baseUrl: "https://api.asgardeo.io/t/chalanauom",
    signInRedirectURL: "http://localhost:5173",
    signOutRedirectURL: "http://localhost:5173",
    scope: ["openid", "profile", "email"],
    resourceServerURLs:
        ["https://bdc81b0c-bae6-43e8-b4aa-0702a82aee77-prod.e1-us-east-azure.choreoapis.dev/animetrix/movie-catalog-service/v1.0/categories"]
};
export default asgardeoConfig;

