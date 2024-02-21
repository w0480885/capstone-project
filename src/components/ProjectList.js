import React from 'react';

const ProjectList = ({ projects }) => {
    if (!projects.length) {
        return <div>No projects to display.</div>;
    }

    return (
        <div>
            {projects.map((project, index) => (
                <div key={index}>
                    Project Name: {project.name} - Client: {project.clientName || 'No client assigned'}
                </div>
            ))}
        </div>
    );
};

export default ProjectList; // Ensure this is a default export
