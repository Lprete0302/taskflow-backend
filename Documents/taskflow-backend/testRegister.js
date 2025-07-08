// testRegister.js
const axios = require('axios');

const registerUser = async () => {
  try {
    const response = await axios.post('http://localhost:5050/api/users/register', {
      name: "Marc P",
      email: "marc+taskflow@example.com",
      password: "123456"
    });

    console.log('✅ Registration Success:', response.data);
  } catch (error) {
    if (error.response) {
      console.log('❌ Registration Failed:', error.response.data);
    } else {
      console.log('❌ No response received:', error.message);
    }
  }
};

registerUser();
