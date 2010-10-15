(function($){
    $.extend($.support, (function(){
        var input = document.createElement('input'),
            inputtypes = 'search number range color tel url email date month week time datetime datetime-local',
            inputattrs = 'autocomplete autofocus list placeholder max min multiple pattern required step';
        
        return {
            inputtypes: (function(){
                var types = inputtypes.split(' '),
                    ret = {};
                for (i = 0, j = types.length; i < j; i++) {
                    input.setAttribute('type', types[i]);
                    ret[types[i]] = (input.type !== 'text');
                }
                return ret;
            })(),
            
            input: (function(){
                var attrs = inputattrs.split(' '),
                    ret = {};
                    
                for (i = 0, j = attrs.length; i < j; i++) {
                    ret[attrs[i]] = !!(attrs[i] in input);
                }
                return ret;
            })()
        };
    })());
})(jQuery);
/*(function(d){d.extend(d.support,function(){var c=document.createElement("input");return{inputtypes:function(){var a="search number range color tel url email date month week time datetime datetime-local".split(" "),b={};i=0;for(j=a.length;i<j;i++){c.setAttribute("type",a[i]);b[a[i]]=c.type!=="text"}return b}(),input:function(){var a="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),b={};i=0;for(j=a.length;i<j;i++)b[a[i]]=!!(a[i]in c);return b}()}}())})(jQuery);*/
