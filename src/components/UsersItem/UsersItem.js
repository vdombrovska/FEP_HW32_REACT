import React, { useState} from 'react';

export default function UsersItem () { 
        return (
            <div>
                {item.name}
                {item.surname}
                {item.email}

                <span className="delete-btn" onClick={onDeleteItemClick}>
                    delete
                </span>
            </div>
        );
    

     function onDeleteItemClick (e)  {
        e.stopPropagation();

        onRemove(item.id);
    };
}

