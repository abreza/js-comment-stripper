# js-comment-remover

🧹 A React component that efficiently removes comments from JavaScript code while preserving string literals and URLs. Perfect for code cleaning and documentation stripping.

![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)

## Features

- ✨ Removes single-line comments (//)
- 📚 Strips multi-line comments (/* */)
- 📝 Cleans JSDoc comments (/** */)
- 🔗 Preserves URLs and string literals
- 💻 User-friendly interface
- 📋 One-click copy to clipboard

## Installation

```bash
# Clone the repository
git clone https://github.com/your-username/js-comment-remover.git

# Navigate to the project directory
cd js-comment-remover

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Usage

```jsx
import { CommentRemover } from 'js-comment-remover';

function App() {
  return (
    <div>
      <CommentRemover />
    </div>
  );
}
```
