# 🚀 Challenge Vue3: Build a E-commerce Website

<!-- tocstop -->

## Test the application

Clone the repository:

```
git clone https://github.com/netosts/vue-cart.git
```

Navigate to the repository's folder:

```
cd vue-cart
```

Run docker-compose (ensure Docker is installed and running on your machine):

```
docker-compose up -d
```

Done! You can now access: [http://localhost:8080](http://localhost:8080)

## Challenge Overview

Your mission is to build a fully functional e-commerce website using Vue.js 3 for the frontend and json-server for the backend. The website should enable users to browse products, add them to a shopping cart, proceed to checkout, and complete purchases.

## Key Functionalities

### Product Catalog
Display a comprehensive catalog of products with detailed information including name, price, description, and images.

### Shopping Cart
Allow users to effortlessly manage their shopping cart, including adding, removing, and updating item quantities.

### Category Filtering
Implement category filtering to streamline product discovery for users.

### Product Search
Enable users to search for products by name or keywords for a seamless shopping experience.

## Tecnologias Utilizadas

- **Frontend:** Vue.js 3 with Quasar framework for powerful UI components.
- **State Management:** Utilize Pinia to manage application-wide state efficiently.
- **Backend:** Employ json-server to simulate a RESTful API with JSON data.
- **Containerization:** Docker for containerizing the application, ensuring easy deployment and scalability.
- **Version Control:** Embrace git flow for seamless collaboration and version control.

## Principais Objetivos

1. **Application Development:** Develop a fully functional e-commerce website using Vue.js 3, Pinia, and Quasar, allowing users to browse products, add them to a shopping cart, and complete purchases seamlessly.

2. **Version Control:** Follow best practices for coding, project organization, and version control using git flow to ensure smooth collaboration and version management.

3. **Containerization:** Explore containerization using Docker to package the application and its dependencies, simplifying deployment and ensuring consistent environments across different platforms.

4. **Docker Compose:** Create a Docker Compose configuration to orchestrate the application's containers, including the frontend, backend, and any other necessary services, streamlining development and deployment processes.

## JSON Structure for Categories and Products

```json
json-server -w db.json
{
  "categories": [
    { 
      "id": 1, 
      "name": "Electronics" 
    },
    { 
      "id": 2, 
      "name": "Clothing" 
    },
    { 
      "id": 3, 
      "name": "Home & Kitchen" 
    },
    { 
      "id": 4, 
      "name": "Sports & Outdoors" 
    },
    { 
      "id": 5, 
      "name": "Beauty & Personal Care" 
    },
    { 
      "id": 6, 
      "name": "Books & Media" 
    }
  ],
  "products": [
    {
    "id": 1,
    "category_id": 1,
    "name": "Smartphone",
    "description": "High-performance smartphone with advanced features.",
    "price": 599.99,
    "image": "smartphone.jpg"
  },
  {
    "id": 2,
    "category_id": 1,
    "name": "Laptop",
    "description": "Powerful laptop for work and entertainment.",
    "price": 1299.99,
    "image": "laptop.jpg"
  },
  {
    "id": 3,
    "category_id": 1,
    "name": "Tablet",
    "description": "Portable tablet with a stunning display for multimedia consumption.",
    "price": 399.99,
    "image": "tablet.jpg"
  },
  {
    "id": 4,
    "category_id": 1,
    "name": "Smartwatch",
    "description": "Sleek smartwatch with fitness tracking and notifications.",
    "price": 199.99,
    "image": "smartwatch.jpg"
  },
  {
    "id": 5,
    "category_id": 1,
    "name": "Wireless Headphones",
    "description": "Premium wireless headphones for immersive audio experience.",
    "price": 149.99,
    "image": "headphones.jpg"
  },
  {
    "id": 6,
    "category_id": 1,
    "name": "Gaming Console",
    "description": "Next-gen gaming console for hours of entertainment.",
    "price": 499.99,
    "image": "gaming-console.jpg"
  },
  {
    "id": 7,
    "category_id": 1,
    "name": "Camera",
    "description": "High-resolution camera for capturing life's moments in stunning detail.",
    "price": 799.99,
    "image": "camera.jpg"
  },
  {
    "id": 8,
    "category_id": 1,
    "name": "Drone",
    "description": "Advanced drone with HD camera for aerial photography and videography.",
    "price": 999.99,
    "image": "drone.jpg"
  },
  {
    "id": 9,
    "category_id": 1,
    "name": "Portable Speaker",
    "description": "Compact portable speaker for on-the-go music enjoyment.",
    "price": 79.99,
    "image": "speaker.jpg"
  },
  {
    "id": 10,
    "category_id": 1,
    "name": "External Hard Drive",
    "description": "High-capacity external hard drive for secure data storage.",
    "price": 129.99,
    "image": "hard-drive.jpg"
  }
  {
    "id": 11,
    "category_id": 2,
    "name": "Men's T-Shirt",
    "description": "Comfortable cotton t-shirt available in various colors.",
    "price": 19.99,
    "image": "mens-t-shirt.jpg"
  },
  {
    "id": 12,
    "category_id": 2,
    "name": "Women's Blouse",
    "description": "Stylish blouse for casual or formal occasions.",
    "price": 29.99,
    "image": "womens-blouse.jpg"
  },
  {
    "id": 13,
    "category_id": 2,
    "name": "Men's Jeans",
    "description": "Classic denim jeans for everyday wear.",
    "price": 49.99,
    "image": "mens-jeans.jpg"
  },
  {
    "id": 14,
    "category_id": 2,
    "name": "Women's Dress",
    "description": "Elegant dress for special occasions.",
    "price": 79.99,
    "image": "womens-dress.jpg"
  },
  {
    "id": 15,
    "category_id": 2,
    "name": "Men's Hoodie",
    "description": "Warm and cozy hoodie for chilly days.",
    "price": 39.99,
    "image": "mens-hoodie.jpg"
  },
  {
    "id": 16,
    "category_id": 2,
    "name": "Women's Skirt",
    "description": "Versatile skirt for creating stylish looks.",
    "price": 34.99,
    "image": "womens-skirt.jpg"
  },
  {
    "id": 17,
    "category_id": 2,
    "name": "Men's Shorts",
    "description": "Comfortable shorts for outdoor activities.",
    "price": 24.99,
    "image": "mens-shorts.jpg"
  },
  {
    "id": 18,
    "category_id": 2,
    "name": "Women's Leggings",
    "description": "Stretchy leggings for workouts or casual wear.",
    "price": 29.99,
    "image": "womens-leggings.jpg"
  },
  {
    "id": 19,
    "category_id": 2,
    "name": "Men's Polo Shirt",
    "description": "Classic polo shirt for a timeless look.",
    "price": 29.99,
    "image": "mens-polo-shirt.jpg"
  },
  {
    "id": 20,
    "category_id": 2,
    "name": "Women's Cardigan",
    "description": "Cozy cardigan for layering in colder weather.",
    "price": 49.99,
    "image": "womens-cardigan.jpg"
  }
  {
    "id": 21,
    "category_id": 3,
    "name": "Coffee Maker",
    "description": "Modern coffee maker for brewing delicious coffee.",
    "price": 79.99,
    "image": "coffee-maker.jpg"
  },
  {
    "id": 22,
    "category_id": 3,
    "name": "Toaster",
    "description": "Stylish toaster for perfectly toasted bread slices.",
    "price": 39.99,
    "image": "toaster.jpg"
  },
  {
    "id": 23,
    "category_id": 3,
    "name": "Blender",
    "description": "Powerful blender for making smoothies and shakes.",
    "price": 49.99,
    "image": "blender.jpg"
  },
  {
    "id": 24,
    "category_id": 3,
    "name": "Electric Kettle",
    "description": "Fast-boiling electric kettle for hot beverages.",
    "price": 29.99,
    "image": "electric-kettle.jpg"
  },
  {
    "id": 25,
    "category_id": 3,
    "name": "Cookware Set",
    "description": "Complete cookware set for versatile cooking.",
    "price": 149.99,
    "image": "cookware-set.jpg"
  },
  {
    "id": 26,
    "category_id": 3,
    "name": "Dining Set",
    "description": "Elegant dining set for stylish dining experiences.",
    "price": 99.99,
    "image": "dining-set.jpg"
  },
  {
    "id": 27,
    "category_id": 3,
    "name": "Air Fryer",
    "description": "Healthy air fryer for crispy and delicious meals.",
    "price": 89.99,
    "image": "air-fryer.jpg"
  },
  {
    "id": 28,
    "category_id": 3,
    "name": "Pressure Cooker",
    "description": "Efficient pressure cooker for fast and flavorful cooking.",
    "price": 69.99,
    "image": "pressure-cooker.jpg"
  },
  {
    "id": 29,
    "category_id": 3,
    "name": "Kitchen Scale",
    "description": "Accurate kitchen scale for precise measurements.",
    "price": 19.99,
    "image": "kitchen-scale.jpg"
  },
  {
    "id": 30,
    "category_id": 3,
    "name": "Food Processor",
    "description": "Versatile food processor for chopping, slicing, and shredding.",
    "price": 99.99,
    "image": "food-processor.jpg"
  }
  {
    "id": 31,
    "category_id": 4,
    "name": "Tent",
    "description": "Spacious tent for outdoor camping adventures.",
    "price": 199.99,
    "image": "tent.jpg"
  },
  {
    "id": 32,
    "category_id": 4,
    "name": "Sleeping Bag",
    "description": "Warm and cozy sleeping bag for camping trips.",
    "price": 59.99,
    "image": "sleeping-bag.jpg"
  },
  {
    "id": 33,
    "category_id": 4,
    "name": "Hiking Backpack",
    "description": "Durable hiking backpack for outdoor excursions.",
    "price": 89.99,
    "image": "hiking-backpack.jpg"
  },
  {
    "id": 34,
    "category_id": 4,
    "name": "Camping Stove",
    "description": "Portable camping stove for cooking meals outdoors.",
    "price": 49.99,
    "image": "camping-stove.jpg"
  },
  {
    "id": 35,
    "category_id": 4,
    "name": "Outdoor Chair",
    "description": "Foldable outdoor chair for relaxing in nature.",
    "price": 29.99,
    "image": "outdoor-chair.jpg"
  },
  {
    "id": 36,
    "category_id": 4,
    "name": "Trekking Poles",
    "description": "Sturdy trekking poles for stability on hiking trails.",
    "price": 39.99,
    "image": "trekking-poles.jpg"
  },
  {
    "id": 37,
    "category_id": 4,
    "name": "Camping Lantern",
    "description": "Bright camping lantern for illumination at night.",
    "price": 24.99,
    "image": "camping-lantern.jpg"
  },
  {
    "id": 38,
    "category_id": 4,
    "name": "Fishing Rod",
    "description": "Quality fishing rod for angling adventures.",
    "price": 79.99,
    "image": "fishing-rod.jpg"
  },
  {
    "id": 39,
    "category_id": 4,
    "name": "Bike Helmet",
    "description": "Protective bike helmet for safe cycling.",
    "price": 49.99,
    "image": "bike-helmet.jpg"
  },
  {
    "id": 40,
    "category_id": 4,
    "name": "Running Shoes",
    "description": "Comfortable running shoes for workouts or outdoor runs.",
    "price": 99.99,
    "image": "running-shoes.jpg"
  }
  {
    "id": 41,
    "category_id": 5,
    "name": "Skincare Set",
    "description": "Complete skincare set for radiant and healthy skin.",
    "price": 59.99,
    "image": "skincare-set.jpg"
  },
  {
    "id": 42,
    "category_id": 5,
    "name": "Makeup Palette",
    "description": "Versatile makeup palette with a range of shades for various looks.",
    "price": 39.99,
    "image": "makeup-palette.jpg"
  },
  {
    "id": 43,
    "category_id": 5,
    "name": "Hair Dryer",
    "description": "Professional hair dryer for fast and efficient hair styling.",
    "price": 69.99,
    "image": "hair-dryer.jpg"
  },
  {
    "id": 44,
    "category_id": 5,
    "name": "Facial Cleanser",
    "description": "Gentle facial cleanser for removing impurities and makeup.",
    "price": 19.99,
    "image": "facial-cleanser.jpg"
  },
  {
    "id": 45,
    "category_id": 5,
    "name": "Perfume",
    "description": "Luxurious perfume with a captivating fragrance.",
    "price": 79.99,
    "image": "perfume.jpg"
  },
  {
    "id": 46,
    "category_id": 5,
    "name": "Shaving Kit",
    "description": "Complete shaving kit for a smooth and comfortable shave.",
    "price": 49.99,
    "image": "shaving-kit.jpg"
  },
  {
    "id": 47,
    "category_id": 5,
    "name": "Nail Polish Set",
    "description": "Assortment of nail polish colors for manicures and pedicures.",
    "price": 29.99,
    "image": "nail-polish-set.jpg"
  },
  {
    "id": 48,
    "category_id": 5,
    "name": "Body Lotion",
    "description": "Hydrating body lotion for soft and smooth skin.",
    "price": 14.99,
    "image": "body-lotion.jpg"
  },
  {
    "id": 49,
    "category_id": 5,
    "name": "Face Mask",
    "description": "Revitalizing face mask for a spa-like experience at home.",
    "price": 9.99,
    "image": "face-mask.jpg"
  },
  {
    "id": 50,
    "category_id": 5,
    "name": "Electric Toothbrush",
    "description": "Advanced electric toothbrush for effective oral care.",
    "price": 39.99,
    "image": "electric-toothbrush.jpg"
  }
  {
    "id": 51,
    "category_id": 6,
    "name": "Bestselling Novel",
    "description": "Captivating novel by a renowned author.",
    "price": 14.99,
    "image": "novel.jpg"
  },
  {
    "id": 52,
    "category_id": 6,
    "name": "Action Movie DVD",
    "description": "Exciting action-packed movie for entertainment at home.",
    "price": 19.99,
    "image": "action-movie-dvd.jpg"
  },
  {
    "id": 53,
    "category_id": 6,
    "name": "Cookbook",
    "description": "Collection of delicious recipes for culinary inspiration.",
    "price": 24.99,
    "image": "cookbook.jpg"
  },
  {
    "id": 54,
    "category_id": 6,
    "name": "Music Album CD",
    "description": "Chart-topping music album for listening pleasure.",
    "price": 12.99,
    "image": "music-album-cd.jpg"
  },
  {
    "id": 55,
    "category_id": 6,
    "name": "Documentary DVD",
    "description": "Informative documentary film for learning and exploration.",
    "price": 17.99,
    "image": "documentary-dvd.jpg"
  },
  {
    "id": 56,
    "category_id": 6,
    "name": "Self-Help Book",
    "description": "Empowering self-help book for personal development.",
    "price": 9.99,
    "image": "self-help-book.jpg"
  },
  {
    "id": 57,
    "category_id": 6,
    "name": "Travel Guide",
    "description": "Comprehensive travel guide for planning memorable trips.",
    "price": 29.99,
    "image": "travel-guide.jpg"
  },
  {
    "id": 58,
    "category_id": 6,
    "name": "Biography",
    "description": "Inspiring biography of a remarkable individual.",
    "price": 16.99,
    "image": "biography.jpg"
  },
  {
    "id": 59,
    "category_id": 6,
    "name": "Art Book",
    "description": "Beautifully illustrated art book showcasing renowned artists.",
    "price": 34.99,
    "image": "art-book.jpg"
  },
  {
    "id": 60,
    "category_id": 6,
    "name": "Educational DVD Set",
    "description": "Educational DVD set covering various subjects for learning.",
    "price": 39.99,
    "image": "educational-dvd-set.jpg"
  }
  ]
}
