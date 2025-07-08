const axios = require('axios');

const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NmMzODRmOTdhYjA3ZGVjZjY0MjI0NCIsImlhdCI6MTc1MTk0MTk1NiwiZXhwIjoxNzU0NTMzOTU2fQ.gw0lPciiMlFTkXhA1XfeRb7VNgFnfh-QHcJeaZttzoQ';

const taskData = {
  title: '🚀 Deploy TaskFlow Backend',
  description: 'Make sure everything is tested and ready to deploy!',
  completed: false,
};

const createTask = async () => {
  try {
    const response = await axios.post('http://localhost:5051/api/tasks', taskData, {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    });

    console.log('✅ Task Created:', response.data);
  } catch (error) {
    if (error.response) {
      console.error('❌ Create Task Failed:', {
        status: error.response.status,
        data: error.response.data,
      });
    } else {
      console.error('❌ Error:', error.message);
    }
  }
};

createTask();
