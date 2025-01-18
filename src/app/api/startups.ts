// Función para obtener startups filtradas
export const getStartups = async ({ marketTypes }: { marketTypes: string[] }) => {
    const url = new URL('/api/startups', window.location.origin)
    
    // Añadir los filtros como parámetros de consulta
    if (marketTypes.length > 0) {
      marketTypes.forEach(type => url.searchParams.append('marketTypes[]', type))
    }
  
    const response = await fetch(url.toString(), {
      method: 'GET', // No enviar cuerpo en GET
    })
  
    if (!response.ok) {
      throw new Error('Error al obtener las startups')
    }
  
    return response.json() // Asumimos que la respuesta es un JSON
  }
  