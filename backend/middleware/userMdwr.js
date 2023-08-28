const jwt = require('jsonwebtoken')



const requireSignIn = async(req,res,next) =>{
    try {
        const decode = await jwt.verify(
            req.headers.authorization,
            process.env.JWT_SECRET
        )
        req.user = decode
        next()
    } catch (error) {
        console.log(error)
    } 
}




module.exports = {requireSignIn}