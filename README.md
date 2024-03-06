# 🚀 Challenge Vue3: Build a E-commerce PWA

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

Your mission is to build a fully functional e-commerce Progressive Web App (PWA) using Vue.js 3, Quasar and Pinia for the frontend and json-server for the backend. The website should enable users to browse products, add them to a shopping cart, proceed to checkout, and complete purchases.

## Key Functionalities

### Product Catalog
Display a comprehensive catalog of products with detailed information including name, price, description, and images.

### Shopping Cart
Allow users to effortlessly manage their shopping cart, including adding, removing, and updating item quantities.

### Category Filtering
Implement category filtering to streamline product discovery for users.

### Product Search
Enable users to search for products by name or keywords for a seamless shopping experience.

## Technologies Used

- **Frontend:** Vue.js 3 with Quasar framework for powerful UI components.
- **State Management:** Utilize Pinia to manage application-wide state efficiently.
- **Backend:** Employ json-server to simulate a RESTful API with JSON data.
- **Containerization:** Docker for containerizing the application, ensuring easy deployment and scalability.
- **Version Control:** Embrace git flow for seamless collaboration and version control.

## Key Objectives

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
    "category_id": 2,
    "name": "Men's T-Shirt",
    "description": "Comfortable cotton t-shirt available in various colors.",
    "price": 19.99,
    "image": "mens-t-shirt.jpg"
    },
    {
    "id": 8,
    "category_id": 2,
    "name": "Women's Blouse",
    "description": "Stylish blouse for casual or formal occasions.",
    "price": 29.99,
    "image": "womens-blouse.jpg"
    },
    {
    "id": 9,
    "category_id": 2,
    "name": "Men's Jeans",
    "description": "Classic denim jeans for everyday wear.",
    "price": 49.99,
    "image": "mens-jeans.jpg"
    },
    {
    "id": 10,
    "category_id": 2,
    "name": "Women's Dress",
    "description": "Elegant dress for special occasions.",
    "price": 79.99,
    "image": "womens-dress.jpg"
    },
    {
    "id": 11,
    "category_id": 2,
    "name": "Men's Hoodie",
    "description": "Warm and cozy hoodie for chilly days.",
    "price": 39.99,
    "image": "mens-hoodie.jpg"
    },
    {
    "id": 12,
    "category_id": 2,
    "name": "Women's Skirt",
    "description": "Versatile skirt for creating stylish looks.",
    "price": 34.99,
    "image": "womens-skirt.jpg"
    },
    {
    "id": 13,
    "category_id": 3,
    "name": "Coffee Maker",
    "description": "Modern coffee maker for brewing delicious coffee.",
    "price": 79.99,
    "image": "coffee-maker.jpg"
    },
    {
    "id": 14,
    "category_id": 3,
    "name": "Toaster",
    "description": "Stylish toaster for perfectly toasted bread slices.",
    "price": 39.99,
    "image": "toaster.jpg"
    },
    {
    "id": 15,
    "category_id": 3,
    "name": "Blender",
    "description": "Powerful blender for making smoothies and shakes.",
    "price": 49.99,
    "image": "blender.jpg"
    },
    {
    "id": 16,
    "category_id": 3,
    "name": "Electric Kettle",
    "description": "Fast-boiling electric kettle for hot beverages.",
    "price": 29.99,
    "image": "electric-kettle.jpg"
    },
    {
    "id": 17,
    "category_id": 3,
    "name": "Cookware Set",
    "description": "Complete cookware set for versatile cooking.",
    "price": 149.99,
    "image": "cookware-set.jpg"
    },
    {
    "id": 18,
    "category_id": 3,
    "name": "Dining Set",
    "description": "Elegant dining set for stylish dining experiences.",
    "price": 99.99,
    "image": "dining-set.jpg"
    }
  ]
}
