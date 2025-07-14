# 🗂️ Kanban-Do Board

[![Project Status: Complete](https://img.shields.io/badge/status-complete-success.svg)](https://github.com/shvbhi/kanban-board)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

This project is Day 14 of my **#30DaysOfVibeCoding** challenge.

---

### ✨ **Live Demo**

Organize your life with the live, deployed version of the application on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://demo.vercel.app)


---

![Kanban Board Screenshot](./public/Screenshot%202025-07-15%20013741.png)


## 📝 Project Description

A clean, modern, and highly functional Kanban-style task management board, inspired by applications like Trello. This project was built to explore and implement one of the most essential UI patterns in modern web development: drag-and-drop. Users can create tasks, organize them into columns ("To Do," "In Progress," "Done"), and seamlessly move them around to reflect their workflow.

### About the #30DaysOfVibeCoding Challenge

This project is an entry in my personal 30-day coding challenge. After encountering a major dependency issue with an older library, this project also became an exercise in adaptability, pivoting to a modern, actively maintained toolkit (`@dnd-kit`) to achieve the desired functionality.

## 🌟 Key Features

-   **Modern Drag-and-Drop:** Built with `@dnd-kit` for a smooth, accessible, and high-performance drag-and-drop experience.
-   **Persistent State:** Your board is automatically saved to your browser's `localStorage`. Refresh the page, and your tasks will be exactly where you left them.
-   **Dynamic Task Management:** Easily add new tasks to the "To Do" column and delete any task with a single click.
-   **Multi-Column Workflow:** Organize tasks across different stages of completion.
-   **Component-Based Architecture:** The app is cleanly structured into reusable components like `<Column>`, `<TaskCard>`, and `<Footer>`.
-   **Visually Appealing UI:** A sleek, dark-mode theme designed for clarity and focus.

## 💻 Tech Stack

-   **Frontend:** React.js, Vite
-   **Drag & Drop:** `@dnd-kit/core`, `@dnd-kit/sortable`
-   **Styling:** Pure CSS3 with Flexbox.
-   **Unique IDs:** `uuid` library.
-   **Icons:** `react-icons` for modern, clean SVG icons.
-   **Persistence:** Browser `localStorage` API.
-   **Deployment:** Vercel

## 🛠️ Getting Started Locally

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.
- `npm`
  ```sh
  npm install npm@latest -g
  ```

### Cloning the Repository

1.  Fork the project (click the "Fork" button in the top right of the GitHub page).
2.  Clone your forked repository:
    ```sh
    git clone https://github.com/shvbhii/kanban-board.git
    ```
    *(This URL should be correct based on your previous projects!)*

### Installation & Running

1.  Navigate to the project directory:
    ```sh
    cd kanban-board
    ```
2.  Install the NPM packages:
    ```sh
    npm install
    ```
3.  Run the development server:
    ```sh
    npm run dev
    ```
    The application will be available at `http://localhost:5173/` (or another port if 5173 is busy).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/shvbhi/kanban-board/issues).

1.  **Fork** the Project.
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the Branch (`git push origin feature/AmazingFeature`).
5.  Open a **Pull Request**.

## 👤 Creator & Contact

**Shubhi Sharma**

-   **LinkedIn:** [www.linkedin.com/in/shvbhi](https://www.linkedin.com/in/shvbhi)
-   **GitHub:** [@shvbhi](https://github.com/shvbhii)

## 📜 License

Distributed under the MIT License.