import { useCallback } from "react";
import "./App.css";
import { Badge } from "./components";
import { Button } from "./components/Button";

function App() {
  const onClick = useCallback(() => {
    console.log("Vite + React + TypeScript + Tailwind = ❤️SOOK❤️");
  }, []);
  return (
    <div className="App">
      <Button onClick={onClick} text="버튼텍스트!" />
      <Button disabled onClick={onClick} text="DISABLED!" />
      <Badge text="SOOK BADGE" />
      <Badge color="#70a6f1" size="md" text="SOOK BADGE" />
      <Badge color="#fb56f8" size="lg" text="SOOK BADGE" />
    </div>
  );
}

export default App;
