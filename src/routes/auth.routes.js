import { Router } from 'express'
import passport from 'passport'

const router = Router()

router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
    // Successful authentication, redirect home.
    // res.redirect('/');
    console.log('user:', req.user);
    res.json(req.user)
});

  export default router