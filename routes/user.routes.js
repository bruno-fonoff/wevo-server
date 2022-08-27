const router = require("express").Router();
const UserModel = require("../model/User.model");

//CREATE
router.post("/create-user", async (req, res) => {
  try {
    const newUser = await UserModel.create(req.body);
    return res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

//READ ALL

router.get("/all-users", async (req, res) => {
  try {
    const allUsers = await UserModel.find();
    res.status(200).json(allUsers);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

//READ DETAILS

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserModel.findOne({ _id: id });
    delete user._doc.__v;
    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

//UPDATE

router.patch("/edit/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const editedUser = await UserModel.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      { runValidators: true, new: true }
    );
    delete editedUser._doc.__v;
    return res.status(200).json(editedUser);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

//DELETE

router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await UserModel.deleteOne({ _id: id });
    return res.status(200).json(deletedUser);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

module.exports = router;
