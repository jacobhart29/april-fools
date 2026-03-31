const LOC = { 
  name: "IDK", 
  lat: 34.9887313, 
  lon: -89.8487534, 
  tz: "Pacific/Chatham" 
};

// Nonsensical Day Types for April Fools
function getDayType() {
  const types = ["Z Day", "C Day", "K Day", "O Day", "D Day"];
  return types[Math.floor(Math.random() * types.length)];
}

// Fake Weather Conditions
function getCond() {
  const pranks = [
    { t: "Raining Tacos", i: "rain" },
    { t: "Cloudy with Meatballs", i: "cloud" },
    { t: "Zero Gravity", i: "sun" },
    { t: "Glitter Storm", i: "snow" },
    { t: "Alien Invasion", i: "thunder" },
    { t: "Invisible Fog", i: "fog" }
  ];
  return pranks[Math.floor(Math.random() * pranks.length)];
}

async function update() {
  const n = new Date();
  // Speed up time or keep it real - let's keep it real so it's still a clock
  const tStr = n.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
  const [t, p] = tStr.split(' ');
  const [h, m, s] = t.split(':');
  
  document.getElementById('hours').textContent = h;
  document.getElementById('minutes').textContent = m;
  document.getElementById('seconds').textContent = s;
  document.getElementById('period').textContent = "??"; // Hide AM/PM for confusion
  
  const dStr = "April 1, 2026"; 
  document.getElementById('date').textContent = dStr + " - " + getDayType();
}

async function weather() {
  const cond = getCond();
  // Random "Impossible" Data
  document.getElementById('temp').textContent = Math.floor(Math.random() * 500) - 100;
  document.getElementById('condition').textContent = cond.t;
  document.getElementById('feels-like').textContent = "9000";
  document.getElementById('humidity').textContent = "404";
  document.getElementById('wind').textContent = "Mach 1";
  document.getElementById('visibility').textContent = "None";

  document.getElementById('weather-icon').innerHTML = icons[cond.i];
  document.querySelector('.weather-location').textContent = "BREAKING: Gravity Cancelled";
  
  // Trigger animations
  const rainContainer = document.getElementById('rain-container');
  rainContainer.style.display = 'block'; 
  rainContainer.innerHTML = '';
  // Add weird falling elements
  for(let i=0; i<20; i++) {
    const dr = document.createElement('div'); 
    dr.className = 'rain-drop';
    dr.style.left = Math.random()*100+'%'; 
    dr.style.background = 'linear-gradient(to bottom, red, yellow, green)'; // Rainbow rain
    dr.style.animationDuration = '0.5s';
    rainContainer.appendChild(dr);
  }
}

// Keep your intervals the same
update(); weather();
setInterval(update, 1000);
setInterval(weather, 10000); // Change news every 10 seconds
