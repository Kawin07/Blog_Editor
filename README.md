
# 📝 React Blog Editor (Full Stack)

A full-stack blog editor application with a React frontend and Node.js/Express backend.

---

## 📦 Installation & Development

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/react-blog-editor.git
cd react-blog-editor
````

### 2. Install Dependencies

#### Client

```bash
cd client
npm install
```

#### Server

```bash
cd server
npm install
```

---

## 🚀 Running the Application

### Start the Development Servers

Open two terminals or use a process manager like [concurrently](https://www.npmjs.com/package/concurrently).

#### Terminal 1 – Client

```bash
cd client
npm run dev  # For Vite
# or
npm start    # For CRA (if you're using Create React App)
```

#### Terminal 2 – Server

```bash
cd server
npm start
```

* **Client runs on**: `http://localhost:5173` (Vite) or `http://localhost:3000` (CRA)
* **Server runs on**: `http://localhost:5000` (or whichever port you define)

---

## 🔁 Available Routes

| Frontend Path | Description       |
| ------------- | ----------------- |
| `/`           | Home (Hero)       |
| `/editor`     | Create a new blog |
| `/list`       | View all blogs    |
| `/contact`    | Contact page      |

| Backend Path            | Description       |
| ----------------------- | ----------------- |
| `GET /api/blogs`        | Fetch all blogs   |
| `POST /api/blogs`       | Create a new blog |
| `PUT /api/blogs/:id`    | Update a blog     |
| `DELETE /api/blogs/:id` | Delete a blog     |

---

## 🖼️ UI Features

* Responsive navbar & footer with `react-router-dom`
* Hero section with background image
* Blog editor with draft/publish support

---

## 🔐 Environment Variables

Create a `.env` file in the **server** folder for backend configuration (e.g. port, DB URI, etc.)

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

---

## 🙌 Contribution

Pull requests are welcome. For major changes, open an issue first to discuss what you'd like to change.

---

Made with ❤️ by \[Your Name]

```

---

Let me know if you want to:
- Add deployment instructions (e.g., Vercel + Render)
- Set up environment files
- Use `concurrently` to run both servers with one command (`npm run dev` from the root)

I can generate those scripts for you too.
```
