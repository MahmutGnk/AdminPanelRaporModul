using AdminPanelRaporModul.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using Microsoft.Data.SqlClient;

namespace AdminPanelRaporModul.Controllers
{
    public class HomeController : Controller
    {

        SqlCommand com = new SqlCommand();
        SqlDataReader dr;
        SqlConnection con = new SqlConnection();
        List<Site> sites = new List<Site>();

        private readonly ILogger<HomeController> _logger;

#pragma warning disable CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
        public HomeController(ILogger<HomeController> logger)
#pragma warning restore CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
        {
            _logger = logger;
            con.ConnectionString = AdminPanelRaporModul.Properties.Resources.ConnectionString;
        }

        public IActionResult Index()
        {
            return View();
        }

        private void Fetchdata()
        {
            try
            {
                con.Open();
                com.Connection = con;
                com.CommandText = "SELECT TOP (1000) [product_id],[quantity],[price],[total],[tax],[currencyType],[product_supplier],[date],[musteri],[musteri_id] FROM [AdminPanelRaporModul].[dbo].[order_product_list]";
                dr=com.ExecuteReader();
                
                con.Close();
            }
            catch (Exception)
            {
                
            }
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}