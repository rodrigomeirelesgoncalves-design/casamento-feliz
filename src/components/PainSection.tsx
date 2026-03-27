import { Heart, MessageCircleX, ShieldOff, Frown } from "lucide-react";

const pains = [
  {
    icon: MessageCircleX,
    text: "Sente que vocês não se comunicam mais como antes?",
  },
  {
    icon: ShieldOff,
    text: "A confiança foi abalada e você não sabe como reconstruir?",
  },
  {
    icon: Frown,
    text: "Vive uma rotina fria e distante, sem conexão emocional?",
  },
  {
    icon: Heart,
    text: "Quer salvar seu casamento mas não sabe por onde começar?",
  },
];

const PainSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-warm">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Você se identifica?
        </h2>
        <p className="font-body text-muted-foreground mb-12 text-lg">
          Se pelo menos uma dessas situações descreve o que você vive hoje, esse
          workshop foi feito para você.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pains.map((pain, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-card p-6 rounded-xl shadow-warm text-left"
            >
              <pain.icon className="w-8 h-8 text-primary shrink-0 mt-1" />
              <p className="font-body text-foreground text-lg">{pain.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainSection;
