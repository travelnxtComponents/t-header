
# Header Components


### Component Signature

```html
    <t-header data-options = [[options]]  user=[[user]]>
    </t-header>
```


### Header Options

```javascript

    options = {

        // menu items 
        menus :[
            
            // menu item with url
            {
                name : 'Hotel',
                url : '/hotel'
            },

            // menu item with event
            {
                name : 'Activity',
                eventName : 'activity_option_selected'
            }
        ],

        topBar : {
            registrationLink : {
                name : 'Register',
                url:'/register'
            },
            login : {
                name : 'Login',
                url : '/login'
            },
            profile :{
                name : 'Profile',
                url : '/profile'
            },
            mytrips : {
                name : 'My Trips',
                url : '/mytrips'
            } 
        },

        email : "enquiry@travelnxt.com",
        phone : "1800-948-4455",

        languages : [
            {
                name : "United State(English)",
                code : "en-us"
            }
        ],

        logo : "url",

        allowCurrencies : [
            {
                name : "US Doller",
                value :"USD"
            }
        ]


        

        event : {
            userSearchEventName : 'user_search_clicked',
            cartIconClicked : 'cart_icon_clicked'
        }

    };



    // User attribute

    // if null, then consider user is not login yet.
    user = {
        name : "John doe",
        point : '5000pt'
    }

```
## Test Cases
