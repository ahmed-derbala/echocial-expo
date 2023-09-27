import config from "../configs/config";
import { log } from "./log";

export const errorHandler = ({ err }) => {
  //console.log('errorhandler',err)
  if (config.NODE_ENV == 'production') return alert("error")
  if (err.message)
    alert(err.message)
  else if(err.error)
  alert(err.error)
  else
    alert(err)

    if (err.error)
    return log({ level: "error", error:err.error,req:err.req,message:err.message })
  return log({ level: "error", error:err })
};
