

const counter = document.querySelector(".visitor-count");

async function updateCounter() {
  try {
    const response = await fetch('https://dmxg2d77z3.execute-api.us-east-1.amazonaws.com/visitorsCount', {
      method: 'GET',
      mode: 'cors', // Enable CORS handling
    });


    if (response.ok) {
      let data = await response.json();
      counter.innerHTML = `Visitors: ${data}`;
    } else {
      console.error('Failed to fetch visitor count:', response.status, response.statusText);
    }
  } catch (error) {
    console.error('Error fetching visitor count:', error);
  }
}

updateCounter();


