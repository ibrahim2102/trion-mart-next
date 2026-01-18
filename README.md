# Trion Mart

A modern e-commerce dashboard built with **Next.js 15/16 (App Router)**, **NextAuth Google login**, and **MongoDB**.  
This project allows users to manage products, view details, and includes authentication with Google.

Live Link: https://trion-mart.vercel.app

## 📖 Project Description

Trion Mart is a simple online product management dashboard.  
It features authentication via Google, dynamic product pages, and an admin dashboard for creating, editing, and viewing products.

---

## ⚙️ Setup & Installation

1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/trion-mart.git
cd trion-mart

2. Install dependencies

npm install

3. Run the development server

npm run dev

4. Route Summary:
Route	Description	Access
/	Landing / Home page	Public
/login	Google authentication page	Public
/dashboard	Admin dashboard	Protected
/dashboard/products	View all products	Protected
/dashboard/products/new	Create a new product	Protected
/products/[id]	View product details	Public


Implemented Features:

1.Google Login (NextAuth)

2.Protected Dashboard

3.CRUD for Products

4.Create new product

5.View all products

6.View product details

7.Dynamic product pages

8.Responsive UI with Tailwind CSS

9.MongoDB integration for persistent data

10.Middleware to protect routes

11.Server components with dynamic rendering
