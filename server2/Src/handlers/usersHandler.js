const { createUser, getUserById, deleteUserById, getAllUsers, searchUserByName } = require("../controllers/userControllers")



const getUsersHandler = async (req, res) => {
  const { name } = req.query;
  const results = name ? await searchUserByName(name) : await getAllUsers()

  try {
    res.status(200).json(results)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}




const getUserHandler = async (req, res) => {
  const { id } = req.params;
  const source = isNaN(id) ? "bdd" : "api";
  try {
    const user = await getUserById(id, source)
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}






const createUserHandler = async (req, res) => {
  const { name, username, email, phone, website } = req.body;
  try {
    if (!name || !email || !phone || !username || !website) throw Error("missing Data")
    const newUser = await createUser(name, username, email, phone, website)
    res.status(201).json("creado Exitosamente")
  } catch (error) {
    res.status(400).json({ error: error.message })
  }

}
const deleteUserHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await deleteUserById(id)
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}



module.exports = {
  getUsersHandler,
  getUserHandler,
  createUserHandler,
  deleteUserHandler
}