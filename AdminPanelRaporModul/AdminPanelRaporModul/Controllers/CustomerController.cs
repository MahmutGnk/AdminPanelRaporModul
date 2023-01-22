using Microsoft.AspNetCore.Mvc;

namespace AdminPanelRaporModul.Controllers
{
    public class CustomerController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
