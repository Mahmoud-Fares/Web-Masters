# Product Cart App

A feature-rich, accessible, and responsive e-commerce Single Page Application (SPA) built with vanilla JavaScript and TailwindCSS.

## 🌟 Key Features

### 🔐 Authentication & User Management

-  Secure user registration and login system
-  Persistent sessions using localStorage
-  Protected routes with automatic redirects
-  User-specific shopping carts
-  Seamless logout functionality

### 🛍️ Shopping Experience

-  Responsive product grid with beautiful hover effects
-  Detailed product cards with images, descriptions, and pricing
-  Real-time cart management
-  Add/Remove products with visual feedback
-  Quantity controls in cart
-  Persistent shopping cart per user
-  Total price calculation

### 🎨 Modern UI/UX

-  Clean and intuitive interface
-  Smooth animations and transitions
-  Responsive design for all screen sizes
-  Interactive hover states
-  Toast notifications for user actions

### ♿ Accessibility Features

-  ARIA labels and roles throughout
-  Semantic HTML structure
-  Keyboard navigation support
-  Screen reader friendly
-  Status announcements
-  Focus management

### 🔧 Technical Implementation

#### State Management

-  Efficient localStorage-based state management
-  User-specific data persistence
-  Real-time UI updates

#### Routing

-  Hash-based routing system
-  Protected route handling
-  Smooth page transitions
-  No page refreshes needed

#### Components

1. **Toast System**

   -  Multiple notification types (success, error, info, warning)
   -  Auto-dismissing notifications
   -  Stacked notification support
   -  Animated entrance/exit

2. **Shopping Cart**

   -  Real-time updates
   -  Quantity management
   -  Remove items
   -  Total calculation
   -  Persistent across sessions

3. **Product Catalog**

   -  Grid layout
   -  Responsive images
   -  Interactive cards
   -  Cart status integration

4. **Authentication Forms**

   -  Input validation
   -  Error handling
   -  Automatic redirects
   -  Security checks

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/Mahmoud-Fares/Web-Masters.git
cd .\Cycle3\Task1
```

2. Install dependencies:

```bash
npm install
```

3. Start TailwindCSS build process:

```bash
npm run css-build
```

4. Open `index.html` in your browser or use a local server:

```bash
npx serve
```

## 🛠️ Technologies Used

-  **Vanilla JavaScript (ES6+)**
   -  Custom SPA Router
   -  DOM Manipulation
   -  Event Handling
   -  Local Storage Management
-  **TailwindCSS**
   -  Utility-First Approach
   -  Responsive Design
-  **Modern Web Features**
   -  CSS Grid & Flexbox
   -  CSS Transitions & Animations
   -  Local Storage API
   -  ES6+ Features

## 📦 Project Structure

```
Cycle3/Task1/
├── scripts/
│   ├── app.js        # Application entry & routing
│   ├── auth.js       # Authentication logic
│   ├── cart.js       # Shopping cart functionality
│   ├── products.js   # Product management
│   └── toast.js      # Notification system
├── styles/
│   └── output.css    # Compiled TailwindCSS
├── index.html        # Main HTML file
└── README.md         # Documentation
```
