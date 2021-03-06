"use strict";
var stock_price_1 = require('../charts/stock-price');
// http://investexcel.net/wp-content/uploads/2014/01/EMA-Calculator.zip
exports.EMA_TEST_DATA = [
    new stock_price_1.StockPrice(new Date('1/2/2013'), 27.62),
    new stock_price_1.StockPrice(new Date('1/3/2013'), 27.25),
    new stock_price_1.StockPrice(new Date('1/4/2013'), 26.74),
    new stock_price_1.StockPrice(new Date('1/7/2013'), 26.69),
    new stock_price_1.StockPrice(new Date('1/8/2013'), 26.55),
    new stock_price_1.StockPrice(new Date('1/9/2013'), 26.7),
    new stock_price_1.StockPrice(new Date('1/10/2013'), 26.46),
    new stock_price_1.StockPrice(new Date('1/11/2013'), 26.83),
    new stock_price_1.StockPrice(new Date('1/14/2013'), 26.89),
    new stock_price_1.StockPrice(new Date('1/15/2013'), 27.21),
    new stock_price_1.StockPrice(new Date('1/16/2013'), 27.04),
    new stock_price_1.StockPrice(new Date('1/17/2013'), 27.25),
    new stock_price_1.StockPrice(new Date('1/18/2013'), 27.25),
    new stock_price_1.StockPrice(new Date('1/22/2013'), 27.15),
    new stock_price_1.StockPrice(new Date('1/23/2013'), 27.61),
    new stock_price_1.StockPrice(new Date('1/24/2013'), 27.63),
    new stock_price_1.StockPrice(new Date('1/25/2013'), 27.88),
    new stock_price_1.StockPrice(new Date('1/28/2013'), 27.91),
    new stock_price_1.StockPrice(new Date('1/29/2013'), 28.01),
    new stock_price_1.StockPrice(new Date('1/30/2013'), 27.85),
    new stock_price_1.StockPrice(new Date('1/31/2013'), 27.45),
    new stock_price_1.StockPrice(new Date('2/1/2013'), 27.93),
    new stock_price_1.StockPrice(new Date('2/4/2013'), 27.44),
    new stock_price_1.StockPrice(new Date('2/5/2013'), 27.5),
    new stock_price_1.StockPrice(new Date('2/6/2013'), 27.34),
    new stock_price_1.StockPrice(new Date('2/7/2013'), 27.28),
    new stock_price_1.StockPrice(new Date('2/8/2013'), 27.55),
    new stock_price_1.StockPrice(new Date('2/11/2013'), 27.86),
    new stock_price_1.StockPrice(new Date('2/12/2013'), 27.88),
    new stock_price_1.StockPrice(new Date('2/13/2013'), 28.03),
    new stock_price_1.StockPrice(new Date('2/14/2013'), 28.04),
    new stock_price_1.StockPrice(new Date('2/15/2013'), 28.01),
    new stock_price_1.StockPrice(new Date('2/19/2013'), 28.05),
    new stock_price_1.StockPrice(new Date('2/20/2013'), 27.87),
    new stock_price_1.StockPrice(new Date('2/21/2013'), 27.49),
    new stock_price_1.StockPrice(new Date('2/22/2013'), 27.76),
    new stock_price_1.StockPrice(new Date('2/25/2013'), 27.37),
    new stock_price_1.StockPrice(new Date('2/26/2013'), 27.37),
    new stock_price_1.StockPrice(new Date('2/27/2013'), 27.81),
    new stock_price_1.StockPrice(new Date('2/28/2013'), 27.8),
    new stock_price_1.StockPrice(new Date('3/1/2013'), 27.95),
    new stock_price_1.StockPrice(new Date('3/4/2013'), 28.15),
    new stock_price_1.StockPrice(new Date('3/5/2013'), 28.35),
    new stock_price_1.StockPrice(new Date('3/6/2013'), 28.09),
    new stock_price_1.StockPrice(new Date('3/7/2013'), 28.14),
    new stock_price_1.StockPrice(new Date('3/8/2013'), 28),
    new stock_price_1.StockPrice(new Date('3/11/2013'), 27.87),
    new stock_price_1.StockPrice(new Date('3/12/2013'), 27.91),
    new stock_price_1.StockPrice(new Date('3/13/2013'), 27.92),
    new stock_price_1.StockPrice(new Date('3/14/2013'), 28.14),
    new stock_price_1.StockPrice(new Date('3/15/2013'), 28.04),
    new stock_price_1.StockPrice(new Date('3/18/2013'), 28.1),
    new stock_price_1.StockPrice(new Date('3/19/2013'), 28.18),
    new stock_price_1.StockPrice(new Date('3/20/2013'), 28.32),
    new stock_price_1.StockPrice(new Date('3/21/2013'), 28.11),
    new stock_price_1.StockPrice(new Date('3/22/2013'), 28.25),
    new stock_price_1.StockPrice(new Date('3/25/2013'), 28.16),
    new stock_price_1.StockPrice(new Date('3/26/2013'), 28.16),
    new stock_price_1.StockPrice(new Date('3/27/2013'), 28.37),
    new stock_price_1.StockPrice(new Date('3/28/2013'), 28.61),
    new stock_price_1.StockPrice(new Date('4/1/2013'), 28.61),
    new stock_price_1.StockPrice(new Date('4/2/2013'), 28.8),
    new stock_price_1.StockPrice(new Date('4/3/2013'), 28.56),
    new stock_price_1.StockPrice(new Date('4/4/2013'), 28.6),
    new stock_price_1.StockPrice(new Date('4/5/2013'), 28.7),
    new stock_price_1.StockPrice(new Date('4/8/2013'), 28.59),
    new stock_price_1.StockPrice(new Date('4/9/2013'), 29.61),
    new stock_price_1.StockPrice(new Date('4/10/2013'), 30.28),
    new stock_price_1.StockPrice(new Date('4/11/2013'), 28.94),
    new stock_price_1.StockPrice(new Date('4/12/2013'), 28.79),
    new stock_price_1.StockPrice(new Date('4/15/2013'), 28.69),
    new stock_price_1.StockPrice(new Date('4/16/2013'), 28.97),
    new stock_price_1.StockPrice(new Date('4/17/2013'), 28.83),
    new stock_price_1.StockPrice(new Date('4/18/2013'), 28.79),
    new stock_price_1.StockPrice(new Date('4/19/2013'), 29.77),
    new stock_price_1.StockPrice(new Date('4/22/2013'), 30.83),
    new stock_price_1.StockPrice(new Date('4/23/2013'), 30.6),
    new stock_price_1.StockPrice(new Date('4/24/2013'), 31.76),
    new stock_price_1.StockPrice(new Date('4/25/2013'), 31.94),
    new stock_price_1.StockPrice(new Date('4/26/2013'), 31.79),
    new stock_price_1.StockPrice(new Date('4/29/2013'), 32.61),
    new stock_price_1.StockPrice(new Date('4/30/2013'), 33.1),
    new stock_price_1.StockPrice(new Date('5/1/2013'), 32.72),
    new stock_price_1.StockPrice(new Date('5/2/2013'), 33.16),
    new stock_price_1.StockPrice(new Date('5/3/2013'), 33.49),
    new stock_price_1.StockPrice(new Date('5/6/2013'), 33.75),
    new stock_price_1.StockPrice(new Date('5/7/2013'), 33.31),
    new stock_price_1.StockPrice(new Date('5/8/2013'), 32.99),
    new stock_price_1.StockPrice(new Date('5/9/2013'), 32.66),
    new stock_price_1.StockPrice(new Date('5/10/2013'), 32.69),
    new stock_price_1.StockPrice(new Date('5/13/2013'), 33.03),
    new stock_price_1.StockPrice(new Date('5/14/2013'), 33.53),
    new stock_price_1.StockPrice(new Date('5/15/2013'), 33.85),
    new stock_price_1.StockPrice(new Date('5/16/2013'), 34.08),
    new stock_price_1.StockPrice(new Date('5/17/2013'), 34.87),
    new stock_price_1.StockPrice(new Date('5/20/2013'), 35.08),
    new stock_price_1.StockPrice(new Date('5/21/2013'), 34.85),
    new stock_price_1.StockPrice(new Date('5/22/2013'), 34.61),
    new stock_price_1.StockPrice(new Date('5/23/2013'), 34.15),
    new stock_price_1.StockPrice(new Date('5/24/2013'), 34.27),
    new stock_price_1.StockPrice(new Date('5/28/2013'), 35.02),
    new stock_price_1.StockPrice(new Date('5/29/2013'), 34.88),
    new stock_price_1.StockPrice(new Date('5/30/2013'), 35.03),
    new stock_price_1.StockPrice(new Date('5/31/2013'), 34.9),
    new stock_price_1.StockPrice(new Date('6/3/2013'), 35.59),
    new stock_price_1.StockPrice(new Date('6/4/2013'), 34.99),
    new stock_price_1.StockPrice(new Date('6/5/2013'), 34.78),
    new stock_price_1.StockPrice(new Date('6/6/2013'), 34.96),
    new stock_price_1.StockPrice(new Date('6/7/2013'), 35.67),
    new stock_price_1.StockPrice(new Date('6/10/2013'), 35.47),
    new stock_price_1.StockPrice(new Date('6/11/2013'), 34.84),
    new stock_price_1.StockPrice(new Date('6/12/2013'), 35),
    new stock_price_1.StockPrice(new Date('6/13/2013'), 34.72),
    new stock_price_1.StockPrice(new Date('6/14/2013'), 34.4),
    new stock_price_1.StockPrice(new Date('6/17/2013'), 35),
    new stock_price_1.StockPrice(new Date('6/18/2013'), 34.98),
    new stock_price_1.StockPrice(new Date('6/19/2013'), 34.59),
    new stock_price_1.StockPrice(new Date('6/20/2013'), 33.49),
    new stock_price_1.StockPrice(new Date('6/21/2013'), 33.27),
    new stock_price_1.StockPrice(new Date('6/24/2013'), 33.72),
    new stock_price_1.StockPrice(new Date('6/25/2013'), 33.67),
    new stock_price_1.StockPrice(new Date('6/26/2013'), 34.35),
    new stock_price_1.StockPrice(new Date('6/27/2013'), 34.62),
    new stock_price_1.StockPrice(new Date('6/28/2013'), 34.54),
    new stock_price_1.StockPrice(new Date('7/1/2013'), 34.36),
    new stock_price_1.StockPrice(new Date('7/2/2013'), 33.94),
    new stock_price_1.StockPrice(new Date('7/3/2013'), 34.01),
    new stock_price_1.StockPrice(new Date('7/5/2013'), 34.21),
    new stock_price_1.StockPrice(new Date('7/8/2013'), 34.33),
    new stock_price_1.StockPrice(new Date('7/9/2013'), 34.35),
    new stock_price_1.StockPrice(new Date('7/10/2013'), 34.7),
    new stock_price_1.StockPrice(new Date('7/11/2013'), 35.69),
    new stock_price_1.StockPrice(new Date('7/12/2013'), 35.67),
    new stock_price_1.StockPrice(new Date('7/15/2013'), 36.17),
    new stock_price_1.StockPrice(new Date('7/16/2013'), 36.27),
    new stock_price_1.StockPrice(new Date('7/17/2013'), 35.74),
    new stock_price_1.StockPrice(new Date('7/18/2013'), 35.44),
    new stock_price_1.StockPrice(new Date('7/19/2013'), 31.4),
    new stock_price_1.StockPrice(new Date('7/22/2013'), 32.01),
    new stock_price_1.StockPrice(new Date('7/23/2013'), 31.82),
    new stock_price_1.StockPrice(new Date('7/24/2013'), 31.96),
    new stock_price_1.StockPrice(new Date('7/25/2013'), 31.39),
    new stock_price_1.StockPrice(new Date('7/26/2013'), 31.62),
    new stock_price_1.StockPrice(new Date('7/29/2013'), 31.54),
    new stock_price_1.StockPrice(new Date('7/30/2013'), 31.85),
    new stock_price_1.StockPrice(new Date('7/31/2013'), 31.84),
    new stock_price_1.StockPrice(new Date('8/1/2013'), 31.67),
    new stock_price_1.StockPrice(new Date('8/2/2013'), 31.89),
    new stock_price_1.StockPrice(new Date('8/5/2013'), 31.7),
    new stock_price_1.StockPrice(new Date('8/6/2013'), 31.58),
    new stock_price_1.StockPrice(new Date('8/7/2013'), 32.06),
    new stock_price_1.StockPrice(new Date('8/8/2013'), 32.89),
    new stock_price_1.StockPrice(new Date('8/9/2013'), 32.7),
    new stock_price_1.StockPrice(new Date('8/12/2013'), 32.87),
    new stock_price_1.StockPrice(new Date('8/13/2013'), 32.23),
    new stock_price_1.StockPrice(new Date('8/14/2013'), 32.35),
    new stock_price_1.StockPrice(new Date('8/15/2013'), 31.79),
    new stock_price_1.StockPrice(new Date('8/16/2013'), 31.8),
    new stock_price_1.StockPrice(new Date('8/19/2013'), 31.39),
    new stock_price_1.StockPrice(new Date('8/20/2013'), 31.62),
    new stock_price_1.StockPrice(new Date('8/21/2013'), 31.61),
    new stock_price_1.StockPrice(new Date('8/22/2013'), 32.39),
    new stock_price_1.StockPrice(new Date('8/23/2013'), 34.75),
    new stock_price_1.StockPrice(new Date('8/26/2013'), 34.15),
    new stock_price_1.StockPrice(new Date('8/27/2013'), 33.26),
    new stock_price_1.StockPrice(new Date('8/28/2013'), 33.02),
    new stock_price_1.StockPrice(new Date('8/29/2013'), 33.55),
    new stock_price_1.StockPrice(new Date('8/30/2013'), 33.4),
    new stock_price_1.StockPrice(new Date('9/3/2013'), 31.88),
    new stock_price_1.StockPrice(new Date('9/4/2013'), 31.2),
    new stock_price_1.StockPrice(new Date('9/5/2013'), 31.23),
    new stock_price_1.StockPrice(new Date('9/6/2013'), 31.15),
    new stock_price_1.StockPrice(new Date('9/9/2013'), 31.66),
    new stock_price_1.StockPrice(new Date('9/10/2013'), 32.39),
    new stock_price_1.StockPrice(new Date('9/11/2013'), 32.74),
    new stock_price_1.StockPrice(new Date('9/12/2013'), 32.69),
    new stock_price_1.StockPrice(new Date('9/13/2013'), 33.03),
    new stock_price_1.StockPrice(new Date('9/16/2013'), 32.8),
    new stock_price_1.StockPrice(new Date('9/17/2013'), 32.93),
    new stock_price_1.StockPrice(new Date('9/18/2013'), 33.32),
    new stock_price_1.StockPrice(new Date('9/19/2013'), 33.64),
    new stock_price_1.StockPrice(new Date('9/20/2013'), 32.79),
    new stock_price_1.StockPrice(new Date('9/23/2013'), 32.74),
    new stock_price_1.StockPrice(new Date('9/24/2013'), 32.45),
    new stock_price_1.StockPrice(new Date('9/25/2013'), 32.51),
    new stock_price_1.StockPrice(new Date('9/26/2013'), 32.77),
    new stock_price_1.StockPrice(new Date('9/27/2013'), 33.27),
    new stock_price_1.StockPrice(new Date('9/30/2013'), 33.28),
    new stock_price_1.StockPrice(new Date('10/1/2013'), 33.58),
    new stock_price_1.StockPrice(new Date('10/2/2013'), 33.92),
    new stock_price_1.StockPrice(new Date('10/3/2013'), 33.86),
    new stock_price_1.StockPrice(new Date('10/4/2013'), 33.88),
    new stock_price_1.StockPrice(new Date('10/7/2013'), 33.3),
    new stock_price_1.StockPrice(new Date('10/8/2013'), 33.01),
    new stock_price_1.StockPrice(new Date('10/9/2013'), 33.07),
    new stock_price_1.StockPrice(new Date('10/10/2013'), 33.76),
    new stock_price_1.StockPrice(new Date('10/11/2013'), 34.13),
    new stock_price_1.StockPrice(new Date('10/14/2013'), 34.45),
    new stock_price_1.StockPrice(new Date('10/15/2013'), 34.49),
    new stock_price_1.StockPrice(new Date('10/16/2013'), 34.64),
    new stock_price_1.StockPrice(new Date('10/17/2013'), 34.92),
    new stock_price_1.StockPrice(new Date('10/18/2013'), 34.96),
    new stock_price_1.StockPrice(new Date('10/21/2013'), 34.99),
    new stock_price_1.StockPrice(new Date('10/22/2013'), 34.58),
    new stock_price_1.StockPrice(new Date('10/23/2013'), 33.76),
    new stock_price_1.StockPrice(new Date('10/24/2013'), 33.72),
    new stock_price_1.StockPrice(new Date('10/25/2013'), 35.73),
    new stock_price_1.StockPrice(new Date('10/28/2013'), 35.57),
    new stock_price_1.StockPrice(new Date('10/29/2013'), 35.52),
    new stock_price_1.StockPrice(new Date('10/30/2013'), 35.54),
    new stock_price_1.StockPrice(new Date('10/31/2013'), 35.41),
    new stock_price_1.StockPrice(new Date('11/1/2013'), 35.53),
    new stock_price_1.StockPrice(new Date('11/4/2013'), 35.94),
    new stock_price_1.StockPrice(new Date('11/5/2013'), 36.64),
    new stock_price_1.StockPrice(new Date('11/6/2013'), 38.18),
    new stock_price_1.StockPrice(new Date('11/7/2013'), 37.5),
    new stock_price_1.StockPrice(new Date('11/8/2013'), 37.78),
    new stock_price_1.StockPrice(new Date('11/11/2013'), 37.59),
    new stock_price_1.StockPrice(new Date('11/12/2013'), 37.36),
    new stock_price_1.StockPrice(new Date('11/13/2013'), 38.16),
    new stock_price_1.StockPrice(new Date('11/14/2013'), 38.02),
    new stock_price_1.StockPrice(new Date('11/15/2013'), 37.84),
    new stock_price_1.StockPrice(new Date('11/18/2013'), 37.2),
    new stock_price_1.StockPrice(new Date('11/19/2013'), 36.74),
    new stock_price_1.StockPrice(new Date('11/20/2013'), 37.08),
    new stock_price_1.StockPrice(new Date('11/21/2013'), 37.4),
    new stock_price_1.StockPrice(new Date('11/22/2013'), 37.57),
    new stock_price_1.StockPrice(new Date('11/25/2013'), 37.64),
    new stock_price_1.StockPrice(new Date('11/26/2013'), 37.35),
    new stock_price_1.StockPrice(new Date('11/27/2013'), 37.6),
    new stock_price_1.StockPrice(new Date('11/29/2013'), 38.13),
    new stock_price_1.StockPrice(new Date('12/2/2013'), 38.45),
    new stock_price_1.StockPrice(new Date('12/3/2013'), 38.31),
    new stock_price_1.StockPrice(new Date('12/4/2013'), 38.94),
    new stock_price_1.StockPrice(new Date('12/5/2013'), 38),
    new stock_price_1.StockPrice(new Date('12/6/2013'), 38.36),
    new stock_price_1.StockPrice(new Date('12/9/2013'), 38.71),
    new stock_price_1.StockPrice(new Date('12/10/2013'), 38.11),
    new stock_price_1.StockPrice(new Date('12/11/2013'), 37.61),
    new stock_price_1.StockPrice(new Date('12/12/2013'), 37.22),
    new stock_price_1.StockPrice(new Date('12/13/2013'), 36.69),
    new stock_price_1.StockPrice(new Date('12/16/2013'), 36.89),
    new stock_price_1.StockPrice(new Date('12/17/2013'), 36.52),
    new stock_price_1.StockPrice(new Date('12/18/2013'), 36.58),
    new stock_price_1.StockPrice(new Date('12/19/2013'), 36.25),
    new stock_price_1.StockPrice(new Date('12/20/2013'), 36.8),
    new stock_price_1.StockPrice(new Date('12/23/2013'), 36.62),
    new stock_price_1.StockPrice(new Date('12/24/2013'), 37.08),
    new stock_price_1.StockPrice(new Date('12/26/2013'), 37.44),
    new stock_price_1.StockPrice(new Date('12/27/2013'), 37.29),
    new stock_price_1.StockPrice(new Date('12/30/2013'), 37.29),
    new stock_price_1.StockPrice(new Date('12/31/2013'), 37.41),
    new stock_price_1.StockPrice(new Date('1/2/2014'), 37.16),
    new stock_price_1.StockPrice(new Date('1/3/2014'), 36.91),
    new stock_price_1.StockPrice(new Date('1/6/2014'), 36.13),
    new stock_price_1.StockPrice(new Date('1/7/2014'), 36.41),
    new stock_price_1.StockPrice(new Date('1/8/2014'), 35.76),
    new stock_price_1.StockPrice(new Date('1/9/2014'), 35.53),
    new stock_price_1.StockPrice(new Date('1/10/2014'), 36.04)
];
//# sourceMappingURL=ema-test-data.js.map