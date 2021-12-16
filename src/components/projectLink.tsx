import { Project } from "../interfaces";
import { FetchContentResult } from 'astro';
export default function ProjectLink(props: { project: FetchContentResult<Project> }) {
    const { project } = props;
    return (
        <article>
            <h2>
                <a href={project.url.toString()}>{project.title}</a>
            </h2>
            <p>{project.description}</p>
        </article>
    );
}
