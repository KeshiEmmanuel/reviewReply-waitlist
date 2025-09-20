import { Benefits } from "./components/Benefits";
import { CompetitivePositioning } from "./components/CompetitionPositioning";
import { SocialProof } from "./components/SocialProof";
import Waitlist from "./components/Waitlist";

const App = () => {
    return (
        <main className="mx-auto max-w-[1280px] px-2 lg:px-0">
            <div className="text-center pt-40">
                <h1 className="text-6xl lg:text-[5.25rem] text-gray-900 lg:leading-base font-bold">
                    Finally,
                    <span className="inline-block mx-1">Review Responses</span>
                    <br className="hidden lg:block" />
                    That Don't Suck
                </h1>
                <p className="mt-4 text-gray-700 text-base lg:text-xl font-secondary">
                    Professional responses in 30 seconds, without enterprise
                    complexity.
                </p>
                <p className="text-gray-700 text-base lg:text-xl mt-1 font-secondary">
                    Skip the $200/month tools and robotic free generators
                </p>
            </div>
            <Waitlist />
            <CompetitivePositioning />
            <Benefits />
            <SocialProof />
        </main>
    );
};

export default App;
