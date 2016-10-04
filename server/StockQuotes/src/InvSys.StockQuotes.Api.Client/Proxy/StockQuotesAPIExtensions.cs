// Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
// Changes may cause incorrect behavior and will be lost if the code is
// regenerated.

namespace InvSys.StockQuotes.Api.Client.Proxy
{
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.Threading;
    using System.Threading.Tasks;
    using Microsoft.Rest;
    using Models;

    /// <summary>
    /// Extension methods for StockQuotesAPI.
    /// </summary>
    public static partial class StockQuotesAPIExtensions
    {
            /// <param name='operations'>
            /// The operations group for this extension method.
            /// </param>
            /// <param name='companySymbol'>
            /// </param>
            public static CurrentQuote GetCurrent(this IStockQuotesAPI operations, string companySymbol = default(string))
            {
                return Task.Factory.StartNew(s => ((IStockQuotesAPI)s).GetCurrentAsync(companySymbol), operations, CancellationToken.None, TaskCreationOptions.None, TaskScheduler.Default).Unwrap().GetAwaiter().GetResult();
            }

            /// <param name='operations'>
            /// The operations group for this extension method.
            /// </param>
            /// <param name='companySymbol'>
            /// </param>
            /// <param name='cancellationToken'>
            /// The cancellation token.
            /// </param>
            public static async Task<CurrentQuote> GetCurrentAsync(this IStockQuotesAPI operations, string companySymbol = default(string), CancellationToken cancellationToken = default(CancellationToken))
            {
                using (var _result = await operations.GetCurrentWithHttpMessagesAsync(companySymbol, null, cancellationToken).ConfigureAwait(false))
                {
                    return _result.Body;
                }
            }

            /// <param name='operations'>
            /// The operations group for this extension method.
            /// </param>
            /// <param name='stockExchange'>
            /// </param>
            /// <param name='companySymbol'>
            /// </param>
            /// <param name='startDate'>
            /// </param>
            /// <param name='endDate'>
            /// </param>
            public static IList<HistoricalQuote> GetHistorical(this IStockQuotesAPI operations, string stockExchange = default(string), string companySymbol = default(string), DateTime? startDate = default(DateTime?), DateTime? endDate = default(DateTime?))
            {
                return Task.Factory.StartNew(s => ((IStockQuotesAPI)s).GetHistoricalAsync(stockExchange, companySymbol, startDate, endDate), operations, CancellationToken.None, TaskCreationOptions.None, TaskScheduler.Default).Unwrap().GetAwaiter().GetResult();
            }

            /// <param name='operations'>
            /// The operations group for this extension method.
            /// </param>
            /// <param name='stockExchange'>
            /// </param>
            /// <param name='companySymbol'>
            /// </param>
            /// <param name='startDate'>
            /// </param>
            /// <param name='endDate'>
            /// </param>
            /// <param name='cancellationToken'>
            /// The cancellation token.
            /// </param>
            public static async Task<IList<HistoricalQuote>> GetHistoricalAsync(this IStockQuotesAPI operations, string stockExchange = default(string), string companySymbol = default(string), DateTime? startDate = default(DateTime?), DateTime? endDate = default(DateTime?), CancellationToken cancellationToken = default(CancellationToken))
            {
                using (var _result = await operations.GetHistoricalWithHttpMessagesAsync(stockExchange, companySymbol, startDate, endDate, null, cancellationToken).ConfigureAwait(false))
                {
                    return _result.Body;
                }
            }

            /// <param name='operations'>
            /// The operations group for this extension method.
            /// </param>
            public static IList<string> ApiValuesGet(this IStockQuotesAPI operations)
            {
                return Task.Factory.StartNew(s => ((IStockQuotesAPI)s).ApiValuesGetAsync(), operations, CancellationToken.None, TaskCreationOptions.None, TaskScheduler.Default).Unwrap().GetAwaiter().GetResult();
            }

            /// <param name='operations'>
            /// The operations group for this extension method.
            /// </param>
            /// <param name='cancellationToken'>
            /// The cancellation token.
            /// </param>
            public static async Task<IList<string>> ApiValuesGetAsync(this IStockQuotesAPI operations, CancellationToken cancellationToken = default(CancellationToken))
            {
                using (var _result = await operations.ApiValuesGetWithHttpMessagesAsync(null, cancellationToken).ConfigureAwait(false))
                {
                    return _result.Body;
                }
            }

