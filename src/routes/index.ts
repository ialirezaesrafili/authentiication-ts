import express from 'express';
import user from './user.route';
import auth from './auth.route';

const router = express.Router();

router.get('/healthCheck', (_, res) => {
    res.sendStatus(200);
});


router.use(user);
router.use(auth);

export default router;