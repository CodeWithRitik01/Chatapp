const corsOptions ={
    origin: [
        "http://localhost:5173",
        "http://localhost:4173",
        process.env.CLIENT_URL
    ].filter(Boolean),
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}

const CHATKARO_TOKEN = "chatkaro-token"

export { corsOptions, CHATKARO_TOKEN };