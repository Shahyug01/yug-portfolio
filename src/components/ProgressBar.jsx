import useScrollY from "../hooks/useScrollY.js";

export default function ProgressBar() {
  const scrollY = useScrollY();
  const docHeight =
    typeof document !== "undefined"
      ? document.documentElement.scrollHeight - window.innerHeight
      : 0;
  const pct = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;

  return <div className="progress-bar" style={{ width: `${pct}%` }} />;
}
