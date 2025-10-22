import { useEffect, useState } from 'react'
import '../styles/Tasks.css'

function Tasks ({ data }){
    const [ tasks, setTasks ] = useState([])
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                if(Array.isArray(data)&& data.length > 0){
                    setTasks(data)
                }else{
                    setTasks([])
                }
            }catch (error){
                console.error('Error fetching tasks: ', error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [data])
    
    if(loading) return <p>Cargando tareas...</p>

    return (
        <section className='tasks-section'>
            <h2>Tareas</h2>
            <ul className='task-list'>
                {tasks.length === 0 ?(
                    <p>No hay tareas disponibles.</p>
                ):(
                    tasks.map((t) => {
                        const fase = t?.properties?.['Fase ']?.title?.[0]?.plain_text || 'Sin título'
                        const status = t?.properties?.Status?.status?.name || 'Sin estado'
                        const fechaEntrega = t?.properties?.['Delivery Date']?.date?.start || 'Sin fecha'

                    return (
                        <li key={t.id} className="task-card">
                            <h4>{fase}</h4>
                            <p><strong>Estado:</strong> {status}</p>
                            <p><strong>Entrega:</strong> {fechaEntrega}</p>
                            <a href={t.url} target="_blank" rel="noopener noreferrer">
                                Ver en Notion
                            </a>
                        </li>
                    )
                    })
                )}
            </ul>
        </section>
    )
}

export default Tasks