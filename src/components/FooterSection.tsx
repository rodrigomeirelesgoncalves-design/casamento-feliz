const FooterSection = () => {
  return (
    <footer className="py-10 px-4 bg-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-display text-primary-foreground text-lg mb-2">
          O Casamento que dá certo
        </p>
        <p className="font-body text-primary-foreground/50 text-sm mb-4">
          Um workshop da Dra. Mayara Tavares
        </p>
        <p className="font-body text-primary-foreground/40 text-xs">
          © {new Date().getFullYear()} Mayara Tavares Psicologia. Todos os
          direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
