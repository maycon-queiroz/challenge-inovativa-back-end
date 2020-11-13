import { Router } from 'express';

import AuthenticateUserServices from '../services/AuthenticateUserServices';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const authenticateUser = new AuthenticateUserServices();

  const { user, token } = await authenticateUser.execute({ email, password });

  const userWithoutPassword = {
    id: user.id,
    name: user.name,
    email: user.email,
    created_at: user.created_at,
    updated_at: user.updated_at,
    token
  };

  return response.status(200).json(userWithoutPassword);
});

export default sessionsRouter;
