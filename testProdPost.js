import axios from 'axios';

(async () => {
  try {
    const res = await axios.post('https://prarambha-backend.onrender.com/api/messages', {
      name: 'Prod Test',
      email: 'rudraprajapati640@gmail.com',
      subject: 'Prod Test',
      message: 'Testing production email',
    }, {
      headers: { 'Content-Type': 'application/json' },
    });
    console.log('Response:', res.status, res.data);
  } catch (err) {
    if (err.response) {
      console.error('Error response:', err.response.status, err.response.data);
    } else {
      console.error('Error:', err.message);
    }
  }
})();
