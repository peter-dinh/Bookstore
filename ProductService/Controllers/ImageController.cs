using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using ProductService.Models;
using ProductService.Repository;
using System.IO;
using System.Net.Http.Headers;

namespace ProductService.Controllers
{
    [Route("api/[controller]")]
    [Authorize(Roles = "1")]
    public class UploadController : Controller
    {
        private IHostingEnvironment _hostingEnvironment;
        private IImageRepository _service;

        public UploadController(IHostingEnvironment hostingEnvironment, IImageRepository service)
        {
            _hostingEnvironment = hostingEnvironment;
            _service = service;
        }
        [HttpGet]
        public IActionResult Get()
        {
            return Json(_service.GetAll());
        }
        [Route("get/{{id}}")]
        [HttpGet]
        public IActionResult GetByID(int id)
        {
            var result = _service.GetSingleById(id);
            if(result != null)
                return Json(_service.GetSingleById(id));
            return NotFound();
        }

        [HttpPost, DisableRequestSizeLimit]
        public IActionResult UploadFile()
        {
            try
            {
                var file = Request.Form.Files[0];
                //Ten folder luu Image
                string folderName = "Upload";
                //Duong dan mac dinh
                string webRootPath = _hostingEnvironment.WebRootPath;
                // Tao duong dan de luu file = duong dan mac dinh + folder/
                string newPath = Path.Combine(webRootPath, folderName);
                // Tao Thu muc moi
                if (!Directory.Exists(newPath))
                {
                    Directory.CreateDirectory(newPath);
                }
                if (file.Length > 0)
                {
                    string fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    string fullPath = Path.Combine(newPath, fileName);
                    fullPath = ProductService.Infastructure.Images.GetNewPathForDupes(fullPath, ref fileName);
                    //Copy file toi duong dan luu file
                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }
                    System.Console.WriteLine(fullPath);
                    System.Console.WriteLine(fileName);
                    //Luu lai record vao Image -- 
                    Image toCreate = new Image()
                    {
                        ImageName = fileName,
                        Url = fullPath,
                    };
                    _service.Add(toCreate);
                    return Json(toCreate.Id);
                }
                return Json("-1");
            }
            catch (System.Exception ex)
            {
                return Json("Upload Failed: " + ex.Message);
            }
        }
        
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var _Image = _service.GetSingleById(id);
            if (_Image == null)
            {
                return NotFound();
            }
            try
            {
                if(System.IO.File.Exists(_Image.Url))
                {
                    System.IO.File.Delete(_Image.Url);
                }
                else{
                    return NotFound();
                }
            }
            catch
            {

            }
            _service.Delete(_Image);
            return Ok("Delete Success");
        }
    }
}