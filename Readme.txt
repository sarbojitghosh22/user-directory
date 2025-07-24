# User Directory Dashboard (Angular 19)

This project is a user directory dashboard built with Angular 19 using **standalone components**, **Angular Router**, and **HttpClient** for API integration. It consumes data from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users) and demonstrates routing, component-based architecture, and clean UI using Bootstrap icons.

---

## 🚀 Setup & Run Instructions

1. Clone the Repository

```bash
git clone https://github.com/your-username/user-directory-dashboard.git
cd user-directory-dashboard

2. Install Dependencies

Make sure you have Node.js v18+ and Angular CLI v16+ installed.

npm install

3. Run the Development Server

ng serve

Visit http://localhost:4200/ in your browser to view the app.


Project Structure

src/
  ├── app/
  │   ├── components/
  │   │   ├── header/
  │   │   ├── main-layout/
  │   │   ├── user-list/
  │   │   └── user-detail/
  │   ├── services/
  │   │   └── user.service.ts
  │   ├── shared/
  │   │   └── shared-imports.ts
  │   ├── app.routes.ts
  │   └── main.ts

Notes

    Angular 19 with standalone components is used to avoid reliance on NgModules. This promotes modularity and better tree-shaking.

    shared-imports.ts is used to prevent repetition of common Angular modules across components.

    The app uses JSONPlaceholder as the API for demo purposes.

    Basic Bootstrap icons are used for UI elements like back buttons.

    No third-party state management (e.g., NgRx) is used as the app is simple and manageable with local component state.
