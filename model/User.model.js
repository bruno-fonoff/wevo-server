const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  nome: { type: String, required: true, trim: true, match: /\s/ },
  cpf: {
    type: String,
    required: true,
    unique: true,
    match: /^\d{3}.\d{3}.\d{3}-\d{2}$/,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  },
  telefone: { type: String, required: true },
  sexo: { type: String, required: true, enum: ["Masculino", "Feminino"] },
  dataNascimento: { type: String, required: true },
});

const UserModel = model("User", userSchema);

module.exports = UserModel;
