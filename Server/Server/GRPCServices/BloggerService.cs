using AutoMapper;
using Grpc.Core;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using OpenIddict.Validation.AspNetCore;
using Server.Persistence;
using Server.Protos;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static Server.Protos.Blogger;

namespace Server.Services
{
    public class BloggerService : BloggerBase
    {
        private readonly ILogger<BloggerService> _logger;
        private readonly IMapper _mapper;
        private readonly ApplicationDbContext _context;

        public BloggerService(ILogger<BloggerService> logger, IMapper mapper, ApplicationDbContext context)
        {
            _logger = logger;
            _mapper = mapper;
            _context = context;
        }
        [Authorize(AuthenticationSchemes = OpenIddictValidationAspNetCoreDefaults.AuthenticationScheme)]
        public override async Task<BlogResponse> GetBlogs(BlogRequest request, ServerCallContext context)
        {
            var result = new BlogResponse();

            var blogs = await _context.Blogs
                .Take(request.Count)
                .Include(x => x.Posts)
                .ToListAsync();

            result.Blogs.AddRange(_mapper.Map<List<BlogDto>>(blogs));

            return result;
        }
    }
}