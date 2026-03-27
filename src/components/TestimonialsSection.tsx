import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Lauany Martins",
    text: "Comecei meu tratamento com a Mayara em agosto/25 e hoje já percebo diversas melhoras na minha ansiedade e sintomas depressivos. Ela é muito plural e flexível, usa a teoria de maneira assertiva para que faça sentido na prática, é muito atenciosa e compreensiva. Ela tem um cuidado admirável com o trabalho dela e com as palavras, sempre acolhendo. Sou muito grata por tê-la encontrado!",
  },
  {
    name: "Luis Beltran",
    text: "Profissional extremamente competente, que tem contribuído significativamente para o meu progresso. Atendimento impecável e serviço excepcional.",
  },
  {
    name: "Pedro Ulsen",
    text: "Mayara é uma excelente profissional!!! Sensível, acolhedora, equilibrada, atualizada, cirúrgica, inteligente e propositiva. Altamente preparada, segura e completa. Combina sólida formação com experiência prática. Altamente ética, coerente e competente. Sutil nas palavras, precisa nos insights. Recomendo!",
  },
  {
    name: "Aline Brandão",
    text: "Uma profissional competente e comprometida. Tem o conhecimento e a dedicação necessários para ajudar seus pacientes de maneira eficaz. É firme e doce, cria um ambiente seguro e acolhedor, onde nos sentimos à vontade para se abrir e explorar nossas emoções e sentimentos.",
  },
  {
    name: "Guilherme Pereira",
    text: "Excelente profissional, te ajuda se auto reconhecer, fazendo com que você melhore dia após dia. Recomendo.",
  },
  {
    name: "Emilia Bilionaria",
    text: "A doutora Mayara é uma profissional excepcional! Sempre muito atenciosa, pontual e dedicada, transmite confiança e acolhimento em cada sessão. Além de toda sua competência técnica, ela tem uma abordagem humana e cuidadosa, o que faz toda a diferença no processo terapêutico. Com certeza, recomendo!",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-warm">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          O que dizem sobre a Dra. Mayara
        </h2>
        <p className="font-body text-muted-foreground text-center mb-12 text-lg">
          Avaliações reais de pacientes no Google
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card rounded-xl p-6 shadow-warm flex flex-col"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-accent text-accent"
                  />
                ))}
              </div>
              <p className="font-body text-foreground/80 text-sm leading-relaxed flex-1 mb-4">
                "{t.text}"
              </p>
              <p className="font-body font-bold text-foreground text-sm">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
