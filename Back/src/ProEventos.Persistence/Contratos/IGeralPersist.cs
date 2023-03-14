using System.Threading.Tasks;
using ProEventos.Domain;

namespace ProEventos.Persistence.Contratos
{
    public interface IGeralPersist
    {
        //GERAL
        void Add<T>(T entily)where T:class;
        void Update<T>(T entily)where T:class;
        void Delete<T>(T entily)where T:class;
        void DeleteRange<T>(T[] entily)where T:class;

        Task<bool> SaveChangesAsync();
  
    }
}