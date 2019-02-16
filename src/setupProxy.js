const proxy = require("http-proxy-middleware");

module.exports = (app)=>{
    app.use("/api",proxy({
        target:"http://kuailv.meituan.com",
        changeOrigin:true,
        pathRewrite:{
            "^/api":""
        }
    }))
}