import mayaraWorking from "@/assets/mayara-working.png";

const CHECKOUT_URL = "https://pay.kiwify.com.br/ZyI6S1d";

const CTASection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <img
            src={mayaraWorking}
            alt="Dra. Mayara Tavares trabalhando"
            className="rounded-2xl shadow-elegant w-full object-cover"
            loading="lazy"
            width={1280}
            height={720}
          />
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Não espere a crise chegar para agir
          </h2>
          <p className="font-body text-foreground/80 text-lg leading-relaxed mb-8">
            Cada dia sem ação é um dia a mais de distância entre vocês.
            O workshop <strong>"O Casamento que dá certo"</strong> te dá as
            ferramentas para transformar seu relacionamento agora.
          </p>

          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-burgundy text-primary-foreground font-body font-bold text-lg px-10 py-5 rounded-lg shadow-warm hover:scale-105 transition-transform duration-300"
          >
            QUERO TRANSFORMAR MEU CASAMENTO
          </a>

          <p className="text-muted-foreground text-sm mt-4 font-body">
            🔒 Compra 100% segura · Satisfação garantida
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
