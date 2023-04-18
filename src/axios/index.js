import axios from 'axios';

export default function withAuth() {
//   const token = sessionStorage.getItem('token');
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2M5NmE5OThkNDNlYTVkMTNiYzZkMyIsImlhdCI6MTY4MTczOTIxMSwiZXhwIjoxNjg0MzMxMjExfQ.A2mILOpFLXcwzHIwO7MbzrlR2vis5foU7Unxc8KTpas";

  const axiosInstance = axios.create({
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }
  });

  return axiosInstance;
}

