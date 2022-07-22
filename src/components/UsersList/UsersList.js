
import React, { Component } from 'react';
import UsersItem from './UsersItem/UsersItem.js';

export default function UsersList () { 
        return (
            <div className="task-list u-full-width">
                {list.map((user) => (
                    <UsersItem
                        key={user.id}
                        item={item}
                        onRemove={onRemove}
                    />
                ))}
            </div>
        );
}
