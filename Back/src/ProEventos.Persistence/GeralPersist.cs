using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ProEventos.Domain;
using ProEventos.Persistence.Contextos;
using ProEventos.Persistence.Contratos;

namespace ProEventos.Persistence
{
    public class GeralPersist : IGeralPersist
    {
        private readonly ProEventosContext _context;
        public GeralPersist(ProEventosContext context)
        {
            _context = context;

        }
        public void Add<T>(T entily) where T : class
        {
           _context.Add(entily);
        }
        public void Update<T>(T entily) where T : class
        {
            _context.Update(entily);
        }
        public void Delete<T>(T entily) where T : class
        {
            _context.Remove(entily);
        }

        public void DeleteRange<T>(T[] entilyArray) where T : class
        {
            _context.RemoveRange(entilyArray);
        }
        public async Task<bool> SaveChangesAsync()
        {
            return (await _context.SaveChangesAsync()) >0;
        }

       

    }
}