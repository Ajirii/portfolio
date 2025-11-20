import { ArrowUp, Github, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 relative mt-12 pt-8 flex flex-wrap justify-between items-center">
      {" "}
      <div className="space-y-2">
        <div className="flex space-x-4 justify-center">
          <a href="https://github.com/Ajirii" target="_blank">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/lpham00/" target="_blank">
            <Linkedin />
          </a>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">
            {" "}
            &copy; {new Date().getFullYear()} Lynn Pham
          </p>
        </div>
      </div>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
