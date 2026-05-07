import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// =====================
// GET
// =====================
export const getStudents = () => {
  return api.get("/students/get.php");
};

// =====================
// ADD
// =====================
export const addStudent = (data) => {
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("major", data.major);
  formData.append("score", data.score);

  return api.post("/students/tambah.php", formData);
};

// =====================
// UPDATE
// =====================
export const updateStudent = (data) => {
  const formData = new FormData();
  formData.append("id", data.id);
  formData.append("name", data.name);
  formData.append("major", data.major);
  formData.append("score", data.score);

  return api.post("/students/edit.php", formData);
};

// =====================
// DELETE
// =====================
export const deleteStudent = (id) => {
  const formData = new FormData();
  formData.append("id", id);

  return api.post("/students/hapus.php", formData);
};

// default export (IMPORTANT buat avoid error Vite)
export default api;