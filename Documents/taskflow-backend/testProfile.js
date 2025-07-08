const axios = require('axios');

// Use your most recent valid token
const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NmMzODRmOTdhYjA3ZGVjZjY0MjI0NCIsImlhdCI6MTc1MTk0MTk1NiwiZXhwIjoxNzU0NTMzOTU2fQ.gw0lPciiMlFTkXhA1XfeRb7VNgFnfh-QHcJeaZttzoQ';

const testProfile = async () => {
  try {
    const response = await axios.get('http://localhost:5051/api/users/profile', {
      headers: {
        Authorization: token,
      },
    });

    console.log('✅ Profile Access Success:', response.data);
  } catch (error) {
    if (error.response) {
      console.error('❌ Profile Access Failed:', {
        status: error.response.status,
        data: error.response.data,
      });
    } else {
      console.error('❌ Error:', error.message);
    }
  }
};

testProfile();
