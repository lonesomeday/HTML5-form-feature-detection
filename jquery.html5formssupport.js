/*

jQuery HTML5 form feature support plugin

This plugin is adapted from diveintohtml5.org <http://diveintohtml5.org> and the code there.

It adds the $.support.input and $.support.inputtypes objects to $.support to allow detection of HTML5 features in the browser. 

*/
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
