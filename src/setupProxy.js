const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
    app.use(
        "/api",
        createProxyMiddleware({
            target: "http://127.0.0.1:3001",
            changeOrigin: true,
            on: {
                error: (err, req, res, target) => {
                    res.writeHead(500, {
                        "Content-Type": "text/plain",
                    })
                    res.end(`Error: ${err} on ${req}. res: ${res}`)
                }
            },
        })
    )
}
