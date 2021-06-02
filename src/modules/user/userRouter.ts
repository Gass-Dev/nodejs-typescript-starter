import { Router } from 'express'

const userRouter: Router = Router();

console.log('User router');

userRouter.get('/', (_req, res) => {
    res.json('Skills');
})

export { userRouter }