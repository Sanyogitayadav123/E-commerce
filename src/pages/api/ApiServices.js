import axios from "axios";
import { useState,useEffect } from "react";
const [userId, setUserId] = useState("");
useEffect(() => {
  const token = cookies.getItem("token");

  if (token) {
    try {
      const decodedToken = jwt.decode(token);
      if (decodedToken) {
        const userId = decodedToken._id;
        setUserId(userId)
      } else {
        console.error('Failed to decode token.');
      }
    } catch (error) {
      console.error('Error decoding token:', error);
    }
  } else {
    console.warn('Token not found in cookies.');
  }
}, []);
export const getProfile = async () => {
  try {
    const res = await axios.get(`${NEXT_PUBLIC_BASE_URL}/users/get-user-by-id/${userId}`)
    const { name, profileImage } = res.data.user;
    setValue("name", name);
    setValue("email", email)
    setValue("phone", phone);
    setSelectedImage(profileImage);
    setSelectedImageData(null);
    setLoading(false);
  }
  catch (err) {
    console.log('error', err)
  }
}
