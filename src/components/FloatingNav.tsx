import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "§ 0.1" },
  { id: "experience", label: "§ 1" },
  { id: "skills", label: "§ 2" },
  { id: "education", label: "§ 3" },
  { id: "contact", label: "QED" },
];

const FloatingNav = () => {
  const [current, setCurrent] = useState("§ 0.1");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollY) {
          setCurrent(sections[i].label);
          return;
        }
      }
      setCurrent("§ 0.1");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-6 right-6 z-50 font-mono-math text-xs text-muted-foreground bg-background/80 backdrop-blur-sm px-3 py-1.5 border border-border rounded-sm hidden md:block">
      {current}
    </div>
  );
};

export default FloatingNav;
