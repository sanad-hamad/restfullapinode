const router =require('express').Router();

router.get('/',(req,res)=>{

    res.json({
        status:"the api work true",
        message:"welcome to the home page"
    })
});


module.exports=router;

