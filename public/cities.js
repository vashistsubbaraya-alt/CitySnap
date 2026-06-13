// CitySnap India — City Database
// Each city: { name, lat, lng, state }
// Zoom is always set to 14 by default in the game engine

const CITIES = [
  // ── MAHARASHTRA ──────────────────────────────────────────────────────────
  { name: "Mumbai",           lat: 19.0760, lng: 72.8777, state: "Maharashtra" },
  { name: "Pune",             lat: 18.5204, lng: 73.8567, state: "Maharashtra" },
  { name: "Nagpur",           lat: 21.1458, lng: 79.0882, state: "Maharashtra" },
  { name: "Nashik",           lat: 19.9975, lng: 73.7898, state: "Maharashtra" },
  { name: "Aurangabad",       lat: 19.8762, lng: 75.3433, state: "Maharashtra" },
  { name: "Solapur",          lat: 17.6599, lng: 75.9064, state: "Maharashtra" },
  { name: "Kolhapur",         lat: 16.7050, lng: 74.2433, state: "Maharashtra" },
  { name: "Amravati",         lat: 20.9320, lng: 77.7523, state: "Maharashtra" },
  { name: "Nanded",           lat: 19.1383, lng: 77.3210, state: "Maharashtra" },
  { name: "Sangli",           lat: 16.8524, lng: 74.5815, state: "Maharashtra" },

  // ── DELHI / NCR ───────────────────────────────────────────────────────────
  { name: "Delhi",            lat: 28.6139, lng: 77.2090, state: "Delhi" },
  { name: "Noida",            lat: 28.5355, lng: 77.3910, state: "Uttar Pradesh" },
  { name: "Gurgaon",          lat: 28.4595, lng: 77.0266, state: "Haryana" },
  { name: "Faridabad",        lat: 28.4089, lng: 77.3178, state: "Haryana" },
  { name: "Ghaziabad",        lat: 28.6692, lng: 77.4538, state: "Uttar Pradesh" },

  // ── KARNATAKA ────────────────────────────────────────────────────────────
  { name: "Bangalore",        lat: 12.9716, lng: 77.5946, state: "Karnataka" },
  { name: "Mysuru",           lat: 12.2958, lng: 76.6394, state: "Karnataka" },
  { name: "Mangalore",        lat: 12.9141, lng: 74.8560, state: "Karnataka" },
  { name: "Hubli",            lat: 15.3647, lng: 75.1240, state: "Karnataka" },
  { name: "Dharwad",          lat: 15.4589, lng: 75.0078, state: "Karnataka" },
  { name: "Belgaum",          lat: 15.8497, lng: 74.4977, state: "Karnataka" },
  { name: "Gulbarga",         lat: 17.3297, lng: 76.8343, state: "Karnataka" },
  { name: "Davanagere",       lat: 14.4644, lng: 75.9218, state: "Karnataka" },
  { name: "Shimoga",          lat: 13.9299, lng: 75.5681, state: "Karnataka" },
  { name: "Tumkur",           lat: 13.3409, lng: 77.1010, state: "Karnataka" },

  // ── TAMIL NADU ───────────────────────────────────────────────────────────
  { name: "Chennai",          lat: 13.0827, lng: 80.2707, state: "Tamil Nadu" },
  { name: "Coimbatore",       lat: 11.0168, lng: 76.9558, state: "Tamil Nadu" },
  { name: "Madurai",          lat: 9.9252,  lng: 78.1198, state: "Tamil Nadu" },
  { name: "Tiruchirappalli",  lat: 10.7905, lng: 78.7047, state: "Tamil Nadu" },
  { name: "Salem",            lat: 11.6643, lng: 78.1460, state: "Tamil Nadu" },
  { name: "Tirunelveli",      lat: 8.7139,  lng: 77.7567, state: "Tamil Nadu" },
  { name: "Vellore",          lat: 12.9165, lng: 79.1325, state: "Tamil Nadu" },
  { name: "Erode",            lat: 11.3410, lng: 77.7172, state: "Tamil Nadu" },
  { name: "Thoothukudi",      lat: 8.7642,  lng: 78.1348, state: "Tamil Nadu" },
  { name: "Dindigul",         lat: 10.3624, lng: 77.9695, state: "Tamil Nadu" },

  // ── TELANGANA ────────────────────────────────────────────────────────────
  { name: "Hyderabad",        lat: 17.3850, lng: 78.4867, state: "Telangana" },
  { name: "Warangal",         lat: 17.9784, lng: 79.5941, state: "Telangana" },
  { name: "Nizamabad",        lat: 18.6726, lng: 78.0940, state: "Telangana" },
  { name: "Karimnagar",       lat: 18.4386, lng: 79.1288, state: "Telangana" },
  { name: "Khammam",          lat: 17.2473, lng: 80.1514, state: "Telangana" },

  // ── ANDHRA PRADESH ───────────────────────────────────────────────────────
  { name: "Visakhapatnam",    lat: 17.6868, lng: 83.2185, state: "Andhra Pradesh" },
  { name: "Vijayawada",       lat: 16.5062, lng: 80.6480, state: "Andhra Pradesh" },
  { name: "Guntur",           lat: 16.3067, lng: 80.4365, state: "Andhra Pradesh" },
  { name: "Nellore",          lat: 14.4426, lng: 79.9865, state: "Andhra Pradesh" },
  { name: "Kurnool",          lat: 15.8281, lng: 78.0373, state: "Andhra Pradesh" },
  { name: "Tirupati",         lat: 13.6288, lng: 79.4192, state: "Andhra Pradesh" },
  { name: "Rajahmundry",      lat: 17.0005, lng: 81.8040, state: "Andhra Pradesh" },

  // ── GUJARAT ──────────────────────────────────────────────────────────────
  { name: "Ahmedabad",        lat: 23.0225, lng: 72.5714, state: "Gujarat" },
  { name: "Surat",            lat: 21.1702, lng: 72.8311, state: "Gujarat" },
  { name: "Vadodara",         lat: 22.3072, lng: 73.1812, state: "Gujarat" },
  { name: "Rajkot",           lat: 22.3039, lng: 70.8022, state: "Gujarat" },
  { name: "Bhavnagar",        lat: 21.7645, lng: 72.1519, state: "Gujarat" },
  { name: "Jamnagar",         lat: 22.4707, lng: 70.0577, state: "Gujarat" },
  { name: "Gandhinagar",      lat: 23.2156, lng: 72.6369, state: "Gujarat" },
  { name: "Junagadh",         lat: 21.5222, lng: 70.4579, state: "Gujarat" },

  // ── RAJASTHAN ────────────────────────────────────────────────────────────
  { name: "Jaipur",           lat: 26.9124, lng: 75.7873, state: "Rajasthan" },
  { name: "Jodhpur",          lat: 26.2389, lng: 73.0243, state: "Rajasthan" },
  { name: "Udaipur",          lat: 24.5854, lng: 73.7125, state: "Rajasthan" },
  { name: "Kota",             lat: 25.2138, lng: 75.8648, state: "Rajasthan" },
  { name: "Bikaner",          lat: 28.0229, lng: 73.3119, state: "Rajasthan" },
  { name: "Ajmer",            lat: 26.4499, lng: 74.6399, state: "Rajasthan" },
  { name: "Alwar",            lat: 27.5530, lng: 76.6346, state: "Rajasthan" },

  // ── UTTAR PRADESH ────────────────────────────────────────────────────────
  { name: "Lucknow",          lat: 26.8467, lng: 80.9462, state: "Uttar Pradesh" },
  { name: "Varanasi",         lat: 25.3176, lng: 82.9739, state: "Uttar Pradesh" },
  { name: "Agra",             lat: 27.1767, lng: 78.0081, state: "Uttar Pradesh" },
  { name: "Kanpur",           lat: 26.4499, lng: 80.3319, state: "Uttar Pradesh" },
  { name: "Allahabad",        lat: 25.4358, lng: 81.8463, state: "Uttar Pradesh" },
  { name: "Meerut",           lat: 28.9845, lng: 77.7064, state: "Uttar Pradesh" },
  { name: "Bareilly",         lat: 28.3670, lng: 79.4304, state: "Uttar Pradesh" },
  { name: "Aligarh",          lat: 27.8974, lng: 78.0880, state: "Uttar Pradesh" },
  { name: "Moradabad",        lat: 28.8386, lng: 78.7733, state: "Uttar Pradesh" },

  // ── WEST BENGAL ──────────────────────────────────────────────────────────
  { name: "Kolkata",          lat: 22.5726, lng: 88.3639, state: "West Bengal" },
  { name: "Howrah",           lat: 22.5958, lng: 88.2636, state: "West Bengal" },
  { name: "Durgapur",         lat: 23.4800, lng: 87.3119, state: "West Bengal" },
  { name: "Asansol",          lat: 23.6739, lng: 86.9524, state: "West Bengal" },
  { name: "Siliguri",         lat: 26.7271, lng: 88.3953, state: "West Bengal" },

  // ── MADHYA PRADESH ───────────────────────────────────────────────────────
  { name: "Bhopal",           lat: 23.2599, lng: 77.4126, state: "Madhya Pradesh" },
  { name: "Indore",           lat: 22.7196, lng: 75.8577, state: "Madhya Pradesh" },
  { name: "Jabalpur",         lat: 23.1815, lng: 79.9864, state: "Madhya Pradesh" },
  { name: "Gwalior",          lat: 26.2183, lng: 78.1828, state: "Madhya Pradesh" },
  { name: "Ujjain",           lat: 23.1765, lng: 75.7885, state: "Madhya Pradesh" },
  { name: "Sagar",            lat: 23.8388, lng: 78.7378, state: "Madhya Pradesh" },

  // ── KERALA ───────────────────────────────────────────────────────────────
  { name: "Kochi",            lat: 9.9312,  lng: 76.2673, state: "Kerala" },
  { name: "Thiruvananthapuram", lat: 8.5241, lng: 76.9366, state: "Kerala" },
  { name: "Kozhikode",        lat: 11.2588, lng: 75.7804, state: "Kerala" },
  { name: "Thrissur",         lat: 10.5276, lng: 76.2144, state: "Kerala" },
  { name: "Kollam",           lat: 8.8932,  lng: 76.6141, state: "Kerala" },
  { name: "Kannur",           lat: 11.8745, lng: 75.3704, state: "Kerala" },

  // ── PUNJAB / HARYANA ─────────────────────────────────────────────────────
  { name: "Chandigarh",       lat: 30.7333, lng: 76.7794, state: "Chandigarh" },
  { name: "Amritsar",         lat: 31.6340, lng: 74.8723, state: "Punjab" },
  { name: "Ludhiana",         lat: 30.9010, lng: 75.8573, state: "Punjab" },
  { name: "Jalandhar",        lat: 31.3260, lng: 75.5762, state: "Punjab" },
  { name: "Patiala",          lat: 30.3398, lng: 76.3869, state: "Punjab" },
  { name: "Ambala",           lat: 30.3782, lng: 76.7767, state: "Haryana" },
  { name: "Rohtak",           lat: 28.8955, lng: 76.6066, state: "Haryana" },

  // ── BIHAR / JHARKHAND ────────────────────────────────────────────────────
  { name: "Patna",            lat: 25.5941, lng: 85.1376, state: "Bihar" },
  { name: "Gaya",             lat: 24.7955, lng: 84.9994, state: "Bihar" },
  { name: "Muzaffarpur",      lat: 26.1209, lng: 85.3647, state: "Bihar" },
  { name: "Ranchi",           lat: 23.3441, lng: 85.3096, state: "Jharkhand" },
  { name: "Jamshedpur",       lat: 22.8046, lng: 86.2029, state: "Jharkhand" },
  { name: "Dhanbad",          lat: 23.7957, lng: 86.4304, state: "Jharkhand" },

  // ── ODISHA ───────────────────────────────────────────────────────────────
  { name: "Bhubaneswar",      lat: 20.2961, lng: 85.8245, state: "Odisha" },
  { name: "Cuttack",          lat: 20.4625, lng: 85.8830, state: "Odisha" },
  { name: "Rourkela",         lat: 22.2604, lng: 84.8536, state: "Odisha" },

  // ── ASSAM / NORTHEAST ────────────────────────────────────────────────────
  { name: "Guwahati",         lat: 26.1445, lng: 91.7362, state: "Assam" },
  { name: "Dibrugarh",        lat: 27.4728, lng: 94.9120, state: "Assam" },
  { name: "Silchar",          lat: 24.8333, lng: 92.7789, state: "Assam" },
  { name: "Imphal",           lat: 24.8170, lng: 93.9368, state: "Manipur" },
  { name: "Shillong",         lat: 25.5788, lng: 91.8933, state: "Meghalaya" },
  { name: "Agartala",         lat: 23.8315, lng: 91.2868, state: "Tripura" },

  // ── HIMACHAL / UTTARAKHAND ───────────────────────────────────────────────
  { name: "Shimla",           lat: 31.1048, lng: 77.1734, state: "Himachal Pradesh" },
  { name: "Dehradun",         lat: 30.3165, lng: 78.0322, state: "Uttarakhand" },
  { name: "Haridwar",         lat: 29.9457, lng: 78.1642, state: "Uttarakhand" },
  { name: "Rishikesh",        lat: 30.0869, lng: 78.2676, state: "Uttarakhand" },

  // ── GOA ──────────────────────────────────────────────────────────────────
  { name: "Panaji",           lat: 15.4909, lng: 73.8278, state: "Goa" },
  { name: "Margao",           lat: 15.2832, lng: 73.9862, state: "Goa" },

  // ── CHHATTISGARH ─────────────────────────────────────────────────────────
  { name: "Raipur",           lat: 21.2514, lng: 81.6296, state: "Chhattisgarh" },
  { name: "Bhilai",           lat: 21.2090, lng: 81.4285, state: "Chhattisgarh" },

  // ── JAMMU & KASHMIR ──────────────────────────────────────────────────────
  { name: "Srinagar",         lat: 34.0837, lng: 74.7973, state: "Jammu & Kashmir" },
  { name: "Jammu",            lat: 32.7266, lng: 74.8570, state: "Jammu & Kashmir" },
];