            /// <param name='operations'>
            /// The operations group for this extension method.
            /// </param>
            /// <param name='value'>
            /// </param>
            public static void ApiValuesPost(this IStockQuotesAPI operations, string value = default(string))
            {
                Task.Factory.StartNew(s => ((IStockQuotesAPI)s).ApiValuesPostAsync(value), operations, CancellationToken.None, TaskCreationOptions.None, TaskScheduler.Default).Unwrap().GetAwaiter().GetResult();
            }

            /// <param name='operations'>
            /// The operations group for this extension method.
            /// </param>
            /// <param name='value'>
            /// </param>
            /// <param name='cancellationToken'>
            /// The cancellation token.
            /// </param>
            public static async Task ApiValuesPostAsync(this IStockQuotesAPI operations, string value = default(string), CancellationToken cancellationToken = default(CancellationToken))
            {
                await operations.ApiValuesPostWithHttpMessagesAsync(value, null, cancellationToken).ConfigureAwait(false);
            }

            /// <param name='operations'>
            /// The operations group for this extension method.
            /// </param>
            /// <param name='id'>
            /// </param>
            public static string ApiValuesByIdGet(this IStockQuotesAPI operations, int id)
            {
                return Task.Factory.StartNew(s => ((IStockQuotesAPI)s).ApiValuesByIdGetAsync(id), operations, CancellationToken.None, TaskCreationOptions.None, TaskScheduler.Default).Unwrap().GetAwaiter().GetResult();
            }

            /// <param name='operations'>
            /// The operations group for this extension method.
            /// </param>
            /// <param name='id'>
            /// </param>
            /// <param name='cancellationToken'>
            /// The cancellation token.
            /// </param>
            public static async Task<string> ApiValuesByIdGetAsync(this IStockQuotesAPI operations, int id, CancellationToken cancellationToken = default(CancellationToken))
            {
                using (var _result = await operations.ApiValuesByIdGetWithHttpMessagesAsync(id, null, cancellationToken).ConfigureAwait(false))
                {
                    return _result.Body;
                }
            }

            /// <param name='operations'>
            /// The operations group for this extension method.
            /// </param>
            /// <param name='id'>
            /// </param>
            /// <param name='value'>
            /// </param>
            public static void ApiValuesByIdPut(this IStockQuotesAPI operations, int id, string value = default(string))
            {
                Task.Factory.StartNew(s => ((IStockQuotesAPI)s).ApiValuesByIdPutAsync(id, value), operations, CancellationToken.None, TaskCreationOptions.None, TaskScheduler.Default).Unwrap().GetAwaiter().GetResult();
            }

            /// <param name='operations'>
            /// The operations group for this extension method.
            /// </param>
            /// <param name='id'>
            /// </param>
            /// <param name='value'>
            /// </param>
            /// <param name='cancellationToken'>
            /// The cancellation token.
            /// </param>
            public static async Task ApiValuesByIdPutAsync(this IStockQuotesAPI operations, int id, string value = default(string), CancellationToken cancellationToken = default(CancellationToken))
            {
                await operations.ApiValuesByIdPutWithHttpMessagesAsync(id, value, null, cancellationToken).ConfigureAwait(false);
            }

            /// <param name='operations'>
            /// The operations group for this extension method.
            /// </param>
            /// <param name='id'>
            /// </param>
            public static void ApiValuesByIdDelete(this IStockQuotesAPI operations, int id)
            {
                Task.Factory.StartNew(s => ((IStockQuotesAPI)s).ApiValuesByIdDeleteAsync(id), operations, CancellationToken.None, TaskCreationOptions.None, TaskScheduler.Default).Unwrap().GetAwaiter().GetResult();
            }

            /// <param name='operations'>
            /// The operations group for this extension method.
            /// </param>
            /// <param name='id'>
            /// </param>
            /// <param name='cancellationToken'>
            /// The cancellation token.
            /// </param>
            public static async Task ApiValuesByIdDeleteAsync(this IStockQuotesAPI operations, int id, CancellationToken cancellationToken = default(CancellationToken))
            {
                await operations.ApiValuesByIdDeleteWithHttpMessagesAsync(id, null, cancellationToken).ConfigureAwait(false);
            }

    }
}
