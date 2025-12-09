import ToolCard from "./ToolCard";
import { tools } from "@/data/tools";

const EssentialTools = () => {
    return (
        <section className="bg-[#f5f2ed] py-24">
            <div className="mx-auto max-w-7xl px-4">
                {/* Section title and badge */}
                <div className="text-center mb-16">
                    <span className="inline-block text-[11px] font-bold bg-gradient-to-r from-gray-600 via-gray-400 to-gray-200 text-black px-5 py-1.5 rounded-full mb-6 tracking-widest shadow-sm">
                        ESSENTIAL TOOLS
                    </span>

                    <h2 className="text-[48px] font-bold text-[#1a1a1a] leading-[1.15] mb-1">
                        Essential Tools
                    </h2>
                    <h2 className="text-[48px] font-bold text-[#1a1a1a] leading-[1.15]">
                        Zero Distractions
                    </h2>

                    <p className="mt-6 max-w-2xl mx-auto text-[15px] text-[#666666] leading-relaxed">
                        Create diverse products on the platform and leverage our
                        <br className="hidden sm:block" />
                        powerful tools to drive sales within and beyond GrowHubs.
                    </p>
                </div>

                {/* Tool cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {tools.map((tool, index) => (
                        <ToolCard key={tool.id} tool={tool} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EssentialTools;
