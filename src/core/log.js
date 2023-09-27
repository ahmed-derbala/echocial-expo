import config from "../configs/config";





module.exports.log = ({ level, message, req,error }) => {
    if (config.NODE_ENV === "production") return
    
    if (!level) level = "debug"

    if (level === "error") {
        console.error({ level, message, req:JSON.stringify(req),error })
    } else {
        console.log({ level, message, req:JSON.stringify(req),error })
    }

    return { level, message, req,error }
}