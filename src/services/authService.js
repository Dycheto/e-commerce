const API_KEY = `AIzaSyA3KIp_WuVeOyVFV1KdE-WfQAXl29dCqUs`;
const returnSecureToken = Boolean(true)

const endpoints = {
    register: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
    login: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`
}

export const login = async (email, password) => {

    let res = await fetch(endpoints.login, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password,
            returnSecureToken: returnSecureToken
        })
    })

    let jsonRes = await res.json();

    if (res.ok) {
        return jsonRes;
    } else if (!res.ok) {
        throw jsonRes.message;
    }
}

export const register = (email, password) => {
    return fetch(endpoints.register, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password,
            returnSecureToken: returnSecureToken
        })
    })
        .then(res => res.json())
        .then(data => data)
        .catch(err => {
            throw new Error(err.message);
        })
}