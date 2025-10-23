import { useEffect, useState, useMemo } from 'react'
import '../styles/Tasks.css'

function Tasks ({ data }){
    const [ tasks, setTasks ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ viewMode, setViewMode ] = useState('list')
    const [ selectedStatus, setSelectedStatus ] = useState('Todas')

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

    const statuses = useMemo(() => {
        const status = tasks.map(
            t => t?.properties?.Status?.status?.name || 'Sin estado'
        ).filter(Boolean)

        return ['Todas', ...new Set(status)]
    }, [tasks])

    if(loading) return <p>Cargando tareas...</p>

    const toggleView = () => {
        setViewMode(prev => (prev === 'list' ? 'kanban' : 'list'))
    }

    return (
      <section className="tasks">
        <div className="tasks-header">
          <div className="tasks-title">
            <h2>Tareas {tasks.length}</h2>
            <button className="viewTasks" onClick={toggleView}>
              {viewMode === "list" ? "Ver Kanban" : "Ver Lista"}
            </button>
          </div>
          <div className="status-filters">
            {statuses.length > 0 &&
              statuses.map((status) => (
                <span
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`task-status-badge ${selectedStatus === status ? 'active' : ''}`}
                >
                  {status}
                </span>
              ))}
          </div>
        </div>
        <ul className="task-list">
            {tasks
              .filter(
                (task) =>
                  selectedStatus === "Todas" ||
                  task?.properties?.Status?.status?.name === selectedStatus
              )
              .map((t) => {
                const Titulo = t?.properties?.['Fase ']?.title?.[0]?.plain_text || 'Sin título'
                const status = t?.properties?.Status?.status?.name || 'Sin estado'
                const prioridad = t?.properties?.Priority?.select?.name || 'Sin prioridad'
                const fechaEntrega = t?.properties?.['Delivery Date']?.date?.start || 'Sin fecha'
                const normalized = prioridad.toLowerCase().replace(/\s+/g, '')
                
                return (
                  <li key={t.id} className='task-card'>
                    <div className='card-header'>
                        <h4>{Titulo}</h4>
                        <p>
                            Estado: {status}
                        </p>
                    </div>
                    <div className='card-content'>
                        <span>📅{fechaEntrega}</span>
                        <span className={`priorityBadge ${normalized}`}>{prioridad}</span>
                    </div>
                    
                  </li>
                )
              })}
        </ul>
      </section>
    );
}

export default Tasks