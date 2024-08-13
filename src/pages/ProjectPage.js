import { projects } from "../data/projects";

function ProjectPage() {

    const projectBlocks = projects.map((p, i) => {
        return (
            <div key={i} className="rounded border border-gray-500 m-4">
                <img className="rounded-t-lg" alt="" src={p.img_src} />
                <section id="cardBody" className="p-2">
                    <div className="flex">
                        <div>{p.name}</div>
                        <div className="flex-grow" />
                        <div className="text-sm text-gray-400">{p.language}</div>
                    </div>
                    <div className="text-sm">{p.description}</div>
                    <div className="flex justify-between">
                        <a className="px-2 m-2 border border-gray-500 rounded hover:bg-gray-900" href={p.repo_link}>Code</a>
                        <a className="px-2 m-2 border border-gray-500 rounded hover:bg-gray-900" href={p.web_link}>Demo</a>
                    </div>
                </section>
            </div>
        )
    })
    return (
        <div>
            {projectBlocks}
        </div>
    );
}

export default ProjectPage;