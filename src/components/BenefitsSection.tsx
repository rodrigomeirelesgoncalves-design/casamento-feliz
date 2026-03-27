import { Check } from "lucide-react";

const benefits = [
  "Técnicas práticas de comunicação para casais",
  "Como reconectar a intimidade emocional e física",
  "Ferramentas para resolver conflitos sem brigas",
  "Estratégias para reconstruir a confiança",
  "Exercícios práticos para aplicar no mesmo dia",
  "Suporte de uma profissional experiente em relacionamentos",
];

const CHECKOUT_URL = "https://pay.kiwify.com.br/ZyI6S1d";

const BenefitsSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          O que você vai aprender
        </h2>
        <p className="font-body text-muted-foreground text-center mb-12 text-lg max-w-2xl mx-auto">
          Um workshop completo com ferramentas que você pode aplicar
          imediatamente no seu relacionamento.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {benefits.map((benefit, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <p className="font-body text-foreground text-lg">{benefit}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-burgundy text-primary-foreground font-body font-bold text-lg px-10 py-5 rounded-lg shadow-warm hover:scale-105 transition-transform duration-300"
          >
            GARANTIR MINHA VAGA AGORA
          </a>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
