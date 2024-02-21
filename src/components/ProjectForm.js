import React, { useState } from 'react';
import { ClientSelect } from './ClientSelect'; // Correctly import the ClientSelect component

export const ProjectForm = ({ addProject, clients }) => {
    const [projectName, setProjectName] = useState('');
    const [selectedClient, setSelectedClient] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addProject({ name: projectName, clientId: selectedClient });
        setProjectName('');
        setSelectedClient('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Project Name:
                <input
                    type="text"
                    value={projectName}
                    onChange={e => setProjectName(e.target.value)}
                />
            </label>
            <ClientSelect clients={clients} onSelectClient={setSelectedClient} />
            <button type="submit">Add Project</button>
        </form>
    );
};
