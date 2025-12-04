import React, { useState } from 'react';
import './CadastroForm.css'; 

function CadastroForm({ title, fields, onSubmit }) {
    const initialData = fields.reduce((acc, field) => {
        acc[field.name] = '';
        return acc;
    }, {});

    const [formData, setFormData] = useState(initialData);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Submetendo ${title}:`, formData);
        
        onSubmit(formData);
        
    };

    return (
        <div className="form-wrapper">
            <form onSubmit={handleSubmit} className="cadastro-form">
                <h2>{title}</h2>
                
                {fields.map((field) => (
                    <div className="form-group" key={field.name}>
                        <label htmlFor={field.name}>{field.label}:</label>
                        <input
                            type={field.type || 'text'}
                            id={field.name}
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleChange}
                            placeholder={field.placeholder || field.label}
                            required={field.required || false}
                            className="input-field"
                        />
                    </div>
                ))}
                
                <button type="submit" className="submit-button">
                    {`Salvar ${title.split(' ')[1] || 'Cadastro'}`}
                </button>
            </form>
        </div>
    );
}

export default CadastroForm;