import React from 'react';

interface Admin {
    role: string;
}

interface User {
    email: string;
}

function redirect(user: Admin | User) {
    if ("role" in user) {
        console.log(user.role);
    } else {
        console.log(user.email);
    }
}

function isAdmin(user: Admin | User): user is Admin {
    return (user as any).role !== undefined;
}