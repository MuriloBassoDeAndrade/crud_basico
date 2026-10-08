import { getUsers } from "../api/read.js";

let usersCache = [];

export function findUserById(id) {
    return usersCache.find((user) => user.id === id);
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

export async function renderUsers(apiUrl) {
    const users = await getUsers(apiUrl);
    usersCache = users;
    const usersSection = document.getElementById('users');

    if (users.lenght === 0) {
        usersSection.innerHTML = '<p class="text-muted"> No users found. </p>';
        return;
    }
    usersSection.innerHTML = '';
}
