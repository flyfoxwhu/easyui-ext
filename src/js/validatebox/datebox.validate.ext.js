/**
 * author : MurphyL
 * email: im@cijian.us
 * date : 2013-12-17
 */
$.extend($.fn.validatebox.defaults.rules, {
    isAfter: {
        validator: function(value, param) {
            if (param.length < 2) {
                this.message = "Invalid parameters!";
                return false;
            }
            var dateFirst,
                dateSecond = $.fn.datebox.defaults.parser(value);
            if (!$.trim(param[0]).indexOf('@')) {
                dateFirst = new Date();
            } else {
                dateFirst = $(param[0]).datebox('getValue');
            }
            if (dateFirst) {
                dateFirst = $.fn.datebox.defaults.parser(dateFirst);
                // console.log(dateFirst, dateSecond)
                if (dateFirst > dateSecond) {
                    return false;
                }
            }
            return true;
        },
        message: 'The date is not later than "{1}"'
    }
});