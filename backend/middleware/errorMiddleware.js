const notFound=(req,res,next)=>{//postman de istek gönderirdikten sonra açıklayıcı hata alabilmek için
  const error=new Error(`Not found-${req.originalUrl}`)
  res.status(404)
  next(error)
}


const errorHandler=(err,req,res,next)=>{//bu kısmı postman uygulamasında isteği gönderdikten sonra hata alırken html tarzında değilde json tarzında almak için yazıyorsun
  const statusCode=res.statusCode===200 ? 500:res.statusCode
     res.status(statusCode)
  res.json({
    message:err.message,
    stack:process.env.NODE_ENV==='productıon'? null:err.stack
  })

}


export {notFound,errorHandler}