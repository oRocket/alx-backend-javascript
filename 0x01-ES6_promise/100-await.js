import { uploadPhoto, createUser } from "./utils.js"; // Assuming utils.js is in the same directory

export default async function asyncUploadUser(photoData, userData) {
  try {
    const photoResponse = await uploadPhoto(photoData);
    const userResponse = await createUser(userData);
    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    console.error("Error uploading photo or creating user:", error);
    return {
      photo: null,
      user: null,
    };
  }
}
