import { Router } from 'express';
import { AuthenticateUserController } from './controlles/AuthenticateUserControlle';
import { CreateMessageController } from './controlles/CreateMessageController';
import { Get3LastMessagesController } from './controlles/GetLast3MessagesController';
import { ProfileUserController } from './controlles/ProfileUserController';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';

const router = Router();

router.post('/authenticate', new AuthenticateUserController().handle);
router.post('/messages', ensureAuthenticated, new CreateMessageController().handle);
router.get('/messages/last3', new Get3LastMessagesController().handle);
router.get('/profile', ensureAuthenticated, new ProfileUserController().handle);

export { router }