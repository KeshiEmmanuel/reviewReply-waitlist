import { BadgeDollarSign, ShieldCheck, Target, Zap } from "lucide-react";

interface Benefit {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const benefits: Benefit[] = [
    {
        icon: <BadgeDollarSign />,
        title: "No Per-Location Fees",
        description:
            "$39/month flat rate. Not $8+ per location like competitors. One price, unlimited locations.",
    },
    {
        icon: <Target />,
        title: "Sounds Like You, Not A Robot",
        description:
            "Industry-specific responses that match your business voice. Free tools sound generic.",
    },
    {
        icon: <Zap />,
        title: "2-Minute Setup",
        description:
            "No training, no sales calls, no complex dashboards. Start generating responses instantly.",
    },
    {
        icon: <ShieldCheck />,
        title: "Enterprise Quality, Indie Price",
        description:
            "Professional responses that cost $200+/month elsewhere. Without the complexity.",
    },
];

export function Benefits() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-foreground mb-4">
                        Why Small Businesses Choose ReviewReply
                    </h2>
                    <p className="text-xl font-secondary text-muted-foreground">
                        Enterprise quality without enterprise complexity or
                        pricing
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="p-6 bg-gray-100 rounded shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 group"
                        >
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-3">
                                {benefit.title}
                            </h3>
                            <p className="text-muted-foreground font-secondary leading-relaxed">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
