import { DirectiveOptions } from 'vue'

const directive: DirectiveOptions = {
    
        inserted: function (el) {
          el.focus()
        }
      
};

export default directive;