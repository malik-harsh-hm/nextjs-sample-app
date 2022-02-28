import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
  const session = await getSession({ req: req });
  if (!session) {
    res.status(401).json({ message: 'Unauthenticated user' })
  }
  else {
    res.status(200).json({ message: 'Hello ' + session.user.name })
  }
}
