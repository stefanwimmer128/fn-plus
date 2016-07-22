# fn+ 0.3.0 JSDoc
<a name="fn"></a>

## fn
fn+ namespace

**Kind**: global constant  
**Since**: 0.1.0  

* [fn](#fn)
    * [.bind(func, args, [thisArg])](#fn.bind) ⇒ <code>function</code>
    * [.bindLast(func, args, [thisArg])](#fn.bindLast)
    * [.version()](#fn.version) ⇒ <code>String</code>

<a name="fn.bind"></a>

### fn.bind(func, args, [thisArg]) ⇒ <code>function</code>
Binds a function to predefined args

**Kind**: static method of <code>[fn](#fn)</code>  
**Returns**: <code>function</code> - Bound function  
**Since**: 0.3.0  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | Function to bind |
| args | <code>Array</code> | Args to predefine |
| [thisArg] | <code>Object</code> | this-Keyword to use |

<a name="fn.bindLast"></a>

### fn.bindLast(func, args, [thisArg])
Binds a function to predefined args as last args

**Kind**: static method of <code>[fn](#fn)</code>  
**Since**: 0.3.0  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | Function to bind |
| args | <code>Array</code> | Args to predefine |
| [thisArg] | <code>Object</code> | this-Keyword to use |

<a name="fn.version"></a>

### fn.version() ⇒ <code>String</code>
Get fn+ version

**Kind**: static method of <code>[fn](#fn)</code>  
**Returns**: <code>String</code> - fn+ version  
**Since**: 0.1.0  
