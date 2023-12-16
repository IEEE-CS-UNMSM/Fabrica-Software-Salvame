// Obtén el userId del URL actual
const url = new URL(window.location.href);
const userId = url.pathname.split('/')[1]; // Esto obtendrá el primer segmento del URL

const token = localStorage.getItem('token');
if (token) {
  fetch(`/${userId}/`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
}
