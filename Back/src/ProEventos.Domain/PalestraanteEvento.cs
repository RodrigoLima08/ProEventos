namespace ProEventos.Domain
{
    public class PalestraanteEvento
    {
        public int PalestranteId { get; set; }
        public Palestrante Palestrante { get; set; }
        public int EventoID { get; set; }
        public Evento Evento { get; set; }
    }
}