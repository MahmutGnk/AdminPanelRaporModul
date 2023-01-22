namespace AdminPanelRaporModul.Models
{
    public class Site
    {
        public int product_id { get; set; }
        public int quantity { get; set; }
        public float price { get; set; }
        public float total { get; set; }
        public float tax { get; set; }
        public string? CurrencyType { get; set; }

        public string? product_supplier { get; set; }
        public DateOnly date { get; set; }
        public string? musteri { get; set; }
        public int musteri_id { get; set; }

    }
}
