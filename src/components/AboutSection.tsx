import mayaraPortrait from "@/assets/mayara-portrait.png";

const AboutSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-2/5 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-gold to-gold-light opacity-30 blur-sm" />
            <img
              src={mayaraPortrait}
              alt="Dra. Mayara Tavares"
              className="relative rounded-2xl w-72 md:w-80 object-cover shadow-elegant"
              loading="lazy"
            />
          </div>
        </div>

        <div className="w-full md:w-3/5">
          <p className="font-body text-accent uppercase tracking-widest text-sm mb-3 font-bold">
            Quem conduz o workshop
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Dra. Mayara Tavares
          </h2>
          <p className="font-body text-foreground/80 text-lg leading-relaxed mb-4">
            Psicóloga clínica especialista em relacionamentos e casais.
            Com uma abordagem sensível, acolhedora e assertiva, Mayara já ajudou
            centenas de pessoas a transformarem seus relacionamentos.
          </p>
          <p className="font-body text-foreground/80 text-lg leading-relaxed mb-4">
            Sua metodologia combina sólida formação teórica com experiência
            prática, usando ferramentas que geram resultados reais e imediatos
            na vida dos casais.
          </p>
          <p className="font-body text-foreground/80 text-lg leading-relaxed">
            Criadora do workshop <strong>"O Casamento que dá certo"</strong>,
            que já transformou a história de inúmeros casais pelo Brasil.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
