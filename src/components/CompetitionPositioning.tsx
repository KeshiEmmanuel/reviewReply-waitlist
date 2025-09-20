import { CheckCircle2, X } from "lucide-react";

interface ComparisonItem {
    label: string;
    problems: string[];
    solutions: string[];
}

const comparisons: ComparisonItem[] = [
    {
        label: "Enterprise Tools (BirdEye, Podium)",
        problems: [
            "$200+/month",
            "Weeks of training",
            "Features you'll never use",
        ],
        solutions: [
            "$39/month flat",
            "2-minute setup",
            "One tool, perfect execution",
        ],
    },
    {
        label: "Free Tools",
        problems: ["Sound robotic", "Daily limits", "Generic responses"],
        solutions: [
            "Sound like you",
            "Unlimited usage",
            "Industry-specific training",
        ],
    },
    {
        label: "RightResponse AI",
        problems: [
            "$8+ per location",
            "Complex dashboards",
            "Feature overload",
        ],
        solutions: [
            "One flat price",
            "Simple interface",
            "Just responses, done right",
        ],
    },
];

export function CompetitivePositioning() {
    return (
        <section className="py-20 bg-section-gradient">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold text-foreground mb-4">
                        Why ReviewReply vs The Rest?
                    </h2>
                    <p className="text-xl text-muted-foreground font-secondary">
                        Stop overpaying for complexity or settling for robotic
                        responses
                    </p>
                </div>

                <div className="grid gap-8 md:gap-12 max-w-6xl mx-auto">
                    {comparisons.map((comparison, index) => (
                        <div
                            key={index}
                            className="p-8 bg-background/80 backdrop-blur-sm shadow-medium hover:shadow-large transition-all duration-300"
                        >
                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Competitor Problems */}
                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold text-foreground mb-4">
                                        {comparison.label}
                                    </h3>
                                    <div className="space-y-3">
                                        <h4 className="text-lg font-medium text-destructive">
                                            Their Problems:
                                        </h4>
                                        {comparison.problems.map(
                                            (problem, problemIndex) => (
                                                <div
                                                    key={problemIndex}
                                                    className="flex items-center gap-3"
                                                >
                                                    <X className="h-5 w-5 text-destructive flex-shrink-0" />
                                                    <span className="text-muted-foreground font-secondary">
                                                        {problem}
                                                    </span>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>

                                {/* Our Solutions */}
                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold text-primary mb-4">
                                        ReviewReply
                                    </h3>
                                    <div className="space-y-3">
                                        <h4 className="text-lg font-medium text-success">
                                            Our Solution:
                                        </h4>
                                        {comparison.solutions.map(
                                            (solution, solutionIndex) => (
                                                <div
                                                    key={solutionIndex}
                                                    className="flex items-center gap-3"
                                                >
                                                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
                                                    <span className="text-foreground font-secondary font-medium">
                                                        {solution}
                                                    </span>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
