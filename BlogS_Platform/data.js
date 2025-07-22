// data.js
let defaultBlogs = [
  {
    title: "Top 10 Indian Street Foods",
    description: "Explore the most loved street foods across India, from pani puri to pav bhaji.",
    author: "Ravi Kumar",
    publishedBy: "Foodie Nation",
    date: "2025-06-15",
    category: "Food",
    url: "https://example.com/indian-street-foods"
  },
  {
    title: "Healthy Breakfast Ideas",
    description: "Start your day with these easy and nutritious breakfast recipes.",
    author: "Anita Sharma",
    publishedBy: "Healthy Bites",
    date: "2025-07-01",
    category: "Food",
    url: "https://example.com/healthy-breakfast"
  },
  {
    title: "Exploring Himachal",
    description: "A guide to offbeat destinations in Himachal Pradesh.",
    author: "Amit Joshi",
    publishedBy: "Travel India",
    date: "2025-07-10",
    category: "Travelling",
    url: "https://example.com/himachal-guide"
  },
  {
    title: "European Backpacking Tips",
    description: "Tips for backpacking across Europe on a budget.",
    author: "Priya Verma",
    publishedBy: "Wanderer's Blog",
    date: "2025-05-20",
    category: "Travelling",
    url: "https://example.com/europe-backpack"
  },
  {
    title: "Latest Summer Fashion Trends",
    description: "What's trending in summer clothing for 2025?",
    author: "Kavya Kapoor",
    publishedBy: "StyleCheck",
    date: "2025-06-05",
    category: "Clothes",
    url: "https://example.com/summer-fashion"
  },
  {
    title: "How to Style Ethnic Wear",
    description: "Tips to mix and match ethnic and modern fashion.",
    author: "Rashmi Singh",
    publishedBy: "Desi Vogue",
    date: "2025-06-18",
    category: "Clothes",
    url: "https://example.com/ethnic-style"
  },
  {
    title: "Bungee Jumping in Rishikesh",
    description: "Experience the thrill of India's best bungee jumping location.",
    author: "Manav Mehta",
    publishedBy: "Adrenaline Zone",
    date: "2025-04-22",
    category: "Adventure",
    url: "https://example.com/rishikesh-bungee"
  },
  {
    title: "Solo Trekking to Kedarkantha",
    description: "My solo trekking experience and tips for beginners.",
    author: "Sanya Roy",
    publishedBy: "Mountain Diaries",
    date: "2025-03-30",
    category: "Adventure",
    url: "https://example.com/kedarkantha-trek"
  },
  {
    title: "Chaat Recipes You Must Try",
    description: "Delicious chaat recipes from different parts of India.",
    author: "Neha Agarwal",
    publishedBy: "Tasty Treats",
    date: "2025-06-25",
    category: "Food",
    url: "https://example.com/chaat-recipes"
  },
  {
    title: "5-Day Rajasthan Travel Plan",
    description: "Perfect itinerary to explore Jaipur, Jodhpur, and Udaipur.",
    author: "Aarav Saxena",
    publishedBy: "Incredible India",
    date: "2025-07-12",
    category: "Travelling",
    url: "https://example.com/rajasthan-itinerary"
  },
  {
    title: "Mix and Match Office Wear",
    description: "Style ideas for reusing and combining office clothes.",
    author: "Simran Kaur",
    publishedBy: "Corporate Chic",
    date: "2025-06-10",
    category: "Clothes",
    url: "https://example.com/office-style"
  },
  {
    title: "River Rafting in Manali",
    description: "Best time, tips, and safety checklist for rafting.",
    author: "Raj Patel",
    publishedBy: "Adventure Hub",
    date: "2025-05-18",
    category: "Adventure",
    url: "https://example.com/manali-rafting"
  },
  {
    title: "North-East Food Delights",
    description: "Explore hidden food gems of North-East India.",
    author: "Ankita Bora",
    publishedBy: "Culinary India",
    date: "2025-07-04",
    category: "Food",
    url: "https://example.com/northeast-food"
  },
  {
    title: "Backpacking Across South India",
    description: "Affordable and beautiful destinations in Tamil Nadu and Kerala.",
    author: "Rahul Nair",
    publishedBy: "Backpacker Life",
    date: "2025-06-28",
    category: "Travelling",
    url: "https://example.com/south-india-trip"
  },
  {
    title: "Rock Climbing in Hampi",
    description: "Everything you need to know for bouldering in Hampi.",
    author: "Megha Jain",
    publishedBy: "Adventure Tribe",
    date: "2025-07-15",
    category: "Adventure",
    url: "https://example.com/hampi-rock-climbing"
  }
];

// Merge localStorage blogs with default (if first time)
let savedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
if (savedBlogs.length === 0) {
  localStorage.setItem("blogs", JSON.stringify(defaultBlogs));
}
let blogData = JSON.parse(localStorage.getItem("blogs"));
