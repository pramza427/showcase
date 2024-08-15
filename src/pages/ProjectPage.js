import { projects } from "../data/projects";

function ProjectPage() {

    const projectBlocks = projects.map((p, i) => {
        return (
            <div key={i} className="m-4 rounded-lg border border-seagreen-800 bg-seagreen-900 h-min">
                <img className="rounded-t-lg w-full" alt="" src={p.img_src} />
                <section id="cardBody" className="p-2">
                    <div className="flex">
                        <div className="text-2xl">{p.name}</div>
                        <div className="flex-grow" />
                        <div className="text-gray-400">{p.language}</div>
                    </div>
                    <div className="py-3">{p.description}</div>
                    <div className="flex justify-between">
                        <a className="px-2 m-2 border border-gray-500 rounded hover:bg-seagreen-700" href={p.repo_link}>
                            Code
                        </a>
                        <a className="px-2 m-2 border border-gray-500 rounded hover:bg-seagreen-700" href={p.web_link}>
                            Demo
                        </a>
                    </div>
                </section>
            </div>
        )
    })
    return (
        <div className="grid grid-cols-3">
            {projectBlocks}
        </div>
    );
}

export default ProjectPage;