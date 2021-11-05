const token = 'e4e1a1a3f545e59ad4852daac58d5e4ac4afe7e275b73f44'

export const server_calls = {
    get: async () => {
        const response = await fetch('https://comicbook-api.herokuapp.com/api/comics',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
        if (!response.ok){
            throw new Error('Failed to fetch your data from the server...')
        }
        return await response.json()
    },
    create: async (data: any = {}) =>{
        const response = await fetch('https://comicbook-api.herokuapp.com/api/comics', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error('Failed to create your comic...')
        }
        console.log('response from api', response)
        return await response.json()
    },
    update: async (id:string, data: any = {}) => {
        const response = await fetch(`https://comicbook-api.herokuapp.com/api/comics/${id}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error('Failed to update your comic...')
        }
        console.log(`Updated comic ${id} with ${data}`)
        return await response.json()
    },
    delete: async(id:string) =>{
        const response = await fetch(`https://comicbook-api.herokuapp.com/api/comics/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
        if (!response.ok){
            throw new Error('Could not delete your comic...')
        }
    }
}