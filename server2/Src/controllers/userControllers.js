const { User, Post } = require("../db")
const axios = require("axios")
const { Op } = require('sequelize');





const cleanUsersApi = (data) => {
  if (Array.isArray(data)) {
    // Si data es un array, aplicar la lógica de mapeo
    return data.map(e => ({
      id: e.id,
      name: e.name,
      username: e.username,
      email: e.email,
      phone: e.phone,
      website: e.website,
      created: false
    }));
  } else if (typeof data === 'object') {
    // Si data es un objeto, aplicar la lógica para un solo objeto
    return [{
      id: data.id,
      name: data.name,
      username: data.username,
      email: data.email,
      phone: data.phone,
      website: data.website,
      created: false
    }];
  }


};



const getAllUsers = async () => {
  const usersBdd = await User.findAll();
  const usersApiRaw = (await axios.get("https://jsonplaceholder.typicode.com/users")).data

  const usersApi = cleanUsersApi(usersApiRaw)

  return [...usersApi, ...usersBdd]
}






const searchUserByName = async (name) => {
  try {
    const [userBdd, usersApiRaw] = await Promise.all([
      User.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
      }),
      axios.get(`https://jsonplaceholder.typicode.com/users`)
    ]);

    const usersApi = cleanUsersApi(usersApiRaw.data);

    // Filtra los resultados de la API por coincidencias parciales
    const filteredUsersApi = usersApi.filter(user => 
      user.name.toLowerCase().includes(name.toLowerCase())
    );

    return [...userBdd, ...filteredUsersApi];
  } catch (error) {
    console.error("Error searching for users:", error);
    throw error;
  }
};





const getUserById = async (id, source) => {


  const user = source === "api"
    ? cleanUsersApi((await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)).data)
    : await User.findByPk(id, {
      include: {
        model: Post,
        attributes: ["title", "body"]
      }
    });


  return user;
}


// Función del controlador para manejar la eliminación de un usuario por ID
const deleteUserById = async (id) => {
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    await user.destroy();

    return user;

  } catch (error) {
    throw error;
  }
};




const createUser = async (name, username, email, phone, website) =>
  await User.create({ name, username, email, phone, website });



module.exports = {
  createUser,
  getUserById,
  getAllUsers,
  searchUserByName,
  deleteUserById
};
