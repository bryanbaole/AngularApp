using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using DAL;
using DAL.Models;
using SchoolRestAPI.Models;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SchoolAngular.Controllers
{
   
    [ApiController]
    [Route("api/[controller]")]
    public class StudentController : ControllerBase
    {
        private readonly SchoolContext _context;

        public StudentController(SchoolContext context)
        {
            _context = context;
        }
   
        // GET: api/<controller>
        [HttpGet]
        public Person[] Get()
        {
            Person[] people = _context.Person.ToArray() ;
            return people;
        }

        // GET: api/<controller>
        [HttpPost]
      public async Task<Person> PostPerson([FromBody] Person person)
        {
            _context.Person.Add(person);
            await _context.SaveChangesAsync();
            return person;
           
        }

    }
}
