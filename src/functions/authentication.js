import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export function examineCredentials(userId) {
    const navigate = useNavigate();
    if (userId === null) {
        useEffect(() => {
            navigate("/login")
        })
    }
}
