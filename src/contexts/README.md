# Theme Context

This directory contains React contexts for managing global application state.

## ThemeContext

The `ThemeContext` provides theme management functionality across the entire application.

### Features:

- **Dark/Light Mode Toggle**: Switch between themes
- **Persistent Storage**: Saves theme preference to localStorage
- **System Preference Detection**: Automatically detects user's system theme preference
- **Global State Management**: Centralized theme state accessible from any component

### Usage:

```jsx
import { useTheme } from "../hooks/useTheme.js";

function MyComponent() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? "Switch to Light" : "Switch to Dark"}
    </button>
  );
}
```

### Available Values:

- `darkMode` (boolean): Current theme state
- `toggleDarkMode` (function): Toggle between themes
- `setDarkMode` (function): Directly set theme state

### Implementation:

The context is wrapped around the entire app in `main.jsx` and can be accessed from any component using the `useTheme` hook.
