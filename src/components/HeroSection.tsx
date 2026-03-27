import heroBg from "@/assets/hero-couple.jpg";

const CHECKOUT_URL = "https://pay.kiwify.com.br/ZyI6S1d";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Casal feliz ao pôr do sol"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <img
          src={logo}
          alt="O Casamento que dá certo"
          className="mx-auto mb-8 w-64 md:w-80"
          loading="eager"
        />

        <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
          Transforme seu casamento em uma história de{" "}
          <span className="text-gradient-gold">amor verdadeiro</span>
        </h1>

        <p className="font-body text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          O workshop que já reconectou centenas de casais que estavam frios e
          distantes. Descubra como construir um casamento forte, feliz e
          duradouro.
        </p>

        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-burgundy text-primary-foreground font-body font-bold text-lg px-10 py-5 rounded-lg shadow-warm hover:scale-105 transition-transform duration-300"
        >
          QUERO PARTICIPAR DO WORKSHOP
        </a>

        <p className="text-primary-foreground/60 text-sm mt-4 font-body">
          Vagas limitadas · Acesso imediato
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
