import { Quote } from "lucide-react";

interface Testimonial {
    quote: string;
    author: string;
}

const testimonials: Testimonial[] = [
    {
        quote: "RightResponse wanted $150/month for my 3 locations. Free tools made my restaurant sound like a robot. I need something in between.",
        author: "Mike D., Italian Restaurant Owner",
    },
    {
        quote: "I tried BirdEye for 2 months. Spent more time learning their dashboard than responding to reviews. Way too complex.",
        author: "Sarah M., Dental Practice",
    },
];

export function SocialProof() {
    return (
        <section className="py-20 bg-section-gradient">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-foreground mb-4">
                        What Business Owners Are Saying
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Real feedback from businesses looking for a better
                        solutio
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <article
                            key={index}
                            className="p-8 bg-gray-200/30 rounded-lg hover:shadow-large h-full w-full transition-all duration-300"
                        >
                            <div className="space-y-4">
                                <Quote className="h-8 w-8 text-primary" />
                                <blockquote className="text-lg text-foreground leading-relaxed">
                                    "{testimonial.quote}"
                                </blockquote>
                                <cite className="text-muted-foreground font-secondary font-medium not-italic">
                                    {testimonial.author}
                                </cite>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
