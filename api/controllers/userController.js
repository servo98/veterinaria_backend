import connection from '../utils/database.js';

const createUser = async (req, res) => {
  const { user } = req.body;

  const a = 'asdkhashdbasd';

  try {
    const newUser = await connection('public.usuario').insert({ ...user });
    return res.json({
      msg: 'Usuario registrado correctamente 😂',
      user: newUser,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      msg: 'Error al registrar nuevo usuario',
    });
  }
};

export { createUser };
