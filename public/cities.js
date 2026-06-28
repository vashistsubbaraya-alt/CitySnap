// CitySnap India — City Database
// Each city: { name, lat, lng, state, tier }
// Zoom is always set to 14 by default in the game engine

const CITIES = [
  // ── TIER 1 ───────────────────────────────────────────────────────────────
  { name: "Mumbai",             lat: 19.0760, lng: 72.8777, state: "Maharashtra",      tier: 1 },
  { name: "Delhi",              lat: 28.6139, lng: 77.2090, state: "Delhi",             tier: 1 },
  { name: "Bangalore",          lat: 12.9716, lng: 77.5946, state: "Karnataka",         tier: 1 },
  { name: "Chennai",            lat: 13.0827, lng: 80.2707, state: "Tamil Nadu",        tier: 1 },
  { name: "Kolkata",            lat: 22.5726, lng: 88.3639, state: "West Bengal",       tier: 1 },
  { name: "Hyderabad",          lat: 17.3850, lng: 78.4867, state: "Telangana",         tier: 1 },
  { name: "Pune",               lat: 18.5204, lng: 73.8567, state: "Maharashtra",       tier: 1 },
  { name: "Ahmedabad",          lat: 23.0225, lng: 72.5714, state: "Gujarat",           tier: 1 },

  // ── TIER 2 — MAHARASHTRA ─────────────────────────────────────────────────
  { name: "Nagpur",             lat: 21.1458, lng: 79.0882, state: "Maharashtra",       tier: 2 },
  { name: "Nashik",             lat: 19.9975, lng: 73.7898, state: "Maharashtra",       tier: 2 },
  { name: "Aurangabad",         lat: 19.8762, lng: 75.3433, state: "Maharashtra",       tier: 2 },
  { name: "Kolhapur",           lat: 16.7050, lng: 74.2433, state: "Maharashtra",       tier: 2 },
  { name: "Solapur",            lat: 17.6599, lng: 75.9064, state: "Maharashtra",       tier: 2 },
  { name: "Nanded",             lat: 19.1383, lng: 77.3210, state: "Maharashtra",       tier: 2 },

  // ── TIER 2 — GUJARAT ─────────────────────────────────────────────────────
  { name: "Surat",              lat: 21.1702, lng: 72.8311, state: "Gujarat",           tier: 2 },
  { name: "Vadodara",           lat: 22.3072, lng: 73.1812, state: "Gujarat",           tier: 2 },
  { name: "Rajkot",             lat: 22.3039, lng: 70.8022, state: "Gujarat",           tier: 2 },
  { name: "Jamnagar",           lat: 22.4707, lng: 70.0577, state: "Gujarat",           tier: 2 },
  { name: "Gandhinagar",        lat: 23.2156, lng: 72.6369, state: "Gujarat",           tier: 2 },

  // ── TIER 2 — RAJASTHAN ───────────────────────────────────────────────────
  { name: "Jaipur",             lat: 26.9124, lng: 75.7873, state: "Rajasthan",         tier: 2 },
  { name: "Jodhpur",            lat: 26.2389, lng: 73.0243, state: "Rajasthan",         tier: 2 },
  { name: "Udaipur",            lat: 24.5854, lng: 73.7125, state: "Rajasthan",         tier: 2 },
  { name: "Kota",               lat: 25.2138, lng: 75.8648, state: "Rajasthan",         tier: 2 },
  { name: "Ajmer",              lat: 26.4499, lng: 74.6399, state: "Rajasthan",         tier: 2 },

  // ── TIER 2 — UTTAR PRADESH ───────────────────────────────────────────────
  { name: "Lucknow",            lat: 26.8467, lng: 80.9462, state: "Uttar Pradesh",     tier: 2 },
  { name: "Kanpur",             lat: 26.4499, lng: 80.3319, state: "Uttar Pradesh",     tier: 2 },
  { name: "Agra",               lat: 27.1767, lng: 78.0081, state: "Uttar Pradesh",     tier: 2 },
  { name: "Varanasi",           lat: 25.3176, lng: 82.9739, state: "Uttar Pradesh",     tier: 2 },
  { name: "Prayagraj",          lat: 25.4358, lng: 81.8463, state: "Uttar Pradesh",     tier: 2 },
  { name: "Meerut",             lat: 28.9845, lng: 77.7064, state: "Uttar Pradesh",     tier: 2 },
  { name: "Bareilly",           lat: 28.3670, lng: 79.4304, state: "Uttar Pradesh",     tier: 2 },
  { name: "Gorakhpur",          lat: 26.7606, lng: 83.3732, state: "Uttar Pradesh",     tier: 2 },

  // ── TIER 2 — MADHYA PRADESH ──────────────────────────────────────────────
  { name: "Indore",             lat: 22.7196, lng: 75.8577, state: "Madhya Pradesh",    tier: 2 },
  { name: "Bhopal",             lat: 23.2599, lng: 77.4126, state: "Madhya Pradesh",    tier: 2 },
  { name: "Jabalpur",           lat: 23.1815, lng: 79.9864, state: "Madhya Pradesh",    tier: 2 },
  { name: "Gwalior",            lat: 26.2183, lng: 78.1828, state: "Madhya Pradesh",    tier: 2 },

  // ── TIER 2 — KARNATAKA ───────────────────────────────────────────────────
  { name: "Mysuru",             lat: 12.2958, lng: 76.6394, state: "Karnataka",         tier: 2 },
  { name: "Mangalore",          lat: 12.9141, lng: 74.8560, state: "Karnataka",         tier: 2 },
  { name: "Hubli",              lat: 15.3647, lng: 75.1240, state: "Karnataka",         tier: 2 },

  // ── TIER 2 — TAMIL NADU ──────────────────────────────────────────────────
  { name: "Coimbatore",         lat: 11.0168, lng: 76.9558, state: "Tamil Nadu",        tier: 2 },
  { name: "Madurai",            lat: 9.9252,  lng: 78.1198, state: "Tamil Nadu",        tier: 2 },
  { name: "Tiruchirappalli",    lat: 10.7905, lng: 78.7047, state: "Tamil Nadu",        tier: 2 },
  { name: "Salem",              lat: 11.6643, lng: 78.1460, state: "Tamil Nadu",        tier: 2 },
  { name: "Tirunelveli",        lat: 8.7139,  lng: 77.7567, state: "Tamil Nadu",        tier: 2 },
  { name: "Vellore",            lat: 12.9165, lng: 79.1325, state: "Tamil Nadu",        tier: 2 },

  // ── TIER 2 — ANDHRA PRADESH ──────────────────────────────────────────────
  { name: "Visakhapatnam",      lat: 17.6868, lng: 83.2185, state: "Andhra Pradesh",    tier: 2 },
  { name: "Vijayawada",         lat: 16.5062, lng: 80.6480, state: "Andhra Pradesh",    tier: 2 },
  { name: "Guntur",             lat: 16.3067, lng: 80.4365, state: "Andhra Pradesh",    tier: 2 },
  { name: "Nellore",            lat: 14.4426, lng: 79.9865, state: "Andhra Pradesh",    tier: 2 },
  { name: "Kurnool",            lat: 15.8281, lng: 78.0373, state: "Andhra Pradesh",    tier: 2 },
  { name: "Tirupati",           lat: 13.6288, lng: 79.4192, state: "Andhra Pradesh",    tier: 2 },
  { name: "Rajahmundry",        lat: 17.0005, lng: 81.8040, state: "Andhra Pradesh",    tier: 2 },

  // ── TIER 2 — TELANGANA ───────────────────────────────────────────────────
  { name: "Warangal",           lat: 17.9784, lng: 79.5941, state: "Telangana",         tier: 2 },

  // ── TIER 2 — KERALA ──────────────────────────────────────────────────────
  { name: "Kochi",              lat: 9.9312,  lng: 76.2673, state: "Kerala",            tier: 2 },
  { name: "Thiruvananthapuram", lat: 8.5241,  lng: 76.9366, state: "Kerala",            tier: 2 },
  { name: "Kozhikode",          lat: 11.2588, lng: 75.7804, state: "Kerala",            tier: 2 },

  // ── TIER 2 — WEST BENGAL ─────────────────────────────────────────────────
  { name: "Siliguri",           lat: 26.7271, lng: 88.3953, state: "West Bengal",       tier: 2 },
  { name: "Durgapur",           lat: 23.4800, lng: 87.3119, state: "West Bengal",       tier: 2 },

  // ── TIER 2 — BIHAR / JHARKHAND ───────────────────────────────────────────
  { name: "Patna",              lat: 25.5941, lng: 85.1376, state: "Bihar",             tier: 2 },
  { name: "Ranchi",             lat: 23.3441, lng: 85.3096, state: "Jharkhand",         tier: 2 },
  { name: "Jamshedpur",         lat: 22.8046, lng: 86.2029, state: "Jharkhand",         tier: 2 },

  // ── TIER 2 — ODISHA ──────────────────────────────────────────────────────
  { name: "Bhubaneswar",        lat: 20.2961, lng: 85.8245, state: "Odisha",            tier: 2 },

  // ── TIER 2 — CHHATTISGARH ────────────────────────────────────────────────
  { name: "Raipur",             lat: 21.2514, lng: 81.6296, state: "Chhattisgarh",      tier: 2 },

  // ── TIER 2 — PUNJAB / HARYANA ────────────────────────────────────────────
  { name: "Ludhiana",           lat: 30.9010, lng: 75.8573, state: "Punjab",            tier: 2 },
  { name: "Amritsar",           lat: 31.6340, lng: 74.8723, state: "Punjab",            tier: 2 },
  { name: "Jalandhar",          lat: 31.3260, lng: 75.5762, state: "Punjab",            tier: 2 },
  { name: "Chandigarh",         lat: 30.7333, lng: 76.7794, state: "Chandigarh",        tier: 2 },
  { name: "Faridabad",          lat: 28.4089, lng: 77.3178, state: "Haryana",           tier: 2 },
  { name: "Gurugram",           lat: 28.4595, lng: 77.0266, state: "Haryana",           tier: 2 },

  // ── TIER 2 — UTTARAKHAND / HIMACHAL ──────────────────────────────────────
  { name: "Dehradun",           lat: 30.3165, lng: 78.0322, state: "Uttarakhand",       tier: 2 },

  // ── TIER 2 — ASSAM / NORTHEAST ───────────────────────────────────────────
  { name: "Guwahati",           lat: 26.1445, lng: 91.7362, state: "Assam",             tier: 2 },
  { name: "Shillong",           lat: 25.5788, lng: 91.8933, state: "Meghalaya",         tier: 2 },
  { name: "Imphal",             lat: 24.8170, lng: 93.9368, state: "Manipur",           tier: 2 },

  // ── TIER 2 — JAMMU & KASHMIR ─────────────────────────────────────────────
  { name: "Srinagar",           lat: 34.0837, lng: 74.7973, state: "Jammu & Kashmir",   tier: 2 },
];
