import React, { useState, useEffect } from 'react';
import { Button } from "../components/buttons";
import { TopBar } from "../components/topBar";
import { ProjectForm } from "../components/ProjectForm"; // Use this for adding projects
import ProjectList from "../components/ProjectList"; // Corrected import for default export
import ClientSelect from "../components/ClientSelect"; // A new component for selecting clients


function Projects() {
    const [projects, setProjects] = useState([]);

    // Temporarily using static clients for demonstration
    const [clients, setClients] = useState([
        { id: '1', name: 'Client 1' },
        { id: '2', name: 'Client 2' },
        { id: '3', name: 'Client 3' },
        { id: '4', name: 'Client 4' },
        { id: '5', name: 'Client 5' }
    ]);

    // Fetch clients
    useEffect(() => {
        const fetchClients = async () => {
            try {
                const response = await fetch('/api/clients');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const clients = await response.json();
                setClients(clients);
            } catch (error) {
                console.error("Failed to fetch clients:", error);
            }
        };
    
        fetchClients();
    }, []);

    const addProject = (project) => {
        // Find the client's name using the project's clientId
        const clientName = clients.find(client => client.id === project.clientId)?.name;
        const newProject = { ...project, clientName }; // Attach client name to the project
        const updatedProjects = [...projects, newProject];
        setProjects(updatedProjects);
    };

    return (
        <>
            <TopBar title="Projects">
                {/* Button placements can remain the same */}
            </TopBar>
            {/* Pass clients to ProjectForm for selection */}
            <ProjectForm addProject={addProject} clients={clients} />
            <p>Below is a list of your projects.</p>
            <ProjectList projects={projects} />
            {/* Optionally, place a component/modal for adding tasks here */}
            
        </>
    );
}

export default Projects;