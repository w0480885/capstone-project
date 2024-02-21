import React from 'react';

export const ClientSelect = ({ clients, onSelectClient, selectedClient }) => {
    const handleSelectChange = (e) => {
        if (e.target.value === "add-new") {
            const newClientName = prompt("Enter new client name:");
            if (newClientName) {
                // Here, you would typically send a request to your backend to add the new client
                // and then update the clients state in the parent component.
                // For this example, we'll just call onSelectClient with the new name directly.
                onSelectClient(newClientName);
            }
        } else {
            onSelectClient(e.target.value);
        }
    };

    return (
        <select value={selectedClient} onChange={handleSelectChange}>
            <option value="">Select a client</option>
            {clients.map((client) => (
                <option key={client.id} value={client.id}>{client.name}</option>
            ))}
            <option value="add-new">+ Add new client</option>
        </select>
    );
};
