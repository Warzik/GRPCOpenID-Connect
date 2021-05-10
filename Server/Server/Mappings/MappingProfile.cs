using AutoMapper;
using Server.Entities;
using Server.Protos;

namespace Server.Mappings
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Post, PostDto>()
                .ReverseMap();

            CreateMap<Blog, BlogDto>()
                .ReverseMap();
        }
    }
}