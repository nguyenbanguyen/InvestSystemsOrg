﻿using AutoMapper;
using InvSys.Financials.Api.Client.Proxy.Models;
using InvSys.RuleOne.Api.Models;
using InvSys.RuleOne.Core.Models.Moats;

namespace InvSys.RuleOne.Api
{
    public static class Mapper
    {
        public static void Configure(IMapperConfigurationExpression config)
        {
            // Moat
            config.CreateMap<FinancialData, BigFiveAnnual>(MemberList.Destination)
                .ForMember(d => d.Sales, opt => opt.MapFrom(s => s.Revenue));

            // Three Tools
            config.CreateMap<Core.Models.ThreeTools.EMAData, EMAData>(MemberList.Destination);
            config.CreateMap<Core.Models.ThreeTools.MACDData, MACDData>(MemberList.Destination);
            config.CreateMap<Core.Models.ThreeTools.StochasticData, StochasticData>(MemberList.Destination);
            
        }
    }
}
