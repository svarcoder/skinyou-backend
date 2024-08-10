import { Router } from 'express';
import { submitForm, getForms } from '../controllers/formController';

const router = Router();

// Route to submit a form
router.post('/submit', submitForm);

// Route to get all form submissions
router.get('/submissions', getForms);

export default router;
