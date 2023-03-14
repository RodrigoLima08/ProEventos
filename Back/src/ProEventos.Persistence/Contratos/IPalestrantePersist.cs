using System.Threading.Tasks;
using ProEventos.Domain;

namespace ProEventos.Persistence.Contratos
{
    public interface IPAlestrantePersist
    {
      
        //PALESTRANTES

        Task<Palestrante[]> GetAllPalestrantesByNomeaAsync(string nome , bool includeEventos);
        Task<Palestrante[]> GetAllPalestrantesAsync( bool includeEventos);
        Task<Palestrante> GetPalestranteByIdAsync(int palestranteId, bool includeEventos);        
    }
}