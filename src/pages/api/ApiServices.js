import axios from "axios";

export const RegisterFunction = async () => {
  try {
    let res = await axios.post(`${NEXT_PUBLIC_BASE_URL}/users/signup`,
     {
      data,
    });
    console.log('res', res)
  } catch (err) {
    console.log("error", err)
  }
};
