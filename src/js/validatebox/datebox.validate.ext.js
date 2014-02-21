/**
 * author : MurphyL
 * email: im@cijian.us
 * date : 2013-12-17
 */
$.extend($.fn.validatebox.defaults.rules, { 
    isAfter: { 
        validator: function(value, param){ 
			var dateA = $.fn.datebox.defaults.parser(value);
			var dateB = $.fn.datebox.defaults.parser($(param[0]).datebox('getValue'));
			return dateA>new Date() && dateA>dateB;
        }, 
        message: 'The date is not later than today and B' 
    } ,
    isLaterToday: { 
        validator: function(value, param){ 
			var date = $.fn.datebox.defaults.parser(value);
			return date>new Date(); 
        }, 
        message: 'The date is not later than today' 
    }
});

