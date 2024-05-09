import express from 'express';
const app = express();
const port = process.env.PORT || 3000;
const router=express.Router();

router.get('/',(req,res)=>{ res.send('Hello Word!')});

app.listen(port, console.log(`Example app listening on port http://localhost:${port}`));

export default router;