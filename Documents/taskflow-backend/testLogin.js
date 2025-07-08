const axios = require('axios');

const loginData = {
  email: 'marc+taskflow@example.com',
  password: '123456',
};

axios
  .post('http://localhost:5051/api/users/login', loginData)  // <-- Changed to 5051
  .then((res) => {
    console.log('✅ Login Success:', res.data);
  })
  .catch((err) => {
    if (err.response) {
      console.log('❌ Login Error:', err.response.data);
    } else {
      console.log('❌ No response received:', err);
    }
  });
