// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

export function App() {
  const title = import.meta.env.VITE_APP_TITLE;
  return (
    <div>
      <p className={styles.title}>
        Hello: <strong>{title}</strong>
      </p>
    </div>
  );
}

export default App;
