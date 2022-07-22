import React, { useState } from 'react';
const VALUE = {
    name: '',
    surname:'',
    email:'',
}
export default function NewUsersForm()  {
    const [formInput, setFormInput]= useState(VALUE);
    
    function onFormSubmit (e) {
        e.preventDefault();
        onSave(formInput);
        setFormInput(VALUE);
    };

    function onFieldChange () {
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value,
        });
    };

    render() 
        return (
            <form onSubmit={onFormSubmit}>
                <div className="row">
                        <input
                            type="text"
                            name='name'
                            value={formInput.name}
                            onChange={onFieldChange}
                        />
                         <input
                            type="text"
                            name='surname'
                            value={formInput.surname}
                            onChange={onFieldChange}
                        />
                         <input
                            type="text"
                            name='email'
                            value={formInput.email}
                            onChange={onFieldChange}
                        />
                        <button
                            type="submit"
                            id="addBtn"
                        >
                            Add
                        </button>
                    </div>
            </form>
        );
    
}


